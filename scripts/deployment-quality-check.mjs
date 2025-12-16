#!/usr/bin/env node
/**
 * Deployment Quality Check Script
 * 
 * Automated checks for page deployment requirements.
 * This script validates critical deployment criteria before pages go live.
 * 
 * Usage: node scripts/deployment-quality-check.mjs [--strict]
 * 
 * Exit codes:
 * 0 = All checks passed
 * 1 = Critical failures (blocking)
 * 2 = Warnings only (non-blocking in non-strict mode)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

// Parse CLI arguments
const args = process.argv.slice(2);
const strictMode = args.includes('--strict');

let criticalFailures = 0;
let warnings = 0;
let passed = 0;

// Cache for package.json to avoid multiple reads
let packageJsonCache = null;

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function pass(message) {
  passed++;
  log(`✓ ${message}`, colors.green);
}

function warn(message) {
  warnings++;
  log(`⚠ ${message}`, colors.yellow);
}

function fail(message) {
  criticalFailures++;
  log(`✗ ${message}`, colors.red);
}

function section(title) {
  log(`\n${colors.cyan}${'='.repeat(50)}${colors.reset}`);
  log(`${title}`, colors.cyan);
  log(`${'='.repeat(50)}`, colors.cyan);
}

/**
 * Safely read and parse JSON file with error handling
 * @param {string} filePath - Path to JSON file
 * @returns {Object|null} - Parsed JSON or null if error
 */
function safeReadJson(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    return null;
  }
}

/**
 * Get cached package.json or read it once
 * @returns {Object|null} - Parsed package.json or null if error
 */
function getPackageJson() {
  if (packageJsonCache === null) {
    const packageJsonPath = path.join(ROOT, 'package.json');
    packageJsonCache = safeReadJson(packageJsonPath);
  }
  return packageJsonCache;
}

// ============================================================================
// CHECK 1: Required Files & Structure
// ============================================================================

section('1. Required Files & Structure');

const requiredFiles = [
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/app/sitemap.ts',
  'src/app/robots.ts',
  'public/assets/logo-light.png',
  'public/assets/logo-dark.png',
  'PAGE_DEPLOYMENT_CHECKLIST.md',
  'DEPLOYMENT.md',
  'CONTRIBUTING.md',
];

requiredFiles.forEach((file) => {
  const filePath = path.join(ROOT, file);
  if (fs.existsSync(filePath)) {
    pass(`Required file exists: ${file}`);
  } else {
    fail(`Missing required file: ${file}`);
  }
});

// ============================================================================
// CHECK 2: SEO Components
// ============================================================================

section('2. SEO Components');

const seoComponents = [
  'src/app/_components/seo/organization-jsonld.tsx',
  'src/app/_components/seo/breadcrumbs.tsx',
  'src/app/_components/seo/website-jsonld.tsx',
];

seoComponents.forEach((component) => {
  const componentPath = path.join(ROOT, component);
  if (fs.existsSync(componentPath)) {
    pass(`SEO component exists: ${component}`);
  } else {
    fail(`Missing SEO component: ${component}`);
  }
});

// Check if layout.tsx includes SEO components
const layoutPath = path.join(ROOT, 'src/app/layout.tsx');
if (fs.existsSync(layoutPath)) {
  try {
    const layoutContent = fs.readFileSync(layoutPath, 'utf8');
    
    if (layoutContent.includes('OrganizationJsonLd') || layoutContent.includes('organization-jsonld')) {
      pass('Layout includes Organization schema');
    } else {
      warn('Layout may be missing Organization schema');
    }
    
    if (layoutContent.includes('viewport')) {
      pass('Layout includes viewport meta tag');
    } else {
      fail('Layout missing viewport meta tag');
    }
  } catch (error) {
    warn(`Could not read layout.tsx: ${error.message}`);
  }
}

// ============================================================================
// CHECK 3: Accessibility Setup
// ============================================================================

section('3. Accessibility Setup');

// Check for ARIA utilities
const ariaUtilsPath = path.join(ROOT, 'src/lib/aria-utils.ts');
if (fs.existsSync(ariaUtilsPath)) {
  pass('ARIA utilities present');
} else {
  warn('ARIA utilities not found (may be integrated elsewhere)');
}

// Check for accessibility audit script
const auditScriptPath = path.join(ROOT, 'scripts/brutus-axe-enforcer.ts');
if (fs.existsSync(auditScriptPath)) {
  pass('Accessibility audit script available');
} else {
  warn('Accessibility audit script not found');
}

// Check package.json for audit:css script
const packageJson = getPackageJson();
if (packageJson && packageJson.scripts && packageJson.scripts['audit:css']) {
  pass('Accessibility audit script configured in package.json');
} else if (packageJson) {
  warn('audit:css script not found in package.json');
} else {
  fail('package.json not found or invalid');
}

