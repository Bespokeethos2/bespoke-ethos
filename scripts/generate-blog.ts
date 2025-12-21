import fs from 'fs';
import path from 'path'; // Corrected import
import { generateText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google'; // Corrected import
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

const model = google('models/gemini-1.5-pro'); // Nano Banana 3

const TOPICS = [
    "The 35% Efficiency Gap: Why Cleveland SMBs Are Losing Money",
    "Beyond ChatGPT: Why Custom Models Win for Niches",
    "The Tool & Die Approach to AI Engineering",
    "Case Study: Automating a HVAC Dispatch System",
    "Why 'Human-in-the-Loop' is Your Security Blanket",
    "From Rust Belt to Tech Belt: AI Adoption in Manufacture",
    "The Privacy Advantage: Local AI vs Cloud",
    "Stop Paying the 'Ignorance Tax' on AI Consultants"
];

async function generateBlogPost(topic: string) {
    const slug = topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const dir = path.join(process.cwd(), 'src/app/blog', slug);
    const filePath = path.join(dir, 'page.tsx');

    if (fs.existsSync(filePath)) {
        console.log(`⏭️  Skipping existing blog: ${slug}`);
        return;
    }

    console.log(`✍️  Generating blog: ${slug}`);
    
    const prompt = `Write a comprehensive, SEO-optimized blog post for Bespoke Ethos about: "${topic}".
    
    Voice: Professional, authoritative, "Blue Ocean" strategy, slightly "Rust Belt" gritty but polished.
    Format: Next.js MDX/TSX Page component.
    Structure:
    - H1 Title
    - Introduction (Hook)
    - 3-4 Deep Dive Sections
    - Conclusion
    - Call to Action (Contact us)
    
    Output ONLY the TSX code for the page.tsx file. 
    Use the 'shadcn/ui' components if needed, or standard HTML with Tailwind classes.
    `;

    try {
        const { text } = await generateText({
            model,
            prompt: prompt
        });

        // Clean up markdown block if present
        let code = text.replace(/```tsx/g, '').replace(/```/g, '');
        
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(filePath, code);
        console.log(`✅ Created ${filePath}`);
    } catch (e) {
        console.error(`❌ Failed to generate ${slug}`, e);
    }
}

async function main() {
    console.log("🚀 Starting Blog Expansion...");
    
    // Sequential loop for now to avoid hitting rate limits too hard even with higher quota
    // Or we can chunk it
    for (const topic of TOPICS) {
        await generateBlogPost(topic);
    }
    
    console.log("✅ Blog Expansion Complete.");
}

main();
