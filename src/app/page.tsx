import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";

import { FounderStory } from "./_sections/founder-story";
import { TrustCredentials } from "./_sections/trust-credentials";
import { Accordion } from "./_sections/accordion-faq";
import { StackedProductCards } from "@/components/stacked-product-cards";
import { ButtonLink } from "@/common/button";

// New "Novel" Components
import { TestimonialMarquee } from "@/components/ui/testimonial-marquee";
import { CapabilitiesBento } from "@/components/ui/capabilities-bento";

const ConversionOptimizedHero = dynamic(
  () =>
    import("@/components/conversion-optimized-hero").then((m) => ({
      default: m.ConversionOptimizedHero,
    })),
  { loading: () => <HeroSectionSkeleton /> }
);

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
  title: "NO RESOURCES. NO PROBLEM. JUST YOU AND AI. | Bespoke Ethos",
  description:
    "Bespoke Ethos builds cognitive-prosthetic AI automation for small business founders who can't afford enterprise consulting. Fixed scopes from $997, Workflow Automation Setup, Cadence  Your AI Concierge, Consensus Engine  Your AI Strategy Sprint (including the Cleveland Consensus Calendar), and Automation Rescue for Zapier/Make-all with human-in-the-loop approvals.",
  keywords: [
    "AI consulting Cleveland",
    "Cleveland small business AI",
    "workflow automation setup",
    "Zapier automation rescue",
    "Make.com automation rescue",
    "Cadence AI concierge",
    "Consensus Engine AI Strategy Sprint",
    "Consensus Calendar Cleveland LGBTQ events",
    "LGBTQ owned AI consulting",
    "NGLCC certified AI firm",
    "tool and die AI consultant",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.bespokeethos.com",
    title: "NO RESOURCES. NO PROBLEM. JUST YOU AND AI. | Bespoke Ethos",
    description:
      "AI for founders who can’t afford McKinsey. Bespoke Ethos ships Workflow Automation SetupT, AI Strategy Sprint chat concierge, Decision Briefs, and Automation Rescue so you get reliable automation without losing control.",
    images: [
      {
        url: "/assets/generated/logo-square-dark.png",
        width: 1200,
        height: 630,
        alt: "Bespoke Ethos orange square logo",
      },
    ],
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
      className="relative inline-flex items-center gap-2 rounded-full border border-accent-400 bg-white px-5 py-2 text-sm font-semibold text-accent-600 shadow-sm transition hover:bg-accent-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
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

      {/* 1. Hero: Workshop Console */}
      <ConversionOptimizedHero />
      
      {/* 2. Social Proof: Infinite Marquee (Replaces static strip) */}
      <TestimonialMarquee />

      {/* 3. Capabilities: Bento Grid (Replaces list) */}
      <CapabilitiesBento />

      {/* 4. Pricing: Straight Talk */}
      <section className="home-section home-section--impact py-24" aria-labelledby="pricing-transparent-heading">
        <div className="home-section-inner home-section-grid">
          <div className="space-y-6">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600">Straight Talk on Pricing</p>
            <h2 id="pricing-transparent-heading" className="text-3xl md:text-4xl font-bold font-hero-accent text-slate-900 leading-tight">
              Competitors charge $200-350/hr. <br /> We start at <span className="text-orange-600">$997</span>.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Because we remember being broke. Fixed scopes, clear deliverables, and a 25% LGBTQ-owned discount on upfront project fees.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <ButtonLink intent="primary" href="/pricing">
                View Pricing
              </ButtonLink>
              <ButtonLink intent="secondary" href="/contact?service=llm-setups">
                Ask about your budget
              </ButtonLink>
            </div>
          </div>
          <div className="be-section-card space-y-4 p-8">
            <h3 className="text-xl font-bold text-slate-900">What you get</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">✓</span>
                Decision Brief on your biggest question before you commit
              </li>
              <li className="flex items-start gap-3">
                 <span className="text-orange-500 mt-1">✓</span>
                 Static/serverless builds with approvals, rollback, and docs
              </li>
              <li className="flex items-start gap-3">
                 <span className="text-orange-500 mt-1">✓</span>
                 No enterprise fluff; founder answers every request
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Productized Offers */}
      <section className="home-section home-section--white py-24" aria-labelledby="productized-heading">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
             <div className="space-y-6">
                <p className="text-sm font-bold uppercase tracking-widest text-orange-600">Productized AI</p>
                <h2 id="productized-heading" className="text-3xl md:text-4xl font-bold font-hero-accent text-slate-900 leading-tight">
                  Clear scopes, fixed pricing, 90-day coverage.
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Every build ships with approvals and audit trails intact. You get ownership, documentation, and founder-friendly pricing.
                </p>
                <div className="pt-4">
                  <ButtonLink intent="primary" href="/contact?service=productized">
                    Claim your slot
                  </ButtonLink>
                </div>
             </div>
             <div>
                <StackedProductCards />
             </div>
          </div>
        </div>
      </section>

      {/* 6. Consensus Engine Highlight */}
      <section className="py-24 bg-white" aria-labelledby="consensus-highlight-heading">
        <div className="container mx-auto px-4">
           <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 id="consensus-highlight-heading" className="text-3xl md:text-4xl font-bold font-hero-accent text-slate-900 mb-4">
                A research brief, not a mystery answer.
              </h2>
              <p className="text-lg text-slate-600">
                Consensus Engine turns one big strategic question into a calm, cited brief. See it in action with our Consensus Calendar.
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
      <section className="py-24 bg-slate-900 text-white" aria-labelledby="lgbtq-banner-heading">
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                  <h2 id="lgbtq-banner-heading" className="text-3xl font-bold font-hero-accent">
                    A helping hand for tech
                  </h2>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    We know many founders are tired and under-resourced. If these tools would move the needle but the budget is tight, reach out—we keep a 25% discount for LGBTQ-owned businesses and need-based grant slots.
                  </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                <LGBTQDiscountModalTrigger />
                <ButtonLink intent="secondary" href="/contact" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
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
    name: "AI Automation for Cleveland Small Businesses | Bespoke Ethos",
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
