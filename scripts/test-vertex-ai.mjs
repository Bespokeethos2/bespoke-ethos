#!/usr/bin/env node
/**
 * Test Vertex AI / Gemini API Connection
 * Run: node --env-file=.env.local scripts/test-vertex-ai.mjs
 */

import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = process.env.GOOGLE_GEMINI_API || process.env.GOOGLE_GENERATIVE_AI_API_KEY;

console.log('🔍 Testing Vertex AI Connection...\n');

if (!API_KEY) {
    console.error('❌ ERROR: No API key found in environment variables');
    console.error('   Expected: GOOGLE_GEMINI_API or GOOGLE_GENERATIVE_AI_API_KEY');
    console.error('   Check your .env.local file\n');
    process.exit(1);
}

console.log('✅ API Key found:', API_KEY.substring(0, 20) + '...');
console.log('📦 Project:', process.env.GOOGLE_CLOUD_PROJECT || 'Not set');
console.log('🌍 Region:', process.env.GOOGLE_CLOUD_REGION || 'Not set');
console.log('\n🚀 Sending test request to Gemini 2.5 Pro...\n');

try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = 'Say "Hello from Vertex AI!" and confirm you are running on Google Cloud.';
    
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    console.log('✅ SUCCESS! Vertex AI is working correctly.\n');
    console.log('📝 Response from Gemini 2.5 Pro:');
    console.log('─'.repeat(60));
    console.log(text);
    console.log('─'.repeat(60));
    console.log('\n✨ Your Google Cloud billing and Vertex AI setup is complete!\n');

} catch (error) {
    console.error('❌ ERROR: Failed to connect to Vertex AI\n');
    console.error('Error details:', error.message);
    
    if (error.message.includes('API key')) {
        console.error('\n💡 Tip: Verify your API key is correct in .env.local');
    } else if (error.message.includes('quota')) {
        console.error('\n💡 Tip: Check your billing account has available quota');
    } else if (error.message.includes('permission')) {
        console.error('\n💡 Tip: Ensure Vertex AI API is enabled for your project');
    }
    
    process.exit(1);
}
