import { NextRequest, NextResponse } from "next/server";
import { createOpenAI } from "@ai-sdk/openai";
import { embed } from "ai";
import { sanityFetch } from "@/lib/sanity/client";
import { searchChangelogQuery } from "@/lib/sanity/queries";
import { PINECONE_ENV_VARS, OPENAI_EMBEDDING_CONFIG } from "@/lib/search/config";
import type { SanityChangelogPost } from "@/lib/sanity/types";

// This internal API route handles search requests by querying Sanity
// and optionally Pinecone for semantic search, with fallbacks.

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json();

    if (!query || typeof query !== "string") {
      return NextResponse.json({ error: "Invalid search query" }, { status: 400 });
    }

    const searchResults: { query: string; source: string; mode: string; results: SanityChangelogPost[] | any[] } = {
      query,
      source: "unknown",
      mode: "unknown",
      results: [],
    };

    const pineconeApiKey = process.env[PINECONE_ENV_VARS.API_KEY];
    const pineconeHost = process.env[PINECONE_ENV_VARS.HOST];
    const openaiApiKey = process.env[OPENAI_EMBEDDING_CONFIG.environmentVariable];

    // --- Fallback to Sanity (GROQ-only) if Pinecone/OpenAI not configured ---
    if (!pineconeApiKey || !pineconeHost || !openaiApiKey) {
      console.warn("Skipping Pinecone/OpenAI integration. Falling back to GROQ search.");
      searchResults.source = "sanity";
      searchResults.mode = "fallback";

      const sanityResults = await sanityFetch<SanityChangelogPost[]>(searchChangelogQuery, { query: `*${query}*` });
      searchResults.results = sanityResults || [];

      return NextResponse.json(searchResults);
    }

    // --- Proceed with Pinecone/OpenAI integration ---
    searchResults.source = "pinecone";
    searchResults.mode = "vector";

    // 1. Get embedding for the query
    let embedding: number[];
    try {
          const openaiClient = createOpenAI({
            apiKey: openaiApiKey,
          });
      
          const embeddingResponse = await embed({
            model: openaiClient.textEmbeddingModel(OPENAI_EMBEDDING_CONFIG.modelName),        value: query,
      });
      embedding = embeddingResponse.embedding;
    } catch (embeddingError) {
      console.error("Error generating embedding:", embeddingError);
      // Fallback to GROQ if embedding fails
      searchResults.source = "sanity";
      searchResults.mode = "error-fallback";
      const sanityResults = await sanityFetch<SanityChangelogPost[]>(searchChangelogQuery, { query: `*${query}*` });
      searchResults.results = sanityResults || [];
      return NextResponse.json(searchResults);
    }

    // 2. Query Pinecone
    try {
      const pineconeQueryUrl = `${pineconeHost}/query`;
      const pineconeResponse = await fetch(pineconeQueryUrl, {
        method: "POST",
        headers: {
          "Api-Key": pineconeApiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vector: embedding,
          topK: 10, // Or a configurable value
          includeMetadata: true,
        }),
      });

      if (!pineconeResponse.ok) {
        throw new Error(`Pinecone API error: ${pineconeResponse.status} ${pineconeResponse.statusText}`);
      }

      const pineconeData = await pineconeResponse.json();
      // Assuming pineconeData.matches has the results, and metadata contains original content identifiers
      // This part would need refinement based on actual Pinecone metadata structure.
      const pineconeMatches = pineconeData.matches || [];

      // For initial implementation, just return Pinecone matches.
      // A more sophisticated approach would involve fetching full Sanity documents based on Pinecone matches.
      searchResults.results = pineconeMatches.map((match: any) => ({
        _id: match.id, // Assuming Pinecone ID matches Sanity _id or slug
        title: match.metadata?.title || "Untitled",
        slug: match.metadata?.slug || match.id,
        excerpt: match.metadata?.snippet || "",
        source: "pinecone",
      }));
      
      // If Pinecone returns no results, fallback to Sanity
      if (searchResults.results.length === 0) {
        console.warn("Pinecone returned no results. Falling back to GROQ search.");
        searchResults.source = "sanity";
        searchResults.mode = "pinecone-empty-fallback";
        const sanityResults = await sanityFetch<SanityChangelogPost[]>(searchChangelogQuery, { query: `*${query}*` });
        searchResults.results = sanityResults || [];
      }

    } catch (pineconeError) {
      console.error("Error querying Pinecone:", pineconeError);
      // Fallback to GROQ if Pinecone query fails
      searchResults.source = "sanity";
      searchResults.mode = "error-fallback";
      const sanityResults = await sanityFetch<SanityChangelogPost[]>(searchChangelogQuery, { query: `*${query}*` });
      searchResults.results = sanityResults || [];
    }

    return NextResponse.json(searchResults);

  } catch (error) {
    console.error("Internal server error in /api/search/internal:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}