# Google Cloud Authentication & API Key Management
**Last Updated**: 2025-12-13  
**Status**: ✅ Production Ready

## 🎯 Quick Start (Never Have Auth Issues Again!)

### One-Command Setup
```powershell
.\scripts\setup-google-cloud.ps1 -UpdateKeys
```

This script will:
- ✅ Verify gcloud CLI installation
- ✅ Authenticate with Google Cloud
- ✅ Configure project: `bespokeethos-analytics-475007`
- ✅ Update all API keys in `.env.local`
- ✅ Verify configuration

---

## 📋 Current Configuration (2025-12-13)

### Project Details
- **Project ID**: `bespokeethos-analytics-475007`
- **Billing Account**: `01D82D-EE885B-C29459`
- **Region**: `us-central1`
- **Account**: `contact@bespokeethos.com`

### Active API Key
```
AIzaSyD8veKWYoNPQcxPfJcEANSv322UDiM_2IQ
```

**Created**: 2025-12-13  
**Quota Tier**: Tier 1 (Upgrade requested to Tier 2+)  
**Services**: Gemini API, Generative Language API

### Previous Keys (Deprecated)
- ❌ `AIzaSyDYKa5Bylu4xwNoTWRneTAKcamCuHKd-gM` (Old key - DO NOT USE)
- ❌ `AIzaSyDe1Ab3TGIvRDaH5bmPKj5vg3yfHOMLuK0` (Old key - DO NOT USE)
- ❌ `AIzaSyBgpZmJ0PL4kVwiYj19PkG5_pd27UQS7c0` (Old key - DO NOT USE)

---

## 🔧 Environment Variables

### Local Development (`.env.local`)
```bash
# GOOGLE CLOUD / GEMINI / VERTEX AI
GOOGLE_API_KEY=AIzaSyD8veKWYoNPQcxPfJcEANSv322UDiM_2IQ
GOOGLE_GEMINI_API=AIzaSyD8veKWYoNPQcxPfJcEANSv322UDiM_2IQ
GOOGLE_GENERATIVE_AI_API_KEY=AIzaSyD8veKWYoNPQcxPfJcEANSv322UDiM_2IQ
```

