import Image from "next/image";
import type { Metadata } from "next";

import { Breadcrumbs } from "@/app/_components/seo/breadcrumbs";
import { Heading } from "@/common/heading";
import { Section } from "@/common/layout";
import { ButtonLink } from "@/common/button";
import { PRICING, formatMoney } from "@/config/pricing";
import { Accordion } from "@/app/_sections/accordion-faq/accordion";
import { OrganizationJsonLd } from '@/app/_components/seo/organization-jsonld';
import { PremiumContainer } from "@/components/ui/premium-container";
import { TechNerdCard } from "@/components/tech-nerd-card";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "AI Strategy Sprints | Bespoke Ethos",
  description:
    "Don't guess. We run multi-agent adversarial research sprints to stress-test your big decisions before you sign the check. Powered by Consensus Engine.",
  alternates: { canonical: "/solutions/consensus-engine" },
};

const consensusFaqItems = [
  {
    _title: "How is this different from asking ChatGPT?",
    answer:
      "ChatGPT gives you the 'average' internet answer. Our Strategy Sprint uses multiple competing agents (A Red Team, a Blue Team, a Financial Analyst) to argue over your decision, then synthesizes the winners. It's adversarial, not agreeable.",
  },
  {
    _title: "What do I get?",
    answer:
      "A cited Decision Brief. Options, Risks, Tradeoffs, and a recommended path with a confidence core. It's a document you can take to the bank (or your board).",
  },
  {
    _title: "How long does it take?",
    answer:
      "5 days. We scope it on Monday, run the agents Tuesday-Wednesday, review Thursday, and hand off the brief on Friday.",
  },
];

export default function ConsensusEnginePage() {
  return (
    <div className="bg-background min-h-screen relative overflow-hidden">
        {/* Cinematic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-900/10 blur-[150px] rounded-full" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/5 blur-[100px] rounded-full" />
      </div>

      <OrganizationJsonLd />
      
      <Section className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl space-y-12">
          
           <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Solutions", href: "/solutions" },
              { name: "AI Strategy Sprint" },
            ]}
            className="mb-8"
          />

           {/* SOTA HERO */}
          <PremiumContainer variant="obsidian" className="p-8 md:p-12 relative overflow-hidden group">
             <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
               <div className="space-y-6">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-950/30">
                   <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                   <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">AI Strategy Sprints</span>
                 </div>
                 
                 <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
                   DECISION <br/> <span className="text-stroke-thin text-slate-800">CLARITY.</span>
                 </h1>
                 
                 <p className="text-xl text-slate-300 font-light leading-relaxed">
                   Powered by <strong>Consensus Engine</strong>. Don't bet the company on a gut check. We run 
                   adversarial multi-agent research sprints to stress-test your big decisions.
                 </p>

                 <div className="flex flex-col sm:flex-row gap-4 pt-4">
                   <ButtonLink intent="primary" href="/contact?subject=Strategy%20Sprint">Book Sprint</ButtonLink>
                   <ButtonLink intent="secondary" href="#specs">View Specs</ButtonLink>
                 </div>
               </div>

               {/* Visual */}
               <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl">
                 <Image
                   src="/assets/generated/service-consensus-decision-interface-desktop.webp"
                   alt="Consensus Engine Decision Interface"
                   fill
                   className="object-cover"
                   priority
                 />
               </div>
             </div>
          </PremiumContainer>
          
          {/* Tech Specs */}
          <div id="specs">
             <TechNerdCard product="consensus" />
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto pt-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8 font-hero-accent">Standard Operating Procedure</h2>
            <div className="text-slate-300">
               <Accordion items={consensusFaqItems} />
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
}
