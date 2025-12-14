# 🚨 URGENT: QUOTA INCREASE GUIDE (Nano Banana 3 & Imagen 3)

> **PROJECT ID:** `bespokeethos-analytics-475007`
> **BILLING ACCOUNT:** `01D82D-EE885B-C29459` (Must be linked)

## ⚡ STOP THE LIMITS: Immediate Action Plan

You are hitting quotas because **Gemini 2.5 Pro** and **Imagen 3** are high-demand models often starting with conservative default limits (sometimes as low as 60 RPM). You must manually request an increase.

---

### 1. The "Magic Link" (Go Here First)

**[Click here to open Google Cloud Quotas for Bespoke Ethos](https://console.cloud.google.com/iam-admin/quotas?project=bespokeethos-analytics-475007&service=aiplatform.googleapis.com)**

*(If that link doesn't filter perfectly, go to Console > IAM & Admin > Quotas and filter by Service: `Vertex AI API`)*

---

### 2. How to Increase "Nano Banana 3" (Gemini 2.5 Pro)

1.  In the Quotas filter bar, type: `base_model:gemini-2.5-pro`
2.  Look for these specific rows:
    *   `Online prediction generate content requests per minute per project`
    *   `Online prediction generate content input tokens per minute per project`
3.  **Check the box** next to the region you are using (likely `us-central1` or `global`).
4.  Click **EDIT QUOTAS** (top of page).
5.  **New Limit:** Request at least **100-500 RPM** (Requests Per Minute).
    *   *Justification:* "Production launch of bespokeethos.com, high-traffic visual analysis pipeline."
6.  Submit. (Approval is usually instant or < 24h).

---

### 3. How to Increase "Imgen 3" (Imagen 3) Quotas

**⚠️ IMPORTANT:** Imagen 3 is often gated or under stricter preview limits.

1.  In the Quotas filter bar, type: `base_model:imagen-3.0-generate-001` (or just `imagen`).
    *   *Note: If you don't see it, try filtering only by "Service: Vertex AI API" and searching for "image generation"*.
2.  Look for: `Restricted image generation requests per minute`.
3.  **Procedure:**
    *   **If Editable:** Click Edit, request **10-50 IPM** (Images Per Minute).
    *   **If Greyed Out:** You typically need to contact **Google Cloud Support** or your account rep.
    *   *Hack:* Sometimes enabling "Pay-as-you-go" on the billing page explicitly unlocks this editability.

---

### 4. Code-Level Safety Valve (Exponential Backoff)

While waiting for quotas, ensure your code retries instead of crashing.
Update `src/app/api/intelligence/vision/route.ts` to handle 429 warnings gracefully (I can implement this for you if you wish).

### 5. Config Check

Ensure your `antigravity.config.js` points to the model you *have* quota for.
*   **Current Main:** `models/gemini-2.5-pro` (Check this quota!)
*   **Backup:** `models/gemini-1.5-pro-latest` (Usually has higher default quota)
