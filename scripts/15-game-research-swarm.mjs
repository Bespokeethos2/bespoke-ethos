
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

// Load .env.local
dotenv.config({ path: "c:/Vercel/.env.local" });

const API_KEY = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GOOGLE_API_KEY;
if (!API_KEY) { 
    // Fallback: Try reading directly if dotenv fails or env var not set
    try {
        const envContent = fs.readFileSync("c:/Vercel/.env.local", "utf8");
        const match = envContent.match(/GOOGLE_GENERATIVE_AI_API_KEY=(.*)/);
        if (match) process.env.GOOGLE_GENERATIVE_AI_API_KEY = match[1].trim();
    } catch(e) {}
}

if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) { console.error("Missing Gemini API Key in .env.local"); process.exit(1); }

const model = google("models/gemini-2.0-flash");
const OUTPUT_FILE = "c:/Vercel/src/generated_content/15_game_designs.json";

// The 12 Blog Topics (4 Existing + 8 New)
const TOPICS = [
    // NEW (8)
    "Rust Belt Renaissance", "Stop Burning Cash/Admin", "24/7 Sales Agent", 
    "NGLCC Diversity ROI", "No-Code Myth", "Logistics Case Study", 
    "Gen AI vs Predictive", "Future Proofing 2030",
    // EXISTING (Assumed 4)
    "Why Automation Fails", "The Human in the Loop", "AI Ethics", "Getting Started"
];

// Helper to read cached research
function getResearchContext() {
    try {
        const researchDir = "c:/Vercel/Sprint-Reference";
        if (!fs.existsSync(researchDir)) return "";
        
        const files = fs.readdirSync(researchDir).filter(f => f.endsWith('.md'));
        let context = "";
        // Read top 3 relevant files (simulating 3 sources)
        for (const file of files.slice(0, 3)) {
             context += fs.readFileSync(path.join(researchDir, file), "utf8").slice(0, 2000) + "\n...\n";
        }
        return context;
    } catch (e) { return ""; }
}

const RESEARCH_CONTEXT = getResearchContext();

// Split into 4 streams
const STREAMS = [
    TOPICS.slice(0, 3),
    TOPICS.slice(3, 6),
    TOPICS.slice(6, 9),
    TOPICS.slice(9, 12)
];

async function researchStream(id, topics) {
    console.log(`[Stream ${id}] Researching games for: ${topics.join(", ")}`);
    
    const prompt = `
        CONTEXT FROM ROBUST RESEARCH (Synthesis of multiple sources):
        ${RESEARCH_CONTEXT}

        TASK:
        Design a unique, lightweight, addictive React/Framer Motion mini-game for EACH of these blog topics:
        ${topics.join(", ")}
        
        The game must be based on the RESEARCH provided above.
        
        Constraints:
        1. **Relevance:** The game must teach the core lesson of the blog.
        2. **Style:** Dark Navy/Teal/Coral, "Bespoke Ethos" aesthetic.
        3. **Simplicity:** Must be implementable in a single .tsx file.
        4. **Fun:** Use physics, sliders, particles, or satisfying clicks.
        
        Return JSON format:
        [
            { 
                "blog_topic": "...", 
                "game_name": "...", 
                "hook_line": "...", 
                "mechanic_description": "...",
                "component_specs": "..."
            }
        ]
    `;
    
    const { text } = await generateText({ model, prompt: prompt + "\nReturn strictly valid JSON array." });
    
    try {
        const clean = text.replace(/```json/g, "").replace(/```/g, "").trim();
        return JSON.parse(clean);
    } catch (e) {
        console.error(`[Stream ${id}] JSON Parse Error`, e);
        return [];
    }
}

async function main() {
    console.log("🚀 Launching 4-Stream Game Research Swarm (With Context)...");
    
    const results = await Promise.all(STREAMS.map((topics, i) => researchStream(i + 1, topics)));
    const flatResults = results.flat();
    
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(flatResults, null, 2));
    console.log(`✅ Designs Generated for ${flatResults.length} Games.`);
    console.log(`Saved to ${OUTPUT_FILE}`);
}

main();
