import { NextRequest, NextResponse } from 'next/server';

/**
 * Text-to-Speech API Route (Stub)
 * 
 * Currently returns a stub response. The VoiceChatbot component
 * will fall back to browser-native Web Speech API.
 * 
 * To enable Google Cloud TTS:
 * 1. npm install @google-cloud/text-to-speech
 * 2. Configure GOOGLE_APPLICATION_CREDENTIALS
 * 3. Replace this file with the full implementation
 */

export interface TTSRequest {
  text: string;
  voice?: {
    languageCode?: string;
    name?: string;
    ssmlGender?: 'MALE' | 'FEMALE' | 'NEUTRAL';
  };
}

export async function POST(request: NextRequest) {
  // Return a 501 Not Implemented - the client will fall back to Web Speech API
  return NextResponse.json(
    { 
      error: 'TTS service not configured. Using browser fallback.',
      fallback: true 
    },
    { status: 501 }
  );
}

// Health check
export async function GET() {
  return NextResponse.json({
    status: 'stub',
    service: 'Text-to-Speech (Browser Fallback)',
    message: 'Install @google-cloud/text-to-speech and configure credentials for Google Cloud TTS',
    voices: [
      { name: 'browser-native', description: 'Browser Web Speech API (active fallback)' },
      { name: 'en-US-Neural2-D', description: 'Google Cloud Neural voice (requires setup)' },
    ],
  });
}
