# SOTA "Luminous Dark" Overhaul & Site Polish Checklist

> **Mandate:** Every page must reflect the "State of the Art" Luminous Dark theme (Warm Orange, Glassmorphism, PremiumContainer) and the "Human, Not AI Slop" voice (Upton Rand, Machine Shop metaphor, Explanatory Naming).

## 🚨 Critical Remaining Pages (Must Do Immediately)

- [x] **Custom Workflows (Skyway)** (`src/app/solutions/automation-skyway/page.tsx`)
    - [x] Update Name: "Custom Cloud Workflows" (was Automation Skyway)
    - [x] Design: Apply `PremiumContainer` (Glass variant).
    - [x] Copy: Reword to "End-to-end automation infrastructure."

- [x] **Pricing Page** (`src/app/pricing/page.tsx`)
    - [x] Design: Replace `be-page-slate` with SOTA `PremiumContainer`.
    - [x] Cards: Update pricing cards to use `sota-card` styles.
    - [x] Copy: Ensure "Fixed Price" / "Anti-Hourly" messaging is front and center.

- [ ] **Contact Page** (`src/app/contact/page.tsx`)
    - [ ] Design: Modernize form layout with `sota-card`.
    - [ ] Copy: "Book Triage" / "Grant Application" language.

- [ ] **Blog Index** (`src/app/blog/page.tsx`)
    - [ ] Design: Update post grid to use `sota-card` for article previews.
    - [ ] Copy: Ensure headers match the new voice.

- [ ] **Testimonials** (`src/app/testimonials/page.tsx`)
    - [ ] Design: Convert standard testimonials to "Tactile" cards (Obsidian variant).

## 🛠️ Global Polish & Consistency

- [ ] **Footer (`src/app/_components/footer/index.tsx`)**
    - [ ] Design: Ensure background matches `globals.css` noise/dark theme.
    - [ ] Links: Update all internal links to new Explanatory Names (e.g., "AI Receptionist" not "Cadence").

- [ ] **Navigation (`src/app/_components/header/index.tsx`)**
    - [ ] Labels: Rename "Products" dropdown items to Explanatory Names.
    - [ ] Visuals: Ensure dropdowns use glassmorphism/blur effects.

- [ ] **Legal Pages**
    - [ ] `src/app/privacy-policy/page.tsx`: Styling update (ensure readability on dark mode).
    - [ ] `src/app/terms/page.tsx`: Styling update.

## 🎨 Visual Assets (Nano Banana)

- [ ] **Pricing Icons:** Generate geometric amber icons for the pricing tiers if missing.
- [ ] **Blog Thumbnails:** Audit current thumbnails; replace generic stock with Geometric Amber if needed.

## 🔍 SEO & Schema

- [ ] **Audit JSON-LD**: Ensure `name` fields in `Product` and `Service` schemas match the new Explanatory Names site-wide.
- [ ] **Meta Tags**: Update `title` and `description` on all rewritten pages.

---
**Status:** In Progress
**Next Action:** Execute updates on `contact` and `footer`.
