# READ THIS MCP SURVIVAL GUIDE NOW

_Updated: Sunday, November 23, 2025 -- keep this open during the Sanity.io migration & search API sprint._

## TL;DR
-   Activate the MCP helpers in `docs/mcp-tooling.md` before touching secrets. No key work happens without `OPENAI_API_KEY`, `.venv`, `openai-agents`, and the Pinecone/OpenAI environment variables.
-   Every connector listed below must be exercised (Vercel, GitHub, Airtable, Cloudflare, Stripe, Playwright, Canva, Gmail, Filesystem, Pinecone, OpenAI, and Sanity). Skip one and you will miss a secret or a crucial integration.
-   Follow the validation playbook exactly: inventory -> verify -> exercise -> log -> re-run `pnpm run check`.

---

## 1. Boot Sequence (do not improvise)
1.  `python -m venv .venv && .venv\Scripts\activate` (skip only if `.venv/` already exists and is fresh).
2.  `pip install --upgrade pip "openai-agents>=0.1.0"` inside the venv.
3.  `setx OPENAI_API_KEY "sk-..."` (or `set OPENAI_API_KEY=...` in the current shell). No MCP helper runs without it.
4.  Personal session ->  
    `pnpm exec python scripts/mcp_self.py --server-label gitmcp --server-url https://gitmcp.io/openai/codex --prompt "Which env files changed today?"`
5.  Multi-agent session (layout/SEO/asset triad) ->  
    `pnpm exec python scripts/mcp_agents.py hosted --config scripts/mcp_agents_config.json --server-label gitmcp --server-url https://gitmcp.io/openai/codex`