// ============================================================================
// CHECK 4: Build & Type Safety
// ============================================================================

section('4. Build & Type Safety');

// Check TypeScript configuration
const tsconfigPath = path.join(ROOT, 'tsconfig.json');
if (fs.existsSync(tsconfigPath)) {
  pass('TypeScript configuration present');
  
  const tsconfig = safeReadJson(tsconfigPath);
  if (tsconfig && tsconfig.compilerOptions && tsconfig.compilerOptions.strict) {
    pass('Strict TypeScript mode enabled');
  } else if (tsconfig) {
    warn('Strict TypeScript mode not enabled (recommended)');
  } else {
    warn('Could not parse tsconfig.json');
  }
} else {
  fail('TypeScript configuration missing');
}

// Check for ESLint configuration
const eslintPaths = [
  'eslint.config.mjs',
  '.eslintrc.json',
  '.eslintrc.js',
];

let eslintFound = false;
for (const eslintPath of eslintPaths) {
  if (fs.existsSync(path.join(ROOT, eslintPath))) {
    pass(`ESLint configuration found: ${eslintPath}`);
    eslintFound = true;
    break;
  }
}

if (!eslintFound) {
  fail('No ESLint configuration found');
}

// Check package.json scripts (reusing cached package.json)
if (packageJson) {
  const scripts = packageJson.scripts || {};
  
  const requiredScripts = ['build', 'lint', 'typecheck', 'dev'];
  requiredScripts.forEach((script) => {
    if (scripts[script]) {
      pass(`Script configured: ${script}`);
    } else {
      fail(`Missing required script: ${script}`);
    }
  });
  
  // Check for quality assurance scripts
  const qaScripts = ['preflight', 'smoke', 'test:e2e'];
  qaScripts.forEach((script) => {
    if (scripts[script]) {
      pass(`QA script configured: ${script}`);
    } else {
      warn(`QA script not configured: ${script}`);
    }
  });
}

// ============================================================================
// CHECK 5: Image Assets
// ============================================================================

section('5. Image Assets');

const requiredImages = [
  'public/assets/logo-light.png',
  'public/assets/logo-dark.png',
  'public/assets/nglcc-badge-light.svg',
  'public/assets/nglcc-badge-dark.svg',
];

requiredImages.forEach((image) => {
  const imagePath = path.join(ROOT, image);
  if (fs.existsSync(imagePath)) {
    pass(`Required image exists: ${image}`);
  } else {
    warn(`Missing image: ${image}`);
  }
});

// Check for hero images (Cadence)
const heroImages = [
  'public/assets/generated/hero-cadence-desktop.webp',
  'public/assets/generated/hero-cadence-tablet.webp',
  'public/assets/generated/hero-cadence-mobile.webp',
];

heroImages.forEach((image) => {
  const imagePath = path.join(ROOT, image);
  if (fs.existsSync(imagePath)) {
    pass(`Hero image exists: ${image}`);
  } else {
    warn(`Missing hero image: ${image} (may need generation)`);
  }
});

// ============================================================================
// CHECK 6: Performance & Optimization
// ============================================================================

section('6. Performance & Optimization');

// Check for Next.js config
const nextConfigPaths = [
  'next.config.ts',
  'next.config.js',
  'next.config.mjs',
];

let nextConfigFound = false;
for (const configPath of nextConfigPaths) {
  const fullPath = path.join(ROOT, configPath);
  if (fs.existsSync(fullPath)) {
    pass(`Next.js configuration found: ${configPath}`);
    nextConfigFound = true;
    
    try {
      const configContent = fs.readFileSync(fullPath, 'utf8');
      
      if (configContent.includes('images')) {
        pass('Image optimization configured');
      } else {
        warn('Image optimization may not be configured');
      }
    } catch (error) {
      warn(`Could not read ${configPath}: ${error.message}`);
    }
    
    break;
  }
}

if (!nextConfigFound) {
  fail('No Next.js configuration found');
}

// Check for bundle analyzer (reusing cached package.json)
if (packageJson) {
  const deps = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  };
  
  if (deps['@next/bundle-analyzer']) {
    pass('Bundle analyzer available');
  } else {
    warn('Bundle analyzer not installed (recommended for performance monitoring)');
  }
  
  if (deps['sharp']) {
    pass('Sharp image processor available');
  } else {
    warn('Sharp not installed (recommended for image optimization)');
  }
}

// ============================================================================
// CHECK 7: Security
// ============================================================================

section('7. Security');

// Check for middleware
const middlewarePaths = [
  'middleware.ts',
  'middleware.js',
  'src/middleware.ts',
  'src/middleware.js',
];

let middlewareFound = false;
for (const mwPath of middlewarePaths) {
  if (fs.existsSync(path.join(ROOT, mwPath))) {
    pass(`Middleware found: ${mwPath}`);
    middlewareFound = true;
    break;
  }
}

