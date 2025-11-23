# Current Project State

**Date:** Sunday, November 23, 2025  
**Project:** bespoke-ethos  
**Status:** In active development - Sanity migration in progress

---

## MCP Readiness Snapshot (Updated November 23, 2025)

- **Working connectors:** GitMCP (`https://gitmcp.io/openai/codex`) and Filesystem MCP (`npx -y @modelcontextprotocol/server-filesystem .`).  
- **Blocked connectors:** Sentry MCP (`401 Unauthorized`) and Vercel MCP (`424 Failed Dependency`). Both are explicitly disabled inside `scripts/mcp_agents_config.json`; agents must not attempt them until fresh credentials exist.
- **Operator keying:** Set `$env:OPENAI_API_KEY` to the service key in the active shell plus `$env:PYTHONIOENCODING='utf-8'`. Do **not** commit or echo the raw value; only set it temporarily before launching agents.
- **Environment alignment:**  
  - Sanity -> `SANITY_PROJECT_ID=3zm8j5u6`, dataset `production`, API token already in `.env.local` and Vercel.  
  - Airtable -> `AIRTABLE_BASE_ID=appDG8eZQE9oG8gPY`, `AIRTABLE_CONTACT_TABLE_ID=tblIWtgkqJd2mhWj6`, `AIRTABLE_NEWSLETTER_TABLE_ID=tbllMAx256vCwKVFq`.  
  - Pinecone -> host `https://bespoke-ethos-o0ibx7b.svc.aped-4627-b74a.pinecone.io`, namespace `production`, embedding model `text-embedding-3-small`.
- **Agent orchestration:** `scripts/mcp_agents_config.json` defines agent roles.

---

## Deployment Status

### Live URLs
- **Production:** https://www.bespokeethos.com
- **Vercel URL:** https://bespoke-ethos-upton-rands-projects.vercel.app

### Current State
- The production site is currently showing a runtime error due to the BaseHub CMS integration. The active migration to Sanity.io is the primary focus to resolve this issue.

---

## Project Structure

### Key Directories
```
bespoke-ethos/
├── src/
│   ├── app/
│   │   ├── api/                # Internal API routes (e.g., /api/search/internal)
│   │   ├── changelog/          # Changelog pages (migrated to Sanity)
│   │   ├── _sections/          # Page sections
│   │   └── _components/        # Shared components
│   ├── lib/
│   │   ├── sanity/             # Sanity client, queries, types, and conceptual schemas
│   │   ├── search/             # Search configurations (OpenAI embeddings, Pinecone shape)
│   │   └── basehub/            # BaseHub integration (TO BE REMOVED)
│   └── utils/
├── scripts/                     # Build scripts
├── public/                      # Static assets
└── package.json                 # Dependencies
```

---

## Environment Variables

### Current (Vercel)
- `NEXT_PUBLIC_SITE_URL` - "https://www.bespokeethos.com" (Canonical site URL and branding)
- `NEXT_PUBLIC_SITE_NAME` - "Bespoke Ethos" (Canonical site URL and branding)
- `REQUIRED_VERCEL_PROJECT_ID` - "prj_8cbai6JzE169NUytyFtCpSohZVka" (Vercel project guardrails)
- `RESEND_API_KEY` - Email service (Contact form notifications)
- `CONTACT_ENABLE_EMAIL` - "true" to enable contact form email notifications via Resend
- `CONTACT_EMAIL_FROM` - Sender email address for contact form notifications (e.g., "onboarding@bespokeethos.com")
- `CONTACT_EMAIL_TO` - Recipient email address for contact form notifications (e.g., "hello@bespokeethos.com")
- `CONTACT_EMAIL_SUBJECT` - Subject line for contact form notification emails
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` - Spam protection (Cloudflare Turnstile)
- `TURNSTILE_SECRET` - Spam protection (Cloudflare Turnstile)
- `AIRTABLE_API_KEY` - CRM integration (Airtable)
- `AIRTABLE_BASE_ID` - Airtable base (Airtable)
- `AIRTABLE_CONTACT_TABLE_ID` - Contact form submissions (Airtable)
- `AIRTABLE_NEWSLETTER_TABLE_ID` - Newsletter signups (Airtable)
- `SKIP_REMOTE_DATA` - Set to "1" (Disables remote Sanity/Pinecone calls in local development, renders fallbacks)
- `SANITY_PROJECT_ID` - Sanity project ID (Server-side only)
- `SANITY_DATASET` - Sanity dataset (Server-side only)
- `SANITY_API_TOKEN` - Sanity API token (Optional, for draft content; Server-side only)
- `SANITY_API_VERSION` - Sanity API version (Server-side only)
- `OPENAI_API_KEY` - OpenAI API key (For embeddings and AI features; Server-side only)
- `PINECONE_API_KEY` - Pinecone API key (Server-side only)
- `PINECONE_ENVIRONMENT` - Pinecone environment (Server-side only)
- `PINECONE_INDEX_NAME` - Pinecone index name (Server-side only)
- `PINECONE_PROJECT_NAME` - Pinecone project name (Server-side only)
- `PINECONE_HOST` - Pinecone host URL (Server-side only)
- `EMBEDDING_MODEL` - OpenAI embedding model (e.g., "text-embedding-3-small"; Server-side only)
- `WEB_SEARCH_API_KEY` - Optional web search provider for MCP agents / future live web search

### .env.local Alignment
- The `.env.local` file should generally mirror the structure and variable names found in `.env.example`.
- Intentional differences (e.g., `SKIP_REMOTE_DATA=1` for local development, or specific test API keys) are permitted but should be clearly documented within `.env.local` itself, or in this `current_state.md` if they represent project-wide development patterns.

### Removed (Legacy)
- `BASEHUB_TOKEN` - (Removed, replaced by Sanity)
- `CONTACT_EVENTS_INGEST_KEY` - (Removed, if no longer used by active integrations)

---

## Next Steps

1. **Immediate:** Continue with the removal of BaseHub code and integration of Sanity data into the frontend.
2. **Short-term:** Test the Resend email integration and the Pinecone/OpenAI search API.
3. **Long-term:** Complete the full migration to Sanity and remove all legacy BaseHub code.