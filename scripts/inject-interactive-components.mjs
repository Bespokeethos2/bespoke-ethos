
import fs from "fs";
import path from "path";

const BLOG_DIR = "c:/Vercel/src/app/blog";

const MAPPINGS = [
  {
    keyword: "rust-belt",
    component: "MoneyFurnace",
    importPath: "@/components/generated/MoneyFurnace",
    message: "{/* Burn your inefficiencies, not your cash. Try the Money Furnace: */}"
  },
  {
    keyword: "stop-burning-cash",
    component: "EntropyCrusher",
    importPath: "@/components/generated/EntropyCrusher",
    message: "{/* Crush the chaos. Interactive Demo: */}"
  },
  {
    keyword: "future-proofing",
    component: "TimeTraveller",
    importPath: "@/components/generated/TimeTraveller",
    message: "{/* See your business in 2030. Interactive Projection: */}"
  },
  // We can reuse components for other posts too
  { keyword: "sales", component: "MoneyFurnace", importPath: "@/components/generated/MoneyFurnace", message: "{/* Calculate your lost sales: */}" },
  { keyword: "logistics", component: "EntropyCrusher", importPath: "@/components/generated/EntropyCrusher", message: "{/* Optimize your routes interactively: */}" },
  { keyword: "generative", component: "TimeTraveller", importPath: "@/components/generated/TimeTraveller", message: "{/* Simulate your AI future: */}" }
];

if (fs.existsSync(BLOG_DIR)) {
  const files = fs.readdirSync(BLOG_DIR);

  files.forEach(file => {
      if (!file.endsWith(".mdx") && !file.endsWith(".md")) return;
      const filePath = path.join(BLOG_DIR, file);
      let content = fs.readFileSync(filePath, "utf8");

      const match = MAPPINGS.find(m => file.includes(m.keyword));
      
      if (match) {
          // Check if already imported
          if (!content.includes(match.component)) {
              // 1. Add Import
              // Insert after metadata block or at top
              const metadataEnd = content.indexOf("---", 3);
              const insertPoint = metadataEnd !== -1 ? metadataEnd + 3 : 0;
              
              const importStatement = `\n\nimport { ${match.component} } from "${match.importPath}";\n`;
              content = content.slice(0, insertPoint) + importStatement + content.slice(insertPoint);

              // 2. Add Component usage near the end (before CTA)
              const ctaIndex = content.lastIndexOf("## "); // Put before last H2 or CTA
              const usagePoint = ctaIndex !== -1 ? ctaIndex : content.length;
              
              const componentUsage = `\n\n${match.message}\n<${match.component} />\n\n`;
              content = content.slice(0, usagePoint) + componentUsage + content.slice(usagePoint);

              fs.writeFileSync(filePath, content);
              console.log(`✅ Injected ${match.component} into ${file}`);
          }
      }
  });
}
