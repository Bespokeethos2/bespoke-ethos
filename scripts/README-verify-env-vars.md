# Environment Variable Verification Script

## Purpose

This script verifies that all required environment variables for the Gemini 2.0 Flash integration are properly configured. It checks both required and optional variables and provides detailed feedback about what's missing.

## Usage

### Run via npm/pnpm
```bash
pnpm run verify:env
# or
npm run verify:env
```

### Run directly
```bash
node scripts/verify-env-vars.mjs
```

## What It Checks

### Required Variables (with fallback)
- `GOOGLE_GENERATIVE_AI_API_KEY` - Primary Gemini API key
- `GOOGLE_GEMINI_API` - Fallback Gemini API key

At least **one** of these must be set for the application to work.

### Optional Variables
- `OPENAI_API_KEY` - For OpenAI intelligence features
- `GOOGLE_CLOUD_PROJECT` - Project ID (documentation)
- `GOOGLE_CLOUD_REGION` - Cloud region (documentation)

## Exit Codes

- `0` - Success: All required variables are present
- `1` - Failure: Missing required variables

## Example Output

### When Variables Are Missing
```
❌ VERIFICATION FAILED: Missing required environment variables
❌ The GeminiChatbot component will NOT work
❌ The API route /api/chat/google will return errors
```

### When Variables Are Present
```
✅ VERIFICATION PASSED: All required environment variables are present
✅ The GeminiChatbot component will work correctly
✅ The API route /api/chat/google will function properly
```

## Integration with CI/CD

This script can be integrated into deployment workflows:

```yaml
# Example for Vercel deployment
- name: Verify environment variables
  run: pnpm run verify:env
  env:
    GOOGLE_GENERATIVE_AI_API_KEY: ${{ secrets.GOOGLE_GENERATIVE_AI_API_KEY }}
    GOOGLE_GEMINI_API: ${{ secrets.GOOGLE_GEMINI_API }}
```

## Related Documentation

- [VERCEL_ENV_CHECKLIST.md](../VERCEL_ENV_CHECKLIST.md) - Complete Vercel configuration guide
- [GOOGLE_CLOUD_SETUP.md](../GOOGLE_CLOUD_SETUP.md) - Google Cloud setup instructions

## When to Use

- Before deploying to Vercel
- After updating environment variables
- When troubleshooting chatbot issues
- During local development setup
