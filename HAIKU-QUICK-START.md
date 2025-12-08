# 🚀 HAIKU QUICK START GUIDE
**Read this FIRST, then follow HAIKU-FIX-PLAN-COMPREHENSIVE.md**

---

## ⚡ TL;DR - What's Broken & How to Fix It

### The 3 Critical Fixes (Do These First)

#### 1️⃣ ARIA Attributes (5 minutes)
**File:** `src/app/_components/header/navigation-menu.tsx`

**Find and replace these 3 occurrences:**

```tsx
// Line 258: Change
aria-expanded={isOn ? "true" : "false"}
// To:
aria-expanded={isOn}

// Line 409: Change
aria-expanded={isOn ? "true" : "false"}
aria-haspopup="true"
// To:
aria-expanded={isOn}
aria-haspopup={true}

// Line 428: Change
aria-hidden={isOn ? "false" : "true"}
// To:
aria-hidden={!isOn}
```

#### 2️⃣ Tailwind Canonicalization (10 minutes)
**File:** `src/components/conversion-optimized-hero.tsx`

```tsx
// Line 58: Change
translate-x-[-100%]
// To:
-translate-x-full

// Line 96: Change
bottom-[-20px] h-[40px]
// To:
-bottom-5 h-10
```

**File:** `src/app/page.tsx` (Line 111)
```tsx
// Change
bg-gradient-to-br
// To:
bg-linear-to-br
```

#### 3️⃣ Verify & Deploy (15 minutes)
```bash
# Run these commands
npm run typecheck  # Should pass
npm run lint       # Should pass
npm run build      # Should pass

# If all pass:
git add .
git commit -m "fix: resolve ARIA attributes and canonicalize Tailwind classes"
git push origin main
```

---

## 📊 Current Status

### What's Working ✅
- TypeScript compilation (no errors)
- ESLint (no errors)
- Build process (successful)
- Core functionality (all features work)

### What Needs Fixing ⚠️
- **23 VS Code warnings** (mostly cosmetic)
  - 3 ARIA attribute issues (critical for accessibility)
  - 20 Tailwind canonicalization warnings (code quality)

### What's Actually Broken 🚫
- **NOTHING!** The site works, but code quality needs polish

---

## 🎯 Your Mission

1. **Read:** Full plan in `HAIKU-FIX-PLAN-COMPREHENSIVE.md`
2. **Execute:** Phases 1-2 (ARIA + Tailwind) - HIGHEST PRIORITY
3. **Verify:** Phases 3-6 (as time allows)
4. **Deploy:** Push to main when Phase 1-2 complete

---

## 🔥 Priority Matrix

| Priority | Phase | Time | Impact | Required? |
|----------|-------|------|--------|-----------|
| **P0** | Phase 1: ARIA | 15 min | Accessibility (WCAG) | YES ✅ |
| **P0** | Phase 2: Tailwind | 30 min | Code Quality | YES ✅ |
| **P1** | Phase 4: Metadata | 20 min | SEO | YES ✅ |
| **P2** | Phase 5: Assets | 15 min | Visual Quality | If Time |
| **P3** | Phase 3: Modules | 10 min | VS Code UX | If Time |
| **P3** | Phase 6: Testing | 30 min | QA | Nice to Have |

---

## 🛠️ Quick Commands Reference

```bash
# Start dev server
npm run dev

# Type check (should pass)
npm run typecheck

# Lint check (should pass)
npm run lint

# Full build (should pass)
npm run build

# Find "Acme" references (should return 0)
grep -r "Acme" src/

# Find non-canonical Tailwind classes
grep -r "flex-shrink-0" src/
grep -r "bg-gradient-to-" src/
grep -r "translate-x-\[-" src/

# Restart TypeScript server in VS Code
# Ctrl+Shift+P → "TypeScript: Restart TS Server"
```

---

## 🚨 What NOT to Do

❌ **DO NOT:**
- Change component logic (only fix ARIA/Tailwind syntax)
- Refactor code structure
- Add new features
- Remove comments
- Change color schemes
- Modify copy/content
- Install new packages
- Update dependencies
- Change `package.json`
- Run `npm audit fix`

