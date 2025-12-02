import Image from "next/image";
import type { Metadata } from "next";

import { Breadcrumbs } from "@/app/_components/seo/breadcrumbs";
import { ButtonLink } from "@/common/button";
import { Heading } from "@/common/heading";
import { Section } from "@/common/layout";
import { PRICING, planSummary } from "@/config/pricing";
import { VogueCard } from "@/components/vogue-card";
import { Accordion } from "@/app/_sections/accordion-faq/accordion";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Workflow Automation Setup – Automate Your #1 Task | Bespoke Ethos",
  description:
    "Workflow Automation Setup maps your real process, keeps approvals intact, and builds production-ready automation in days, not months—for small businesses that need one painful task off their plate.",
  alternates: { canonical: "/solutions/flowstack" },
};

const FLOWSTACK_CALLOUTS = [
  {
    title: "Single trigger",
    detail: "Form, SMS, or webhook kicks off the sequence with audit-friendly logging from the first step.",
  },
  {
    title: "Human approvals",
    detail: "Slack, email, or SMS checkpoints make sure risky steps pause for people first.",
  },
  {
    title: "Rollback built in",
    detail: "Every action ships with a mirrored undo path so ops teams can back out calmly.",
  },
  {
    title: "Live observability",
    detail: "Runs stream into a simple operator dashboard—no guessing where a workflow stands.",
  },
] as const;

const FLOWSTACK_ASSETS = [
  {
    src: "/assets/generated/flowstack-operator-dashboard-square.png",
    alt: "Workflow Automation Setup dashboard tile showing automation stats in a square frame",
    title: "Operator dashboard snapshot",
    description: "High-level run stats, approvals awaiting action, and audit links your ops lead checks at a glance.",
  },
  {
    src: "/assets/generated/flowstack-builder-square.png",
    alt: "Workflow Automation Setup builder canvas in a square frame",
    title: "Builder canvas zoom",
    description: "Drag-to-connect steps with inline metadata so every stakeholder can see why each move exists.",
  },
  {
    src: "/assets/generated/flowstack-exec-square.png",
    alt: "Founder reviewing Workflow Automation Setup automation outputs on a tablet in a square tile",
    title: "Exec-ready hero",
    description: "Brand-safe creative you can reuse in decks, investor updates, and onboarding docs.",
  },
] as const;

const flowstackFaqItems = [
  {
    _title: "What kinds of tasks are a good fit for Workflow Automation Setup?",
    answer:
      "Workflow Automation Setup is designed for repeatable processes that steal hours from your week—things like lead intake and routing, follow-up reminders, reporting, or handoffs between tools. If it’s structured and happens all the time, it’s likely a good fit.",
  },
  {
    _title: "How much of my time will the project require?",
    answer:
      "You’ll spend some time up front walking through your real process, edge cases, and constraints. After that, most of your involvement is reviewing drafts and giving feedback while we handle the build and testing.",
  },
  {
    _title: "Will the automation replace my team or just support them?",
    answer:
      "The goal is to free your team from repetitive coordination work, not to replace the judgment calls they make. Approvals and human checkpoints stay in the loop so people still sign off on risky steps.",
  },
  {
    _title: "What happens after handoff if something breaks?",
    answer:
      "Every build ships with documentation and rollback paths so you’re not stuck. Depending on your plan, we can also include a support window to help you adjust as real-world usage uncovers new edge cases.",
  },
] as const;

