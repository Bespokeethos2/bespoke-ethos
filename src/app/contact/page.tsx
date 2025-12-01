"use client";

import Link from "next/link";
import { Suspense } from "react";
import { motion } from "framer-motion";

import { Breadcrumbs } from "@/app/_components/seo/breadcrumbs";
import { Section } from "@/common/layout";

function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="be-section-card space-y-6 page-hero-shell"
    >
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />

      <div className="space-y-4 text-center">
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
    </motion.div>
  );
}

export default function ContactPage() {
  return (
    <main className="be-page-slate">
      <ContactPageJsonLd />
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

