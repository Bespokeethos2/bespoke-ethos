import { Heading } from "@/common/heading";
import type { Metadata } from "next";
import { Section } from "@/common/layout";
import { Breadcrumbs } from "@/app/_components/seo/breadcrumbs";
import { ButtonLink } from "@/common/button";
import Image from "next/image";
import { Accordion } from "@/app/_sections/accordion-faq/accordion";
import { PremiumContainer } from "@/components/ui/premium-container";
import { OrganizationJsonLd } from '@/app/_components/seo/organization-jsonld';

export const revalidate = 1800;

const siteUrl = "https://www.bespokeethos.com";

export const metadata: Metadata = {
  title: "About Bespoke Ethos | AI Consulting & Workflow Automation for Small Businesses",
  description:
    "Learn about Bespoke Ethos, a Cleveland-based AI consulting and workflow automation firm for small businesses. NGLCC-certified, Catalant-vetted founder with 5+ years training AI models.",
  alternates: { canonical: "/about" },
};

const aboutFaqItems = [
  {
    _title: "Who actually does the work?",
    answer: "Me. Upton Rand. I don't farm your project out to a junior associate or an offshore team. When we build a workflow, I'm the one ensuring the tolerances are tight.",
  },
  {
    _title: "What is a 'Cognitive Prosthetic'?",
    answer: "It's an AI system built to handle a specific mental load for you. Unlike a generic chatbot, it knows your specific context, follows your specific rules, and doesn't get tired. It's a tool, not a toy.",
  },
  {
    _title: "Why Fixed Price?",
    answer: "Because you need certainty. I scope the build, I quote a price, and I deliver. If it takes me longer, that's my problem, not yours.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <OrganizationJsonLd />
      <AboutPageJsonLd />
      <AboutFaqJsonLd />
      <AboutVideoJsonLd />

      <Section className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl space-y-12">
          
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} className="mb-8" />

          {/* SOTA Hero Section */}
          <PremiumContainer variant="obsidian" className="p-8 md:p-12 overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none" />
             
             <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
               {/* Image Side */}
               <div className="relative group">
                 <div className="absolute inset-0 bg-orange-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                   <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10" />
                   <Image
                     src="/assets/upton-hero.jpg"
                     alt="Upton Rand - Founder of Bespoke Ethos"
                     width={600}
                     height={600}
                     className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                     priority
                   />
                 </div>
               </div>

               {/* Content Side */}
               <div className="space-y-6">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-950/30">
                   <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                   <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Founder & AI Architect</span>
                 </div>
                 
                 <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
                   UPTON <br/> <span className="text-stroke-thin text-slate-800">RAND</span>
                 </h1>
                 
                 <p className="text-xl text-slate-300 font-light leading-relaxed">
                   I spent 5 years training AI models when they were still in the lab. Now, I use that experience to build 
                   <strong> precision tools</strong> for founders who are tired of the hype.
                 </p>

                 <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                   <div>
                     <div className="text-3xl font-bold text-white">5+</div>
                     <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Years Training AI</div>
                   </div>
                   <div>
                     <div className="text-3xl font-bold text-orange-500">NGLCC</div>
                     <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Certified</div>
                   </div>
                   <div>
                     <div className="text-3xl font-bold text-white">25%</div>
                     <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">LGBTQ Discount</div>
                   </div>
                 </div>
               </div>
             </div>
          </PremiumContainer>

          {/* The Manifesto */}
          <div className="grid md:grid-cols-2 gap-8">
            <PremiumContainer variant="glass" className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide">The Mission</h2>
              <div className="prose prose-invert text-slate-300">
                <p>
                  I live between two extremes: "the Torrent"—hyper-systemizing bursts where solutions click into place—and 
                  the needing a steady anchor. I built Bespoke Ethos because I needed a 
                  <strong> cognitive prosthetic</strong> before I even knew what to call it.
                </p>
                <p>
                  Our "Rust Belt" roots mean we hold tight tolerances. Audit trails, approvals, rollbacks, and documentation. 
                  No black-box infrastructure. Just resilient workflows you can trust.
                </p>
              </div>
            </PremiumContainer>
            
            <div className="space-y-4">
              <PremiumContainer variant="neon" className="p-6">
                <h3 className="text-lg font-bold text-white mb-4">Why Work With Us?</h3>
                <ul className="space-y-3">
                  {[
                    "NGLCC Certified LGBTQ+ Business",
                    "Catalant-Vetted Enterprise Consultant",
                    "Microsoft-Backed Founder Alum",
                    "Human-in-the-Loop Pedigree (Appen)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                      <span className="text-orange-500 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </PremiumContainer>

              <PremiumContainer variant="obsidian" className="p-6 flex flex-col justify-center items-center text-center h-full">
                <p className="text-slate-400 mb-6 font-light">
                  "There has never been a better time to be a builder. Let's get to work."
                </p>
                <ButtonLink href="/contact" intent="primary" className="w-full justify-center">
                  Start Your Project
                </ButtonLink>
              </PremiumContainer>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="pt-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12 font-hero-accent">Plain Language Answers</h2>
            <Accordion items={aboutFaqItems} />
          </div>

        </div>
      </Section>
    </main>
  );
}

function AboutPageJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${base}/about`,
    name: "About Bespoke Ethos",
    mainEntity: { "@type": "Organization", name: "Bespoke Ethos" },
  } as const;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

function AboutFaqJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: aboutFaqItems.map((item) => ({
      "@type": "Question",
      name: item._title,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    mainEntityOfPage: `${base}/about`,
  } as const;

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

function AboutVideoJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "About Bespoke Ethos",
    description: "Overview of Bespoke Ethos methodology.",
    thumbnailUrl: `${base}/assets/logo-light.png`,
    uploadDate: "2025-01-01T00:00:00Z",
    contentUrl: `${base}/assets/About.mp4`,
    embedUrl: `${base}/about`,
  } as const;

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
