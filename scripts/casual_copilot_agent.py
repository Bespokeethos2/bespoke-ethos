import argparse
import json
import os
import re
from datetime import datetime

import requests
import toml


def load_config(path: str) -> dict:
    if not os.path.exists(path):
        raise FileNotFoundError(f"Config not found: {path}")
    return toml.load(path)


def normalize_mcp_entry(entry: dict) -> dict | None:
    if not isinstance(entry, dict):
        return None
    name = entry.get("name")
    prompt = entry.get("prompt")
    if not prompt:
        return None
    return {"name": name, "prompt": prompt}


def merge_mcps(primary: list, secondary: list) -> list:
    merged = []
    seen = set()

    def key_for(item: dict) -> str:
        name = (item.get("name") or "").strip().lower()
        prompt = (item.get("prompt") or "").strip().lower()
        return name or prompt

    for source in (primary, secondary):
        for raw in source:
            item = normalize_mcp_entry(raw)
            if not item:
                continue
            key = key_for(item)
            if not key or key in seen:
                continue
            seen.add(key)
            merged.append(item)

    return merged


def maybe_merge_mcps(config: dict, merge_config: dict | None) -> tuple[list, int]:
    primary = config.get("mcps", [])
    secondary = merge_config.get("mcps", []) if merge_config else []
    merged = merge_mcps(primary, secondary)
    added = max(0, len(merged) - len(primary))
    return merged, added


def build_plugins_context() -> str:
    registry_path = os.path.join("src", "mcp", "plugins", "registry.ts")
    if not os.path.exists(registry_path):
        return "No plugin registry found or no plugins discovered."

    with open(registry_path, encoding="utf-8") as reg_file:
        reg_content = reg_file.read()

    plugin_pattern = re.compile(r"['\"]([\\w\\-]+)['\"]\\s*:\\s*([\\w]+)", re.MULTILINE)
    plugin_names = []
    plugin_descriptions = {}

    for match in plugin_pattern.finditer(reg_content):
        plugin_name = match.group(1)
        plugin_class = match.group(2)
        plugin_names.append(plugin_name)
        desc_pattern = re.compile(
            r"class\\s+" + re.escape(plugin_class) + r"\\s*.*?{(?:.|\\n)*?/\\*\\*(.*?)\\*/",
            re.MULTILINE,
        )
        desc_match = desc_pattern.search(reg_content)
        desc = desc_match.group(1).strip() if desc_match else ""
        plugin_descriptions[plugin_name] = desc if desc else "(No description found)"

    if not plugin_names:
        return "No plugin registry found or no plugins discovered."

    parts = [f"- {name}: {plugin_descriptions.get(name)}" for name in plugin_names]
    return f"Plugins discovered in MCP registry ({registry_path}):\n" + "\n".join(parts)


def send_mcp_prompt(prompt: str, api_token: str, endpoint_url: str, model: str, context: str) -> dict:
    system_content = "You are Copilot, a helpful developer agent. Here are our MCP plugins:\n" + (
        context or ""
    )
    data = {
        "model": model,
        "messages": [
            {"role": "system", "content": system_content},
            {"role": "user", "content": prompt},
        ],
    }
    print(f"\nMCP Task: {prompt}")
    try:
        response = requests.post(
            endpoint_url,
            headers={"Authorization": f"Bearer {api_token}", "Content-Type": "application/json"},
            json=data,
            timeout=60,
        )
        output = response.json()
        ai_reply = None
        if "choices" in output and output["choices"]:
            ai_reply = output["choices"][0].get("message", {}).get("content") or output["choices"][0].get("text")
        elif "output" in output:
            ai_reply = output["output"]
        else:
            ai_reply = json.dumps(output, indent=2)
        print(f"Copilot: {ai_reply}\n")
        return {"prompt": prompt, "reply": ai_reply}
    except Exception as exc:
        print(f"Error: {exc}\n")
        return {"prompt": prompt, "reply": None, "error": str(exc)}


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--config", default=os.environ.get("CASUAL_COPILOT_CONFIG", "config.toml"))
    parser.add_argument("--merge-config", default=os.environ.get("CASUAL_COPILOT_MERGE_CONFIG"))
    parser.add_argument("--write-merged", action="store_true")
    parser.add_argument("--merged-output", default="config.merged.toml")
    args = parser.parse_args()

    print(
        "Copilot agent starting at "
        + datetime.now().strftime("%A, %Y-%m-%d %H:%M")
        + f"\nConfig: {args.config}"
    )

    config = load_config(args.config)
    merge_config = None
    merge_path = args.merge_config
    if not merge_path and os.path.exists("config.current.toml"):
        merge_path = "config.current.toml"
    if merge_path and os.path.exists(merge_path):
        merge_config = load_config(merge_path)

    mcps, added = maybe_merge_mcps(config, merge_config)
    if added:
        print(f"Merged {added} additional MCP(s) from {merge_path}.")
    config["mcps"] = mcps

    if args.write_merged and merge_config:
        with open(args.merged_output, "w", encoding="utf-8") as f:
            toml.dump(config, f)
        print(f"Wrote merged config to {args.merged_output}.")

    api_token = config["ai_gateway"]["api_token"]
    endpoint_url = config["ai_gateway"]["endpoint_url"]
    model = config["ai_gateway"].get("model", "gpt-5.2-turbo")

    plugins_context = build_plugins_context()
    results = {}

    for mcp in mcps:
        extra_context = (
            plugins_context
            if "plugin" in (mcp.get("name", "") or "").lower()
            or "plugin" in (mcp.get("prompt", "") or "").lower()
            else None
        )
        res = send_mcp_prompt(mcp["prompt"], api_token, endpoint_url, model, extra_context or "")
        results[mcp.get("name") or mcp["prompt"]] = res

    with open("copilot_mcp_outputs.json", "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    print("All done. Results saved to copilot_mcp_outputs.json.")


if __name__ == "__main__":
    main()
