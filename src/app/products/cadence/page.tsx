import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { Section } from "@/common/layout";
import { Heading } from "@/common/heading";
import { ButtonLink } from "@/common/button";
import { Breadcrumbs } from "@/app/_components/seo/breadcrumbs";
import { TrustStrip } from "@/app/_components/trust-strip";
import { PRICING, formatMoney } from "@/config/pricing";
import { Accordion } from "@/app/_sections/accordion-faq/accordion";
import { OrganizationJsonLd } from '@/app/_components/seo/organization-jsonld';
import { PremiumContainer } from "@/components/ui/premium-container";
import { TechNerdCard } from "@/components/tech-nerd-card";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "AI Receptionist (Cadence) | Bespoke Ethos",
  description:
    "A 24/7 AI Receptionist that knows your business. Powered by Cadence. It routes calls, schedules meetings, and answers questions without hallucinating.",
  alternates: { canonical: "/products/cadence" },
};

const cadenceFaqItems = [
  {
    _title: "How is this different from a basic chatbot?",
    answer:
      "Most chatbots are either dumb buttons (If X, then Y) or wild hallucinations. Cadence is a 'Cognitive Prosthetic'—it has a memory of your specific business rules, tone, and inventory. It knows when to answer and when to shut up and escalate to a human.",
  },
  {
    _title: "How do you train it?",
    answer:
      "We don't just 'scrape your site.' We ingest your emails, your Slack history (if you let us), your help docs, and your founder stories. We build a 'Knowledge Graph' so it understands context, not just keywords.",
  },
  {
    _title: "What if it says something wrong?",
    answer:
      "We build strict guardrails. If confidence is low, it escalates to you. It never guesses. You can also 'rollback' its memory if it learns something incorrect.",
  },
];

export default function CadencePage() {
  return (
    <div className="bg-background min-h-screen relative overflow-hidden">
      
       {/* Cinematic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-orange-500/5 blur-[150px] rounded-full" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/10 blur-[100px] rounded-full" />
      </div>

      <OrganizationJsonLd />
      <CadenceProductJsonLd />
      
      <Section className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl space-y-12">
          
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Solutions", href: "/solutions" },
              { name: "AI Receptionist" },
            ]}
            className="mb-8"
          />

          {/* SOTA HERO */}
          <PremiumContainer variant="glass" className="p-8 md:p-12 relative overflow-hidden group">
             <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
               <div className="space-y-6">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-950/30">
                   <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                   <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">AI Receptionist</span>
                 </div>
                 
                 <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
                   NEVER MISS <br/> <span className="text-stroke-thin text-slate-800">A LEAD.</span>
                 </h1>
                 
                 <p className="text-xl text-slate-300 font-light leading-relaxed">
                   Powered by <strong>Cadence</strong>. A tireless front-desk agent that routes calls, schedules meetings, and answers questions. 
                   It follows your playbook, not its own whims.
                 </p>

                 <div className="flex flex-col sm:flex-row gap-4 pt-4">
                   <ButtonLink intent="primary" href="/contact">Book Demo</ButtonLink>
                   <ButtonLink intent="secondary" href="#specs">View Specs</ButtonLink>
                 </div>
               </div>

               {/* Visual */}
               <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl">
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-center p-8">
                     <div className="w-16 h-16 bg-orange-500/20 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
                        <Image src="/assets/logos/cadence_logo.png" alt="Cadence Logo" width={32} height={32} className="opacity-80" />
                     </div>
                     <p className="text-slate-400 font-mono text-sm">System Online. Listening...</p>
                   </div>
                 </div>
               </div>
             </div>
          </PremiumContainer>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "No Hallucinations", text: "Strict RAG guardrails. If it doesn't know, it asks you." },
              { title: "Routes to Human", text: "Seamless handoff to email, Slack, or SMS when high-stakes." },
              { title: "Perfect Memory", text: "Remembers returning customers and context from last month." }
            ].map((card, i) => (
               <PremiumContainer key={i} variant="obsidian" className="p-6">
                 <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                 <p className="text-slate-400 text-sm">{card.text}</p>
               </PremiumContainer>
            ))}
          </div>

          {/* Technical Specs */}
          <div id="specs">
             <TechNerdCard product="cadence" />
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto pt-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8 font-hero-accent">Standard Operating Procedure</h2>
            <div className="text-slate-300">
               <Accordion items={cadenceFaqItems} />
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
}

function CadenceProductJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AI Receptionist (Cadence)",
    description: "Intelligent AI Answer Engine for small business.",
    brand: { "@type": "Brand", name: "Bespoke Ethos" },
    offers: {
      "@type": "Offer",
      price: "1497.00",
      priceCurrency: "USD"
    }
  } as const;

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}