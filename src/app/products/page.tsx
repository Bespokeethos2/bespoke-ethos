import type { Metadata } from "next";

import { Section } from "@/common/layout";
import { Heading } from "@/common/heading";
import { Breadcrumbs } from "@/app/_components/seo/breadcrumbs";
import { StackedProductCards } from "@/components/stacked-product-cards";
import { OrganizationJsonLd } from '@/app/_components/seo/organization-jsonld';


export const revalidate = 1800;

const siteUrl = "https://www.bespokeethos.com";

export const metadata: Metadata = {
  title: "Small Business AI Products | Bespoke Ethos",
  description:
    "Cadence, Consensus Engine, Workflow Automation Setup, and Automation Rescue—our flagship small-business AI products for chat, research sprints, automation, and reliability.",
  keywords: [
    "AI chatbot for small business",
    "workflow automation software",
    "AI strategy tool",
    "Zapier alternative",
    "Make.com automation",
    "AI concierge service",
    "business process automation",
    "small business AI tools",
    "workflow management solution",
    "AI-powered customer service",
  ],
  alternates: { canonical: "/products" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/products`,
    siteName: "Bespoke Ethos",
    locale: "en_US",
    title: "AI Products for Small Business | Bespoke Ethos",
    description:
      "Cadence, Consensus Engine, Workflow Automation Setup, and Automation Rescue—flagship tools for small business founders.",
    images: [
      {
        url: `${siteUrl}/assets/generated/logo-square-dark.png`,
        width: 512,
        height: 512,
        alt: "Bespoke Ethos orange square logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bespokeethos",
    creator: "@bespokeethos",
    title: "AI Products for Small Business | Bespoke Ethos",
    description: "Cadence, Consensus Engine, Automation Setup, Automation Rescue—AI tools for founders.",
    images: [`${siteUrl}/assets/generated/logo-square-dark.png`],
  },
};

export default function ProductsPage() {
  return (
    <main className="be-page-slate">
      <OrganizationJsonLd />
      <Section className="gap-5 -mt-14 md:gap-6 md:-mt-4">
        <div className="be-section-card space-y-6 page-hero-shell">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Products" },
            ]}
          />
          <Heading subtitle="Flagship tools for founders in the thick of it" align="left">
            <h1>Small Business Solutions</h1>
          </Heading>
          <div className="pill-row">
            <span className="pill">Cadence  Your AI Concierge</span>
            <span className="pill">Workflow Automation Setup</span>
            <span className="pill">Consensus Engine  Your AI Strategy Sprint</span>
            <span className="pill">Automation Rescue</span>
          </div>
          <p className="max-w-2xl text-sm text-text-secondary dark:text-dark-text-secondary">
            These are the tools we reach for most often when a small-business founder asks for help: Cadence for
            relationship-first chat, Workflow Automation Setup for auditable automation, Consensus Engine for big decisions, and
            Automation Rescue for keeping critical workflows from falling apart.
          </p>
          <div className="rail-shell">
            <StackedProductCards />
          </div>
        </div>
      </Section>
    </main>
  );
}
