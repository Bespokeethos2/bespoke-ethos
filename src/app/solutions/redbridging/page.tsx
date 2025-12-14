import Image from "next/image";
import type { Metadata } from "next";

import { Breadcrumbs } from "@/app/_components/seo/breadcrumbs";
import { Heading } from "@/common/heading";
import { Section } from "@/common/layout";
import { ButtonLink } from "@/common/button";
import { Accordion } from "@/app/_sections/accordion-faq/accordion";
import { OrganizationJsonLd } from '@/app/_components/seo/organization-jsonld';
import { PremiumContainer } from "@/components/ui/premium-container";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Automation Rescue (Redbridging) | Bespoke Ethos",
  description:
    "Buried in broken Zapier tasks? We come in, stabilize the patient, document the web, and set up alerts so you sleep at night.",
  alternates: { canonical: "/solutions/redbridging" },
};

const rescueFaqItems = [
  {
    _title: "Can you fix my Zapier mess?",
    answer:
      "Yes. We specialize in 'Redbridging'—mapping out your undocumented spaghetti automations, refactoring them into clean, linear flows, and adding error handling so they tell you when they break.",
  },
  {
    _title: "Do I have to switch tools?",
    answer:
      "Usually no. We try to fix it where it lives (Zapier, Make, HubSpot). If it's truly beyond repair or scaling limits, we might suggest a move, but we start with triage.",
  },
];

export default function AutomationRescuePage() {
  return (
    <div className="bg-background min-h-screen relative overflow-hidden">
        {/* Cinematic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] bg-red-900/10 blur-[150px] rounded-full" />
      </div>

      <OrganizationJsonLd />
      
      <Section className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl space-y-12">
          
           <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Solutions", href: "/solutions" },
              { name: "Automation Rescue" },
            ]}
            className="mb-8"
          />

           {/* SOTA HERO */}
          <PremiumContainer variant="neon" className="p-8 md:p-12 relative overflow-hidden group">
             <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
               <div className="space-y-6">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-950/30">
                   <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                   <span className="text-xs font-bold text-red-400 uppercase tracking-widest">Automation Rescue</span>
                 </div>
                 
                 <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
                   STOP THE <br/> <span className="text-stroke-thin text-slate-800">BLEEDING.</span>
                 </h1>
                 
                 <p className="text-xl text-slate-300 font-light leading-relaxed">
                   Buried in broken Zapier tasks? We come in, stabilize the patient, document the web, and set up alerts so you sleep at night.
                 </p>

                 <div className="flex flex-col sm:flex-row gap-4 pt-4">
                   <ButtonLink intent="primary" href="/contact?subject=Emergency%20Rescue">Emergency Triage</ButtonLink>
                 </div>
               </div>

               {/* Visual */}
               <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl">
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-center p-8">
                     <div className="w-16 h-16 bg-red-500/20 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
                        <Image src="/assets/logos/redbridging_logo.png" alt="Rescue Logo" width={32} height={32} className="opacity-80" />
                     </div>
                     <p className="text-slate-400 font-mono text-sm">Repairing Connections...</p>
                   </div>
                 </div>
               </div>
             </div>
          </PremiumContainer>
          
          {/* FAQ */}
          <div className="max-w-3xl mx-auto pt-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8 font-hero-accent">Standard Operating Procedure</h2>
            <div className="text-slate-300">
               <Accordion items={rescueFaqItems} />
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
}
