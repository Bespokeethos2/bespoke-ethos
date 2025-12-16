"use client";

import { Section } from "@/common/layout";
import { ButtonLink } from "@/common/button";

const FALLBACK_COPY = {
  title: "Stay in the loop",
  description: "Get AI workflow tactics and launch notes directly in your inbox once a month.",
};

export function Newsletter() {
  return (
    <Section aria-label="Newsletter signup" className="bg-slate-900 py-12 sm:py-16 overflow-hidden border-y border-white/20" container="full">
      <div className="container mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 flex-col items-start gap-3">
          <h2 className="text-2xl sm:text-3xl font-bold lg:text-4xl text-white">{FALLBACK_COPY.title}</h2>
          <p className="text-base sm:text-lg text-slate-200 lg:text-xl leading-relaxed">
            {FALLBACK_COPY.description}
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:max-w-lg sm:flex-row sm:items-center sm:justify-end">
          <ButtonLink intent="primary" size="lg" href="https://form.jotform.com/253292960463058" target="_blank" className="bg-orange-600 hover:bg-orange-500 text-white font-bold shadow-lg">
            Subscribe via Jotform
          </ButtonLink>
          <ButtonLink intent="secondary" size="lg" href="https://calendly.com/contact-bespokeethos/30min" target="_blank" className="border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 font-bold">
            Book a call
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
