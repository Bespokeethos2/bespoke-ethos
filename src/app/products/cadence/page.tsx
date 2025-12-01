import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { Section } from "@/common/layout";
import { Heading } from "@/common/heading";
import { ButtonLink } from "@/common/button";
import { Breadcrumbs } from "@/app/_components/seo/breadcrumbs";
import { FounderAiStrategySprintQA } from "@/app/_components/founder-ai-strategy-sprint-qa";
import { TrustStrip } from "@/app/_components/trust-strip";
import { AiStrategySprintLogoCard } from "@/common/ai-strategy-sprint-logo-card";
import { PRICING, formatMoney } from "@/config/pricing";
import { VogueCard } from "@/components/vogue-card";
import { TechNerdCard } from "@/components/tech-nerd-card";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Cadence: Cleveland AI Chatbot for Small Business | Bespoke Ethos",
  description:
    "Meet Cadence, your AI concierge: an intelligent, safe AI chatbot for small businesses in Cleveland. Built from the AI Strategy Sprint playbook, trained on your stories for exceptional customer service.",
  keywords: "Cleveland Small Business AI, Cleveland AI chatbot, AI for small business Cleveland, Intelligent customer service bots, Safe AI chatbots",
  alternates: { canonical: "/products/cadence" },
};

const ALT = {
  hero:
    "Soft-focus shot of a small-business owner at a workbench, warm lighting, with an overlay card describing Cadence-your on-brand AI concierge.",
  newAsset:
    "Operations lead working on a laptop in a small office, smiling while reviewing a simple automation dashboard, candid natural-light photo",
  infographic:
    "Three-panel infographic showing how Cadence turns founder stories into a human-sounding AI concierge for people who hate generic bots, using a conditionally patented orchestration process",
};

