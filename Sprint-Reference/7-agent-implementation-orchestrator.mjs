import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import fs from "fs";
import path from "path";

// Map custom env var to SDK standard if missing
if (process.env.GOOGLE_GEMINI_API && !process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
  process.env.GOOGLE_GENERATIVE_AI_API_KEY = process.env.GOOGLE_GEMINI_API;
}

console.log("🔑 API Key Status:", process.env.GOOGLE_GENERATIVE_AI_API_KEY ? "✅ SET" : "❌ NOT SET");

// --- Configuration ---
const CONFIG = {
  model: google("models/gemini-2.0-flash"), // Per antigravity.config.js
  outputDir: "c:/Vercel/src/generated_content",
  maxTokens: 8192,
};

// --- Agent Persona Definitions ---
const AGENTS = [
  {
    id: "style_agent",
    name: "Agent 1 (Style/CSS)",
    role: "Senior Design Systems Engineer",
    task: "Generate optimized, unified dark mode CSS tokens and component classes. Focus on mobile-first conversion.",
    prompt: `You are a Senior Design Systems Engineer. Your goal is to create a unified, optimized design system for BespokeEthos.com that *sells*.
    
    Requirements:
    1. **Palette**: Deep Navy (#1a1a2e) background, Coral (#e94560) & Purple (#533483) accents. High contrast text.
    2. **Buttons**: NO PILL SHAPES. Use square buttons with small (8px) rounded corners. Gradient borders for primary CTAs.
    3. **Mobile First**: All padding/margins must be optimized for touch targets.
    4. **Animations**: Aceternity-style 'shimmer' and 'spotlight' keyframes.
    
    Output:
    - A complete \`globals.css\` file content with :root variables for dark mode.
    - Tailwind extension config for colors and keyframes.
    - CSS utility classes for the "Primary CTA" and "Secondary Button".
    `,
  },
  {
    id: "visual_agent",
    name: "Agent 2 (Visual Assets)",
    role: "Creative Director (Nano Banana)",
    task: "Generate UNLIMITED Nano Banana 3 prompts for all site assets. Localize for Cleveland/Rust Belt.",
    prompt: `You are the Creative Director. Write explicit Nano Banana 3 prompts for the following assets. 
    **CRITICAL**: "Localize" the imagery. Mix futuristic AI nodes with subtle Rust Belt / Industrial / Cleveland skyline elements (steel bridges, Terminal Tower silhouette in data points).
    
    Assets to Generate Prompts For:
    1. **Hero Splash**: 4K, Dark Navy, Cleveland skyline wireframe merging with AI neural net.
    2. **8 Blog Thumbnails**: One for each blog topic (see Agent 3). Concrete, non-abstract, diverse professionals using tech.
    3. **Service Cards (x4)**: Cadence, Consensus, Skyway, Consult. Square card format.
    4. **Trust Badges (x4)**: NGLCC, 5-Year AI Vet, Local Business, etc. Standalone, glowing.
    
    Constraint: NO pill shapes. High-end, photorealistic 3D render style.
    `,
  },
  {
    id: "content_agent",
    name: "Agent 3 (Content Core)",
    role: "Lead Copywriter",
    task: "Outline 8 Evergreen Blog Posts that sell 'Automation' to SMB owners.",
    prompt: `You are a Lead Copywriter. Generate detailed outlines for **8 Evergreen Blog Posts**.
    
    Topics:
    1. "The Rust Belt Renaissance: How AI is Revitalizing Cleveland SMBs"
    2. "Stop Burning Cash: A Guide to Automating Admin Tasks"
    3. "24/7 Sales: Why Your Website Needs an AI Agent (Not just a Chatbot)"
    4. "NGLCC Certified: Why Diversity in Tech Matters for ROI"
    5. "The 'No-Code' Myth: Why You Still Need an Architect"
    6. "Case Study: How a Local Logistics Firm Saved 40hrs/Week"
    7. "Generative AI vs. Predictive AI: What Does Your Business Actually Need?"
    8. "Future-Proofing Your Business for 2030"
    
    For each, provide: Headline, Hook, Key Takeaway, and specific CTA ("Book Strategy Call").
    `,
  },
  {
    id: "interactive_agent",
    name: "Agent 4 (Interactive)",
    role: "Frontend Creative Technologist",
    task: "Design 3 highly unique, 'simulated AI' interactive containers to pepper throughout the site.",
    prompt: `You are a Creative Technologist. Design the React/Typescript logic for 3 "Simulated AI" containers that show optimization *without* actual API calls. They must be authentic, charming, and mobile-first.
    
    Container 1: **"The Entropy Crusher" (Process Simulator)**
    - Visual: A chaotic cloud of "Task Particles" (Email, Data, Admin) floating around.
    - Interaction: User drags a "Bespoke AI" magnet into the center.
    - Effect: Particles instantly organize into a sleek grid.
    - Metric: "Chaos Reduced by 98%".
    
    Container 2: **"The Money Furnace" (ROI Calculator)**
    - Visual: An animated furnace burning cash stacks representing "Manual Labor Costs".
    - Interaction: User adjusts sliders (Employees, Hours).
    - Effect: Furnace flame turns green and transforms into a "Profit Tree" growing.
    - Output: "Annual Burn Saved: $XX,XXX".
    
    Container 3: **"The Time Traveller" (Future Projector)**
    - Interaction: Toggle switch "Current Trajectory" vs "AI Augmented".
    - Visual: Two timeline graphs comparing linear growth vs exponential AI growth.
    - Insight: "In 3 years, you could be 4x ahead."
    
    Output the React component structure, Tailwind classes, and animation logic (Framer Motion) for all 3.
    `,
  },
  {
    id: "targeting_agent",
    name: "Agent 5 (Targeting)",
    role: "Conversion Strategist",
    task: "Create Retargeting Ad Copy & Landing Page Headers using the Sales Guide.",
    prompt: `You are a Conversion Strategist. Reference the *Consultation Sales Guide* logic (Pain -> Agitate -> Solution).
    
    Create:
    1. **LinkedIn Retargeting Ads (x3)**: Target: Ops Managers. Angle: "Stop doing robot work."
    2. **Google Display Ads (x3)**: Target: Cleveland Local Biz. Angle: "Silicon Valley Tech, Rust Belt Prices."
    3. **Landing Page H1/H2 variants**: Test "Fear of Missing Out" vs "Greed/Growth".
    `,
  },
  {
    id: "seo_agent",
    name: "Agent 6 (SEO/Tech)",
    role: "SEO Specialist",
    task: "Generate Cleveland-Local Schema & Mobile Optimization Checklist.",
    prompt: `You are an SEO Specialist.
    
    1. **Local Schema**: Generate JSON-LD for "Bespoke Ethos" as a "ProfessionalService" in Cleveland, OH. Include "areaServed", "founder", and "knowsAbout" (AI, Automation).
    2. **Mobile Optimization**: Create a checklist of CSS rules to ensure buttons and forms are "Thumb-Friendly" (44px+ targets, legible font sizes).
    3. **Meta Tags**: Write optimized Title/Desc for the 8 Blog Posts defined by Agent 3.
    `,
  },
  {
    id: "integration_agent",
    name: "Agent 7 (Integration)",
    role: "DevOps Orchestrator",
    task: "Create the Master Assembly Plan.",
    prompt: `You are the DevOps Orchestrator.
    
    Create a prioritized execution list to integrate the outputs of Agents 1-6 into the Next.js/Vercel project.
    
    Order:
    1. CSS/Theme updates (Agent 1)
    2. Interactive Containers (Agent 4) - THESE ARE PRIORITY.
    3. Blog Pages (Agent 3 + 6)
    4. Image Asset placement (Agent 2)
    5. Retargeting Scripts (Agent 5)
    
    Format as a JSON-compatible checklist.
    `,
  },
];

