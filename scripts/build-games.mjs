
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: "c:/Vercel/.env.local" });

const model = google("models/gemini-2.0-flash");
const DESIGNS_FILE = "c:/Vercel/src/generated_content/15_game_designs.json";
const OUT_DIR = "c:/Vercel/src/components/generated";

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

async function buildGame(design) {
    const componentName = design.game_name.replace(/\s+/g, ''); // Simple sanitization
    const debugPath = path.join(OUT_DIR, `${componentName}.tsx`);
    
    if (fs.existsSync(debugPath)) {
        console.log(`Skipping existing: ${componentName}`);
        return;
    }

    console.log(`Building Game: ${componentName} for ${design.blog_topic}`);

    const prompt = `
        You are an expert React game developer building "lightweight, addictive" mini-games.
        
        DESIGN:
        Name: ${design.game_name}
        Topic: ${design.blog_topic}
        Mechanic: ${design.mechanic_description}
        Specs: ${design.component_specs}
        
        TASK:
        Write the COMPLETE, working, error-free React Component for this game.
        
        TECHNICAL CONSTRAINTS:
        1. File Name: ${componentName}.tsx
        2. Framework: Next.js 14 / React 18
        3. Styling: Tailwind CSS (Use 'bg-slate-900', 'text-teal-400', 'border-slate-700' etc. to match Dark Navy aesthetic).
        4. Animation: framer-motion (import { motion, AnimatePresence } from 'framer-motion').
        5. Icons: lucide-react (import { Play, RotateCcw, ... } from 'lucide-react').
        6. NO OTHER LIBARIES. Standalone state logic only.
        7. Must be INTERACTIVE (click, drag, type).
        8. Include "use client" at top.
        
        Output ONLY the code block.
    `;

    const { text } = await generateText({ model, prompt });
    const code = text.replace(/```tsx/g, "").replace(/```typescript/g, "").replace(/```/g, "").trim();
    
    fs.writeFileSync(debugPath, code);
    console.log(`✅ Built ${componentName}.tsx`);
}

async function main() {
    if (!fs.existsSync(DESIGNS_FILE)) {
        console.error("Designs file not found!");
        return;
    }
    
    const designs = JSON.parse(fs.readFileSync(DESIGNS_FILE, "utf8"));
    console.log(`Found ${designs.length} designs. Starting build...`);
    
    // Build in chunks to avoid rate limits
    for (const design of designs) {
        await buildGame(design);
    }
}

main();
