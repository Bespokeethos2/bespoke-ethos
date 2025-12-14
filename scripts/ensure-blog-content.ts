import fs from 'fs';
import path from 'path';
import { generateText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});
const model = google('models/gemini-2.5-pro');

const TARGET_TOPICS = [
    "The 35% Efficiency Gap: Why Cleveland SMBs Are Losing Money",
    "Beyond ChatGPT: Why Custom Models Win for Niches",
    "The Tool & Die Approach to AI Engineering",
    "Case Study: Automating a HVAC Dispatch System",
    "Why 'Human-in-the-Loop' is Your Security Blanket",
    "From Rust Belt to Tech Belt: AI Adoption in Manufacture",
    "The Privacy Advantage: Local AI vs Cloud",
    "Stop Paying the 'Ignorance Tax' on AI Consultants"
];

async function generateContent(topic: string, dir: string) {
    console.log(`📝 Generating missing content for: "${topic}"`);
    
    const prompt = `
    Create a detailed, 1500-word blog post in MDX/TSX format for Bespoke Ethos.
    Topic: "${topic}"
    
    Style: "Tool & Die" aesthetic, authoritative, Rust Belt grit. NO corporate fluff.
    
    Structure:
    - Imports (Image from next/image, etc)
    - Metadata export
    - Default function BlogPage()
    - Content: Intro, 3 H2 Sections, 1 H3 subsection per section, interactive callout (placeholder), Conclusion.
    - Styling: Use Tailwind 'div className="prose prose-slate lg:prose-xl mx-auto..."'
    
    Output ONLY the TSX code.
    `;
    
    try {
        const { text } = await generateText({
            model,
            prompt: prompt
        });
        
        let code = text.replace(/```tsx/g, '').replace(/```/g, '');
        fs.writeFileSync(path.join(dir, 'page.tsx'), code);
        console.log(`✅ Saved ${topic}`);
    } catch (e) {
        console.error(`❌ Failed ${topic}`, e);
    }
}

async function ensureContent() {
    console.log("🕵️  Gap Analysis: Checking Blog Content...");
    const blogBase = path.join(process.cwd(), 'src/app/blog');
    
    // Check manifest list against folders
    for (const topic of TARGET_TOPICS) {
         const slug = topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
         const dir = path.join(blogBase, slug);
         const file = path.join(dir, 'page.tsx');
         
         if (!fs.existsSync(dir)) {
             fs.mkdirSync(dir, { recursive: true });
         }
         
         if (!fs.existsSync(file) || fs.readFileSync(file, 'utf-8').length < 100) {
             // Missing or empty
             await generateContent(topic, dir);
         } else {
             // console.log(`✓ Exists: ${slug}`);
         }
    }
    console.log("✅ Content Gap Analysis Complete. No missing blogs allowed.");
}

ensureContent();
