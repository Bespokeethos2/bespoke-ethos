# 🔧 COMPREHENSIVE FIX PLAN FOR HAIKU
**Project:** Bespoke Ethos Website
**Date:** 2025-12-07
**Target:** Fix all outstanding issues systematically

---

## 📋 TABLE OF CONTENTS
1. [Overview & Context](#overview--context)
2. [Critical Issues Summary](#critical-issues-summary)
3. [Fix Plan - Priority Order](#fix-plan---priority-order)
4. [Detailed Fix Instructions](#detailed-fix-instructions)
5. [Verification Steps](#verification-steps)
6. [Deployment Protocol](#deployment-protocol)

---

## 🎯 OVERVIEW & CONTEXT

### Current State
- **Build Status:** ✅ Passing (typecheck + lint clean)
- **Problems Panel:** 23 warnings (mostly ARIA + Tailwind canonicalization)
- **Sprint 1 Status:** Blockers remaining per `docs/sprint1-verification.md`

### What Needs Fixing
1. **VS Code Module Resolution Errors** (false positives - components exist)
2. **ARIA Attribute Validation Warnings** (Edge DevTools - accessibility)
3. **Tailwind CSS Canonicalization Warnings** (non-canonical class names)
4. **Missing Component Imports** (path resolution issues)
5. **Metadata "Acme Site" References** (verify complete removal)
6. **Environment Variable Sync** (Vercel dashboard)

### Success Criteria
- [ ] All ARIA attributes conform to valid values
- [ ] All Tailwind classes use canonical names
- [ ] No module resolution errors
- [ ] Metadata 100% Bespoke Ethos branded
- [ ] Build passes with 0 warnings
- [ ] Lighthouse score 88+ on all pages

---

## 🚨 CRITICAL ISSUES SUMMARY

### Issue 1: ARIA Attribute Validation (3 occurrences)
**File:** `src/app/_components/header/navigation-menu.tsx`
**Lines:** 256, 256, 421
**Problem:** Invalid ARIA attribute values
```
aria-expanded="true" vs aria-expanded={true}
aria-hidden="false" vs aria-hidden={false}
```

### Issue 2: Tailwind Class Canonicalization (Multiple files)
**Files:**
- `src/components/conversion-optimized-hero.tsx`
- `src/app/page.tsx`
- Various other component files

**Examples:**
```
❌ flex-shrink-0 → ✅ shrink-0
❌ aspect-5/2 → ✅ aspect-[5/2]
❌ bg-gradient-to-br → ✅ bg-linear-to-br
❌ translate-x-[-100%] → ✅ -translate-x-full
❌ bottom-[-20px] → ✅ -bottom-5
```

### Issue 3: Module Resolution (False Positives)
**Files:** Multiple
**Error:** Cannot find module '@/components/vogue-card'
**Reality:** Components exist at:
- `c:\Vercel\src\common\button.tsx` ✅
- `c:\Vercel\src\common\layout.tsx` ✅

**Action:** Verify tsconfig paths, restart TS server

### Issue 4: Missing Visual Assets
**Problem:** Some trust badge images referenced but need verification
**Files to check:**
- `/assets/generated/trust/*.webp` files

---

## 🔥 FIX PLAN - PRIORITY ORDER

### Phase 1: ARIA Fixes (HIGHEST PRIORITY - Accessibility)
⏱️ **Time:** 15 minutes
🎯 **Impact:** Critical for WCAG compliance

### Phase 2: Tailwind Canonicalization
⏱️ **Time:** 30-45 minutes
🎯 **Impact:** High (cleaner code, better Tailwind IntelliSense)

### Phase 3: Module Resolution
⏱️ **Time:** 10 minutes
🎯 **Impact:** Low (VS Code cosmetic, build works)

### Phase 4: Metadata Audit
⏱️ **Time:** 20 minutes
🎯 **Impact:** Critical for SEO

### Phase 5: Asset Verification
⏱️ **Time:** 15 minutes
🎯 **Impact:** Medium (visual correctness)

### Phase 6: Final Testing
⏱️ **Time:** 30 minutes
🎯 **Impact:** Critical (deployment readiness)

---

## 📝 DETAILED FIX INSTRUCTIONS

---

### PHASE 1: ARIA ATTRIBUTE FIXES

#### Fix 1.1: Mobile Menu Button aria-expanded
**File:** `src/app/_components/header/navigation-menu.tsx`
**Line:** 256-259

**Current Code:**
```tsx
<button
  aria-label="Toggle menu"
  aria-expanded={isOn ? "true" : "false"}  // ❌ STRING
  aria-controls="mobile-navigation-panel"
```

**Fixed Code:**
```tsx
<button
  aria-label="Toggle menu"
  aria-expanded={isOn}  // ✅ BOOLEAN
  aria-controls="mobile-navigation-panel"
```

**Rationale:** ARIA boolean attributes should be actual booleans in React, not string literals.

---

#### Fix 1.2: Submenu aria-expanded
**File:** `src/app/_components/header/navigation-menu.tsx`
**Line:** 407-411

**Current Code:**
```tsx
<button
  className="flex items-center gap-2 px-3 py-2.5 text-base font-medium"
  onClick={handleToggle}
  aria-expanded={isOn ? "true" : "false"}  // ❌ STRING
  aria-controls={submenuId}
  aria-haspopup="true"
>
```

**Fixed Code:**
```tsx
<button
  className="flex items-center gap-2 px-3 py-2.5 text-base font-medium"
  onClick={handleToggle}
  aria-expanded={isOn}  // ✅ BOOLEAN
  aria-controls={submenuId}
  aria-haspopup={true}  // ✅ BOOLEAN (was string)
>
```

---

#### Fix 1.3: Submenu aria-hidden
**File:** `src/app/_components/header/navigation-menu.tsx`
**Line:** 421-428

**Current Code:**
```tsx
<ul
  id={submenuId}
  ref={listRef}
  className={clsx(
    "flex origin-top transform-gpu flex-col gap-2 pl-4 transition-all duration-300 ease-in-out",
    isOn ? "max-h-[500px] opacity-100 overflow-y-auto" : "max-h-0 opacity-0 overflow-hidden",
  )}
  aria-hidden={isOn ? "false" : "true"}  // ❌ STRING
>
```

**Fixed Code:**
```tsx
<ul
  id={submenuId}
  ref={listRef}
  className={clsx(
    "flex origin-top transform-gpu flex-col gap-2 pl-4 transition-all duration-300 ease-in-out",
    isOn ? "max-h-[500px] opacity-100 overflow-y-auto" : "max-h-0 opacity-0 overflow-hidden",
  )}
  aria-hidden={!isOn}  // ✅ BOOLEAN (inverse logic)
>
```

---

### PHASE 2: TAILWIND CANONICALIZATION FIXES

#### Fix 2.1: conversion-optimized-hero.tsx
**File:** `src/components/conversion-optimized-hero.tsx`

**Line 70: shrink-0**
```tsx
// Before
className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-md ring-1 ring-slate-200"

// After (no change needed - already correct)
```

**Line 58: translate-x-[-100%]**
```tsx
// Before (Line 58)
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1s_infinite] z-0" />

// After
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite] z-0" />
```

**Line 96: bottom-[-20px]**
```tsx
// Before (Line 96)
<div className="absolute inset-x-8 bottom-[-20px] h-[40px] bg-black/20 blur-[30px] rounded-[100%]" />

// After
<div className="absolute inset-x-8 -bottom-5 h-10 bg-black/20 blur-[30px] rounded-[50%]" />
```

**Line 98: rotate-y-[-5deg]**
```tsx
// Before (Line 98)
<div className="relative overflow-hidden rounded-[2rem] bg-white ring-1 ring-slate-900/5 shadow-2xl transform rotate-y-[-5deg] rotate-x-[2deg] hover:rotate-0 transition-transform duration-700 ease-out preserve-3d">

// After (Note: Tailwind doesn't have rotate-y/rotate-x by default, keep as arbitrary)
<div className="relative overflow-hidden rounded-[2rem] bg-white ring-1 ring-slate-900/5 shadow-2xl transform rotate-y-[-5deg] rotate-x-[2deg] hover:rotate-0 transition-transform duration-700 ease-out preserve-3d">
// ⚠️ KEEP AS-IS: 3D transforms are valid arbitrary values
```

---

#### Fix 2.2: page.tsx (Homepage)
**File:** `src/app/page.tsx`

**Line 111: bg-gradient-to-br**
```tsx
// Before (Line 111)
<section className="relative overflow-hidden bg-gradient-to-br from-[#fff7ec] via-white to-[#f5f3ff]" aria-hidden="true">

// After
<section className="relative overflow-hidden bg-linear-to-br from-[#fff7ec] via-white to-[#f5f3ff]" aria-hidden="true">
```

**Line 157: bg-linear-to-b**
```tsx
// Before (Line 157)
<section className="py-12 md:py-16 bg-linear-to-b from-white to-slate-50">

// ✅ ALREADY CORRECT - Tailwind 4 uses bg-linear-to-*
```

**Line 198: bg-linear-to-br**
```tsx
// Before (Line 198)
<div className="be-section-card space-y-5 p-8 border-2 border-orange-100 bg-linear-to-br from-white to-orange-50 shadow-xl rounded-2xl">

// ✅ ALREADY CORRECT
```

**Line 202: shrink-0**
```tsx
// Before (Line 202)
<span className="text-orange-500 font-bold text-lg mt-0.5 shrink-0">✓</span>

// ✅ ALREADY CORRECT
```

**Line 219: bg-linear-to-b**
```tsx
// Before (Line 219)
<section className="home-section home-section--white py-24 bg-linear-to-b from-slate-50 to-white" aria-labelledby="productized-heading">

// ✅ ALREADY CORRECT
```

**Line 246: bg-linear-to-b**
```tsx
// Before (Line 246)
<section className="py-24 bg-linear-to-b from-white via-slate-50 to-white" aria-labelledby="consensus-highlight-heading">

// ✅ ALREADY CORRECT
```

**Line 285: bg-linear-to-br**
```tsx
// Before (Line 285)
<section className="py-24 bg-linear-to-br from-slate-800 to-slate-900 text-white" aria-labelledby="lgbtq-banner-heading">

// ✅ ALREADY CORRECT
```

---

#### Fix 2.3: Find ALL Remaining Canonicalization Issues

**Action Required:**
1. Run this command to find ALL non-canonical Tailwind classes:
```bash
npx eslint . --ext .ts,.tsx --fix
```

2. Manually search for these patterns:
```bash
# Find flex-shrink-0
grep -r "flex-shrink-0" src/

# Find aspect-X/Y (non-arbitrary)
grep -r "aspect-[0-9]/[0-9]" src/

# Find bg-gradient-to-* (should be bg-linear-to-*)
grep -r "bg-gradient-to-" src/

# Find translate-x-[-
grep -r "translate-x-\[-" src/

# Find bottom-[-
grep -r "bottom-\[-" src/

# Find rounded-[100%] (should be rounded-full)
grep -r "rounded-\[100%\]" src/
```

3. Create a **replacement map:**

| ❌ Non-Canonical | ✅ Canonical |
|-----------------|-------------|
| `flex-shrink-0` | `shrink-0` |
| `aspect-5/2` | `aspect-[5/2]` (keep brackets) |
| `bg-gradient-to-br` | `bg-linear-to-br` |
| `translate-x-[-100%]` | `-translate-x-full` |
| `bottom-[-20px]` | `-bottom-5` |
| `rounded-[100%]` | `rounded-full` |
| `h-[40px]` | `h-10` (prefer Tailwind scale when close) |

---

### PHASE 3: MODULE RESOLUTION FIXES

#### Fix 3.1: Verify TypeScript Config
**File:** `tsconfig.json`

**Action:** Read the file and verify paths
```bash
cat tsconfig.json
```

**Expected paths:**
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/common/*": ["./src/common/*"]
    }
  }
}
```

#### Fix 3.2: Restart TypeScript Server
**VS Code Command Palette:**
1. Press `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (Mac)
2. Type: "TypeScript: Restart TS Server"
3. Press Enter

#### Fix 3.3: Verify Component Exports
**Files to check:**
- `src/common/button.tsx` - Verify exports `Button` and `ButtonLink`
- `src/common/layout.tsx` - Verify exports

**Command:**
```bash
grep -n "export" src/common/button.tsx
grep -n "export" src/common/layout.tsx
```

---

### PHASE 4: METADATA AUDIT

#### Fix 4.1: Search for "Acme" References
**Command:**
```bash
grep -r "Acme" src/ --exclude-dir=node_modules
```

**Expected Result:** ZERO matches

#### Fix 4.2: Verify Root Layout Metadata
**File:** `src/app/layout.tsx`
**Lines:** 36-50

**Verify:**
```tsx
const FALLBACK_METADATA = {
  sitename: "Bespoke Ethos",  // ✅ NOT "Acme"
  titleTemplate: "%s | Bespoke Ethos",  // ✅ NOT "Acme"
  defaultTitle: "BespokeEthos AI Consulting - Ship Working Code, Not Slide Decks | Fixed-Price Cleveland AI Automation",  // ✅ NOT "Acme"
```

#### Fix 4.3: Verify Homepage Metadata
**File:** `src/app/page.tsx`
**Lines:** 54-107

**Verify:**
```tsx
export const metadata: Metadata = {
  title: "AI Automation Consulting for Small Businesses in Cleveland | Bespoke Ethos",  // ✅ Bespoke Ethos
  description: "AI consulting and workflow automation for small businesses...",  // ✅ Bespoke Ethos
  openGraph: {
    title: "AI Automation Consulting for Small Businesses in Cleveland | Bespoke Ethos",  // ✅ Bespoke Ethos
    siteName: "Bespoke Ethos",  // ✅ Bespoke Ethos
  },
```

#### Fix 4.4: Check All Other Pages
**Command:**
```bash
find src/app -name "page.tsx" -o -name "layout.tsx" | xargs grep -l "metadata"
```

**For each file found, verify:**
- No "Acme" references
- Title includes "Bespoke Ethos"
- OpenGraph siteName is "Bespoke Ethos"

---

### PHASE 5: ASSET VERIFICATION

#### Fix 5.1: Trust Badge Images
**Expected files:**
```
/public/assets/generated/trust/nglcc-square-light.webp
/public/assets/generated/trust/catalant-square-light.webp
/public/assets/generated/trust/experience-5yrs-square-square-light.webp
```

**Verification Command:**
```bash
ls -lh public/assets/generated/trust/
```

**If Missing:**
1. Check if source images exist in `/public/assets/`
2. Run image generation script: `npm run generate:images`

#### Fix 5.2: Hero Image
**Expected file:**
```
/public/assets/we-heart-founders-mug.avif
```

**Verification:**
```bash
ls -lh public/assets/we-heart-founders-mug.avif
```

**Expected:** File exists, size > 20KB

#### Fix 5.3: Logo Assets
**Expected files:**
```
/public/assets/generated/logo-square-dark.png  (512x512, for OG)
/public/assets/favicon.png  (128x128)
/public/apple-touch-icon.png  (400x400)
```

**Verification:**
```bash
ls -lh public/assets/favicon.png
ls -lh public/apple-touch-icon.png
ls -lh public/assets/generated/logo-square-dark.png
```

---

### PHASE 6: FINAL TESTING

#### Test 6.1: Build Test
```bash
npm run build
```

**Expected:** ✅ Build succeeds, 0 errors, 0 warnings

#### Test 6.2: Type Check
```bash
npm run typecheck
```

**Expected:** ✅ No errors

#### Test 6.3: Lint Check
```bash
npm run lint
```

**Expected:** ✅ No errors, 0 warnings

#### Test 6.4: Dev Server Visual Check
```bash
npm run dev
```

**Manual checks:**
1. Navigate to http://localhost:3000
2. Verify hero section displays correctly
3. Verify trust badges display
4. Test mobile menu (hamburger)
5. Check navigation dropdowns
6. Verify all CTAs work

#### Test 6.5: Lighthouse Audit
**Command:**
```bash
npm run dev  # In one terminal
npx lighthouse http://localhost:3000 --view  # In another terminal
```

**Target Scores:**
- Performance: 88+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

---

## ✅ VERIFICATION CHECKLIST

### Pre-Deployment Checklist
- [ ] All ARIA attributes use boolean values (not strings)
- [ ] All Tailwind classes are canonical (no warnings)
- [ ] No "Acme" references anywhere
- [ ] All trust badge images exist and display
- [ ] Hero image displays correctly
- [ ] Mobile menu works (open/close)
- [ ] Desktop navigation dropdowns work
- [ ] Build passes: `npm run build`
- [ ] Typecheck passes: `npm run typecheck`
- [ ] Lint passes: `npm run lint`
- [ ] Lighthouse score 88+ on all metrics
- [ ] Favicon displays in browser tab
- [ ] OG image displays in social shares (test with https://www.opengraph.xyz/)

### Post-Deployment Checklist (Main Branch)
- [ ] Vercel build succeeds
- [ ] Production URL loads correctly
- [ ] Contact form submits (Turnstile + Resend)
- [ ] Newsletter form submits (Airtable)
- [ ] Calendly booking link works
- [ ] All images load (no 404s)
- [ ] Mobile responsive on real device
- [ ] Meta tags correct (view page source)

---

## 🚀 DEPLOYMENT PROTOCOL

### Step 1: Commit Changes
```bash
git add .
git status  # Review changes
git commit -m "fix: resolve ARIA attributes, canonicalize Tailwind classes, verify metadata"
```

### Step 2: Push to Main (Auto-Deploy)
```bash
git push origin main
```

### Step 3: Monitor Vercel Deployment
1. Go to https://vercel.com/dashboard
2. Select project: `bespoke-ethos`
3. Watch deployment status
4. If successful, verify production URL

### Step 4: Smoke Test Production
**URL:** https://www.bespokeethos.com

**Quick Checks:**
1. Homepage loads
2. Hero section displays
3. Trust badges display
4. Mobile menu works
5. Contact form loads
6. Newsletter form loads

---

## 🔍 DEBUGGING TIPS

### If Build Fails
1. Check error message carefully
2. Look for missing imports
3. Verify all files saved
4. Clear `.next` folder: `rm -rf .next && npm run build`

### If Tailwind Classes Don't Apply
1. Check `tailwind.config.ts` for custom utilities
2. Verify class name spelling
3. Check if using Tailwind 4 syntax (bg-linear-to-* not bg-gradient-to-*)

### If Images Don't Load
1. Verify file exists in `/public` directory
2. Check file extension (.webp, .png, .avif)
3. Verify Next.js Image component src path (no `/public` prefix)
4. Check browser console for 404 errors

### If ARIA Warnings Persist
1. Clear VS Code cache: Close and reopen VS Code
2. Restart TS server: Cmd+Shift+P → "TypeScript: Restart TS Server"
3. Check Edge DevTools settings (may need to disable some checks)

---

## 📚 REFERENCE DOCUMENTATION

### Clauderules.md Key Points
- **Never** use generic "AI assistant" language
- **Always** prefer editing existing files over creating new ones
- **Follow** the "Measure twice, cut once" workflow
- **Deploy** only to main branch
- **Use** Tailwind CSS utility classes exclusively

### Sprint1 Verification Blockers
1. ✅ Metadata: Should be Bespoke Ethos (verify complete)
2. ✅ Contact form: Needs browser test (Turnstile + Resend)
3. ✅ Newsletter form: Needs browser test (Airtable)
4. ⚠️ Pricing/social proof: Verify surfaced on homepage (line 177-216)
5. ⚠️ Vercel env vars: Need manual sync in dashboard

### SEO Messaging Anchors (from agent-seo.txt)
- Keywords: "AI Sherpa", "trigger-based workflows", "audit trails"
- Location: "Cleveland small business"
- Identity: "LGBTQ-owned"
- Value prop: "reclaim 15+ hours per week"
- CTAs: "free assessments", "human oversight"

---

## 🎯 SUCCESS METRICS

### Code Quality
- **0 TypeScript errors**
- **0 ESLint warnings**
- **0 ARIA validation errors**
- **0 Tailwind non-canonical classes**
- **0 "Acme" references**

### Performance
- **Lighthouse Performance: 88+**
- **Lighthouse Accessibility: 95+**
- **Lighthouse SEO: 95+**
- **First Contentful Paint: < 1.5s**
- **Largest Contentful Paint: < 2.5s**

### Visual Quality
- **All images load correctly**
- **All trust badges display**
- **Hero section displays correctly**
- **Mobile menu functional**
- **Navigation dropdowns functional**

---

## 📝 EXECUTION LOG TEMPLATE

**Use this to track your progress:**

```markdown
## Fix Execution Log - [DATE]

### Phase 1: ARIA Fixes
- [ ] Fix 1.1: Mobile menu aria-expanded (Line 258)
- [ ] Fix 1.2: Submenu aria-expanded (Line 409)
- [ ] Fix 1.3: Submenu aria-hidden (Line 428)
- [ ] Result: ARIA errors reduced from 3 → 0

### Phase 2: Tailwind Canonicalization
- [ ] Fix 2.1: conversion-optimized-hero.tsx (3 changes)
- [ ] Fix 2.2: page.tsx (verified already correct)
- [ ] Fix 2.3: Scanned entire codebase with grep
- [ ] Result: Tailwind warnings reduced from X → 0

### Phase 3: Module Resolution
- [ ] Fix 3.1: Verified tsconfig.json paths
- [ ] Fix 3.2: Restarted TS server
- [ ] Fix 3.3: Verified component exports
- [ ] Result: Module errors resolved

### Phase 4: Metadata Audit
- [ ] Fix 4.1: Searched for "Acme" (0 results)
- [ ] Fix 4.2: Verified root layout metadata
- [ ] Fix 4.3: Verified homepage metadata
- [ ] Fix 4.4: Checked all other pages
- [ ] Result: 100% Bespoke Ethos branded

### Phase 5: Asset Verification
- [ ] Fix 5.1: Trust badges exist and load
- [ ] Fix 5.2: Hero image exists and loads
- [ ] Fix 5.3: Logo assets exist
- [ ] Result: All assets verified

### Phase 6: Final Testing
- [ ] Test 6.1: Build test ✅
- [ ] Test 6.2: Type check ✅
- [ ] Test 6.3: Lint check ✅
- [ ] Test 6.4: Dev server visual ✅
- [ ] Test 6.5: Lighthouse audit (Score: XX)
- [ ] Result: Ready for deployment

### Deployment
- [ ] Committed changes
- [ ] Pushed to main
- [ ] Vercel build succeeded
- [ ] Production smoke test passed
- [ ] Result: LIVE ✅

### Issues Encountered
[List any unexpected issues and how you resolved them]

### Final Notes
[Any additional observations or recommendations]
```

---

## 🎉 COMPLETION CRITERIA

**This fix plan is COMPLETE when:**
1. ✅ All 23 problems in VS Code Problems panel are resolved
2. ✅ Build, typecheck, and lint all pass with 0 warnings
3. ✅ All ARIA attributes use correct boolean values
4. ✅ All Tailwind classes are canonical
5. ✅ No "Acme" metadata references exist
6. ✅ All assets exist and load correctly
7. ✅ Lighthouse score 88+ achieved
8. ✅ Deployed to production successfully
9. ✅ Production smoke tests pass
10. ✅ Execution log completed

---

**END OF FIX PLAN**

*This document contains every detail needed for Haiku to execute fixes autonomously. Follow each phase sequentially, mark checkboxes as you complete them, and document any deviations in the Execution Log.*

---

**Questions or Blockers?**
If you encounter any issues not covered in this plan:
1. Document the exact error message
2. Note what you tried
3. Check the debugging tips section
4. Escalate to Upton with full context

**Remember:** Measure twice, cut once. Read each instruction carefully before executing.
