import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { Heading } from "@/common/heading";
import { Section } from "@/common/layout";
import { ButtonLink } from "@/common/button";
import { PRICING, planSummary, formatMoney } from "@/config/pricing";
import { Breadcrumbs } from "@/app/_components/seo/breadcrumbs";
import { Accordion } from "@/app/_sections/accordion-faq/accordion";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "AI Automation Solutions for Small Businesses | Bespoke Ethos",
  description:
    "Explore AI automation solutions for small businesses, including workflow automation, Zapier/Make rescue, and AI strategy sprints. Productized, fixed-scope packages for founders who can’t afford enterprise retainers.",
  alternates: { canonical: "/solutions" },
};

const solutions = [
  {
    slug: "cadence",
    title: "Meet Cadence  Your AI Concierge",
    summary:
      "Your AI concierge front door that routes conversations and tasks, keeps tone on-brand, and hands off cleanly to humans.",
    logo: "/assets/logos/cadence_logo.png",
  },
  {
    slug: "consensus-engine",
    title: "Consensus Engine  Your AI Strategy Sprint",
    summary:
      "AI Strategy Sprint powered by the Consensus Engine for big decisions, approvals-intact plans, and founder-in-the-loop roadmaps.",
    logo: "/assets/logos/consensus_engine_logo.png",
  },
  {
    slug: "redbridging",
    title: "Automation Rescue",
    summary:
      "Rescues brittle Zapier/Make/HubSpot automations, adds alerts and approvals, and documents everything so it stays fixed.",
    logo: "/assets/logos/redbridging_logo.png",
  },
  {
    slug: "automation-skyway",
    title: "Automation Skyway",
    summary:
      "Cloud workflow automation from desk to cloud. One painful task automated end-to-end with rollbacks and approvals intact.",
    logo: "/assets/logos/flowstack_logo.png",
  },
] as const;

const flagshipTools = [
  {
    name: "Meet Cadence  Your AI Concierge",
    tagline: "AI Concierge",
    href: "/products/cadence",
    image: "/assets/generated/cadence-feature-voice-desktop.webp",
  },
  {
    name: "Consensus Engine  Your AI Strategy Sprint",
    tagline: "Strategy Sprint",
    href: "/solutions/consensus-engine",
    image: "/assets/generated/hero-consensus-desktop.webp",
  },
  {
    name: "Automation Rescue",
    tagline: "AI Reliability",
    href: "/solutions/redbridging",
    image: "/assets/generated/hero-redbridging-desktop.webp",
  },
  {
    name: "Automation Skyway",
    tagline: "Cloud Workflow Automation",
    href: "/solutions/automation-skyway",
    image: "/assets/generated/hero-automation-skyway-desktop.webp",
  },
] as const;

const solutionsFaqItems = [
  {
    _title: "How do I know which solution is right for my business?",
    answer:
      "If you're not sure where to start, think about your biggest bottleneck. Broken automations or brittle handoffs usually point to Automation Rescue or Automation Skyway, while bigger strategic questions tend to fit an AI strategy sprint. If you're still unsure, a short contact form plus a call is enough to map you to the right option.",
  },
  {
    _title: "Can we start small before committing to a larger build?",
    answer:
      "Yes. Many clients start with a focused workflow or a narrow automation rescue to prove value and build trust. Once we’ve shipped something that clearly saves time, we can decide together whether it makes sense to expand into additional workflows or a broader AI strategy sprint.",
  },
  {
    _title: "What does “productized” mean in your solutions?",
    answer:
      "Each solution is scoped and priced around clear outcomes instead of hourly billing. You know upfront what problem we’re solving, what the deliverables are, and what support window is included, rather than watching a time sheet and hoping it lands within budget.",
  },
  {
    _title: "Do I need to change all my tools to work with you?",
    answer:
      "Not necessarily. We start by working with the tools you already use—email, spreadsheets, CRMs, Zapier, Make.com, and similar. If a different tool would clearly reduce risk or cost, we’ll recommend it, but the goal is to improve your workflows, not force a full stack replacement.",
  },
] as const;

