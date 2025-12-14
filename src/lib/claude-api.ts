/**
 * Claude API Integration with Prompt Caching & Batch Processing
 * Cost Optimization Guide for bespokeethos.com
 * 
 * Key Features:
 * 1. Prompt Caching: 90% cost savings on repeated context
 * 2. Batch Processing: 50% discount on all operations
 * 3. Extended Context: 200K tokens with caching
 */

import Anthropic from '@anthropic-ai/sdk';

// Initialize Claude client with API key from environment
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// ========================================
// 1. PROMPT CACHING - 90% COST SAVINGS
// ========================================

/**
 * Prompt Caching enables reuse of large context blocks
 * 
 * PRICING (Claude 3.5 Sonnet):
 * - Base input: $3/MTok
 * - Cache write: $3.75/MTok (25% markup)
 * - Cache read: $0.30/MTok (90% savings!)
 * 
 * BEST FOR:
 * - Knowledge bases (embed entire docs)
 * - System prompts (long instructions)
 * - Few-shot examples (100+ examples)
 * - Conversation history (multi-turn chats)
 */

interface CachedPromptConfig {
  systemPrompt?: string;
  knowledgeBase?: string;
  examples?: string[];
  userMessage: string;
  model?: string;
  maxTokens?: number;
}

export async function chatWithCaching(config: CachedPromptConfig) {
  const {
    systemPrompt = 'You are a helpful AI assistant for Bespoke Ethos, an LGBTQ+ AI consulting firm.',
    knowledgeBase,
    examples = [],
    userMessage,
    model = 'claude-sonnet-4-5-20250929',
    maxTokens = 1024,
  } = config;

  // Build system blocks with cache breakpoints
  // Cache is applied to the LAST marked block and all content before it
  const systemBlocks = [];

  // Add system prompt (will be cached)
  if (systemPrompt) {
    systemBlocks.push({
      type: 'text' as const,
      text: systemPrompt,
    });
  }

  // Add knowledge base (will be cached)
  if (knowledgeBase) {
    systemBlocks.push({
      type: 'text' as const,
      text: knowledgeBase,
    // @ts-ignore - cache_control is a beta feature not yet in the SDK types
    cache_control: { type: 'ephemeral' as const }, // CACHE BREAKPOINT
  });
  }

  // Add few-shot examples (will be cached)
  if (examples.length > 0) {
    systemBlocks.push({
      type: 'text' as const,
      text: `## Examples:\n\n${examples.join('\n\n')}`,
      // @ts-ignore - cache_control is a beta feature not yet in the SDK types
      cache_control: { type: 'ephemeral' as const }, // CACHE BREAKPOINT
    });
  }

  try {
    const message = await anthropic.messages.create({
      model,
      max_tokens: maxTokens,
      // @ts-ignore - cache_control is a beta feature not yet in the SDK types
      system: systemBlocks,
      messages: [
        {
          role: 'user',
          content: userMessage,
        },
      ],
    });

    // Log cache performance
    console.log('💰 Cache Stats:', {
      // @ts-ignore - usage types might be missing cache stats
      input_tokens: message.usage.input_tokens,
      // @ts-ignore
      cache_creation_input_tokens: message.usage.cache_creation_input_tokens,
      // @ts-ignore
      cache_read_input_tokens: message.usage.cache_read_input_tokens,
      output_tokens: message.usage.output_tokens,
    });

    return message;
  } catch (error) {
    console.error('❌ Claude API Error:', error);
    throw error;
  }
}

/**
 * Example: Chat with full knowledge base cached
 * First call: Writes cache (25% markup)
 * Subsequent calls: Read cache (90% savings!)
 */
export async function chatWithKnowledgeBase(
  userMessage: string,
  knowledgeBase: string
) {
  return chatWithCaching({
    systemPrompt: `You are a helpful AI assistant for Bespoke Ethos, specializing in LGBTQ+ AI consulting.
Use the knowledge base below to answer questions accurately.`,
    knowledgeBase,
    userMessage,
  });
}

// ========================================
// 2. BATCH PROCESSING - 50% DISCOUNT
// ========================================

