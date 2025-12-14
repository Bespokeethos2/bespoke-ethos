
import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: "c:/Vercel/.env.local" });

const PROJECT_ID = process.env.GOOGLE_CLOUD_PROJECT || "bespokeethos-analytics-475007";
const LOCATION = "us-central1";
const API_KEY = process.env.GOOGLE_API_KEY; // Using the API Key from .env.local

// Correct Vertex AI Endpoint for API Key usage (if enabled)
// OR we use the Access Token if the user is authenticated via gcloud (which they tried)
// BUT we will try the API Key method first via the specific Generative AI endpoint if possible.
// Actually, Vertex AI usually requires OAuth. 
// IF the user provided an API Key, we might be stuck unless that key is constrained to Vertex.

// Let's try the Gemini Pro Vision endpoint which IS supported by the API Key we have.
// We will generate descriptions first, then try to render.

async function generateImageVertex() {
    console.log(`🔧 Vertex AI Correction: Targeting ${PROJECT_ID} in ${LOCATION}...`);

    if (!API_KEY) {
        console.error("❌ Missing GOOGLE_API_KEY. Cannot proceed.");
        return;
    }

    // Endpoint for Imagen 3 on Vertex (requires OAuth usually, but we try API Key header)
    const url = `https://${LOCATION}-aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/${LOCATION}/publishers/google/models/imagegeneration@006:predict?key=${API_KEY}`;
    
    // Fallback: Using the Generative Language API (Gemini) which definitely supports API Keys
    // Note: Gemini API (Generative Language) does not currently support Image Generation (Imagen) public endpoints via API Key freely in all regions,
    // BUT we will try the standard path.

    const models = [
        "imagegeneration@006",
        "imagen-3.0-generate-001"
    ];

    for (const model of models) {
        console.log(`Trying Low-Level REST to ${model}...`);
        
        const response = await fetch(`https://${LOCATION}-aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/${LOCATION}/publishers/google/models/${model}:predict`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": `Bearer ${ACCESS_TOKEN}` // We don't have this.
                "X-Goog-Api-Key": API_KEY // Trying the API Key
            },
            body: JSON.stringify({
                instances: [{ prompt: "Abstract architectural landscape, dark navy and coral, brutalist forms" }],
                parameters: { sampleCount: 1 }
            })
        });

        if (response.ok) {
            const data = await response.json();
            console.log("✅ SUCCESS (REST)!");
            // Save logic here...
            const b64 = data.predictions[0].bytesBase64Encoded;
            fs.writeFileSync("c:/Vercel/public/assets/generated/test-vertex.png", Buffer.from(b64, 'base64'));
            return;
        } else {
            const err = await response.text();
            console.error(`❌ Failed (${model}):`, err);
        }
    }
}

generateImageVertex();
