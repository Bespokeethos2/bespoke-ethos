
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function verifyBilling() {
  console.log('Verifying Google Cloud Billing via API Check...');
  
  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    console.error('❌ GOOGLE_GENERATIVE_AI_API_KEY not found in .env.local');
    return;
  }

  const google = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
  });

  try {
    const { text } = await generateText({
      model: google('models/gemini-1.5-pro-latest'),
      prompt: 'Hello, are you active? Reply with "Billing Active" if you can read this.',
    });
    console.log('✅ API Request Successful:', text);
    console.log('✅ Billing/Credits appear to be active.');
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('❌ API Request Failed:', message);
    if (message.includes('quota') || message.includes('billing')) {
      console.error('⚠️  This error indicates a billing or quota issue.');
    }
  }
}

verifyBilling();
