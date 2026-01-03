# Cadence Chatbot Fix - Presentation Outline

## Slide 1: Title

**Cadence Chatbot Crisis Analysis**  
*Brutus Artifact Removal & Google Migration Plan*

BespokeEthos Technical Audit  
December 20, 2025

---

## Slide 2: Executive Summary

### The Problem in One Sentence

The production chatbot is hardcoded to call a deprecated OpenAI system named "Brutus" instead of the intended Google Vertex AI system named "Cadence."

**Impact:**

- Chatbot non-functional on homepage
- Wrong AI provider (OpenAI vs. Google)
- Wrong branding (Brutus vs. Cadence)
- 15 files contaminated with legacy code

---

## Slide 3: What Was Intended vs. What Was Built

| Component | Intended (Cadence) | Actual (Brutus) |
| --------- | ----------------- | --------------- |
| **Name** | Cadence | Brutus |
| **AI Provider** | Google Vertex AI | OpenAI |
| **Model** | Gemini 2.0 Flash | GPT-4.1 |
| **Endpoint** | `/api/chat/google` | `/api/brutus` |
| **Env Variable** | `GOOGLE_GENERATIVE_AI_API_KEY` | `OPENAI_API_KEY` |

---

## Slide 4: Root Cause Analysis

**Why This Happened:**

1. **Brutus was an early prototype** - Built with OpenAI, later scrapped
2. **Incomplete removal** - Code deleted but artifacts remained
3. **Documentation contradiction** - MASTER_AUTHORITY_DIRECTORY.md still described Brutus as canonical system
4. **Agent confusion** - Subsequent agents read outdated docs and rebuilt Brutus infrastructure
5. **Naming collision** - Google key existed but was documented as "vision only"

**The agents weren't wrong—they were following wrong documentation.**

---

## Slide 5: The 15 Contaminated Files

**Critical (Must Fix Immediately):**

1. `src/components/VoiceChatbot.tsx` - Main chatbot component
2. `src/app/api/brutus/route.ts` - OpenAI endpoint
3. `src/lib/brutus-intelligence.ts` - Core AI logic
4. `src/lib/brutus-usage.ts` - Usage tracking

**High Priority:**
5. `src/app/api/brutus/openai/route.ts`
6. `src/app/brutus/page.tsx`
7. `scripts/brutus-google-cloud-setup.ts`

**Medium Priority:**
8. `src/app/api/brutus/vision/route.ts`
9. `src/app/api/brutus/fs/route.ts`
10. `src/components/ConsensusEngineCard.tsx`
11. `src/components/consensus-researchers.tsx`

**Low Priority (Cleanup):**
12. `scripts/brutus-axe-enforcer.ts`
13. `scripts/brutus-verify-identity.ts`
14. `src/app/robots.ts`
15. `src/lib/seo/routes.ts`

---

## Slide 6: The Good News

**A working Google endpoint already exists!**

- **File:** `src/app/api/chat/google/route.ts`
- **Status:** Fully implemented and functional
- **Uses:** `@ai-sdk/google` with Gemini 2.0 Flash
- **System Prompt:** Already includes BespokeEthos context
- **Problem:** Not connected to the VoiceChatbot component

**We don't need to build anything new—just reconnect the wiring.**

---

## Slide 7: Sprint-Based Fix Plan Overview

### 8 Sprints, 4-5 Hours Total

| Sprint | Focus | Effort |
| ------ | ----- | ------ |
| **1** | Connect Google endpoint | 30 min |
| **2** | Delete Brutus API routes | 15 min |
| **3** | Remove Brutus page & SEO | 20 min |
| **4** | Rename libraries | 45 min |
| **5** | Rename scripts | 30 min |
| **6** | Update UI components | 30 min |
| **7** | Environment cleanup | 45 min |
| **8** | Final verification | 60 min |

**Sprint 1 is the critical path—fixes the immediate issue.**

