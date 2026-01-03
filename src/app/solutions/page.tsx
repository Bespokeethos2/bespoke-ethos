import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { Heading } from "@/common/heading";
import { Section } from "@/common/layout";
import { ButtonLink } from "@/common/button";
import { PRICING, planSummary, formatMoney } from "@/config/pricing";
import { Breadcrumbs } from "@/app/_components/seo/breadcrumbs";
import { Accordion } from "@/app/_sections/accordion-faq/accordion";
import { OrganizationJsonLd } from '@/app/_components/seo/organization-jsonld';
import { PremiumContainer } from "@/components/ui/premium-container";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "AI Automation Solutions | Bespoke Ethos",
  description:
    "Fixed-price AI automation builds. No hourly billing, no scope creep. We build intelligent workflows that run your business.",
  alternates: { canonical: "/solutions" },
};

const solutions = [
  {
    slug: "cadence",
    title: "AI Receptionist", // EXPLANTORY NAME
    subtitle: "Powered by Cadence",
    summary:
      "A tireless front-desk agent that routes calls, schedules meetings, and answers questions. It doesn't sleep, it doesn't get cranky, and it follows your playbook perfectly.",
    logo: "/assets/logos/cadence_logo.png",
    variant: "glass" as const 
  },
  {
    slug: "consensus-engine",
    title: "AI Strategy Sprints", // EXPLANTORY NAME
    subtitle: "Powered by Consensus Engine",
    summary:
      "Don't bet the company on a gutcheck. We run adversarial multi-agent research sprints to stress-test your big decisions before you sign the check.",
    logo: "/assets/logos/consensus_engine_logo.png",
    variant: "obsidian" as const
  },
  {
    slug: "redbridging",
    title: "Automation Rescue", // EXPLANTORY NAME
    subtitle: "Redbridging Service",
    summary:
      "Buried in broken Zapier tasks? We come in, stabilize the patient, document the web, and set up alerts so you sleep at night.",
    logo: "/assets/logos/redbridging_logo.png",
    variant: "neon" as const
  },
  {
    slug: "automation-skyway",
    title: "Custom Cloud Workflows", // EXPLANTORY NAME
    subtitle: "Automation Skyway",
    summary:
      "One painful, manual process—completely off your plate. Scoped, built, and deployed with approvals and rollbacks intact.",
    logo: "/assets/logos/flowstack_logo.png",
    variant: "glass" as const
  },
];

const solutionsFaqItems = [
  {
    _title: "How do I know what I need?",
    answer: "If you're bleeding time on email/phone, you need an AI Receptionist. If you're stressed about a big pivot, you need a Strategy Sprint. If your current automations are breaking, you need Rescue. If you're doing manual data entry, you need Custom Workflows.",
  },
  {
    _title: "Can we start small?",
    answer: "We insist on it. We don't do six-month retainers until we've shipped a win. Start with one fixed-price build. See if it works. Then we talk about what's next.",
  },
  {
    _title: "What does 'Productized' mean?",
    answer: "It means I'm selling you a result, not my time. You pay a fixed price for a specific outcome. If I'm slow, I lose money. If I'm fast, you get value sooner. Incentives aligned.",
  }
];

export default function SolutionsPage() {
  return (
    <div className="bg-background min-h-screen relative overflow-hidden">
      
      {/* Cinematic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-orange-500/5 blur-[150px] rounded-full" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 blur-[100px] rounded-full" />
      </div>

      <OrganizationJsonLd />
      <SolutionsItemListJsonLd />
      <SolutionsFaqJsonLd />

      <Section className="relative z-10 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24">
        <div className="container mx-auto px-4 max-w-6xl space-y-10 sm:space-y-12 md:space-y-14">
          
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Solutions" }]} className="mb-4" />
          
          {/* Hero Content */}
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            <span className="text-orange-500 font-mono text-sm tracking-widest mb-1 block">
              {"// THE ARMORY"}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight leading-[0.92] sm:leading-[0.9]">
              PRECISION <br/> <span className="text-stroke-thin text-slate-800">TOOLS.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
              NGLCC-certified automation studio. We don&apos;t sell &ldquo;digital transformation.&rdquo;
              We sell <strong className="text-orange-200">finished inventory</strong> that works.
              Fixed scopes. 90-day warranties.
            </p>
          </div>

          {/* Solution Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 pt-6 sm:pt-8">
            {solutions.map((s) => {
              // Map pricing dynamically
              let priceLabel = "Fixed Scope";
              if (s.slug === "consensus-engine") priceLabel = "Starts at $1,497";
              if (s.slug === "automation-skyway") priceLabel = "Starts at $1,997";
              
              return (
                <PremiumContainer key={s.slug} variant={s.variant} className="p-6 sm:p-7 md:p-8 group hover:scale-[1.01] transition-transform duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">{s.title}</h2>
                      <p className="text-sm font-mono text-slate-500 uppercase tracking-wider">{s.subtitle}</p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-slate-900/50 border border-white/10 flex items-center justify-center overflow-hidden p-2">
                       <Image 
                         src={s.logo} 
                         alt="" 
                         width={48} 
                         height={48} 
                         className="object-contain w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                       />
                    </div>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed mb-7 sm:mb-8 min-h-[80px]">
                    {s.summary}
                  </p>

                  <div className="flex items-center justify-between border-t border-white/5 pt-6">
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">{priceLabel}</span>
                    <ButtonLink 
                      href={s.slug === "cadence" ? "/products/cadence" : `/solutions/${s.slug}`}
                      intent="secondary"
                      className="text-sm px-4 py-2"
                    >
                      Inspect Specs
                    </ButtonLink>
                  </div>
                </PremiumContainer>
              );
            })}
          </div>

          {/* CTA Band */}
          <div className="py-10 sm:py-12 border-y border-white/5 text-center mt-6 sm:mt-8">
             <h3 className="text-2xl font-bold text-white mb-3 sm:mb-4">Not sure what&apos;s broken?</h3>
             <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
               Book a triage call. We&apos;ll tell you what we&apos;d fix first, even if you don&apos;t hire us.
             </p>
             <div className="flex justify-center gap-4 flex-col sm:flex-row items-center">
               <ButtonLink intent="primary" href="/contact">Book Triage Call</ButtonLink>
               <ButtonLink intent="secondary" href="/pricing">View Pricing Menu</ButtonLink>
             </div>
             <div className="mt-8">
               <Link href="/contact" className="text-orange-400 hover:text-orange-300 font-medium underline underline-offset-4 decoration-orange-500/30 hover:decoration-orange-300 transition-all">
                 Not sure where to start? Book a free consultation
               </Link>
             </div>
          </div>

          {/* FAQ */}
          <div className="pt-10 sm:pt-12 md:pt-14 max-w-3xl mx-auto">
             <h2 className="text-3xl font-bold text-white text-center mb-7 sm:mb-8 font-hero-accent">Standard Operating Procedure</h2>
             {/* Forced high-contrast wrapper for Accordion text */}
             <div className="text-slate-200 [&_button]:text-white [&_div[data-state=open]]:text-slate-300">
               <Accordion items={solutionsFaqItems} />
             </div>
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
