# MCP Versions (Pinned)

Use these pinned versions everywhere MCP is invoked via npx. Do not store secrets in the repo.

## Pinned versions

- mcp-remote@0.1.37
- exa-mcp-server@3.1.3
- @modelcontextprotocol/server-filesystem@2025.12.18
- @modelcontextprotocol/server-memory@2025.11.25
- @modelcontextprotocol/server-github@2025.4.8
- @modelcontextprotocol/server-postgres@0.6.2 (only if needed)

## Exa hosted MCP (preferred)

Hosted endpoint:

https://mcp.exa.ai/mcp?tools=web_search_exa,get_code_context_exa

PowerShell (current session only):

```pwsh
$env:EXA_API_KEY = "<set-locally>"
```

Codex user config (example location: C:\Users\conta\.codex\config.toml):

```toml
[mcp_servers.exa]
command = "npx"
args = ["-y", "mcp-remote@0.1.37", "https://mcp.exa.ai/mcp?tools=web_search_exa,get_code_context_exa"]
env = { EXA_API_KEY = "set-locally" }
```

Notes:
- Do not embed secrets in URLs or committed files.
- Keep `EXA_API_KEY` in your local environment or your personal (non-repo) config.

## Pinned npx examples

```pwsh
npx -y mcp-remote@0.1.37 "https://mcp.exa.ai/mcp?tools=web_search_exa,get_code_context_exa"
```

```pwsh
npx -y @modelcontextprotocol/server-filesystem@2025.12.18 "C:\vercel"
```

```pwsh
npx -y @modelcontextprotocol/server-memory@2025.11.25
```

```pwsh
npx -y @modelcontextprotocol/server-github@2025.4.8
```

```pwsh
npx -y @modelcontextprotocol/server-postgres@0.6.2
```

Optional local Exa server (not required for hosted MCP):

```pwsh
npx -y exa-mcp-server@3.1.3
```