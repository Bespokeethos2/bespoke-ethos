# AGENT 4 – Image Asset Specifications (Current Plan)

**Scope:** Mapping between page sections and visual assets, plus generation/optimization rules.  
**Primary spec:** `Manus/4-image-agent.md` (this file summarizes what is wired and what remains).

---

## Pipeline & Storage

- Generation:
  - `scripts/generate-images.cjs` uses OpenAI `gpt-image-1` to create raw PNGs under `public/images/raw`.
  - Idempotent: skips generation if a PNG already exists.
- Optimization:
  - `scripts/optimize-images.cjs` creates responsive WebP variants (`*-desktop|tablet|mobile|square.webp`) into `public/assets/generated`.
- Build integration:
  - `scripts/ci-build.mjs` runs the image prep scripts plus `scripts/copy-guides-assets.cjs`, which copies `Guides/og-image.png` and logo assets into `public`.

## Key Assets in Use

- **Logos & Trust**
  - Header: `/assets/generated/logo-header-light.png`, `/assets/generated/logo-header-dark.png`.
  - Mobile icon: `/assets/logo-mobile.png`.
  - Trust badges: `/assets/generated/trust/*.webp` plus static NGLCC/Catalant SVGs.
  - OG/social: `/assets/generated/logo-square-dark.png` (fallback in `layout.tsx`).

- **Homepage & Core Sections**
  - Hero/feature images: `hero-home-*`, `hero-flowstack-*`, `hero-consensus-*`, `hero-redbridging-*` in `public/assets/generated`.
  - Testimonials: `testimonial-*.jpg` for avatar photos in `src/app/_sections/testimonials/index.tsx`.
  - Founder: `public/founder-upton-rand.jpg` for `FounderStory`.

- **Solutions & Product**
  - Flowstack™: `hero-flowstack-desktop.webp` banner + workflow illustration assets.
  - Consensus Engine™: `hero-consensus-desktop.webp` banner.
  - Redbridging™: `hero-redbridging-desktop.webp` banner + `redbridging-hero.png` in the flexible solutions view.
  - Cadence™: three DALL·E feature images mapped in `src/app/products/cadence/page.tsx` (voice, story, workflow).

- **Blog**
  - Four longform posts each map to a generated hero set:
    - `blog-cleveland-ai-automation-*`
    - `blog-what-to-automate-first-*`
    - `blog-redbridging-zapier-rescue-*`
    - `blog-on-brand-ai-chatbots-*`

## Remaining To‑Dos for Image Agent

- Fill out any missing assets from `4-image-agent.md` (e.g., additional Cleveland skyline, LGBTQ+ banner, ecosystem map) following the prompts and sizes specified there.
- Ensure every hero and testimonial image:
  - Uses an appropriate `object-position` to keep faces centered and un‑cropped.
  - Has concise, descriptive `alt` text that reflects the section’s meaning (not keyword spam).
- Consider a dedicated 1200×630 OG asset with centered orange drop + logotype if social link previews still feel visually thin.

---

> All new images should enter through the existing `generate-images` → `optimize-images` pipeline and land under `public/assets/generated`, avoiding ad‑hoc assets elsewhere in `public/`.

