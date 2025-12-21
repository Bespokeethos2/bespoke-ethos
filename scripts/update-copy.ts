import fs from 'fs';
import path from 'path';
import { generateText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

const model = google('models/gemini-1.5-pro');

// Load Context
const positioningDoc = fs.readFileSync('c:\\Vercel\\Deep-Context\\BespokeEthos_Positioning_Index.md', 'utf-8');

async function updatePageCopy(filePath: string) {
    if (!fs.existsSync(filePath)) {
        console.warn(`❌ File not found: ${filePath}`);
        return;
    }

    console.log(`📝 Analyzing Copy: ${filePath}`);
    const currentCode = fs.readFileSync(filePath, 'utf-8');

    const prompt = `
    You are the "Tool & Die" Copy Editor for Bespoke Ethos.
    
    CONTEXT:
    ${positioningDoc.substring(0, 2000)}... (truncated for brevity)
    
    TASK:
    Rewrite the visible text content in the provided Next.js TSX file to verify it aligns with the "Tool & Die" / "Rust Belt" aesthetic.
    
    RULES:
    1. NO "Unlock potential", NO "Elevate your business", NO "Digital Transformation".
    2. USE: "Fix broken workflows", "Stop bleeding cash", "Hold the anchor", "Catch the torrent".
    3. Keep the exact same component structure and props. ONLY change the string literals inside the JSX.
    4. If the copy is already good, keep it.
    5. Ensure "Cleveland" or "Midwest" is mentioned if appropriate.
    
    FILE CONTENT:
    \`\`\`tsx
    ${currentCode}
    \`\`\`
    
    OUTPUT:
    The full valid TSX code with updated copy.
    `;

    try {
        const { text } = await generateText({
            model,
            prompt: prompt
        });

        const newCode = text.replace(/```tsx/g, '').replace(/```/g, '');
        
        // Basic safety check: ensure we didn't lose the file
        if (newCode.length > currentCode.length * 0.5) {
             fs.writeFileSync(filePath, newCode);
             console.log(`✅ Updated Copy: ${filePath}`);
        } else {
            console.error(`⚠️  Generated code too short, skipping update for ${filePath}`);
        }

    } catch (e) {
        console.error(`❌ Copy update failed for ${filePath}`, e);
    }
}

async function main() {
    // Target key pages
    const pages = [
        'c:\\Vercel\\src\\app\\page.tsx',
        'c:\\Vercel\\src\\app\\about\\page.tsx',
        'c:\\Vercel\\src\\app\\contact\\page.tsx'
    ];

    for (const page of pages) {
        await updatePageCopy(page);
    }
}

main();
