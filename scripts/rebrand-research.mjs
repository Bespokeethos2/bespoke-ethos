
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: "c:/Vercel/.env.local" });

const model = google("models/gemini-2.0-flash");
const OUTPUT_FILE = "c:/Vercel/src/generated_content/rebrand_strategy.json";

async function runRebrand() {
    console.log("🎨 Launching Brand Identity Swarm...");
    
    const prompt = `
        The client feels "Bespoke Ethos" doesn't scream "AI Consulting".
        They want a memorable, punchy brand that fits:
        - Cleveland / Rust Belt Renaissance
        - High-tech but Human ("Gay Men's Field Guide" voice)
        - Automation, Intelligence, Speed
        
        TASK:
        1. Propose 3 Brand Names (e.g. "IronMind", "ClevAI", "Ethos Automata").
        2. Describe a LOGO for the winner (Minimalist, dark navy/teal).
        3. Provide a Slogan.
        
        Return JSON:
        {
            "candidates": [
                { "name": "...", "slogan": "...", "logo_prompt": "..." }
            ],
            "recommendation": "..."
        }
    `;
    
    const { text } = await generateText({ model, prompt });
    const json = text.replace(/```json/g, "").replace(/```/g, "").trim();
    
    fs.writeFileSync(OUTPUT_FILE, json);
    console.log(`✅ Rebrand Strategy Saved to ${OUTPUT_FILE}`);
}

runRebrand();
