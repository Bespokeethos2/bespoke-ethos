"use client";

import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/common/button";

export function ConversionOptimizedHero() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f6] py-16 sm:py-24 lg:py-32">
      {/* Cinematic Ambient Lighting - Warm, subtle atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[20%] h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,166,0,0.08),transparent_70%)]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-20 mix-blend-soft-light brightness-100 contrast-150" aria-hidden="true"></div>
      </div>

      <div className="container relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        
        {/* Left Column: Copy & Console */}
        <div className="space-y-10 relative z-10">
          {/* Top Badge - Industrial Precision */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-orange-900/10 bg-orange-50/50 text-[10px] font-bold uppercase tracking-[0.25em] text-orange-900/80 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
            Cleveland · Bespoke AI
          </div>

          {/* Main Headlines - Typography as Graphic */}
          <div className="space-y-6">
            <h1 className="max-w-xl font-hero-accent text-5xl font-bold leading-[1.05] text-slate-900 sm:text-6xl lg:text-[5rem] tracking-tight drop-shadow-sm">
              Real Cleveland AI. <br className="hidden sm:block" /> Real Simple.
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
              Book a free 30-minute chat. Includes a free, cited AI research brief on your business—no pressure, no hard sales.
            </p>
          </div>

          {/* CTA & Credibility "Dock" - The Novel Container */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <ButtonLink
                  intent="primary"
                  size="lg"
                  className="relative overflow-hidden rounded-xl px-8 py-4 text-lg font-bold shadow-2xl transition-transform active:scale-[0.98] bg-slate-900 text-white hover:bg-slate-800 border-0 group"
                  href="https://calendly.com/contact-bespokeethos/30min"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book a Consult
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </span>
                  {/* Internal Spotlight */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite] z-0" />
                </ButtonLink>
                <ButtonLink href="/case-studies/ai-outreach-plexus" intent="secondary" size="lg" className="px-6 py-3 text-base font-semibold">
                  <span className="flex items-center gap-2">
                    CASE STUDY How Alex nailed it →
                  </span>
                </ButtonLink>
              </div>
            </div>

            {/* The "Workshop Console" - High-End Glass Rail with internal glow */}
            <div className="relative group max-w-fit">
                <div className="relative flex flex-wrap items-center gap-1 rounded-xl bg-white/60 p-1.5 shadow-lg backdrop-blur-md ring-1 ring-white/50 ">
                    
                    <CredibilityPill src="/assets/generated/trust/nglcc-square-light.webp" label="NGLCC Certified" />
                    <div className="h-6 w-px bg-slate-200/50 mx-1 hidden sm:block"></div>
                    <CredibilityPill src="/assets/generated/trust/catalant-square-light.webp" label="Catalant Vetted" />
                    <div className="h-6 w-px bg-slate-200/50 mx-1 hidden sm:block"></div>
                    <CredibilityPill src="/assets/generated/trust/experience-5yrs-square-square-light.webp" label="5+ Yrs Frontier AI" />
                    
                    <div className="ml-1 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100/50 text-[10px] uppercase font-bold tracking-wider text-blue-700 shadow-sm">
                       <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-1.07 3.97-2.9 5.39z"/></svg>
                       Azure
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Right Column: Image - Floating with Shadow Depth */}
        <div className="relative mt-10 lg:mt-0 perspective-[2000px]">
          {/* The "Desk Pad" Shadow */}
          <div className="absolute inset-x-8 -bottom-5 h-10 bg-black/20 blur-[30px] rounded-full" />
          
          <div className="relative overflow-hidden rounded-4xl bg-white ring-1 ring-slate-900/5 shadow-2xl transform rotate-y-[-5deg] rotate-x-2 hover:rotate-0 transition-transform duration-700 ease-out preserve-3d">
            <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/40 to-white/0 z-20 pointer-events-none mix-blend-overlay"></div>
            <div className="relative mx-auto flex max-w-md items-center justify-center px-6 pt-12 pb-8 sm:max-w-lg lg:pt-16">
              <div className="relative w-full max-w-xs sm:max-w-sm">
                <div className="relative overflow-hidden rounded-3xl shadow-lg">
                  <div className="relative">
                    <Image
                      src="/assets/we-heart-founders-mug.avif"
                      alt="We love founders mug on a warm workspace"
                      width={500}
                      height={375}
                      className="object-contain object-center scale-105"
                      sizes="(max-width: 1024px) 80vw, 420px"
                      priority
                      loading="eager"
                      quality={95}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card Footer - Minimal */}
            <div className="bg-slate-50/80 backdrop-blur-sm px-8 py-5 border-t border-slate-100 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400">Status</span>
                <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Operational
                </span>
              </div>
              <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-300">
                Est. 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CredibilityPill({ src, label }: { src: string; label: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-50/80 rounded-lg transition-colors cursor-default group/pill">
      <span className="relative block h-5 w-5 overflow-hidden rounded-md opacity-90">
        <Image src={src} alt={label} fill sizes="20px" className="object-contain" />
      </span>
      <span className="text-xs font-semibold text-slate-600 tracking-tight group-hover/pill:text-slate-900 transition-colors">{label}</span>
    </div>
  );
}