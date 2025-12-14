import fs from 'fs';
import path from 'path';

async function auditAndPolish(dir: string, pages: string[]) {
    console.log(`🧹 Polishing Secondary Pages in ${dir}...`);
    
    for (const page of pages) {
        const fullPath = path.join(dir, page, 'page.tsx');
        if (fs.existsSync(fullPath)) {
            console.log(`✨ Auditing ${page}...`);
            let content = fs.readFileSync(fullPath, 'utf-8');
            
            // 1. Check for SEO Metadata (basic check)
            if (!content.includes('export const metadata')) {
                console.warn(`⚠️  Missing metadata in ${page}`);
                // In a real agentic loop, we would inject it.
            }
            
            // 2. Check for "blue" words to replace with "slate/orange" (The Palette Shift)
            if (content.includes('bg-blue-') || content.includes('text-blue-')) {
                 console.warn(`🎨 Found legacy 'blue' styles in ${page}. Should be slate/orange/sky.`);
                 // Auto-fix attempt
                 content = content.replace(/bg-blue-600/g, 'bg-orange-600')
                                  .replace(/bg-blue-500/g, 'bg-orange-500')
                                  .replace(/text-blue-600/g, 'text-orange-600')
                                  .replace(/text-blue-500/g, 'text-orange-500');
                 fs.writeFileSync(fullPath, content);
                 console.log(`✅ Applied palette fix to ${page}`);
            }
        } else {
            console.warn(`❌ Page not found: ${page}`);
        }
    }
}

async function main() {
    const pages = ['about', 'contact', 'pricing', 'legal/privacy'];
    const appDir = path.join(process.cwd(), 'src/app');
    
    await auditAndPolish(appDir, pages);
}

main();
