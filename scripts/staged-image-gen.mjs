
import { google } from "@ai-sdk/google";
import { experimental_generateImage as generateImage } from "ai";
import fs from "fs";
import path from "path";

const API_KEY = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
if (!API_KEY) { console.error("Missing Gemini API Key"); process.exit(1); }

// Nano Banana Model (Imagen 3 via Gemini)
const model = google.image("imagen-3.0-generate-001");

const ASSETS_DIR = "c:/Vercel/public/assets/generated";
const LOG_FILE = "c:/Vercel/src/generated_content/image_gen_log.txt";

// Base Style Prompt - The "Unify Site Style" requirement
const STYLE_SUFFIX = ", Style: Corporate Memphis met Dark Mode. Primary colors: Dark Navy (#0a192f) and Teal (#64ffda). Cyberpunk but clean. High contrast. 3D isometric or flat vector. No text.";

// List of all 32 required images (Headers + Thumbnails)
// Simplified list for the script
const IMAGES = [
    { name: "rust-belt", prompt: "Cleveland skyline merging with neural networks" },
    { name: "admin-costs", prompt: "Furnace burning paper money, turning into digital code" },
    { name: "ai-sales", prompt: "Robot hand shaking human hand, glowing connections" },
    { name: "nglcc", prompt: "Diversity prisim reflecting light into growth charts" },
    { name: "no-code", prompt: "Jigsaw puzzle pieces fitting together perfectly" },
    { name: "logistics", prompt: "Trucks on a map moving in perfect sync lines" },
    { name: "gen-vs-pred", prompt: "Crystal ball vs glowing brain comparison" },
    { name: "future-2030", prompt: "Futuristic city with flying cars and green parks" },
    { name: "automation-fails", prompt: "Broken gears being fixed by glowing light" },
    { name: "human-loop", prompt: "Human pilot in a mech suit cockpit" },
    { name: "ai-ethics", prompt: "Scales of justice made of fiber optic cables" },
    { name: "getting-started", prompt: "Rocket launch pad with simple start button" },
    // Service Cards
    { name: "service-consult", prompt: "Consultant pointing at holographic whiteboard" },
    { name: "service-skyway", prompt: "Bridge connecting two digital islands" },
    { name: "service-consensus", prompt: "Group of nodes reaching alignment" },
    { name: "service-cadence", prompt: "Metronome ticking in sync with data stream" }
];

// Sharding for parallel execution
const SHARD = process.argv.includes("--shard=2") ? 2 : 1;
const MY_IMAGES = IMAGES.filter((_, i) => (SHARD === 1 ? i % 2 === 0 : i % 2 !== 0));

async function generate(item) {
    const fileName = `blog-${item.name}-header.webp`;
    const filePath = path.join(ASSETS_DIR, fileName);
    
    if (fs.existsSync(filePath)) {
        console.log(`[Shard ${SHARD}] Skipping existing: ${fileName}`);
        return;
    }

    console.log(`[Shard ${SHARD}] Generating: ${fileName}`);
    
    try {
        const { image } = await generateImage({
            model,
            prompt: item.prompt + STYLE_SUFFIX,
            aspectRatio: "16:9"
        });
        
        const buffer = Buffer.from(image.base64, 'base64');
        fs.writeFileSync(filePath, buffer);
        fs.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] Generated ${fileName}\n`);
        console.log(`✅ Saved ${fileName}`);
        
    } catch (e) {
        if (e.message.includes("429")) {
            console.warn(`[Shard ${SHARD}] 429 Quota Exceeded. Sleeping 60s...`);
            await new Promise(r => setTimeout(r, 60000));
            return generate(item); // Retry
        }
        console.error(`[Shard ${SHARD}] Error:`, e.message);
    }

    // Rate Limit Nap
    await new Promise(r => setTimeout(r, 15000));
}

async function main() {
    console.log(`Starting Image Gen Shard ${SHARD}...`);
    for (const item of MY_IMAGES) {
        await generate(item);
        // Also gen thumbnail? For now just header to save quota.
    }
}

main();
