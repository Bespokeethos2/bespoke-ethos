import Image from "next/image";
import type { Metadata } from "next";

import { Breadcrumbs } from "@/app/_components/seo/breadcrumbs";
import { ButtonLink } from "@/common/button";
import { Heading } from "@/common/heading";
import { Section } from "@/common/layout";
import { PRICING, planSummary } from "@/config/pricing";
import { Accordion } from "@/app/_sections/accordion-faq/accordion";
import { OrganizationJsonLd } from '@/app/_components/seo/organization-jsonld';


export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Automation Skyway – Cloud Workflow Automation | Bespoke Ethos",
  description:
    "Automation Skyway maps your real process, keeps approvals intact, and builds production-ready cloud automation in days. From lead routing to inventory updates—one painful task, solved.",
  keywords: ["workflow automation", "cloud automation", "business process automation", "Cleveland AI", "automation setup", "small business automation"],
  alternates: { canonical: "/solutions/automation-skyway" },
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
    title: "Automation Skyway – Cloud Workflow Automation for Small Business",
    description: "Production-ready automation in days with rollbacks, approvals, and audit trails. Your direct path to the cloud.",
    url: "https://www.bespokeethos.com/solutions/automation-skyway",
    siteName: "Bespoke Ethos",
    locale: "en_US",
    images: [{
      url: "https://www.bespokeethos.com/assets/generated/hero-automation-skyway-desktop.webp",
      width: 1024,
      height: 1024,
      alt: "Automation Skyway cloud workflow automation diagram"
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@bespokeethos",
    creator: "@bespokeethos",
    title: "Automation Skyway – Cloud Workflow Automation",
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
    detail: "Runs stream into a simple operator dashboard—no guessing where a workflow stands.",
  },
] as const;

const AUTOMATION_SKYWAY_ASSETS = [
  {
    src: "/assets/generated/hero-ai-automation-dashboard-square.webp",
    alt: "Automation Skyway operator dashboard showing real-time workflow stats, approval queues, and run history",
    title: "Live operator dashboard",
    description: "Your ops lead sees run stats, pending approvals, and audit links at a glance—no digging required.",
  },
  {
    src: "/assets/generated/service-flowstack-builder-square.webp",
    alt: "Workflow builder canvas showing drag-and-connect automation steps with inline documentation",
    title: "Visual workflow builder",
    description: "Every step shows the owner, data source, and rollback path—no mystery branches or dead ends.",
  },
  {
    src: "/assets/generated/blog-what-to-automate-first-square.webp",
    alt: "Founder reviewing automation ROI metrics on laptop with clear time-saved calculations",
    title: "Time-saved tracking",
    description: "Track hours reclaimed each week with built-in reporting you can share with stakeholders.",
  },
] as const;

