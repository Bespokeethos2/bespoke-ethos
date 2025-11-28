#!/usr/bin/env node
/**
 * Query Sprint Learnings from Pinecone
 * 
 * Retrieves relevant past learnings based on semantic search
 * to help Brutus make informed decisions
 */

import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
config({ path: join(__dirname, '..', '.env.local') });

const requiredEnvVars = [
    'PINECONE_API_KEY',
    'PINECONE_HOST',
    'OPENAI_API_KEY',
    'EMBEDDING_MODEL'
];

// Validate environment
const missing = requiredEnvVars.filter(v => !process.env[v]);
if (missing.length > 0) {
    console.error(`❌ Missing environment variables: ${missing.join(', ')}`);
    process.exit(1);
}

const PINECONE_HOST = process.env.PINECONE_HOST;
const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const EMBEDDING_MODEL = process.env.EMBEDDING_MODEL || 'text-embedding-3-small';
const NAMESPACE = 'brutus-learnings';

/**
 * Generate embedding for query
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
 * Query Pinecone for similar learnings
 */
async function queryPinecone(embedding, topK = 5) {
    const url = `https://${PINECONE_HOST}/query`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Api-Key': PINECONE_API_KEY,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            namespace: NAMESPACE,
            vector: embedding,
            topK,
            includeMetadata: true
        })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Pinecone query error: ${error.message || response.status}`);
    }

    return await response.json();
}

/**
 * Format and display results
 */
function displayResults(results) {
    if (!results.matches || results.matches.length === 0) {
        console.log('\n📭 No relevant learnings found.');
        console.log('   Try running: node scripts/save-sprint-learnings.mjs');
        return;
    }

    console.log(`\n🔍 Found ${results.matches.length} relevant learnings:\n`);
    console.log('='.repeat(80));

    results.matches.forEach((match, index) => {
        const meta = match.metadata;
        const similarity = (match.score * 100).toFixed(1);

        console.log(`\n${index + 1}. ${meta.sprint || 'Unknown Sprint'} (${similarity}% similar)`);
        console.log(`   Date: ${new Date(meta.timestamp).toLocaleDateString()}`);
        console.log(`   Tags: ${meta.tags?.join(', ') || 'none'}`);
        console.log('\n   Summary:');
        console.log(`   ${meta.summary || 'No summary'}`);

        if (meta.decisions) {
            console.log('\n   Key Decisions:');
            console.log(`   ${meta.decisions}`);
        }

        if (meta.blockers) {
            console.log('\n   Blockers:');
            console.log(`   ${meta.blockers}`);
        }

        if (meta.nextSteps) {
            console.log('\n   Next Steps:');
            console.log(`   ${meta.nextSteps}`);
        }

        console.log('\n' + '-'.repeat(80));
    });
}

/**
 * Main query flow
 */
async function queryLearnings(queryText, options = {}) {
    const topK = options.topK || 5;

    if (!queryText) {
        console.error('❌ Please provide a query.');
        console.error('Usage: node scripts/query-learnings.mjs "your question here"');
        process.exit(1);
    }

    console.log('🤖 Brutus Learning Query System\n');
    console.log(`Query: "${queryText}"\n`);
    console.log('🔄 Generating embedding...');

    const embedding = await generateEmbedding(queryText);

    console.log('🔍 Searching Pinecone...');
    const results = await queryPinecone(embedding, topK);

    displayResults(results);

    // Also provide context summary
    if (results.matches && results.matches.length > 0) {
        console.log('\n💡 Context Summary:');
        console.log('   Based on past sprints, Brutus has learned:');

        const allTags = new Set();
        results.matches.forEach(m => {
            if (m.metadata.tags) {
                m.metadata.tags.forEach(tag => allTags.add(tag));
            }
        });

        if (allTags.size > 0) {
            console.log(`   - Relevant topics: ${Array.from(allTags).join(', ')}`);
        }

        const avgScore = results.matches.reduce((sum, m) => sum + m.score, 0) / results.matches.length;
        console.log(`   - Confidence: ${(avgScore * 100).toFixed(1)}%`);
    }
}

// Execute if run directly
if (import.meta.url === `file://${process.argv[1]}`) {
    const args = process.argv.slice(2);
    const queryText = args.join(' ');

    queryLearnings(queryText)
        .then(() => process.exit(0))
        .catch((error) => {
            console.error('\n❌ Error:', error.message);
            process.exit(1);
        });
}

export { queryLearnings, generateEmbedding, queryPinecone };
