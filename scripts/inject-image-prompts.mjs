
import fs from "fs";
import path from "path";

const BLOG_DIR = "c:/Vercel/src/app/blog";
const VISUAL_OUTPUT = "c:/Vercel/src/generated_content/visual_agent_output.md";

// 1. Parse Prompts from visual_agent_output.md
// This is a simplified parser assuming the structure found in the file
const visualContent = fs.readFileSync(VISUAL_OUTPUT, "utf8");

// Map keywords to prompts (naive mapping for speed)
const PROMPT_MAP = {
    "Rust Belt": "Concrete, photorealistic image of a diverse industrial engineer using AI-powered augmented reality...",
    "Admin": "Concrete, photorealistic image of a diverse financial analyst using AI-powered data visualization...",
    "Sales": "Concrete, photorealistic image of a diverse doctor using AI-powered software...", // Fallback/Generic
    "NGLCC": "Circular badge with glowing NGLCC logo integrated with subtle AI circuitry patterns...",
    "No-Code": "Abstract representation of interconnected networks... Dark Navy and steel gradient...",
    "Logistics": "Concrete, photorealistic image of a local logistics firm...",
    "Generative": "Abstract visualization comparing Generative vs Predictive AI...",
    "Future": "Futuristic Cleveland skyline in 2030 with AI integration..."
};

// 2. Iterate Blog Files and Inject
if (fs.existsSync(BLOG_DIR)) {
    const files = fs.readdirSync(BLOG_DIR);
    
    files.forEach(file => {
        if (!file.endsWith(".mdx") && !file.endsWith(".md")) return;
        
        const filePath = path.join(BLOG_DIR, file);
        let content = fs.readFileSync(filePath, "utf8");
        
        // Find matching prompt
        let bestPrompt = "4K, Dark Navy, hero splash image. Intricate wireframe model of the Cleveland skyline...";
        for (const [key, prompt] of Object.entries(PROMPT_MAP)) {
            if (file.toLowerCase().includes(key.toLowerCase().replace(" ", "-"))) {
                bestPrompt = prompt;
                break;
            }
        }
        
        // Inject Comment if not present
        if (!content.includes("<!-- IMAGE PROMPT:")) {
            // Insert after frontmatter (--- ... ---)
            const frontmatterEnd = content.indexOf("---", 3);
            if (frontmatterEnd !== -1) {
                const insertPos = frontmatterEnd + 3;
                content = content.slice(0, insertPos) + `\n\n{/* \n  IMAGE GENERATION PROMPT:\n  ${bestPrompt}\n*/}` + content.slice(insertPos);
                fs.writeFileSync(filePath, content);
                console.log(`✅ Injected prompt into ${file}`);
            }
        }
    });
} else {
    console.log("Blog directory not found.");
}