const automationSkywayFaqItems = [
  {
    _title: "What kinds of tasks are a good fit for Automation Skyway?",
    answer:
      "Automation Skyway is designed for repeatable processes that steal hours from your week—things like lead intake and routing, follow-up reminders, reporting, or handoffs between tools. If it's structured and happens all the time, it's likely a good fit.",
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
      <Section className="gap-6 -mt-6 md:-mt-4">
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
          <BreadcrumbJsonLd />

          <div className="automation-skyway-hero relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-amber-50 via-white to-slate-100 p-6 shadow-xl dark:from-slate-900/70 dark:via-slate-900/50 dark:to-slate-900/30 md:p-8">
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.9fr)]">
              <div className="space-y-5 text-text-secondary dark:text-dark-text-secondary">
                <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-white/90 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700 shadow-sm dark:bg-white/10 dark:text-amber-200">
                  Automation Skyway
                  <span className="text-[11px] font-normal tracking-normal text-text-tertiary dark:text-dark-text-tertiary">
                    Not another Zapier band-aid
                  </span>
                </div>
                <Heading subtitle="Enterprise-grade automation built for small business budgets. No IT team required." align="left">
                  <h1 className="font-hero-accent">Stop Losing 15+ Hours/Week to Manual Work</h1>
                </Heading>
                <div className="space-y-3">
                  <p className="text-base font-medium text-text-primary dark:text-dark-text-primary">
                    88% of small businesses say automation is their only way to compete with larger companies.
                    But most &quot;automation tools&quot; are glorified if-then recipes that break the moment your process gets real.
                  </p>
                  <p>
                    <strong>Automation Skyway is different.</strong> We don&apos;t hand you a login and wish you luck.
                    We interview your team, map your actual workflow (edge cases included), and build production-grade
                    automation that runs in the cloud with human approval checkpoints, rollback paths, and real-time monitoring.
                  </p>
                  <p>
                    The result? You get back <span className="font-semibold text-amber-600 dark:text-amber-400">15+ hours every week</span> while
                    keeping full control over critical decisions. No black-box AI. No &quot;it just stopped working&quot; surprises.
                  </p>
                </div>

                {/* What Makes Us Different - Comparison */}
                <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 dark:border-amber-800/30 dark:bg-amber-900/10">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300">Why Not Just Use Zapier?</p>
                  <div className="grid gap-3 text-sm sm:grid-cols-2">
                    <div>
                      <p className="font-medium text-text-primary dark:text-dark-text-primary">❌ DIY Automation Tools:</p>
                      <ul className="mt-1 space-y-1 text-text-tertiary dark:text-dark-text-tertiary">
                        <li>• Break silently, you find out days later</li>
                        <li>• No rollback when things go wrong</li>
                        <li>• You figure out edge cases alone</li>
                        <li>• Generic templates, not your process</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-amber-700 dark:text-amber-300">✓ Automation Skyway:</p>
                      <ul className="mt-1 space-y-1 text-text-secondary dark:text-dark-text-secondary">
                        <li>• 24/7 monitoring with instant alerts</li>
                        <li>• One-click rollback for any step</li>
                        <li>• We discover edge cases during build</li>
                        <li>• Custom-built for YOUR workflow</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <ButtonLink intent="primary" href="/contact?service=automation-skyway">
                    What&apos;s Your #1 Time-Waster?
                  </ButtonLink>
                  <ButtonLink intent="secondary" href="/pricing">
                    From $1,497 setup + $199/mo
                  </ButtonLink>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <Image
                    src="/assets/nglcc_trust_badge.png"
                    alt="NGLCC Certified LGBT Business Enterprise"
                    width={100}
                    height={57}
                    className="opacity-90 hover:opacity-100 transition-opacity"
                  />
                  <div className="text-xs text-text-tertiary dark:text-dark-text-tertiary">
                    <p className="font-medium">NGLCC Certified • Catalant Vetted</p>
                    <p>25% discount for LGBTQ-owned businesses</p>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-80 w-full overflow-hidden rounded-2xl border border-border bg-slate-100 shadow-xl dark:border-dark-border dark:bg-slate-900">
                <Image
                  src="/assets/generated/hero-automation-skyway-desktop.webp"
                  alt="Automation Skyway workflow builder showing lead routing automation with approval checkpoints and rollback paths"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 520px"
                  priority
                />
                {/* Floating Stats Overlay */}
                <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/95 p-3 shadow-lg backdrop-blur-sm dark:bg-black/80">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p className="text-lg font-bold text-amber-600 dark:text-amber-400">15+</p>
                      <p className="text-[10px] uppercase tracking-wide text-text-tertiary dark:text-dark-text-tertiary">Hours saved/week</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-amber-600 dark:text-amber-400">Days</p>
                      <p className="text-[10px] uppercase tracking-wide text-text-tertiary dark:text-dark-text-tertiary">Not months to deploy</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-amber-600 dark:text-amber-400">100%</p>
                      <p className="text-[10px] uppercase tracking-wide text-text-tertiary dark:text-dark-text-tertiary">You own the code</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Process - Detailed Timeline */}
          <section className="be-section-card space-y-8" aria-labelledby="process-heading">
            <Heading align="center" subtitle="What actually happens when you hire us">
              <h2 id="process-heading" className="text-2xl font-hero-accent">The Automation Skyway Process</h2>
            </Heading>

            {/* Vertical Timeline - More Visual, Less Generic */}
            <div className="relative mx-auto max-w-3xl">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-linear-to-b from-slate-800 via-amber-500 to-emerald-600 md:left-1/2 md:-translate-x-1/2" aria-hidden="true"></div>

              {/* Step 1: Discovery */}
              <div className="relative mb-12 pl-20 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
                <div className="md:text-right md:pr-12">
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white shadow-lg dark:bg-slate-700">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-black text-slate-900">1</span>
                    Day 1: Discovery Call
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-text-primary dark:text-dark-text-primary">
                    We Interview Your Best Person
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary dark:text-dark-text-secondary">
                    Not you—your ops lead, your bookkeeper, whoever actually does the task. We ask the annoying questions:
                    &quot;What happens when the customer typos their email?&quot; &quot;What if two orders come in at once?&quot;
                    This is where DIY automation fails—and where we start.
                  </p>
                </div>
                <div className="hidden md:block" aria-hidden="true"></div>
                {/* Timeline Dot */}
                <div className="absolute left-6 top-0 h-5 w-5 rounded-full border-4 border-slate-800 bg-white shadow-md md:left-1/2 md:-translate-x-1/2 dark:border-slate-600" aria-hidden="true"></div>
              </div>

              {/* Step 2: Architecture */}
              <div className="relative mb-12 pl-20 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
                <div className="hidden md:block" aria-hidden="true"></div>
                <div className="md:pl-12">
                  <div className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-4 py-2 text-sm font-bold text-white shadow-lg">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-black text-amber-600">2</span>
                    Days 2-3: Architecture
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-text-primary dark:text-dark-text-primary">
                    We Design the Fail-Safes First
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary dark:text-dark-text-secondary">
                    Before writing a single line, we map: Where can this break? What does rollback look like?
                    Who needs to approve what? You review a diagram showing every trigger, every branch,
                    every human checkpoint. No surprises after launch.
                  </p>
                </div>
                <div className="absolute left-6 top-0 h-5 w-5 rounded-full border-4 border-amber-500 bg-white shadow-md md:left-1/2 md:-translate-x-1/2" aria-hidden="true"></div>
              </div>

              {/* Step 3: Build */}
              <div className="relative mb-12 pl-20 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
                <div className="md:text-right md:pr-12">
                  <div className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-black text-amber-500">3</span>
                    Days 4-7: Custom Build
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-text-primary dark:text-dark-text-primary">
                    Production Code, Not Prototypes
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary dark:text-dark-text-secondary">
                    We wire your workflow using tools you already trust—Zapier, Make, n8n, Jotform, HubSpot, QuickBooks, Slack.
                    But unlike DIY setups, every step has error handling, retry logic, and logging built in.
                    You can trace any run from trigger to completion.
                  </p>
                </div>
                <div className="hidden md:block" aria-hidden="true"></div>
                <div className="absolute left-6 top-0 h-5 w-5 rounded-full border-4 border-amber-400 bg-white shadow-md md:left-1/2 md:-translate-x-1/2" aria-hidden="true"></div>
              </div>

              {/* Step 4: Deploy */}
              <div className="relative pl-20 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
                <div className="hidden md:block" aria-hidden="true"></div>
                <div className="md:pl-12">
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-bold text-white shadow-lg">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-black text-emerald-600">4</span>
                    Day 8+: Deploy & Monitor
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-text-primary dark:text-dark-text-primary">
                    You Own It. We Watch It.
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary dark:text-dark-text-secondary">
                    Go live with real-time dashboards, instant Slack/email alerts on failures, and documented rollback procedures.
                    Monthly retainer covers monitoring, tweaks, and the inevitable &quot;can we add one more thing?&quot;
                    No lock-in—you get full documentation and can leave anytime.
                  </p>
                </div>
                <div className="absolute left-6 top-0 h-5 w-5 rounded-full border-4 border-emerald-600 bg-white shadow-md md:left-1/2 md:-translate-x-1/2" aria-hidden="true"></div>
              </div>
            </div>

            {/* What Gets Automated - Real Examples */}
            <div className="mt-12 rounded-xl border-2 border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/50">
              <h3 className="mb-4 text-center text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300">
                Tasks Our Clients Automate Most Often
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-900">
                  <p className="text-2xl">📥</p>
                  <p className="mt-2 font-semibold text-text-primary dark:text-dark-text-primary">Lead Intake</p>
                  <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary">Form → CRM → Slack alert → auto-assign</p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-900">
                  <p className="text-2xl">💸</p>
                  <p className="mt-2 font-semibold text-text-primary dark:text-dark-text-primary">Invoice Follow-Up</p>
                  <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary">Overdue → email sequence → flag for human</p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-900">
                  <p className="text-2xl">📊</p>
                  <p className="mt-2 font-semibold text-text-primary dark:text-dark-text-primary">Weekly Reports</p>
                  <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary">Pull data → format → deliver to inbox</p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-900">
                  <p className="text-2xl">🔄</p>
                  <p className="mt-2 font-semibold text-text-primary dark:text-dark-text-primary">Data Sync</p>
                  <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary">Keep 2-3 systems in sync without conflicts</p>
                </div>
              </div>
            </div>
          </section>

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
                  Then we look at potential automation paths—this could be one piece of software or a few chained together. What we&apos;re looking for are resilient automations for our clients, meaning automations that won&apos;t fail the second the wind blows. This often means building deeper integration tunnels, rather than relying on something simple and out of the box like Zapier.
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
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-slate-50 shadow-xl dark:border-dark-border dark:bg-slate-900">
                  <Image
                    src="/assets/generated/service-flowstack-builder-desktop.webp"
                    alt="Automation Skyway workflow builder showing approval gates, error handlers, and documented branches"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 520px"
                  />
                </div>
                <figcaption className="mt-3 text-xs uppercase tracking-[0.25em] text-text-tertiary dark:text-dark-text-tertiary">
                  Builder view — every branch shows the owner, data source, and rollback path
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="space-y-4">
            <Heading align="left" subtitle="Comprehensive assets you keep after we hand off.">
              <h2 className="text-2xl font-hero-accent">Automation Skyway deliverable library</h2>
            </Heading>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {AUTOMATION_SKYWAY_ASSETS.map((asset) => (
                <article
                  key={asset.title}
                  className="rounded-2xl border border-border bg-surface-secondary/60 p-4 shadow-sm dark:border-dark-border dark:bg-dark-surface-secondary/60"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border bg-slate-50 dark:border-dark-border dark:bg-slate-900">
                    <Image
                      src={asset.src}
                      alt={asset.alt}
                      fill
                      className="object-contain p-2"
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
            <Heading align="center" title="Questions about Automation Skyway">
              <h2 className="text-2xl font-semibold">What to expect from your first automation build</h2>
            </Heading>
            <div className="mx-auto mt-6 flex w-full gap-8 md:max-w-(--breakpoint-sm) lg:max-w-(--breakpoint-md) lg:gap-14 lg:px-24 xl:max-w-(--breakpoint-xl)">
              <Accordion items={automationSkywayFaqItems} />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

function ProductJsonLd() {
  const price = planSummary(PRICING.automationSkyway.setup, PRICING.automationSkyway.monthly);
  const currency = PRICING.currency === "$" ? "USD" : "USD";
  const json = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Automation Skyway",
    description: "Map your process, keep approvals intact, build production-ready cloud automation in days. Your direct path to the cloud.",
    offers: {
      "@type": "Offer",
      priceCurrency: currency,
      price: PRICING.automationSkyway.setup,
      priceSpecification: {
        "@type": "PriceSpecification",
        name: "Starting setup (varies by scope)",
        priceCurrency: currency,
        price: PRICING.automationSkyway.setup,
      },
      availability: "https://schema.org/InStock",
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com"}/solutions/automation-skyway`,
    },
    additionalType: "https://schema.org/Service",
    serviceType: "Cloud Workflow Automation",
    availableLanguage: "en-US",
    image: {
      "@type": "ImageObject",
      url: "https://www.bespokeethos.com/assets/generated/hero-automation-skyway-desktop.webp",
      width: "1200",
      height: "630",
      caption: "Automation Skyway workflow builder interface"
    },
    provider: {
      "@type": "Organization",
      name: "Bespoke Ethos",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
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

function BreadcrumbJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: base,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Solutions",
        item: `${base}/solutions`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Automation Skyway",
        item: `${base}/solutions/automation-skyway`,
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
