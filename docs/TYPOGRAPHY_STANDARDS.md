# Typography Standards - Bespoke Ethos

## Overview
This document outlines the typography system implemented for Bespoke Ethos, ensuring WCAG AA compliance and optimal readability across all devices.

## WCAG AA Compliance

All text colors meet or exceed WCAG AA contrast ratio requirements:

### Contrast Ratios (on white background)
- **text-slate-900** (15, 23, 42): **17.85:1** ✅ Exceeds AAA
- **text-slate-800** (30, 41, 59): **14.63:1** ✅ Exceeds AAA
- **text-slate-700** (51, 65, 85): **10.35:1** ✅ Exceeds AAA
- **text-orange-700** (194, 65, 12): **5.18:1** ✅ Passes AA

### WCAG Standards
- **AA Normal Text**: 4.5:1 minimum
- **AA Large Text** (18pt+/14pt+ bold): 3:1 minimum
- All our text exceeds these requirements significantly

## Font Stack

### Primary Font (Body & UI)
- **Font**: Inter
- **Variable**: `--font-sans`
- **Weights**: 400 (regular), 500 (medium), 600 (semibold)
- **Usage**: All body text, navigation, buttons, UI elements

### Accent Font (Headings & Hero)
- **Font**: Playfair Display
- **Variable**: `--font-accent`
- **Weights**: 400 (regular), 700 (bold)
- **Usage**: Hero titles, major section headers, editorial moments

## Typography Scale

Our responsive typography uses `clamp()` for fluid sizing:

```css
/* Headings */
h1: clamp(2rem, 5vw, 4rem)      /* 32px to 64px */
h2: clamp(1.5rem, 4vw, 3rem)    /* 24px to 48px */
h3: clamp(1.25rem, 3vw, 2rem)   /* 20px to 32px */
h4: clamp(1.125rem, 2.5vw, 1.5rem) /* 18px to 24px */

/* Body */
body: 16px (mobile) → 17px (tablet) → 18px (desktop)
```

## Line Heights

Optimized for comfortable reading:
- **Body text**: 1.6 (relaxed)
- **Headings**: 1.1-1.4 (tight to normal)
- **Small text**: 1.5

## Letter Spacing

```css
/* Headings */
h1, h2, h3, h4, h5, h6: -0.02em (tight)

/* Body */
body: 0.01em (slightly open)
```

## Mobile Optimizations

### Font Sizes
- Minimum 16px for body text (prevents iOS zoom on focus)
- Slightly larger line-height (1.65) for better mobile reading

### Touch Targets
- Links: 44px minimum height
- Buttons: 44px minimum height with adequate padding
- Ensures WCAG 2.5.5 compliance (44x44px touch targets)

## Desktop Enhancements

### Base Font Size
- Desktop: 18px (more comfortable for extended reading)
- Tablet: 17px
- Mobile: 16px

### Line Length
- Maximum: 65ch (optimal line length for readability)
- Prevents eye strain from overly long lines

## Accessibility Features

### Focus States
All interactive elements have visible focus indicators with:
- 2px ring in orange-500
- 2px offset for visibility
- Compliant with WCAG 2.4.7

### Reduced Motion
All animations respect `prefers-reduced-motion: reduce`

### Text Rendering
```css
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
```

## Text Overflow Handling

All text elements prevent overflow:
```css
overflow-wrap: break-word;
word-wrap: break-word;
hyphens: auto;
```

## Usage Guidelines

### When to Use Each Font

**Inter (sans-serif)**
- Body paragraphs
- Lists and list items
- Navigation links
- Form labels and inputs
- Button text
- All functional UI text

**Playfair Display (serif)**
- Hero headlines
- Major section titles (H1, H2)
- Quote callouts
- Editorial features

### Text Color Hierarchy

1. **Primary text** (slate-900): Main headings, important content
2. **Secondary text** (slate-800): Body paragraphs, descriptions
3. **Tertiary text** (slate-700): Captions, metadata, less prominent content
4. **Accent text** (orange-700): CTAs, highlights, emphasis

### Responsive Best Practices

1. Always use responsive font sizes
2. Test across breakpoints: 320px, 375px, 768px, 1024px, 1920px
3. Ensure touch targets are adequate on mobile (44x44px)
4. Verify line length doesn't exceed 65-75 characters

## Testing Checklist

- [ ] All text meets WCAG AA contrast ratios
- [ ] Text is readable at 320px viewport width
- [ ] Touch targets are adequate on mobile (44x44px min)
- [ ] Line length is comfortable (under 75ch)
- [ ] Font sizes scale appropriately across breakpoints
- [ ] Focus indicators are visible
- [ ] Reduced motion is respected
- [ ] Text doesn't overflow containers

## Tools

### Contrast Checkers
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)

### Testing
- Browser DevTools responsive mode
- Real devices (iOS Safari, Android Chrome)
- Screen readers (NVDA, JAWS, VoiceOver)

## Future Improvements

Consider for future iterations:
- Variable fonts for more granular weight control
- Dark mode typography adjustments
- Print stylesheet with optimized typography
- Internationalization considerations (CJK fonts, RTL languages)

---

Last updated: January 2025
