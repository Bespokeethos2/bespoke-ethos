import type { Config } from "tailwindcss";

import typography from "@tailwindcss/typography";
import radix from "tailwindcss-radix";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: "var(--font-sans)",
      mono: "var(--font-mono)",
    },
    fontSize: {
      // Enhanced font sizes with optimized line heights for readability
      xs: ["0.75rem", { lineHeight: "1.5" }], // 12px
      sm: ["0.875rem", { lineHeight: "1.5" }], // 14px
      base: ["1rem", { lineHeight: "1.6" }], // 16px - optimal for body text
      lg: ["1.125rem", { lineHeight: "1.6" }], // 18px
      xl: ["1.25rem", { lineHeight: "1.6" }], // 20px
      "2xl": ["1.5rem", { lineHeight: "1.4" }], // 24px
      "3xl": ["1.875rem", { lineHeight: "1.3" }], // 30px
      "4xl": ["2.25rem", { lineHeight: "1.2" }], // 36px
      "5xl": ["3rem", { lineHeight: "1.1" }], // 48px
      "6xl": ["3.75rem", { lineHeight: "1.1" }], // 60px
      "7xl": ["4.5rem", { lineHeight: "1" }], // 72px
      "8xl": ["6rem", { lineHeight: "1" }], // 96px
      "9xl": ["8rem", { lineHeight: "1" }], // 128px
    },
    extend: {
      colors: {
        // We extend the colors, we do NOT overwrite the defaults.
        // Re-adding the semantic tokens the previous agent wanted, but SAFELY.
        accent: {
          50: "rgba(var(--accent-rgb-50), <alpha-value>)",
          100: "rgba(var(--accent-rgb-100), <alpha-value>)",
          200: "rgba(var(--accent-rgb-200), <alpha-value>)",
          300: "rgba(var(--accent-rgb-300), <alpha-value>)",
          400: "rgba(var(--accent-rgb-400), <alpha-value>)",
          500: "rgba(var(--accent-rgb-500), <alpha-value>)",
          600: "rgba(var(--accent-rgb-600), <alpha-value>)",
          700: "rgba(var(--accent-rgb-700), <alpha-value>)",
          800: "rgba(var(--accent-rgb-800), <alpha-value>)",
          900: "rgba(var(--accent-rgb-900), <alpha-value>)",
          950: "rgba(var(--accent-rgb-950), <alpha-value>)",
        },
        grayscale: {
          50: "rgba(var(--grayscale-rgb-50), <alpha-value>)",
          100: "rgba(var(--grayscale-rgb-100), <alpha-value>)",
          200: "rgba(var(--grayscale-rgb-200), <alpha-value>)",
          300: "rgba(var(--grayscale-rgb-300), <alpha-value>)",
          400: "rgba(var(--grayscale-rgb-400), <alpha-value>)",
          500: "rgba(var(--grayscale-rgb-500), <alpha-value>)",
          600: "rgba(var(--grayscale-rgb-600), <alpha-value>)",
          700: "rgba(var(--grayscale-rgb-700), <alpha-value>)",
          800: "rgba(var(--grayscale-rgb-800), <alpha-value>)",
          900: "rgba(var(--grayscale-rgb-900), <alpha-value>)",
          950: "rgba(var(--grayscale-rgb-950), <alpha-value>)",
        },
        "text-on-accent": {
          primary: "var(--text-on-accent, var(--grayscale-50))",
        },
        // Semantic aliases
        dark: {
          text: {
            primary: "rgba(var(--color-text-primary), <alpha-value>)",
            secondary: "rgba(var(--color-text-secondary), <alpha-value>)",
            tertiary: "rgba(var(--color-text-tertiary), <alpha-value>)",
          },
          surface: {
            primary: "rgba(var(--color-background), <alpha-value>)",
            secondary: "rgba(var(--grayscale-rgb-900), <alpha-value>)",
            tertiary: "rgba(var(--grayscale-rgb-800), <alpha-value>)",
          },
          border: {
            DEFAULT: "rgba(var(--grayscale-rgb-800), <alpha-value>)",
          },
          control: {
            DEFAULT: "rgba(var(--accent-rgb-500), <alpha-value>)",
          },
        },
        text: {
          primary: "rgba(var(--color-text-primary), <alpha-value>)",
          secondary: "rgba(var(--color-text-secondary), <alpha-value>)",
          tertiary: "rgba(var(--color-text-tertiary), <alpha-value>)",
        },
        surface: {
          primary: "rgba(var(--color-background), <alpha-value>)",
          secondary: "rgba(var(--grayscale-rgb-100), <alpha-value>)",
          tertiary: "rgba(var(--grayscale-rgb-200), <alpha-value>)",
        },

        // Shadcn Base Colors (Added to fix border-border build error)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      maxWidth: {
        prose: "75ch",
        "readable": "65ch", // Optimal line length for body text
      },
      letterSpacing: {
        tightest: "-0.05em",
        tighter: "-0.025em",
        tight: "-0.015em",
        normal: "0",
        wide: "0.01em",
        wider: "0.025em",
        widest: "0.05em",
      },
      gridTemplateColumns: {
        header: "1fr max-content 1fr",
      },
      boxShadow: {
        neon: "0 0 2px 2px var(--tw-shadow), 0 0 6px 3px var(--tw-ring-offset-shadow), 0 0 8px 4px var(--tw-ring-shadow)",
        tactile: "0 1px 1px rgba(0,0,0,0.02), 0 2px 4px rgba(0,0,0,0.02), 0 4px 8px rgba(0,0,0,0.02), 0 12px 24px -6px rgba(0,0,0,0.03)",
        "tactile-hover": "0 2px 4px rgba(0,0,0,0.03), 0 8px 16px rgba(0,0,0,0.04), 0 24px 48px -8px rgba(0,0,0,0.06), 0 0 30px -5px rgba(249, 115, 22, 0.4)",
      },
      zIndex: {
        modal: "9999",
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: "0", transform: "translateX(200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        enterFromLeft: {
          from: { opacity: "0", transform: "translateX(-200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        exitToRight: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(200px)" },
        },
        exitToLeft: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(-200px)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
          to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        slideDown: {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
        pulse: {
          "50%": {
            opacity: "0.5",
          },
        },
        "border-beam": {
          "100%": {
            offsetDistance: "100%",
          },
        },
      },
      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        scaleIn: "scaleIn 200ms ease",
        scaleOut: "scaleOut 200ms ease",
        fadeIn: "fadeIn 200ms ease",
        fadeOut: "fadeOut 200ms ease",
        enterFromLeft: "enterFromLeft 250ms ease",
        enterFromRight: "enterFromRight 250ms ease",
        exitToLeft: "exitToLeft 250ms ease",
        exitToRight: "exitToRight 250ms ease",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
    },
  },
  plugins: [typography, radix],
};

export default config;
