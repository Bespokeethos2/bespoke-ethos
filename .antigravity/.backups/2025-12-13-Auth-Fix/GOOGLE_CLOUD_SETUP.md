# Google Cloud Platform Setup for Small Business
## Vertex AI, Cloud Billing, and API Integration Guide

**Author**: Brutus (Senior Automation Engineer)  
**Last Updated**: 2025-11-27  
**Purpose**: Make Google Cloud accessible for small businesses without enterprise budgets

---

## Table of Contents

1. [Quick Start (5 Minutes)](#quick-start)
2. [Vertex AI Billing Setup](#vertex-ai-billing)
3. [API Keys Management](#api-keys)
4. [Cost Control & Budget Alerts](#cost-control)
5. [Troubleshooting Common Issues](#troubleshooting)

---

## Quick Start

### Prerequisites
- Google Account (personal or business)
- Credit card for billing verification
- Project name: Choose something descriptive (e.g., "bespoke-ethos-production")

### Step 1: Create Your First Project
```bash
# Navigate to: https://console.cloud.google.com
# Click "Select a project" → "New Project"
# Project Name: bespoke-ethos-production
# Organization: Leave as "No organization" if you're a small business
# Click "Create"
```

### Step 2: Enable Billing (CRITICAL)
```bash
# Go to: https://console.cloud.google.com/billing
# Click "Link a billing account"
# If no billing account exists:
#   → "Create Account"
#   → Add payment method (credit/debit card)
#   → Set billing contact information
#   → Review and accept terms
```

**⚠️ IMPORTANT**: Google requires billing verification before you can:
- Use Vertex AI
- Make API calls (Maps, Vision, etc.)
- Access most cloud services

---

## Vertex AI Billing Setup

### Current API Key (Updated: 2025-12-13)
**Project**: `bespokeethos-analytics-475007`  
**Billing Account**: `01D82D-EE885B-C29459`  
**Active Key**: `AIzaSyD8veKWYoNPQcxPfJcEANSv322UDiM_2IQ`

**Previous Key** (deprecated): `AIzaSyDYKa5Bylu4xwNoTWRneTAKcamCuHKd-gM`

### Quota Tier Information

**Current Tier**: Tier 1 (Free)
- 15 requests per minute (RPM)
- 1 million tokens per minute (TPM)
- 1,500 requests per day (RPD)

**Quota Increase Requested**: Tier 2+
- Target: 1,000 RPM, 4 million TPM
- Status: Pending approval
- Check status: https://console.cloud.google.com/apis/api/generativelanguage.googleapis.com/quotas?project=bespokeethos-analytics-475007

**Alternative: Vertex AI** (Higher default quotas)
- 300 RPM for Gemini Pro (20x higher than Tier 1)
- Enable at: https://console.cloud.google.com/vertex-ai?project=bespokeethos-analytics-475007

### Enable Vertex AI

1. **Navigate to Vertex AI**
   ```
   https://console.cloud.google.com/vertex-ai
   ```

2. **Enable the API**
   - Click "Enable All Recommended APIs"
   - Wait 2-3 minutes for propagation

3. **Link Billing to Project**
   ```
   https://console.cloud.google.com/billing/linkedaccount
   ```
   - Select your project: `bespoke-ethos-production`
   - Choose billing account
   - Click "Set Account"

### Verify Vertex AI Access

Run this test in Cloud Shell (icon in top-right):
```bash
gcloud ai models list --region=us-central1
```

**Expected Output**: List of available models (or empty list if none deployed)  
**Error**: "Billing disabled" → Go back to Step 3 above

---

## API Keys Management

### Current Stack Integration

Your project has these Google services enabled:
- **Maps API** → For location/geocoding features
- **Vision API** → For image analysis
- **Analytics** → For user tracking
- **Vertex AI** → For LLM/ML workloads

### Centralized API Key (Recommended for Small Business)

**Current Key**: `AIzaSyDYKa5Bylu4xwNoTWRneTAKcamCuHKd-gM`

#### Check What's Enabled
```bash
# Go to: https://console.cloud.google.com/apis/credentials
# Click your API key
# Scroll to "API restrictions"
```

**Should show**:
- ✅ Maps JavaScript API
- ✅ Vision API
- ✅ Analytics API
- ✅ Vertex AI API

#### Add Restrictions (Security Best Practice)
```bash
# In API Key settings:
# Application restrictions → HTTP referrers
# Add: https://www.bespokeethos.com/*
# Add: https://*.vercel.app/* (for preview deployments)
```

### Service Account Keys (Advanced: For Server-Side)

For better security, create service accounts:
```bash
# 1. Go to: https://console.cloud.google.com/iam-admin/serviceaccounts
# 2. Click "Create Service Account"
# 3. Name: vertexai-automation
# 4. Role: Vertex AI User
# 5. Click "Create and Continue"
# 6. Click "Done"
# 7. Click the account → "Keys" → "Add Key" → "Create New Key" → JSON
# 8. Download JSON file → Store in Vercel environment variables
```

---

## Cost Control & Budget Alerts

### Set Up Budget Alerts (DO THIS FIRST!)

**Prevent surprise bills**:

1. **Navigate to Budgets**
   ```
   https://console.cloud.google.com/billing/budgets
   ```

2. **Create Budget**
   - Name: `Monthly Cloud Spend - Bespoke Ethos`
   - Budget type: `Specified amount`
   - Target amount: `$100.00` (adjust to your budget)
   - Include: All services

3. **Set Alert Thresholds**
   ```
   50%  → Email warning
   75%  → Email + SMS warning
   90%  → Email + SMS + Disable APIs (optional)
   100% → Hard stop (requires manual intervention)
   ```

4. **Alert Recipients**
   - Add your email
   - Add billing admin email (if different)

### Cost Breakdown (Typical Small Business)

| Service | Est. Monthly Cost | Notes |
|---------|-------------------|-------|
| **Vertex AI** | $0-50 | Pay-per-use (embeddings, predictions) |
| **Maps API** | $0-10 | Free tier: 28,000 loads/month |
| **Vision API** | $0-20 | Free tier: 1,000 units/month |
| **Cloud Storage** | $1-5 | Minimal for small projects |
| **Total** | **$1-85** | With normal small business usage |

**Free Tier** (always available):
- Maps: 28,000 map loads
- Vision: 1,000 image units
- Vertex AI: $300 credit for 90 days (new users)

---

## Troubleshooting Common Issues

### Issue 1: "Billing Account Required"

**Error**:
```
This API call requires a billing account
```

**Solution**:
1. Enable billing: https://console.cloud.google.com/billing
2. Link to your project
3. Wait 5 minutes for propagation
4. Retry

---

### Issue 2: "Permission Denied"

**Error**:
```
User does not have permission to access project [PROJECT_ID]
```

**Solution**:
1. Go to IAM: https://console.cloud.google.com/iam-admin/iam
2. Find your user account
3. Add role: `Vertex AI User` or `Owner` (for full access)
4. Click "Save"

---

### Issue 3: "API Not Enabled"

**Error**:
```
Vertex AI API has not been used in project [PROJECT_ID] before
```

**Solution**:
```bash
# Go to: https://console.cloud.google.com/apis/library/aiplatform.googleapis.com
# Click "Enable"
```

---

### Issue 4: "Quota Exceeded"

**Error**:
```
Quota exceeded for quota metric 'Vertex AI API requests'
```

**Solution**:
1. Check current usage: https://console.cloud.google.com/apis/api/aiplatform.googleapis.com/quotas
2. Request quota increase (usually auto-approved for small amounts)
3. Or reduce request frequency

---

## Environment Variables for Vercel

Add these to your Vercel project:

```bash
# Navigate to: https://vercel.com/bespokeethos/bespoke-ethos/settings/environment-variables

# Google Cloud
GOOGLE_API_KEY=AIzaSyDYKa5Bylu4xwNoTWRneTAKcamCuHKd-gM
GOOGLE_PROJECT_ID=bespoke-ethos-production

# OR: Service Account JSON (recommended for production)
GOOGLE_APPLICATION_CREDENTIALS='{"type":"service_account","project_id":"..."}'

# Vertex AI specific
VERTEX_AI_LOCATION=us-central1
VERTEX_AI_MODEL=text-bison@002  # or gemini-pro

# Feature toggles
ENABLE_VERTEX_AI=true
ENABLE_GOOGLE_MAPS=true
ENABLE_GOOGLE_VISION=true
```

---

## Next Steps

1. ✅ Complete billing setup
2. ✅ Add budget alerts ($100 recommended)
3. ✅ Enable Vertex AI API
4. ✅ Test with sample request
5. ✅ Add environment variables to Vercel
6. 📖 Read [BRUTUS_OPERATIONS.md](./BRUTUS_OPERATIONS.md) for autonomous management

---

## Support Resources

- **Google Cloud Console**: https://console.cloud.google.com
- **Vertex AI Documentation**: https://cloud.google.com/vertex-ai/docs
- **Billing Dashboard**: https://console.cloud.google.com/billing
- **API Library**: https://console.cloud.google.com/apis/library
- **Support (Free Tier)**: https://cloud.google.com/support

**For Bespoke Ethos specific issues, contact**: Brutus (this autonomous agent)
