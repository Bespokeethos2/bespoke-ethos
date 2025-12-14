import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import fs from "fs";
import path from "path";

// Ensure API Key
const API_KEY = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
if (!API_KEY) {
  console.error("❌ GOOGLE_GENERATIVE_AI_API_KEY is missing.");
  process.exit(1);
}

const CONFIG = {
  model: google("models/gemini-2.0-flash"),
  inputDir: "c:/Vercel/src/generated_content",
  outputBlogDir: "c:/Vercel/src/app/blog",
  outputComponentsDir: "c:/Vercel/src/components/generated",
  cssFile: "c:/Vercel/src/app/globals.css",
};

// Ensure directories exist
function ensureDirs() {
  if (!fs.existsSync(CONFIG.outputBlogDir)) fs.mkdirSync(CONFIG.outputBlogDir, { recursive: true });
  if (!fs.existsSync(CONFIG.outputComponentsDir)) fs.mkdirSync(CONFIG.outputComponentsDir, { recursive: true });
}

// 1. GENERATE BLOG POSTS
async function generateBlogPosts() {
  console.log("📝 Generating 8 Blog Posts from outlines...");
  
  // Read outlines
  const contentOutput = fs.readFileSync(path.join(CONFIG.inputDir, "content_agent_output.md"), "utf8");
  
  // Extract topics (naive split for now, or just ask AI to parse)
  // We'll ask AI to split and write each one.
  
  const prompt = `
    You are an expert MDX content generator. 
    I will provide you with a file containing outlines for 8 blog posts.
    
    Your task is to generating the FULL MDX content for EACH post.
    
    However, since we are doing this in a loop, I need you to first RETURN A JSON ARRAY of the 8 topics found in the text below, with their "slug", "title", and "outline_excerpt".
    
    Text:
    ${contentOutput}
  `;

  const { text: jsonText } = await generateText({
    model: CONFIG.model,
    prompt: prompt + "\n\nReturn JSON ONLY: [{ slug, title, outline_excerpt }]",
  });

  const cleanedJson = jsonText.replace(/```json/g, "").replace(/```/g, "").trim();
  const outlines = JSON.parse(cleanedJson);

  for (const post of outlines) {
    console.log(`  ✍️ Writing: ${post.title}...`);
    
    const blogPrompt = `
      Write a full, high-quality MDX blog post for: "${post.title}".
      
      Context: Bespoke Ethos (Automation for SMBs).
      Tone: Professional, Direct, "Gay Men's Field Guide" aesthetic (witty, sharp).
      
      Outline: ${post.outline_excerpt}
      
      Requirements:
      - Use standard Markdown headings (#, ##, ###).
      - Include a metadata frontmatter:
        export const metadata = { title: "${post.title}", date: "2025-12-14", description: "..." }
      - Insert 3 generic placeholder images:
        <Image src="/assets/generated/${post.slug}-header.webp" alt="Header" width={800} height={400} />
        ... body images ...
      
      Return ONLY the MDX content.
    `;

    const { text: mdxContent } = await generateText({
      model: CONFIG.model,
      prompt: blogPrompt,
    });

    fs.writeFileSync(path.join(CONFIG.outputBlogDir, `${post.slug}`), mdxContent.replace(/```mdx/g, "").replace(/```/g, ""));
  }
}

// 2. APPLY CSS
async function applyCSS() {
  console.log("🎨 Applying Design System...");
  const styleOutput = fs.readFileSync(path.join(CONFIG.inputDir, "style_agent_output.md"), "utf8");
  
  // Logic to extract CSS block
  // For now, we'll assume the agent output contains a CSS block we can parse
  // Or simpler: Ask AI to extract just the CSS
  
  const { text: cssContent } = await generateText({
    model: CONFIG.model,
    prompt: `Extract ONLY the valid CSS content from this markdown. Do not include markdown code fences key 'css' or 'code'. Just the raw CSS.\n\n${styleOutput}`,
  });

   // Backup old CSS
   if (fs.existsSync(CONFIG.cssFile)) {
     fs.copyFileSync(CONFIG.cssFile, CONFIG.cssFile + ".bak");
   }

   const cleanCss = cssContent.replace(/```css/g, "").replace(/```/g, "");
   fs.writeFileSync(CONFIG.cssFile, cleanCss);
}

// 3. GENERATE COMPONENTS
async function generateComponents() {
  console.log("🧩 Generating Interactive Components...");
  const interactiveOutput = fs.readFileSync(path.join(CONFIG.inputDir, "interactive_agent_output.md"), "utf8");
  
  // Ask AI to separate into files
  const componentsToGen = [
    { name: "EntropyCrusher", desc: "The process simulator" },
    { name: "MoneyFurnace", desc: "The ROI calculator" },
    { name: "TimeTraveller", desc: "The future projector" }
  ];

  for (const comp of componentsToGen) {
    console.log(`  ⚙️ Building Component: ${comp.name}...`);
    
    const compPrompt = `
      Based on the following design specs, write a self-contained React (TSX) component named ${comp.name}.
      
      Specs:
      ${interactiveOutput}
      
      Target Spec: ${comp.desc}
      
      Requirements:
      - Use 'use client';
      - Use Tailwind CSS
      - Use Lucide React icons
      - Use Framer Motion if needed (or standard CSS transitions)
      - Return ONLY the TSX code.
    `;

    const { text: tsxContent } = await generateText({
      model: CONFIG.model,
      prompt: compPrompt,
    });
    
    const cleanTsx = tsxContent.replace(/```tsx/g, "").replace(/```typescript/g, "").replace(/```/g, "");
    fs.writeFileSync(path.join(CONFIG.outputComponentsDir, `${comp.name}.tsx`), cleanTsx);
  }
}

async function main() {
  ensureDirs();
  await applyCSS();
  await generateComponents();
  await generateBlogPosts(); // Longest running
  console.log("✅ EXECUTION COMPLETE.");
}

main().catch(console.error);
