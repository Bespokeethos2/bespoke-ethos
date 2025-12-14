
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: "c:/Vercel/.env.local" });

const model = google("models/gemini-2.0-flash");
const OUTPUT_FILE = "c:/Vercel/src/generated_content/art_direction_bible.md";

const TARGETS = [
    "Huge Inc", "Pentagram", "Work & Co", "Instrument", 
    "OpenAI Brand", "DeepMind Visuals", "Anthropic", 
    "Stripe Design", "Linear", "Vercel Design", 
    "IDEO", "Frog Design", "Collins", 
    "Basic/Dept", "Ueno", "Active Theory"
];

async function runArtSprint() {
    console.log("🎨 Launching 16-Page Art Research Sprint...");
    
    // Simulate researching these high-end agencies
    const prompt = `
        You are a World-Class Art Director.
        
        TASK:
        Conduct a simulated visual audit of these 16 top-tier design/tech brands:
        ${TARGETS.join(", ")}
        
        GOAL:
        Define a visual identity for "Bespoke Ethos" that is:
        1. **NOT CLICHÉ:** No blue circuit boards, no robots shaking hands, no binary code rain.
        2. **Human & Organic:** Use textures, grain, odd shapes, or architectural lines.
        3. **High Contrast:** Dark Navy (#0a192f) base, with "human" accents (Coral, warm Teal).
        
        OUTPUT SECTIONS:
        - **Logo Direction:** Shape, weight, metaphor (e.g. "The Imperfect Circle").
        - **CTA Design:** Button shapes, hover states (e.g. "Sharp corners, slide animation").
        - **Typography:** Pairing suggestions (e.g. "Space Grotesk + Inter").
        - **Image Style:** Exact prompt modifiers to get "Abstract Architectural" results.
        
        Return a robust MARKDOWN Design Bible.
    `;
    
    const { text } = await generateText({ model, prompt });
    
    fs.writeFileSync(OUTPUT_FILE, text);
    console.log(`✅ Art Direction Bible Saved to ${OUTPUT_FILE}`);
}

runArtSprint();
