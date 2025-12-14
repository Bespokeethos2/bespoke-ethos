import { visionModel } from '@/lib/intelligence';
import { generateText } from 'ai';
import { NextRequest } from 'next/server';

/**
 * INTELLIGENCE VISION REMOTE API
 * 
 * Exposes Gemini Vision capabilities via authenticated API endpoint.
 * Analyzes images using Computer Vision.
 */

export const runtime = 'edge';
export const maxDuration = 60;

// API Key validation
function validateApiKey(request: NextRequest): boolean {
  const apiKey = request.headers.get('x-api-key');
  const validKey = process.env.API_KEY;
  
  if (!validKey) {
    console.warn('⚠️ API_KEY not set in environment');
    return false;
  }
  
  return apiKey === validKey;
}

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  const apiKey = request.headers.get('x-api-key') || 'missing';
  
  // Validate API key
  if (!validateApiKey(request)) {
    return new Response(
      JSON.stringify({ 
        error: 'Unauthorized',
        message: 'Valid x-api-key header required. See docs/API_REFERENCE.md for setup.'
      }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    // Validate request body
    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(
        JSON.stringify({ 
          error: 'Invalid JSON',
          message: 'Request body must be valid JSON'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { imageBase64, prompt } = body;

    // Validate inputs
    if (!imageBase64 || typeof imageBase64 !== 'string') {
      return new Response(
        JSON.stringify({ 
          error: 'Invalid imageBase64',
          message: 'imageBase64 must be a non-empty base64-encoded string'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
      return new Response(
        JSON.stringify({ 
          error: 'Invalid prompt',
          message: 'prompt must be a non-empty string'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate environment
    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      console.error('❌ GOOGLE_GENERATIVE_AI_API_KEY not configured');
      return new Response(
        JSON.stringify({ 
          error: 'Service unavailable',
          message: 'Vision service is not configured. Contact administrator.'
        }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Implement Retry with Exponential Backoff
    const maxRetries = 3;
    let attempt = 0;
    let result;

    while (attempt < maxRetries) {
      try {
        result = await generateText({
          model: visionModel,
          messages: [
            {
              role: 'user',
              content: [
                { type: 'text', text: prompt.trim() },
                { type: 'image', image: imageBase64 },
              ],
            },
          ],
        });
        break; // Success
      } catch (err: any) {
        attempt++;
        const isQuotaError = err.message?.includes('429') || err.message?.includes('quota') || err.message?.includes('503');
        
        if (isQuotaError && attempt < maxRetries) {
          const delay = Math.pow(2, attempt) * 1000; // 2s, 4s, 8s
          console.warn(`⚠️ Quota hit. Retrying in ${delay}ms (Attempt ${attempt}/${maxRetries})...`);
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }
        throw err; // Re-throw if not a quota error or max retries reached
      }
    }

    const { text } = result!;

    return new Response(
      JSON.stringify({ analysis: text }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error: any) {
    console.error('❌ Intelligence Vision API Error:', error);
    
    // Provide helpful error messages
    let errorMessage = 'An unexpected error occurred';
    if (error.message?.includes('API key')) {
      errorMessage = 'Google API key is invalid or expired';
    } else if (error.message?.includes('quota')) {
      errorMessage = 'API quota exceeded. Please try again later.';
    } else if (error.message?.includes('invalid image')) {
      errorMessage = 'Invalid image format. Use base64-encoded PNG or JPEG.';
    }
    
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        message: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
