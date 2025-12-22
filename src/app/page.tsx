import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/common/button";

// SEO & JSON-LD
import { OrganizationJsonLd } from '@/app/_components/seo/organization-jsonld';

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
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 -z-10 opacity-50">
          <div className="bg-[radial-gradient(circle_at_top_left,rgba(253,243,232,0.6),transparent),radial-gradient(circle_at_bottom_right,rgba(221,242,253,0.6),transparent)] h-full w-full" />
        </div>
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Stop guessing. Start growing.
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Bespoke Ethos uses AI automation to help Cleveland small businesses
            reclaim their time and make better decisions. You bring the passion;
            we build the systems.
          </p>
          <ButtonLink
            href="/book"
            className="inline-block rounded-full bg-orange-500 px-8 py-3 text-white text-base font-medium shadow-md transition-colors hover:bg-orange-600"
          >
            Book your free AI consultation
          </ButtonLink>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Our tools, your flow</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Flowstack */}
            <div className="p-6 rounded-xl bg-white shadow-md flex flex-col items-center">
              <Image src="/RedBridging.png" alt="Flowstack graphic" width={80} height={80} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flowstack™</h3>
              <p className="text-sm text-slate-600">
                Automate soul-sucking tasks without losing control. We map your
                process, keep approvals intact, and build a production-ready
                automation in days.
              </p>
              <Link href="/solutions/flowstack" className="mt-4 text-orange-600 hover:underline">
                Learn more →
              </Link>
            </div>
            {/* Cadence */}
            <div className="p-6 rounded-xl bg-white shadow-md flex flex-col items-center">
              <Image src="/cadence.png" alt="Cadence graphic" width={80} height={80} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cadence™</h3>
              <p className="text-sm text-slate-600">
                The chatbot that actually listens. Cadence turns conversations
                into structured knowledge so you never lose an insight again.
              </p>
              <Link href="/solutions/cadence" className="mt-4 text-orange-600 hover:underline">
                Learn more →
              </Link>
            </div>
            {/* Consensus Engine */}
            <div className="p-6 rounded-xl bg-white shadow-md flex flex-col items-center">
              <Image src="/consensus.png" alt="Consensus Engine graphic" width={80} height={80} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Consensus Engine™</h3>
              <p className="text-sm text-slate-600">
                Fuse numbers, brand tone, and customer signals into one clear
                brief. Make confident decisions without endless meetings.
              </p>
              <Link href="/solutions/consensus-engine" className="mt-4 text-orange-600 hover:underline">
                Learn more →
              </Link>
            </div>
            {/* Chatbots callout */}
            <div className="p-6 rounded-xl bg-white shadow-md flex flex-col items-center">
              <Image src="/flowstack.png" alt="Chatbots graphic" width={80} height={80} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Chatbots &amp; Automations</h3>
              <p className="text-sm text-slate-600">
                From custom chatbots to integrated workflows, we tailor AI to
                your business—no cookie-cutters or generic templates.
              </p>
              <Link href="/solutions" className="mt-4 text-orange-600 hover:underline">
                Explore all solutions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <blockquote className="text-xl md:text-2xl italic text-slate-700 mb-6">
            &quot;My first business almost broke me. AI saved it. Bespoke Ethos
            delivered automations that gave me my weekends back—and the
            confidence to grow again.&quot;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <Image src="/me.png" alt="Upton Rand" width={56} height={56} className="rounded-full" />
            <div className="text-left">
              <p className="font-semibold">Upton Rand</p>
              <p className="text-sm text-slate-600">Founder, Bespoke Ethos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-50 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to regain your time?
          </h2>
          <p className="mb-8 text-slate-700">
            Schedule a no-pressure call and discover how AI automation can help
            your business thrive.
          </p>
          <ButtonLink
            href="/book"
            className="inline-block rounded-full bg-orange-500 px-8 py-3 text-white text-base font-medium shadow-md transition-colors hover:bg-orange-600"
          >
            Get started
          </ButtonLink>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Contact Us</h2>
          <form className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Tell us about your project..."
              className="w-full rounded-md border border-slate-300 px-4 py-3 h-32 resize-none focus:border-orange-500 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-orange-500 px-8 py-3 text-white font-medium shadow-md transition-colors hover:bg-orange-600"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* JSON-LD Schemas */}
      <OrganizationJsonLd />
      <HomePageJsonLd />
      <WebSiteJsonLd />
      <HomeFaqJsonLd />
      <ServiceJsonLd />
      <OfferJsonLd />
    </main>
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
      description: "Includes full scoping decision brief, build, deployment, documentation, and 90-day Break It, We Fix It warranty. Founder-led with no junior associates.",
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
