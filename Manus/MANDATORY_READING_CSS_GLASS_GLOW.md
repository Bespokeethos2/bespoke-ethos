# Mandatory Reading – Frosted Glass + Glow in 2025

This guide consolidates modern best‑practice patterns for **frosted glass (glassmorphism)** and **soft glow effects**, and how to combine them in a performant, accessible way.

It is derived from multiple public references (MDN, web.dev, CSS‑Tricks‑style articles, glassmorphism UI blogs, and 2024 design write‑ups), but rewritten and condensed here rather than copied verbatim.

---

## 1. Frosted / Soft Glass Cards

### 1.1 Core ingredients

- **Translucent fill**
  - Semi‑transparent background color: `rgba(15, 23, 42, 0.7)` (dark) or `rgba(255, 255, 255, 0.15)` (light).
  - Use HSL/HSLA or CSS variables so alpha can be tuned per theme.

- **Backdrop blur**
  - `backdrop-filter: blur(16px) saturate(140%);`
  - `-webkit-backdrop-filter` for Safari.
  - Keep blur radius in the 12–24px range; more is expensive and quickly looks muddy.

- **Borders + inner highlights**
  - Hairline border: `1px solid rgba(255, 255, 255, 0.35)` on light, or `rgba(148, 163, 184, 0.5)` on dark.
  - Inner highlight with an inset shadow or subtle gradient:
    - `box-shadow: 0 1px 0 rgba(255, 255, 255, 0.6) inset;`
    - Or radial gradient from a corner: `radial-gradient(circle at 0 0, rgba(255,255,255,0.28), transparent 55%)`.

- **Rounded corners**
  - 18–28px radii for primary cards; 12–16px for nested content.
  - Keep consistent with the rest of the design system.

- **Noise / texture (optional)**
  - Very low‑opacity noise on a pseudo‑element helps avoid banding:
    - `opacity: 0.06` on `::before` with a noise PNG or SVG.

### 1.2 Glass card pattern (base)

```css
.glass-card {
  position: relative;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background:
    radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.24), transparent 55%),
    radial-gradient(circle at 100% 100%, rgba(148, 163, 184, 0.18), transparent 55%),
    rgba(15, 23, 42, 0.80);
  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
  box-shadow:
    0 22px 60px rgba(15, 23, 42, 0.75),
    0 1px 0 rgba(255, 255, 255, 0.4) inset;
}
```

### 1.3 Accessibility & performance

- Maintain sufficient contrast between text and background **after** blur and transparency are applied; check against WCAG AA.
- Avoid stacking multiple backdrops inside each other; one or two large glass layers is better than many nested ones.
- Use `prefers-reduced-motion` to disable animated blur or glow for motion‑sensitive users.

---

## 2. Glow Effects (Inner + Outer)

### 2.1 Outer glow via shadows

- Base pattern:
  - `box-shadow: 0 0 30px rgba(236, 201, 75, 0.35);`
  - For softer glows, use two shadows: a tight, subtle one and a wide, faint one:
    - `0 0 10px rgba(236, 201, 75, 0.35), 0 0 60px rgba(236, 201, 75, 0.20);`

- Prefer colored glows that match or complement the card’s accent color.

### 2.2 Inner glow

- Implemented on a pseudo‑element (`::before`) with inset shadows or gradients:

```css
.glow-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  box-shadow:
    0 0 40px rgba(255, 255, 255, 0.20) inset,
    0 0 80px rgba(15, 23, 42, 0.40) inset;
}
```

- Alternatively, a radial gradient from edges inward that fades around 10–20% of the card’s width/height.

### 2.3 Animated glow / breathing

- Use keyframe animation on shadow intensity or gradient opacity, not on blur radius or offsets:

```css
@keyframes card-glow-breathe {
  0%   { box-shadow: 0 24px 60px rgba(15, 23, 42, 0.72), 0 0 30px rgba(246, 173, 85, 0.25); }
  50%  { box-shadow: 0 28px 70px rgba(15, 23, 42, 0.82), 0 0 45px rgba(246, 173, 85, 0.32); }
  100% { box-shadow: 0 26px 64px rgba(15, 23, 42, 0.76), 0 0 35px rgba(246, 173, 85, 0.28); }
}

.glow-animated {
  animation: card-glow-breathe 7s ease-in-out infinite alternate;
}

@media (prefers-reduced-motion: reduce) {
  .glow-animated {
    animation: none;
  }
}
```

