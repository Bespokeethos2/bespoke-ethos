"use client";

import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";

import { Breadcrumbs } from "@/app/_components/seo/breadcrumbs";
import { Section } from "@/common/layout";
import { Accordion } from "@/app/_sections/accordion-faq/accordion";
import { OrganizationJsonLd } from '@/app/_components/seo/organization-jsonld';


const contactFaqItems = [
  {
    _title: "What happens after I submit the Jotform?",
    answer:
      "You’ll go straight into my inbox—not an automated ticket system. I review each submission personally and reply by email, usually within one business day, with clarifying questions or a suggested next step.",
  },
  {
    _title: "Can we meet live instead of just using email?",
    answer:
      "Yes. If it looks like a fit after your form comes in, I’ll send over a link to schedule a short call so we can walk through your workflows, tools, and constraints in real time.",
  },
  {
    _title: "What should I include in my message?",
    answer:
      "A quick overview of your business, the tools you already use, and one or two workflows that feel especially brittle or time-consuming is enough. Screenshots or rough notes are helpful but not required.",
  },
  {
    _title: "Is this only for businesses in Cleveland?",
    answer:
      "No. I’m based in Cleveland, but most work happens remotely. We’ll collaborate over calls and Loom walkthroughs, iterating on a first version of your workflow and refining it from there—wherever you’re located.",
  },
] as const;

function ContactForm() {
  return (
    <LazyMotion features={domAnimation}>
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="be-section-card space-y-6 page-hero-shell"
    >
      <OrganizationJsonLd />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />

      <div className="space-y-4 text-center">
        <div className="relative w-full h-48 md:h-64 overflow-hidden rounded-3xl mb-8 shadow-xl border border-slate-200/50">
             <Image
                src="/assets/generated/service_consult.svg"
                alt="Hand writing 'Let's Build' on stationery"
                fill
                className="object-cover object-center"
                priority
             />
             {/* NANO_BANANA_OPTIMIZATION:
                  Ref: IMG-OPT-001/5B/ContactHero
                  Prompt: Close up macro shot of a hand holding a premium fountain pen writing 'Let's Build', warm lighting.
                  Status: Pending Generation
              */}
        </div>
        <h1 className="font-hero-accent text-balance text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
          Contact Bespoke Ethos
        </h1>
        <p className="text-base leading-relaxed text-text-secondary dark:text-dark-text-secondary max-w-xl mx-auto">
          To get in touch or schedule time, use the Jotform link below. You&apos;ll be taken to a short form to share details.
        </p>
      </div>

      <div className="flex justify-center">
        <Link
          href="https://form.jotform.com/253342264894160"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-accent-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
        >
          Make a schedule on Jotform
        </Link>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary text-center">
          Before you reach out
        </h2>
        <p className="mt-2 text-sm text-text-secondary dark:text-dark-text-secondary max-w-xl mx-auto">
          A few quick answers to common questions about how contact works and what to include in your note.
        </p>
        <div className="mx-auto mt-4 flex w-full gap-8 md:max-w-(--breakpoint-sm) lg:max-w-(--breakpoint-md) lg:gap-14 lg:px-24 xl:max-w-(--breakpoint-xl)">
          <Accordion items={contactFaqItems} />
        </div>
      </div>
    </m.div>
    </LazyMotion>
  );
}

export default function ContactPage() {
  return (
    <main className="be-page-slate">
      <ContactPageJsonLd />
      <ContactFaqJsonLd />
      <Section className="gap-5 -mt-14 md:gap-6 md:-mt-4">
        <Suspense fallback={<div>Loading...</div>}>
          <ContactForm />
        </Suspense>
      </Section>
    </main>
  );
}

function ContactPageJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${base}/contact`,
    name: "Contact Bespoke Ethos",
    mainEntityOfPage: `${base}/contact`,
  } as const;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

function ContactFaqJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: contactFaqItems.map((item) => ({
      "@type": "Question",
      name: item._title,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    mainEntityOfPage: `${base}/contact`,
  } as const;

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
