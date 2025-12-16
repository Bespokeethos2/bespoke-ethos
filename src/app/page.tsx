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

// Homepage-specific metadata
export const metadata = {
  alternates: {
    canonical: 'https://www.bespokeethos.com',
  },
};

const homeFaqItems = [
  {
    question: "Who is this actually for?",
    answer: "Small business founders and lean teams. If you're drowning in busywork, or if you tried building an AI agent and it just hallucinated at you, this is for you. We build the guardrails so you can actually use the tech.",
  },
  {
    question: "Why fixed price? Everyone else charges hourly.",
    answer: "Because hourly billing rewards consultants for being slow. I sell finished products. You buy a outcome—a working AI receptionist, a research sprint, or a fixed automation—not a timesheet.",
  },
  {
    question: "Is this just ChatGPT wrappers?",
    answer: "No. We build distinct intelligent workflows—systems that hold your specific context and follow strict rules. We use professional-grade orchestration (vector databases, RAG, multi-agent swarms) to ensure the AI follows your process, not its own whims.",
  },
];

export default function HomePage() {
  return (
    <div aria-label="Bespoke Ethos homepage" className="min-h-screen relative overflow-hidden bg-background selection:bg-orange-500/30">
      
      {/* 1. HERO: The Console */}
      <section className="relative z-10 pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-32 md:pb-24 px-4 sm:px-6">
        <div className="container mx-auto">
          <PremiumContainer variant="glass" className="p-3 md:p-4 lg:p-5 border-orange-500/20 shadow-2xl shadow-orange-900/10">
            <div className="relative overflow-hidden rounded-xl bg-slate-950/90 aspect-[16/9] md:aspect-[21/9] flex items-center justify-center">
              
              {/* Background Abstract Visuals (Warm Orange) */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15)_0%,rgba(0,0,0,1)_80%)]" />
                <Image
                  src="/assets/generated/hero-home.png"
                  alt="AI automation workflows and intelligent systems background visualization"
                  fill
                  className="object-cover opacity-20 mix-blend-lighten"
                  priority
                />
              </div>

              {/* Hero Content Layer */}
              <div className="relative z-20 text-center max-w-5xl px-4 sm:px-6 md:px-8 animate-fadeIn">
                <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-orange-500/50 bg-orange-950/90 backdrop-blur-md mb-4 sm:mb-6 md:mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                  </span>
                  <span className="text-xs font-bold text-orange-100 tracking-widest uppercase font-mono">Operations Normal</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-4 sm:mb-6 md:mb-8 leading-[0.95] sm:leading-[0.9]">
                  <span className="text-white text-glow-crimson">WE BUILD</span>{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-200 via-orange-400 to-orange-500 text-cinematic">
                    INTELLIGENT WORKFLOWS
                  </span>
                </h1>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-6 sm:mb-8 md:mb-10">
                  You don't need another "AI Chatbot." You need a <strong className="text-orange-200 font-medium">machine shop</strong>. 
                  We build resilient, fixed-price automation workflows with tight tolerances.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-center">
                  <ButtonLink intent="primary" href="/contact" className="w-full sm:w-auto min-h-[44px] h-12 sm:h-14 px-6 sm:px-8 md:px-10 text-sm sm:text-base md:text-lg rounded-full shadow-[0_0_25px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] transition-all bg-orange-600 hover:bg-orange-500 border-none text-white font-bold tracking-wide">
                    Start Your Build
                  </ButtonLink>
                  <ButtonLink intent="secondary" href="/solutions" className="w-full sm:w-auto min-h-[44px] h-12 sm:h-14 px-6 sm:px-8 md:px-10 text-sm sm:text-base md:text-lg rounded-full border-white/10 hover:bg-white/5 backdrop-blur-md text-slate-200">
                    See The Specs
                  </ButtonLink>
                </div>

                {/* Template-style Line Menu */}
                <nav className="mt-6 sm:mt-8 md:mt-12 relative">
                  {/* Vertical connecting line */}
                  <div className="absolute left-1/2 -top-6 sm:-top-8 md:-top-12 w-px h-6 sm:h-8 md:h-12 bg-gradient-to-b from-transparent via-white/30 to-white/50" />
                  <ul className="flex flex-wrap justify-center items-center border border-white/20 rounded-md backdrop-blur-sm bg-white/5">
                    <li className="border-r border-white/20 last:border-r-0">
                      <a href="/solutions" className="block px-3 sm:px-4 md:px-6 py-3 text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white hover:bg-white/10 transition-all min-h-[44px] flex items-center">
                        Solutions
                      </a>
                    </li>
                    <li className="border-r border-white/20 last:border-r-0">
                      <a href="/pricing" className="block px-3 sm:px-4 md:px-6 py-3 text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white hover:bg-white/10 transition-all min-h-[44px] flex items-center">
                        Pricing
                      </a>
                    </li>
                    <li className="border-r border-white/20 last:border-r-0">
                      <a href="/about" className="block px-3 sm:px-4 md:px-6 py-3 text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white hover:bg-white/10 transition-all min-h-[44px] flex items-center">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="block px-3 sm:px-4 md:px-6 py-3 text-xs uppercase tracking-[0.2em] text-orange-400 hover:text-orange-300 hover:bg-white/10 transition-all font-medium min-h-[44px] flex items-center">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </PremiumContainer>
        </div>
      </section>

      {/* 2. THE CHASM: Authentic Voice */}
      <section className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
           <div className="relative">
             {/* Quote Decor */}
             <div aria-hidden="true" className="absolute -top-6 sm:-top-8 md:-top-12 -left-3 sm:-left-4 md:-left-8 text-6xl sm:text-7xl md:text-9xl text-white/5 font-serif select-none pointer-events-none">"</div>
             
             <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-hero-accent text-white mb-4 sm:mb-6 md:mb-8 leading-tight text-center md:text-left">
               <span className="text-white text-glow-crimson">It's not about the model.</span>{" "}
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-200 text-glow-ambient">It's about the tolerance.</span>
             </h2>

             <div className="space-y-3 sm:space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 leading-relaxed font-light">
               <p>
                 I'm <span className="text-white font-medium">Upton Rand</span>. I spent 5 years training these models back when they were just research papers. 
                 Here is the honest truth: <strong className="text-white">AI is messy.</strong> It hallucinates. It drifts. It forgets.
               </p>
               <p>
                 Most consultants try to sell you a "magic button." I sell you a <strong>machine shop</strong>. 
                 We build workflows that handle the messiness. We engineer the{" "}
                 <AI101Modal explainerKey="humanInLoop" triggerText="approvals" className="text-sm font-medium" />, the rollbacks, and the audit trails. 
                 We treat AI like high-voltage wiring: powerful, essential, and dangerous if not grounded properly.
               </p>
             </div>
           </div>
        </div>
      </section>

      {/* 3. SOCIAL PROOF */}
      <section className="relative z-10 py-10 sm:py-12 md:py-16 border-y border-white/5 bg-slate-950/50 backdrop-blur-sm px-4 sm:px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-6 sm:mb-8 md:mb-10">Trusted Operating Systems</p>
        <TestimonialMarquee />
      </section>

      {/* 4. CAPABILITIES: Bento */}
      <section className="relative z-10 py-16 sm:py-20 md:py-28 lg:py-32 bg-slate-950 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="mb-10 sm:mb-12 md:mb-16 md:flex md:items-end md:justify-between md:gap-8">
            <div className="max-w-2xl">
              <span className="text-orange-500 font-mono text-xs sm:text-sm tracking-tight mb-2 sm:mb-3 md:mb-4 block">// SYSTEM CAPABILITIES</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                <span className="text-white text-glow-crimson">BUILT TO</span> <span className="text-slate-800 text-stroke-thin">LAST.</span>
              </h2>
            </div>
            <p className="mt-4 md:mt-0 text-slate-300 max-w-md text-xs sm:text-sm md:text-base border-l-2 border-orange-500/30 pl-3 sm:pl-4 md:pl-6 py-2">
              We don't ship "demos." We deploy production-grade infrastructure that runs your business while you sleep.
            </p>
          </div>
          <CapabilitiesBento />
        </div>
      </section>

      {/* 5. PRICING: Fixed Price */}
      <section className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <PremiumContainer variant="obsidian" className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full group-hover:bg-orange-500/10 transition-colors duration-700" />

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 relative z-10">
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                 <div className="inline-block px-3 py-1.5 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest">
                   The Anti-Consulting Offer
                 </div>
                 <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-hero-accent leading-tight">
                   <span className="text-white text-glow-crimson">Stop paying for</span>{" "}
                   <span className="line-through decoration-orange-500/50 decoration-2 text-slate-500">slide decks.</span>
                 </h2>
                 <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 leading-relaxed">
                   Enterprise firms charge $300/hr to "delve" into your problems. 
                   We charge a <strong className="text-white">fixed price</strong> to ship a solution.
                 </p>
                 <ul className="space-y-2 sm:space-y-3 md:space-y-4 pt-2 sm:pt-4">
                   {[
                     "Zero hourly billings. Fixed scope.",
                     "You own the code and the keys.",
                     "90-day 'Break It, We Fix It' warranty.",
                     "Founder-led. No junior associates."
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-sm sm:text-base text-slate-200">
                       <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)] flex-shrink-0" />
                       {item}
                     </li>
                   ))}
                 </ul>
              </div>

              <div className="flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 pt-6 sm:pt-8 lg:pt-0 lg:pl-10 xl:pl-12">
                 <div className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-widest mb-1.5 sm:mb-2">Builds Starting At</div>
                 <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-2 sm:mb-3 md:mb-4">
                   $1,497
                 </div>
                 <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-4 sm:mb-6 md:mb-8 max-w-md">
                   Includes full scoping decision brief, build, deployment, and documentation. 
                   <span className="block mt-2 text-orange-400 font-medium">LGBTQ-owned businesses pay $1,122.</span>
                 </p>
                 <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                   <ButtonLink intent="primary" href="/pricing" className="bg-white text-slate-950 hover:bg-slate-200 min-h-[44px]">
                     View The Menu
                   </ButtonLink>
                   <ButtonLink intent="secondary" href="/contact" className="min-h-[44px]">
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
      <section className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-950 px-4 sm:px-6">
        <div className="container mx-auto">
           <PremiumContainer variant="glass" className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 text-center border-white/5 bg-slate-900/40">
             <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 md:space-y-6">
               <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-hero-accent text-white text-glow-crimson">
                 AI Strategy Sprints™
               </h2>
               <div className="text-orange-500 font-mono text-xs sm:text-sm tracking-wide uppercase mb-1 sm:mb-2 md:mb-4">Powered by Consensus Engine</div>
               <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 leading-relaxed font-light">
                 Don't guess. We run multi-agent adversarial research sprints to stress-test your strategy before you spend a dime. 
                 It's like having a boardroom of experts in a box.
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
      <section className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <span className="text-orange-500/50 font-mono text-xs tracking-widest mb-2 sm:mb-3 md:mb-4 block">01001000 01000101 01001100 01010000</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-hero-accent text-glow-crimson">
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
      <section className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-t from-orange-950/20 to-slate-950 px-4 sm:px-6">
        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
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
                   "Upton helped us automate our entire intake process. We got our weekends back."
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

function HomeFaqJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    mainEntityOfPage: `${base}/`,
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
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".home-section h2", "main > section:first-of-type p"],
    },
    url: base,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
