/**
 * React Hook: useClaude with Prompt Caching
 * 
 * Features:
 * - Automatic prompt caching for repeated context
 * - Streaming support with real-time updates
 * - TypeScript types for safety
 */

'use client';

import { useState, useCallback, useRef } from 'react';

interface UsageStats {
  input_tokens?: number;
  cache_creation_input_tokens?: number;
  cache_read_input_tokens?: number;
  output_tokens?: number;
}

interface ClaudeResponse {
  content: string;
  usage?: UsageStats;
  model?: string;
}

interface ClaudeOptions {
  systemPrompt?: string;
  knowledgeBase?: string;
  stream?: boolean;
}

export function useClaude() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<string>('');
  const [usage, setUsage] = useState<UsageStats | null>(null);
  const abortController = useRef<AbortController | null>(null);

  const sendMessage = useCallback(
    async (message: string, options: ClaudeOptions = {}) => {
      setLoading(true);
      setError(null);
      setResponse('');
      setUsage(null);

      // Create abort controller for cancellation
      abortController.current = new AbortController();

      try {
        const res = await fetch('/api/claude', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message,
            systemPrompt: options.systemPrompt,
            knowledgeBase: options.knowledgeBase,
            stream: options.stream,
          }),
          signal: abortController.current.signal,
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || 'API request failed');
        }

        if (options.stream) {
          // Handle streaming response
          const reader = res.body?.getReader();
          const decoder = new TextDecoder();
          let accumulated = '';

          if (reader) {
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;

              const chunk = decoder.decode(value, { stream: true });
              accumulated += chunk;
              setResponse(accumulated);
            }
          }
        } else {
          // Handle standard response
          const data: ClaudeResponse = await res.json();
          setResponse(data.content);
          setUsage(data.usage || null);
        }
      } catch (err: any) {
        if (err.name === 'AbortError') {
          setError('Request cancelled');
        } else {
          setError(err.message || 'Failed to send message');
        }
      } finally {
        setLoading(false);
        abortController.current = null;
      }
    },
    []
  );

  const cancel = useCallback(() => {
    if (abortController.current) {
      abortController.current.abort();
    }
  }, []);

  return {
    sendMessage,
    cancel,
    loading,
    error,
    response,
    usage,
  };
}

// ========================================
// Helper Hook for Batch Processing
// ========================================

interface BatchRequest {
  custom_id: string;
  messages: Array<{ role: 'user' | 'assistant'; content: string }>;
  model?: string;
  max_tokens?: number;
}

interface BatchResult {
  custom_id: string;
  content?: any;
  usage?: UsageStats;
  error?: any;
}

export function useClaudeBatch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [batchId, setBatchId] = useState<string | null>(null);
  const [results, setResults] = useState<BatchResult[]>([]);

  const createBatch = useCallback(async (requests: BatchRequest[]) => {
    setLoading(true);
    setError(null);
    setBatchId(null);

    try {
      const res = await fetch('/api/claude/batch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ requests }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to create batch');
      }

      const data = await res.json();
      setBatchId(data.batchId);
      return data.batchId;
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const getBatchResults = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/claude/batch?batchId=${id}`);

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to get batch results');
      }

      const data = await res.json();

      if (data.status === 'ended') {
        setResults(data.results);
        return data.results;
      } else {
        setError(`Batch still processing: ${data.status}`);
        return null;
      }
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    createBatch,
    getBatchResults,
    loading,
    error,
    batchId,
    results,
  };
}
