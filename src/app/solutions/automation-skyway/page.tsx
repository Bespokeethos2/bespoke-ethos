import Image from "next/image";
import type { Metadata } from "next";

import { Breadcrumbs } from "@/app/_components/seo/breadcrumbs";
import { Heading } from "@/common/heading";
import { Section } from "@/common/layout";
import { ButtonLink } from "@/common/button";
import { Accordion } from "@/app/_sections/accordion-faq/accordion";
import { OrganizationJsonLd } from '@/app/_components/seo/organization-jsonld';
import { PremiumContainer } from "@/components/ui/premium-container";
import { TechNerdCard } from "@/components/tech-nerd-card";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Custom Cloud Workflows (Automation Skyway) | Bespoke Ethos",
  description:
    "One painful, manual process—completely off your plate. Scoped, built, and deployed with approvals and rollbacks intact. The robust alternative to brittle Zaps.",
  alternates: { canonical: "/solutions/automation-skyway" },
};

const skywayFaqItems = [
  {
    _title: "How is this different from Automation Rescue?",
    answer:
      "Rescue is for fixing existing, broken automations. Custom Cloud Workflows (Skyway) is for building *new* infrastructure from scratch to replace a manual human process.",
  },
  {
    _title: "Is this just a Make.com scenario?",
    answer:
      "It starts there, but we add the 'Skyway' layer: error handling, logging, human-approval steps, and rollback capabilities. It's the difference between a shaky script and a reliable software pipeline.",
  },
  {
    _title: "Can I edit it later?",
    answer:
      "Yes. You own the account and the keys. We hand over a video walkthrough and documentation so your team can maintain it, or we can manage it for you.",
  },
];

export default function AutomationSkywayPage() {
  return (
    <div className="bg-background min-h-screen relative overflow-hidden">
        {/* Cinematic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[10%] left-[50%] w-[80%] h-[80%] bg-sky-900/10 blur-[150px] rounded-full translate-x-[-50%]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/5 blur-[100px] rounded-full" />
      </div>

      <OrganizationJsonLd />
      
      <Section className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl space-y-12">
          
           <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Solutions", href: "/solutions" },
              { name: "Custom Cloud Workflows" },
            ]}
            className="mb-8"
          />

           {/* SOTA HERO */}
          <PremiumContainer variant="glass" className="p-8 md:p-12 relative overflow-hidden group">
             <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
               <div className="space-y-6">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/30">
                   <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-pulse" />
                   <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">Custom Cloud Workflows</span>
                 </div>
                 
                 <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
                   SCALABLE <br/> <span className="text-stroke-thin text-slate-800">INFRASTRUCTURE.</span>
                 </h1>
                 
                 <p className="text-xl text-slate-300 font-light leading-relaxed">
                   Powered by <strong>Automation Skyway</strong>. One painful, manual process—completely off your plate. 
                   Scoped, built, and deployed with approvals and rollbacks intact.
                 </p>

                 <div className="flex flex-col sm:flex-row gap-4 pt-4">
                   <ButtonLink intent="primary" href="/contact?subject=Custom%20Workflow">Video Scoping Call</ButtonLink>
                   <ButtonLink intent="secondary" href="#specs">View Specs</ButtonLink>
                 </div>
               </div>

              {/* Visual */}
               <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl group-hover:border-orange-500/30 transition-colors duration-500">
                 <Image 
                    src="/assets/generated/skyway-hero.png" 
                    alt="Automation Skyway Infrastructure" 
                    fill 
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                 
                 <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur border border-white/10">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-mono text-emerald-400 font-bold tracking-wider">SYSTEM ACTIVE</span>
                 </div>
               </div>
             </div>
          </PremiumContainer>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Human-in-the-Loop", text: "Critical steps pause for your approval via Slack or Email." },
              { title: "Error Handling", text: "If an API fails, it retries or alerts you. It doesn't just die silent." },
              { title: "Documented", text: "We hand over a full schematic of how your business runs." }
            ].map((card, i) => (
               <PremiumContainer key={i} variant="obsidian" className="p-6">
                 <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                 <p className="text-slate-400 text-sm">{card.text}</p>
               </PremiumContainer>
            ))}
          </div>
          
          {/* Tech Specs */}
          <div id="specs">
             <TechNerdCard product="skyway" />
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto pt-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8 font-hero-accent">Standard Operating Procedure</h2>
            <div className="text-slate-300">
               <Accordion items={skywayFaqItems} />
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
}
