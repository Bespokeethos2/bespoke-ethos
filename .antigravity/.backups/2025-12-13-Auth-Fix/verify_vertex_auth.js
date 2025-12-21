const https = require('https');
require('dotenv').config({ path: '.env.local' });

const apiKey = process.env.GOOGLE_GEMINI_API;
const baseUrl = 'https://generativelanguage.googleapis.com/v1beta';

if (!apiKey) {
  console.error('ERROR: GOOGLE_GEMINI_API not found in environment variables.');
  console.log('Make sure .env.local contains GOOGLE_GEMINI_API=your_api_key');
  process.exit(1);
}

async function verify() {
  console.log('=== Vertex AI Authentication Verification ===\n');
  
  // 1. List Models to verify API access
  console.log('--- Checking Available Models ---');
  const models = await new Promise((resolve, reject) => {
    https.get(`${baseUrl}/models?key=${apiKey}`, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        if (res.statusCode === 200) resolve(JSON.parse(data));
        else reject(new Error(`List Models Failed: ${res.statusCode} ${data}`));
      });
    }).on('error', reject);
  });

  const allModelNames = models.models.map(m => m.name);
  const flashModels = allModelNames.filter(n => n.toLowerCase().includes('flash'));
  const proModels = allModelNames.filter(n => n.toLowerCase().includes('pro'));

  console.log(`Total Models Found: ${allModelNames.length}`);
  console.log(`Flash Models: ${flashModels.length}`);
  console.log(`Pro Models: ${proModels.length}`);

  // 2. Test Generation (Billing Check)
  const targetModel = 'models/gemini-1.5-flash'; 
  console.log(`\n--- Testing Generation with ${targetModel} ---`);
  
  const postData = JSON.stringify({
    contents: [{ parts: [{ text: "Say 'Vertex AI is working!' in 5 words or less." }] }]
  });

  const req = https.request(`${baseUrl}/${targetModel}:generateContent?key=${apiKey}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': postData.length
    }
  }, (res) => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
      if (res.statusCode === 200) {
        console.log('✅ SUCCESS: Generation verified.');
        const response = JSON.parse(data);
        console.log('Output:', response.candidates?.[0]?.content?.parts?.[0]?.text?.trim());
        console.log('\n✨ VERTEX AI AUTHENTICATION VERIFIED ✨');
        console.log('Project: bespokeethos-analytics-475007');
      } else {
        console.error(`❌ FAILURE: Generation Failed. Status: ${res.statusCode}`);
        console.error('Error:', data);
      }
    });
  });

  req.on('error', (e) => console.error('Request Error:', e));
  req.write(postData);
  req.end();
}

verify().catch(console.error);
