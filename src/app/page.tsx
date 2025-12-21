import Image from "next/image";
import { ButtonLink } from "@/common/button";
import { PremiumContainer } from "@/components/ui/premium-container";
import { TestimonialMarquee } from "@/components/ui/testimonial-marquee";
import { CapabilitiesBento } from "@/components/ui/capabilities-bento";
import { Accordion } from "@/app/_sections/accordion-faq/accordion";
import { FounderStory } from "./_sections/founder-story";
import { TrustCredentials } from "./_sections/trust-credentials";
import { LGBTQDiscountModalTrigger } from "./_components/lgbtq-discount-modal-trigger";
import { ConsensusEngineCard } from "@/components/ConsensusEngineCard";
import { AutomationOpportunityScan } from "@/components/AutomationOpportunityScan";
import { AI101Modal } from "@/components/ai-explainer/AI101Modal";

// SEO & JSON-LD
import { OrganizationJsonLd } from '@/app/_components/seo/organization-jsonld';

/* =============================================================================
   COPY CONFIG: "HUMAN, NOT SLOP"
   Voice: Upton Rand (Founder).
   Tone: Rust Belt, Direct, "Machine Shop" metaphor.
   Naming: Explanatory (SEO) over Proprietary.
   ============================================================================= */



              {/* Hero Content Layer */}
              <div className="relative z-20 text-center max-w-5xl px-4 sm:px-6 md:px-8 animate-fadeIn">
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 sm:mb-8 leading-tight">
                  <span className="text-white">We Take the Busywork.</span>{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-200 via-orange-400 to-orange-500">
                    You Keep Control.
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light mb-8 sm:mb-10">
                  Fixed-price AI automation with human approval checkpoints. No black boxes, no billing surprises.
                </p>

                <div className="flex justify-center">
                  <ButtonLink 
                    href="/book" 
                    className="w-full sm:w-auto min-h-[48px] px-10 sm:px-12 md:px-14 py-4 text-lg sm:text-xl rounded-full shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:shadow-[0_0_40px_rgba(249,115,22,0.7)] transition-all bg-orange-500 hover:bg-orange-400 text-white font-bold"
                  >
                    Book a Consult
                  </ButtonLink>
                </div>
              </div>
            </div>
          </PremiumContainer>
        </div>
      </section>

      {/* 2. THE CHASM: Authentic Voice */}
      <section className="relative z-10 py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
      <section className="relative z-10 py-24 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
           <div className="relative">
             {/* Quote Decor */}
             <div aria-hidden="true" className="absolute -top-6 sm:-top-8 md:-top-12 -left-3 sm:-left-4 md:-left-8 text-6xl sm:text-7xl md:text-9xl text-white/5 font-serif select-none">&quot;</div>
             
             <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-hero-accent text-white mb-4 sm:mb-6 md:mb-8 leading-tight text-center md:text-left">
               <span className="text-white text-glow-crimson">It&apos;s not about the model.</span>{" "}
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-200 text-glow-ambient">It&apos;s about the tolerance.</span>
             </h2>

             <div className="space-y-3 sm:space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 leading-relaxed font-light">
               <p>
                 I&apos;m <span className="text-white font-medium">Upton Rand</span>. I spent 5 years training these models back when they were just research papers. 
                 Here is the honest truth: <strong className="text-white">AI is messy.</strong> It hallucinates. It drifts. It forgets.
               </p>
               <p>
                 Most consultants try to sell you a &quot;magic button.&quot; I sell you a <strong>machine shop</strong>. 
                 We build workflows that handle the messiness. We engineer the{" "}
                 <AI101Modal explainerKey="humanInLoop" triggerText="approvals" className="text-sm font-medium" />, the rollbacks, and the audit trails. 
                 We treat AI like high-voltage wiring: powerful, essential, and dangerous if not grounded properly.
               </p>
             </div>
           </div>
        </div>
      </section>

      {/* 3. SOCIAL PROOF */}
      <div className="relative z-10 py-20 md:py-24 border-y border-white/5 bg-slate-950/50 backdrop-blur-sm">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-slate-600 mb-12">Trusted Operating Systems</p>
      <section className="relative z-10 py-16 sm:py-20 md:py-24 border-y border-white/5 bg-slate-950/50 backdrop-blur-sm px-4 sm:px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-10 sm:mb-12 md:mb-16">Trusted Operating Systems</p>
        <TestimonialMarquee />
      </section>

      {/* 4. CAPABILITIES: Bento */}
      <section className="relative z-10 py-32 md:py-40 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="mb-16 md:flex md:items-end md:justify-between">
      <section className="relative z-10 py-24 sm:py-28 md:py-36 lg:py-44 bg-slate-950 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 sm:mb-20 md:mb-24 md:flex md:items-end md:justify-between md:gap-8">
            <div className="max-w-2xl">
              <span className="text-orange-500 font-mono text-xs sm:text-sm tracking-tight mb-2 sm:mb-3 md:mb-4 block">{`// SYSTEM CAPABILITIES`}</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                <span className="text-white text-glow-crimson">BUILT TO</span> <span className="text-slate-800 text-stroke-thin">LAST.</span>
              </h2>
            </div>
            <p className="mt-4 md:mt-0 text-slate-300 max-w-md text-xs sm:text-sm md:text-base border-l-2 border-orange-500/30 pl-3 sm:pl-4 md:pl-6 py-2">
              We don&apos;t ship &quot;demos.&quot; We deploy production-grade infrastructure that runs your business while you sleep.
            </p>
          </div>
          <CapabilitiesBento />
        </div>
      </section>

      {/* 5. PRICING: Fixed Price */}
      <section className="relative z-10 py-28 md:py-36">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <PremiumContainer variant="obsidian" className="p-10 md:p-14 lg:p-20 relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full group-hover:bg-orange-500/10 transition-colors duration-700" />
      <section className="relative z-10 py-24 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <PremiumContainer variant="obsidian" className="p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 relative overflow-hidden group">
            {/* Background Glow - Enhanced */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full group-hover:bg-orange-500/15 transition-colors duration-700" />

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 relative z-10">
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                 <div className="inline-block px-3 py-1.5 rounded bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-bold uppercase tracking-widest shadow-sm">
                   The Anti-Consulting Offer
                 </div>
                 <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-hero-accent leading-tight">
                   <span className="text-white text-glow-crimson drop-shadow-lg">Fixed price.</span>{" "}
                   <span className="text-white text-glow-crimson drop-shadow-lg">No surprises.</span>
                 </h2>
                 <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-100 leading-relaxed">
                   Enterprise firms charge $300/hr to &quot;delve&quot; into your problems. 
                   We charge a <strong className="text-white font-bold">fixed price</strong> to ship a solution.
                 </p>
                 <ul className="space-y-2 sm:space-y-3 md:space-y-4 pt-2 sm:pt-4">
                   {[
                     "Zero hourly billings. Fixed scope.",
                     "You own the code and the keys.",
                     "90-day 'Break It, We Fix It' warranty.",
                     "Founder-led. No junior associates."
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-sm sm:text-base text-slate-100 font-medium">
                       <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,1)] flex-shrink-0" />
                       {item}
                     </li>
                   ))}
                 </ul>
              </div>

              <div className="flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/20 pt-6 sm:pt-8 lg:pt-0 lg:pl-10 xl:pl-12">
                 <div className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-widest mb-1.5 sm:mb-2">Builds Starting At</div>
                 <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-2 sm:mb-3 md:mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                   $1,497
                 </div>
                 <p className="text-xs sm:text-sm md:text-base text-slate-100 mb-4 sm:mb-6 md:mb-8 max-w-md">
                   Includes full scoping decision brief, build, deployment, and documentation. 
                   <span className="block mt-2 text-orange-200 font-bold">LGBTQ-owned businesses pay $1,122.</span>
                 </p>
                 <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                   <ButtonLink href="/pricing" className="bg-white text-slate-950 hover:bg-orange-50 font-bold shadow-[0_4px_20px_rgba(255,255,255,0.3)] hover:shadow-[0_6px_30px_rgba(255,255,255,0.4)] transition-all min-h-[44px] px-6 py-3 rounded-full">
                     View The Menu
                   </ButtonLink>
                   <ButtonLink href="/contact" className="bg-white/20 hover:bg-white/30 text-white font-bold border-2 border-white/40 hover:border-white/60 backdrop-blur-sm shadow-lg min-h-[44px] px-6 py-3 rounded-full">
                     Book Grant Call
                   </ButtonLink>
                 </div>
              </div>
            </div>
          </PremiumContainer>
        </div>
      </section>

      {/* 5.5 AI AUTOMATION OPPORTUNITY SCAN - New Interactive Value Component */}
      <AutomationOpportunityScan />

      {/* 6. AI STRATEGY SPRINTS (Formerly Consensus Engine) */}
      <section className="relative z-10 py-28 md:py-36 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
           <PremiumContainer variant="glass" className="p-10 md:p-16 text-center border-white/5 bg-slate-900/40">
             <div className="max-w-3xl mx-auto space-y-6">
               <h2 className="text-3xl md:text-5xl font-bold font-hero-accent text-white text-glow-crimson">
      <section className="relative z-10 py-20 sm:py-24 md:py-28 lg:py-36 bg-slate-950 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
           <PremiumContainer variant="glass" className="p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 text-center border-white/5 bg-slate-900/40">
             <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 md:space-y-6">
               <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-hero-accent text-white text-glow-crimson">
                 AI Strategy Sprints™
               </h2>
               <div className="text-orange-500 font-mono text-xs sm:text-sm tracking-wide uppercase mb-1 sm:mb-2 md:mb-4">Powered by Consensus Engine</div>
               <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 leading-relaxed font-light">
                 Don&apos;t guess. We run multi-agent adversarial research sprints to stress-test your strategy before you spend a dime. 
                 It&apos;s like having a boardroom of experts in a box.
               </p>
               <div className="pt-4 sm:pt-6 md:pt-8">
                 <ConsensusEngineCard />
               </div>
             </div>
           </PremiumContainer>
        </div>
      </section>

      {/* 7. FOUNDER STORY */}
      <FounderStory />
      <TrustCredentials />

      {/* 8. FAQ */}
      <section className="relative z-10 py-28 md:py-36">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-16">
            <span className="text-orange-500/50 font-mono text-xs tracking-widest mb-4 block">01001000 01000101 01001100 01010000</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-hero-accent text-glow-crimson">
      <section className="relative z-10 py-24 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <span className="text-orange-400 font-mono text-xs tracking-widest mb-2 sm:mb-3 md:mb-4 block font-bold">01001000 01000101 01001100 01010000</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white font-hero-accent text-glow-crimson drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]">
              Quick Answers. No Fluff.
            </h2>
          </div>
          <Accordion
            items={homeFaqItems.map((item) => ({
              _title: item.question,
              answer: item.answer,
            }))}
          />
        </div>
      </section>

      {/* 9. SAFETY NET */}
      <section className="relative z-10 py-28 md:py-36 bg-gradient-to-t from-orange-950/20 to-slate-950">
        <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-hero-accent leading-tight text-glow-crimson">
      <section className="relative z-10 py-24 sm:py-28 md:py-32 lg:py-40 bg-gradient-to-t from-orange-950/20 to-slate-950 px-4 sm:px-6">
        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-center">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-hero-accent leading-tight text-glow-crimson">
                We lift as we climb.
              </h2>
              <div className="h-1 w-16 sm:w-20 md:w-24 bg-orange-500 rounded-full" />
              <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed">
                As an NGLCC-certified business, we know the hustle. We reserve grant slots and offer a 
                permanent <span className="text-orange-400 font-semibold">25% discount</span> for LGBTQ-owned businesses.
              </p>
              <div className="pt-2 sm:pt-3 md:pt-4">
                <LGBTQDiscountModalTrigger />
              </div>
            </div>
            
            {/* Visual: The Abstract 'Lift' */}
            <div className="relative aspect-square md:aspect-auto md:h-80 rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 shadow-2xl flex items-center justify-center p-5 sm:p-6 md:p-8 text-center group">
               <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-indigo-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
               
               <blockquote className="relative z-10">
                 <p className="text-sm sm:text-base md:text-lg text-slate-200 italic font-light mb-2 sm:mb-3 md:mb-4">
                   &quot;Upton helped us automate our entire intake process. We got our weekends back.&quot;
                 </p>
                 <footer className="text-xs font-bold text-orange-400 uppercase tracking-widest">
                   — Sarah & Jen, Cleveland
                 </footer>
               </blockquote>
            </div>
          </div>
        </div>
      </section>
      
      {/* JSON-LD Schemas */}
      <OrganizationJsonLd />
      <HomePageJsonLd />
      <WebSiteJsonLd />
      <HomeFaqJsonLd />
      <ServiceJsonLd />
      <OfferJsonLd />
      <SpeakableJsonLd />
    </div>
  );
}

function HomePageJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${base}/#homepage`,
    url: base,
    name: "AI Automation Consulting for Small Businesses in Cleveland | Bespoke Ethos",
    isPartOf: {
      "@id": `${base}/#website`,
    },
    about: {
      "@id": `${base}/#organization`,
    },
  } as const;



  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

function WebSiteJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${base}/#website`,
    url: base,
    name: "Bespoke Ethos",
    description: "AI consulting and workflow automation for small businesses",
    publisher: {
      "@id": `${base}/#organization`,
    },
    inLanguage: "en-US",
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

function ServiceJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${base}/#service`,
    name: "AI Workflow Automation for Small Businesses",
    description: "Fixed-price AI automation workflows including AI Strategy Sprints, intelligent email outreach, lead qualification, and workflow rescue services. Built with strict tolerances and human approval checkpoints for small business reliability.",
    provider: {
      "@id": `${base}/#organization`,
    },
    areaServed: "United States",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Automation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Strategy Sprint (Consensus Engine)",
            description: "Multi-agent adversarial research sprint analyzing 1000+ sources to stress-test your strategy before you spend",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Personalized Outreach Automation",
            description: "Email sequences that research prospects, draft notes in your voice, and wait for approval before sending",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Intelligent Lead Qualification",
            description: "AI-powered lead screening that schedules only qualified prospects ready to buy",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Workflow Rescue",
            description: "Fix broken Zapier/Make.com workflows and build robust automation connections",
          },
        },
      ],
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

function OfferJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "@id": `${base}/#offer`,
    name: "Fixed-Price AI Automation Builds",
    description: "Zero hourly billing. Fixed scope AI workflow automation starting at $1,497. LGBTQ-owned businesses receive a permanent 25% discount ($1,122).",
    price: "1497",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "1497",
      priceCurrency: "USD",
      valueAddedTaxIncluded: false,
    },
    seller: {
      "@id": `${base}/#organization`,
    },
    availability: "https://schema.org/InStock",
    validFrom: "2024-11-01",
    itemOffered: {
      "@type": "Service",
      name: "AI Workflow Automation Build",
      description: "Includes full scoping decision brief, build, deployment, documentation, and 90-day 'Break It, We Fix It' warranty. Founder-led with no junior associates.",
    },
    warranty: {
      "@type": "WarrantyPromise",
      durationOfWarranty: {
        "@type": "QuantitativeValue",
        value: 90,
        unitCode: "DAY",
      },
      warrantyScope: "Break It, We Fix It - Full repair and maintenance warranty",
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

function SpeakableJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${base}/#service`,
    name: "AI Workflow Automation for Small Businesses",
    description: "Fixed-price AI automation workflows including AI Strategy Sprints, intelligent email outreach, lead qualification, and workflow rescue services. Built with strict tolerances and human approval checkpoints for small business reliability.",
    provider: {
      "@id": `${base}/#organization`,
    },
    areaServed: "United States",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Automation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Strategy Sprint (Consensus Engine)",
            description: "Multi-agent adversarial research sprint analyzing 1000+ sources to stress-test your strategy before you spend",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Personalized Outreach Automation",
            description: "Email sequences that research prospects, draft notes in your voice, and wait for approval before sending",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Intelligent Lead Qualification",
            description: "AI-powered lead screening that schedules only qualified prospects ready to buy",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Workflow Rescue",
            description: "Fix broken Zapier/Make.com workflows and build robust automation connections",
          },
        },
      ],
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

function OfferJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "@id": `${base}/#offer`,
    name: "Fixed-Price AI Automation Builds",
    description: "Zero hourly billing. Fixed scope AI workflow automation starting at $1,497. LGBTQ-owned businesses receive a permanent 25% discount ($1,122).",
    price: "1497",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "1497",
      priceCurrency: "USD",
      valueAddedTaxIncluded: false,
    },
    seller: {
      "@id": `${base}/#organization`,
    },
    availability: "https://schema.org/InStock",
    validFrom: "2024-10-01",
    itemOffered: {
      "@type": "Service",
      name: "AI Workflow Automation Build",
      description: "Includes full scoping decision brief, build, deployment, documentation, and 90-day 'Break It, We Fix It' warranty. Founder-led with no junior associates.",
    },
    warranty: {
      "@type": "WarrantyPromise",
      durationOfWarranty: {
        "@type": "QuantitativeValue",
        value: 90,
        unitCode: "DAY",
      },
      warrantyScope: "Break It, We Fix It - Full repair and maintenance warranty",
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
