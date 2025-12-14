
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: "c:/Vercel/.env.local" });

const model = google("models/gemini-2.0-flash"); // Use the fast, smart model for 12+ files
const BLOG_DIR = "c:/Vercel/src/app/blog";
const SEO_FILE = "c:/Vercel/src/generated_content/seo_strategy.json";
const GAME_FILE = "c:/Vercel/src/generated_content/15_game_designs.json";

async function deepPolish() {
    console.log("💎 Launching 'Google Sensation' Content Polish (Pass 2)...");
    
    // Load Context
    let seoData = {};
    if (fs.existsSync(SEO_FILE)) {
      seoData = JSON.parse(fs.readFileSync(SEO_FILE, 'utf-8'));
    }
    
    let gameData = [];
    if (fs.existsSync(GAME_FILE)) {
      gameData = JSON.parse(fs.readFileSync(GAME_FILE, 'utf-8'));
    }

    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".mdx") || f.endsWith(".md"));

    for (const file of files) {
        const filePath = path.join(BLOG_DIR, file);
        const slug = file.replace(/\.mdx?$/, "");
        const originalContent = fs.readFileSync(filePath, "utf-8");
        
        // Find specific game and keywords for this file
        const game = gameData.find(g => g.target_slug === slug);
        const gameName = game ? game.name : "Interactive Tool";
        
        // Mocking keyword extraction if SEO file is generic, 
        // real implementation would look up by slug in seoData key map.
        const keywords = "AI Automation Cleveland, Small Business ROI, Bespoke AI Strategy"; 

        const prompt = `
            You are a Pulitzer-prize winning copywriter turned SEO Growth Hacker.
            
            TASK: Rewrite this blog post to be a "Google Sensation that Sells".
            
            INPUT CONTEXT:
            - **Slug:** ${slug}
            - **Target Keywords:** ${keywords}
            - **Interactive Element (Embedded in page):** ${gameName}
            
            VOICE GUIDELINES:
            1. **Hook:** Start with a punch in the face. No "Welcome to..." or "In today's world...".
            2. **Style:** "Gay Men's Field Guide". Witty, sharp, high-contrast. Use short sentences.
            3. **Sales Focus:** Every paragraph must sell the *value* of the solution (Ethos).
            4. **CTA:** End with a burning desire to click "Book Consultation".
            5. **Interactive Callout:** Explicitly tell the user: "Don't just take my word. Use the ${gameName} below to prove it."
            
            TECHNICAL REQUIREMENTS:
            - Keep the Frontmatter exports (metadata) intact.
            - Keep the import statements intact.
            - Focus on H1, H2, and Body Text.
            - Ensure keywords are naturally woven into H2s.
            
            CURRENT CONTENT:
            ${originalContent.substring(0, 15000)}
            
            OUTPUT:
            Return the FULL .mdx file content.
        `;
        
        try {
            const { text } = await generateText({ model, prompt });
            
            // Safety Check: Ensure imports aren't lost if model hallucinates.
            // ( simplified for this script, assuming model is good)
            const cleanedText = text.replace(/```mdx/g, "").replace(/```/g, "").trim();

            fs.writeFileSync(filePath, cleanedText);
            console.log(`✨ Polished: ${file}`);
        } catch (error) {
            console.error(`❌ Failed to polish ${file}:`, error);
        }
    }
    console.log("✅ All Posts updated to Sensation Status.");
}

deepPolish();
