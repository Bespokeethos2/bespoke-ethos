# Nano Banana Optimization Manifest
## Parallel Process ID: IMG-OPT-001
**Objective**: Optimize visual assets across the Bespoke Ethos site using Nano Banana (Gemini 3 Pro Image Preview) to align with "GMFG High-Contrast" aesthetic (Deep Navy, Slate, Amber/Orange).

---

## 1. Global Visual Style Guide

### A. The "Cleveland Bespoke" Aesthetic
*   **Primary Palette**: Deep Slate (`#0f172a`), Vivid Orange (`#f97316`), Amber (`#fbbf24`), Crisp White.
*   **Vibe**: Industrial precision, tactile warmth, "Real Cleveland AI", not generic SaaS blue/purple.
*   **Lighting**: Cinematic, warm accents (amber/tungsten), deep shadows (slate/navy), sharp highlights.
*   **Composition**: Shallow depth of field (bokeh) for lifestyle shots; Isometric/Orthographic for abstract/data shots.

### B. Nano Banana Prompt Strategy
*   **Prefix**: `vibrant, high contrast, professional photography, shallow depth of field, ...`
*   **Negative Prompts**: `cartoon, low quality, blurry, generic stock photo, blue tech globs, robot shaking hands`.

---

## 2. Icon System Renovation

**Current State**: Generic SVG icons in `capabilities-bento.tsx` and trust badges.
**Target State**: "Tactile UI Elements" - 3D rendered glass/metallic objects that feel physical.

### Icon Generation Prompt Template
> **Prompt**: `single 3D icon of a [OBJECT], isometric view, frosted white glass material with internal [COLOR] glowing core, floating on white background, sharp focus, octane render, high fidelity, soft shadows`
> *   **Size**: 256x256 px
> *   **Format**: WEBP (Transparent)

### Usage Locations & Assignments
1.  **Personalized Outreach** (Bento Grid):
    *   *Object*: "Fountain pen nib intersecting with a digital circuit node"
    *   *Color*: Amber
2.  **Stop Chasing Ghosts** (Bento Grid):
    *   *Object*: "Radar screen or filter funnel"
    *   *Color*: Orange
3.  **Drafted Replies** (Bento Grid):
    *   *Object*: "Paper airplane transforming into a lightning bolt"
    *   *Color*: Slate Blue
4.  **Smart Scheduling** (Bento Grid):
    *   *Object*: "3D calendar page with a synchronized clock gear"
    *   *Color*: Emerald

---

## 3. Product Page Optimization Audit

### A. Cadence Page (`src/app/products/cadence/page.tsx`)

| Slot ID | Current Asset | Target Size | New Nano Banana Prompt | CSS/After Effects |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Background** | `hero-cadence-desktop.webp` | `1280x720` | `Cinematic wide shot, a modern small business counter in Cleveland, warm amber lighting, a tablet in foreground displaying a clean chat interface with a friendly greeting, blurred busy shop background, photorealistic, 8k.` | `overlay-slate-900/50`, `rounded-3xl` |
| **Infographic** | `cadence-workflow-integration` | `800x600` | `Isometric diagram of a chat bubble connecting to a CRM database and an email icon, glowing orange data lines connecting them, deep slate infinite background, 3D render.` | `shadow-xl`, `border-white/10` |
| **Interaction Demo** | `cadence-customer-interaction` | `800x600` | `Over-the-shoulder shot of a smiling coffee shop owner looking at a laptop screen showing a helpful customer service chat resolution, warm cozy atmosphere, high detail.` | `rounded-2xl`, `be-image-frame` |

### B. Consensus Engine Page (`src/app/solutions/consensus-engine/page.tsx`)

| Slot ID | Current Asset | Target Size | New Nano Banana Prompt | CSS/After Effects |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Banner** | `hero-consensus-desktop.webp` | `1280x600` | `Abstract visualization of chaotic data streams (cyan, magenta) converging into a single perfectly cut diamond point (bright white/amber), deep slate background, precision engineering aesthetic, 8k render.` | `object-cover`, `object-top` |
| **Interface Shot** | `service-consensus-decision-interface` | `1024x768` | `A sleek, high-end digital dashboard interface displaying a "Recommendation Brief" with three distinct columns for "Legal", "Financial", and "Strategy", dark mode UI, glowing amber accent scores, tilted perspective.` | `perspective-1000`, `rotate-y-12` |

---

## 4. Execution Plan
1.  **Generate Assets**: Use `nanobanana` CLI or MCP tool to generate these assets in batch.
2.  **Optimize**: Convert to `.webp`, resize to target dimensions.
3.  **Implement**: Update `src` paths in code and apply specified CSS classes.

---

## 5. Pricing & Contact Optimization

### A. Pricing Page (`src/app/pricing/page.tsx`)
| Slot ID | Current Asset | Target Size | New Nano Banana Prompt | CSS/After Effects |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Banner** | `hero-pricing-desktop.webp` | `1280x720` | `Minimalist workspace top-down view, open notebook with 'Simple Pricing' handwritten in elegant font, vintage calculator, black coffee in slate mug, clean white desk, high contrast, sharp focus, 8k.` | `rounded-2xl`, `shadow-xl` |

### B. Contact Page (`src/app/contact/page.tsx`)
| Slot ID | Current Asset | Target Size | New Nano Banana Prompt | CSS/After Effects |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Banner** | *New Slot* | `1280x600` | `Close up macro shot of a hand holding a premium fountain pen writing 'Let's Build' on high quality cream stationery, warm cinematic lighting, shallow depth of field, tactile texture.` | `rounded-3xl`, `shadow-2xl` |

### C. About Page (`src/app/about/page.tsx`)
| Slot ID | Current Asset | Target Size | New Nano Banana Prompt | CSS/After Effects |
| :--- | :--- | :--- | :--- | :--- |
| **Process Shot** | *New Slot* | `800x600` | `Overhead shot of a collaborative design session, hands sketching on a large paper wireframe, coffee cups, focus on the creative work, 'Bespoke Ethos' brand colors (slate/orange) visible in markers/accents.` | `rounded-xl`, `rotate-2` |

## 6. Rules & Validators
*   **Transparency**: ALL ICONS and BADGES must have transparent backgrounds. No white squares.
*   **Realism Review**: All "photo" style images must pass a "Realism Check" - no uncanny valley, no weird fingers.
*   **Style Check**: If an image doesn't fit the "GMFG High-Contrast" or "Tactile/Real" style, it MUST be regenerated.
