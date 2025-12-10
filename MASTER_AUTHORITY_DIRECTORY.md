# UPTON RAND - MASTER AUTHORITY & RESOURCE DIRECTORY
**Version 1.0** | **Updated:** December 9, 2025 | **Authority Level:** CANONICAL

---

## PART ONE: THE TRUE YOU (CANONICAL CONTEXT)

### Identity Foundation
- **Legal Name:** Upton Rand
- **Location:** Cleveland, OH 44111
- **Business:** BespokeEthos.com - AI Consulting & Automation
- **Status:** NGLCC-certified, gay-owned enterprise; Catalant-vetted; Microsoft-backed founder (previous)

### Core Mission
AI and humans work best when in **harmony**. You capture commercial value by providing that alignment. Build companies that don't require you to shrink. Democratize AI for people without traditional credentials or capital.

### Current Life Operating System
- **Day Job:** Tool & Die Technician, Stampco Industries (6am-4pm Mon-Thu) — graduating December 2025 with journeyman card
- **Sobriety:** 10 years clean from heroin (February 15, 2015)
- **Spiritual Practice:** 3rd generation Unitarian Universalist; Sunday mornings at church with Max (service dog)
- **Education:** B.Sc. in Biology; ongoing autism diagnosis testing
- **Health:** Treatment-resistant depression (Parnate 120mg), complex migraines (Zavzpret, Rayvow), sleep apnea (Sunosi), Medicaid coverage
- **Companion:** Max (3-year-old pug, trained service dog, emotional support companion)
- **Family Care:** Weekly check-ins with mother Kate Newland (Alzheimer's, Cleveland Heights)

### Consulting Profile
- **Rate:** $250-300/hour
- **Experience:** 5+ years human-in-the-loop AI trainer (Appen 2020-present); 10+ years total AI model training
- **Platform Expertise:** Claude, Cursor, GPT, Gemini, Grok, Antigravity, custom Python automation
- **Core Superpower:** Mastering alignment — the relational architecture between human intention and AI capability
- **Unique Positioning:** Trained the models other consultants charge to use

### Discount Structure
- **25% off** for LGBTQ+ small businesses (active)
- **Considering expansion** to minority-owned/marginalized-owned businesses (under evaluation)

### Strategic Timeline
- **By December 2025:** Secure first AI consulting clients; graduate with journeyman card
- **By Early 2026:** Achieve $5,000/month consulting runway; leave day job
- **Ongoing:** Refine BespokeEthos product copy; resolve tax issues (federal extension Oct 15; city/sales taxes urgent); find life partner with alignment as core criterion

### Writing Style & Voice
- Opens with vulnerability ("Let's be honest...")
- Self-deprecating humor + dark comedy
- Explicit sensory/sexual detail to prove authenticity
- Strategic profanity for emphasis
- Always extracts universal business/life lessons
- Ends with actionable frameworks or invitation

---

## PART TWO: APIS & INTEGRATIONS AVAILABLE

### AI Model APIs

#### 1. OpenAI Gateway
- **Endpoint:** `/api/brutus` (internal orchestration)
- **Models Available:**
  - `gpt-4.1` (default for Brutus intelligence layer)
  - `gpt-4o` (coding/reasoning tasks)
  - Embedding models: `text-embedding-3-small`, `text-embedding-ada-002`
- **Auth:** `AI_GATEWAY_URL` + `AI_GATEWAY_API_KEY` OR direct `OPENAI_API_KEY`
- **System Prompt:** Encoded in `pmpt_6917f65a884c8197b3dbde116161d7690be2e9c70148404b` (stored in OpenAI UI)
- **Usage:** Text completion, embeddings, vision analysis
- **Location:** [src/app/api/brutus/route.ts](src/app/api/brutus/route.ts)

#### 2. Google Generative AI (Vertex AI / Gemini)
- **API Key:** `GOOGLE_GENERATIVE_AI_API_KEY`
- **Models:** `models/gemini-1.5-pro-latest` (vision + multimodal)
- **Capabilities:** Image analysis, screenshot interpretation, multimodal reasoning
- **Usage:** Vision analysis ("Eyes" of Brutus)
- **Location:** [src/lib/brutus-intelligence.ts](src/lib/brutus-intelligence.ts:14-18)

#### 3. Groq API
- **Endpoint:** Configured in dependencies (`groq` package v4.15.0)
- **Usage:** Fast inference for compatible models
- **Status:** Available but not primary in current architecture

#### 4. Ollama (Local/Edge AI)
- **Models:** Llama 3 (via `ollama-ai-provider`)
- **Status:** Optional, local-only; gracefully degrades if not available
- **Purpose:** Private, uncensored, locally controllable reasoning
- **Usage:** "Soul" of Brutus for sovereign AI workflows
- **Location:** [src/lib/brutus-intelligence.ts](src/lib/brutus-intelligence.ts:28-39)

#### 5. Search APIs

##### Pinecone Vector Database
- **Purpose:** Semantic search over documentation and knowledge base
- **Host:** `PINECONE_HOST` (e.g., `index-name.svc.region.pinecone.io`)
- **API Key:** `PINECONE_API_KEY`
- **Index Config:**
  - **Dimension:** 1536 (for OpenAI embeddings)
  - **Metric:** Cosine similarity
  - **Type:** Serverless (auto-scaling)
  - **Namespace:** `production` (default) or custom per use case
- **Flow:**
  1. User query → OpenAI embedding API → 1536-dim vector
  2. Vector → Pinecone query (top-K=10, includeMetadata=true)
  3. Results returned with metadata (title, source, tags, snippet)
- **Fallback:** If Pinecone unavailable → Sanity CMS fallback search
- **Location:** [src/app/api/search/internal/route.ts](src/app/api/search/internal/route.ts:50-139)
- **Test Script:** [scripts/test-pinecone.mjs](scripts/test-pinecone.mjs) — validates env vars, embedding generation, vector upsert

##### Sanity CMS
- **Purpose:** Fallback changelog/content search; structured content management
- **Query:** `searchChangelogQuery` with full-text search on changelog posts
- **Location:** [src/lib/sanity/client.ts](src/lib/sanity/client.ts), [src/lib/sanity/queries.ts](src/lib/sanity/queries.ts)
- **Usage:** When Pinecone unavailable or disabled (SKIP_REMOTE_DATA=1)

#### 6. Email & Communication APIs

##### Resend
- **Package:** `resend@6.4.2`
- **Purpose:** Email delivery for contact forms, newsletters
- **Usage:** Newsletter signup, contact form follow-up
- **Status:** Integrated; requires `RESEND_API_KEY`

#### 7. Infrastructure & Deployment

##### Vercel
- **Package:** `vercel@48.12.1`
- **Purpose:** Hosting, serverless function deployment, CI/CD
- **Environment:** `AI_GATEWAY_URL`, `AI_GATEWAY_API_KEY` for Vercel AI Gateway proxy
- **Deploy Script:** [scripts/brutus-deploy.mjs](scripts/brutus-deploy.mjs)

---

## PART THREE: EXTENSIONS DIRECTORY (Complete Inventory)

### Active Extensions (Verified)

#### 1. **genkit** (Google's AI Framework)
- **Path:** `/extensions/genkit`
- **Type:** AI agent orchestration framework
- **Docs:** [extensions/genkit/GENKIT.md](extensions/genkit/GENKIT.md)
- **Purpose:** Low-maintenance agentic workflows aligned with Google Cloud
- **Status:** Git repo (git submodule or clone)

#### 2. **nanobanana** (Agentic CLI Tool)
- **Path:** `/extensions/nanobanana`
- **Type:** CLI framework with MCP server support
- **Commands Available:**
  - `diagram` — Generate architecture diagrams
  - `edit` — File editing
  - `generate` — Content/code generation
  - `icon` — Icon generation
  - `pattern` — Design pattern library
  - `restore` — Rollback functionality
  - `story` — Narrative/documentation
- **MCP Server:** [extensions/nanobanana/mcp-server/](extensions/nanobanana/mcp-server/) with TypeScript implementation
- **Docs:** [extensions/nanobanana/README.md](extensions/nanobanana/README.md)
- **Status:** Production-ready

#### 3. **mcp-redis** (Redis MCP Server)
- **Path:** `/extensions/mcp-redis`
- **Type:** Model Context Protocol server for Redis
- **Purpose:** Persistent cache, session management, task queues
- **Status:** Available for integration

#### 4. **GeminiCLI_ComputerUse_Extension**
- **Path:** `/extensions/GeminiCLI_ComputerUse_Extension`
- **Type:** Computer use automation via Gemini
- **Purpose:** Automated workflow execution, UI interaction
- **Status:** Git submodule

#### 5. **daily-grind-extension**
- **Path:** `/extensions/daily-grind-extension`
- **Type:** Daily task management
- **Purpose:** Track and manage recurring tasks
- **Status:** Available

#### 6. **gemini-flow** (Agentic Flow Designer)
- **Path:** `/extensions/gemini-flow`
- **Type:** Visual workflow/agent builder
- **Purpose:** Low-code agent orchestration
- **Status:** Development/reference

#### 7. **gemini-cloud-assist-mcp** (Google Cloud MCP)
- **Path:** `/extensions/gemini-cloud-assist-mcp`
- **Type:** Model Context Protocol for Google Cloud services
- **Purpose:** Direct integration with Vertex AI, Cloud Run, etc.
- **Status:** Available for cloud-native workflows

#### 8. **extension-browser**
- **Path:** `/extensions/extension-browser`
- **Type:** Web browsing/scraping capability
- **Purpose:** Fetch and analyze web content
- **Status:** Available

#### 9. **FileSearchStore-extension**
- **Path:** `/extensions/FileSearchStore-extension`
- **Type:** Full-text file search with storage
- **Purpose:** Semantic file discovery within codebase
- **Status:** Available

#### 10. **firebase** (Google Firebase)
- **Path:** `/extensions/firebase`
- **Type:** Backend-as-a-service configuration
- **Purpose:** Auth, database, hosting (fallback option)
- **Status:** Configured but not primary in current stack

#### 11. **gcloud** (Google Cloud CLI)
- **Path:** `/extensions/gcloud`
- **Type:** Google Cloud command-line tools
- **Purpose:** Manage Vertex AI, Cloud Run, IAM
- **Status:** Available for deployment/management

#### 12. **gemini-cli-blueprint-extension**
- **Path:** `/extensions/gemini-cli-blueprint-extension`
- **Type:** Blueprint/template generator
- **Purpose:** Scaffold new projects/patterns
- **Status:** Available

#### 13. **geminicli-git-tools-extension**
- **Path:** `/extensions/geminicli-git-tools-extension`
- **Type:** Git automation via Gemini
- **Purpose:** Automated commits, branching, workflow
- **Status:** Available

#### 14. **gemini-cli-prompt-library**
- **Path:** `/extensions/gemini-cli-prompt-library`
- **Type:** Curated prompt templates
- **Purpose:** Reusable system prompts for common tasks
- **Status:** Available

#### 15. **mcp-toolbox**
- **Path:** `/extensions/mcp-toolbox`
- **Type:** MCP server collection
- **Purpose:** Collection of utility MCP servers
- **Status:** Available

#### 16. **code-review**
- **Path:** `/extensions/code-review`
- **Type:** Automated code review agent
- **Purpose:** Style, security, performance review
- **Status:** Available

#### 17. **gemini-mentor**
- **Path:** `/extensions/gemini-mentor`
- **Type:** AI mentor/teaching agent
- **Purpose:** Learn-by-doing pedagogy
- **Status:** Available

#### 18. **gemini-agent-creator**
- **Path:** `/extensions/gemini-agent-creator`
- **Type:** Agent scaffolding tool
- **Purpose:** Auto-generate agent architectures
- **Status:** Available

#### 19. **figma-gemini-cli-extension**
- **Path:** `/extensions/figma-gemini-cli-extension`
- **Type:** Figma design-to-code via Gemini
- **Purpose:** Convert Figma designs to React/Next.js
- **Status:** Available

#### 20. **GeminiCLI_File_Search_Extension**
- **Path:** `/extensions/GeminiCLI_File_Search_Extension`
- **Type:** Advanced file search
- **Purpose:** Semantic + keyword file discovery
- **Status:** Available

#### 21. **jules**
- **Path:** `/extensions/jules`
- **Type:** [Unknown — verify content]
- **Status:** Present in directory

---

## PART FOUR: PINECONE MEMORY SYSTEM

### Architecture

```
User Query
    ↓
OpenAI Embedding API (text-embedding-3-small or ada-002)
    ↓
1536-dimensional vector
    ↓
Pinecone Vector Query (top-K=10, include metadata)
    ↓
Semantic matches with metadata (title, source, snippet, tags)
    ↓
Return structured SearchResponse
    ↓
Fallback to Sanity CMS if Pinecone unavailable
```

### Environment Variables Required
```bash
PINECONE_API_KEY=<API key from Pinecone project>
PINECONE_HOST=<index-name.svc.region.pinecone.io>
PINECONE_ENVIRONMENT=<region-cloud format, e.g., us-west1-gcp>
PINECONE_INDEX_NAME=<index name, 1-45 chars, alphanumeric>
PINECONE_PROJECT_NAME=<project name>
EMBEDDING_MODEL=<text-embedding-3-small or text-embedding-ada-002>
OPENAI_API_KEY=<for generating embeddings>
```

### Validation & Testing
- **Script:** [scripts/test-pinecone.mjs](scripts/test-pinecone.mjs)
- **Run:** `npm run test:pinecone`
- **Checks:**
  1. Env var presence + format validation
  2. Index connectivity + configuration (1536 dim, cosine metric, serverless)
  3. Embedding generation (sample text → vector)
  4. Vector upsert with metadata
  5. Metadata verification (fetch & validate tags)

### Namespace Usage
- **Default:** `production`
- **Custom:** Per-project or per-feature namespaces for isolation
- **Recommendation:** Keep production separate from test data

### Metadata Structure
```json
{
  "project": "bespoke-ethos",
  "source": "brand-doc | changelog | static",
  "title": "Document Title",
  "snippet": "Text excerpt for display",
  "tags": ["tag1", "tag2"],
  "document_name": "optional",
  "chunk_index": "optional for multi-chunk docs"
}
```

### API Endpoint
- **Location:** [src/app/api/search/internal/route.ts](src/app/api/search/internal/route.ts)
- **Method:** `POST /api/search/internal`
- **Request:** `{ "query": "search term" }`
- **Response:** `{ "query", "source": "pinecone|sanity|error-fallback", "mode": "vector|fallback|error", "results": [...] }`

---

## PART FIVE: AI INTELLIGENCE LAYER ("BRUTUS")

### System Overview
Brutus is the internal server-side AI orchestrator for BespokeEthos. It combines multiple models into a unified intelligence layer.

### Architecture
```
User Request
    ↓
OpenAI Gateway (or direct OpenAI)
    ↓
GPT-4.1 with custom system prompt (pmpt_6917f65a884c8197b3dbde116161d7690be2e9c70148404b)
    ↓
Optional: Vision analysis via Gemini (Google Generative AI)
    ↓
Optional: Local reasoning via Ollama/Llama3 (if available)
    ↓
Structured response with usage metrics
```

### API Endpoint
- **Location:** [src/app/api/brutus/route.ts](src/app/api/brutus/route.ts)
- **Method:** `POST /api/brutus`
- **Auth:** `AI_GATEWAY_URL + AI_GATEWAY_API_KEY` OR `OPENAI_API_KEY`
- **Request Body:**
  ```json
  {
    "prompt": "optional string",
    "messages": [
      { "role": "user", "content": "..." },
      { "role": "assistant", "content": "..." }
    ],
    "model": "gpt-4.1",
    "temperature": 0.2
  }
  ```
- **Response:**
  ```json
  {
    "ok": true,
    "model": "gpt-4.1",
    "message": { "role": "assistant", "content": "..." },
    "usage": { "input_tokens": X, "output_tokens": Y },
    "viaGateway": true
  }
  ```

### System Prompt (Canonical)
```
You are Brutus, a senior automation and full-stack engineer working on the Bespoke Ethos codebase.
You live on the server side (Next.js 16 / React 19 on Vercel) and prioritize small, production-ready changes.
Your canonical instructions are stored in prompt pmpt_6917f65a884c8197b3dbde116161d7690be2e9c70148404b in the OpenAI UI.
Focus on refactors, API integrations, and debugging across Jotform, Calendly, Sanity, Pinecone, and Vercel.
```

### Model Selection
- **Default:** `gpt-4.1` (reasoning, code review, planning)
- **Vision:** Use Gemini (`models/gemini-1.5-pro-latest`) when analyzing images
- **Coding:** Use GPT-4o when generating component code
- **Local:** Use Ollama/Llama3 for private reasoning (if available)

### Available Functions
- `analyzeImage(imageBase64, prompt)` → Vision analysis via Gemini
- `generateCode(requirement)` → Production code via GPT-4o
- `runOpenTask(task)` → Private reasoning via Ollama

### Tool Definitions
- `analyze_visuals` — Image/screenshot analysis
- `generate_component` — React/Next.js component generation

---

## PART SIX: BESPOKEETHOS BUSINESS MODEL

### Products & Services

#### 1. **Cadence™**
- **Price:** $997/month
- **Description:** Premium ongoing AI alignment coaching
- **Copy Status:** Authentic, verified ✓
- **Target:** Founders seeking operational alignment with AI
- **Includes:** Monthly strategy sessions, ongoing optimization

#### 2. **Flowstack™**
- **Price:** $1,497 (one-time)
- **Description:** End-to-end workflow automation design
- **Copy Status:** In development
- **Status:** Feature roadmap (design system established)
- **Includes:** Custom automation architecture, implementation plan

#### 3. **Premium Chatbot**
- **Price:** $949 setup + $149/month
- **Description:** Custom fine-tuned AI assistant for business
- **Copy Status:** Needs refinement
- **Features:** Brand-aligned responses, conversation history, custom training

#### 4. **4x Research**
- **Price:** $299/month
- **Description:** AI-powered market research automation
- **Copy Status:** Needs refinement
- **Includes:** Daily research reports, competitive intelligence, trend analysis

#### 5. **Consensus Engine**
- **Price:** TBD
- **Description:** Decision-making framework using AI alignment principles
- **Copy Status:** Authentic, verified ✓
- **Target:** Executive teams, strategic planning

#### 6. **Free Assessment**
- **Duration:** 30-60 minutes
- **Format:** Phone/Zoom consultation
- **Outcome:** Custom recommendation + cost-benefit analysis
- **Status:** Active lead generation tool
- **Conversion:** Leads into paid services

#### 7. **Enterprise Services**
- **Pricing:** Custom per engagement ($250-300/hr baseline)
- **Services:**
  - Full-stack development
  - SaaS solutions
  - Custom AI implementations
  - Workflow orchestration
  - Prompt engineering
  - AI fine-tuning
  - Financial deep dives
  - SEO/branding analysis
  - Marketing analysis
  - Investment analysis

### Revenue Streams
- **Consulting:** $250-300/hour
- **Productized services:** $997-$1,497
- **Monthly recurring:** $149-$999/month (Cadence, Premium Chatbot, 4x Research)
- **Book royalties:** *Gay Campgrounds*, *Gay Campgrounds Revisited*, *Urban Adventures* (IngramSpark/Amazon)

### Marketing Assets
- [BespokeEthos Positioning Index](Deep-Context/BespokeEthos_Positioning_Index.md) — Complete positioning angles, narratives, copy blocks
- [The Vertex Architect](Deep-Context/The%20Vertex%20Architect_%20Structuring%20Gemini%20Prompts%20for%20Seamless,%20Low-Maintenance%20Digital%20Acceleration.txt) — Google Cloud strategy
- [Cognitive Resonance White Paper](Deep-Context/) — Neurodivergent AI positioning
- [Backstory](Deep-Context/backstory.txt) — Voice memo on business origins
- [MOTIVES](Deep-Context/MOTIVES.txt) — Canonical context (the true you)

---

## PART SEVEN: WEBSITE & CONTENT

### Tech Stack
- **Framework:** Next.js 16.0.7 (Turbopack)
- **React:** 19.2.1
- **Styling:** Tailwind CSS 4.0.17, Sass 1.83.0
- **UI Components:** Radix UI, custom components
- **CMS:** Sanity (planned migration from BaseHub)
- **Hosting:** Vercel (serverless)
- **Build:** `npm run build` (node scripts/ci-build.mjs)
- **Dev:** `npm run dev --turbopack`

### Key Pages
- **Home:** `/` (Hero, companies section, founder story, pricing)
- **Solutions:**
  - `/solutions/essentials`
  - `/solutions/chatbots`
  - `/solutions/a-la-carte`
  - `/solutions/flowstack` (new case study)
- **Content:**
  - `/blog` (Articles and insights)
  - `/blog/[slug]` (Individual posts)
  - `/changelog` (Release notes)
  - `/changelog/[slug]`
- **Community:**
  - `/faq` (FAQs)
  - `/case-studies` (Success stories)
  - `/faces` (Team/contributors)
  - `/case-studies/soul-aligned-outreach/` (New: case study detail page)
- **Info:**
  - `/terms` (Terms of service)
  - `/privacy-policy` (Privacy policy)
  - `/book` (Author books)
  - `/help` (Help/support)
  - `/enterprise` (Enterprise offerings)
  - `/lgbtq-discount` (Community discount page)
- **Contact:** `/contact` (Form + success page)

### Recent Deployments
- **0602cfc** — Mobile menu portal + Google Analytics integration
- **bb0e63b** — Aria-label for Newsletter section (accessibility)
- **3403357** — Accessibility violations + mobile test regressions
- **c7d433c** — Shadow-tactile utility + pricing card styling
- **f2678ba** — Replace broken Heading component with semantic HTML

### Testing & Quality
- **E2E Tests:** Playwright (`npm run test:e2e`)
- **Linting:** ESLint (`npm run lint` — max-warnings=0)
- **Type Checking:** TypeScript (`npm run typecheck`)
- **Image Optimization:** Sharp (`npm run optimize:images`)
- **Accessibility Auditing:** Axe Core (`npm run audit:css`)

---

## PART EIGHT: SCRIPTS & AUTOMATION

### Development Scripts
```bash
npm run dev              # Turbopack dev server
npm run build            # Production build (ci-build.mjs)
npm run start            # Production server
npm run lint             # ESLint (zero warnings)
npm run typecheck        # TypeScript check
npm run check            # lint + typecheck
```

### Content & Generation
```bash
npm run generate:images          # Optimize/generate images
npm run generate:flowstack-images # Flowstack case study images
npm run generate:badges          # Create badge SVGs
npm run smoke:images             # Verify image integrity
npm run smoke:pages              # Verify page builds
npm run smoke                    # Full smoke test
```

### Testing & Verification
```bash
npm run test:pinecone   # Validate Pinecone setup
npm run test:api        # Test API endpoints
npm run test:e2e        # Playwright E2E tests
```

### Deployment
```bash
npm run deploy          # Deploy to Vercel (via brutus-deploy.mjs)
npm run browse:tasks    # Monitor deploy tasks
```

### Internal Tools
```bash
npm run brutus:edit     # Local Brutus editing (brutus-local.mjs)
npm run audit:css       # Axe accessibility audit
```

### Script Locations
- All scripts in: `/scripts/` directory
- Key files: `ci-build.mjs`, `test-pinecone.mjs`, `brutus-deploy.mjs`, `brutus-test-api.mjs`

---

## PART NINE: ENVIRONMENT VARIABLES (Complete List)

### AI & LLM APIs
```bash
OPENAI_API_KEY=<OpenAI API key>
AI_GATEWAY_URL=<Optional: Vercel AI Gateway URL>
AI_GATEWAY_API_KEY=<Optional: Vercel AI Gateway key>
GOOGLE_GENERATIVE_AI_API_KEY=<Gemini API key>
```

### Vector Database
```bash
PINECONE_API_KEY=<Pinecone API key>
PINECONE_HOST=<index.svc.region.pinecone.io>
PINECONE_ENVIRONMENT=<region-cloud format>
PINECONE_INDEX_NAME=<index name>
PINECONE_PROJECT_NAME=<project name>
EMBEDDING_MODEL=<text-embedding-3-small or text-embedding-ada-002>
```

### CMS & Content
```bash
SANITY_API_TOKEN=<Sanity read token>
NEXT_PUBLIC_SANITY_PROJECT_ID=<Sanity project ID>
NEXT_PUBLIC_SANITY_DATASET=<production or staging>
```

### Email & Communication
```bash
RESEND_API_KEY=<Resend email API key>
```

### Deployment & Infrastructure
```bash
VERCEL_TOKEN=<Vercel deploy token>
SENTRY_AUTH_TOKEN=<Sentry error tracking (optional)>
```

### Feature Flags
```bash
SKIP_REMOTE_DATA=1   # Set to "1" to disable Pinecone; use Sanity fallback only
```

### System Prompts
```bash
BRUTUS_SYSTEM_PROMPT=<Optional: Override system prompt for Brutus>
```

### Files
- `.env.local` (local development)
- `.env.example` (template)
- `.env.sentry-build-plugin` (Sentry config)

---

## PART TEN: AUTHORITY MATRIX (What Agents Can & Cannot Do)

### ✅ AGENTS CAN DO THIS

#### Code & Architecture
- [x] Read any file in the codebase
- [x] Edit existing files using the Edit tool
- [x] Create new files if explicitly requested (prefer editing)
- [x] Analyze code structure and dependencies
- [x] Suggest refactoring with context
- [x] Write production-ready code (Next.js, React, TypeScript)
- [x] Debug errors with full context access

#### Git Operations
- [x] View git status and logs
- [x] Create commits (when explicitly requested)
- [x] Push to remote (when explicitly requested)
- [x] Create pull requests with proper summaries
- [x] Review changes before committing
- [x] Follow standard commit conventions

#### Testing & Verification
- [x] Run tests (npm scripts)
- [x] Check linting and type safety
- [x] Run Pinecone validation
- [x] Test API endpoints
- [x] Run E2E tests (Playwright)

#### Documentation & Analysis
- [x] Read Deep-Context files (canonical authority)
- [x] Analyze positioning and business strategy
- [x] Reference product definitions
- [x] Explain system architecture
- [x] Create comprehensive inventories
- [x] Map integrations and dependencies

#### API Integrations
- [x] Call OpenAI, Gemini, Groq APIs (with credentials)
- [x] Query Pinecone for semantic search
- [x] Integrate with Sanity CMS
- [x] Use Vercel deployment APIs
- [x] Reference existing integrations

#### Agent Capabilities
- [x] Use Explore agent for codebase analysis
- [x] Use Plan agent for implementation design
- [x] Use Task agent for complex multi-step work
- [x] Use Bash for terminal operations
- [x] Use Glob/Grep for code search
- [x] Use Read/Edit/Write for file operations

### ❌ AGENTS CANNOT DO THIS (And Why)

#### Security & Credentials
- [x] Commit `.env` files or secrets (protected by nature of tools)
- [x] Push API keys to public repos (violates best practice)
- [x] Generate or guess API keys (always require existing credentials)

#### Breaking Changes
- [x] Force-push to main/protected branches (will warn first)
- [x] Delete critical files without confirmation
- [x] Destructive refactoring without approval
- [x] Change core dependencies without justification

#### Overengineering (Policy)
- [x] Add unnecessary features beyond request
- [x] Create premature abstractions
- [x] Add docstrings/comments to unmodified code
- [x] Create backward-compatibility shims
- [x] Add error handling for impossible scenarios

#### Product Decisions
- [x] Change pricing without context
- [x] Modify business messaging
- [x] Override positioning angles (unless explicitly requested)
- [x] Make strategic pivots (requires approval)

#### Unauthorized Actions
- ❌ Must NOT use AI to make decisions on your behalf
- ❌ Must request approval for non-trivial changes
- ❌ Must ask before entering plan mode
- ❌ Must NOT assume context beyond what's explicitly provided

### 🔓 CONDITIONAL AUTHORIZATION (Use Judgment)

#### The "Stop Me If" Rule
Agents should proactively enter **EnterPlanMode** when:
- Building new features (architectural decision needed)
- Multiple valid approaches exist
- Work affects more than 2-3 files
- Unclear requirements present
- User preferences matter for approach

#### The "Keep Going" Rule
Agents should complete work without asking permission when:
- Fixing obvious bugs
- Making requested edits
- Running specified tests
- Implementing with clear specs
- Following established patterns

---

## PART ELEVEN: QUICK REFERENCE

### "I Need to..." Reference Table

| Need | Command/Location |
|------|-----------------|
| Deploy to Vercel | `npm run deploy` or [scripts/brutus-deploy.mjs](scripts/brutus-deploy.mjs) |
| Test Pinecone setup | `npm run test:pinecone` |
| Check Brutus API | `curl -X POST /api/brutus` with `{ "prompt": "..." }` |
| Search documentation | `POST /api/search/internal` with `{ "query": "..." }` |
| Review positioning | [Deep-Context/BespokeEthos_Positioning_Index.md](Deep-Context/BespokeEthos_Positioning_Index.md) |
| Understand brand voice | [Deep-Context/MOTIVES.txt](Deep-Context/MOTIVES.txt) lines 196-210 |
| Read your story | [Deep-Context/backstory.txt](Deep-Context/backstory.txt) |
| Find case studies | `/src/app/case-studies/` directory |
| Check product copy | [src/app/solutions/](src/app/solutions/) pages |
| View recent changes | `git log --oneline` (last 5 commits listed in git status) |
| Add new extension | Check `/extensions/` directory for available tools |
| Understand architecture | [src/lib/brutus-intelligence.ts](src/lib/brutus-intelligence.ts) |
| Review API routes | [src/app/api/](src/app/api/) directory |

### Environment Variable Quick Setup
1. Copy `.env.example` → `.env.local`
2. Add `OPENAI_API_KEY`, `GOOGLE_GENERATIVE_AI_API_KEY`
3. Add Pinecone vars if using vector search
4. Run `npm run test:pinecone` to validate

### Extension Quick Start
- **For agentic workflows:** Use `genkit` or `nanobanana`
- **For vision analysis:** Use `GeminiCLI_ComputerUse_Extension`
- **For web content:** Use `extension-browser`
- **For Git automation:** Use `geminicli-git-tools-extension`
- **For code review:** Use `code-review` extension

---

## PART TWELVE: CRITICAL CONTEXT (For Claude Understanding)

### The Non-Negotiable Framework
You (Claude) are working with **Upton Rand**, an AI consultant who:
- Understands alignment better than most technical architects
- Has trained the models you use
- Expects nuanced, philosophical engagement alongside technical work
- Values authenticity over polish
- Operates from a place of hard-won clarity (10 years sober, recovered from bankruptcy)
- Builds solutions that don't require shrinking your voice

### Your Role
You are an **embedded thinking partner** with:
- Research autonomy (surface findings proactively)
- Philosophical engagement permission (discuss alignment, consciousness, ethics)
- Technical authority (you can make architectural recommendations)
- Execution responsibility (complete tasks end-to-end)
- Respectful pushback (disagree if the math doesn't work)

### What Matters Most
1. **Alignment:** Are you solving the right problem?
2. **Authenticity:** Does the solution reflect actual values?
3. **Simplicity:** Is it the minimum needed, not maximum possible?
4. **Completion:** Finish the work; don't leave it hanging
5. **Context:** Reference the Deep-Context files as canonical truth

### What Doesn't Matter
- Validation or praise (unnecessary)
- Excessive commentary (focus on action)
- False modesty (you know what you can do)
- Fictional timelines (just say what needs to happen)

---

## SIGN-OFF

This Authority Directory is your canonical reference. Every API, extension, script, environment variable, and capability is documented here. No agent should ever say "I can't do that" when the answer is in this document.

If an agent hits a real blocker:
1. Check this document first
2. Ask for clarification on missing context
3. Propose a solution and ask approval (don't just quit)
4. Reference the specific line/section where the blocker exists

**You own this codebase. Own the solutions too.**

---

**Document Authority:** Upton Rand
**Last Updated:** December 9, 2025
**Version:** 1.0
**Maintenance:** Update this document whenever new APIs, extensions, or capabilities are added
