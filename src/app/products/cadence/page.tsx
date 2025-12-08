import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { Section } from "@/common/layout";
import { Heading } from "@/common/heading";
import { ButtonLink } from "@/common/button";
import { Breadcrumbs } from "@/app/_components/seo/breadcrumbs";
import { FounderAiStrategySprintQA } from "@/app/_components/founder-ai-strategy-sprint-qa";
import { TrustStrip } from "@/app/_components/trust-strip";
import { CadenceLogoCard } from "@/common/cadence-logo-card";
import { PRICING, formatMoney } from "@/config/pricing";
import { TechNerdCard } from "@/components/tech-nerd-card";
import { Accordion } from "@/app/_sections/accordion-faq/accordion";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Cadence: AI Customer Service Chatbot for Small Business | Bespoke Ethos",
  description:
    "Meet Cadence, your AI concierge: an intelligent, safe AI chatbot for small businesses in Cleveland. Optimized for customer service, Cadence is trained on your brand stories for exceptional customer interactions.",
  keywords:
    "Cadence, AI Chatbot, Customer Service AI, AI Concierge, Small Business AI, Cleveland AI, Intelligent Chatbot, Safe Chatbot",
  alternates: { canonical: "/products/cadence" },
  openGraph: {
    title: "Cadence: AI Customer Service Chatbot for Small Business | Bespoke Ethos",
    description:
      "Meet Cadence, your AI concierge: an intelligent, safe AI chatbot for small businesses in Cleveland. Optimized for customer service, Cadence is trained on your brand stories for exceptional customer interactions.",
    url: "https://www.bespokeethos.com/products/cadence",
    images: ["https://www.bespokeethos.com/assets/generated/hero-cadence-desktop.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@bespokeethos",
    creator: "@bespokeethos",
    title: "Cadence: AI Customer Service Chatbot for Small Business | Bespoke Ethos",
    description:
      "Meet Cadence, your AI concierge: an intelligent, safe AI chatbot for small businesses in Cleveland. Optimized for customer service, Cadence is trained on your brand stories for exceptional customer interactions.",
    images: ["https://www.bespokeethos.com/assets/generated/hero-cadence-desktop.webp"],
  },
};

const ALT = {
  hero:
    "A small business founder, relieved and empowered, interacting with a subtle, glowing interface that represents an AI concierge.",
  newAsset:
    "Close-up of a founder and customer reviewing a product together while a soft digital glow suggests Cadence quietly supporting the interaction.",
  infographic:
    "Customers chatting in a boutique while a friendly chat bubble on a tablet hints at Cadence handling questions in the background.",
  adBanner:
    "Playful Cadence ad showing how the AI concierge keeps your brand human—even when customers get weird at 4 AM.",
};

const cadenceFaqItems = [
  {
    _title: "What kinds of businesses is Cadence best for?",
    answer:
      "Cadence is built for small businesses and lean teams that rely on high‑touch service but don’t have the headcount to staff chat around the clock. If customers ask the same questions over and over, abandon carts, or need reassurance before buying, Cadence is usually a strong fit.",
  },
  {
    _title: "How do you train Cadence on our brand stories and content?",
    answer:
      "We start by mapping your existing content—website copy, help docs, policies, founder stories, and any sales scripts you already trust. Those become the core training materials. From there we layer in structured Q&A, edge cases, and tone rules so Cadence can answer like a well‑briefed teammate instead of a generic bot.",
  },
  {
    _title: "How does Cadence stay safe and on‑brand?",
    answer:
      "Cadence is configured with strict guardrails, escalation rules, and hard no‑go zones for topics you’d rather a human handle. Risky actions and sensitive conversations route to your team instead of being handled autonomously, so the assistant stays inside the lines you set.",
  },
  {
    _title: "How does Cadence integrate with my existing website and tools?",
    answer:
      "On the front end, Cadence usually appears as a chat widget or embedded assistant you can drop into your existing site with a small snippet. On the back end, we connect it to email, CRMs, or helpdesk tools—often via Zapier or Make.com—so handoffs, tickets, and leads land where your team already works.",
  },
] as const;

