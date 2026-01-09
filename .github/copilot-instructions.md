# GITHUB COPILOT INSTRUCTIONS
## Repository: Bespokeethos2/bespoke-ethos

---

## 🚨 CRITICAL BOUNDARIES

### THIS REPO (Vercel)
- **Repo:** `Bespokeethos2/bespoke-ethos`
- **Local:** `C:\Vercel`
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
| UI | Tailwind CSS + Radix UI |
| Analytics | Vercel Analytics + GA4 |
| Package Manager | pnpm |

---

## ✅ CORRECT IMPORTS
```typescript
// Next.js
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Radix UI
import { Dialog } from '@radix-ui/react-dialog';
```

---

## ❌ DO NOT USE
```typescript
// REMOVED - Do not add back
import { anthropic } from '@ai-sdk/anthropic';
import { createClient } from '@sanity/client';
```

---

## COMMANDS
| Command | Purpose |
|---------|---------|
| `pnpm dev` | Local dev with Turbopack |
| `pnpm build` | Production build |
| `pnpm lint` | ESLint check |

---

## COST RULES
- Use ISR/static generation where possible
- Optimize images with next/image
- Dynamic imports for below-fold components

---

## FILES TO DELETE
// Delete these files if they exist:
C:\Vercel\src\lib\sanity\client.ts
C:\Vercel\src\app\api\claude\batch\route.ts

---

# PLAYWRIGHT TEST
import { test, expect } from '@playwright/test';

test('homepage loads and shows Bespoke Ethos', async ({ page }) => {
  await page.goto('http://localhost:3000');
  // Adjust selector/text as needed for your homepage
  await expect(page).toHaveTitle(/Bespoke Ethos/i);
  await expect(page.locator('body')).toContainText(/Bespoke Ethos|AI|automation/i);
});
