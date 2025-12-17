/**
 * API Route: Batch Processing for Claude
 * 
 * Endpoint: 
 * - POST /api/claude/batch - Create batch job
 * - GET /api/claude/batch?batchId=xxx - Get batch results
 * 
 * Features:
 * - 50% cost discount on all operations
 * - Bulk processing for non-real-time tasks
 */

import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// POST: Create batch job
export async function POST(request: NextRequest) {
  try {
    const { requests } = await request.json();

    if (!Array.isArray(requests) || requests.length === 0) {
      return NextResponse.json(
        { error: 'Requests array is required' },
        { status: 400 }
      );
    }

    const batch = await anthropic.messages.batches.create({
      requests: requests.map((req: any) => ({
        custom_id: req.custom_id,
        params: {
          model: req.model || 'claude-sonnet-4-5-20250929',
          max_tokens: req.max_tokens || 1024,
          messages: req.messages,
        },
      })),
    });

    return NextResponse.json({
      batchId: batch.id,
      status: batch.processing_status,
      created_at: batch.created_at,
      request_counts: batch.request_counts,
      message: `Batch created successfully. Results available in 5-10 minutes at: /api/claude/batch?batchId=${batch.id}`,
    });
  } catch (error: any) {
    console.error('Batch Creation Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create batch' },
      { status: error.status || 500 }
    );
  }
}

// GET: Retrieve batch results
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const batchId = searchParams.get('batchId');

    if (!batchId) {
      return NextResponse.json(
        { error: 'batchId parameter is required' },
        { status: 400 }
      );
    }

    // Get batch status
    const batch = await anthropic.messages.batches.retrieve(batchId);

    if (batch.processing_status !== 'ended') {
      return NextResponse.json({
        batchId: batch.id,
        status: batch.processing_status,
        request_counts: batch.request_counts,
        message: 'Batch is still processing. Check back in a few minutes.',
      });
    }

    // Retrieve results
    const results = [];
    // @ts-expect-error - SDK type mismatch with async iterator
    for await (const entry of anthropic.messages.batches.results(batchId)) {
      if (entry.result.type === 'succeeded') {
        results.push({
          custom_id: entry.custom_id,
          content: entry.result.message.content,
          usage: entry.result.message.usage,
        });
      } else {
        results.push({
          custom_id: entry.custom_id,
          error: entry.result.error,
        });
      }
    }

    return NextResponse.json({
      batchId: batch.id,
      status: batch.processing_status,
      request_counts: batch.request_counts,
      results,
    });
  } catch (error: any) {
    console.error('Batch Retrieval Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to retrieve batch' },
      { status: error.status || 500 }
    );
  }
}
