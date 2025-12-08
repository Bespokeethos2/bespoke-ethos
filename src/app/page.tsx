import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";

import { FounderStory } from "./_sections/founder-story";
import { TrustCredentials } from "./_sections/trust-credentials";
import { Accordion } from "./_sections/accordion-faq";
import { ProductQuadrant } from "@/components/product-quadrant";
import { ButtonLink } from "@/common/button";
import { siteUrl } from "@/lib/constants";

// New "Novel" Components
import { TestimonialMarquee } from "@/components/ui/testimonial-marquee";
import { CapabilitiesBento } from "@/components/ui/capabilities-bento";

import { ConversionOptimizedHero } from "@/components/conversion-optimized-hero";

const ConsensusEngineCard = dynamic(
  () =>
    import("@/components/ConsensusEngineCard").then((m) => ({
      default: m.ConsensusEngineCard,
    })),
  { loading: () => <ConsensusEngineCardSkeleton /> }
);

const LGBTQDiscountModalTrigger = dynamic(
  () =>
    import("./_components/lgbtq-discount-modal-trigger").then((m) => ({
      default: m.LGBTQDiscountModalTrigger,
    })),
  { loading: () => <DiscountButtonFallback /> }
);

export const revalidate = 1800;

const homeFaqItems = [
  {
    question: "Who is Bespoke Ethos actually for?",
    answer:
      'Small business founders and lean teams who are in “survival mode” and can’t afford a McKinsey-style engagement. If you are drowning in busywork, have broken automations, or know you need AI but don’t know where to start, you are the target user.',
  },
  {
    question: "What problems do you actually solve?",
    answer:
      "We take the busywork-you keep control. That means: rescuing brittle Zapier/Make automations with Automation Rescue, shipping Workflow Automation Setup with approvals and rollback, launching Cadence  Your AI Concierge for customer conversations, and running Consensus Engine  Your AI Strategy Sprint when you need a clear, evidence-backed answer.",
  },
  {
    question: "How does the 25% LGBTQ+ discount work?",
    answer:
      "If you're an LGBTQ-owned business, you get 25% off all upfront project fees on approved scopes. Monthly subscriptions are billed at standard rates, and we’ll confirm eligibility on the intake call—no hoops or performative rainbow-washing.",
  },
] as const;

export const metadata: Metadata = {
  title: "AI Automation Consulting for Small Businesses in Cleveland | Bespoke Ethos",
  description:
    "AI consulting and workflow automation for small businesses. Bespoke Ethos helps founders in Cleveland and beyond fix broken Zapier/Make automations, design AI workflows, and ship fixed-price projects starting at $1,497.",
  keywords: [
    "AI consulting",
    "AI consulting for small business",
    "AI automation consulting",
    "workflow automation consulting",
    "small business automation",
    "Zapier consultant",
    "Make.com consultant",
    "Cleveland AI consulting",
    "small business AI strategy",
    "AI implementation for small business",
  ],
  alternates: { canonical: "/" },
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
    url: siteUrl,
    siteName: "Bespoke Ethos",
    locale: "en_US",
    title: "AI Automation Consulting for Small Businesses in Cleveland | Bespoke Ethos",
    description:
      "AI consulting and workflow automation for small businesses. Get help fixing Zapier/Make automations, designing AI workflows, and launching fixed-price automation projects from $1,497.",
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
    title: "AI Automation Consulting for Small Businesses | Bespoke Ethos",
    description: "Cleveland-based AI consulting. Fix broken automations, design AI workflows, ship fixed-price projects from $1,497.",
    images: [`${siteUrl}/assets/generated/logo-square-dark.png`],
  },
};

function HeroSectionSkeleton() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fff7ec] via-white to-[#f5f3ff]" aria-hidden="true">
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="h-[480px] rounded-3xl border border-orange-100/60 bg-white/60 shadow-inner animate-pulse" />
      </div>
    </section>
  );
}

