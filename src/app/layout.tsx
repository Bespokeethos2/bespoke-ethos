import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Newsletter } from "./_sections/newsletter";
import { Providers } from "./providers";
import { OrganizationJsonLd } from "./_components/seo/organization-jsonld";
import { WebsiteJsonLd } from "./_components/seo/website-jsonld";
import { LocalBusinessJsonLd } from "./_components/seo/localbusiness-jsonld";
import { ClientComponents } from "@/components/ClientComponents";

const rawSkipSetting = (process.env.SKIP_REMOTE_DATA ?? "").trim();
const SKIP_REMOTE_DATA = rawSkipSetting ? rawSkipSetting !== "0" : true;

const DEFAULT_SITE_URL = "https://www.bespokeethos.com";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-K23RTYY94F";

const metadataBaseUrl = (() => {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL;

  if (raw) {
    try {
      return new URL(raw.startsWith("http") ? raw : `https://${raw}`);
    } catch {
      // fall through to default
    }
  }

  return new URL(DEFAULT_SITE_URL);
})();

const FALLBACK_METADATA = {
  sitename: "Bespoke Ethos",
  titleTemplate: "%s | Bespoke Ethos",
  defaultTitle:
    "BespokeEthos AI Consulting - Ship Working Code, Not Slide Decks | Fixed-Price Cleveland AI Automation",
  defaultDescription:
    "We Take the Busywork—you Keep Control. Bespoke Ethos builds small-business AI automation in Cleveland, OH, including AI Strategy Sprint™, our flagship premium chatbot, plus a standing 25% discount on upfront project fees for LGBTQ-owned businesses. Email contact@bespokeethos.com or visit our FAQ and contact pages to get started.",
  favicon: {
    url: "/assets/favicon.png",
    mimeType: "image/png",
  },
  ogImageUrl: "/assets/generated/logo-square-dark.png",
  appleTouchIcon: "/apple-touch-icon.png",
  manifest: "/site.webmanifest",
};

// Inter for body text - optimized weights for performance
// Only load weights actually used: 400 (body), 500 (medium), 600 (semibold)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "sans-serif",
  ],
  preload: true,
});

// Playfair Display as accent / hero font (serif)
// Only load weights actually used: 400 (regular), 700 (bold)
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-accent",
  weight: ["400", "700"],
  preload: true,
});

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: {
      default: FALLBACK_METADATA.defaultTitle,
      template: FALLBACK_METADATA.titleTemplate,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    applicationName: FALLBACK_METADATA.sitename,
    metadataBase: metadataBaseUrl,
    description: FALLBACK_METADATA.defaultDescription,
    icons: [
      {
        url: FALLBACK_METADATA.favicon.url,
        rel: "icon",
        type: FALLBACK_METADATA.favicon.mimeType,
      },
      { url: FALLBACK_METADATA.appleTouchIcon, rel: "apple-touch-icon" },
    ],
    manifest: FALLBACK_METADATA.manifest,
    // Note: canonical should be set per-page, not globally
    // alternates: {
    //   canonical: DEFAULT_SITE_URL,
    // },
    openGraph: {
      type: "website",
      title: FALLBACK_METADATA.defaultTitle,
      description: FALLBACK_METADATA.defaultDescription,
      url: DEFAULT_SITE_URL,
      locale: "en_US",
      images: [
        {
          url: FALLBACK_METADATA.ogImageUrl,
          width: 1200,
          height: 630,
          alt: "Bespoke Ethos - Cleveland AI automation for small business",
        },
      ],
      siteName: FALLBACK_METADATA.sitename,
    },
    twitter: {
      card: "summary_large_image",
      title: FALLBACK_METADATA.defaultTitle,
      description: FALLBACK_METADATA.defaultDescription,
      images: [FALLBACK_METADATA.ogImageUrl],
      site: "@bespokeethos",
      creator: "@bespokeethos",
    },
    keywords: [
      "AI consulting Cleveland",
      "small business automation",
      "AI strategy sprint",
      "AI workflow automation",
      "intelligent automation",
      "Zapier alternative",
      "Make.com consultant",
      "chatbot for small business",
      "LGBTQ owned business Cleveland",
      "NGLCC certified business",
      "Cleveland AI consultant",
      "fixed-price AI consulting",
    ],
  };
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Allow pinch-to-zoom for accessibility compliance (WCAG 1.4.4)
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* Preconnect to external resources for faster LCP */}
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google tag (gtag.js) */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </head>
      <body
        className={`min-h-svh max-w-[100vw] bg-surface-primary text-text-primary dark:bg-dark-surface-primary dark:text-dark-text-primary ${inter.variable} ${playfair.variable} font-sans`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Providers>
          <Header />
          <main id="main-content" className="min-h-[calc(100svh-var(--header-height))]">
            {children}
          </main>
          <Newsletter />
          <Footer />
          <OrganizationJsonLd />
          <WebsiteJsonLd />
          <LocalBusinessJsonLd />
          <ClientComponents />
        </Providers>
      </body>
    </html>
  );
}