---

## Slide 8: Sprint 1 - Connect Google Endpoint (CRITICAL)

**File:** `src/components/VoiceChatbot.tsx`

**Changes:**

1. Line 47: `apiEndpoint = '/api/chat/google'` (was `/api/brutus`)
2. Line 49: `botName = 'Cadence'` (was `'Brutus'`)
3. Line 48: Update welcome message to say "I'm Cadence"
4. Line 237: Remove hardcoded `model: 'gpt-4.1'`
5. Lines 252-253: Update response parsing for streaming

**Result:** Chatbot immediately starts working with Google AI

---

## Slide 9: Sprint 2 - Delete Brutus API

**Action:** Remove entire directory

```bash
rm -rf src/app/api/brutus/
```

**Files Deleted:**

- `route.ts` (main OpenAI endpoint)
- `openai/route.ts` (redundant)
- `vision/route.ts` (deprecated)
- `fs/route.ts` (deprecated)

**Verification:** `/api/brutus` returns 404

---

## Slide 10: Sprint 3 - Remove Brutus Page & SEO

**Actions:**

1. Delete `src/app/brutus/page.tsx`
2. Update `src/lib/seo/routes.ts` - remove Brutus routes
3. Update `src/app/robots.ts` - remove Brutus references

**Result:** No user-facing Brutus pages, clean sitemap

---

## Slide 11: Sprint 4 - Rename Core Libraries

**File Renames:**

- `brutus-intelligence.ts` → `cadence-intelligence.ts`
- `brutus-usage.ts` → `cadence-usage.ts`

**Content Updates:**

- Find/replace "brutus" → "cadence" (case-insensitive)
- Replace OpenAI imports with Google Vertex AI
- Update all downstream imports

**Result:** Core AI logic uses correct naming and provider

---

## Slide 12: Sprint 5 - Rename Scripts

**File Renames:**

- `brutus-axe-enforcer.ts` → `cadence-axe-enforcer.ts`
- `brutus-google-cloud-setup.ts` → `cadence-google-cloud-setup.ts`
- `brutus-verify-identity.ts` → `cadence-verify-identity.ts`

**Update `package.json`:**

- Fix npm script references to renamed files

**Special Note:** `cadence-google-cloud-setup.ts` likely contains correct Google setup logic—run it after rename

---

## Slide 13: Sprint 6 - Update UI Components

**Files:**

- `src/components/ConsensusEngineCard.tsx`
- `src/components/consensus-researchers.tsx`

**Action:** Search and replace "Brutus" → "Cadence"

**Result:** No "Brutus" text visible in UI

---

## Slide 14: Sprint 7 - Environment Variable Cleanup

**Remove from `.env.local`:**

- ❌ `OPENAI_API_KEY`
- ❌ `AI_GATEWAY_URL`
- ❌ `AI_GATEWAY_API_KEY`
- ❌ `BRUTUS_SYSTEM_PROMPT`

**Ensure Present:**

- ✅ `GOOGLE_GENERATIVE_AI_API_KEY`
- ✅ `GOOGLE_CLOUD_PROJECT`
- ✅ `GOOGLE_APPLICATION_CREDENTIALS`

**Create `.env.example`** with correct Google variables

**Update Vercel dashboard** with production environment variables

---

## Slide 15: Sprint 8 - Final Verification

**Code Search:**

```bash
grep -r -i "brutus" src/ scripts/
# Should return 0 results
```

**Functional Testing:**

- ✅ Homepage loads without errors
- ✅ Chatbot widget appears
- ✅ Displays "Cadence" as bot name
- ✅ Text messages receive Google Gemini responses
- ✅ Voice input works
- ✅ Voice output works (Google TTS)
- ✅ Network tab shows `/api/chat/google` calls only
- ✅ No console errors

---

## Slide 16: Why Agents Kept Failing

**The Documentation Trap:**