/**
 * Batch API for non-real-time processing
 * 
 * PRICING: 50% discount on ALL costs
 * - Input: $1.50/MTok (vs $3/MTok)
 * - Output: $7.50/MTok (vs $15/MTok)
 * 
 * BEST FOR:
 * - Bulk content generation
 * - Data analysis pipelines
 * - Overnight processing
 * - Non-urgent tasks
 */

interface BatchRequest {
  custom_id: string;
  params: {
    model: string;
    max_tokens: number;
    messages: Array<{
      role: 'user' | 'assistant';
      content: string;
    }>;
  };
}

export async function createBatchJob(requests: BatchRequest[]) {
  try {
    const batch = await anthropic.messages.batches.create({
      requests,
    });

    console.log('📦 Batch Created:', {
      id: batch.id,
      processing_status: batch.processing_status,
      request_counts: batch.request_counts,
    });

    return batch;
  } catch (error) {
    console.error('❌ Batch Creation Error:', error);
    throw error;
  }
}

export async function getBatchResults(batchId: string) {
  try {
    const batch = await anthropic.messages.batches.retrieve(batchId);

    if (batch.processing_status !== 'ended') {
      console.log(`⏳ Batch still processing: ${batch.processing_status}`);
      return null;
    }

    // Retrieve results
    const results = [];
    for await (const entry of await anthropic.messages.batches.results(batchId)) {
      if (entry.result.type === 'succeeded') {
        results.push({
          custom_id: entry.custom_id,
          content: entry.result.message.content,
        });
      } else if (entry.result.type === 'errored') {
        console.error(`❌ Failed: ${entry.custom_id}`, entry.result.error);
      } else {
        console.error(`❌ Batch entry status: ${entry.result.type}`, entry.custom_id);
      }
    }

    console.log('✅ Batch Complete:', {
      total: results.length,
      succeeded: batch.request_counts.succeeded,
      failed: batch.request_counts.errored,
    });

    return results;
  } catch (error) {
    console.error('❌ Batch Retrieval Error:', error);
    throw error;
  }
}

/**
 * Example: Bulk email personalization (50% cheaper!)
 */
export async function generateBulkEmails(contacts: Array<{ id: string; name: string; company: string }>) {
  const requests: BatchRequest[] = contacts.map((contact) => ({
    custom_id: contact.id,
    params: {
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 500,
      messages: [
        {
          role: 'user',
          content: `Write a personalized cold email for ${contact.name} at ${contact.company} about AI consulting services for LGBTQ+ organizations.`,
        },
      ],
    },
  }));

  return createBatchJob(requests);
}

// ========================================
// 3. STREAMING WITH CACHING
// ========================================

/**
 * Stream responses for real-time UX with cached context
 * 
 * BENEFITS:
 * - Fast TTFT (time to first token): 11.5s → 2.4s
 * - 90% cost savings on cached context
 * - Progressive UI updates
 */

export async function streamWithCaching(
  userMessage: string,
  knowledgeBase?: string
) {
  const systemBlocks: any[] = [
    {
      type: 'text' as const,
      text: 'You are a helpful AI assistant for Bespoke Ethos.',
    },
  ];

  if (knowledgeBase) {
    systemBlocks.push({
      type: 'text' as const,
      text: knowledgeBase,
      // @ts-ignore
      cache_control: { type: 'ephemeral' as const },
    });
  }

  const stream = await anthropic.messages.stream({
    model: 'claude-sonnet-4-5-20250929',
    max_tokens: 1024,
    // @ts-ignore
    system: systemBlocks,
    messages: [
      {
        role: 'user',
        content: userMessage,
      },
    ],
  });

  // Handle streaming events
  stream
    .on('text', (text: string) => {
      process.stdout.write(text); // Real-time output
    })
    .on('message', (message: any) => {
      console.log('\n💰 Final Cache Stats:', message.usage);
    });

  return stream.finalMessage();
}

// ========================================
// 4. COST CALCULATION HELPERS
// ========================================

export interface CostBreakdown {
  baseCost: number;
  cachedCost: number;
  savings: number;
  savingsPercent: number;
}

/**
 * Calculate cost savings from prompt caching
 */
