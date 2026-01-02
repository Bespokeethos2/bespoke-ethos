import Image from "next/image";
import type { Metadata } from "next";

import { Breadcrumbs } from "../../_components/seo/breadcrumbs";
// Removed ButtonLink import and all usages as file/module does not exist
// Removed Heading, Section, and pricing imports as requested
// Update the import path to the correct location of Accordion
import { Accordion } from "../../_sections/accordion-faq/accordion";
import { OrganizationJsonLd } from '@/app/_components/seo/organization-jsonld';


export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Automation Skyway - Cloud Workflow Automation | Bespoke Ethos",
  description:
    "Automation Skyway maps your real process, keeps approvals intact, and builds production-ready cloud automation in days. From lead routing to inventory updates - one painful task, solved.",
  keywords: ["workflow automation", "cloud automation", "business process automation", "Cleveland AI", "automation setup", "small business automation"],
  alternates: { canonical: "/solutions/automation-skyway" },
  openGraph: {
    title: "Automation Skyway - Cloud Workflow Automation for Small Business",
    description: "Production-ready automation in days with rollbacks, approvals, and audit trails. Your direct path to the cloud.",
    url: "https://www.bespokeethos.com/solutions/automation-skyway",
    images: [{
      url: "https://www.bespokeethos.com/assets/generated/hero-automation-skyway-desktop.webp",
      width: 1200,
      height: 630,
      alt: "Automation Skyway cloud workflow automation diagram"
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@bespokeethos",
    creator: "@bespokeethos",
    title: "Automation Skyway - Cloud Workflow Automation",
    description: "Production-ready automation in days with rollbacks and approvals. Built for small businesses.",
    images: ["https://www.bespokeethos.com/assets/generated/hero-automation-skyway-desktop.webp"],
  },
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
    detail: "Runs stream into a simple operator dashboard - no guessing where a workflow stands.",
  },
] as const;

const AUTOMATION_SKYWAY_ASSETS = [
  {
    src: "/assets/generated/flowstack-operator-dashboard-square.png",
    alt: "Automation Skyway operator dashboard showing cloud automation stats and approval queues",
    title: "Operator dashboard snapshot",
    description: "High-level run stats, approvals awaiting action, and audit links your ops lead checks at a glance.",
  },
  {
    src: "/assets/generated/flowstack-builder-square.png",
    alt: "Automation Skyway cloud workflow builder canvas with drag-and-connect interface",
    title: "Builder canvas zoom",
    description: "Drag-to-connect steps with inline metadata so every stakeholder can see why each move exists.",
  },
  {
    src: "/assets/generated/flowstack-exec-square.png",
    alt: "Founder reviewing Automation Skyway cloud automation outputs on tablet interface",
    title: "Exec-ready hero",
    description: "Brand-safe creative you can reuse in decks, investor updates, and onboarding docs.",
  },
] as const;

const automationSkywayFaqItems = [
  {
    _title: "What kinds of tasks are a good fit for Automation Skyway?",
    answer:
      "Automation Skyway is designed for repeatable processes that steal hours from your week - things like lead intake and routing, follow-up reminders, reporting, or handoffs between tools. If it's structured and happens all the time, it's likely a good fit.",
  },
  {
    _title: "How much of my time will the project require?",
    answer:
      "You'll spend some time up front walking through your real process, edge cases, and constraints. After that, most of your involvement is reviewing drafts and giving feedback while we handle the build and testing.",
  },
  {
    _title: "Will the automation replace my team or just support them?",
    answer:
      "The goal is to free your team from repetitive coordination work, not to replace the judgment calls they make. Approvals and human checkpoints stay in the loop so people still sign off on risky steps.",
  },
  {
    _title: "What happens after handoff if something breaks?",
    answer:
      "Every build ships with documentation and rollback paths so you're not stuck. Depending on your plan, we can also include a support window to help you adjust as real-world usage uncovers new edge cases.",
  },
] as const;