6.  Local filesystem server (stdio) when you need raw `.env` snapshots ->  
    `pnpm exec python scripts/mcp_agents.py stdio --config scripts/mcp_agents_config.json --server-name local-files --server-params '{"command":"npx","args":["-y","@modelcontextprotocol/server-filesystem","."]}'

---

## 2. Connector Catalog (use every single MCP)
| MCP | Access Mode | Primary Jobs in this Sprint |
| --- | --- | --- |
| Vercel | Hosted (`server-label vercel`) | List env vars, confirm `prj_8cbai6JzE169NUytyFtCpSohZVka`, inspect build + runtime logs, toggle SKUs after key swaps. Confirm Sanity, Pinecone, OpenAI, and Resend envs. |
| GitHub (gitmcp) | Hosted | Diff `.env*`, find secret usage, confirm BaseHub removal, review Sanity wiring, Pinecone/OpenAI search integration before merge. |
| Airtable | Hosted | Validate API key/base/table IDs, run test inserts for contact & newsletter forms, confirm schema. |
| Cloudflare | Hosted | Check Workers/R2/KV bindings for outdated tokens (e.g., Turnstile), ensure no shadow copies of secrets. |
| Stripe | Hosted | (Future pricing flows) ensure live/test keys separated, document if unset to avoid runtime errors. |
| Playwright | Hosted | Run smoke flows after each env edit (contact form submit, newsletter opt-in, Turnstile challenge). |
| Sentry | Hosted | **(DEPRECATED/REMOVED)** - Ensure DSN + environment tags are no longer routing; look for auth failures if any legacy code attempts to connect. |
| Canva | Hosted | Asset refresh tasks (hero/pricing imagery) when env toggles require updated public assets. |
| Gmail | Hosted | Confirm transactional email fallbacks and OAuth creds if RESEND keys fail; send test ping. |
| Filesystem (`@modelcontextprotocol/server-filesystem`) | stdio | Snapshot `.env.example`, `.env.local`, `.env.production`, and compare against Vercel-managed values. |
| Pinecone | Hosted | Verify Pinecone/OpenAI env vars, index configuration, embedding generation, and a full upsert/fetch flow for semantic search. |
| OpenAI | Hosted | Verify API key, embedding model, and successful integration with Pinecone search. |

> If a connector fails to load, stop and fix it--running partial tooling invalidates the audit.

---

## 3. Env Variable Coverage Map
| Service | Variables | Validation Notes |
| --- | --- | --- |
| Branding / URLs | `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SITE_NAME` | Ensure public URL matches production, no staging leakage. |
| Vercel Guardrail | `REQUIRED_VERCEL_PROJECT_ID` | Confirm matches `prj_8cbai6JzE169NUytyFtCpSohZVka`; Vercel MCP should warn if not. |
| Resend | `RESEND_API_KEY`, `CONTACT_ENABLE_EMAIL`, `CONTACT_EMAIL_FROM`, `CONTACT_EMAIL_TO`, `CONTACT_EMAIL_SUBJECT` | Send a test notification (Gmail MCP fallback) and verify Sentry logs show success. |
| Cloudflare Turnstile | `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET` | Exercise via Playwright to ensure challenges pass. |
| Airtable CRM | `AIRTABLE_API_KEY`, `AIRTABLE_BASE_ID`, `AIRTABLE_CONTACT_TABLE_ID`, `AIRTABLE_NEWSLETTER_TABLE_ID` | Use Airtable MCP to confirm schemas + insert/delete test rows. |
| Remote data toggle | `SKIP_REMOTE_DATA` | Keep `1` until Sanity rollout is complete; document rationale when flipping. |
| Legacy CMS | `BASEHUB_TOKEN` | Should stay unset post-migration; GitHub MCP greps help ensure no code path requires it. |
| Event ingest | `CONTACT_EVENTS_INGEST_KEY` | Decide whether we still stream analytics; remove unused listeners. |
| Sanity | `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_TOKEN`, `SANITY_API_VERSION` | Add to `.env.example`, Vercel, and secrets manager simultaneously; verify via GitHub + Vercel MCPs. |
| OpenAI | `OPENAI_API_KEY`, `EMBEDDING_MODEL` | Verify through `scripts/test-pinecone.mjs` and the new search API. |
| Pinecone | `PINECONE_API_KEY`, `PINECONE_ENVIRONMENT`, `PINECONE_INDEX_NAME`, `PINECONE_PROJECT_NAME`, `PINECONE_HOST` | Verify through `scripts/test-pinecone.mjs` and the new search API. |
| Web Search | `WEB_SEARCH_API_KEY` | (Optional) For future live web search features. |

Keep the table updated as new secrets appear; stale docs are as risky as stale keys.

---

## 4. Validation Playbook
1.  **Inventory**
    -   `rg -n "process.env"` and `rg -n "env."` to locate every consumption site.
    -   Fetch `.env.example` + Vercel env via filesystem + Vercel MCP; diff them.
    -   Check for `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET` as a common source of friction.
2.  **Verify Ownership**
    -   For each service, confirm who owns rotation, when it last changed, and where it is stored.
    -   Record findings in `Manus/current_state.md` so the next agent sees real data.
3.  **Exercise Secrets**
    -   Use Airtable MCP to write test rows, Vercel MCP to trigger preview deploys, Playwright MCP for live form submits.
    -   **Test Resend Email Delivery:** Trigger contact form submission and verify email receipt.
    -   **Test Pinecone/OpenAI Search:** Execute queries against `/api/search/internal` to verify semantic search.
    -   Watch Sentry MCP for new errors immediately after each test (if Sentry is re-enabled).
4.  **Remediate**
    -   Update `.env.example`, `.env.local`, and Vercel Dashboard together.
    -   Remove dead keys (e.g., `BASEHUB_TOKEN`, Sentry DSNs) in the same PR so drift cannot creep back.
5.  **Re-test & Log**
    -   `pnpm run check` + targeted smoke scripts (`pnpm run smoke:images`, `pnpm run smoke:pages`).
    -   Paste MCP outputs + decisions into sprint notes (or `docs/mcp-tooling.md`) before closing the task.

---

## 5. Quick Reference Snippets
-   **List Vercel envs (hosted MCP):** `{"type":"mcp","server_label":"vercel","server_url":"https://vercel.com/openai/mcp"}`
-   **GitHub diff helper:** `pnpm exec python scripts/mcp_self.py --server-label gitmcp --server-url https://gitmcp.io/openai/codex --prompt "Show changes to .env.example since HEAD~3"`
-   **Airtable schema probe:** `... --prompt "Describe fields in AIRTABLE_CONTACT_TABLE_ID and insert a test row tagged MCP_AUDIT"`
-   **Filesystem snapshot:** `pnpm exec python scripts/mcp_self.py stdio --server-params '{"command":"npx","args":["-y","@modelcontextprotocol/server-filesystem","."]}' --prompt "cat .env.local"`
-   **Test Pinecone/OpenAI:** `node scripts/test-pinecone.mjs` (requires env vars set)

Copy these commands into your shell history so you can rerun them whenever secrets change.

---

## 6. When Things Go Wrong
-   **Connector fails to authenticate:** regenerate tokens, then document the fix here.
-   **Env mismatch between GitHub and Vercel:** fix Vercel first (it is the source of truth for production), then backfill local files.
-   **Playwright smoke fails:** inspect TURNSTILE + Airtable credentials first; 90% of regressions stem from those pairs.
-   **Sanity/Pinecone/OpenAI search fails:** Check API keys, host, project ID, dataset, embedding model. Verify `SKIP_REMOTE_DATA` is not blocking remote calls.
-   **Need human approval:** follow the approval policy in `docs/system-guardrails.md` and record the request ID next to the env change.

Stay disciplined--this file is your warning siren. If you can read it, you have zero excuses for shipping broken secrets.