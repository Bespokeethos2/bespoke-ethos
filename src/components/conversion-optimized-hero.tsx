"use client";

import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/common/button";

export function ConversionOptimizedHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-slate-900 py-16 sm:py-24 lg:py-32">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start gap-8 max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-800">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
              Cleveland - Bespoke AI Pricing
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl text-balance leading-[1.1]">
              AI Automation Consulting for{" "}
              <span className="text-indigo-600 block sm:inline">Overwhelmed Founders.</span>
            </h1>
            
            <p className="text-lg leading-8 text-slate-600 text-balance sm:text-xl">
              We help <strong>Cleveland small businesses</strong> escape busywork, fix broken automations, and ship fixed-price AI projects. No fluff, just workflows that work.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <ButtonLink 
                href="/consult" 
                className="rounded-lg bg-indigo-600 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-200 hover:bg-indigo-500 hover:shadow-2xl transition-all hover:-translate-y-0.5"
              >
                Book a Consult
              </ButtonLink>
              <Link href="/case-studies/alex" className="group flex items-center text-base font-semibold text-slate-900 hover:text-indigo-600 transition-colors">
                How Alex nailed it 
                <span className="ml-2 block transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-100 pt-8 text-sm font-semibold text-slate-500">
                <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300"></span> NGLCC Certified
                </span>
                <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300"></span> Catalant Vetted
                </span>
                <span className="flex items-center gap-2">
                     <span className="h-1.5 w-1.5 rounded-full bg-slate-300"></span> 5+ Yrs Frontier AI
                </span>
            </div>
          </div>

          {/* Right Column: Hero Image / Visual */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
             <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 shadow-2xl">
                 {/* Placeholder for the 'Mug' or abstract high-tech visual */}
                  <Image
                      src="/assets/generated/hero_splash_cleveland_ai.svg"
                      alt="Data visualization of Cleveland AI Consulting services"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                  />
                  {/* Floating badge example */}
                  <div className="absolute -bottom-6 -left-6 rounded-xl border border-slate-100 bg-white p-4 shadow-xl hidden sm:block">
                      <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                          </div>
                          <div>
                              <p className="text-xs font-medium text-slate-500">System Status</p>
                              <p className="text-sm font-bold text-slate-900">Operational</p>
                          </div>
                      </div>
                  </div>
             </div>
          </div>

        </div>

        {/* Reviews Grid */}
        <div className="mt-20 border-t border-slate-200 pt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            
            <div className="flex flex-col gap-2">
              <p className="text-sm italic text-slate-600">"Molly explains stats using my brewery floor. It's not generic—it's mine."</p>
              <div className="mt-auto pt-2">
                  <p className="font-bold text-slate-900 text-sm">Alex</p>
                  <p className="text-xs text-slate-500">Brewer, Ore Dock Brewing</p>
                  <Link href="/case-studies/alex" className="mt-1 block text-xs font-bold text-indigo-600 hover:underline">READ STORY →</Link>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm italic text-slate-600">"We finally agreed on our brand voice without another six-week debate."</p>
              <div className="mt-auto pt-2">
                 <p className="font-bold text-slate-900 text-sm">Monique Ellis</p>
                 <p className="text-xs text-slate-500">Co-Founder, Lake Effect Co-op</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm italic text-slate-600">"Revenue stopped bleeding—now we get alerts before clients feel pain."</p>
              <div className="mt-auto pt-2">
                <p className="font-bold text-slate-900 text-sm">Derrick Patel</p>
                <p className="text-xs text-slate-500">Founder, LedgerLight Accounting</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm italic text-slate-600">"We were drowning in translation hell. Now we write one blog, feed it into the pipeline, and it comes out optimized."</p>
              <div className="mt-auto pt-2">
                <p className="font-bold text-slate-900 text-sm">Gay Mens Field Guide</p>
                <p className="text-xs text-slate-500">Publisher, gaymensfieldguide.com</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}