✅ **DO:**
- Fix ARIA boolean attributes
- Canonicalize Tailwind classes
- Verify metadata (no "Acme")
- Check assets exist
- Run verification tests
- Commit and push to main

---

## 📍 File Locations Reference

### Files You'll Edit:
1. `src/app/_components/header/navigation-menu.tsx` (ARIA fixes)
2. `src/components/conversion-optimized-hero.tsx` (Tailwind fixes)
3. `src/app/page.tsx` (Tailwind verify - mostly correct)

### Files You'll Verify:
1. `src/app/layout.tsx` (metadata check)
2. `src/app/page.tsx` (metadata check)
3. `public/assets/` (asset verification)

### Files You Won't Touch:
- Everything else! (Leave untouched unless plan specifies)

---

## 🎓 Key Concepts

### ARIA Attributes in React
```tsx
// ❌ WRONG (String literals)
aria-expanded="true"
aria-hidden="false"

// ✅ CORRECT (Boolean values)
aria-expanded={true}
aria-hidden={false}

// ✅ BEST (Dynamic boolean)
aria-expanded={isOpen}
aria-hidden={!isOpen}
```

### Tailwind 4 Canonical Classes
```tsx
// ❌ Old Tailwind 3 syntax
bg-gradient-to-br   // Use bg-linear-to-br
flex-shrink-0       // Use shrink-0
translate-x-[-100%] // Use -translate-x-full

// ✅ Tailwind 4 canonical
bg-linear-to-br
shrink-0
-translate-x-full
```

---

## 🔍 How to Verify Success

### Before You Start
```bash
# Count current issues
npm run lint 2>&1 | wc -l  # Note the number
```

### After Each Phase
```bash
# Should show fewer issues each time
npm run lint
npm run typecheck
```

### Final Check
```bash
# All three should pass clean
npm run typecheck  # ✅ No errors
npm run lint       # ✅ No warnings
npm run build      # ✅ Build succeeds
```

---

## 📞 When to Escalate

**Ask Upton if:**
1. Build fails after your changes
2. TypeScript errors appear that weren't there before
3. You find "Acme" references and are unsure what to replace them with
4. Assets are missing and you can't find source files
5. You're unsure about a Tailwind class replacement
6. Any tests fail that were passing before

**Don't ask about:**
- VS Code cosmetic warnings (just fix per plan)
- Module resolution false positives (restart TS server)
- Tailwind canonicalization (follow the mapping table)

---

## ⏱️ Time Budget

**Total time:** 90-120 minutes

- **Phase 1 (ARIA):** 15 min → **MUST DO**
- **Phase 2 (Tailwind):** 30 min → **MUST DO**
- **Phase 4 (Metadata):** 20 min → **MUST DO**
- **Phase 5 (Assets):** 15 min → Nice to have
- **Phase 6 (Testing):** 30 min → Nice to have

**If short on time:** Do Phase 1 + Phase 2 + deploy. That's 45 minutes and fixes the critical accessibility issues.

---

## 🎯 Success Looks Like

### In VS Code Problems Panel
- **Before:** 23 problems
- **After:** 0 problems (or only non-critical warnings)

### In Terminal
```bash
$ npm run typecheck
✅ No errors

$ npm run lint
✅ No warnings

$ npm run build
✅ Build succeeded
```

### In Browser (http://localhost:3000)
- Hero section displays perfectly
- Trust badges show correctly
- Mobile menu opens/closes smoothly
- Navigation dropdowns work
- No console errors

---

## 🚀 Ready to Start?

1. ✅ Read this quick start (you're here!)
2. ✅ Open `HAIKU-FIX-PLAN-COMPREHENSIVE.md`
3. ✅ Start with Phase 1: ARIA Fixes
4. ✅ Move to Phase 2: Tailwind Canonicalization
5. ✅ Run verification tests
6. ✅ Deploy to main

---

**Remember:** You're not rewriting code, you're polishing it. Think of it like proofreading - fixing typos (ARIA strings → booleans) and formatting (non-canonical → canonical Tailwind).

**You've got this!** 💪

---

**Questions?** Check the full plan first. Still stuck? Document exactly what you tried, what happened, and escalate to Upton.

**Let's ship clean code!** 🚢