export default function WorkflowAutomationSetupPage() {
  return (
    <main className="be-page-slate">
      <Section className="gap-6 -mt-6 md:-mt-4">
        <div className="be-section-card space-y-6 pt-4 md:pt-5">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Solutions", href: "/solutions" },
              { name: "Workflow Automation Setup" },
            ]}
          />
          <ProductJsonLd />
          <WorkflowAutomationSetupServiceJsonLd />
          <WorkflowAutomationSetupFaqJsonLd />

          <div className="flowstack-hero relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-amber-50 via-white to-slate-100 p-6 shadow-xl dark:from-slate-900/70 dark:via-slate-900/50 dark:to-slate-900/30 md:p-8">
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.9fr)]">
              <div className="space-y-5 text-text-secondary dark:text-dark-text-secondary">
                <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-white/90 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700 shadow-sm dark:bg-white/10 dark:text-amber-200">
                  Workflow Automation Setup
                  <span className="text-[11px] font-normal tracking-normal text-text-tertiary dark:text-dark-text-tertiary">
                    Automate your #1 task
                  </span>
                </div>
                <Heading subtitle="Proprietary general automation for any business task. Own the results." align="left">
                  <h1 className="font-hero-accent">Workflow Automation Setup</h1>
                </Heading>
                <div className="space-y-3">
                  <p>
                    When I was drowning in my publishing business, I didn&apos;t need a fancy AI platform. I needed someone
                    to automate the one task that was stealing hours from my week. So I built Workflow Automation Setup for myself first. It
                    is our proprietary general automation package, designed to handle any business task—from lead routing to
                    inventory updates.
                  </p>
                  <p>
                    We map your real process, keep human approvals intact, and ship a production-ready automation in days. Every
                    build ships with documentation, audit trails, and rollback—because I learned the hard way that automation
                    without guardrails creates more problems than it solves.
                  </p>
                </div>
                <ul className="list-disc space-y-1 pl-5 text-sm sm:text-base">
                  <li>Keeps humans in the approval loop where it matters.</li>
                  <li>Single source of truth with clear ownership for each step.</li>
                  <li>Rollback paths for every critical action.</li>
                </ul>
                <div className="flex flex-wrap gap-3">
                  <ButtonLink intent="primary" href="/contact?service=llm-setups">
                    Tell me about your #1 task
                  </ButtonLink>
                  <ButtonLink intent="secondary" href="/pricing">
                    View Workflow Automation Setup pricing
                  </ButtonLink>
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-52 w-full overflow-hidden rounded-2xl border border-border bg-white shadow-xl dark:border-dark-border dark:bg-black/40 md:h-64">
                  <Image
                    src="/assets/generated/hero-flowstack-desktop.webp"
                    alt="Founder reviewing Workflow Automation Setup automation outputs"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 520px"
                    priority
                  />
                </div>
                <VogueCard
                  imageSrc="/assets/logos/flowstack.png"
                  imageAlt="Workflow Automation Setup couture card"
                  title="Workflow Automation Setup"
                  tagline="Workflow Automation"
                  description="Automation fabric for founders who need audit trails, approvals, and production-ready builds in days."
                />
              </div>
            </div>
          </div>

          <div className="flowstack-infographic rounded-2xl border border-border bg-surface-secondary/70 p-6 dark:border-dark-border dark:bg-dark-surface-secondary/70 md:p-8">
            <div className="lg:flex lg:items-start lg:gap-8">
              <div className="space-y-4 text-text-secondary dark:text-dark-text-secondary lg:flex-1">
                <h2 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary">
                  Workflow Automation Setup blueprint at a glance
                </h2>
                <p>
                  Workflow Automation Setup diagrams read like a magazine spread: the image anchors the eye while the copy wraps around it to
                  walk stakeholders through each checkpoint.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {FLOWSTACK_CALLOUTS.map((callout) => (
                    <div
                      key={callout.title}
                      className="rounded-xl border border-border bg-white/85 p-4 text-sm shadow-sm dark:border-dark-border dark:bg-dark-surface"
                    >
                      <p className="text-base font-semibold text-text-primary dark:text-dark-text-primary">{callout.title}</p>
                      <p className="text-text-secondary dark:text-dark-text-secondary">{callout.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <figure className="mt-6 lg:mt-0 lg:flex-1">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-white shadow-xl dark:border-dark-border dark:bg-black/40">
                  <Image
                    src="/assets/generated/service-flowstack-builder-desktop.webp"
                    alt="Workflow Automation Setup workflow automation builder showing approvals, alerts, and human steps"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 520px"
                  />
                </div>
                <figcaption className="mt-3 text-xs uppercase tracking-[0.25em] text-text-tertiary dark:text-dark-text-tertiary">
                  Builder view – every branch documents the owner, data source, and rollback pair.
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="space-y-4">
            <Heading align="left" subtitle="Comprehensive assets you keep after we hand off.">
              <h2 className="text-2xl font-hero-accent">Workflow Automation Setup deliverable library</h2>
            </Heading>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {FLOWSTACK_ASSETS.map((asset) => (
                <article
                  key={asset.title}
                  className="rounded-2xl border border-border bg-surface-secondary/60 p-4 shadow-sm dark:border-dark-border dark:bg-dark-surface-secondary/60"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border bg-white/80 dark:border-dark-border dark:bg-black/30">
                    <Image
                      src={asset.src}
                      alt={asset.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-text-primary dark:text-dark-text-primary">
                    {asset.title}
                  </h3>
                  <p className="text-sm text-text-secondary dark:text-dark-text-secondary">{asset.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Heading align="center" title="Questions about Workflow Automation Setup">
              <h2 className="text-2xl font-semibold">What to expect from your first automation build</h2>
            </Heading>
            <div className="mx-auto mt-6 flex w-full gap-8 md:max-w-(--breakpoint-sm) lg:max-w-(--breakpoint-md) lg:gap-14 lg:px-24 xl:max-w-(--breakpoint-xl)">
              <Accordion items={flowstackFaqItems} />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

function ProductJsonLd() {
  const price = planSummary(PRICING.workflowAutomationSetup.setup, PRICING.workflowAutomationSetup.monthly);
  const currency = PRICING.currency === "$" ? "USD" : "USD";
  const json = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Workflow Automation Setup",
    description: "Map your process, keep approvals intact, build production-ready automation in days, not months.",
    offers: {
      "@type": "Offer",
      priceCurrency: currency,
      price: PRICING.workflowAutomationSetup.setup,
      priceSpecification: {
        "@type": "PriceSpecification",
        name: "Initial setup",
        priceCurrency: currency,
        price: PRICING.workflowAutomationSetup.setup,
      },
      availability: "https://schema.org/InStock",
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com"}/solutions/flowstack`,
    },
    additionalType: "https://schema.org/Service",
    provider: {
      "@type": "Organization",
      name: "Bespoke Ethos",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

function WorkflowAutomationSetupServiceJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${base}/solutions/flowstack#service`,
    name: "Workflow Automation Setup",
    description:
      "Map your process, keep approvals intact, build production-ready automation in days, not months.",
    provider: {
      "@type": "Organization",
      name: "Bespoke Ethos",
      url: base,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Cleveland, OH",
    },
    url: `${base}/solutions/flowstack`,
  } as const;

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

function WorkflowAutomationSetupFaqJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: flowstackFaqItems.map((item) => ({
      "@type": "Question",
      name: item._title,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    mainEntityOfPage: `${base}/solutions/flowstack`,
  } as const;

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