// --- Execution Engine ---
async function runAgent(agent) {
  console.log(`[🚀 STARTED] ${agent.name}: ${agent.task.substring(0, 50)}...`);
  const startTime = Date.now();

  try {
    // Ensure output dir exists (Sync check inside loop to be safe)
    if (!fs.existsSync(CONFIG.outputDir)) {
      console.log(`[📂 INFO] Creating directory: ${CONFIG.outputDir}`);
      fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    }

    const { text } = await generateText({
      model: CONFIG.model,
      prompt: agent.prompt,
      maxTokens: CONFIG.maxTokens,
    });

    if (!text) throw new Error("No text generated");

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    const filename = `${agent.id}_output.md`;
    const filepath = path.join(CONFIG.outputDir, filename);

    fs.writeFileSync(filepath, `# ${agent.name} Output\n\n${text}`);
    console.log(`[✅ FINISHED] ${agent.name} in ${duration}s -> ${filename}`);
    return { success: true, agent: agent.name, file: filepath };
  } catch (error) {
    console.error(`[❌ FAILED] ${agent.name}:`, error);
    return { success: false, agent: agent.name, error: error.message };
  }
}

async function main() {
  console.log("🔥 IGNITING 7-AGENT SWARM (EXPANDED SCOPE) FOR BESPOKE ETHOS...");
  console.log("-------------------------------------------------------------");

  // Run all agents in parallel
  const results = await Promise.all(AGENTS.map(agent => runAgent(agent)));

  console.log("-------------------------------------------------------------");
  console.log("📊 SWARM REPORT:");
  results.forEach(r => {
    if (r.success) console.log(`  ✅ ${r.agent}`);
    else console.log(`  ❌ ${r.agent}: ${r.error}`);
  });
  console.log("-------------------------------------------------------------");
}

main().catch(console.error);
