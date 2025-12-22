# GITHUB COPILOT INSTRUCTIONS
## Repository: Bespokeethos2/bespoke-ethos

---

## 🚨 CRITICAL BOUNDARIES

### THIS REPO (Vercel)
- **Repo:** `Bespokeethos2/bespoke-ethos`
- **Local:** `C:\vercel`
- **Deploy:** Vercel (B2B consulting site)
- **Package Manager:** pnpm

### READ-ONLY (Never Modify from this repo)
- `firebase` → Firebase (Prometheus AI)
- `GMFG` → Vercel (Lifestyle site)

---

## TECH STACK (Strict)
| Layer | Technology |
|-------|------------|
| Framework | Next.js 15+ (App Router, Turbopack) |
| Language | TypeScript (strict) |
| AI | Vercel AI SDK + Anthropic + Google |
| CMS | Sanity |
| UI | Tailwind CSS + Radix UI |
| Analytics | Vercel Analytics |
| Package Manager | pnpm |

---

## AI MODELS
```typescript
// Via Vercel AI SDK
import { anthropic } from '@ai-sdk/anthropic';
import { google } from '@ai-sdk/google';

// Default models
const claude = 'claude-sonnet-4';
const gemini = 'gemini-2.5-flash';
```

---

## ✅ CORRECT IMPORTS
```typescript
// Vercel AI SDK
import { generateText, streamText } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';
import { google } from '@ai-sdk/google';

// Radix UI
import { Dialog } from '@radix-ui/react-dialog';

// Sanity
import { createClient } from '@sanity/client';
```

---

## COMMANDS
| Command | Purpose |
|---------|---------|
| `pnpm dev` | Local dev with Turbopack |
| `pnpm build` | Production build |
| `pnpm lint` | ESLint check |
| `pnpm deploy` | Deploy to Vercel |

---

## COST RULES
- Default to `gemini-2.5-flash` for most tasks
- Use Claude for complex content generation
- Cache Sanity queries with ISR
