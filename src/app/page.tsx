import Image from "next/image";
import dynamic from "next/dynamic";
import { ButtonLink } from "@/common/button";
import { PremiumContainer } from "@/components/ui/premium-container";
import { AI101Modal } from "@/components/ai-explainer/AI101Modal";

// Dynamic imports for below-the-fold components to improve initial page load
// Framer Motion tree-shaking is handled via next.config.ts optimizePackageImports
const TestimonialMarquee = dynamic(() => import("@/components/ui/testimonial-marquee").then(mod => ({ default: mod.TestimonialMarquee })), {
  loading: () => <div className="h-32 animate-pulse bg-slate-100" />,
});

const CapabilitiesBento = dynamic(() => import("@/components/ui/capabilities-bento").then(mod => ({ default: mod.CapabilitiesBento })), {
  loading: () => <div className="h-96 animate-pulse bg-slate-100" />,
});

const Accordion = dynamic(() => import("@/app/_sections/accordion-faq/accordion").then(mod => ({ default: mod.Accordion })), {
  loading: () => <div className="h-64 animate-pulse bg-slate-100" />,
});

const FounderStory = dynamic(() => import("./_sections/founder-story").then(mod => ({ default: mod.FounderStory })), {
  loading: () => <div className="h-96 animate-pulse bg-slate-100" />,
});

const TrustCredentials = dynamic(() => import("./_sections/trust-credentials").then(mod => ({ default: mod.TrustCredentials })), {
  loading: () => <div className="h-96 animate-pulse bg-slate-100" />,
});

const LGBTQDiscountModalTrigger = dynamic(() => import("./_components/lgbtq-discount-modal-trigger").then(mod => ({ default: mod.LGBTQDiscountModalTrigger })), {
  loading: () => <div className="h-10 w-40 animate-pulse bg-slate-200 rounded" />,
});

const ConsensusEngineCard = dynamic(() => import("@/components/ConsensusEngineCard").then(mod => ({ default: mod.ConsensusEngineCard })), {
  loading: () => <div className="h-64 animate-pulse bg-slate-100 rounded-lg" />,
});

const AutomationOpportunityScan = dynamic(() => import("@/components/AutomationOpportunityScan").then(mod => ({ default: mod.AutomationOpportunityScan })), {
  loading: () => <div className="h-96 animate-pulse bg-slate-100" />,
});

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
  title: "Cleveland AI Consulting & Automation | Bespoke Ethos",
  description:
    "Fixed-price AI automation for small business. Cleveland-based AI consulting including chatbots, workflow automation, and AI strategy. 25% discount for LGBTQ-owned businesses.",
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
    <div aria-label="Bespoke Ethos homepage" className="min-h-screen relative overflow-hidden bg-white selection:bg-orange-500/30">
      
      {/* 1. HERO: Full-width with white background */}
      <section className="relative z-10 min-h-[80vh] flex items-center isolate bg-white">
        {/* Subtle background accents */}
        <div className="absolute inset-0 z-0 bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(253,243,232,0.4)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(249,115,22,0.08)_0%,transparent_50%)]" />
        </div>

        {/* Hero Content - constrained width for readability */}
        <div className="relative z-20 w-full px-4 sm:px-6 md:px-8 lg:px-12 py-24 sm:py-32 md:py-40">
          <div className="max-w-5xl animate-fadeIn">
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 sm:mb-10 leading-[1.1]">
              <span className="text-slate-900">We cut busywork.</span><br />
              <span className="text-slate-900">
                You keep control.
              </span>
            </h1>
            
            <div className="space-y-6 max-w-2xl mb-10">
              <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                Auditable AI workflows, on-brand chatbots, and decision clarity—built for small business. Keep human approvals, regain your time, and stay in charge.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-start">
              <ButtonLink 
                href="/contact" 
                className="inline-flex items-center justify-center min-h-12 px-8 py-3 text-sm sm:text-base font-semibold rounded-md bg-orange-700 hover:bg-orange-800 text-white transition-colors shadow-md"
              >
                Get Free Assessment
              </ButtonLink>
              <ButtonLink 
                href="/solutions/consensus-engine" 
                className="inline-flex items-center justify-center min-h-12 px-8 py-3 text-sm sm:text-base font-semibold rounded-md bg-orange-700 hover:bg-orange-800 text-white transition-colors shadow-md"
              >
                Get Free Consensus Engine Answer
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CHASM: Authentic Voice */}
      <section className="relative z-10 py-24 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
           <div className="relative">
             {/* Quote Decor */}
             <div aria-hidden="true" className="absolute -top-6 sm:-top-8 md:-top-12 -left-3 sm:-left-4 md:-left-8 text-6xl sm:text-7xl md:text-9xl text-slate-900/5 font-serif select-none">&quot;</div>
             
             <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-hero-accent text-slate-900 mb-4 sm:mb-6 md:mb-8 leading-tight text-center md:text-left">
               <span className="text-slate-900">It&apos;s not about the model.</span>{" "}
               <span className="text-orange-700">It&apos;s about the tolerance.</span>
             </h2>

             <div className="space-y-3 sm:space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl text-slate-800 leading-relaxed font-light">
               <p>
                 I&apos;m <span className="text-slate-900 font-medium">Upton Rand</span>. I spent 5 years training these models back when they were just research papers. 
                 Here is the honest truth: <strong className="text-slate-900">AI is messy.</strong> It hallucinates. It drifts. It forgets.
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


      import { redirect } from "next/navigation";

      export default function Home() {
        redirect("https://alignment-ai.io");
        return null;
      }
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
