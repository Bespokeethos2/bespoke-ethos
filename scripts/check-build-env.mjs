#!/usr/bin/env node
/**
 * Build-time environment validation script
 * Warns about missing optional API keys without failing the build
 */

const log = (m) => process.stdout.write(`[build-env] ${m}\n`);
const warn = (m) => process.stdout.write(`[build-env][WARN] ${m}\n`);

log('Checking build-time environment variables...');

let hasWarnings = false;

// Special check for OpenAI configuration
const hasOpenAI = Boolean((process.env.OPENAI_API_KEY ?? '').trim());
const hasGateway = Boolean(
  (process.env.AI_GATEWAY_URL ?? '').trim() &&
  (process.env.AI_GATEWAY_API_KEY ?? '').trim()
);

if (!hasOpenAI && !hasGateway) {
  hasWarnings = true;
  warn('No OpenAI or AI Gateway configuration detected.');
  warn('The following API routes will fail at runtime:');
  warn('  - /api/chat (streaming chat endpoint)');
  warn('  - /api/brutus (automation assistant endpoint)');
  warn('  - /api/search/internal (vector search with embeddings)');
  warn('  - /api/dev-coder (requires OPENAI_API_KEY specifically)');
  warn('');
  warn('To fix: Set either OPENAI_API_KEY or both AI_GATEWAY_URL + AI_GATEWAY_API_KEY');
  warn('Note: /api/dev-coder requires OPENAI_API_KEY and does not support AI Gateway');
  warn('');
} else if (!hasOpenAI && hasGateway) {
  hasWarnings = true;
  warn('OPENAI_API_KEY not configured (using AI Gateway only).');
  warn('The following API route will fail at runtime:');
  warn('  - /api/dev-coder (requires OPENAI_API_KEY specifically)');
  warn('');
  warn('To fix: Set OPENAI_API_KEY for /api/dev-coder support');
  warn('');
}

// Check Airtable configuration
const hasAirtableBase = Boolean(
  (process.env.AIRTABLE_API_KEY ?? '').trim() &&
  (process.env.AIRTABLE_BASE_ID ?? '').trim()
);

if (!hasAirtableBase) {
  hasWarnings = true;
  warn('Airtable configuration incomplete.');
  warn('The following features will be degraded:');
  warn('  - /api/contact (form submissions will not be saved)');
  warn('  - /api/newsletter (subscriptions will not be saved)');
  warn('');
  warn('To fix: Set AIRTABLE_API_KEY and AIRTABLE_BASE_ID');
  warn('');
}

// Check Sanity configuration
const hasSanity = Boolean(
  (process.env.SANITY_PROJECT_ID ?? '').trim() &&
  (process.env.SANITY_DATASET ?? '').trim()
);

if (!hasSanity) {
  hasWarnings = true;
  warn('Sanity CMS configuration incomplete.');
  warn('Content from Sanity will not be available unless SKIP_REMOTE_DATA=1');
  warn('');
  warn('To fix: Set SANITY_PROJECT_ID and SANITY_DATASET');
  warn('');
}

// Summary
if (hasWarnings) {
  warn('──────────────────────────────────────────────────────────');
  warn('Build will proceed, but some API routes may fail at runtime.');
  warn('This is expected for local development or CI builds.');
  warn('Ensure production environment has all required variables set.');
  warn('──────────────────────────────────────────────────────────');
} else {
  log('All environment variables configured ✓');
}

log('Build environment check complete.');

// Always exit successfully - this is a warning-only script
process.exit(0);
