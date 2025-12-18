# Vercel Environment Variables Checklist

## ✅ Required for Gemini 2.0 Flash Integration

This checklist ensures all environment variables needed for the Gemini chatbot and intelligence modules are properly configured in Vercel.

### 🎯 Critical Environment Variables

These variables **MUST** be configured for the application to work:

| Variable Name | Required | Purpose | Used In |
|--------------|----------|---------|---------|
| `GOOGLE_GENERATIVE_AI_API_KEY` | ✅ YES (primary) | Primary API key for Gemini 2.0 Flash | `/api/chat/google`, intelligence modules |
| `GOOGLE_GEMINI_API` | ⚠️ FALLBACK | Fallback API key (set to same value) | `/api/chat/google`, intelligence modules |

> **Important**: At least **ONE** of these must be set. For maximum compatibility, set **BOTH** to the same value.

### 📝 Optional Environment Variables

| Variable Name | Required | Purpose | Used In |
|--------------|----------|---------|---------|
| `OPENAI_API_KEY` | ❌ NO | OpenAI API for intelligence modules | `src/lib/intelligence.ts`, `src/lib/brutus-intelligence.ts` |
| `GOOGLE_CLOUD_PROJECT` | ❌ NO | Google Cloud Project ID | Documentation reference |
| `GOOGLE_CLOUD_REGION` | ❌ NO | Google Cloud Region | Documentation reference |

---

## 🚀 Vercel Configuration Steps

### Step 1: Access Vercel Dashboard
1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Select the **bespoke-ethos** project

### Step 2: Navigate to Environment Variables
1. Click on **Settings** tab
2. Click on **Environment Variables** in the sidebar

### Step 3: Add Required Variables

For **each** environment variable:

#### GOOGLE_GENERATIVE_AI_API_KEY
- **Name**: `GOOGLE_GENERATIVE_AI_API_KEY`
- **Value**: Your Gemini API key from Google AI Studio
- **Environments**: ✅ Production, ✅ Preview, ✅ Development

#### GOOGLE_GEMINI_API
- **Name**: `GOOGLE_GEMINI_API`
- **Value**: Same as `GOOGLE_GENERATIVE_AI_API_KEY` (for fallback compatibility)
- **Environments**: ✅ Production, ✅ Preview, ✅ Development

### Step 4: Trigger Redeployment
After adding variables:
1. Go to **Deployments** tab
2. Click **...** menu on the latest deployment
3. Click **Redeploy**
4. Ensure "Use existing Build Cache" is **unchecked**

---

## ✅ Verification

### Local Verification (before deploying)

Run the verification script:
```bash
node scripts/verify-env-vars.mjs
```

Expected output when configured:
```
✅ All required Gemini API keys are configured
✅ The GeminiChatbot component will work correctly
✅ The API route /api/chat/google will function properly
```

### Production Verification

After deployment, test these endpoints:

1. **Chatbot UI Test**
   - Visit your production site
   - Look for the floating chat button (bottom-right)
   - Click and send a test message
   - Should receive a response from Gemini 2.0 Flash

2. **API Endpoint Test**
   ```bash
   curl -X POST https://your-domain.vercel.app/api/chat/google \
     -H "Content-Type: application/json" \
     -d '{"messages":[{"role":"user","parts":[{"type":"text","text":"Hello"}]}]}'
   ```
   Should stream back a response (not return a 500 error)

3. **Check Vercel Logs**
   - Go to **Deployments** → Select deployment → **Functions** tab
   - Look for `/api/chat/google` function
   - Should not see "API key not configured" errors

---

## 🔒 Security Best Practices

### ✅ DO
- Restrict API keys in Google Cloud Console to specific APIs
- Set up budget alerts in Google Cloud
- Rotate keys regularly (every 90 days)
- Use separate keys for Production vs Preview/Development if possible

### ❌ DON'T
- Commit API keys to git repositories
- Share API keys in plain text
- Use the same key across multiple unrelated projects
- Leave keys unrestricted

---

## 📊 Files Modified in This PR

The following files were updated to use these environment variables:

| File | Changes |
|------|---------|
| `src/app/api/chat/google/route.ts` | ✅ NEW - Gemini 2.0 Flash endpoint |
| `src/lib/intelligence.ts` | Updated to Gemini 2.0 Flash + fallback pattern |
| `src/lib/brutus-intelligence.ts` | Updated to Gemini 2.0 Flash + fallback pattern |
| `src/components/GeminiChatbot.tsx` | Updated to AI SDK v5 |

---

## 🆘 Troubleshooting

### Issue: "API key not configured" error in logs
**Solution**: Verify both `GOOGLE_GENERATIVE_AI_API_KEY` and `GOOGLE_GEMINI_API` are set in Vercel

### Issue: Chatbot shows "Failed to process chat request"
**Solution**: 
1. Check Vercel function logs for specific error
2. Verify API key is valid in Google AI Studio
3. Ensure Generative Language API is enabled in Google Cloud

### Issue: Variables are set but still not working
**Solution**:
1. Redeploy without build cache
2. Verify environment is set to Production (not just Preview)
3. Check that API key has not expired or been revoked

---

## 📞 Getting API Keys

### Google Gemini API Key
1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Get API key"
4. Click "Create API key"
5. Select project: `bespokeethos-analytics-475007`
6. Copy the generated key

### Verifying Key Works
```bash
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY" \
  -H 'Content-Type: application/json' \
  -d '{"contents":[{"parts":[{"text":"test"}]}]}'
```

---

## ✅ Deployment Checklist

- [ ] Created API keys in Google AI Studio
- [ ] Added `GOOGLE_GENERATIVE_AI_API_KEY` to Vercel (all environments)
- [ ] Added `GOOGLE_GEMINI_API` to Vercel (all environments)
- [ ] Restricted API keys in Google Cloud Console
- [ ] Triggered redeployment without cache
- [ ] Verified chatbot works on production site
- [ ] Checked Vercel function logs for errors
- [ ] Tested API endpoint with curl/Postman
- [ ] Documented API key location for team

---

**Last Updated**: 2025-12-18  
**Related Documentation**: See `GOOGLE_CLOUD_SETUP.md` for detailed Google Cloud configuration
