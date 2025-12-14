
import { google } from "@ai-sdk/google";
import { experimental_generateImage as generateImage } from "ai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: "c:/Vercel/.env.local" });

const TARGET_DIR = "c:/Vercel/public/assets/generated";
if (!fs.existsSync(TARGET_DIR)) fs.mkdirSync(TARGET_DIR, { recursive: true });

async function unleashGen() {
    console.log("🚀 Launching UNLIMITED PARALLEL Image Generation...");
    
    const designFile = "c:/Vercel/src/generated_content/15_game_designs.json";
    let designs = [];
    if (fs.existsSync(designFile)) {
        designs = JSON.parse(fs.readFileSync(designFile, "utf-8"));
    } else {
        designs = Array(15).fill({ name: "Concept", image_prompt: "Abstract architectural landscape, dark navy/coral" });
    }

    const model = google.image("imagen-3.0-generate-001");
    // const model = google.image("imagegeneration@006"); 

    const promises = designs.map(async (item, i) => {
        const itemName = item.game_name || `Game-${i}`;
        const fileName = `generated-game-${itemName.replace(/\s+/g, '-').toLowerCase()}.png`;
        
        // Construct Prompt from available fields
        const specificPrompt = `${item.blog_topic} concept art. ${item.component_specs}. Dark Navy background, Teal and Coral lighting, Abstract Architectural 3D Render, High Contrast, Octane Render.`;

        console.log(`⚡ Spawning Gen: ${itemName}`);
        
        try {
            const { image } = await generateImage({
                model,
                prompt: specificPrompt,
                n: 1,
                size: "1024x1024",
                providerOptions: {
                    google: {
                        vertex: { project: process.env.GOOGLE_CLOUD_PROJECT } 
                    }
                }
            });
            
            const buffer = Buffer.from(image.base64, "base64");
            fs.writeFileSync(path.join(TARGET_DIR, fileName), buffer);
            console.log(`✅ SAVED: ${fileName}`);
        } catch (error) {
            console.error(`❌ ERROR (${itemName}): ${error.message}`);
        }
    });

    await Promise.all(promises);
    console.log("🏁 Batch Complete.");
}

unleashGen();