export default function CadencePage() {
  return (
    <main className="be-page-slate">
      <Section className="gap-5 -mt-14 md:gap-6 md:-mt-4">
        <div className="be-section-card space-y-8">
          <CadenceProductJsonLd />
          <CadenceFaqJsonLd />

          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Products", href: "/products" },
              { name: "Cadence – AI Concierge" },
            ]}
          />

          {/* Hero */}
          <section className="cadence-hero relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-amber-50 via-white to-slate-100 p-6 shadow-xl dark:from-slate-900/70 dark:via-slate-900/50 dark:to-slate-900/30 md:p-8">
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.9fr)]">
              {/* Left: copy + CTAs */}
              <div className="space-y-5 text-text-primary dark:text-dark-text-primary">
                <div className="inline-flex flex-wrap items-center gap-3 rounded-full bg-white/90 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700 shadow-sm dark:bg-white/10 dark:text-amber-200">
                  <CadenceLogoCard size={32} />
                  <span>Cadence ú Your AI Concierge</span>
                </div>

                <Heading
                  align="left"
                  subtitle="An AI concierge trained on your stories so customer conversations feel like your brand, not a script."
                >
                  <h1 className="font-hero-accent">Cadence: The Chatbot That Builds Brand Loyalty</h1>
                </Heading>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary md:text-base max-w-2xl leading-relaxed">
                  Cadence turns your origin stories, product backstories, and real conversations into a patient teammate
                  that can greet visitors, answer common questions, and know when to hand things off to a human without
                  sounding like a generic FAQ bot.
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <p className="inline-flex items-center rounded-full bg-white/90 px-4 py-1 text-xs font-medium text-text-secondary shadow-sm dark:bg-dark-surface-secondary/90 dark:text-dark-text-secondary">
                    Starts at {formatMoney(PRICING.cadence.setup)} setup + {formatMoney(PRICING.cadence.monthly)}/mo.
                    <Link href="/solutions/automation-skyway" className="ml-1 underline underline-offset-2">
                      Need something simpler? Try Automation Skyway.
                    </Link>
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <ButtonLink intent="primary" href="#demo">
                      See a live demo (2 min)
                    </ButtonLink>
                    <ButtonLink intent="secondary" href="/contact?service=llm-setups">
                      Book a strategy call
                    </ButtonLink>
                    <ButtonLink
                      unstyled
                      className="text-sm font-semibold text-text-primary underline underline-offset-4 dark:text-dark-text-primary"
                      href="/contact?subject=AI%20Strategy%20Sprint%20pilot"
                    >
                      Start a 30‑day pilot
                    </ButtonLink>
                  </div>
                </div>

                <div
                  className="mt-4 rounded-2xl border border-border bg-surface-secondary/70 dark:border-dark-border dark:bg-dark-surface-secondary/70"
                  role="region"
                  aria-label="Trust Badges"
                >
                  <TrustStrip size="thin" />
                </div>
              </div>

              {/* Right: hero imagery for visual balance */}
              <div className="mt-6 lg:mt-0">
                <div className="relative h-52 w-full overflow-hidden rounded-2xl border border-border bg-white shadow-xl dark:border-dark-border dark:bg-black/40 md:h-64">
                  <Image
                    src="/assets/generated/hero-cadence-desktop.webp"
                    alt={ALT.hero}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 520px"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Personality ad banner (keeps the fun campaign visible) */}
          <section
            aria-labelledby="cadence-ad-banner"
            className="vogue-card-wrapper overflow-hidden rounded-2xl border border-border bg-surface-secondary/60 dark:border-dark-border dark:bg-dark-surface-secondary/60"
          >
            <div className="relative h-48 w-full sm:h-56 lg:h-64">
              <Image
                src="/assets/ads/cadence.jpg"
                alt={ALT.adBanner}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 960px"
              />
            </div>
            <p
              id="cadence-ad-banner"
              className="px-5 py-3 text-center text-sm font-medium text-text-secondary dark:text-dark-text-secondary"
            >
              Cadence keeps your brand human—even when your customers get weird at 4 AM.
            </p>
          </section>

          {/* Why Cadence feels different */}
          <section
            aria-labelledby="cadence-infographic"
            className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start"
          >
            <div className="space-y-5">
              <Heading align="left">
                <h2 id="cadence-infographic">Why Cadence feels different from every other chatbot</h2>
              </Heading>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2 tactile-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-tertiary dark:text-dark-text-tertiary">
                    01 ú For people who hate chatbots
                  </p>
                  <h3 className="text-sm font-semibold text-text-primary dark:text-dark-text-primary">
                    Built for skeptics, not early adopters
                  </h3>
                  <p>
                    Cadence is designed for founders who have been burned by generic chat widgets. It listens first, asks
                    clarifying questions, and stays in your voice.
                  </p>
                </div>
                <div className="space-y-2 tactile-card">
                  <h3 className="text-sm font-semibold text-text-primary dark:text-dark-text-primary">
                    Your origin stories, not internet noise
                  </h3>
                  <p>
                    We train Cadence on why you built the business, the backstories behind your products, and real customer
                    conversations—so it can tell the candle story instead of just quoting a price.
                  </p>
                </div>
                <div className="space-y-2 tactile-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-tertiary dark:text-dark-text-tertiary">
                    03 ú Guardrails, not guesswork
                  </p>
                  <h3 className="text-sm font-semibold text-text-primary dark:text-dark-text-primary">
                    Conditionally patented orchestration
                  </h3>
                  <p>
                    Behind the scenes, Cadence runs on an orchestration process with approvals and audit trails. You get a
                    modern chatbot with clear boundaries instead of mystery behavior.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-border bg-surface-secondary dark:border-dark-border dark:bg-dark-surface-secondary be-image-frame shadow-xl md:h-72">
              <Image
                src="/assets/generated/cadence-workflow-integration-desktop.webp"
                alt={ALT.infographic}
                fill
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
          </section>

          {/* Demo + where Cadence fits */}
          <Section className="gap-6 px-0 pb-0 pt-0">
            <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start" id="demo">
              <div className="space-y-4">
                <Heading align="left">
                  <h2>What a Cadence conversation actually feels like</h2>
                </Heading>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                  On the surface, Cadence looks like a clean, on‑brand chat bubble in the corner of your site. Under the
                  hood, it’s a set of smart lookups, workflows, and safety rules that acts more like a patient sales
                  associate who knows your stories than a generic chatbot.
                </p>
                <ul className="tactile-list space-y-2 pl-5 text-sm text-text-secondary dark:text-dark-text-secondary">
                  <li>
                    <strong>Asks clarifying questions</strong> when a visitor is vague instead of guessing or making things
                    up.
                  </li>
                  <li>
                    <strong>Surfaces stories and examples</strong> from your own case studies and founder notes.
                  </li>
                  <li>
                    <strong>Hands off gracefully to your team</strong> when a human is needed—with context attached.
                  </li>
                </ul>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                  If someone asks about your favorite candle line, Cadence can do more than say, “It’s $39.99.” It can add
                  the short origin story—the bed‑and‑breakfast in New England, the moment of calm—that makes people feel
                  something before they buy.
                </p>
              </div>
              <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border bg-surface-secondary dark:border-dark-border dark:bg-dark-surface-secondary be-image-frame shadow-xl">
                <Image
                  src="/assets/generated/cadence-customer-interaction-desktop.webp"
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
                <ul className="tactile-list space-y-2 pl-5 text-sm text-text-secondary dark:text-dark-text-secondary">
                  <li>Content and data audit: products, FAQs, docs, transcripts, best‑performing emails.</li>
                  <li>Safety and tone guardrails: what Cadence can’t say or promise.</li>
                  <li>Decision trees for when to escalate to human support or sales.</li>
                </ul>
              </div>
              <div className="space-y-3">
                <Heading align="left">
                  <h2>Where Cadence fits in your business</h2>
                </Heading>
                <ul className="tactile-list space-y-2 pl-5 text-sm text-text-secondary dark:text-dark-text-secondary">
                  <li>Web chat widget on key pages (pricing, product, help, checkout).</li>
                  <li>Optional email reply assistant for common questions.</li>
                  <li>CRM + ticketing integration for full‑funnel visibility.</li>
                </ul>
              </div>
            </div>

            {/* Founder Q&A reused from AI Strategy Sprint for consistency */}
            <FounderAiStrategySprintQA />

            {/* Alex-style testimonial adapted for Cadence */}
            <div className="mt-10 grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
              <div className="space-y-3">
                <Heading align="left">
                  <h2 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary">
                    “Feels like us, not a robot.”
                  </h2>
                </Heading>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary md:text-base">
                  One Cleveland retail co‑op brought Cadence in on a 30‑day pilot just to see how it would behave on the
                  site. Within three weeks, conversions from chat‑assisted visitors ticked up and the team saw fewer dropped
                  conversations.
                </p>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary md:text-base">
                  “Cadence feels like us, not a robot. It hands off when it should, keeps approvals intact, and customers
                  keep telling us the chatbot is ‘so cool.’”
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-text-tertiary dark:text-dark-text-tertiary">
                  Retail co‑op · Premium chat assistant
                </p>
              </div>
              <div className="tactile-image-card">
                <div className="relative h-64 w-full overflow-hidden rounded-xl border border-border/60 bg-surface-secondary dark:border-dark-border/60 dark:bg-dark-surface-secondary md:h-72">
                  <Image
                    src="/assets/Real-Customers/Alex-with-Molly.jpg"
                    alt="Founder reviewing Cadence performance on a laptop, smiling at the results"
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

        <div className="mt-10">
          <Heading align="center" title="Questions founders ask about Cadence">
            <h2 className="text-2xl font-semibold">
              How the AI concierge fits into your customer experience
            </h2>
          </Heading>
          <div className="mx-auto mt-6 flex w-full gap-8 md:max-w-(--breakpoint-sm) lg:max-w-(--breakpoint-md) lg:gap-14 lg:px-24 xl:max-w-(--breakpoint-xl)">
            <Accordion items={cadenceFaqItems} />
          </div>
        </div>
      </Section>
    </main>
  );
}

function CadenceProductJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const currency = PRICING.currency === "$" ? "USD" : "USD";

  const json = {
    "@context": "https://schema.org",
    "@type": "Product",
    url: `${base}/products/cadence`,
    brand: {
      "@type": "Brand",
      name: "Bespoke Ethos",
    },
    name: "Cadence: AI Customer Service Chatbot for Small Business",
    description:
      "Cadence is an intelligent, safe AI chatbot service for small businesses in Cleveland, OH. This AI concierge is trained on your products, voice, and stories to deliver exceptional customer service, deflect repetitive questions, and build brand loyalty.",
    image: [`${base}/assets/generated/cadence-founder-empowered-desktop.webp`],
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

function CadenceFaqJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cadenceFaqItems.map((item) => ({
      "@type": "Question",
      name: item._title,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    mainEntityOfPage: `${base}/products/cadence`,
  } as const;

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

