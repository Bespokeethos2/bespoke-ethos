import Link from "next/link";
import type { Metadata } from "next";

import { Section } from "@/common/layout";
import { Heading } from "@/common/heading";
import { ButtonLink } from "@/common/button";
import { Breadcrumbs } from "@/app/_components/seo/breadcrumbs";
import { OrganizationJsonLd } from '@/app/_components/seo/organization-jsonld';
import { PremiumContainer } from "@/components/ui/premium-container";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Pricing | Bespoke Ethos",
  description:
    "Fixed-price AI automation. No hourly billing, no scope creep. Projects start at $1,497 with a 90-day warranty.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <div className="bg-background min-h-screen relative overflow-hidden">
      
       {/* Cinematic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[20%] left-[50%] w-[100%] h-[100%] bg-orange-500/5 blur-[150px] rounded-full translate-x-[-50%]" />
      </div>

      <OrganizationJsonLd />
      
      <Section className="relative z-10 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24">
        <div className="container mx-auto px-4 max-w-6xl space-y-12 sm:space-y-14 md:space-y-16">
          
           <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Pricing" }]} className="mb-4" />

           {/* Hero */}
           <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-950/30 mb-5">
                 <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                 <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Anti-Consulting Model</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight leading-[0.95] sm:leading-[0.9] mb-5 sm:mb-6">
                FIXED PRICE. <br/> <span className="text-stroke-thin text-slate-800">ZERO HOURLY.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
                We don&apos;t sell hours. We sell finished inventory. You get a scoped outcome, a fixed price, and a warranty.
                If we&apos;re slow, that&apos;s our problem, not yours.
              </p>
           </div>

           {/* Offering Grid - improved spacing and readability */}
           <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
             
             {/* 1. AI RECEPTIONIST */}
             <PremiumContainer variant="glass" className="p-8 sm:p-10 md:p-12 flex flex-col h-full border-orange-500/30 bg-orange-900/10">
               <div className="mb-7 sm:mb-8">
                  <span className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-3 block">Most Popular</span>
                  <Heading align="left"><h2 className="text-4xl font-hero-accent text-white mb-3">AI Receptionist</h2></Heading>
                  <p className="text-slate-400 text-base">Powered by Cadence.</p>
               </div>
               <div className="text-4xl sm:text-5xl font-black text-white mb-7 sm:mb-8">$1,497 <span className="text-xl font-normal text-slate-500">setup</span></div>
               
               <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-grow">
                 {["Routes calls & schedules meetings", "Trained on your specific knowledge", "Escalates to human for unknowns", "Monthly optimization included"].map((item, i) => (
                    <li key={i} className="flex gap-4 text-slate-300 text-base items-start">
                      <span className="text-orange-500 font-bold text-lg flex-shrink-0 mt-0.5">&#10003;</span> <span>{item}</span>
                    </li>
                 ))}
               </ul>
               <ButtonLink intent="primary" href="/products/cadence" className="w-full justify-center min-h-[52px] text-base font-bold">Start Build</ButtonLink>
             </PremiumContainer>

             {/* 2. STRATEGY SPRINTS */}
             <PremiumContainer variant="obsidian" className="p-8 sm:p-10 md:p-12 flex flex-col h-full">
               <div className="mb-7 sm:mb-8">
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 block">Decision Support</span>
                  <Heading align="left"><h2 className="text-4xl font-hero-accent text-white mb-3">AI Strategy Sprint</h2></Heading>
                  <p className="text-slate-400 text-base">Powered by Consensus Engine.</p>
               </div>
               <div className="text-4xl sm:text-5xl font-black text-white mb-7 sm:mb-8">$1,497 <span className="text-xl font-normal text-slate-500">/ sprint</span></div>

               <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-grow">
                 {["5-Day turn around", "Multi-agent adversarial research", "Cited Decision Brief delivered", "Tradeoff analysis included"].map((item, i) => (
                    <li key={i} className="flex gap-4 text-slate-300 text-base items-start">
                      <span className="text-slate-500 font-bold text-lg flex-shrink-0 mt-0.5">&#10003;</span> <span>{item}</span>
                    </li>
                 ))}
               </ul>
               <ButtonLink intent="secondary" href="/solutions/consensus-engine" className="w-full justify-center min-h-[52px] text-base font-semibold border-white/30 hover:bg-white/10">Book Sprint</ButtonLink>
             </PremiumContainer>

             {/* 3. CUSTOM WORKFLOWS */}
             <PremiumContainer variant="obsidian" className="p-8 sm:p-10 md:p-12 flex flex-col h-full">
               <div className="mb-7 sm:mb-8">
                  <span className="text-sm font-bold text-sky-400 uppercase tracking-widest mb-3 block">Infrastructure</span>
                  <Heading align="left"><h2 className="text-4xl font-hero-accent text-white mb-3">Custom Workflows</h2></Heading>
                  <p className="text-slate-400 text-base">Automation Skyway.</p>
               </div>
               <div className="text-4xl sm:text-5xl font-black text-white mb-7 sm:mb-8">Custom <span className="text-xl font-normal text-slate-500">scope</span></div>

               <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-grow">
                 {["End-to-end process automation", "Human-in-the-loop approvals", "Error handling & logging", "Full documentation handover"].map((item, i) => (
                    <li key={i} className="flex gap-4 text-slate-300 text-base items-start">
                      <span className="text-sky-500 font-bold text-lg flex-shrink-0 mt-0.5">&#10003;</span> <span>{item}</span>
                    </li>
                 ))}
               </ul>
               <ButtonLink intent="secondary" href="/solutions/automation-skyway" className="w-full justify-center min-h-[52px] text-base font-semibold border-white/30 hover:bg-white/10">Scope Project</ButtonLink>
             </PremiumContainer>

             {/* 4. EMERGENCY RESCUE */}
             <PremiumContainer variant="neon" className="p-8 sm:p-10 md:p-12 flex flex-col h-full border-red-500/30 bg-red-900/5">
               <div className="mb-7 sm:mb-8">
                  <span className="text-sm font-bold text-red-400 uppercase tracking-widest mb-3 block">Critical Care</span>
                  <Heading align="left"><h2 className="text-4xl font-hero-accent text-white mb-3">Automation Rescue</h2></Heading>
                  <p className="text-slate-400 text-base">Redbridging Service.</p>
               </div>
               <div className="text-4xl sm:text-5xl font-black text-white mb-7 sm:mb-8">$497 <span className="text-xl font-normal text-slate-500">/ triage</span></div>

               <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-grow">
                 {["Fix broken Zapier/Make flows", "Add monitoring alerts", "Document spaghetti code", "Emergency response"].map((item, i) => (
                    <li key={i} className="flex gap-4 text-slate-300 text-base items-start">
                      <span className="text-red-400 font-bold text-lg flex-shrink-0 mt-0.5">&#10003;</span> <span>{item}</span>
                    </li>
                 ))}
               </ul>
               <ButtonLink intent="secondary" href="/solutions/redbridging" className="w-full justify-center min-h-[52px] text-base font-semibold bg-red-950/30 border-red-500/30 text-red-200 hover:bg-red-900/50">Book Triage</ButtonLink>
             </PremiumContainer>

           </div>

           {/* Discounts - improved visibility */}
           <div className="text-center pt-16 sm:pt-18 md:pt-20 border-t border-white/10">
             <h3 className="text-white text-2xl font-bold mb-3 sm:mb-4">We lift as we climb.</h3>
             <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
               LGBTQ-owned businesses receive a permanent <span className="text-orange-400 font-bold">25% discount</span> on all services.
             </p>
           </div>

        </div>
      </Section>
    </div>
  );
}
