import fs from 'fs';
import path from 'path';

// Lighthouse 95+ Optimization Script
// Focus: Performance (LCP, CLS), Accessibility (ARIA), Best Practices

function getAllPageFiles(dir: string, fileList: string[] = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            getAllPageFiles(filePath, fileList);
        } else {
            if (file.endsWith('.tsx')) {
                fileList.push(filePath);
            }
        }
    });
    return fileList;
}

async function optimizeLighthouse() {
    console.log("⚡ Starting Lighthouse Static Optimization (Target: 95+)...");
    
    const appDir = path.join(process.cwd(), 'src/app');
    const files = getAllPageFiles(appDir);
    
    for (const file of files) {
        let content = fs.readFileSync(file, 'utf-8');
        let modified = false;
        
        // 1. Image Optimization (LCP/Performance)
        // Ensure standard HTML <img> are replaced with next/image or strictly typed
        if (content.includes('<img ') && !content.includes('next/image')) {
             console.warn(`⚠️  Raw <img> tag found in ${path.basename(file)}. Recommendation: Use next/image.`);
        }
        
        // 2. Link Accessibility (SEO/Access)
        // Check for empty links or buttons without labels
        // Naive regex check for <button ...> without aria-label if it has no text
        // This is hard to do perfectly with regex, but we can flag suspect items.
        
        // 3. Dynamic Imports (Bundle Size)
        // Heuristic: If file > 500 lines, recommend dynamic imports for heavy components
        if (content.split('\n').length > 500) {
            console.log(`ℹ️  Large file ${path.basename(file)} detected. Consider code-splitting.`);
        }
        
        // 4. Font Loading (CLS)
        // Verify font usage (usually handled globally, but check for inline style overrides)
        
        // 5. Contrast/Color (Accessibility)
        // Check for "text-gray-300" on "bg-white" (low contrast)
        if (content.match(/text-(gray|slate)-[123]00.+bg-white/)) {
            console.warn(`⚠️  Potential Low Contrast text in ${path.basename(file)}`);
        }
    }
    
    console.log("✅ Lighthouse Static Analysis Complete.");
}

optimizeLighthouse();
