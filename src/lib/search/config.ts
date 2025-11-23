// src/lib/search/config.ts

// This file defines the configuration for the OpenAI embedding model
// and the expected shape of the Pinecone index.
// These are conceptual definitions for agent's understanding and documentation.

/**
 * Configuration for the OpenAI Embedding Model used for vectorization.
 *
 * @property {string} modelName - The identifier for the OpenAI embedding model (e.g., "text-embedding-ada-002", "text-embedding-3-small").
 * @property {number} dimensions - The expected output vector dimensions of the model.
 * @property {string} environmentVariable - The environment variable used to store the OpenAI API Key.
 */
export const OPENAI_EMBEDDING_CONFIG = {
  modelName: process.env.EMBEDDING_MODEL || "text-embedding-3-small", // Default model, can be overridden by EMBEDDING_MODEL env var
  dimensions: 1536, // Common dimension for text-embedding-ada-002, text-embedding-3-small is often 1536 but can be reduced
  environmentVariable: "OPENAI_API_KEY",
};

/**
 * Defines the expected schema/shape of documents stored in the Pinecone index.
 * These are the metadata fields that will be associated with each vector.
 *
 * @property {string} id - Unique identifier for the document/vector.
 * @property {string} slug - URL-friendly slug for the document.
 * @property {string} title - Main title of the document.
 * @property {string} snippet - A short excerpt or summary of the document content.
 * @property {string} type - The content type (e.g., "changelogPost", "marketingPage", "faq").
 * @property {string[]} tags - Optional tags for filtering or categorization.
 */
export const PINECONE_INDEX_SHAPE = {
  id: { type: "string", description: "Unique identifier for the document/vector" },
  slug: { type: "string", description: "URL-friendly slug for the document" },
  title: { type: "string", description: "Main title of the document" },
  snippet: { type: "string", description: "A short excerpt or summary of the document content" },
  type: { type: "string", description: "The content type (e.g., 'changelogPost', 'marketingPage', 'faq')" },
  tags: { type: "string[]", description: "Optional tags for filtering or categorization" },
};

// Environment variables relevant to Pinecone interaction
export const PINECONE_ENV_VARS = {
  API_KEY: "PINECONE_API_KEY",
  HOST: "PINECONE_HOST",
  NAMESPACE: "PINECONE_NAMESPACE", // Optional, defaults to "production"
};