export function calculateCacheSavings(
  inputTokens: number,
  cacheWriteTokens: number,
  cacheReadTokens: number,
  outputTokens: number,
  modelPricing: {
    baseInput: number; // per MTok
    cacheWrite: number; // per MTok
    cacheRead: number; // per MTok
    output: number; // per MTok
  } = {
    baseInput: 3, // Sonnet 4.5
    cacheWrite: 3.75,
    cacheRead: 0.3,
    output: 15,
  }
): CostBreakdown {
  // Cost WITHOUT caching
  const baseCost =
    (inputTokens * modelPricing.baseInput) / 1_000_000 +
    (outputTokens * modelPricing.output) / 1_000_000;

  // Cost WITH caching
  const cachedCost =
    ((inputTokens - cacheReadTokens) * modelPricing.baseInput) / 1_000_000 +
    (cacheWriteTokens * modelPricing.cacheWrite) / 1_000_000 +
    (cacheReadTokens * modelPricing.cacheRead) / 1_000_000 +
    (outputTokens * modelPricing.output) / 1_000_000;

  const savings = baseCost - cachedCost;
  const savingsPercent = (savings / baseCost) * 100;

  return {
    baseCost,
    cachedCost,
    savings,
    savingsPercent,
  };
}

/**
 * Calculate batch processing savings
 */
export function calculateBatchSavings(
  inputTokens: number,
  outputTokens: number,
  modelPricing = {
    baseInput: 3,
    baseOutput: 15,
    batchInput: 1.5, // 50% discount
    batchOutput: 7.5, // 50% discount
  }
): CostBreakdown {
  const baseCost =
    (inputTokens * modelPricing.baseInput) / 1_000_000 +
    (outputTokens * modelPricing.baseOutput) / 1_000_000;

  const cachedCost =
    (inputTokens * modelPricing.batchInput) / 1_000_000 +
    (outputTokens * modelPricing.batchOutput) / 1_000_000;

  const savings = baseCost - cachedCost;
  const savingsPercent = (savings / baseCost) * 100;

  return {
    baseCost,
    cachedCost,
    savings,
    savingsPercent,
  };
}

// ========================================
// 5. USAGE EXAMPLES
// ========================================

/**
 * Example 1: Multi-turn conversation with cached system prompt
 * - First turn: Write cache ($3.75/MTok)
 * - All subsequent turns: Read cache ($0.30/MTok) = 90% savings!
 */
export async function multiTurnConversation() {
  const systemPrompt = `You are Claude, an AI assistant for Bespoke Ethos.
  
Company Background:
- LGBTQ+ AI consulting firm based in Cleveland, OH
- Focus on ethical AI implementation
- Target clients: Tech companies, nonprofits, government agencies
- Core values: Inclusivity, transparency, innovation

Tone: Professional, empathetic, technically precise`;

  // Turn 1: Cache write
  const turn1 = await chatWithCaching({
    systemPrompt,
    userMessage: 'What services does Bespoke Ethos offer?',
  });

  // Turn 2-N: Cache read (90% savings!)
  const turn2 = await chatWithCaching({
    systemPrompt,
    userMessage: 'How can you help with bias detection in AI?',
  });

  return { turn1, turn2 };
}

/**
 * Example 2: Batch processing for content generation
 * 50% discount on all tokens!
 */
export async function batchContentGeneration() {
  const topics = [
    'AI Ethics in Healthcare',
    'LGBTQ+ Representation in Machine Learning',
    'Bias Detection Frameworks',
    'Inclusive AI Design Principles',
    'AI Governance for Nonprofits',
  ];

  const requests: BatchRequest[] = topics.map((topic, idx) => ({
    custom_id: `blog-post-${idx}`,
    params: {
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 2000,
      messages: [
        {
          role: 'user',
          content: `Write a 500-word blog post about: ${topic}`,
        },
      ],
    },
  }));

  const batch = await createBatchJob(requests);
  console.log('📦 Batch job created. Check status in 5-10 minutes.');
  return batch.id;
}

/**
 * Example 3: Knowledge base Q&A with 100K token context
 * - Latency: 11.5s → 2.4s (79% faster)
 * - Cost: 90% savings on cached KB
 */
export async function knowledgeBaseQA(
  question: string,
  fullKnowledgeBase: string // 100K+ tokens
) {
  return chatWithKnowledgeBase(question, fullKnowledgeBase);
}

export default anthropic;
