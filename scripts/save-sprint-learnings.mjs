#!/usr/bin/env node
/**
 * Save Sprint Learnings to Pinecone
 * 
 * Stores sprint completion data, decisions, and learnings
 * in Pinecone for future retrieval by Brutus
 */

import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
config({ path: join(__dirname, '..', '.env.local') });

const requiredEnvVars = [
    'PINECONE_API_KEY',
    'PINECONE_HOST',
    'PINECONE_INDEX_NAME',
    'OPENAI_API_KEY',
    'EMBEDDING_MODEL'
];

// Validate environment
const missing = requiredEnvVars.filter(v => !process.env[v]);
if (missing.length > 0) {
    console.error(`❌ Missing environment variables: ${missing.join(', ')}`);
    console.error('\nAdd these to .env.local and try again.');
    process.exit(1);
}

const PINECONE_HOST = process.env.PINECONE_HOST;
const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const EMBEDDING_MODEL = process.env.EMBEDDING_MODEL || 'text-embedding-3-small';
const NAMESPACE = 'brutus-learnings';

/**
 * Generate embedding for text using OpenAI
 */
async function generateEmbedding(text) {
    const response = await fetch('https://api.openai.com/v1/embeddings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: EMBEDDING_MODEL,
            input: text
        })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`OpenAI API error: ${error.error?.message || response.status}`);
    }

    const data = await response.json();
    return data.data[0].embedding;
}

/**
 * Upsert vectors to Pinecone
 */
async function upsertToPinecone(vectors) {
    const url = `https://${PINECONE_HOST}/vectors/upsert`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Api-Key': PINECONE_API_KEY,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            vectors,
            namespace: NAMESPACE
        })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Pinecone upsert error: ${error.message || response.status}`);
    }

    return await response.json();
}

/**
 * Main learning capture flow
 */
async function captureLearnings() {
    console.log('🤖 Brutus Sprint Learning System\n');

    // Interactive prompts for learning capture
    const readline = (await import('readline')).default;
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const question = (prompt) => new Promise((resolve) => {
        rl.question(prompt, resolve);
    });

    console.log('Answer the following to capture sprint learnings:\n');

    const sprintNumber = await question('Sprint number (or leave blank for auto): ');
    const sprintId = sprintNumber || `sprint-${Date.now()}`;

    const summary = await question('What was accomplished this sprint? ');
    const decisions = await question('Key decisions made: ');
    const blockers = await question('Any blockers encountered (or "none")? ');
    const nextSteps = await question('Next steps for future: ');
    const tags = await question('Tags (comma-separated, e.g., "google-cloud,pinecone"): ');

    rl.close();

    // Prepare learning document
    const learningDoc = {
        sprint: sprintId,
        timestamp: new Date().toISOString(),
        summary: summary.trim(),
        decisions: decisions.trim(),
        blockers: blockers.trim() === 'none' ? null : blockers.trim(),
        nextSteps: nextSteps.trim(),
        tags: tags.split(',').map(t => t.trim()).filter(Boolean),
        agent: 'brutus',
        project: 'bespoke-ethos'
    };

    // Create searchable text for embedding
    const searchableText = `
    Sprint: ${learningDoc.sprint}
    Summary: ${learningDoc.summary}
    Decisions: ${learningDoc.decisions}
    ${learningDoc.blockers ? `Blockers: ${learningDoc.blockers}` : ''}
    Next Steps: ${learningDoc.nextSteps}
    Tags: ${learningDoc.tags.join(', ')}
  `.trim();

    console.log('\n📝 Generating embedding...');
    const embedding = await generateEmbedding(searchableText);

    console.log('💾 Saving to Pinecone...');
    const vectorId = `learning-${sprintId}-${Date.now()}`;

    await upsertToPinecone([{
        id: vectorId,
        values: embedding,
        metadata: {
            ...learningDoc,
            type: 'learning',
            searchText: searchableText.substring(0, 500) // Store excerpt for debugging
        }
    }]);

    console.log('\n✅ Learning saved successfully!');
    console.log(`   Vector ID: ${vectorId}`);
    console.log(`   Namespace: ${NAMESPACE}`);
    console.log(`   Tags: ${learningDoc.tags.join(', ')}`);
    console.log('\nRetrieve later with: node scripts/query-learnings.mjs');
}

// Execute if run directly
if (import.meta.url === `file://${process.argv[1]}`) {
    captureLearnings()
        .then(() => process.exit(0))
        .catch((error) => {
            console.error('\n❌ Error:', error.message);
            process.exit(1);
        });
}

export { generateEmbedding, upsertToPinecone };
