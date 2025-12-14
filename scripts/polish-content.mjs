
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: "c:/Vercel/.env.local" });

const model = google("models/gemini-2.0-flash");
const BLOG_DIR = "c:/Vercel/src/app/blog";

async function polishFile(filePath) {
    const content = fs.readFileSync(filePath, "utf8");
    if (content.includes("POLISHED_BY_AGENT")) return; // Skip if done

    console.log(`Polishing: ${path.basename(filePath)}`);

    const prompt = `
        You are the Editor-in-Chief of "Bespoke Ethos" (formerly Gay Men's Field Guide).
        Your voice is: Witty, authoritative, high-contrast, specific, and slightly irreverent but professional.
        
        CRITIQUE THIS BLOG POST:
        ${content}
        
        TASK:
        Rewrite the text to sound "Human, Witty, and Aesthetic."
        - REMOVE generic AI phrases: "In today's digital landscape", "Unlock the potential", "Harness the power".
        - ADD specific metaphors (e.g., "Like a drag queen in a library, volume is everything but nuance is key").
        - ENSURE the 'Interactive Container' placeholder is preserved.
        
        Return the FULL MDX content.
    `;

    try {
        const { text } = await generateText({ model, prompt });
        const cleanText = text.replace(/```mdx/g, "").replace(/```/g, "").trim();
        
        // Add marker
        const finalContent = cleanText + "\n\n{/* POLISHED_BY_AGENT */}";
        fs.writeFileSync(filePath, finalContent);
        console.log(`✨ Polished ${path.basename(filePath)}`);
    } catch(e) {
        console.error(`Failed to polish ${path.basename(filePath)}`, e);
    }
}

async function main() {
    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".mdx") || f.endsWith(".md"));
    for (const file of files) {
        await polishFile(path.join(BLOG_DIR, file));
    }
}

main();
