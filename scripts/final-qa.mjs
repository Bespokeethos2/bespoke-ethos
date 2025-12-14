
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: "c:/Vercel/.env.local" });

// Utilizing the highest reasoning model available
const model = google("models/gemini-1.5-pro"); 

const BLOG_DIR = "c:/Vercel/src/app/blog";
const HOME_PAGE = "c:/Vercel/src/app/page.tsx";

async function runAudit() {
    console.log("🧐 Launching High-Reasoning Copy Audit...");

    const homeContent = fs.readFileSync(HOME_PAGE, "utf-8");
    const blogFiles = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".mdx"));
    const randomBlog = blogFiles[Math.floor(Math.random() * blogFiles.length)];
    const blogContent = fs.readFileSync(path.join(BLOG_DIR, randomBlog), "utf-8");

    const prompt = `
        You are the Editor-in-Chief of Bespoke Ethos.
        Voice: "Gay Men's Field Guide" (Witty, Authority, High-Contrast, Human).
        Core Value: "Deep Context" (Not generic AI).

        AUDIT THESE 2 SAMPLES:
        
        === HOMEPAGE ===
        ${homeContent.substring(0, 2000)}...

        === RANDOM BLOG (${randomBlog}) ===
        ${blogContent.substring(0, 2000)}...

        TASK:
        1. Rate Voice Alignment (1-10).
        2. Identify "AI Slop" (Generic phrases like "In the ever-evolving landscape").
        3. If < 9/10, rewrite the weak sections.
        
        OUTPUT: JSON { "score": 9, "rewrites": [...] }
    `;

    const { text } = await generateText({ model, prompt });
    console.log("📝 Audit Results:\n", text);
    
    // Save report
    fs.writeFileSync("c:/Vercel/src/generated_content/qa_report.md", text);
}

runAudit();
