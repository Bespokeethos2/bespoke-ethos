import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { Section } from "@/common/layout";
import { Heading } from "@/common/heading";
import { Breadcrumbs } from "@/app/_components/seo/breadcrumbs";

type Testimonial = {
  title: string;
  summary: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  imageSrc?: string;
  story?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    title: "From 'Math Anxiety' to a B+ in Statistics",
    summary: "Alex needed a tutor who spoke his language—brewery operations—not abstract formulas. We built Molly to translate statistics into terms he understood.",
    quote: "Molly explains stats using my brewery floor. It's not generic—it's mine. I'm getting a B+ in a class I was terrified of.",
    author: "Alex",
    role: "Brewer",
    company: "Ore Dock Brewing Company",
    imageSrc: "/assets/generated/testimonial-alex.jpg",
    story: "Alex works at a brewery and recently went back to school after a decade off. He was juggling a job and a lot of life changes, and he needed a statistics tutor who worked the way he did. We made him 'Molly'—a fine-tuned model specifically trained on Alex's syllabus, expectations, and learning style. When checked in after Thanksgiving, he said: 'Everything is going well, just studying for finals. I'm actually getting a B+ in the class—that's the highest grade I've ever gotten in a math class.'",
  },
  {
    title: "AI Strategy Sprint paid for itself in 3 weeks",
    summary:
      "Premium chatbot trained on founder voice for an LGBTQ-owned retail co-op. 25% discount applied, escalation paths intact, zero black-box infra.",
    quote:
      "Not another chatbot. AI Strategy Sprint sounds like us, hands off to humans when it should, and we kept approvals. Customers noticed the difference immediately.",
    author: "Monique Ellis",
    role: "Co-Founder",
    company: "Lake Effect Co-op",
    imageSrc: "/assets/generated/testimonial-monique.jpg",
  },
  {
    title: "Workflow Automation Setup stopped the 2 a.m. outages",
    summary:
      "One brittle Zapier/QuickBooks chain was rebuilt static-first with rollback paths and monitoring. Rust Belt manufacturer reclaimed 10+ hours a week.",
    quote:
      "We stopped babysitting failed Zaps. Everything is documented with approvals and alerts-built by someone who knows tight tolerances.",
    author: "Derrick Patel",
    role: "Ops Lead",
    company: "Torque Transmission",
    imageSrc: "/assets/generated/testimonial-derrick.jpg",
  },
  {
    title: "Multilingual blog without losing our voice",
    summary:
      "Gay Mens Field Guide went from four hours of manual translation and optimization per post to about one hour—while keeping local nuance and tone intact across three languages.",
    quote:
      "We were drowning in translation hell. Now we write one blog, feed it into the pipeline, and it comes out optimized and translated for each country automatically. It easily saves us 6–7 hours every week without sacrificing authenticity.",
    author: "Gay Mens Field Guide",
    role: "Publisher",
    company: "gaymensfieldguide.com",
    imageSrc: "/assets/testimonial-gmfg.png",
  },
];

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Testimonials | Bespoke Ethos",
  description:
    "Proof from founders who needed audited, low-maintenance automation—not black-box magic.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <main className="be-page-slate">
      <Section className="gap-5 -mt-14 md:gap-6 md:-mt-4">
        <TestimonialsJsonLd />
        <div className="be-section-card space-y-6 page-hero-shell">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Testimonials" }]} />
          <Heading align="left" subtitle="Rust Belt proof, productized outcomes">
            <h1>Testimonials</h1>
          </Heading>
          <div className="pill-row">
            <span className="pill">AI Strategy Sprint · Premium chatbot</span>
            <span className="pill">Workflow Automation Setup · Automation with approvals</span>
            <span className="pill">AI Research Assistant · Cited briefs</span>
            <span className="pill">Automation Rescue · Reliability rescue</span>
          </div>

          <div className="rail-shell">
            <div className="flex flex-col gap-8">
              {TESTIMONIALS.map((t) => (
                <article
                  key={t.title}
                  className="ghost-card ghost-card--soft flex flex-col gap-4 p-6 md:p-8"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    {t.imageSrc && (
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                        <Image
                          src={t.imageSrc}
                          alt={t.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="space-y-2">
                      <h2 className="text-xl font-bold text-text-primary dark:text-dark-text-primary font-heading">
                        {t.title}
                      </h2>
                      <div className="flex items-center gap-2 text-sm text-text-tertiary dark:text-dark-text-tertiary font-medium">
                        <span className="text-text-primary dark:text-dark-text-primary">{t.author}</span>
                        <span>·</span>
                        <span>{t.role}, {t.company}</span>
                      </div>
                      <blockquote className="text-lg italic text-text-secondary dark:text-dark-text-secondary border-l-4 border-accent-400 pl-4 my-4">
                        &quot;{t.quote}&quot;
                      </blockquote>
                      {t.story && (
                        <p className="text-base leading-relaxed text-text-secondary dark:text-dark-text-secondary bg-surface-primary/50 dark:bg-dark-surface-primary/50 p-4 rounded-lg">
                          {t.story}
                        </p>
                      )}
                      {!t.story && (
                        <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                          {t.summary}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <p className="mt-6 text-sm text-text-tertiary dark:text-dark-text-tertiary text-center">
            Want results like this? <Link href="/contact" className="underline text-accent-600 hover:text-accent-500">Book a free consult</Link> and we&apos;ll see if we can help.
          </p>
        </div>
      </Section>
    </main>
  );
}

function TestimonialsJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const reviews = TESTIMONIALS.map((t) => ({
    "@type": "Review",
    name: t.title,
    reviewBody: t.story || t.quote,
    author: {
      "@type": "Person",
      name: t.author,
    },
    itemReviewed: {
      "@type": "Service",
      name: t.company || "Bespoke Ethos service",
      provider: {
        "@id": `${base}/#organization`,
      },
    },
  }));

  const json = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${base}/testimonials#webpage`,
    url: `${base}/testimonials`,
    name: "Testimonials | Bespoke Ethos",
    mainEntity: reviews,
  } as const;

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
