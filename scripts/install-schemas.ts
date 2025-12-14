import fs from 'fs';
import path from 'path';

// Schema Installer
// Injects JSON-LD components into pages.

const SCHEMA_IMPORT = `
import { OrganizationJsonLd } from '@/components/seo/organization-json-ld';
`;

const SCHEMA_COMPONENT = `<OrganizationJsonLd />`;

function installSchemas(dir: string) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            installSchemas(fullPath);
        } else if (file === 'page.tsx') {
            let content = fs.readFileSync(fullPath, 'utf-8');
            
            if (!content.includes('OrganizationJsonLd')) {
                // 1. Add Import
                // Find last import
                const lastImport = content.lastIndexOf('import ');
                const endOfImports = content.indexOf('\n', lastImport);
                
                content = content.slice(0, endOfImports) + SCHEMA_IMPORT + content.slice(endOfImports);
                
                // 2. Add Component
                // Find inside default function
                // Try to find the first <div> or <main> or <section> return
                const returnMatch = content.match(/return \(\s*<([a-z]+)/i);
                if (returnMatch) {
                    const tag = returnMatch[1];
                     // Insert after the opening tag
                     content = content.replace(new RegExp(`<${tag}([^>]*)>`), `<${tag}$1>\n      ${SCHEMA_COMPONENT}`);
                     fs.writeFileSync(fullPath, content);
                     console.log(`📦 Installed Schema in ${path.relative(process.cwd(), fullPath)}`);
                }
            }
        }
    });
}

console.log("🏗️  Starting Schema Installation...");
installSchemas(path.join(process.cwd(), 'src/app'));
console.log("✅ Schema Installation Complete.");
