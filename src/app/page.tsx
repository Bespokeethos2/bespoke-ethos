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

// SEO & JSON-LD
import { OrganizationJsonLd } from '@/app/_components/seo/organization-jsonld';

/* =============================================================================
   COPY CONFIG: "HUMAN, NOT SLOP"
   Voice: Upton Rand (Founder).
   Tone: Rust Belt, Direct, "Machine Shop" metaphor.
   Naming: Explanatory (SEO) over Proprietary.
   ============================================================================= */

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
      <section className="relative z-10 pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="container mx-auto px-4">
          <PremiumContainer variant="glass" className="p-1 md:p-2 border-orange-500/20 shadow-2xl shadow-orange-900/10 mx-2">
            <div className="relative overflow-hidden rounded-xl bg-slate-950/90 aspect-[16/9] md:aspect-[21/9] flex items-center justify-center">
              
              {/* Background Abstract Visuals (Warm Orange) */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15)_0%,rgba(0,0,0,1)_80%)]" />
                <Image
                  src="/assets/generated/hero-home.png"
                  alt=""
                  fill
                  className="object-cover opacity-20 mix-blend-lighten"
                  priority
                />
              </div>

              {/* Hero Content Layer */}
              <div className="relative z-20 text-center max-w-5xl px-4 animate-fadeIn">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-950/40 backdrop-blur-md mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                  </span>
                  <span className="text-xs font-bold text-orange-200 tracking-widest uppercase font-mono">Operations Normal</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-5 md:mb-6 leading-[0.9]">
                  <span className="text-white text-glow-crimson">WE BUILD</span> <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-200 via-orange-400 to-orange-500 text-cinematic">
                    INTELLIGENT WORKFLOWS
                  </span>
                </h1>
                
                <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mb-6 md:mb-8 px-2">
                  You don't need another "AI Chatbot." You need a <strong className="text-orange-200 font-medium">machine shop</strong>. 
                  We build resilient, fixed-price automation workflows with tight tolerances.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full sm:w-auto px-4 sm:px-0">
                  <ButtonLink intent="primary" href="/contact" className="w-full sm:w-auto h-12 md:h-14 px-8 md:px-10 text-base md:text-lg rounded-full shadow-[0_0_25px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] transition-all bg-orange-600 hover:bg-orange-500 border-none text-white font-bold tracking-wide">
                    Start Your Build
                  </ButtonLink>
                  <ButtonLink intent="secondary" href="/solutions" className="w-full sm:w-auto h-12 md:h-14 px-8 md:px-10 text-base md:text-lg rounded-full border-white/10 hover:bg-white/5 backdrop-blur-md text-slate-200">
                    See The Specs
                  </ButtonLink>
                </div>

                {/* Template-style Line Menu */}
                <nav className="mt-8 md:mt-10 relative px-2">
                  {/* Vertical connecting line - hidden on mobile */}
                  <div className="hidden sm:block absolute left-1/2 -top-12 w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-white/50" />
                  <ul className="flex flex-wrap justify-center items-center border border-white/20 rounded-md backdrop-blur-sm bg-white/5">
                    {[
                      { href: "/solutions", label: "Solutions", primary: false },
                      { href: "/pricing", label: "Pricing", primary: false },
                      { href: "/about", label: "About", primary: false },
                      { href: "/contact", label: "Contact", primary: true }
                    ].map((item, i) => (
                      <li key={item.label} className="border-r border-white/20 last:border-r-0">
                        <a 
                          href={item.href} 
                          className={`block px-4 sm:px-6 py-2 sm:py-3 text-[0.65rem] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:bg-white/10 transition-all ${item.primary ? 'text-orange-400 hover:text-orange-300 font-medium' : 'text-white/70 hover:text-white'}`}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </PremiumContainer>
        </div>
      </section>

      {/* 2. THE CHASM: Authentic Voice */}
      <section className="relative z-10 py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="relative">
             {/* Quote Decor */}
             <div className="absolute -top-12 -left-8 text-9xl text-white/5 font-serif select-none">"</div>
             
             <h2 className="text-3xl md:text-5xl font-bold font-hero-accent text-white mb-6 leading-tight text-center md:text-left">
               <span className="text-white text-glow-crimson">It's not about the model.</span> <br/> 
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200 text-glow-ambient">It's about the tolerance.</span>
             </h2>

             <div className="space-y-5 text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed font-light">
               <p>
                 I'm <span className="text-white font-medium">Upton Rand</span>. I spent 5 years training these models back when they were just research papers. 
                 Here is the honest truth: <strong className="text-white">AI is messy.</strong> It hallucinates. It drifts. It forgets.
               </p>
               <p>
                 Most consultants try to sell you a "magic button." I sell you a <strong>machine shop</strong>. 
                 We build workflows that handle the messiness. We engineer the approvals, the rollbacks, and the audit trails. 
                 We treat AI like high-voltage wiring: powerful, essential, and dangerous if not grounded properly.
               </p>
             </div>
           </div>
        </div>
      </section>

      {/* 3. SOCIAL PROOF */}
      <div className="relative z-10 py-12 border-y border-white/5 bg-slate-950/50 backdrop-blur-sm">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-slate-600 mb-8">Trusted Operating Systems</p>
        <TestimonialMarquee />
      </div>

      {/* 4. CAPABILITIES: Bento */}
      <section className="relative z-10 py-16 md:py-20 lg:py-24 bg-slate-950">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-10 md:mb-12 md:flex md:items-end md:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-orange-500 font-mono text-xs md:text-sm tracking-tight mb-3 md:mb-4 block">// SYSTEM CAPABILITIES</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                <span className="text-white text-glow-crimson">BUILT TO</span> <span className="text-slate-800 text-stroke-thin">LAST.</span>
              </h2>
            </div>
            <p className="mt-4 md:mt-0 text-slate-400 max-w-md text-sm md:text-base border-l-2 border-orange-500/30 pl-4 md:pl-6 py-2">
              We don't ship "demos." We deploy production-grade infrastructure that runs your business while you sleep.
            </p>
          </div>
          <CapabilitiesBento />
        </div>
      </section>

      {/* 5. PRICING: Fixed Price */}
      <section className="relative z-10 py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <PremiumContainer variant="obsidian" className="p-6 md:p-10 lg:p-14 relative overflow-hidden group mx-2">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full group-hover:bg-orange-500/10 transition-colors duration-700" />

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 relative z-10">
              <div className="space-y-5">
                 <div className="inline-block px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest">
                   The Anti-Consulting Offer
                 </div>
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-hero-accent leading-tight">
                   <span className="text-white text-glow-crimson">Stop paying for</span> <br/> <span className="line-through decoration-orange-500/50 decoration-2 text-slate-500">slide decks.</span>
                 </h2>
                 <p className="text-sm md:text-base lg:text-lg text-slate-300 leading-relaxed">
                   Enterprise firms charge $300/hr to "delve" into your problems. 
                   We charge a <strong className="text-white">fixed price</strong> to ship a solution.
                 </p>
                 <ul className="space-y-2.5 pt-2">
                   {[
                     "Zero hourly billings. Fixed scope.",
                     "You own the code and the keys.",
                     "90-day 'Break It, We Fix It' warranty.",
                     "Founder-led. No junior associates."
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-sm md:text-base text-slate-300">
                       <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                       {item}
                     </li>
                   ))}
                 </ul>
              </div>

              <div className="flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-10">
                 <div className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-widest mb-2">Builds Starting At</div>
                 <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-3 md:mb-4">
                   $1,497
                 </div>
                 <p className="text-xs md:text-sm text-slate-400 mb-5 md:mb-6 max-w-md">
                   Includes full scoping decision brief, build, deployment, and documentation. 
                   <span className="block mt-1.5 md:mt-2 text-orange-400 font-medium">LGBTQ-owned businesses pay $1,122.</span>
                 </p>
                 <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                   <ButtonLink intent="primary" href="/pricing" className="bg-white text-slate-950 hover:bg-slate-200">
                     View The Menu
                   </ButtonLink>
                   <ButtonLink intent="secondary" href="/contact">
                     Book Grant Call
                   </ButtonLink>
                 </div>
              </div>
            </div>
          </PremiumContainer>
        </div>
      </section>

      {/* 6. AI STRATEGY SPRINTS (Formerly Consensus Engine) */}
      <section className="relative z-10 py-16 md:py-20 bg-slate-950">
        <div className="container mx-auto px-4 max-w-6xl">
           <PremiumContainer variant="glass" className="p-6 md:p-10 lg:p-12 text-center border-white/5 bg-slate-900/40 mx-2">
             <div className="max-w-3xl mx-auto space-y-5">
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-hero-accent text-white text-glow-crimson">
                 AI Strategy Sprints™
               </h2>
               <div className="text-orange-500 font-mono text-xs md:text-sm tracking-wide uppercase">Powered by Consensus Engine</div>
               <p className="text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed font-light px-4">
                 Don't guess. We run multi-agent adversarial research sprints to stress-test your strategy before you spend a dime. 
                 It's like having a boardroom of experts in a box.
               </p>
               <div className="pt-6">
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
      <section className="relative z-10 py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10 md:mb-12">
            <span className="text-orange-500/50 font-mono text-xs tracking-widest mb-2 md:mb-3 block">01001000 01000101 01001100 01010000</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-hero-accent text-glow-crimson">
              Quick Answers. No Fluff.
            </h2>
          </div>
          <div className="mx-2">
            <Accordion
              items={homeFaqItems.map((item) => ({
                _title: item.question,
                answer: item.answer,
              }))}
            />
          </div>
        </div>
      </section>

      {/* 9. SAFETY NET */}
      <section className="relative z-10 py-16 md:py-20 bg-gradient-to-t from-orange-950/20 to-slate-950">
        <div className="container relative z-10 mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-hero-accent leading-tight text-glow-crimson">
                We lift as we climb.
              </h2>
              <div className="h-1 w-20 bg-orange-500 rounded-full" />
              <p className="text-sm md:text-base lg:text-lg text-slate-300 leading-relaxed">
                As an NGLCC-certified business, we know the hustle. We reserve grant slots and offer a 
                permanent <span className="text-orange-400 font-semibold">25% discount</span> for LGBTQ-owned businesses.
              </p>
              <div className="pt-3">
                <LGBTQDiscountModalTrigger />
              </div>
            </div>
            
            {/* Visual: The Abstract 'Lift' */}
            <div className="relative aspect-square md:aspect-auto md:h-80 rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 shadow-2xl flex items-center justify-center p-6 md:p-8 text-center group m-2">
               <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-indigo-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
               
               <blockquote className="relative z-10">
                 <p className="text-base md:text-lg text-slate-200 italic font-light mb-3 md:mb-4">
                   "Upton helped us automate our entire intake process. We got our weekends back."
                 </p>
                 <footer className="text-xs font-bold text-orange-500/80 uppercase tracking-widest">
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
