# Page Deployment Requirements - Quick Reference

**⚠️ MANDATORY: Read [PAGE_DEPLOYMENT_CHECKLIST.md](../PAGE_DEPLOYMENT_CHECKLIST.md) for complete requirements**

---

## Pre-Deployment Command Sequence

Run these commands in order before ANY deployment:

```bash
# 1. Quality check
pnpm run deploy:check

# 2. Type safety
pnpm run typecheck

# 3. Code quality
pnpm run lint

# 4. Build verification
pnpm build

# 5. Smoke tests
pnpm run smoke

# 6. Accessibility audit
pnpm run audit:css
```

---

## Critical Requirements Summary

### 🎨 Visual & Responsive (Mobile-First)
- ✅ Test on 320px (mobile), 768px (tablet), 1200px+ (desktop)
- ✅ Touch targets minimum 44x44px
- ✅ Glass cards (400x400px) with ample shadow room
- ✅ Service descriptions: 6-10 words beneath cards
- ✅ Proper rollover images and text wrapping
- ✅ Clean, uncluttered, refined look

### 🔍 SEO (MANDATORY)
- ✅ Unique title (50-60 chars) with primary keyword
- ✅ Meta description (140-160 chars)
- ✅ Complete OG tags (og:title, og:description, og:image, og:url, og:type)
- ✅ ALL images have descriptive ALT tags
- ✅ Excerpts filled out completely
- ✅ Keywords optimized per page

### ❓ FAQ (MANDATORY - Every Page)
- ✅ Minimum 3 questions per page
- ✅ Proper formatting matching FAQ schema
- ✅ Relevant to page content

### 📊 Schema Markup (MANDATORY)
- ✅ Organization/Business schema (all pages)
- ✅ Breadcrumb schema (all pages)
- ✅ FAQ schema (all pages - minimum 3 Q&A)
- ✅ Product schema (if product page)
- ✅ Article schema (if blog/article page)

### ♿ Accessibility (WCAG 2.3)
- ✅ Color contrast ratios: 4.5:1 (normal), 3:1 (large text)
- ✅ ARIA labels on all interactive elements
- ✅ Screen reader compatibility
- ✅ Keyboard navigation fully functional
- ✅ Test entire page for compliance

### ⚡ Performance
- ✅ Lighthouse scores: 90+ in ALL categories
- ✅ Lazy loading for below-fold images
- ✅ Managed bundle sizes
- ✅ LCP < 2.5s, FID < 100ms, CLS < 0.1

### 🔒 Security
- ✅ ZERO security vulnerabilities
- ✅ Run `pnpm audit` - resolve all high/critical
- ✅ CodeQL scan passes
- ✅ No hardcoded secrets

### 💻 Code Quality
- ✅ TypeScript: zero errors (`pnpm run typecheck`)
- ✅ ESLint: zero warnings (`pnpm run lint`)
- ✅ Build succeeds: `pnpm build`
- ✅ Node 20 & React 19 compatible

---

## Testing Requirements

### Desktop Browsers
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari

### Mobile Devices
- ✅ iPhone (Safari)
- ✅ Android (Chrome)
- ✅ iPad/tablet

### Automated Tests
- ✅ E2E tests pass (`pnpm run test:e2e`)
- ✅ Smoke tests pass (`pnpm run smoke`)
- ✅ Accessibility audit (`pnpm run audit:css`)

---

## Quality Standard

> **"Good enough is not good enough. Perfect is the standard."**

If you have to zoom in and question it, it needs to be modified.

---

## Getting Help

If blocked on any requirement:
1. Document the issue clearly
2. Flag @Uptonr3421 in PR/issue
3. Wait for guidance before proceeding

**Do not deploy** without meeting requirements or explicit approval.

---

## Enforcement

- ✅ Pre-commit hooks (where applicable)
- ✅ GitHub Actions CI/CD workflows
- ✅ Code review process
- ✅ Automated testing
- ✅ Manual verification

Deployments not meeting standards will be **rolled back**.

---

**See [PAGE_DEPLOYMENT_CHECKLIST.md](../PAGE_DEPLOYMENT_CHECKLIST.md) for detailed requirements**