if (!middlewareFound) {
  warn('No middleware found (recommended for security headers)');
}

// Check for .env.example
const envExamplePath = path.join(ROOT, '.env.example');
if (fs.existsSync(envExamplePath)) {
  pass('Environment variable template exists');
} else {
  warn('.env.example not found (recommended for documentation)');
}

// Check gitignore for sensitive files
const gitignorePath = path.join(ROOT, '.gitignore');
if (fs.existsSync(gitignorePath)) {
  const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
  
  if (gitignoreContent.includes('.env')) {
    pass('.env files excluded from git');
  } else {
    fail('.env files may not be excluded from git');
  }
  
  if (gitignoreContent.includes('node_modules')) {
    pass('node_modules excluded from git');
  } else {
    fail('node_modules may not be excluded from git');
  }
}

// ============================================================================
// CHECK 8: Documentation
// ============================================================================

section('8. Documentation');

const requiredDocs = [
  'README.md',
  'CONTRIBUTING.md',
  'DEPLOYMENT.md',
  'PAGE_DEPLOYMENT_CHECKLIST.md',
];

requiredDocs.forEach((doc) => {
  const docPath = path.join(ROOT, doc);
  if (fs.existsSync(docPath)) {
    pass(`Documentation exists: ${doc}`);
    
    // Check doc is not empty
    const content = fs.readFileSync(docPath, 'utf8');
    if (content.length < 100) {
      warn(`Documentation seems incomplete: ${doc}`);
    }
  } else {
    if (doc === 'PAGE_DEPLOYMENT_CHECKLIST.md') {
      fail(`Critical documentation missing: ${doc}`);
    } else {
      warn(`Documentation missing: ${doc}`);
    }
  }
});

// ============================================================================
// CHECK 9: CI/CD Configuration
// ============================================================================

section('9. CI/CD Configuration');

const workflowsPath = path.join(ROOT, '.github/workflows');
if (fs.existsSync(workflowsPath)) {
  pass('.github/workflows directory exists');
  
  const workflows = fs.readdirSync(workflowsPath).filter((f) => f.endsWith('.yml') || f.endsWith('.yaml'));
  
  if (workflows.length > 0) {
    pass(`Found ${workflows.length} GitHub Actions workflow(s)`);
    workflows.forEach((wf) => log(`  - ${wf}`, colors.blue));
  } else {
    warn('No GitHub Actions workflows found');
  }
} else {
  warn('.github/workflows directory not found');
}

// ============================================================================
// CHECK 10: Mobile-First CSS
// ============================================================================

section('10. Mobile-First CSS');

// Check for Tailwind config
const tailwindPaths = [
  'tailwind.config.ts',
  'tailwind.config.js',
];

let tailwindFound = false;
for (const twPath of tailwindPaths) {
  if (fs.existsSync(path.join(ROOT, twPath))) {
    pass(`Tailwind CSS configuration found: ${twPath}`);
    tailwindFound = true;
    break;
  }
}

if (!tailwindFound) {
  warn('Tailwind CSS configuration not found (may use other CSS framework)');
}

// Check for global styles
const globalStylesPaths = [
  'src/app/globals.css',
  'src/styles/globals.css',
  'styles/globals.css',
];

let stylesFound = false;
for (const stylePath of globalStylesPaths) {
  if (fs.existsSync(path.join(ROOT, stylePath))) {
    pass(`Global styles found: ${stylePath}`);
    stylesFound = true;
    break;
  }
}

if (!stylesFound) {
  warn('Global styles file not found');
}

// ============================================================================
// SUMMARY
// ============================================================================

section('Summary');

const total = passed + warnings + criticalFailures;

log(`\nResults:`);
log(`  ✓ Passed:   ${passed}/${total}`, colors.green);
log(`  ⚠ Warnings: ${warnings}/${total}`, colors.yellow);
log(`  ✗ Failed:   ${criticalFailures}/${total}`, colors.red);

if (criticalFailures > 0) {
  log('\n❌ CRITICAL FAILURES DETECTED', colors.red);
  log('Please fix the issues above before deploying.', colors.red);
  process.exit(1);
}

if (warnings > 0 && strictMode) {
  log('\n⚠️  WARNINGS DETECTED (STRICT MODE)', colors.yellow);
  log('Strict mode enabled: All warnings must be resolved.', colors.yellow);
  process.exit(2);
}

if (warnings > 0) {
  log('\n⚠️  WARNINGS DETECTED', colors.yellow);
  log('Consider addressing warnings for optimal deployment quality.', colors.yellow);
  log('Run with --strict to treat warnings as failures.', colors.yellow);
}

if (criticalFailures === 0 && (warnings === 0 || !strictMode)) {
  log('\n✅ ALL CHECKS PASSED', colors.green);
  log('Deployment quality requirements met!', colors.green);
  process.exit(0);
}
