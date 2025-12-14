const fs = require('fs');

function parseQuotas(filePath, patterns) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const quotas = JSON.parse(data);
    
    console.log(`\n--- Searching in ${filePath} ---`);
    
    // Vertex AI structure is usually array of objects with consumerQuotaLimits
    // GenAI structure is similar
    
    const results = [];

    for (const quota of quotas) {
      const displayName = quota.displayName || '';
      const metric = quota.metric || '';
      
      // Check if this quota matches any of our patterns
      const matchesPattern = patterns.some(p => 
        displayName.toLowerCase().includes(p.toLowerCase()) || 
        metric.toLowerCase().includes(p.toLowerCase())
      );

      if (matchesPattern) {
        if (quota.consumerQuotaLimits) {
          for (const limit of quota.consumerQuotaLimits) {
            
            // Look into buckets
            if (limit.quotaBuckets) {
              for (const bucket of limit.quotaBuckets) {
                // We care about specific dimensions usually, e.g. base_model or region
                let dimensionsStr = '';
                let isRelevantBucket = true;

                if (bucket.dimensions) {
                  dimensionsStr = JSON.stringify(bucket.dimensions);
                  // If we are looking for 'gemini-2.5-pro' specifically, filter by dimension if present
                  // But often the metric is generic and dimension has the model
                  
                  // If patterns include a specific model like 'gemini-2.5', check if dimension matches or if strictly generic
                  // For now, just print everything matching the top-level metric/name
                }
                
                // Extra filter: if we are searching for 'gemini-2.5' and dimensions exist but don't contain it, 
                // and the metric doesn't contain it, it might be a generic bucket. 
                // But let's just dump all 'gemini' and 'imagen' related limits found.
                
                results.push({
                   name: displayName,
                   metric: metric,
                   unit: limit.unit,
                   limit: bucket.effectiveLimit,
                   default: bucket.defaultLimit,
                   dimensions: dimensionsStr
                });
              }
            }
          }
        }
      }
    }
    
    return results;
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err.message);
    return [];
  }
}

const aiQuotas = parseQuotas('c:\\Vercel\\aiplatform_quotas.json', ['gemini', 'imagen', 'visual']);
const genaiQuotas = parseQuotas('c:\\Vercel\\genai_quotas.json', ['gemini', 'generate content']);

console.log("\n=== RELEVANT QUOTAS FOUND ===");

console.log("\n[Vertex AI / AI Platform]");
aiQuotas.forEach(q => {
  // excessive filtering to reduce noise
  if (q.limit === '-1' && !q.dimensions) return; // skip unlimited defaults if boring
  console.log(`Metric: ${q.name || q.metric}`);
  if(q.dimensions) console.log(`  Dimensions: ${q.dimensions}`);
  console.log(`  Limit: ${q.limit} / ${q.unit}\n`);
});

console.log("\n[Generative AI / Studio]");
genaiQuotas.forEach(q => {
    // excessive filtering
    if (q.limit === '-1' && !q.dimensions) return;
    console.log(`Metric: ${q.name || q.metric}`);
    if(q.dimensions) console.log(`  Dimensions: ${q.dimensions}`);
    console.log(`  Limit: ${q.limit} / ${q.unit}\n`);
});
