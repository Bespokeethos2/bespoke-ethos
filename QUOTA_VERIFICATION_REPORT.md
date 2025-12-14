# 📊 QUOTA VERIFICATION REPORT

> **Project:** `bespokeethos-analytics-475007`
> **API Service:** `generativelanguage.googleapis.com` (GenAI / AI Studio)

## ✅ CURRENT LIMITS (Paid Tier 2)

Based on your project's quota dumps, you have access to **Paid Tier 2** quotas:

### 🧠 Gemini 2.5 Pro ("Nano Banana 3")
*   **Requests Per Minute (RPM):** `1,000`
*   **Tokens Per Minute (TPM):** `5,000,000`
*   **Requests Per Day (RPD):** `50,000`

### 👁️ Gemini 3 Pro Image ("Nano Banana Vision")
*   **Requests Per Minute (RPM):** `500`
*   **Tokens Per Minute (TPM):** `5,000,000`
*   **Requests Per Day (RPD):** `15,000`

---

## ⚠️ WHY YOU MIGHT STILL HIT LIMITS

If you are seeing `429 Too Many Requests`, it is likely one of these 3 reasons:

1.  **"Free Tier" Fallback:** Your API Key might still be recognized as "Free Tier" by some endpoints.
    *   *Fix:* Ensure you are strictly using the standard headers and your project is linked to the billing account `01D82D...` permanently.
2.  **Burst Limits:** Even with 1000 RPM, sending 50 requests in *1 second* can trigger a transient limiter.
    *   *Fix:* The `backoff` retry logic I added to `src/app/api/intelligence/vision/route.ts` will solve this.
3.  **Wrong Model ID:** If your code requests `gemini-1.5-pro` (Legacy) instead of `2.5`, verify *that* quota too.
    *   *Legacy Pro Limit:* 1,000 RPM (Same Tier 2).

## 📂 CACHE STATUS
The full quota dumps have been safely cached for forensic analysis:
*   `c:\Vercel\aiplatform_quotas.json`
*   `c:\Vercel\genai_quotas.json`
*   `c:\Vercel\quota_analysis.txt` (Parsed Summary)