export default function AutomationSkywayPage() {
  return (
    <main className="be-page-slate">
      <OrganizationJsonLd />
      <div className="gap-6 -mt-6 md:-mt-4">
        <div className="be-section-card space-y-6 pt-4 md:pt-5">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Solutions", href: "/solutions" },
              { name: "Automation Skyway" },
            ]}
          />
          <ProductJsonLd />
          <AutomationSkywayServiceJsonLd />
          <AutomationSkywayFaqJsonLd />
          <AutomationSkywaySpeakableJsonLd />

          <div className="automation-skyway-hero relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-amber-50 via-white to-slate-100 p-6 shadow-xl dark:from-slate-900/70 dark:via-slate-900/50 dark:to-slate-900/30 md:p-8">
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.9fr)]">
              <div className="space-y-5 text-text-secondary dark:text-dark-text-secondary">
                <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-white/90 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700 shadow-sm dark:bg-white/10 dark:text-amber-200">
                  Automation Skyway
                  <span className="text-[11px] font-normal tracking-normal text-text-tertiary dark:text-dark-text-tertiary">
                    Your direct path to the cloud
                  </span>
                </div>
                <div className="mb-6 space-y-2 text-left">
                  <h1 className="font-hero-accent text-3xl md:text-4xl text-text-primary dark:text-dark-text-primary">Automation Skyway</h1>
                  <p className="text-lg font-medium text-amber-600">Cloud workflow automation for small businesses. Own the automation, keep control.</p>
                </div>
                <div className="space-y-3">
                  <p>
                    When I was drowning in my publishing business, I didn&apos;t need a fancy AI platform. I needed someone
                    to automate the one task that was stealing hours from my week. So I built Automation Skyway for myself first. It&apos;s
                    our proprietary cloud automation framework - your direct path from desk to cloud - designed to handle any business task, from lead routing to
                    inventory updates.
                  </p>
                  <p>
                    We map your real process, keep human approvals intact, and ship production-ready cloud automation in days. Every
                    build ships with documentation, audit trails, and rollback - because I learned the hard way that automation
                    without guardrails creates more problems than it solves.
                  </p>
                </div>
                <ul className="list-disc space-y-1 pl-5 text-sm sm:text-base">
                  <li>Keeps humans in the approval loop where it matters.</li>
                  <li>Single source of truth with clear ownership for each step.</li>
                  <li>Rollback paths for every critical action.</li>
                </ul>
                {/* Removed ButtonLink buttons as component is missing */}
                <div className="flex items-center gap-2 pt-2">
                  <Image
                    src="/assets/nglcc_trust_badge.png"
                    alt="NGLCC Certified LGBT Business Enterprise"
                    width={140}
                    height={80}
                    className="opacity-90 hover:opacity-100 transition-opacity"
                  />
                  <span className="text-xs text-text-tertiary dark:text-dark-text-tertiary">
                    NGLCC Certified LGBT Business Enterprise
                  </span>
                </div>
              </div>
              <div className="relative h-full min-h-80 w-full overflow-hidden rounded-2xl border border-border bg-white shadow-xl dark:border-dark-border dark:bg-black/40">
                <Image
                  src="/assets/generated/hero-automation-skyway-desktop.webp"
                  alt="Automation Skyway cloud workflow builder interface showing direct path from desk to cloud"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 520px"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="automation-skyway-infographic rounded-2xl border border-border bg-surface-secondary/70 p-6 dark:border-dark-border dark:bg-dark-surface-secondary/70 md:p-8">
            <div className="lg:flex lg:items-start lg:gap-8">
              <div className="space-y-4 text-text-secondary dark:text-dark-text-secondary lg:flex-1">
                <h2 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary">
                  Automation Skyway blueprint at a glance
                </h2>
                <p>
                  The blueprint board is where we sit down with the founders and figure out what is taking up their time. Typically there are two or three tasks that monopolize most founders&apos; time. Once we identify those, we can look into automating them.
                </p>
                <p>
                  Then we look at potential automation paths - this could be one piece of software or a few chained together. What we&apos;re looking for are resilient automations for our clients, meaning automations that won&apos;t fail the second the wind blows. This often means building deeper integration tunnels, rather than relying on something simple and out of the box like Zapier.
                </p>
                <p>
                  Then we deploy the automation to the client and they begin testing. Ideally, it should be something that happens automatically. That is what we strive for in every single automation we ship.
                </p>
                <p>
                  The bottom line is: if it&apos;s not saving your time, it&apos;s not worth having around. This isn&apos;t about trading one set of responsibilities for another. It&apos;s about handing off the responsibilities so you can focus on the tasks that let you grow, not the ones that have you stuck in a plateau.
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
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-white shadow-xl dark:border-dark-border dark:bg-black/40">
                  <Image
                    src="/assets/generated/service-flowstack-builder-desktop.webp"
                    alt="Workflow Automation Setup workflow automation builder showing approvals, alerts, and human steps"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 520px"
                  />
                </div>
                <figcaption className="mt-3 text-xs uppercase tracking-[0.25em] text-text-tertiary dark:text-dark-text-tertiary">
                  Builder view - every branch documents the owner, data source, and rollback pair.
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="space-y-4">
            <div className="mb-8 space-y-2 text-left">
              <h2 className="font-hero-accent text-2xl text-text-primary dark:text-dark-text-primary">Automation Skyway deliverable library</h2>
              <p className="text-text-secondary dark:text-dark-text-secondary">Comprehensive assets you keep after we hand off.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {AUTOMATION_SKYWAY_ASSETS.map((asset) => (
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
          <div className="mt-10 mb-8 text-center space-y-2">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-600">Questions about Automation Skyway</p>
            <h2 className="text-2xl font-semibold text-text-primary dark:text-dark-text-primary">What to expect from your first automation build</h2>
          </div>
            <div className="mx-auto mt-6 flex w-full gap-8 md:max-w-(--breakpoint-sm) lg:max-w-(--breakpoint-md) lg:gap-14 lg:px-24 xl:max-w-(--breakpoint-xl)">
              <Accordion items={automationSkywayFaqItems} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function ProductJsonLd() {
  return null;
}

function AutomationSkywayServiceJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${base}/solutions/automation-skyway#service`,
    name: "Automation Skyway",
    description:
      "Map your process, keep approvals intact, build production-ready cloud automation in days. Your direct path to the cloud.",
    additionalType: "CloudAutomationService",
    serviceType: "Workflow Automation",
    availableLanguage: "en-US",
    provider: {
      "@type": "Organization",
      name: "Bespoke Ethos",
      url: base,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    url: `${base}/solutions/automation-skyway`,
  } as const;

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

function AutomationSkywayFaqJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: automationSkywayFaqItems.map((item) => ({
      "@type": "Question",
      name: item._title,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    mainEntityOfPage: `${base}/solutions/automation-skyway`,
  } as const;

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

function AutomationSkywaySpeakableJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".automation-skyway-hero p", "h2"]
          }
        })
      }}
    />
  );
}



