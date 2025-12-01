import { Heading } from "@/common/heading";
import type { Metadata } from "next";
import { Section } from "@/common/layout";
import { Breadcrumbs } from "@/app/_components/seo/breadcrumbs";
import { ButtonLink } from "@/common/button";
import Image from "next/image";
import { Accordion } from "@/app/_sections/accordion-faq/accordion";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "About Bespoke Ethos | AI Consulting & Workflow Automation for Small Businesses",
  description:
    "Learn about Bespoke Ethos, a Cleveland-based AI consulting and workflow automation firm for small businesses. NGLCC-certified, Catalant-vetted founder with 5+ years training AI models and a Tool & Die background.",
  alternates: { canonical: "/about" },
};

const aboutFaqItems = [
  {
    _title: "Who actually does the consulting work?",
    answer:
      "Every engagement is led by founder Upton Rand—a Tool & Die technician and former AI trainer—rather than an anonymous subcontractor. You work directly with the person designing and testing your automations, not a rotating agency bench.",
  },
  {
    _title: "What kinds of businesses do you work with?",
    answer:
      "Bespoke Ethos focuses on small businesses and lean teams: service firms, trades, professional practices, and early-stage companies that are drowning in busywork but can’t afford a large consulting firm. If you have repeatable processes and too many manual steps, you’re a good fit.",
  },
  {
    _title: "What problems do you usually solve first?",
    answer:
      "Most projects start by fixing brittle workflows—things like broken Zapier or Make.com automations, messy intake forms, manual follow-up, or reporting that takes hours each week. We stabilize what you already have before layering on more AI so you see value quickly and avoid adding chaos.",
  },
  {
    _title: "How does pricing work for AI consulting?",
    answer:
      "Instead of hourly billing, Bespoke Ethos uses fixed-scope, fixed-price projects so you know the cost up front. Most automation projects start around $997, with clear deliverables and a defined window for support once the workflow is live.",
  },
  {
    _title: "Do I need to be technical to work with you?",
    answer:
      "Not at all. That’s what we’re for. We focus on understanding your needs first, then build systems to get you there that blend into the background.",
  },
  {
    _title: "Can you work with me if I'm not in Cleveland?",
    answer:
      "Yes. Most work happens remotely—we’re all about iterative improvement. We’ll design the first version together over calls and Loom walkthroughs, then refine it in small passes. In-person meetings are reserved for a handful of Cleveland-area clients.",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="be-page-slate">
      <Section className="gap-5 -mt-14 md:gap-6 md:-mt-4">
        <AboutPageJsonLd />
        <AboutFaqJsonLd />
        <AboutVideoJsonLd />
        <div className="be-section-card space-y-6 page-hero-shell">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} />

      {/* Stunning Hero Section with Upton's Image */}
      <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 shadow-2xl">
        {/* Decorative background elements - Clean Gradient Only */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-transparent to-slate-100/40 pointer-events-none" />
        
        {/* Content container */}
        <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
          {/* Left side - Image with premium frame */}
          <div className="relative group">
            {/* Outer glow effect - Subtle */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/10 via-slate-400/10 to-orange-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Image container with inner shadow */}
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none z-10" />
              <Image
                src="/assets/upton-hero.jpg"
                alt="Upton Rand - Founder of Bespoke Ethos"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/80 border border-orange-200/60 backdrop-blur-sm">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-orange-900 uppercase tracking-wider">Founder & AI Architect</span>
            </div>
            
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 font-hero-accent leading-tight">
                Upton Rand
              </h1>
              <p className="text-xl text-slate-600 font-medium">
                AI Trainer & Automation Architect
              </p>
              <p className="text-base text-slate-600 leading-relaxed max-w-md mt-4">
                I spent 5 years training the models everyone else is just now learning to prompt. Now, I use that experience to build &quot;cognitive prosthetics&quot; for founders—systems that capture your intent, automate your busywork, and never hallucinate on the details. We build the guardrails so you can run fast without breaking things.
              </p>
            </div>
            
            {/* Quote card */}
            <div className="relative p-6 rounded-xl bg-white/80 border border-slate-200/60 shadow-lg backdrop-blur-sm">
              <div className="absolute top-4 left-4 text-6xl text-orange-200 font-serif leading-none">&quot;</div>
              <blockquote className="relative z-10 text-lg text-slate-700 font-medium italic pl-8">
                &quot;There has never been a better time to be a founder&quot;
              </blockquote>
              <div className="mt-3 flex items-center gap-2 pl-8">
                <div className="h-px flex-grow bg-gradient-to-r from-orange-300 to-transparent" />
                <span className="text-sm font-semibold text-orange-600">Upton Rand</span>
              </div>
            </div>
            
            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-white/60 border border-slate-100 backdrop-blur-sm">
                <div className="text-2xl font-bold text-orange-600">5+</div>
                <div className="text-xs text-slate-600 font-medium">Years AI Training</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/60 border border-slate-100 backdrop-blur-sm">
                <div className="text-2xl font-bold text-slate-900">NGLCC</div>
                <div className="text-xs text-slate-600 font-medium">Certified</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/60 border border-slate-100 backdrop-blur-sm">
                <div className="text-2xl font-bold text-orange-600">25%</div>
                <div className="text-xs text-slate-600 font-medium">LGBTQ Discount</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <Heading subtitle="AI automation you can trust" align="left">
            <h1>About Bespoke Ethos</h1>
          </Heading>
          <div className="pill-row">
            <span className="pill">AI trainer + Automation Architect</span>
            <span className="pill">NGLCC-certified</span>
            <span className="pill">Catalant-vetted</span>
            <span className="pill">25% LGBTQ-owned discount</span>
          </div>
          <div className="prose max-w-none mt-6">
            <p>
              I&apos;m Upton Rand—a Cleveland AI trainer and automation architect. I spent 5+ years
              training the same frontier models everyone is buying now, sharpened my teeth in Azure alongside Microsoft
              enterprise developers in 2024, and I&apos;m currently building in the cloud with Google while in
              application for their Founders program. I build automations that stay simple: static sites, serverless
              when needed, approvals and audit trails always on.
            </p>
            <p>
              Bespoke Ethos exists for founders who can&apos;t afford McKinsey: fixed scopes, clear prices, and a
              90-day “break it, we fix it” safety net. NGLCC-certified, Catalant-vetted, and proudly LGBTQ-owned—with a
              25% discount on upfront fees for LGBTQ-owned teams and a few need-based slots each year.
            </p>
          </div>
        </div>
        
        <div className="rail-shell">
          <div className="ghost-card ghost-card--soft">
            <h2 className="text-xl font-semibold mb-4">Our Credentials</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent-500 font-bold">✓</span>
                <span><strong>NGLCC Certified</strong> - LGBTQ+ business enterprise with supplier diversity access</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-500 font-bold">✓</span>
                <span><strong>Catalant Vetted</strong> - Independently verified enterprise consultant</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-500 font-bold">✓</span>
                <span><strong>5+ Years training AI</strong> - Human-in-the-loop model training (Appen)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-500 font-bold">✓</span>
                <span><strong>Small Business Focus</strong> - Productized outcomes, not hourly mystery work</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 rail-shell">
        <div className="ghost-card ghost-card--soft">
          <h2 className="text-2xl font-semibold mb-4">Why I built this</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            I live between two extremes: “the Torrent”—hyper-systemizing bursts where solutions click into place like
            spinning padlocks—and the need for a steady anchor as my mother navigates Alzheimer&apos;s. I needed a
            cognitive prosthetic before I needed it to survive. That&apos;s why everything we ship is designed to catch
            ideas without hallucinating and to hold context without breaking trust.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed mt-4">
            Rust Belt roots mean we hold tight tolerances: audit trails, approvals, rollbacks, and documentation on every
            engagement. No black-box infra, no surprise servers—just resilient workflows you can explain to your team.
          </p>
        </div>
      </div>



      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <ButtonLink href="/contact" intent="primary">
          Get in touch
        </ButtonLink>
        <ButtonLink href="/solutions" intent="secondary">
          View our solutions
        </ButtonLink>
      </div>

      <div className="mt-14">
        <Heading align="center" title="Questions founders ask before working together">
          <h2 className="text-2xl font-semibold">About Bespoke Ethos, in plain language</h2>
        </Heading>
        <div className="mx-auto mt-6 flex w-full gap-8 md:max-w-(--breakpoint-sm) lg:max-w-(--breakpoint-md) lg:gap-14 lg:px-24 xl:max-w-(--breakpoint-xl)">
          <Accordion items={aboutFaqItems} />
        </div>
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
    name: "About Bespoke Ethos in 10 Seconds",
    description:
      "A short looping header video of Bespoke Ethos at work—automation dashboards, founder notes, and the calm we aim to bring to small-business operations.",
    thumbnailUrl: `${base}/assets/logo-light.png`,
    uploadDate: "2025-01-01T00:00:00Z",
    contentUrl: `${base}/assets/About.mp4`,
    embedUrl: `${base}/about`,
  } as const;

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
