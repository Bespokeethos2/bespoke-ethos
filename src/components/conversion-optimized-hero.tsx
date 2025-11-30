"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { ButtonLink } from "@/common/button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function ConversionOptimizedHero() {
  return (
    <section className="relative overflow-hidden bg-[#fffdf9] py-16 sm:py-20 lg:py-28">
      {/* Background Ambience - Warm Workshop Light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-orange-100/40 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-slate-100/60 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="container relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        
        {/* Left Column: Copy & Console */}
        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, amount: 0.3 }} 
          variants={{ show: { transition: { staggerChildren: 0.1 } } }} 
          className="space-y-10"
        >
          {/* Main Headlines */}
          <motion.div variants={fadeUp} className="space-y-5">
            <h1 className="max-w-xl font-hero-accent text-5xl font-bold leading-[1.05] text-slate-900 sm:text-6xl lg:text-[4.75rem] tracking-tight">
              Real Cleveland AI. <br className="hidden sm:block" /> Real Simple.
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
              Book a free 30-minute chat. See how AI can (or can't) help your business. No hard sales.
            </p>
          </motion.div>

          {/* CTA Area */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6 sm:items-start">
            {/* Primary Button - Solid, Industrial, Warm */}
            <ButtonLink
              intent="primary"
              size="lg"
              className="relative overflow-hidden rounded-lg px-10 py-4 text-lg font-bold shadow-xl transition-all hover:shadow-2xl hover:-translate-y-0.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0"
              href="https://calendly.com/contact-bespokeethos/30min"
            >
              <span className="relative z-10">Book a Consult</span>
              {/* Subtle sheen */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </ButtonLink>

            {/* Alex Teaser Link */}
            <Link href="/#testimonials" className="group inline-flex items-center gap-3 text-sm font-semibold text-slate-500 transition-colors hover:text-orange-700">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 border border-slate-200 group-hover:border-orange-200 transition-colors">
                 <span className="block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              </span>
              <span className="underline decoration-slate-300 underline-offset-4 group-hover:decoration-orange-300">
                Read about a local AI convert who nailed it →
              </span>
            </Link>
          </motion.div>

          {/* The "Workshop Console" - Credibility Container */}
          <motion.div variants={fadeUp} className="pt-2">
             <div className="relative inline-flex overflow-hidden rounded-2xl bg-white/40 p-[1px] backdrop-blur-xl shadow-lg group">
                {/* The "Spark" Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-300/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 w-[200%] animate-spin-slow origin-center" style={{ left: '-50%', top: '-50%', height: '200%' }}></div>
                <div className="absolute inset-0 rounded-2xl border border-slate-200/60"></div>
                
                {/* Console Content */}
                <div className="relative flex flex-wrap items-center gap-1 rounded-2xl bg-white/60 px-2 py-2">
                    <CredibilityPill src="/assets/generated/trust/nglcc-square-light.webp" label="NGLCC Certified" />
                    <div className="h-6 w-px bg-slate-200/50 mx-1 hidden sm:block"></div>
                    <CredibilityPill src="/assets/generated/trust/catalant-square-light.webp" label="Catalant Vetted" />
                    <div className="h-6 w-px bg-slate-200/50 mx-1 hidden sm:block"></div>
                    <CredibilityPill src="/assets/generated/trust/experience-5yrs-square-square-light.webp" label="5+ Yrs Frontier AI" />
                    
                    {/* Azure Chip - Embedded */}
                    <div className="ml-1 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50/80 border border-blue-100/50 text-[10px] uppercase font-bold tracking-wider text-blue-700 shadow-sm">
                       <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-1.07 3.97-2.9 5.39z"/></svg>
                       Azure
                    </div>
                </div>
             </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Image - Unchanged */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative mt-10 lg:mt-0"
        >
          <div className="absolute inset-0 -z-10 rounded-3xl bg-orange-100/20 shadow-2xl shadow-orange-100/40 ring-1 ring-slate-900/5 transform rotate-2" />
          <div className="relative overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 shadow-xl">
            <div className="relative mx-auto flex max-w-md items-center justify-center px-6 pt-10 pb-6 sm:max-w-lg lg:pt-14">
              <div className="relative w-full max-w-xs sm:max-w-sm">
                <div className="relative overflow-hidden rounded-[2rem] bg-slate-50 p-4 shadow-inner">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/assets/we-heart-founders-mug.avif"
                      alt="We love founders mug on a warm workspace"
                      fill
                      className="object-contain object-center mix-blend-multiply"
                      sizes="(max-width: 1024px) 80vw, 420px"
                      priority
                      loading="eager"
                      quality={95}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-100 bg-slate-50/50 px-6 py-4 sm:px-8 flex justify-between items-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                Est. 2025
              </p>
              <div className="h-1.5 w-1.5 rounded-full bg-orange-400" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CredibilityPill({ src, label }: { src: string; label: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-white/80 rounded-lg transition-colors cursor-default">
      <span className="relative block h-5 w-5 overflow-hidden rounded-md opacity-90">
        <Image src={src} alt={label} fill sizes="20px" className="object-contain" />
      </span>
      <span className="text-xs font-semibold text-slate-700 tracking-tight">{label}</span>
    </div>
  );
}