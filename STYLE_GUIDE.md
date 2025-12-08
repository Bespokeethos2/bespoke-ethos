# Bespoke Ethos Design System & Style Guide

> **Version**: 1.0.0
> **Last Updated**: December 2025
> **Theme**: Authentic, Tactile, Survival Mode

## 1. Mission & Philosophy

**"Survival Mode" Aesthetic**
Bespoke Ethos moves away from the sterile "Clean SaaS" look. We embrace an **"Authentic/Tactile"** aesthetic that resonates with small business founders who are in the trenches.

## Vibe Policy

While further context will be provided in the style guide, this style carries over. This is how we see the world.

This section describes the desired "vibe" or aesthetic direction for the project. The tone should be carefree and cutting-edge, yet still feel grounded and authentic, with a natural, fresh look. We bring solutions and knowledge in time to the people who need it most. Visuals should avoid overly staged imagery, favoring candid shots or none at all. Edited photos must always zero in on the subject if you plan on cropping them or generating (which I do highly encourage). Please research and utilize the best MCPs and use modern, well-designed containers for content ALWAYS. Do NOT ever deploy a stale library container; always go pull them, analyzing the code, and modifying to make it align with our overall style, pulling in tools to help you do this most effectively, optimally, and safely.

another key element: do not invent or misattribute personal details about Upton in any copy. Use only information that is explicitly provided or verified. Treat personal details as context, not decoration—lean into authenticity, not fabrication.

- Allowed: verifiable facts, public accomplishments, and details explicitly shared by Upton.
- Prohibited: fabrications, sensitive personal data (financial, medical, private relationships) unless you have explicit permission.
- When in doubt: flag the information, ask for verification, and cite the source if available.
- Purpose: use personal details to build rapport and trust—never to mislead or sensationalize.

This guidance ensures future instances reading this file can safely and respectfully use personal context as a resource for genuine storytelling and connection.

Creativity in layout is encouraged, especially in making the most of available space. For example, if there is unused space, consider adding dynamic elements like timelines or unique visualizations that repurpose overlooked information in engaging ways. The design should prioritize mobile-first interactions, such as flyout effects that enhance usability on smaller screens.

Additionally, the content should be organized into clear sections. When technical terms are used, they should be accompanied by distinctive icons. Clicking these icons would trigger small pop-up bubbles—like tooltips—that provide accessible explanations, helping users understand complex concepts in a friendly, approachable manner (e.g., a bubble labeled "AI University" with a simple definition). This approach aims to make technical content more inviting and easier to grasp for all users.

- **Tactility**: Use of noise textures, off-white paper backgrounds, and subtle shadows to create depth.
- **Authenticity**: Avoid jargon. Be direct.

## 2. Typography

We use a dual-font stack to balance readability with high-end editorial authority.

### Primary (Body & UI)

**Font**: [Inter](https://fonts.google.com/specimen/Inter)

- **Variable**: `--font-sans`
- **Usage**: All body text, navigation, buttons, and functional UI elements.
- **Why**: Clean, legible, and distinctly modern without being cold.

### Accent (Headings & Hero)

**Font**: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)

- **Variable**: `--font-accent`
- **Usage**: Hero titles, major section headers, "editorial" moments.
- **Why**: Adds a touch of history and authority; contrasts beautifully with the utilitarian Inter.

## 3. Color Palette (Bespoke Ethos 2025)

Our palette shifts away from pure whites and blacks to creams, charcoals, and navies.

### Core Colors

| Color | Hex | Variable | Usage |
| :--- | :--- | :--- | :--- |
| **Navy Primary** | `#1a365d` | `--navy-primary` | Primary brand color, headers, trusted elements. |
| **Charcoal** | `#2d3748` | `--charcoal-text` | Primary text. softer than black. |
| **Cream BG** | `#fffaf0` | `--cream-bg` | Main background. Paper-like warmth. |
| **Soft White** | `#f7fafc` | `--soft-white` | Secondary backgrounds, subtle contrast. |

### Accents & Action

| Color | Hex | Variable | Usage |
| :--- | :--- | :--- | :--- |
| **Amber CTA** | `#f6ad55` | `--amber-cta` | Primary Calls to Action. |
| **Gold Accent** | `#ecc94b` | `--gold-accent` | Highlights, "premium" touches. |
| **Success** | `#48bb78` | `--success-green` | Confirmation messages, success states. |

### Special

**Pride Gradient** (Iconic 7-color gradient):
`linear-gradient(90deg, #e40303, #ff8c00, #ffed00, #008026, #24408e, #732982, #e40303)`

## 4. UI Patterns & Components

### The "Tactile" Pill

Used for trust badges and key metadata. Simulates a physical sticker or badge.

```css
.trust-thin-pill {
  background: radial-gradient(circle at 50% 50%, rgba(255, 250, 240, 0.9), rgba(247, 250, 252, 0.85));
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  /* Uses a specific SVG noise filter for texture */
}
```

### Glassmorphism Panels

Used in Hero sections to lift content off the "Aurora" background.

- **Blur**: `backdrop-filter: blur(18px) saturate(150%)`
- **Border**: `1px solid rgba(15, 23, 42, 0.08)`
- **Shadow**: Deep, substantial shadows (`0 22px 60px`) to create separation.

### The "Aurora" Background

A subtle, moving mesh gradient used in hero areas.

- **Components**: Radial gradients of Light Sage, Light Slate, and Light Plum.
- **Animation**: Subtle breathing/shifting motion (disabled on `prefers-reduced-motion`).

## 5. Animation & Motion

- **Philosophy**: Motion should feel "heavy" and purposeful, not bouncy.
- **Keyframes**:
  - `enterFromRight` / `enterFromLeft`: Smooth slides for content entry.
  - `scaleIn` / `scaleOut`: For modals and dialogs.
  - `border-beam`: For highlighting AI/tech features.

## 6. Tone of Voice

- **Direct**: "Real Cleveland AI. Real Simple." or "We Take the Busywork, you keep control."
- **Empathetic**: We know what it's like to run a business.
- **No Jargon**: Explain AI concepts in plain English. Use analogies (e.g., "Automation Bridge", "Consensus Engine").

## 7. Tailwind Configuration

We extend the standard Tailwind config with:

- **Font Family**: `sans` (Inter), `mono` (Monospace).
- **Colors**: Mapped to CSS variables for dark mode support.
- **Breakpoints**: Standard specific overrides if needed (currently using defaults).
- **Plugins**: `tailwindcss-radix`, `@tailwindcss/typography`.
