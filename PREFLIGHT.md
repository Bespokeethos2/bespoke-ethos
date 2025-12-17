# 🛫 PREFLIGHT CHECKLIST

> **MANDATORY:** This checklist MUST be executed when:
> - 2+ images are swapped or regenerated
> - 10%+ of codebase is altered
> - User explicitly requests `/preflight` or full preflight
> - Before any production deployment to `main`

> **CONTEXTUAL:** Not all checks apply to all files. Skip checks that don't apply to the file type being modified (e.g., SEO checks don't apply to utility components).

---

## 1. 📦 Dependency Verification

- [ ] `pnpm install` completes without errors
- [ ] No missing peer dependencies
- [ ] `node_modules` not corrupted (delete and reinstall if issues)

## 2. 🔧 TypeScript Compilation

- [ ] Run `pnpm tsc --noEmit` OR review `ignoreBuildErrors` status
- [ ] All Lucide icons exist (no `Lightning`, use `Zap`; no `Tree`, use `Trees`)
- [ ] No duplicate object keys in config files
- [ ] Correct import paths (e.g., `@google-cloud/vertexai` not `vertex-ai`)

## 3. 🎨 Asset & Image Verification

- [ ] All referenced images exist in `public/assets/`
- [ ] No broken image paths in components
- [ ] Alt text present on all `<Image>` components
- [ ] Responsive image variants exist (mobile/tablet/desktop) if required

## 4. 🏗️ Build Verification

```bash
pnpm run build
```

- [ ] Build completes without errors
- [ ] Check for minification issues (if crash, disable in `next.config.ts`)
- [ ] Static pages generated successfully
- [ ] No runtime errors in browser console

## 5. 🌐 SEO & Metadata

- [ ] All pages have `<title>` and `<meta description>`
- [ ] JSON-LD schemas present (Organization, WebPage, FAQ, etc.)
- [ ] Canonical URLs set correctly
- [ ] Open Graph images configured

## 6. 🔒 Git State Verification

```bash
git status
git log -3 --oneline
```

- [ ] No uncommitted changes blocking deployment
- [ ] No merge conflicts
- [ ] No rebase in progress (check `.git/rebase-merge`)
- [ ] Branch is on `main` and synced with `origin/main`

## 7. 🎯 Component-Specific Checks

### Interactive Components
- [ ] LeadGenerator3000 - Icons render correctly
- [ ] MoneyFurnace - Icons render correctly  
- [ ] VoiceChatbot - SpeechRecognition type handled (@ts-ignore or types)
- [ ] All framer-motion animations work

### Dimension Layout (if using)
- [ ] Header renders without inline style warnings
- [ ] Footer renders correctly
- [ ] Main content areas display properly
- [ ] Contact form functional

## 8. 🚀 Deployment Readiness

- [ ] `pnpm run build` exits with code 0
- [ ] All environment variables set in `.env.local`
- [ ] Git commit created with descriptive message
- [ ] `git push origin main` succeeds

---

## Quick Commands

```bash
# Full preflight sequence
pnpm install
pnpm tsc --noEmit  # or check build errors
pnpm run build
git add -A
git commit -m "feat: [description]"
git push origin main
```

---

**Last Updated:** 2025-12-17
**Maintained By:** Antigravity Agent
