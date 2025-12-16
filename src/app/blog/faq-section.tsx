"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  ctaText?: string;
  ctaLink?: string;
}

export function FAQSection({ faqs, ctaText, ctaLink }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mt-12 border-t border-slate-200 dark:border-slate-700 pt-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-expanded={openIndex === index}
            >
              <span className="font-medium text-slate-900 dark:text-white">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-slate-500 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-white dark:bg-slate-900">
                <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {ctaText && ctaLink && (
        <div className="mt-8 text-center">
          <Link
            href={ctaLink}
            className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors"
          >
            {ctaText}
          </Link>
        </div>
      )}
    </section>
  );
}

// JSON-LD Schema for FAQPage
export function FAQPageJsonLd({ faqs }: { faqs: FAQ[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
