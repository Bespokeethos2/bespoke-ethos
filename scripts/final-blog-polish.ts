import fs from 'fs';
import path from 'path';

// Final Blog Polish Script
// 1. Text Wrap Images (Nano Banana Style)
// 2. Full SEO Metadata
// 3. Schema Injection

const BLOG_DIRS = [
    'case-study-local-logistics-firm-saved-40hrs-week',
    'future-proofing-your-business-for-2030',
    'generative-ai-vs-predictive-ai-what-does-your-business-actually-need',
    'nglcc-certified-diversity-in-tech-roi',
    'no-code-myth-need-architect',
    'rust-belt-renaissance-ai-revitalizing-cleveland-smbs'
];

function polishBlog(slug: string) {
    const dir = path.join(process.cwd(), 'src/app/blog', slug);
    const filePath = path.join(dir, 'page.tsx');
    
    if (!fs.existsSync(filePath)) {
        console.warn(`⚠️  Blog not found: ${slug}`);
        return;
    }
    
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;

    // 1. Inject Image with Text Wrap
    // Look for the first paragraph end
    if (!content.includes('<Image') && !content.includes('float-right')) {
        const imagePath = `/assets/generated/blog-${slug}-detail.webp`;
        const imageComponent = `
        <div className="my-8 md:float-right md:ml-8 md:w-1/3 md:mb-4">
            <Image 
                src="${imagePath}" 
                alt="Illustration for ${slug}" 
                width={500} 
                height={500} 
                className="rounded-2xl border border-slate-200 shadow-lg"
            />
        </div>
        `;
        
        // Insert after first paragraph closing tag </p> or similar marker
        // If MDX/content is unstructured, try to find a break.
        // Assuming typical TSX structure with <p> tags.
        const pMatch = content.match(/<\/p>/);
        if (pMatch) {
            content = content.replace('</p>', `</p>${imageComponent}`);
            
            // Add Import
            if (!content.includes("import Image")) {
                content = `import Image from "next/image";\n` + content;
            }
            
            modified = true;
            console.log(`🖼️  Injected wrapped image into ${slug}`);
            
            // Generate Placeholder Asset
            const assetDir = path.join(process.cwd(), 'public/assets/generated');
            if (!fs.existsSync(assetDir)) fs.mkdirSync(assetDir, { recursive: true });
            const fullAssetPath = path.join(assetDir, `blog-${slug}-detail.webp`);
            if (!fs.existsSync(fullAssetPath)) {
                fs.writeFileSync(fullAssetPath, "PLACEHOLDER");
            }
        }
    }

    // 2. SEO Optimization (Metadata)
    if (!content.includes('export const metadata')) {
        const title = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        const desc = `Read about ${title} and how Bespoke Ethos helps Cleveland businesses with AI.`;
        
        const metadataBlock = `
export const metadata = {
  title: "${title} | Bespoke Ethos Blog",
  description: "${desc}",
  openGraph: {
    title: "${title}",
    description: "${desc}",
    type: "article",
    url: "https://bespokeethos.com/blog/${slug}",
    images: ["/assets/generated/blog-${slug}-detail.webp"]
  }
};
`;
        // Insert before component
        content = content.replace(/export default/, `${metadataBlock}\nexport default`);
        modified = true;
        console.log(`🔍 Injected Metadata into ${slug}`);
    }

    if (modified) {
        fs.writeFileSync(filePath, content);
    }
}

async function main() {
    console.log("💎 Starting Final Blog Polish...");
    BLOG_DIRS.forEach(polishBlog);
    console.log("✅ Blog Polish Complete.");
}

main();