### Vercel Production
Add these in [Vercel Dashboard](https://vercel.com/bespokeethos/bespoke-ethos/settings/environment-variables):

| Variable Name | Value | Environments |
|--------------|-------|--------------|
| `GOOGLE_GENERATIVE_AI_API_KEY` | `AIzaSyD8veKWYoNPQcxPfJcEANSv322UDiM_2IQ` | Production, Preview, Development |
| `GOOGLE_API_KEY` | `AIzaSyD8veKWYoNPQcxPfJcEANSv322UDiM_2IQ` | Production, Preview, Development |
| `GOOGLE_GEMINI_API` | `AIzaSyD8veKWYoNPQcxPfJcEANSv322UDiM_2IQ` | Production, Preview, Development |

---

## 📊 Quota Tiers & Limits

### Current: Tier 1 (Free)
- **RPM** (Requests Per Minute): 15
- **TPM** (Tokens Per Minute): 1,000,000
- **RPD** (Requests Per Day): 1,500

### Requested: Tier 2+
- **RPM**: 1,000 (67x increase)
- **TPM**: 4,000,000 (4x increase)
- **Status**: Pending approval
- **Check Status**: [Quota Dashboard](https://console.cloud.google.com/apis/api/generativelanguage.googleapis.com/quotas?project=bespokeethos-analytics-475007)

### Alternative: Vertex AI (Recommended)
- **RPM**: 300 (20x higher than Tier 1)
- **No quota request needed**
- **Same models** (Gemini Pro, Flash, etc.)
- **Enable**: [Vertex AI Console](https://console.cloud.google.com/vertex-ai?project=bespokeethos-analytics-475007)

---

## 🚀 Usage Examples

### Verify Current Setup
```powershell
.\scripts\setup-google-cloud.ps1 -VerifyOnly
```

### Update API Keys
```powershell
.\scripts\setup-google-cloud.ps1 -UpdateKeys
```

### Check Quota Status
```powershell
.\scripts\setup-google-cloud.ps1 -CheckQuota
```

### Full Setup (First Time)
```powershell
.\scripts\setup-google-cloud.ps1 -UpdateKeys -CheckQuota
```

---

## 🔐 Authentication Methods

### Method 1: Application Default Credentials (Recommended)
```powershell
gcloud auth application-default login
```
**Use for**: Local development, automated scripts

### Method 2: User Account
```powershell
gcloud auth login contact@bespokeethos.com
```
**Use for**: Manual gcloud CLI commands

### Method 3: Service Account (Production)
```powershell
# Create service account
gcloud iam service-accounts create gemini-api-user \
  --display-name="Gemini API Service Account"

# Grant permissions
gcloud projects add-iam-policy-binding bespokeethos-analytics-475007 \
  --member="serviceAccount:gemini-api-user@bespokeethos-analytics-475007.iam.gserviceaccount.com" \
  --role="roles/aiplatform.user"

# Create key
gcloud iam service-accounts keys create key.json \
  --iam-account=gemini-api-user@bespokeethos-analytics-475007.iam.gserviceaccount.com
```

---

## 🛠️ Troubleshooting

### Issue: "Authentication Required"
**Solution**:
```powershell
gcloud auth application-default login
```

### Issue: "Wrong Project"
**Solution**:
```powershell
gcloud config set project bespokeethos-analytics-475007
```

### Issue: "Quota Exceeded"
**Solutions**:
1. **Check current usage**: [Quota Dashboard](https://console.cloud.google.com/apis/api/generativelanguage.googleapis.com/quotas?project=bespokeethos-analytics-475007)
2. **Request increase**: Click "EDIT QUOTAS" in dashboard
3. **Use Vertex AI**: Higher default quotas (300 RPM vs 15 RPM)

### Issue: "API Key Invalid"
**Solution**:
```powershell
# Update to latest key
.\scripts\setup-google-cloud.ps1 -UpdateKeys

# Or manually update .env.local
# GOOGLE_GENERATIVE_AI_API_KEY=AIzaSyD8veKWYoNPQcxPfJcEANSv322UDiM_2IQ
```

### Issue: "Billing Not Enabled"
**Solution**:
1. Go to [Billing Dashboard](https://console.cloud.google.com/billing/linkedaccount?project=bespokeethos-analytics-475007)
2. Verify billing account `01D82D-EE885B-C29459` is linked
3. Ensure payment method is valid

---

## 📚 Quick Reference Links

### Google Cloud Console
- **Project Dashboard**: https://console.cloud.google.com/home/dashboard?project=bespokeethos-analytics-475007
- **API Keys**: https://aistudio.google.com/app/apikey
- **Quotas**: https://console.cloud.google.com/apis/api/generativelanguage.googleapis.com/quotas?project=bespokeethos-analytics-475007
- **Billing**: https://console.cloud.google.com/billing/linkedaccount?project=bespokeethos-analytics-475007
- **Vertex AI**: https://console.cloud.google.com/vertex-ai?project=bespokeethos-analytics-475007

### Vercel
- **Environment Variables**: https://vercel.com/bespokeethos/bespoke-ethos/settings/environment-variables
- **Deployments**: https://vercel.com/bespokeethos/bespoke-ethos/deployments

### Documentation
- **Gemini API Docs**: https://ai.google.dev/docs
- **Vertex AI Docs**: https://cloud.google.com/vertex-ai/docs
- **Quota Tiers**: https://ai.google.dev/pricing

---

## 🎓 Best Practices

### 1. **Never Commit API Keys**
- ✅ Keys are in `.env.local` (gitignored)
- ✅ Use environment variables
- ❌ Never hardcode in source code

### 2. **Rotate Keys Regularly**
- Create new key every 90 days
- Update `.env.local` and Vercel
- Delete old keys from Google Cloud Console

### 3. **Monitor Usage**
- Set up budget alerts
- Check quota dashboard weekly
- Enable billing notifications

### 4. **Use Appropriate Auth**
- **Local dev**: Application Default Credentials
- **Production**: Service Account
- **CI/CD**: Service Account with minimal permissions

### 5. **Document Changes**
- Update this file when creating new keys
- Note deprecation dates for old keys
- Keep changelog in Git commits

---

## 📝 Changelog

### 2025-12-13
- ✅ Created new API key: `AIzaSyD8veKWYoNPQcxPfJcEANSv322UDiM_2IQ`
- ✅ Updated `.env.local` with new key
- ✅ Added to Vercel production environment
- ✅ Created automated setup script
- ✅ Requested quota tier upgrade (Tier 1 → Tier 2+)
- ✅ Documented all configuration
- ❌ Deprecated old keys

### Previous
- 2025-11-27: Initial Google Cloud setup
- 2025-11-27: Created `GOOGLE_CLOUD_SETUP.md`

---

## 🆘 Emergency Contacts

**If you encounter issues**:
1. Run: `.\scripts\setup-google-cloud.ps1 -VerifyOnly`
2. Check this README
3. Review [GOOGLE_CLOUD_SETUP.md](./GOOGLE_CLOUD_SETUP.md)
4. Contact: Antigravity AI (this assistant)

---

**Last Verified**: 2025-12-13 23:18 EST  
**Next Review**: 2026-03-13 (90 days)
