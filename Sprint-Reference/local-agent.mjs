#!/usr/bin/env node

import path from "node:path";
import { readFile, writeFile, stat } from "node:fs/promises";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

async function main() {
  const [, , fileArg, ...rest] = process.argv;
  const instruction = rest.join(" ").trim();

  if (!fileArg) {
    console.error(
      "Usage: pnpm agent:edit <relative/path/to/file> \"instruction for Agent\"",
    );
    process.exit(1);
  }

  const filePath = fileArg;
  const absPath = path.resolve(process.cwd(), filePath);

  try {
    const s = await stat(absPath);
    if (!s.isFile()) {
      console.error(`Not a file: ${filePath}`);
      process.exit(1);
    }
  } catch {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  const gatewayUrl = (process.env.AI_GATEWAY_URL ?? "").trim();
  const gatewayKey = (process.env.AI_GATEWAY_API_KEY ?? "").trim();
  const directKey = (process.env.OPENAI_API_KEY ?? "").trim();

  const useGateway = Boolean(gatewayUrl && gatewayKey);
  const apiKey = useGateway ? gatewayKey : directKey;

  if (!apiKey) {
    console.error(
      "Missing AI key. Set AI_GATEWAY_API_KEY (preferred) or OPENAI_API_KEY in .env.local.",
    );
    process.exit(1);
  }

  const client = new OpenAI({
    apiKey,
    baseURL: useGateway ? gatewayUrl : undefined,
    defaultHeaders: {
      "x-prompt-id": "pmpt_6917f65a884c8197b3dbde116161d7690be2e9c70148404b",
    },
  });

  const original = await readFile(absPath, "utf8");

  const systemPrompt = [
    "You are the Bespoke Ethos Intelligence Agent, a senior automation and full-stack engineer working on the Bespoke Ethos codebase.",
    "You prioritize small, production-ready changes, and you understand this project runs on Next.js 16 / React 19 on Vercel.",
    "Your canonical instructions are stored in prompt `pmpt_6917f65a884c8197b3dbde116161d7690be2e9c70148404b` in the OpenAI UI.",
    "For this tool, you act as a precise code editor:",
    "- You receive a single file and a short instruction.",
    "- You return the complete updated file content, ready to be written to disk.",
    "- You do not include markdown fences, commentary, or explanations.",
    "- You keep surrounding style and conventions consistent with the existing file.",
  ].join(" ");

  const userPrompt = [
    `You are editing the file: \`${filePath}\` in the Bespoke Ethos repository.`,
    "",
    "Goal / instruction:",
    instruction || "(Refine and improve the implementation while preserving behavior.)",
    "",
    "Current file contents:",
    "```",
    original,
    "```",
    "",
    "Respond with ONLY the full new file content. No backticks, no diff, no explanations.",
  ].join("\n");

  console.log(
    `[Agent] Editing ${filePath} using ${
      useGateway ? "Vercel AI Gateway (gpt-4.1)" : "OpenAI direct (gpt-4.1)"
    }...`,
  );

  const completion = await client.chat.completions.create({
    model: "gpt-4.1",
    temperature: 0.2,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
  });

  const message = completion.choices[0]?.message?.content;
  if (!message || typeof message !== "string") {
    console.error(
      "Agent did not return content. Check API keys, models, or logs.",
    );
    process.exit(1);
  }

  const updated = message.trimStart();

  await writeFile(absPath, updated, "utf8");

  console.log(
    `[Agent] Updated ${filePath} (${original.length} -> ${updated.length} chars).`,
  );
}

main().catch((error) => {
  console.error("[Agent CLI] Error:", error);
  process.exit(1);
});