export default function SolutionsPage() {
  return (
    <div className="be-page-slate min-h-full">
      <Section className="gap-5 -mt-14 md:gap-6 md:-mt-4">
        <div className="be-section-card space-y-6 solutions-hero page-hero-shell">
          <SolutionsItemListJsonLd />
          <SolutionsFaqJsonLd />
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Solutions" }]} />
          <Heading subtitle="NO RESOURCES. NO PROBLEM. JUST YOU AND AI." align="left">
            <h1>Solutions</h1>
          </Heading>
          <p className="text-sm text-text-tertiary dark:text-dark-text-tertiary">
            NGLCC-certified, LGBTQ-owned AI consulting and automation studio, built for founders in survival
            mode-not enterprise retainers. Fixed scopes from $399, with a standing 25% discount for LGBTQ-owned
            businesses.
          </p>
          <div className="solutions-meta">
            <span className="solutions-chip">Cadence  Your AI Concierge</span>
            <span className="solutions-chip">Consensus Engine  Your AI Strategy Sprint</span>
            <span className="solutions-chip">Automation Rescue</span>
            <span className="solutions-chip">Automation Skyway</span>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink intent="primary" href="/contact?service=llm-setups">
              Tell me what&apos;s broken
            </ButtonLink>
            <ButtonLink intent="secondary" href="/pricing">
              View pricing
            </ButtonLink>
          </div>
        </div>

        {/* 2x2 flagship grid with glow rails */}
        <section aria-label="Flagship AI workflow tools" className="solutions-flagship">
          <div className="rail-shell">
            <div className="grid gap-4 md:grid-cols-2">
              {flagshipTools.map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
                >
                  <div className="ghost-card ghost-card--soft space-y-3">
                    <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl border border-border/60 dark:border-dark-border/60">
                      <Image
                        src={tool.image}
                        alt={`${tool.name} feature image`}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 100vw, 45vw"
                        priority
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text-secondary dark:text-dark-text-secondary">
                        {tool.tagline}
                      </p>
                      <h3 className="text-xl font-medium text-text-primary dark:text-dark-text-primary">
                        {tool.name}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.28em] text-text-tertiary dark:text-dark-text-tertiary">
                        Productized, audited delivery
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Detail cards for each solution */}
        <div className="rail-shell">
          <div className="rail-grid two">
            {solutions.map((s) => {
              let priceLine: string | null = null;
              if (s.slug === "cadence") {
                priceLine = null; // custom tiers on product page
              } else if (s.slug === "consensus-engine") {
                priceLine = `${planSummary(
                  PRICING.aiStrategySprint.setup,
                  PRICING.aiStrategySprint.monthly,
                )} for strategy sprint delivery, then custom retainers.`;
              } else if (s.slug === "redbridging") {
                priceLine = `From ${formatMoney(
                  PRICING.automationRescue.standaloneLow,
                )}/mo standalone or included with Automation Skyway/Cadence retainers.`;
              } else if (s.slug === "automation-skyway") {
                priceLine = planSummary(
                  PRICING.automationSkyway.setup,
                  PRICING.automationSkyway.monthly,
                );
              }

              const heroImage =
                s.slug === "cadence"
                  ? "/assets/generated/cadence-feature-voice-desktop.webp"
                  : s.slug === "consensus-engine"
                    ? "/assets/generated/hero-consensus-desktop.webp"
                    : s.slug === "redbridging"
                      ? "/assets/generated/hero-redbridging-desktop.webp"
                      : "/assets/generated/hero-automation-skyway-desktop.webp";

              return (
                <div key={s.slug} className="ghost-card">
                  <div className="relative aspect-video overflow-hidden rounded-lg border border-border/60 bg-white dark:border-dark-border/60">
                    <Image
                      src={heroImage}
                      alt={`${s.title} feature visual`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, 45vw"
                    />
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <Image src={s.logo} alt={`${s.title} logo`} width={36} height={36} className="h-9 w-9" />
                    <div>
                      <p className="accent-bar text-[11px]">Productized</p>
                      <h2 className="text-xl font-medium text-text-primary dark:text-dark-text-primary">
                        {s.title}
                      </h2>
                    </div>
                  </div>
                  <p className="mt-2 text-text-secondary dark:text-dark-text-secondary">{s.summary}</p>
                  {priceLine ? (
                    <p className="mt-2 text-sm text-text-tertiary dark:text-dark-text-tertiary">{priceLine}</p>
                  ) : null}
                  <div className="mt-4">
                    <ButtonLink
                      href={s.slug === "cadence" ? "/products/cadence" : `/solutions/${s.slug}`}
                      intent="secondary"
                    >
                      Learn more
                    </ButtonLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6">
          <Link
            className="text-accent-500 font-medium underline hover:text-accent-600"
            href="/contact?service=llm-setups"
          >
            Not sure where to start? Book a free consultation
          </Link>
        </div>

        <div className="mt-14">
          <Heading align="center" title="Questions about our solutions">
            <h2 className="text-2xl font-semibold">How the productized offers work</h2>
          </Heading>
          <div className="mx-auto mt-6 flex w-full gap-8 md:max-w-(--breakpoint-sm) lg:max-w-(--breakpoint-md) lg:gap-14 lg:px-24 xl:max-w-(--breakpoint-xl)">
            <Accordion items={solutionsFaqItems} />
          </div>
        </div>
      </Section>
    </div>
  );
}

function SolutionsItemListJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const items = [
    { name: "Cadence  Your AI Concierge", url: `${base}/products/cadence` },
    { name: "Consensus Engine  Your AI Strategy Sprint", url: `${base}/solutions/consensus-engine` },
    { name: "Automation Rescue", url: `${base}/solutions/redbridging` },
    { name: "Automation Skyway", url: `${base}/solutions/automation-skyway` },
  ] as const;

  const json = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  } as const;

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

function SolutionsFaqJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: solutionsFaqItems.map((item) => ({
      "@type": "Question",
      name: item._title,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    mainEntityOfPage: `${base}/solutions`,
  } as const;

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

