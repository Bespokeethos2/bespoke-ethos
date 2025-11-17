import type { Metadata } from "next";

import { Section } from "@/common/layout";
import { Heading } from "@/common/heading";
import { ButtonLink } from "@/common/button";
import { Breadcrumbs } from "@/app/_components/seo/breadcrumbs";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "A La Carte - Flexible Add-Ons | Bespoke Ethos",
  description: "Pick exactly what you need: Chatbots, lead capture, small fixes, and syncs. Plain language, no contract.",
  alternates: { canonical: "/solutions/a-la-carte" },
};

const ITEMS = [
  { title: "Chatbots", blurb: "On-brand answers 24/7 with graceful handoff and lead capture.", href: "/solutions/chatbots" },
  { title: "Lead Capture", blurb: "Accessible forms that route cleanly to your CRM with alerts.", href: "/solutions/essentials" },
  { title: "Zap Fix", blurb: "Quick rescue for a brittle Zapier flow with retries and alerts.", href: "/solutions/essentials" },
  { title: "CRM Sync", blurb: "Keep contacts and deals aligned without weird duplicates.", href: "/solutions/essentials" },
];

export default function ALaCartePage() {
  return (
    <main className="be-page-slate">
      <Section className="gap-5 -mt-14 md:gap-6 md:-mt-4">
        <div className="be-section-card space-y-6">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Solutions", href: "/solutions" },
              { name: "A La Carte" },
            ]}
          />

          <div className="relative overflow-hidden rounded-2xl">
            <div className="hero-cloud-bg absolute inset-0 -z-10" />
            <div className="relative z-10 p-6 md:p-8">
              <Heading subtitle="Flexible Add-Ons" align="left">
                <h1 className="font-hero-accent">A La Carte</h1>
              </Heading>
              <p className="mt-2 max-w-prose text-text-secondary dark:text-dark-text-secondary">
                Pick only what you need. Plain language, simple pricing, and no lock-in. Each add-on follows the same
                rules: you keep ownership and approvals, and we monitor the edge cases.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ITEMS.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-border bg-surface-secondary/70 p-5 shadow-sm dark:border-dark-border dark:bg-dark-surface-secondary/70"
              >
                <h2 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">{item.title}</h2>
                <p className="mt-1 text-text-secondary dark:text-dark-text-secondary">{item.blurb}</p>
                <div className="mt-3">
                  <ButtonLink intent="secondary" href={item.href}>
                    Learn more
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}

