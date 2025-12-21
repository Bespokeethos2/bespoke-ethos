Based on the analysis and sprint plans provided in the `Cadence Chatbot Fix - Presentation Outline.md` and `Sprints.md`, here is a strict, guardrailed instruction file for your agents.

You should save this content as **``** in the root of your repository and force the agent to read this file before doing anything else.

---

# AGENT EXECUTION PROTOCOL: Cadence Chatbot Migration

**STATUS:** CRITICAL / STRICT ENFORCEMENT
**TARGET:** Complete Migration from "Brutus" (OpenAI) to "Cadence" (Google Vertex AI)
**MODE:** EXECUTION ONLY. DO NOT DEVIATE.

## I. PRIME DIRECTIVES (READ FIRST)

1. **THE OBJECTIVE:** You are fixing the homepage chatbot. It is currently hardcoded to a deprecated system named "Brutus" (OpenAI). You must migrate it to the existing, functional system named "Cadence" (Google Vertex AI).
2. **THE "DOCUMENTATION TRAP" (WARNING):**
* **IGNORE** any instructions in `MASTER_AUTHORITY_DIRECTORY.md` that refer to "Brutus" as the canonical system. That file is outdated and is the root cause of previous failures.
* **IGNORE** any documentation stating `GOOGLE_GENERATIVE_AI_API_KEY` is for "vision only." It is the primary key for the Chatbot.


3. **NO CREATIVITY:** Do not "propose" solutions. Do not create new endpoints. Do not add new libraries. Follow the Sprints below exactly as written.

4. Upon Completion of Each Sprint Pause and Report in and await further instructions. 
---

## II. NON-NEGOTIABLE GUARDRAILS

* **❌ FORBIDDEN:** Do NOT use `OPENAI_API_KEY`, `gpt-4.1`, or `openai` libraries.
* **❌ FORBIDDEN:** Do NOT create a new API route. You MUST use the existing `/api/chat/google`.
* **❌ FORBIDDEN:** Do NOT modify `MASTER_AUTHORITY_DIRECTORY.md` during this session (that is a separate administrative task). Focus only on the code fix.
* **✅ REQUIRED:** The bot name is **"Cadence"**. The provider is **Google Vertex AI**.

---

## III. EXECUTION SPRINTS (PERFORM SEQUENTIALLY)

### SPRINT 1: The Critical Path (Wiring)

*Focus: `src/components/VoiceChatbot.tsx*`

1. **CHANGE Endpoint:** Locate the `apiEndpoint` prop. Change default from `/api/brutus` to `'/api/chat/google'`.
2. **CHANGE Identity:** Locate the `botName` prop. Change default from `'Brutus'` to `'Cadence'`.
3. **UPDATE Welcome Message:** Ensure the welcome message identifies the bot as "Cadence".
4. **REMOVE Legacy Payload:** In the `fetch` call (approx line 228), **REMOVE** the `model: 'gpt-4.1'` and `context` properties from the body. The Google endpoint does not accept these.
5. **FIX Response Handling:** The Google endpoint streams responses. You must update the response parsing logic to use `response.body.getReader()` and `TextDecoder` instead of simple JSON parsing.

### SPRINT 2: Destruction

*Focus: API Cleanup*

1. **DELETE:** Execute `rm -rf src/app/api/brutus/`. This must remove `route.ts`, `openai/route.ts`, `vision/route.ts`, and `fs/route.ts`.
2. **VERIFY:** Ensure `/api/brutus` returns a 404.

### SPRINT 3: SEO & Routing Cleanup

*Focus: Routing Files*

1. **DELETE:** Execute `rm src/app/brutus/page.tsx`.
2. **UPDATE:** Open `src/lib/seo/routes.ts` and remove any route definitions containing "brutus".
3. **UPDATE:** Open `src/app/robots.ts` and remove Brutus references.

### SPRINT 4: Library Migration

*Focus: `src/lib/*`

1. **RENAME:** `src/lib/brutus-intelligence.ts` → `src/lib/cadence-intelligence.ts`.
2. **RENAME:** `src/lib/brutus-usage.ts` → `src/lib/cadence-usage.ts`.
3. **REFACTOR:** Inside these files:
* Find/Replace "Brutus" → "Cadence" (Case sensitive).
* Find/Replace "brutus" → "cadence" (Case sensitive).
* Replace any OpenAI imports with Google Vertex AI equivalents using `GOOGLE_GENERATIVE_AI_API_KEY`.


4. **FIX IMPORTS:** Grep the codebase for imports referencing the old filenames and update them to the new filenames.

### SPRINT 5: Script Migration

*Focus: `scripts/*`

1. **RENAME:**
* `scripts/brutus-axe-enforcer.ts` → `scripts/cadence-axe-enforcer.ts`
* `scripts/brutus-google-cloud-setup.ts` → `scripts/cadence-google-cloud-setup.ts`
* `scripts/brutus-verify-identity.ts` → `scripts/cadence-verify-identity.ts`.


2. **UPDATE:** Inside `package.json`, update any scripts that referenced the old filenames.
3. **RUN:** Execute `scripts/cadence-google-cloud-setup.ts` to ensure Google credentials are valid.

### SPRINT 6: UI Cleanup

*Focus: Components*

1. **SEARCH:** Scan `src/components/ConsensusEngineCard.tsx` and `src/components/consensus-researchers.tsx`.
2. **REPLACE:** Change any user-facing text from "Brutus" to "Cadence".

### SPRINT 7: Environment Sanitization

*Focus: `.env.local*`

1. **REMOVE:** `OPENAI_API_KEY`, `AI_GATEWAY_URL`, `AI_GATEWAY_API_KEY`, `BRUTUS_SYSTEM_PROMPT`.
2. **CONFIRM:** Ensure `GOOGLE_GENERATIVE_AI_API_KEY`, `GOOGLE_CLOUD_PROJECT`, and `GOOGLE_APPLICATION_CREDENTIALS` are present.

### SPRINT 8: Final Verification

*Focus: Testing*

1. **CODE SEARCH:** Run `grep -r -i "brutus" src/ scripts/`. The result MUST be 0 (zero) results.
2. **FUNCTIONAL TEST:**
* Load Homepage.
* Chatbot says "I'm Cadence".
* Network tab shows request to `/api/chat/google`.
* Response is received from Gemini.
* Zero console errors.



---

**END OF PROTOCOL**
*Proceed to Sprint 1 immediately.*