Agents were reading `MASTER_AUTHORITY_DIRECTORY.md` which contained:

- "Brutus is the internal server-side AI orchestrator"
- "Endpoint: `/api/brutus`"
- "Model: `gpt-4.1` (default for Brutus intelligence layer)"
- "System prompt: You are Brutus, a senior automation engineer"

**They documented:**
> "GOOGLE_GENERATIVE_AI_API_KEY is used for the 'Eyes' of the Brutus intelligence layer, allowing the system to perform image analysis"

**Translation:** Agents thought Google was only for vision, not the main chatbot.

---

## Slide 17: Critical Action Beyond Code

**MASTER_AUTHORITY_DIRECTORY.md must be updated or deleted.**

As long as this file describes Brutus as the canonical system, any agent reading it will continue building OpenAI-based solutions.

**Required Updates:**

1. Replace all "Brutus" references with "Cadence"
2. Update API endpoint documentation to `/api/chat/google`
3. Change model from `gpt-4.1` to `gemini-2.0-flash`
4. Update environment variable documentation
5. Remove OpenAI prompt ID references

---

## Slide 18: Success Criteria

**The chatbot is fixed when:**

1. User visits homepage
2. Clicks chatbot widget
3. Types or speaks a message
4. Receives response from Google Gemini
5. Bot identifies as "Cadence"
6. Voice output works via Google TTS
7. Network tab shows `/api/chat/google` calls
8. Zero console errors
9. Code search for "brutus" returns 0 results
10. Documentation reflects Cadence architecture

---

## Slide 19: Post-Fix Enhancements

**Once Cadence is working, consider:**

1. **Pinecone Integration** - Connect provisioned vector DB for conversation memory
2. **Advanced Speech Recognition** - Migrate from Web Speech API to Google Cloud Speech-to-Text
3. **Custom Voice Training** - Fine-tune Google TTS for brand consistency
4. **Conversation Analytics** - Track common questions and satisfaction
5. **Multi-language Support** - Leverage Google Translate API
6. **Proactive Engagement** - Trigger chatbot based on user behavior

---

## Slide 20: Agent Handoff Instructions

**For the agent executing this fix:**

**START HERE:** Sprint 1 (30 minutes, fixes immediate issue)

**CONSTRAINTS:**

- ❌ DO NOT use OpenAI APIs
- ❌ DO NOT create new endpoints
- ❌ DO NOT add new dependencies
- ✅ USE existing `/api/chat/google` route
- ✅ USE `GOOGLE_GENERATIVE_AI_API_KEY`
- ✅ NAME chatbot "Cadence"

**REFERENCE:** CADENCE_CHATBOT_FIX_REPORT.md for detailed step-by-step instructions

**VERIFY:** After each sprint, run tests before proceeding

---

## Slide 21: Summary

**Problem:** 15 files contaminated with deprecated "Brutus" OpenAI code

**Root Cause:** Incomplete prototype removal + contradictory documentation

**Solution:** 8 sprints to reconnect Google endpoint and purge legacy code

**Timeline:** 4-5 hours

**Outcome:** Functional Cadence chatbot powered by Google Vertex AI

**Critical Success Factor:** Update MASTER_AUTHORITY_DIRECTORY.md to prevent recurrence

---

## Slide 22: Questions?

**Key Contacts:**

- Technical Lead: [Name]
- Project Manager: [Name]
- Documentation Owner: [Name]

**Resources:**

- Full Report: `CADENCE_CHATBOT_FIX_REPORT.md`
- Repository: `github.com/Bespokeethos2/bespoke-ethos`
- Codebase: `/home/ubuntu/bespoke-ethos`

**Next Steps:**

1. Assign agent to execute Sprint 1
2. Monitor progress through Sprint 8
3. Update MASTER_AUTHORITY_DIRECTORY.md
4. Deploy to production
5. Verify on live site

---

## End of Presentation