### 2.4 Performance tips

- Restrict heavy glows to a few key elements (hero cards, primary CTAs).
- Use `will-change: transform, opacity;` conservatively for animated elements, and avoid animating large box‑shadow radii at high frequency.

---

## 3. Combining Frosted Glass + Glow

### 3.1 Structural layering

For a “state‑of‑the‑art” glowing glass card:

1. **Base layer** – translucent colored background + backdrop blur (glass).
2. **Border** – subtle light border for shape.
3. **Inner glow** (`::before`) – soft vignette and interior light.
4. **Outer glow** (`::after`) – feathered halo extending beyond the card.
5. **Content** – padded card body, independent of glow layers.

### 3.2 Navy glass with warm accent example

```css
.navy-glass-card {
  position: relative;
  border-radius: 24px;
  border: 1px solid rgba(148, 163, 184, 0.6);
  background:
    radial-gradient(circle at 0% 0%, rgba(148, 163, 184, 0.28), transparent 55%),
    radial-gradient(circle at 100% 100%, rgba(15, 23, 42, 0.95), transparent 55%),
    rgba(15, 23, 42, 0.88);
  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
  box-shadow:
    0 26px 70px rgba(15, 23, 42, 0.9),
    0 0 0 1px rgba(15, 23, 42, 0.9);
}

.navy-glass-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background:
    radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.14), transparent 18%),
    radial-gradient(circle at 0% 100%, rgba(236, 201, 75, 0.12), transparent 22%);
  opacity: 0.9;
}

.navy-glass-card::after {
  content: "";
  position: absolute;
  inset: -6%;
  border-radius: inherit;
  pointer-events: none;
  box-shadow:
    0 0 0 1px rgba(248, 250, 252, 0.25),
    0 0 60px rgba(248, 189, 104, 0.26);
}
```

### 3.3 Warm tangerine halo on neutral/slate background

- Page background: slate gradient with tangerine radial highlights.

```css
.slate-page-bg {
  background:
    radial-gradient(circle at 0% 0%, rgba(246, 173, 85, 0.22), transparent 55%),
    radial-gradient(circle at 100% 100%, rgba(236, 201, 75, 0.18), transparent 55%),
    #0f172a;
}

.tangerine-card {
  position: relative;
  border-radius: 24px;
  border: 1px solid rgba(246, 173, 85, 0.6);
  background:
    radial-gradient(circle at 0% 0%, rgba(246, 173, 85, 0.25), transparent 55%),
    radial-gradient(circle at 100% 100%, rgba(236, 201, 75, 0.22), transparent 55%),
    rgba(255, 250, 240, 0.96);
  box-shadow:
    0 22px 60px rgba(15, 23, 42, 0.22),
    0 0 40px rgba(246, 173, 85, 0.30);
}
```

### 3.4 Responsiveness & theming

- Keep radii and blur consistent across breakpoints; adjust padding and max‑widths with media queries instead.
- Use CSS variables for key colors so light/dark themes and special routes (e.g., discount or hero pages) can reuse the same structural classes with different hues.

---

## 4. Implementation Checklist for This Repo

When implementing cards on `bespokeethos.com`:

1. **Page background**
   - On key pages (e.g., `/contact`), use a slate background with tangerine radial highlights.
2. **Primary glass cards**
   - Use navy glass with warm inner/outer glow for high‑focus elements (forms, hero cards).
3. **Secondary tangerine containers**
   - Use warm translucent cards with a very soft tangerine halo, not a harsh neon.
4. **Animation**
   - Use very slow “breathing” glows on one or two key cards at most.
   - Respect `prefers-reduced-motion` to disable glow animation.
5. **Accessibility**
   - Re‑check contrast on navy + tangerine combinations.
6. **Performance**
   - Avoid nesting more than one backdrop‑filtered container inside another.
   - Keep glow radii moderate and animation durations long.