export default function AiStrategySprintPage() {
  return (
    <main className="be-page-slate">
      <Section className="gap-5 -mt-14 md:gap-6 md:-mt-4">
        <div className="be-section-card space-y-8">
          <AiStrategySprintProductJsonLd />

          {/* Hero */}
          <section className="relative cadence-card rounded-2xl">
            <div className="absolute inset-0 -z-10">
              <Image
                src="/assets/generated/cadence-feature-voice-desktop.webp"
                alt={ALT.hero}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1366px) 90vw, 1200px"
              />
            </div>
            <div className="relative z-10 flex min-h-[260px] flex-col justify-center pb-10 pt-10 md:min-h-[320px] md:pt-14">
              <div className="cadence-card-text max-w-3xl mx-auto flex flex-col items-center text-center bg-white/10 p-4 rounded-lg border border-white/20">
                <div className="mb-2 flex items-center gap-2">
                  <AiStrategySprintLogoCard size={48} />
                  <span className="cadence-badge inline-block rounded px-2 py-1 text-xs font-semibold">
                    Cadence: Your AI Concierge
                  </span>
                </div>

                <Heading
                  align="center"
                  subtitle="Tuned on your brand stories and background so it gets to know your customers, not just sell to them."
                >
                  <h1 className="font-hero-accent">Cadence: The Chatbot That Builds Brand Loyalty</h1>
                </Heading>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary md:text-base max-w-2xl mx-auto">
                  Don't just give them bare-bones info like price and color. Tell them how you built the Korean Dogwood candles after finding peace in a New England B&B.
                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  <p className="text-sm text-white/80">
                    Starts at {formatMoney(PRICING.aiStrategySprint.setup)} setup + {formatMoney(PRICING.aiStrategySprint.monthly)}/mo.
                  <Link href="/solutions/flowstack" className="ml-1 underline">
                    Need something simpler? Try Workflow Automation Setup™.
                  </Link>
                  </p>
                  <ButtonLink intent="primary" href="#demo">
                    See a Live Demo (2 min)
                  </ButtonLink>
                  <ButtonLink intent="secondary" href="/contact?service=llm-setups">
                    Book a strategy call
                  </ButtonLink>
                  <ButtonLink
                    unstyled
                    className="underline underline-offset-4 text-white/90"
                    href="/contact?subject=AI Strategy Sprint%20pilot"
                  >
                    Start a 30-day pilot
                  </ButtonLink>
                </div>

                <div className="mt-4 rounded-2xl border border-white/20 bg-black/25" role="region" aria-label="Trust Badges">
                  <TrustStrip size="thin" />
                </div>
              </div>
            </div>
          </section>

          <VogueCard
            imageSrc="/assets/logos/cadence.png"
            imageAlt="Cadence couture card"
            title="Meet Cadence  Your AI Concierge"
            tagline="Your Brand's Rhythm, On Autopilot"
            description="Introducing Cadence  Your AI Concierge—a highly tailored customer chatbot for people who think chatbots are just the worst, powered by a conditionally patented orchestration process so every conversation still sounds like you."
          />

          {/* Personality ad banner (keeps the fun campaign visible) */}
          <section
            aria-labelledby="cadence-ad-banner"
            className="overflow-hidden rounded-2xl border border-border bg-surface-secondary/60 dark:border-dark-border dark:bg-dark-surface-secondary/60"
          >
            <div className="relative h-48 w-full sm:h-56 lg:h-64">
              <Image
                src="/assets/ads/cadence.jpg"
                alt='Playful AI Strategy Sprint ad showing “Everyone knows Julie keeps blaming her farts on the dog. AI Strategy Sprint gets it.”'
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 960px"
                priority={false}
              />
            </div>
            <p
              id="cadence-ad-banner"
              className="px-5 py-3 text-center text-sm font-medium text-text-secondary dark:text-dark-text-secondary"
            >
              AI Strategy Sprint keeps your brand human—even when your customers get weird at 4 AM.
            </p>
          </section>

          {/* Solution Intro */}
          <div className="space-y-6">
            {/* Cadence infographic-style explainer */}
          <section
            aria-labelledby="cadence-infographic"
            className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start"
          >
            <div className="space-y-5">
              <Heading align="left">
                <h2 id="cadence-infographic">Why Cadence feels different from every other chatbot</h2>
              </Heading>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2 rounded-2xl border border-border bg-surface-secondary/70 p-4 text-sm text-text-secondary shadow-sm dark:border-dark-border dark:bg-dark-surface-secondary/70 dark:text-dark-text-secondary">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-tertiary dark:text-dark-text-tertiary">
                    01 · For people who hate chatbots
                  </p>
                  <h3 className="text-sm font-semibold text-text-primary dark:text-dark-text-primary">
                    Built for skeptics, not early adopters
                  </h3>
                  <p>
                    Cadence is a highly tailored customer chatbot for people who think chatbots are just the worst. It
                    behaves more like a patient sales associate who knows your stories than a pop-up FAQ.
                  </p>
                </div>
                <div className="space-y-2 rounded-2xl border border-border bg-surface-secondary/70 p-4 text-sm text-text-secondary shadow-sm dark:border-dark-border dark:bg-dark-surface-secondary/70 dark:text-dark-text-secondary">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-tertiary dark:text-dark-text-tertiary">
                    02 · Trained on your stories
                  </p>
                  <h3 className="text-sm font-semibold text-text-primary dark:text-dark-text-primary">
                    Your origin stories, not internet noise
                  </h3>
                  <p>
                    We train Cadence on why you built the business, the backstories behind your products, and real
                    conversations with customers—so it can tell the French vanilla candle story instead of just quoting a
                    price.
                  </p>
                </div>
                <div className="space-y-2 rounded-2xl border border-border bg-surface-secondary/70 p-4 text-sm text-text-secondary shadow-sm dark:border-dark-border dark:bg-dark-surface-secondary/70 dark:text-dark-text-secondary">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-tertiary dark:text-dark-text-tertiary">
                    03 · Conditionally patented orchestration
                  </p>
                  <h3 className="text-sm font-semibold text-text-primary dark:text-dark-text-primary">
                    Guardrails, not guesswork
                  </h3>
                  <p>
                    Behind the scenes, Cadence runs on a conditionally patented orchestration process with guardrails,
                    approvals, and audit trails. You get a modern chatbot with clear boundaries and review points instead
                    of mystery behavior.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-border bg-surface-secondary dark:border-dark-border dark:bg-dark-surface-secondary be-image-frame shadow-xl md:h-72">
              <Image
                src="/assets/generated/cadence-infographic-desktop.webp"
                alt={ALT.infographic}
                fill
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
          </section>

          {/* Demo and value prop sections (unchanged structure, now inside card) */}
          <Section className="gap-6 px-0 pb-0 pt-0">
            <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start" id="demo">
              <div className="space-y-4">
                <Heading align="left">
                  <h2>What a Cadence conversation actually feels like</h2>
                </Heading>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                  On the surface, Cadence looks like a clean, on-brand chat bubble in the corner of your site. Under
                  the hood, it&apos;s a set of smart lookups, workflows, and safety rules that acts more like a patient
                  sales associate who knows your stories than a generic chatbot.
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm text-text-secondary dark:text-dark-text-secondary">
                  <li>
                    <strong>Asks clarifying questions</strong> when a visitor is vague instead of guessing or making things up.
                  </li>
                  <li>
                    <strong>Surfaces stories and examples</strong> from your own case studies and founder notes.
                  </li>
                  <li>
                    <strong>Hands off gracefully to your team</strong> when a human is needed-with context attached.
                  </li>
                </ul>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                  If someone asks about your Korean Dogwood candles, Cadence can do more than say, &quot;It&apos;s
                  $39.99.&quot; It might add, &quot;We built the Korean Dogwood candles after visiting a bed and breakfast in New England and smelling candles just like that. It brought us such an inner sense of peace that we decided to come back and make them for our own customers.&quot; Those are the
                  moments that build loyalty.
                </p>
              </div>
              <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border bg-surface-secondary dark:border-dark-border dark:bg-dark-surface-secondary be-image-frame shadow-xl">
                <Image
                  src="/assets/generated/service-cadence-calendar-interface-desktop.webp"
                  alt={ALT.newAsset}
                  fill
                  className="h-full w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <Heading align="left">
                  <h2>What we do before Cadence ever answers a visitor</h2>
                </Heading>
                <ul className="list-disc space-y-2 pl-5 text-sm text-text-secondary dark:text-dark-text-secondary">
                  <li>Content and data audit: products, FAQs, docs, transcripts, best-performing emails.</li>
                  <li>Safety and tone guardrails: what Cadence can&apos;t say or promise.</li>
                  <li>Decision trees for when to escalate to human support or sales.</li>
                </ul>
              </div>
              <div className="space-y-3">
                <Heading align="left">
                  <h2>Where Cadence fits in your business</h2>
                </Heading>
                <ul className="list-disc space-y-2 pl-5 text-sm text-text-secondary dark:text-dark-text-secondary">
                  <li>Web chat widget on key pages (pricing, product, help, checkout).</li>
                  <li>Optional email reply assistant for common questions.</li>
                  <li>CRM + ticketing integration for full-funnel visibility.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-border bg-surface-primary p-4 dark:border-dark-border dark:bg-dark-surface-primary">
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between font-medium text-text-primary dark:text-dark-text-primary">
                  <span>AI 101: What is a "Frontier Model"?</span>
                  <span className="transition-transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </span>
                </summary>
                <div className="mt-3 text-sm text-text-secondary dark:text-dark-text-secondary">
                  <p className="mb-2">
                    Depending on the needs you bring forward, we will select the optimum model for you. A <strong>Frontier Model</strong> refers to the absolute cutting-edge AI models available today (like GPT-4, Claude 3.5 Sonnet, or Gemini 1.5 Pro).
                  </p>
                  <p>
                    These models are "smart" enough to understand nuance, tone, and complex instructions without needing thousands of examples. We pick the one that best fits your specific balance of speed, cost, and reasoning ability.
                  </p>
                </div>
              </details>
            </div>

            <div className="mt-2 space-y-3 text-sm text-text-secondary dark:text-dark-text-secondary">
              <p>
                <strong>Curious about Cadence but don't necessarily want to jump in head first?</strong>
              </p>
              <p>
                Let's talk about a 30-day pilot plan to see how Cadence can start you in one small area of your business and we can go from there. Less investment, less risk, more time to do the things you want to do.
              </p>
              <p>
                At the end of the pilot, you&apos;ll get clear numbers: deflection, leads, transcripts, and a simple
                recommendation on whether to scale up, adjust, or pause.
              </p>
            </div>

            {/* Alex testimonial highlight for Cadence */}
            <div className="mt-10 grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
              <div className="space-y-3">
                <Heading align="left">
                  <h2 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary">
                    “Feels like us, not a robot.”
                  </h2>
                </Heading>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary md:text-base">
                  Cadence grew out of the same orchestration we used to build AI Strategy Sprint for real Cleveland
                  businesses. Alex&apos;s co-op chat assistant isn&apos;t a novelty widget—it&apos;s a patient teammate
                  trained on their stories, approvals, and edge cases.
                </p>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary md:text-base">
                  &ldquo;AI Strategy Sprint feels like us, not a robot. It hands off when it should and keeps approvals
                  intact.&rdquo;
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-text-tertiary dark:text-dark-text-tertiary">
                  Retail co-op ú Premium chat
                </p>
              </div>
              <div className="ghost-card ghost-card--soft">
                <div className="relative h-64 w-full overflow-hidden rounded-xl border border-border/60 bg-surface-secondary dark:border-dark-border/60 dark:bg-dark-surface-secondary md:h-72">
                  <Image
                    src="/assets/Real-Customers/Alex-with-Molly.jpg"
                    alt="Alex with Molly open on his laptop, smiling at the camera"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 480px"
                  />
                </div>
              </div>
            </div>
          </Section>
          </div>

          <TechNerdCard product="cadence" />
        </div>
      </Section>
    </main>
  );
}

function AiStrategySprintProductJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const currency = PRICING.currency === "$" ? "USD" : "USD";

  const json = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Cadence: Cleveland AI Chatbot for Small Business",
    description:
      "Cadence is an intelligent, safe AI chatbot service for small businesses in Cleveland, OH. This AI concierge is trained on your products, voice, and stories to deliver exceptional customer service, deflect repetitive questions, and build brand loyalty.",
    image: [`${base}/assets/generated/cadence-feature-voice-desktop.webp`],
    offers: {
      "@type": "Offer",
      priceCurrency: currency,
      price: PRICING.aiStrategySprint.setup,
      priceSpecification: {
        "@type": "PriceSpecification",
        name: "Initial setup",
        priceCurrency: currency,
        price: PRICING.aiStrategySprint.setup,
      },
      availability: "https://schema.org/InStock",
      url: `${base}/products/cadence`,
    },
    additionalType: ["https://schema.org/Service", "https://schema.org/Chatbot", "https://schema.org/AIService"],
    provider: {
      "@type": "Organization",
      name: "Bespoke Ethos",
    },
  } as const;

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}



