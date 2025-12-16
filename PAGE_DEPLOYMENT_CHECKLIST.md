# Page Deployment Requirements Checklist

**MANDATORY** - Every page deployed from this repository must meet ALL requirements below.

> ⚠️ **Critical**: "Good enough" is NOT good enough. Perfect is the standard. If you have to zoom in and question it, it needs to be modified.

---

## Table of Contents

1. [Visual & Responsive Design](#1-visual--responsive-design)
2. [SEO Requirements](#2-seo-requirements)
3. [Schema Markup](#3-schema-markup)
4. [Accessibility](#4-accessibility)
5. [Performance](#5-performance)
6. [Security](#6-security)
7. [Code Quality](#7-code-quality)
8. [Testing](#8-testing)

---

## 1. Visual & Responsive Design

### Mobile-First Development
- [ ] **Mobile viewport tested (320px-480px)**
  - All content readable without horizontal scroll
  - Touch targets minimum 44x44px
  - Typography scales appropriately
  - Cards and components display correctly
  
- [ ] **Tablet viewport tested (481px-1024px)**
  - Layout transitions smoothly from mobile
  - Navigation adapts appropriately
  - Images and media scale correctly
  
- [ ] **Desktop viewport tested (1025px+)**
  - Full layout utilizes available space
  - All interactive elements visible and accessible
  - Typography and spacing optimized for reading

### Touch Responsiveness
- [ ] All interactive elements respond to touch on mobile
- [ ] Hover states have touch equivalents
- [ ] No double-tap to zoom required for buttons
- [ ] Touch gestures work as expected (swipe, scroll, pinch)

### Glass Cards & Spacing (400x400px cards)
- [ ] **Ample room for drop shadows**
  - Cards have sufficient margin to display shadows fully
  - Glass effect (backdrop-blur) renders correctly
  - No shadow clipping or overflow issues
  
- [ ] **Brief service descriptions (6-10 words)**
  - Clear, concise copy beneath each card
  - Proper text hierarchy and spacing
  - Readable on all backgrounds

### Visual Polish
- [ ] **Properly working rollover images**
  - Image transitions smooth and performant
  - No flicker or loading delays
  - Fallbacks for browsers without support
  
- [ ] **Text wraps correctly**
  - No orphaned words or awkward breaks
  - Responsive text sizing
  - Line height optimized for readability
  
- [ ] **Clean, uncluttered refined look**
  - Consistent spacing throughout
  - Balanced whitespace
  - Visual hierarchy clear
  - Design cohesive with brand guidelines

---

## 2. SEO Requirements

### Essential Meta Fields

#### Title Tags
- [ ] **Unique title for each page** (50-60 characters)
- [ ] **Primary keyword in title** (front-loaded when possible)
- [ ] **Compelling and click-worthy**
- [ ] **Follows best practices** from other pages
- [ ] **Format**: `Primary Keyword - Secondary | Brand Name`

#### Meta Descriptions
- [ ] **Unique description per page** (140-160 characters)
- [ ] **Includes primary keyword naturally**
- [ ] **Compelling call-to-action**
- [ ] **Accurately describes page content**
- [ ] **Follows best practices** from existing pages

#### Open Graph (OG) Setup
- [ ] `og:title` - Optimized for social sharing
- [ ] `og:description` - Engaging summary
- [ ] `og:image` - High quality (1200x630px minimum)
- [ ] `og:url` - Canonical URL
- [ ] `og:type` - Appropriate type (website, article, etc.)
- [ ] `og:site_name` - Bespoke Ethos

#### Twitter Card
- [ ] `twitter:card` - summary_large_image
- [ ] `twitter:title` - Optimized title
- [ ] `twitter:description` - Compelling summary
- [ ] `twitter:image` - High quality image

### Image Optimization
- [ ] **ALL images have ALT tags** (descriptive, keyword-rich when appropriate)
- [ ] **Images optimized for web** (WebP format preferred)
- [ ] **Responsive images** with srcset
- [ ] **Lazy loading implemented** for below-fold images
- [ ] **Proper aspect ratios** maintained

### Content Requirements
- [ ] **Excerpts filled out completely** for blog/article pages
- [ ] **Keywords strategically placed** (see SEO guides in `/seoguide/`)
- [ ] **Tag optimization** implemented
- [ ] **Internal linking** to relevant pages
- [ ] **Canonical URL** set correctly

### FAQ Section (MANDATORY)
- [ ] **Minimum 3 questions** per page
- [ ] **Questions relevant to page topic**
- [ ] **Answers comprehensive but concise**
- [ ] **Proper formatting** (see FAQ schema requirements)
- [ ] **Matches FAQ schema** (see below)

---

## 3. Schema Markup

All pages must include **Google-compliant structured data**:

### Organization/Business Schema (All Pages)
- [ ] **Organization schema** from homepage
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bespoke Ethos",
    "url": "https://www.bespokeethos.com",
    "logo": "https://www.bespokeethos.com/assets/logo-light.png",
    "sameAs": [...],
    "address": {...},
    "contactPoint": {...}
  }
  ```

### Breadcrumb Schema (All Pages)
- [ ] **Breadcrumb markup** showing navigation path
  ```json
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [...]
  }
  ```

### FAQ Schema (All Pages - MANDATORY)
- [ ] **FAQPage schema** with minimum 3 Q&A pairs
  ```json
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [...]
  }
  ```

### Page-Specific Schema

#### Product Pages
- [ ] **Product schema** with:
  - Name, description, image
  - Offers (price, currency, availability)
  - AggregateRating (if reviews exist)
  - Brand information

#### Article/Blog Pages
- [ ] **Article schema** with:
  - Headline, image, datePublished, dateModified
  - Author information
  - Publisher information
  - articleBody or articleSection

---

## 4. Accessibility

### ARIA & Screen Reader Support
- [ ] **Semantic HTML** used throughout
- [ ] **ARIA labels** on interactive elements
- [ ] **ARIA roles** appropriately assigned
- [ ] **ARIA live regions** for dynamic content
- [ ] **Skip navigation** link present
- [ ] **Landmark roles** defined (header, nav, main, footer)
- [ ] **Form labels** properly associated
- [ ] **Focus indicators** visible and clear

### WCAG 2.3 Compliance (MANDATORY)
- [ ] **Color contrast ratios meet AA standards**:
  - Normal text: 4.5:1 minimum
  - Large text (18pt+): 3:1 minimum
  - UI components: 3:1 minimum
  
- [ ] **Test entire page** for contrast compliance
- [ ] **No reliance on color alone** for information
- [ ] **Text resizable** up to 200% without loss of functionality
- [ ] **Keyboard navigation** fully functional
- [ ] **Focus order** logical and intuitive
- [ ] **No keyboard traps**
- [ ] **Alternative text** for all non-decorative images

### Testing Tools
- [ ] Tested with screen reader (NVDA, JAWS, or VoiceOver)
- [ ] Tested with keyboard-only navigation
- [ ] Run `pnpm run audit:css` (Axe accessibility checker)
- [ ] Manual contrast checking using browser DevTools or contrast checker

---

## 5. Performance

### Loading & Speed
- [ ] **Lazy loading** implemented for images
- [ ] **Code splitting** for large components
- [ ] **Bundle size managed** (run bundle analyzer)
- [ ] **Fonts optimized** (subset, preload critical fonts)
- [ ] **No render-blocking resources** above the fold
- [ ] **Critical CSS inlined** when appropriate

### Lighthouse Scores (MANDATORY)
- [ ] **Performance: 90+**
- [ ] **Accessibility: 90+**
- [ ] **Best Practices: 90+**
- [ ] **SEO: 90+**

If unable to test Lighthouse:
- [ ] **Estimate scores** based on similar pages
- [ ] **Document estimation** in PR/deployment notes

### Core Web Vitals
- [ ] **LCP (Largest Contentful Paint)**: < 2.5s
- [ ] **FID (First Input Delay)**: < 100ms
- [ ] **CLS (Cumulative Layout Shift)**: < 0.1
- [ ] **FCP (First Contentful Paint)**: < 1.8s
- [ ] **TTI (Time to Interactive)**: < 3.8s

---

## 6. Security

### Vulnerability Scanning
- [ ] **Zero security vulnerabilities** in dependencies
- [ ] **Run `pnpm audit`** - resolve all high/critical issues
- [ ] **CodeQL scan** passes (run via GitHub Actions or locally)
- [ ] **No hardcoded secrets** or API keys
- [ ] **Environment variables** properly configured
- [ ] **HTTPS only** (enforced via middleware)
- [ ] **CSP headers** configured appropriately
- [ ] **XSS protection** in place for user inputs
- [ ] **CSRF tokens** for forms

---

## 7. Code Quality

### TypeScript & Linting
- [ ] **TypeScript compilation**: `pnpm run typecheck` passes with zero errors
- [ ] **ESLint**: `pnpm run lint` passes with zero warnings
- [ ] **No `any` types** unless absolutely necessary
- [ ] **Proper type definitions** for all components and functions
- [ ] **Import statements** organized and clean
- [ ] **Unused imports/variables** removed

### Build Stability
- [ ] **Build succeeds**: `pnpm build` completes without errors
- [ ] **No console warnings** in production build
- [ ] **Environment variables** documented and set
- [ ] **Dependencies locked** (`pnpm-lock.yaml` committed)

### Code Standards
- [ ] **Follows existing patterns** in codebase
- [ ] **Component structure** consistent with project style
- [ ] **Comments** added for complex logic (sparingly)
- [ ] **Dead code removed**
- [ ] **Console.logs removed** from production code

### Node 20 & React Compatibility
- [ ] **Compatible with Node 20.x**
- [ ] **React 19 features** used appropriately
- [ ] **Next.js 16** conventions followed
- [ ] **No deprecated APIs** used

---

## 8. Testing

### Automated Tests
- [ ] **Unit tests** for new components (if applicable)
- [ ] **Integration tests** pass
- [ ] **E2E tests** updated for new pages/features
- [ ] **Playwright tests**: `pnpm run test:e2e` passes

### Manual Testing
- [ ] **Smoke tests**: `pnpm run smoke` passes
  - Image checks
  - Page availability
  - Critical paths working
  
- [ ] **Visual regression testing** (if changes to UI)
- [ ] **Cross-browser testing**:
  - Chrome/Edge (Chromium)
  - Firefox
  - Safari (Desktop & iOS)
  
- [ ] **Device testing**:
  - iPhone (Safari)
  - Android (Chrome)
  - iPad/tablet
  - Various desktop screen sizes

### User Experience Testing
- [ ] **Forms submit correctly** and show appropriate feedback
- [ ] **Loading states** displayed during async operations
- [ ] **Error states** handled gracefully with clear messages
- [ ] **Success states** provide clear confirmation
- [ ] **Navigation** works correctly (all links tested)
- [ ] **CTA buttons** clearly visible and actionable
- [ ] **Page load time** feels fast (< 3 seconds to interactive)

---

## Pre-Deployment Commands

Run these commands in sequence before every deployment:

```bash
# 1. Preflight checks
pnpm run preflight

# 2. Type checking
pnpm run typecheck

# 3. Linting
pnpm run lint

# 4. Build
pnpm build

# 5. Smoke tests
pnpm run smoke

# 6. Accessibility audit
pnpm run audit:css

# 7. E2E tests (if applicable)
pnpm run test:e2e
```

---

## Deployment Workflow

1. **Complete all checklist items** for the page(s) being deployed
2. **Run all pre-deployment commands** listed above
3. **Document test results** in PR description
4. **Get code review** (automated or manual)
5. **Run security scans** (CodeQL, dependency audit)
6. **Deploy to test environment first** (if available)
7. **Verify on test environment** across devices
8. **Deploy to production** only after all checks pass
9. **Post-deployment verification**:
   - Check production site immediately
   - Test key user paths
   - Monitor error logs
   - Verify analytics tracking

---

## Page Type Specific Requirements

### Homepage
- [ ] Hero section optimized for conversion
- [ ] Value proposition clear within 3 seconds
- [ ] Primary CTA above the fold
- [ ] Trust signals visible (badges, testimonials)
- [ ] Mobile logo displays correctly

### Product/Service Pages
- [ ] Clear product/service description
- [ ] Pricing information (if applicable)
- [ ] Features/benefits highlighted
- [ ] CTA buttons prominent
- [ ] Related products/services linked

### Blog/Article Pages
- [ ] Author information displayed
- [ ] Publication date shown
- [ ] Reading time estimate (if available)
- [ ] Social sharing buttons
- [ ] Related articles linked
- [ ] Table of contents (for long articles)

### Landing Pages
- [ ] Single focused CTA
- [ ] Minimal navigation distractions
- [ ] Form validation working
- [ ] Thank you page/confirmation
- [ ] Tracking pixels firing correctly

---

## Quality Standards Reference

- **SEO Guides**: `/seoguide/` directory
- **Style Guide**: `/STYLE_GUIDE.md`
- **Contributing Guide**: `/CONTRIBUTING.md`
- **Deployment Guide**: `/DEPLOYMENT.md`
- **Dependencies**: `/docs/DEPENDENCIES.md`

---

## Getting Help

If you encounter blockers with any requirement:

1. **Document the issue** clearly
2. **Flag @Uptonr3421** in PR/issue
3. **Provide context**: What you tried, what failed
4. **Suggest alternatives** if possible
5. **Wait for guidance** before proceeding

**Do not deploy** if critical requirements cannot be met without explicit approval.

---

## Enforcement

This checklist is enforced through:

- **Pre-commit hooks** (where applicable)
- **GitHub Actions CI/CD** workflows
- **Code review process**
- **Automated testing**
- **Manual verification**

Deployments that do not meet these standards will be **rolled back** and **must be fixed** before redeployment.

---

## Checklist Sign-Off

Before submitting for deployment review:

- [ ] I have read and understand all requirements
- [ ] I have completed all applicable checklist items
- [ ] I have run all pre-deployment commands
- [ ] I have tested on multiple devices and browsers
- [ ] I have documented any deviations with justification
- [ ] I am confident this page meets our quality standards

**Signature/Approval**: _______________  
**Date**: _______________

---

**Last Updated**: 2025-12-16  
**Version**: 1.0.0
