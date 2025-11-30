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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fff7ec] via-white to-[#f5f3ff] py-16 sm:py-20 lg:py-28">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-orange-200/35 blur-[90px]" />
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-sky-200/35 blur-[110px]" />
      </div>

      <div className="container relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        
        {/* Left Column: Copy & CTA */}
        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, amount: 0.3 }} 
          variants={{ show: { transition: { staggerChildren: 0.1 } } }} 
          className="space-y-8"
        >
          {/* Top Pill - "Cleveland..." */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-orange-200/60 bg-white/60 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-orange-800 shadow-sm backdrop-blur-md">
            Cleveland · Small-business AI · NGLCC Certified
          </motion.div>

          {/* Main Headlines */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h1 className="max-w-xl font-hero-accent text-5xl font-bold leading-[1.1] text-slate-900 sm:text-6xl lg:text-[4.5rem]">
              Real Cleveland AI. <br className="hidden sm:block" /> Real Simple.
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              Book a free 30-minute chat. See how AI can (or can't) help your business. No hard sales.
            </p>
          </motion.div>

          {/* CTA Area */}
          <motion.div variants={fadeUp} className="flex flex-col gap-5 sm:items-start">
            {/* Primary Button with "Shine" Effect */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 opacity-30 blur group-hover:opacity-60 transition duration-500"></div>
              <ButtonLink
                intent="primary"
                size="lg"
                className="relative overflow-hidden rounded-full px-10 py-4 text-lg font-bold shadow-xl transition-transform active:scale-95"
                href="https://calendly.com/contact-bespokeethos/30min"
              >
                <span className="relative z-10">Book a Consult</span>
                {/* Shine Element */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent z-0" />
              </ButtonLink>
            </div>

            {/* Alex Teaser Link */}
            <Link href="/#testimonials" className="group inline-flex items-center gap-3 text-sm font-medium text-slate-600 transition-colors hover:text-orange-600">
              <div className="relative h-8 w-8 overflow-hidden rounded-full border border-white shadow-sm ring-1 ring-slate-200 group-hover:ring-orange-200 transition-all">
                 <Image src="/assets/generated/testimonial-alex.jpg" alt="Alex" fill className="object-cover" />
              </div>
              <span className="underline decoration-slate-300 underline-offset-4 group-hover:decoration-orange-300">
                Read about a local AI convert who nailed it →
              </span>
            </Link>
          </motion.div>

          {/* The Credibility Rail (Custom Container) */}
          <motion.div variants={fadeUp} className="pt-4">
             <div className="inline-flex flex-wrap items-center rounded-2xl border border-slate-200/80 bg-white/40 p-1.5 shadow-lg backdrop-blur-xl ring-1 ring-white/50">
                <CredibilityItem src="/assets/generated/trust/nglcc-square-light.webp" label="NGLCC Certified" />
                <div className="h-8 w-px bg-slate-200/60 mx-1 hidden sm:block"></div>
                <CredibilityItem src="/assets/generated/trust/catalant-square-light.webp" label="Catalant Vetted" />
                <div className="h-8 w-px bg-slate-200/60 mx-1 hidden sm:block"></div>
                <CredibilityItem src="/assets/generated/trust/experience-5yrs-square-square-light.webp" label="5+ Yrs Frontier AI" />
                <div className="h-8 w-px bg-slate-200/60 mx-1 hidden sm:block"></div>
                
                {/* Azure Badge - Slightly Highlighted */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50/50 border border-blue-100/50">
                   <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-1.07 3.97-2.9 5.39z"/></svg>
                   <span className="text-xs font-bold text-blue-900 tracking-tight">Azure Trained</span>
                </div>
             </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative mt-8 lg:mt-0"
        >
          <div className="absolute inset-0 -z-10 rounded-3xl bg-white/70 shadow-2xl shadow-orange-100/50 ring-1 ring-slate-200" />
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#fff7ec] via-white to-[#fde7cf] ring-1 ring-slate-200 transform rotate-1 transition-transform hover:rotate-0 duration-500">
            <div className="relative mx-auto flex max-w-md items-center justify-center px-6 pt-10 pb-6 sm:max-w-lg lg:pt-14">
              <div className="relative w-full max-w-xs sm:max-w-sm group">
                <div className="absolute -inset-4 rounded-[2.5rem] bg-white/60 blur-xl opacity-0 group-hover:opacity-100 transition duration-700" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-[2rem] bg-white/90 p-4 shadow-xl shadow-orange-200/40">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/assets/we-heart-founders-mug.avif"
                      alt="We love founders mug on a warm workspace"
                      fill
                      className="object-contain object-center scale-95 group-hover:scale-100 transition duration-500"
                      sizes="(max-width: 1024px) 80vw, 420px"
                      priority
                      loading="eager"
                      quality={95}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-orange-100/70 bg-white/80 px-6 py-4 sm:px-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-700/80">
                Cleveland · Rust Belt · Real
              </p>
              <p className="mt-1 text-sm font-medium text-slate-600">
                Built by the Goliaths, choosing to work with the Davids.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CredibilityItem({ src, label }: { src: string; label: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-white/50 rounded-lg transition-colors">
      <span className="relative block h-5 w-5 overflow-hidden rounded-md grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
        <Image src={src} alt={label} fill sizes="20px" className="object-contain" />
      </span>
      <span className="text-xs font-semibold text-slate-600 tracking-tight">{label}</span>
    </div>
  );
}
