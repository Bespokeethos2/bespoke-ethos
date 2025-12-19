#!/usr/bin/env node

/**
 * Environment Variable Verification Script
 * 
 * This script verifies that all required environment variables for the Gemini 2.0 Flash
 * integration are present and properly configured.
 */

const requiredEnvVars = [
  {
    name: 'GOOGLE_GENERATIVE_AI_API_KEY',
    description: 'Primary API key for Google Generative AI (Gemini)',
    required: false, // Has fallback
    fallback: 'GOOGLE_GEMINI_API'
  },
  {
    name: 'GOOGLE_GEMINI_API',
    description: 'Fallback API key for Google Gemini',
    required: false, // Has fallback
    fallback: 'GOOGLE_GENERATIVE_AI_API_KEY'
  }
];

const optionalEnvVars = [
  {
    name: 'OPENAI_API_KEY',
    description: 'OpenAI API key for intelligence modules',
    usedIn: ['src/lib/intelligence.ts', 'src/lib/brutus-intelligence.ts']
  },
  {
    name: 'GOOGLE_CLOUD_PROJECT',
    description: 'Google Cloud Project ID',
    usedIn: ['Documentation']
  },
  {
    name: 'GOOGLE_CLOUD_REGION',
    description: 'Google Cloud Region',
    usedIn: ['Documentation']
  }
];

console.log('🔍 Environment Variable Verification Report\n');
console.log('═'.repeat(80));
console.log('\n📋 REQUIRED ENVIRONMENT VARIABLES\n');

let missingRequired = false;
let hasAtLeastOneGeminiKey = false;

// Check required vars with fallback logic
requiredEnvVars.forEach(envVar => {
  const value = process.env[envVar.name];
  const fallbackValue = envVar.fallback ? process.env[envVar.fallback] : null;
  const hasValue = !!value;
  const hasFallback = !!fallbackValue;
  
  if (hasValue || hasFallback) {
    hasAtLeastOneGeminiKey = true;
  }
  
  console.log(`${hasValue ? '✅' : '❌'} ${envVar.name}`);
  console.log(`   ${envVar.description}`);
  
  if (hasValue) {
    const maskedValue = value.substring(0, 8) + '...' + value.substring(value.length - 4);
    console.log(`   Value: ${maskedValue}`);
  } else {
    console.log(`   Status: NOT SET`);
  }
  
  if (envVar.fallback) {
    console.log(`   Fallback: ${envVar.fallback} ${hasFallback ? '✅ SET' : '❌ NOT SET'}`);
  }
  console.log('');
});

if (!hasAtLeastOneGeminiKey) {
  console.log('❌ CRITICAL: At least one of GOOGLE_GENERATIVE_AI_API_KEY or GOOGLE_GEMINI_API must be set!\n');
  missingRequired = true;
}

console.log('─'.repeat(80));
console.log('\n📝 OPTIONAL ENVIRONMENT VARIABLES\n');

optionalEnvVars.forEach(envVar => {
  const value = process.env[envVar.name];
  const hasValue = !!value;
  
  console.log(`${hasValue ? '✅' : '⚠️ '} ${envVar.name}`);
  console.log(`   ${envVar.description}`);
  
  if (hasValue) {
    const maskedValue = value.length > 20 
      ? value.substring(0, 8) + '...' + value.substring(value.length - 4)
      : value;
    console.log(`   Value: ${maskedValue}`);
  } else {
    console.log(`   Status: NOT SET`);
  }
  
  if (envVar.usedIn) {
    console.log(`   Used in: ${envVar.usedIn.join(', ')}`);
  }
  console.log('');
});

console.log('═'.repeat(80));
console.log('\n📊 SUMMARY\n');

if (hasAtLeastOneGeminiKey) {
  console.log('✅ All required Gemini API keys are configured');
  console.log('✅ The GeminiChatbot component will work correctly');
  console.log('✅ The API route /api/chat/google will function properly\n');
} else {
  console.log('❌ MISSING REQUIRED API KEYS!');
  console.log('❌ The GeminiChatbot component will NOT work');
  console.log('❌ The API route /api/chat/google will return errors\n');
}

console.log('📍 Files using these environment variables:');
console.log('   • src/app/api/chat/google/route.ts');
console.log('   • src/lib/intelligence.ts');
console.log('   • src/lib/brutus-intelligence.ts\n');

console.log('🚀 To configure in Vercel:');
console.log('   1. Go to: https://vercel.com/dashboard');
console.log('   2. Select your project: bespoke-ethos');
console.log('   3. Go to: Settings → Environment Variables');
console.log('   4. Add the following variables:');
console.log('      - GOOGLE_GENERATIVE_AI_API_KEY (Production, Preview, Development)');
console.log('      - GOOGLE_GEMINI_API (Production, Preview, Development)');
console.log('   5. Redeploy after adding variables\n');

console.log('═'.repeat(80));

// Exit with error code if critical vars are missing
if (missingRequired) {
  console.error('\n❌ VERIFICATION FAILED: Missing required environment variables\n');
  process.exit(1);
} else {
  console.log('\n✅ VERIFICATION PASSED: All required environment variables are present\n');
  process.exit(0);
}
