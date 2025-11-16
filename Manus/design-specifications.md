# AGENT 2 – Design Specifications (Implemented Baseline)

**Scope:** Visual system, layout rules, interaction patterns for the live Next.js app.  
**Primary spec:** `Manus/2-design-agent-COMPLETE.md` (this file records what is actually wired into the codebase today).

---

## Color & Surface System

- Implemented as CSS custom properties in `src/app/globals.css:1` under `:root`:
  - Brand: `--navy-primary`, `--charcoal-text`.
  - Accents: `--amber-cta`, `--gold-accent`, `--success-green`.
  - Backgrounds: `--cream-bg`, `--soft-white`.
  - Text/support: `--muted-text`.
  - Pride treatment: `--pride-gradient` (used only for thin glows/borders on LGBTQ elements).
- Light/dark theme tokens still supported via existing Tailwind surface/text variables; visual design is **effectively light‑first** even though dark tokens remain for future use.

## Typography

- Global body font: Inter via `next/font/google` in `src/app/layout.tsx:38`, exposed as `--font-sans`.
- Headings (`h1–h6`) styled in `globals.css` to use the Inter stack with tighter letter‑spacing and heavier weights.
- Minimum sizes and line‑height tuned for readability:
  - Body copy ~16–18px on mobile.
  - Hero headings 48–56px desktop, scaled down via clamp on small screens (inline styles on the homepage hero follow the Manus spec).

## Buttons & CTAs

- **Primary CTA**: `.primary-cta` in `src/app/globals.css:150+`
  - Amber background, charcoal text, 8px radius, soft hover lift and shadow.
  - 44×44px minimum tap target, visible focus outline.
- **LGBTQ+ discount button**: `.lgbtq-discount-btn` in `globals.css:176+`
  - Navy fill with pride‑gradient halo via `::before` and `rainbowGlow` keyframes.
  - Trailing light sweep on hover via `::after`.
  - Used in:
    - Home “What You Get” section via `LGBTQDiscountModalTrigger`.
    - `src/app/_sections/lgbtq-discount-banner/index.tsx`.
    - `src/app/_sections/trust-credentials/index.tsx`.

## Layout & Sections

- Sections use a combination of the shared `Section` component (`@/common/layout`) and inline Manus‑style spacing:
  - Homepage hero + core sections use explicit `padding` in `src/app/page.tsx:20+` to match the copy‑driven layout from the sprint brief.
  - Sitewide sections use Tailwind utilities (`py-*`, `gap-*`) tuned for comfortable spacing on mobile and desktop.
- Header:
  - `src/app/_components/header/index.tsx` uses the new logo assets (`logo-header-light.png`, `logo-header-dark.png`) with `w-auto` and fixed height (`h-12 sm:h-16 md:h-20`) to preserve aspect ratio.
  - Aurora accent in `header-accent.tsx` (`.be-header-accent`) provides subtle, modern color without overpowering content.
- Footer:
  - Uses a compact logo row plus NGLCC + Catalant badges with a soft gradient background texture image `footer-wave.svg`.

## Imagery & Cropping

- Hero and banner images on:
  - `/pricing`, `/faq`, `/solutions/flowstack`, `/solutions/consensus-engine`, `/solutions/redbridging`
  - Use `object-cover object-top` with tall containers (`h-52 sm:h-64 lg:h-72`) to keep subjects’ heads fully in frame where applicable.
- Founder story:
  - `src/app/_sections/founder-story/index.tsx` uses a square portrait container with `object-cover`, tuned around the actual `founder-upton-rand.jpg` asset.
- Testimonial avatars:
  - Use rounded `object-cover` images from `public/assets/generated/testimonial-*.jpg` for consistent, candid photography.

---

> Design system tokens and patterns are live in `src/app/globals.css` and header/footer/homepage components. Future iterations should extend these tokens to any remaining legacy sections rather than introducing new ad‑hoc styles.

