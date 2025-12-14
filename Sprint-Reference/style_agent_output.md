# Agent 1 (Style/CSS) Output

Okay, let's craft a design system foundation for BespokeEthos.com with a focus on conversions, mobile-first principles, and the provided design specifications. Here's the strategy:

*   **globals.css (Dark Mode & Base Styles):** This file will house our foundational styles, including the color palette, typography defaults, and dark mode support.

*   **Tailwind Configuration:** We'll extend Tailwind CSS to integrate our bespoke color palette, animations (shimmer/spotlight), and ensure a cohesive design system.

*   **CSS Utility Classes:**  We'll create utility classes to easily apply styling to Primary CTAs and Secondary Buttons.  We will include hover/focus states for enhanced accessibility and responsiveness.

Here's the complete output:

**1. `globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-background: #1a1a2e; /* Deep Navy */
  --color-primary: #e94560; /* Coral */
  --color-secondary: #533483; /* Purple */
  --color-text-primary: #ffffff; /* White */
  --color-text-secondary: #d4d4d8; /* Light Gray */
  --border-radius: 8px;
}

[data-theme='dark'] {
  --color-background: #1a1a2e;
  --color-primary: #e94560;
  --color-secondary: #533483;
  --color-text-primary: #ffffff;
  --color-text-secondary: #d4d4d8;
}

body {
  font-family: sans-serif; /* Or your preferred font */
  background-color: var(--color-background);
  color: var(--color-text-primary);
  line-height: 1.6;
  margin: 0;
  padding: 0;
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth theme transitions */
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
  margin-bottom: 0.75rem;
  line-height: 1.2;
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: lighten(var(--color-primary), 10%); /* Example: Needs a CSS preprocessor */
  text-decoration: underline;
}

/* Shimmer animation */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* Spotlight animation */
@keyframes spotlight {
  0% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.1;
  }
}


/* Ensure forms look consistent */
input,
textarea,
select {
  background-color: #2d2d45;
  color: var(--color-text-primary);
  border: 1px solid #44445a;
  padding: 0.5rem;
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  width: 100%; /* Full width by default */
  box-sizing: border-box; /* Padding within the width */
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.3); /* Needs RGB version of primary color */
}

/* Accessibility improvements */
button:focus,
a:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

**2. `tailwind.config.js`**

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable dark mode based on class attribute
  theme: {
    extend: {
      colors: {
        'bespoke-navy': '#1a1a2e',
        'bespoke-coral': '#e94560',
        'bespoke-purple': '#533483',
        'bespoke-text-primary': '#ffffff',
        'bespoke-text-secondary': '#d4d4d8',
      },
      borderRadius: {
        'bespoke': '8px',
      },
      keyframes: {
        shimmer: {
          '0%': { 'backgroundPosition': '-200% 0' },
          '100%': { 'backgroundPosition': '200% 0' },
        },
        spotlight: {
          '0%': { opacity: '0.1' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '0.1' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
        spotlight: 'spotlight 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
```

**3. CSS Utility Classes (Example - Can be added to a dedicated CSS file or components)**

```css
/* Primary CTA Button */
.primary-cta {
  @apply bg-bespoke-coral text-bespoke-text-primary font-bold py-2 px-4 rounded-bespoke shadow-md transition-colors duration-300;
  border: 2px solid transparent;
  background-image: linear-gradient(to right, #e94560, #533483); /* Example Gradient */
  background-clip: padding-box;

}

.primary-cta:hover {
  @apply bg-bespoke-purple;
  border-color: #ffffff;
}

.primary-cta:focus {
  @apply outline-none ring-2 ring-bespoke-coral ring-opacity-50; /* Using Tailwind ring utilities */
}


/* Secondary Button */
.secondary-button {
  @apply bg-transparent text-bespoke-text-secondary font-medium py-2 px-4 rounded-bespoke border border-bespoke-text-secondary transition-colors duration-300;
}

.secondary-button:hover {
  @apply bg-bespoke-navy text-bespoke-text-primary border-bespoke-coral;
}

.secondary-button:focus {
  @apply outline-none ring-2 ring-bespoke-purple ring-opacity-50;
}
```

**Explanation and Justification:**

*   **Color Palette:** The `globals.css` file defines the core color variables using CSS custom properties (variables).  This allows for easy modification and theme switching.  Dark mode is explicitly supported using the `[data-theme='dark']` selector.  Tailwind is configured to use the same color names.
*   **Buttons:** The CSS classes `.primary-cta` and `.secondary-button` provide the square button styling with rounded corners. The primary CTA has a gradient border.  Hover and focus states are included for accessibility.
*   **Mobile-First:**  The padding and font sizes can be adjusted in the CSS for the buttons based on the specific needs of the design. The default styling of the form elements ensures they take up the full width on mobile.  Tailwind's responsive prefixes (e.g., `md:`, `lg:`) should be used for more complex layout adjustments.
*   **Animations:** The `shimmer` and `spotlight` keyframes are defined in `globals.css` and then referenced in the `animation` property within the Tailwind configuration.  You can use the `animate-shimmer` or `animate-spotlight` utility classes to apply these animations to elements.
*   **High Contrast:**  The chosen colors ensure good contrast between text and background.  You can use a contrast checker to verify compliance with accessibility guidelines.
*   **Tailwind Integration:** Tailwind's configuration is extended to include the custom colors and border radius, making them easily accessible within your components.
*   **`box-sizing: border-box`:** This is critical for making sure elements don't overflow their containers when padding and border are added.
*   **CSS Specificity:** The utility classes use `@apply` to leverage Tailwind's atomic classes. This ensures consistent styling and makes it easier to override styles when necessary.
*   **Accessibility:** `:focus` styles are crucial for keyboard navigation. The `outline` property is used to create a visible focus indicator.

**How to Use:**

1.  **Install Tailwind:**  Follow the Tailwind CSS installation guide for your project (using npm or yarn).
2.  **Configure Tailwind:** Create or modify your `tailwind.config.js` file and paste the provided configuration.
3.  **Create `globals.css`:** Create a `globals.css` file (or your preferred CSS entry point) and paste the provided content.  Import this file in your main application file (e.g., `_app.js` or `_app.tsx` in Next.js).
4.  **Apply Utility Classes:** Use the `.primary-cta` and `.secondary-button` classes directly in your HTML/JSX. For example:

```html
<button class="primary-cta">Get Started</button>
<button class="secondary-button">Learn More</button>
```

5. **Apply animation classes:**
```html
<div class="animate-shimmer">Shimmering Text</div>
<div class="animate-spotlight">Spotlighted Content</div>
```

**Important Considerations:**

*   **RGB Values:** The example `box-shadow` for the `focus` state uses `rgba()`.  You'll need to determine the RGB equivalent of your primary color and substitute it in the CSS.  You can use an online color converter.  Alternatively, use Tailwind's `ring` utilities, as shown in the example, which automatically handle opacity.
*   **CSS Preprocessor (Optional):** For more complex styling, consider using a CSS preprocessor like Sass or Less. This will allow you to use features like variables, mixins, and nesting, which can make your CSS more maintainable.  For example, the `lighten()` function is a Sass function.
*   **Theme Switching:**  You'll need JavaScript to toggle the `data-theme` attribute on the `html` element (or any parent element) to switch between light and dark modes.

This provides a robust foundation for your BespokeEthos.com design system!  Remember to iterate and refine this system as your project evolves. Good luck!
