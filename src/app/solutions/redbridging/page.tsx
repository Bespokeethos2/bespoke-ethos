import Image from "next/image";
import type { Metadata } from "next";

import { Breadcrumbs } from "@/app/_components/seo/breadcrumbs";
import { Heading } from "@/common/heading";
import { Section } from "@/common/layout";
import { ButtonLink } from "@/common/button";
import { Accordion } from "@/app/_sections/accordion-faq/accordion";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Automation Rescue – Fix Broken Zapier & Make.com Workflows | Bespoke Ethos",
  description:
    "Automation Rescue fixes broken Zapier, Make.com, and other brittle automations for small businesses. Stabilize workflows, add monitoring, and get clear documentation so outages stop being a surprise.",
  alternates: { canonical: "/solutions/redbridging" },
};

const automationRescueFaqItems = [
  {
    _title: "What tools do you support with Automation Rescue?",
    answer:
      "Most rescues focus on Zapier, Make.com, HubSpot workflows, and similar glue tools that connect your stack. If you have a different platform in mind, we’ll quickly confirm whether it’s a fit before you commit.",
  },
  {
    _title: "How do you decide whether to repair or rebuild an automation?",
    answer:
      "We start with a short audit to see whether your existing workflows can be stabilized safely. If the current setup is too brittle or unclear, we’ll recommend a targeted rebuild so you’re not patching something that will keep failing quietly.",
  },
  {
    _title: "How fast can you usually fix a broken workflow?",
    answer:
      "Simple rescues often ship in days, not weeks. More complex systems with many moving parts can take longer, but the goal is always to stop the bleeding quickly and then harden the system with monitoring and documentation.",
  },
  {
    _title: "Will I get documentation so my team isn’t dependent on you forever?",
    answer:
      "Yes. Every Automation Rescue engagement includes plain-language documentation of what was fixed, how the workflow behaves, and where to look if issues crop up later. The aim is to reduce your risk—not lock you into us indefinitely.",
  },
] as const;

export default function AutomationRescuePage() {
  return (
    <main className="be-page-slate">
      <Section className="gap-5 -mt-14 md:gap-6 md:-mt-4">
        <div className="be-section-card space-y-6">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Solutions", href: "/solutions" },
              { name: "Automation Rescue" },
            ]}
          />
          <ProductJsonLd />
          <AutomationRescueServiceJsonLd />
          <AutomationRescueFaqJsonLd />
          <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-surface-secondary dark:border-dark-border dark:bg-dark-surface-secondary be-image-frame shadow-xl">
            <div className="relative h-40 w-full sm:h-48 lg:h-56">
              <Image
                src="/assets/generated/hero-redbridging-desktop.webp"
                alt="Stylized bridge of circuit traces connecting chaos on one side to calm, stable operations on the other"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 960px"
                priority
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="rounded-2xl bg-black/45 px-5 py-3 text-center text-sm sm:text-base font-medium text-white/95 shadow-2xl backdrop-blur-md">
                  <div className="mb-1 text-xs uppercase tracking-[0.22em] text-amber-200">Automation Rescue</div>
                  <div className="text-sm sm:text-base">Rebuild Your Broken Automations</div>
                </div>
              </div>
            </div>
          </div>
          <Heading subtitle="Rebuild your broken automations" align="left">
            <h1>Automation Rescue</h1>
          </Heading>
          <div className="space-y-4 text-text-secondary dark:text-dark-text-secondary">
            <p>
              I&apos;ve been there—waking up to a broken Zapier flow that&apos;s been silently failing for days, costing you orders, invoices, or leads. The panic is
              real. That&apos;s why I created Automation Rescue: to rebuild your broken automations and get your business back on track.
            </p>
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
              Broken workflow? Duct-taped integrations? We fix what&apos;s failing and build it right, fast.
            </p>
            <p>
              We stabilize brittle workflows, add monitoring, and document everything so the next outage doesn&apos;t blindside you. Most rescues ship in days, not
              weeks—because I know you can&apos;t afford to wait.
            </p>
          </div>
          <ul className="mt-2 list-disc pl-6 text-text-secondary dark:text-dark-text-secondary">
            <li>Audit and harden existing automations</li>
            <li>Monitoring with alerts and failure retries</li>
            <li>Documentation and ownership handoff</li>
            <li>Fast fixes: days not weeks</li>
          </ul>
          <div className="mt-6 rounded-2xl border border-border bg-surface-secondary/70 p-4 dark:border-dark-border dark:bg-dark-surface-secondary/70">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-text-tertiary dark:text-dark-text-tertiary mb-2">Pricing</p>
            <p className="text-lg font-semibold text-text-primary dark:text-dark-text-primary mb-2">
              Starting at $149.99
            </p>
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-4">
              Fast, reliable automation rescue to get your workflows back on track. Most rescues ship in days, not weeks. LGBTQ-owned businesses receive 25% off upfront project fees on approved scopes.
            </p>
            <div className="flex gap-3">
              <ButtonLink intent="primary" href="/contact">
                Rescue my automation
              </ButtonLink>
              <ButtonLink intent="secondary" href="/pricing">
                See all pricing
              </ButtonLink>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
            <div className="space-y-3 text-text-secondary dark:text-dark-text-secondary">
              <h2 className="text-base font-semibold text-text-primary dark:text-dark-text-primary">
                Automation Rescue monitoring in action
              </h2>
              <p>
                After a rescue, Automation Rescue keeps watch: run health, failure spikes, and alerts that reach you before your customers feel pain. No more wondering
                whether your automations are quietly failing in the background.
              </p>
            </div>
            <div className="relative h-48 w-full overflow-hidden rounded-xl border border-border bg-surface-secondary dark:border-dark-border dark:bg-dark-surface-secondary">
              <Image
                src="/assets/generated/service-redbridging-monitoring-desktop.webp"
                alt="Automation Rescue monitoring dashboard showing AI workflow health and alerts"
                fill
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
          </div>

          <div className="mt-10">
            <Heading align="center" title="Questions about Automation Rescue">
              <h2 className="text-2xl font-semibold">How a rescue project usually works</h2>
            </Heading>
            <div className="mx-auto mt-6 flex w-full gap-8 md:max-w-(--breakpoint-sm) lg:max-w-(--breakpoint-md) lg:gap-14 lg:px-24 xl:max-w-(--breakpoint-xl)">
              <Accordion items={automationRescueFaqItems} />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

function ProductJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Automation Rescue",
    description: "Broken workflow? Duct-taped integrations? We fix what's failing and build it right, fast.",
    provider: {
      "@type": "Organization",
      name: "Bespoke Ethos",
    },
    url: `${base}/solutions/redbridging`,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

function AutomationRescueServiceJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${base}/solutions/redbridging#service`,
    name: "Automation Rescue",
    description:
      "Broken workflow? Duct-taped integrations? We fix what's failing and build it right, fast. LGBTQ-owned businesses receive 25% off upfront project fees on approved scopes.",
    provider: {
      "@type": "Organization",
      name: "Bespoke Ethos",
      url: base,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Cleveland, OH",
    },
    url: `${base}/solutions/redbridging`,
  } as const;

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

function AutomationRescueFaqJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: automationRescueFaqItems.map((item) => ({
      "@type": "Question",
      name: item._title,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    mainEntityOfPage: `${base}/solutions/redbridging`,
  } as const;

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

