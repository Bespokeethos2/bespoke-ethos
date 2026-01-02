import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import * as fs from 'fs';
import * as path from 'path';

// Manual sitemap for checking key pages
const URLS = [
  'http://localhost:3000/',
  'http://localhost:3000/products/cadence',
  'http://localhost:3000/solutions/automation-skyway',
  'http://localhost:3000/blog',
  'http://localhost:3000/contact'
];

async function audit() {
  console.log('♿ Starting Interactive Accessibility Audit...');
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const results = [];

  for (const url of URLS) {
    try {
      console.log(`Navigation to ${url}...`);
      await page.goto(url, { waitUntil: 'networkidle' });
      
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
        
      const violations = accessibilityScanResults.violations;
      console.log(`   Found ${violations.length} violations`);
      
      if (violations.length > 0) {
        results.push({ url, violations });
      }
      
    } catch (e) {
      console.error(`   Failed to check ${url}:`, e);
    }
  }

  await browser.close();
  
  // Save report
  const reportPath = path.join(process.cwd(), 'accessibility-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\n📄 Report saved to ${reportPath}`);
  
  if (results.length === 0) {
    console.log('✅ PASS: No accessibility violations found!');
  } else {
    console.log('❌ FAIL: Violations found. See report.');
    process.exit(1);
  }
}

audit();
