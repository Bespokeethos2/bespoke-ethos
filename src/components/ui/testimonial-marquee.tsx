"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  imageSrc: string;
  link?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alex",
    role: "Brewer",
    company: "Ore Dock Brewing Company",
    quote: "Molly explains stats using my brewery floor. It's not generic—it's mine.",
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
    quote: "Revenue stopped bleeding—now we get alerts before clients feel pain.",
    imageSrc: "/assets/generated/testimonial-derrick.jpg",
  },
  {
    name: "Gay Mens Field Guide",
    role: "Publisher",
    company: "gaymensfieldguide.com",
    quote: "We were drowning in translation hell. Now we write one blog, feed it into the pipeline, and it comes out optimized and translated for each country automatically.",
    imageSrc: "/assets/testimonial-gmfg.png",
  },
];

export function TestimonialMarquee() {
  return (
    <section id="testimonials" className="relative w-full overflow-hidden bg-transparent">
      {/* Fade Edges - 40% reduced opacity */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#faf9f6]/60 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#faf9f6]/60 to-transparent pointer-events-none" />

      <div className="flex w-full">
        <div className="flex w-max animate-marquee gap-8 hover:[animation-play-state:paused]">
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="relative w-[360px] shrink-0 rounded-2xl border border-slate-200/60 bg-white/60 p-7 shadow-lg backdrop-blur-md transition-transform hover:scale-[1.02] hover:shadow-xl hover:border-orange-200/50 my-4"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-slate-100 shadow-inner">
                  <Image
                    src={t.imageSrc}
                    alt={`${t.name}, ${t.role} at ${t.company} - Bespoke Ethos client testimonial`}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 48px, 48px"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{t.name}</h3>
                  <p className="text-xs text-slate-500 font-medium">{t.role}, {t.company}</p>
                </div>
              </div>
              
              <blockquote className="text-sm text-slate-700 leading-relaxed font-medium">
                &quot;{t.quote}&quot;
              </blockquote>

              {t.link && (
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <Link href={t.link} className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 hover:text-orange-700 transition-colors">
                    Read Story
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
