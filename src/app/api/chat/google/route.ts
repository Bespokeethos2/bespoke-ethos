import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText, convertToModelMessages, type UIMessage } from 'ai';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

const SYSTEM_PROMPT = `You are the Bespoke Ethos AI Assistant. You help small business founders understand AI automation. Be friendly, direct, and avoid corporate jargon. Key context: NGLCC certified LGBTQ+ business based in Cleveland, offering AI workflow automation services.`;

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GOOGLE_GEMINI_API,
});

export async function POST(req: Request) {
  try {
    // Check if API key is configured
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GOOGLE_GEMINI_API;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Google Generative AI API key not configured. Please set GOOGLE_GENERATIVE_AI_API_KEY or GOOGLE_GEMINI_API environment variable.' },
        { status: 500 }
      );
    }

    const { messages }: { messages: UIMessage[] } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid request: messages array is required' },
        { status: 400 }
      );
    }

    const result = streamText({
      model: google('models/gemini-2.0-flash'),
      messages: convertToModelMessages(messages),
      system: SYSTEM_PROMPT,
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('[GEMINI CHAT] Error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request. Please try again.' },
      { status: 500 }
    );
  }
}
