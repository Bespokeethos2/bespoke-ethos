# Google Cloud Setup Guide for BespokeEthos

> **Last Updated**: 2025-12-13  
> **Project**: `bespokeethos-analytics-475007`  
> **Region**: `us-central1`

---

## 🔑 Quick Reference

| Item | Value |
|------|-------|
| **Project ID** | `bespokeethos-analytics-475007` |
| **Region** | `us-central1` |
| **Billing Account** | `01D82D-EE885B-C29459` |
| **Console URL** | [console.cloud.google.com](https://console.cloud.google.com/apis/credentials?project=bespokeethos-analytics-475007) |

---

## 🚨 SOLVING AUTHENTICATION ISSUES

### If `gcloud auth login` Fails with "Access Blocked"

This error occurs when the gcloud SDK's OAuth client is outdated. **Solution**:

#### Option 1: Create API Key via Console (RECOMMENDED)
1. Go to [Credentials Page](https://console.cloud.google.com/apis/credentials?project=bespokeethos-analytics-475007)
2. Click **+ CREATE CREDENTIALS** → **API key**
3. Copy the generated key
4. Add to `.env.local`:
   ```bash
   GOOGLE_GEMINI_API=your_api_key_here
   ```

#### Option 2: Update gcloud SDK
```bash
gcloud components update --quiet
gcloud auth login
```

#### Option 3: Use Application Default Credentials
```bash
gcloud auth application-default login
```

---

## 📦 Environment Variables

### Required for Gemini/Vertex AI

Add these to `c:\Vercel\.env.local`:

```dotenv
# Primary Gemini API Key (for AI SDK)
GOOGLE_GEMINI_API=your_api_key_here

# Alternative name (some SDKs use this)
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here

# Project Configuration
GOOGLE_CLOUD_PROJECT=bespokeethos-analytics-475007
GOOGLE_CLOUD_REGION=us-central1
```

### Optional - Service Account (for advanced features)
```dotenv
GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account.json
```

---

## 🔧 API Key Best Practices

### 1. Restrict API Keys
After creating a key, restrict it:
1. Go to [Credentials](https://console.cloud.google.com/apis/credentials?project=bespokeethos-analytics-475007)
2. Click on your API key
3. Under **API restrictions**, select:
   - Generative Language API
   - Vertex AI API

### 2. Rotate Keys Regularly
- Create new keys before disabling old ones
- Update `.env.local` and Vercel environment variables
- Test thoroughly before deleting old key

### 3. Never Commit Keys to Git
Ensure `.env.local` is in `.gitignore`:
```gitignore
.env.local
.env*.local
*.json  # service account files
```

---

## 🔄 Common Commands

### Check Current Authentication
```bash
gcloud auth list
gcloud config list
```

### Set Default Project
```bash
gcloud config set project bespokeethos-analytics-475007
gcloud config set compute/region us-central1
```

### Enable Required APIs
```bash
gcloud services enable generativelanguage.googleapis.com
gcloud services enable aiplatform.googleapis.com
```

### Create New API Key via CLI
```bash
gcloud services api-keys create --display-name="Swarm API Key" --project=bespokeethos-analytics-475007
```

### List Existing API Keys
```bash
gcloud services api-keys list --project=bespokeethos-analytics-475007
```

---

## 🛡️ Billing & Budget Alerts

### Current Budget: $100/month
- Alert at 50% ($50)
- Alert at 75% ($75)
- Alert at 90% ($90)
- Alert at 100% ($100)

### Check Billing Status
[Billing Console](https://console.cloud.google.com/billing?project=bespokeethos-analytics-475007)

---

## 🚀 Running the 7-Agent Swarm

Once your API key is set:

```bash
# With native Node.js env loading (Node 20+)
node --env-file=.env.local scripts/7-agent-implementation-orchestrator.mjs

# Or ensure the key is exported
$env:GOOGLE_GEMINI_API="your_key_here"
node scripts/7-agent-implementation-orchestrator.mjs
```

---

## 📋 Troubleshooting Checklist

| Issue | Solution |
|-------|----------|
| "Access blocked: Authorization Error" | Create API key via Console, not CLI |
| "API key not found" | Check `.env.local` has `GOOGLE_GEMINI_API=...` |
| "Permission denied" | Verify project has billing enabled |
| "Quota exceeded" | Wait for quota reset or request increase |
| Script exits silently | Add `console.log(process.env.GOOGLE_GEMINI_API)` to verify |

---

## 📚 Related Documentation

- [Gemini API Quickstart](https://ai.google.dev/gemini-api/docs/quickstart)
- [Vertex AI Setup](https://cloud.google.com/vertex-ai/docs/start/cloud-console)
- [API Key Best Practices](https://cloud.google.com/docs/authentication/api-keys)
- [gcloud CLI Reference](https://cloud.google.com/sdk/gcloud/reference)

---

## 🔐 Service Account Setup (Optional)

For production deployments or advanced features:

1. Go to [Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts?project=bespokeethos-analytics-475007)
2. Click **+ CREATE SERVICE ACCOUNT**
3. Name: `vertexai-automation`
4. Role: **Vertex AI User**
5. Click **Done**
6. Click on the new service account
7. Go to **Keys** tab → **Add Key** → **Create new key** → **JSON**
8. Save the downloaded file securely
9. Set env var:
   ```bash
   GOOGLE_APPLICATION_CREDENTIALS=/path/to/keyfile.json
   ```

---

*This document was auto-generated to prevent future authentication issues.*
