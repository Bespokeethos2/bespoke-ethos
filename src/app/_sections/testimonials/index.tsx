import Image from "next/image";
import Link from "next/link";
import { Section } from "@/common/layout";

type MiniTestimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  imageSrc: string;
  link?: string;
};

const HOMEPAGE_TESTIMONIALS: MiniTestimonial[] = [
  {
    name: "Alex",
    role: "Brewer",
    company: "Ore Dock Brewing Company",
    quote: "Molly explains stats using my brewery floor. It's not generic-it's mine.",
    imageSrc: "/assets/generated/testimonial-alex.jpg",
    link: "/testimonials",
  },
  {
    name: "Monique Ellis",
    role: "Co-Founder",
    company: "Lake Effect Co-op",
    quote: "We finally agreed on our brand voice without another six-week debate.",
    imageSrc: "/assets/generated/testimonial-monique.jpg",
  },
  {
    name: "Derrick Patel",
    role: "Founder",
    company: "LedgerLight Accounting",
    quote: "Revenue stopped bleeding-and now we get alerts before clients feel pain.",
    imageSrc: "/assets/generated/testimonial-derrick.jpg",
  },
];

export function HomepageTestimonialsStrip() {
  return (
    <Section id="testimonials" className="bg-surface-secondary/40 dark:bg-dark-surface-secondary/40">
      <div className="px-4 sm:px-6">
        <div className="be-section-card">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
            <div className="flex flex-col gap-2 text-left md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-500">
                  What founders say
                </p>
                <h2 className="mt-2 text-balance text-2xl font-semibold leading-tight text-text-primary dark:text-dark-text-primary md:text-3xl">
                  Real small businesses, real time back.
                </h2>
              </div>
              <p className="max-w-md text-sm text-text-secondary dark:text-dark-text-secondary">
                A few of the teams who used Bespoke Ethos to rescue brittle workflows and ship AI that actually fits their business.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-4">
              {HOMEPAGE_TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="be-glass-card flex w-full flex-col gap-3 rounded-xl border border-border bg-surface-primary/80 p-4 shadow-sm dark:border-dark-border dark:bg-dark-surface-primary/80 md:min-w-0 md:snap-start"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-linear-to-br from-orange-300 to-orange-500 dark:from-orange-600 dark:to-orange-700">
                      <Image
                        src={t.imageSrc}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div className="text-xs sm:text-sm">
                      <div className="font-semibold text-text-primary dark:text-dark-text-primary text-sm">{t.name}</div>
                      <div className="text-xs text-text-tertiary dark:text-dark-text-tertiary">
                        {t.role}, {t.company}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    &quot;{t.quote}&quot;
                  </blockquote>
                  {t.link && (
                    <div className="mt-auto pt-2">
                        <Link href={t.link} className="text-xs font-semibold text-accent-600 hover:text-accent-700 flex items-center gap-1 group">
                            Read full story 
                            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                        </Link>
                    </div>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
