import { Heading } from "@/common/heading";
import type { Metadata } from "next";
import { Section } from "@/common/layout";
import { PRICING, formatMoney } from "@/config/pricing";
import { Breadcrumbs } from "@/app/_components/seo/breadcrumbs";
import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/common/button";
import { ENTERPRISE_CONTACT, ENTERPRISE_OFFERINGS } from "../enterprise/data";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Pricing | Bespoke Ethos",
  description:
    "Simple, transparent pricing for small business: Cadence (Your AI Concierge), Consensus Engine (Your AI Strategy Sprint), Workflow Automation Setup, and Automation Rescue—with fixed scopes and 25% LGBTQ-owned discounts.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <main className="be-page-slate">
      <Section className="gap-5 -mt-14 md:gap-6 md:-mt-4">
        <OfferCatalogJsonLd />
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Pricing" }]} />

        {/* Hero Section */}
        <div className="page-hero-shell space-y-4">
          <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-surface-secondary dark:border-dark-border dark:bg-dark-surface-secondary be-image-frame shadow-xl pricing-hero-glow">
            <div className="relative h-40 w-full sm:h-48 lg:h-56">
              <Image
                src="/assets/generated/hero-pricing-desktop.webp"
                alt="Calm workspace with an automation dashboard open beside a notebook and coffee"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 960px"
                priority={true}
              />
            </div>
          </div>
          <Heading subtitle="Simple, transparent pricing built for founders" align="left">
            <h1>Pricing That Scales With You</h1>
          </Heading>
          <div className="pill-row flex-wrap gap-2">
            <span className="pill">Built for founders, not enterprise retainers</span>
            <span className="pill">NGLCC-certified • Catalant-vetted</span>
            <span className="pill">25% LGBTQ-owned discount</span>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="rounded-lg border border-border bg-surface-secondary/50 dark:border-dark-border dark:bg-dark-surface-secondary/50 p-5 md:p-6">
          <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
            No hidden fees. No long-term contracts. No surprises. Each service has a clear scope, fixed pricing, and a defined outcome. Pick what you need, get results fast, and scale up when you're ready.
          </p>
        </div>

        {/* Four Flagship Offerings */}
        <div className="rail-shell">
          <div className="rail-grid two gap-y-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Cadence - Most Popular */}
            <div className="ghost-card ghost-card--soft border-2 border-success shadow-[0_18px_46px_rgba(52,211,153,0.25)] lg:col-span-1 lg:row-span-2 flex flex-col">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-success/60 bg-success/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-success w-fit">
                <span className="h-2 w-2 rounded-full bg-success" />
                Most Popular
              </div>
              <h2 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">
                Cadence: Your AI Concierge
              </h2>
              <p className="mt-1 text-sm text-text-secondary dark:text-dark-text-secondary">
                Your always-on team member that handles inquiries, captures leads, and keeps customers happy.
              </p>
              <p className="mt-3 text-base font-semibold text-text-primary dark:text-dark-text-primary">
                From {formatMoney(PRICING.aiStrategySprint.setup)} setup + {formatMoney(PRICING.aiStrategySprint.monthly)}/mo
              </p>
              <ul className="mt-4 list-disc pl-5 text-sm text-text-secondary dark:text-dark-text-secondary space-y-2 flex-grow">
                <li>Relationship-first AI that feels like your best staffer</li>
                <li>Trained on your stories, FAQs, and escalation rules</li>
                <li>Lead capture, reporting, and guardrails included</li>
                <li>You stay in control—no black box</li>
              </ul>
              <div className="mt-5">
                <ButtonLink
                  href="/products/cadence"
                  unstyled
                  className="w-full inline-flex items-center justify-center rounded-full bg-success px-5 py-2.5 text-base font-bold text-black shadow-lg transition-transform duration-200 hover:scale-[1.05] active:scale-[0.98]"
                >
                  Explore Cadence
                </ButtonLink>
              </div>
              <div className="mt-3">
                <ButtonLink
                  href="/contact?service=cadence"
                  unstyled
                  className="w-full inline-flex items-center justify-center rounded-full border-2 border-success px-5 py-2 text-sm font-semibold text-success transition-colors duration-200 hover:bg-success/10"
                >
                  Schedule Demo
                </ButtonLink>
              </div>
            </div>

            {/* Workflow Automation Setup */}
            <div className="ghost-card">
              <div className="accent-bar mb-3">Automation</div>
              <h2 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">Workflow Automation Setup</h2>
              <p className="mt-2 text-sm text-text-secondary dark:text-dark-text-secondary">
                One painful task solved. Built end-to-end with rollback, audit trails, and no lock-in.
              </p>
              <p className="mt-3 text-base font-semibold text-text-primary dark:text-dark-text-primary">
                {formatMoney(PRICING.workflowAutomationSetup.setup)} setup + {formatMoney(PRICING.workflowAutomationSetup.monthly)}/mo
              </p>
              <ul className="mt-3 list-disc pl-5 text-sm text-text-secondary dark:text-dark-text-secondary space-y-2">
                <li>One-task automation with edge cases handled</li>
                <li>Approvals and exceptions stay intact</li>
                <li>You own the system—zero vendor lock-in</li>
              </ul>
              <div className="mt-4">
                <ButtonLink
                  href="/solutions/flowstack"
                  unstyled
                  className="inline-flex items-center justify-center rounded-full border border-accent-600 px-4 py-2 text-sm font-semibold text-accent-600 transition-colors duration-200 hover:bg-accent-600/10"
                >
                  Learn More
                </ButtonLink>
              </div>
            </div>

            {/* Consensus Engine */}
            <div className="ghost-card">
              <div className="accent-bar mb-3">Decisions</div>
              <h2 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">Consensus Engine: AI Strategy Sprint</h2>
              <p className="mt-2 text-sm text-text-secondary dark:text-dark-text-secondary">
                Four AI perspectives debate your question. One clear answer with sources and tradeoffs.
              </p>
              <p className="mt-3 text-base font-semibold text-text-primary dark:text-dark-text-primary">
                {formatMoney(PRICING.aiResearchAssistant.monthly)}/mo
              </p>
              <p className="text-xs text-text-secondary dark:text-dark-text-secondary">
                Up to {PRICING.aiResearchAssistant.queryLimit} briefs per month
              </p>
              <ul className="mt-3 list-disc pl-5 text-sm text-text-secondary dark:text-dark-text-secondary space-y-2">
                <li>Perfect for "Should we raise prices?" decisions</li>
                <li>Cited sources so you see the reasoning</li>
                <li>Tradeoffs laid out clearly</li>
              </ul>
              <div className="mt-4">
                <ButtonLink
                  href="/solutions/consensus-engine"
                  unstyled
                  className="inline-flex items-center justify-center rounded-full border border-accent-600 px-4 py-2 text-sm font-semibold text-accent-600 transition-colors duration-200 hover:bg-accent-600/10"
                >
                  Learn More
                </ButtonLink>
              </div>
            </div>

            {/* Automation Rescue */}
            <div className="ghost-card">
              <div className="accent-bar mb-3">Rescue</div>
              <h2 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">Automation Rescue</h2>
              <p className="mt-2 text-sm text-text-secondary dark:text-dark-text-secondary">
                Your broken automations fixed fast. Monitoring and alerts so failures don't stay silent.
              </p>
              <p className="mt-3 text-base font-semibold text-text-primary dark:text-dark-text-primary">
                Starting at {formatMoney(PRICING.automationRescue.standaloneALaCarte)}
              </p>
              <ul className="mt-3 list-disc pl-5 text-sm text-text-secondary dark:text-dark-text-secondary space-y-2">
                <li>Stabilizes brittle Zapier/Make/HubSpot flows</li>
                <li>Adds monitoring and alerts</li>
                <li>Ideal for duct-taped workflows</li>
              </ul>
              <div className="mt-4">
                <ButtonLink
                  href="/solutions/redbridging"
                  unstyled
                  className="inline-flex items-center justify-center rounded-full border border-accent-600 px-4 py-2 text-sm font-semibold text-accent-600 transition-colors duration-200 hover:bg-accent-600/10"
                >
                  Learn More
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="rounded-lg border border-border bg-surface-secondary/50 dark:border-dark-border dark:bg-dark-surface-secondary/50 p-5 md:p-6 space-y-4">
          <h2 className="text-base font-semibold text-text-primary dark:text-dark-text-primary">
            Common Questions
          </h2>
          
          <div className="space-y-3">
            <details className="group cursor-pointer">
              <summary className="font-semibold text-text-primary dark:text-dark-text-primary text-sm flex items-center gap-2">
                <span className="text-accent-600">+</span> Can I combine services?
              </summary>
              <p className="mt-2 text-sm text-text-secondary dark:text-dark-text-secondary ml-6">
                Yes. Many customers start with Cadence and add Automation Rescue when they need it. We'll work with you to find the right mix.
              </p>
            </details>

            <details className="group cursor-pointer">
              <summary className="font-semibold text-text-primary dark:text-dark-text-primary text-sm flex items-center gap-2">
                <span className="text-accent-600">+</span> What if I'm not sure which service I need?
              </summary>
              <p className="mt-2 text-sm text-text-secondary dark:text-dark-text-secondary ml-6">
                Book a free consultation. We'll ask about your biggest pain point and recommend what makes sense for your business.
              </p>
            </details>

            <details className="group cursor-pointer">
              <summary className="font-semibold text-text-primary dark:text-dark-text-primary text-sm flex items-center gap-2">
                <span className="text-accent-600">+</span> Do you offer discounts for nonprofits or LGBTQ-owned businesses?
              </summary>
              <p className="mt-2 text-sm text-text-secondary dark:text-dark-text-secondary ml-6">
                Yes. LGBTQ-owned businesses get 25% off. We also work with nonprofits on a case-by-case basis. Email us to discuss.
              </p>
            </details>

            <details className="group cursor-pointer">
              <summary className="font-semibold text-text-primary dark:text-dark-text-primary text-sm flex items-center gap-2">
                <span className="text-accent-600">+</span> Can I cancel anytime?
              </summary>
              <p className="mt-2 text-sm text-text-secondary dark:text-dark-text-secondary ml-6">
                Yes. No long-term contracts. You can cancel monthly services with 30 days' notice. Setup fees are non-refundable but cover the work done.
              </p>
            </details>

            <details className="group cursor-pointer">
              <summary className="font-semibold text-text-primary dark:text-dark-text-primary text-sm flex items-center gap-2">
                <span className="text-accent-600">+</span> What about enterprise or custom needs?
              </summary>
              <p className="mt-2 text-sm text-text-secondary dark:text-dark-text-secondary ml-6">
                We work with larger teams and complex systems. See the Enterprise section below or email us directly.
              </p>
            </details>
          </div>
        </div>

        {/* Enterprise Section */}
        <div className="rail-shell">
          <div className="rail-grid two gap-y-4">
            <div className="ghost-card ghost-card--soft w-full">
              <h2 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">
                Enterprise & Complex Systems
              </h2>
              <p className="mt-2 text-sm text-text-secondary dark:text-dark-text-secondary">
                For compliance-heavy orgs, agencies, or teams with legacy systems, we extend our proven patterns into your infrastructure.
              </p>
              <ul className="mt-4 list-disc pl-5 text-sm text-text-secondary dark:text-dark-text-secondary space-y-2">
                {ENTERPRISE_OFFERINGS.map((item) => (
                  <li key={item.title}>{item.title}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-text-secondary dark:text-dark-text-secondary">
                <strong>Ready to talk?</strong> Reach out at{" "}
                <Link href={`mailto:${ENTERPRISE_CONTACT}`} className="text-accent-600 hover:underline font-semibold">
                  {ENTERPRISE_CONTACT}
                </Link>{" "}
                with your requirements.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-lg border border-border bg-surface-secondary/50 dark:border-dark-border dark:bg-dark-surface-secondary/50 p-5 md:p-6">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <div>
              <h3 className="font-semibold text-text-primary dark:text-dark-text-primary">
                Ready to get started?
              </h3>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary mt-1">
                Book a free 15-minute consultation. No sales pitch—just honest advice.
              </p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <ButtonLink
                href="/contact?service=consultation"
                unstyled
                className="inline-flex items-center justify-center rounded-full bg-accent-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-transform duration-200 hover:scale-[1.05] active:scale-[0.98] whitespace-nowrap"
              >
                Book Free Consultation
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap gap-4 text-sm">
          <Link className="text-accent-600 hover:underline font-semibold" href="/contact">
            Contact us
          </Link>
          <Link className="text-accent-600 hover:underline font-semibold" href="/contact?service=llm-setups">
            Book a free consultation
          </Link>
          <Link className="text-accent-600 hover:underline font-semibold" href="/faq">
            View FAQ
          </Link>
        </div>
      </Section>
    </main>
  );
}

function OfferCatalogJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const currency = "USD";
  const json = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Bespoke Ethos Pricing",
    url: `${base}/pricing`,
    itemListElement: [
      {
        "@type": "Offer",
        url: `${base}/solutions/flowstack`,
        itemOffered: { "@type": "Service", name: "Workflow Automation Setup" },
        priceCurrency: currency,
        price: PRICING.workflowAutomationSetup.setup,
        priceSpecification: {
          "@type": "PriceSpecification",
          name: "Setup + Monthly",
          priceCurrency: currency,
          price: PRICING.workflowAutomationSetup.setup,
          eligibleQuantity: 1,
        },
      },
      {
        "@type": "Offer",
        url: `${base}/solutions/consensus-engine`,
        itemOffered: { "@type": "Service", name: "Consensus Engine: Your AI Strategy Sprint" },
        priceCurrency: currency,
        priceSpecification: {
          "@type": "PriceSpecification",
          name: "Monthly",
          priceCurrency: currency,
          price: PRICING.aiResearchAssistant.monthly,
        },
      },
      {
        "@type": "Offer",
        url: `${base}/products/cadence`,
        itemOffered: { "@type": "Service", name: "Cadence: Your AI Concierge" },
        priceCurrency: currency,
        priceSpecification: {
          "@type": "PriceSpecification",
          name: "Setup + Monthly",
          priceCurrency: currency,
          price: PRICING.aiStrategySprint.setup,
        },
      },
      {
        "@type": "Offer",
        url: `${base}/solutions/redbridging`,
        itemOffered: { "@type": "Service", name: "Automation Rescue" },
        priceCurrency: currency,
        priceSpecification: {
          "@type": "PriceSpecification",
          name: "Standalone",
          priceCurrency: currency,
          minPrice: PRICING.automationRescue.standaloneLow,
          maxPrice: PRICING.automationRescue.standaloneHigh,
        },
      },
    ],
  } as const;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
