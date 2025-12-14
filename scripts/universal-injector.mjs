
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: "c:/Vercel/.env.local" });

const GAMES_FILE = "c:/Vercel/src/generated_content/15_game_designs.json";
const COMPONENTS_DIR = "c:/Vercel/src/components/generated";
const BLOG_DIR = "c:/Vercel/src/app/blog";

function universalInject() {
    console.log("💉 Universal Game Injector Starting...");

    if (!fs.existsSync(GAMES_FILE)) {
        console.error("❌ No game designs found!");
        return;
    }

    const games = JSON.parse(fs.readFileSync(GAMES_FILE, "utf-8"));
    const components = fs.readdirSync(COMPONENTS_DIR).map(f => f.replace(".tsx", ""));

    games.forEach(game => {
        // Find matching component file (fuzzy match or exact name from design)
        const componentName = components.find(c => c.toLowerCase().includes(game.name.toLowerCase().replace(/\s/g, "")));
        
        if (!componentName) {
            console.log(`⚠️ Component not found for game: ${game.name}`);
            return;
        }

        const importStmt = `import { ${componentName} } from "@/components/generated/${componentName}";`;
        const componentTag = `<div className="my-12 border-2 border-bespoke-teal rounded-lg p-6 bg-bespoke-navy/50"><${componentName} /></div>`;

        // Target: Blog Post
        const targetSlug = game.target_slug; // Assuming JSON has this field from research
        if (targetSlug && fs.existsSync(path.join(BLOG_DIR, `${targetSlug}.mdx`))) {
            const filePath = path.join(BLOG_DIR, `${targetSlug}.mdx`);
            let content = fs.readFileSync(filePath, "utf-8");

            if (!content.includes(componentName)) {
                // Add import to top (hacky for MDX, often MDX handles imports differently, 
                // but direct injection works if using custom MDX provider or simple regex replacement)
                // For Next.js MDX, we often need to register components in `mdx-components.tsx` OR import them inside the MDX.
                // We will try standard import syntax.
                
                content = importStmt + "\n" + content;
                
                // Inject after first H2 or roughly middle
                const injectionPoint = content.indexOf("##", 300); 
                if (injectionPoint > -1) {
                    content = content.slice(0, injectionPoint) + `\n\n${componentTag}\n\n` + content.slice(injectionPoint);
                } else {
                    content += `\n\n${componentTag}`;
                }

                fs.writeFileSync(filePath, content);
                console.log(`✅ Injected ${componentName} into ${targetSlug}`);
            } else {
                console.log(`⏭️ ${componentName} already in ${targetSlug}`);
            }
        }
    });
}

universalInject();
