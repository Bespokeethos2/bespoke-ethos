
import fs from 'fs';
import path from 'path';

const ENV_PATH = path.join('c:/Vercel', '.env.local');
const KEYS = {
    "GOOGLE_API_KEY": "AIzaSyD8veKWYoNPQcxPfJcEANSv322UDiM_2IQ",
    "GOOGLE_GENERATIVE_AI_API_KEY": "AIzaSyD8veKWYoNPQcxPfJcEANSv322UDiM_2IQ",
    "GOOGLE_CLOUD_PROJECT": "bespokeethos-analytics-475007",
    "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY": "pk_live_...", // Placeholder if needed
    "STRIPE_SECRET_KEY": "sk_live_...",
    // "OPENAI_API_KEY": "..." // Only if we found one earlier, but purely optional now as we use Gemini
};

let content = "";
if (fs.existsSync(ENV_PATH)) {
    content = fs.readFileSync(ENV_PATH, 'utf8');
}

let lines = content.split('\n');
const newLines = [];
const processedKeys = new Set();

// Update existing
for (let line of lines) {
    const match = line.match(/^([^=]+)=/);
    if (match) {
        const key = match[1].trim();
        if (KEYS[key]) {
            newLines.push(`${key}=${KEYS[key]}`);
            processedKeys.add(key);
            console.log(`Updated ${key}`);
            continue;
        }
    }
    newLines.push(line);
}

// Append missing
for (const [key, val] of Object.entries(KEYS)) {
    if (!processedKeys.has(key)) {
        newLines.push(`${key}=${val}`);
        console.log(`Added ${key}`);
    }
}

fs.writeFileSync(ENV_PATH, newLines.join('\n'));
console.log("✅ .env.local updated successfully.");
