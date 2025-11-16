# AGENT 3 – Copy & SEO Specifications (Live Baseline)

**Scope:** Page‑level copy, metadata, structured data, and Cleveland/LGBTQ positioning.  
**Primary spec:** `Manus/3-copy-seo-agent-COMPLETE.md` (this file documents how that spec maps onto the current Next.js app).

---

## Global Metadata & Canonicals

- Root metadata generated in `src/app/layout.tsx:45+` via `generateMetadata`:
  - Default title: `BespokeEthos AI Consulting - Ship Working Code, Not Slide Decks | Fixed-Price Cleveland AI Automation`.
  - Description: small‑business AI workflows, chatbots, decision clarity with human‑in‑the‑loop.
  - `metadataBase` derived from `NEXT_PUBLIC_SITE_URL` with fallback to `https://www.bespokeethos.com`.
- Canonicals:
  - `metadata.alternates.canonical` set per route for key pages (`/`, `/solutions/*`, `/products/cadence`, `/pricing`, `/faq`, `/contact`, `/blog`, `/lgbtq-discount`, etc.).
- Robots & sitemap:
  - Dynamic `robots` route in `src/app/robots.ts` disallows `/admin/`, `/private/`, `/api/` and points sitemap to `${NEXT_PUBLIC_SITE_URL}/sitemap.xml`.
  - Dynamic sitemap in `src/app/sitemap.ts` lists the main marketing routes and revalidates every 30 minutes.

## Social & OG

- Global Open Graph/Twitter images:
  - `layout.tsx` now uses `/assets/generated/logo-square-dark.png` to ensure a clean, centered orange‑drop square in link previews (no checkerboard or cropping).
  - Title/description align with the global brand line; page‑level overrides are used where needed (e.g., blog posts).
- JSON‑LD:
  - Organization, Website, and LocalBusiness JSON‑LD components are injected from `src/app/_components/seo/*-jsonld.tsx`.
  - Key solution/product pages provide additional `Product`/`Service` JSON‑LD (e.g., Flowstack™, Cadence™, Consensus Engine™, Redbridging™).

## Brand & Naming

- Product names standardized across UI and metadata:
  - `Flowstack™`, `Cadence™`, `Consensus Engine™`, `Redbridging™`.
  - Old “T” suffix variants removed from runtime code; they remain only in test files as “bad labels” to assert they don’t appear in the UI.
- Voice:
  - Founder‑led, candid, and often first‑person where appropriate (homepage sections, founder story, LGBTQ discount page).
  - Explicit acknowledgment of survival mode, fear of bad decisions, and time poverty for small business owners.

## Key Pages & Copy Direction

- **Homepage (`src/app/page.tsx`)**
  - Sections: “Am I Doing This Right?” hero, “How We Take the Guesswork Out” (Consensus Engine), “You’re Not Alone”, “What You Get”, and “Built By Weekend Warriors”.
  - CTA hierarchy: schedule a free consultation (`/book`), learn about the 25% LGBTQ+ discount via modal/banner.

- **Solutions & Products**
  - `/solutions/flowstack` → Flowstack™: ownership of a single painful task automation, with human approvals and rollback.
  - `/solutions/consensus-engine` → Consensus Engine™: multi‑agent research and decision clarity.
  - `/solutions/redbridging` → Redbridging™: automation rescue/monitoring.
  - `/products/cadence` → Cadence™: content rhythm/brand system with dedicated feature imagery.

- **Pricing/FAQ/Help**
  - `/pricing` describes setup/monthly pricing for Flowstack™, Chatbots, Consensus Engine™, Redbridging™ with transparent numbers.
  - `/faq` and `/help` reinforce clarity about scope, costs, and what each product does/doesn’t do.

- **LGBTQ+ Discount**
  - `/lgbtq-discount` explains the standing 25% discount on upfront project fees for LGBTQ+ businesses, explicitly excluding recurring subscription fees.
  - Copy is in founder voice and references NGLCC certification.

---

> Any new pages should follow this pattern: strong, human headline; Cleveland + small‑business framing; clear CTA; `metadata` with unique title/description/canonical; and, where relevant, JSON‑LD for Organization/Service/Product/FAQ.