function ConsensusEngineCardSkeleton() {
  return (
    <div className="mx-auto my-20 max-w-5xl rounded-3xl border border-border/50 bg-surface-secondary/60 p-10 shadow-lg animate-pulse dark:border-dark-border/40 dark:bg-dark-surface-secondary/50">
      <div className="h-10 w-40 rounded-full bg-border/80 dark:bg-dark-border/60" />
      <div className="mt-6 h-[260px] rounded-2xl bg-white/70 dark:bg-dark-surface-primary/60" />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="h-32 rounded-2xl bg-white/90 dark:bg-dark-surface-secondary/70" />
        <div className="h-32 rounded-2xl bg-white/90 dark:bg-dark-surface-secondary/70" />
        <div className="h-32 rounded-2xl bg-white/90 dark:bg-dark-surface-secondary/70" />
      </div>
    </div>
  );
}

function DiscountButtonFallback() {
  return (
    <Link
      href="/lgbtq-discount"
      className="relative inline-flex items-center gap-2 rounded-full border border-accent-400 bg-white px-5 py-2 text-sm font-semibold text-accent-600 shadow-sm transition hover:bg-accent-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
    >
      Claim LGBTQ+ discount
    </Link>
  );
}

export default function HomePage() {
  return (
    <main aria-label="Bespoke Ethos homepage" className="bg-[#faf9f6]">
      <HomePageJsonLd />
      <HomeFaqJsonLd />
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <SpeakableJsonLd />

      {/* 1. Hero: Workshop Console */}
      <ConversionOptimizedHero />

      {/* 1a. SEO-aligned intro */}
      <section className="py-12 md:py-16 bg-linear-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-hero-accent leading-tight tracking-tight">
            AI consulting and workflow automation for small businesses.
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Bespoke Ethos is a Cleveland-based AI consulting firm led by a former AI trainer. We help small
            businesses escape broken Zapier and Make.com workflows, design practical AI automations, and launch fixed-price projects
            starting at <span className="font-semibold text-orange-600">$1,497</span>.
          </p>
        </div>
      </section>
      
      {/* 2. Social Proof: Infinite Marquee (Replaces static strip) */}
      <TestimonialMarquee />

      {/* 3. Capabilities: Bento Grid (Replaces list) */}
      <CapabilitiesBento />

      {/* 4. Pricing: Straight Talk */}
      <section className="home-section home-section--impact py-24" aria-labelledby="pricing-transparent-heading">
        <div className="home-section-inner home-section-grid">
          <div className="space-y-6">
            <div className="inline-block">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full">Straight Talk on Pricing</p>
            </div>
            <h2 id="pricing-transparent-heading" className="text-3xl md:text-4xl font-bold font-hero-accent text-slate-900 leading-tight tracking-tight">
              Enterprise consultants charge $200-450/hr and drag projects out for months. <br /> We deliver fixed-scope builds starting at <span className="text-orange-600">$1,497</span>—or $1,122 for LGBTQ-owned businesses.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              No hourly billing surprises. No scope creep. Just results.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <ButtonLink intent="primary" href="/pricing">
                View Pricing
              </ButtonLink>
              <ButtonLink intent="secondary" href="/contact?service=llm-setups">
                Ask about your budget
              </ButtonLink>
            </div>
          </div>
          <div className="be-section-card space-y-5 p-8 border-2 border-orange-100 bg-linear-to-br from-white to-orange-50 shadow-xl rounded-2xl">
            <h3 className="text-lg font-bold text-slate-900 border-b-2 border-orange-200 pb-3">What you get</h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold text-lg mt-0.5 shrink-0">✓</span>
                <span>Decision Brief on your biggest question before you commit</span>
              </li>
              <li className="flex items-start gap-3">
                 <span className="text-orange-500 font-bold text-lg mt-0.5 shrink-0">✓</span>
                 <span>Static/serverless builds with approvals, rollback, and docs</span>
              </li>
              <li className="flex items-start gap-3">
                 <span className="text-orange-500 font-bold text-lg mt-0.5 shrink-0">✓</span>
                 <span>No enterprise fluff; founder answers every request</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* 5. Productized Offers */}
      <section className="home-section home-section--white py-24 bg-linear-to-b from-slate-50 to-white" aria-labelledby="productized-heading">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
             <div className="space-y-6">
                <div className="inline-block">
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full">Productized AI</p>
                </div>
                <h2 id="productized-heading" className="text-3xl md:text-4xl font-bold font-hero-accent text-slate-900 leading-tight tracking-tight">
                  Clear scopes, fixed pricing, 90-day coverage.
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                  Every build ships with approvals and audit trails intact. You get ownership, documentation, and founder-friendly pricing.
                </p>
                <div className="pt-4">
                  <ButtonLink intent="primary" href="/contact?service=productized">
                    Claim your slot
                  </ButtonLink>
                </div>
             </div>
             <div className="flex justify-center lg:justify-end">
                <ProductQuadrant />
             </div>
          </div>
        </div>
      </section>

      {/* 6. Consensus Engine Highlight */}
      <section className="py-24 bg-linear-to-b from-white via-slate-50 to-white" aria-labelledby="consensus-highlight-heading">
        <div className="container mx-auto px-4">
           <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 id="consensus-highlight-heading" className="text-3xl md:text-4xl font-bold font-hero-accent text-slate-900 mb-4 tracking-tight leading-tight">
                A research brief, not a mystery answer.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Consensus Engine turns one big strategic question into a calm, cited brief. See it in action with our LGBTQ Social Calendar.
              </p>
           </div>
           <ConsensusEngineCard />
        </div>
      </section>

      {/* 7. Founder Story & Trust */}
      <FounderStory />
      <TrustCredentials />

      {/* 8. FAQ */}
      <section className="home-section home-section--soft py-24" aria-labelledby="home-faq-heading">
        <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <h2 id="home-faq-heading" className="text-3xl font-bold text-slate-900 font-hero-accent">
                Quick answers for busy founders
              </h2>
            </div>
            <Accordion
              items={homeFaqItems.map((item) => ({
                _title: item.question,
                answer: item.answer,
              }))}
            />
            <p className="mt-8 text-center text-sm text-slate-500">
              Want more details? Our full <Link href="/faq" className="underline text-orange-600 hover:text-orange-700">FAQ</Link> page covers everything.
            </p>
        </div>
      </section>

      {/* 9. LGBTQ Banner */}
      <section className="py-24 bg-linear-to-br from-slate-800 to-slate-900 text-white" aria-labelledby="lgbtq-banner-heading">
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                  <h2 id="lgbtq-banner-heading" className="text-3xl font-bold font-hero-accent text-white">
                    A helping hand for founders
                  </h2>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    We know many founders are tired and under-resourced. If these tools would move the needle but the budget is tight, reach out—we keep a 25% discount for LGBTQ-owned businesses and need-based grant slots.
                  </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:justify-end">
                <LGBTQDiscountModalTrigger />
                <ButtonLink intent="secondary" href="/contact" className="border-slate-400 text-white hover:bg-slate-700 hover:text-white">
                  Tell me what you&apos;re building
                </ButtonLink>
              </div>
            </div>
        </div>
      </section>
    </main>
  );
}

function HomePageJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${base}/#homepage`,
    url: base,
    name: "AI Automation Consulting for Small Businesses in Cleveland | Bespoke Ethos",
    isPartOf: {
      "@id": `${base}/#website`,
    },
    about: {
      "@id": `${base}/#organization`,
    },
  } as const;

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

function HomeFaqJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    mainEntityOfPage: `${base}/`,
  } as const;

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

function OrganizationJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${base}/#organization`,
    name: "Bespoke Ethos",
    alternateName: "Gaymensfieldguide DBA Bespoke Ethos",
    url: base,
    logo: {
      "@type": "ImageObject",
      url: `${base}/assets/generated/logo-square-dark.png`,
      width: 512,
      height: 512,
    },
    description: "AI consulting and workflow automation for small businesses. Cleveland-based firm helping founders fix broken automations and ship fixed-price AI projects.",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 41.4993,
        longitude: -81.6944,
      },
      geoRadius: "500 mi",
    },
    sameAs: [
      "https://www.linkedin.com/company/bespoke-ethos",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "contact@bespokeethos.com",
      url: `${base}/contact`,
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

function WebSiteJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${base}/#website`,
    url: base,
    name: "Bespoke Ethos",
    description: "AI consulting and workflow automation for small businesses",
    publisher: {
      "@id": `${base}/#organization`,
    },
    inLanguage: "en-US",
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

function SpeakableJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".home-section h2", "main > section:first-of-type p"],
    },
    url: base,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
