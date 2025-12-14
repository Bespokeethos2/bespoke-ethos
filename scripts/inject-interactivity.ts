import fs from 'fs';
import path from 'path';

// Interactivity Injector
// Scans blog posts and injects "Interactive Containers" (Mini-apps)
// Matches content keywords to component types.

const COMPONENT_MAP = {
    'calc': '<RoiCalculator />',
    'quiz': '<AiReadinessQuiz />',
    'audit': '<WorkflowAuditTool />',
    'chat': '<DemoChatWidget />'
};

const IMPORTS = `
import dynamic from 'next/dynamic';
const RoiCalculator = dynamic(() => import('@/components/tools/roi-calculator'));
const AiReadinessQuiz = dynamic(() => import('@/components/tools/ai-readiness-quiz'));
const WorkflowAuditTool = dynamic(() => import('@/components/tools/workflow-audit'));
const DemoChatWidget = dynamic(() => import('@/components/tools/demo-chat'));
`;

function injectInteractivity() {
    console.log("🧩 Starting Interactive Container Injection...");
    
    // 1. Scan Blogs
    const blogDir = path.join(process.cwd(), 'src/app/blog');
    if (!fs.existsSync(blogDir)) {
        console.log("❌ Blog directory not found.");
        return;
    }
    
    const dirs = fs.readdirSync(blogDir).filter(f => fs.statSync(path.join(blogDir, f)).isDirectory());
    
    for (const slug of dirs) {
        const filePath = path.join(blogDir, slug, 'page.tsx');
        if (fs.existsSync(filePath)) {
            let content = fs.readFileSync(filePath, 'utf-8');
            
            // Avoid double injection
            if (content.includes('const RoiCalculator')) {
                console.log(`⏭️  Skipping ${slug} (Already interactive)`);
                continue;
            }
            
            let injected = false;
            
            // Logic: Analyze content to pick tool
            // For "Efficiency" or "Cash" -> ROI Calculator
            if (slug.includes('cash') || slug.includes('money') || slug.includes('roi')) {
                content = content.replace(/(export default function)/, `${IMPORTS}\n\n$1`);
                // Inject before the last section or conclusion
                content = content.replace(/(<\/div>\s*<\/section>)/, `\n<section className="py-12"><div className="container"><RoiCalculator /></div></section>\n$1`);
                injected = true;
                console.log(`➕ Injected ROI Calculator into ${slug}`);
            }
            // For "Readiness" or "Future" -> Quiz
            else if (slug.includes('future') || slug.includes('start') || slug.includes('readiness')) {
                 content = content.replace(/(export default function)/, `${IMPORTS}\n\n$1`);
                 content = content.replace(/(<\/div>\s*<\/section>)/, `\n<section className="py-12"><div className="container"><AiReadinessQuiz /></div></section>\n$1`);
                 injected = true;
                 console.log(`➕ Injected Quiz into ${slug}`);
            }
            
            if (injected) {
                fs.writeFileSync(filePath, content);
            }
        }
    }
    console.log("✅ Interactivity Injection Complete.");
}

injectInteractivity();
