import Image from "next/image";

export function FounderStory() {
  return (
    <section className="bg-slate-950 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 w-[400px] h-[400px]">
              <Image
                src="/founder-upton-rand.jpg"
                alt="Upton Rand, Founder of Bespoke Ethos"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-orange-500/10 blur-3xl -z-10 rounded-full" />
          </div>

          {/* Content Column */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-orange-400 mb-3">
                Meet the Founder
              </p>
              <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                My First Business Almost Broke Me. AI Saved It.
              </h2>
            </div>

            <div className="space-y-4 text-slate-200 leading-relaxed text-sm sm:text-base">
              <p>
                Six months into my first business—a publishing house I built from scratch—I was drowning. I was a creator and a storyteller, not
                a logistics expert or a CRM guru. Every minute felt like an hour.
              </p>
              <p>
                That&apos;s when I turned to my five years of experience as a human-in-the-loop AI trainer, working with foundational models. I taught an AI to be my second brain, automating the overwhelming tasks
                that were holding me back. It saved my business.
              </p>
              <p>
                I founded <strong className="text-white font-semibold">Bespoke Ethos</strong> for one reason: to bring that same relief
                to fellow entrepreneurs and creators. With NGLCC certification and approval from Catalant enterprise consulting, I&apos;ve proven that the power of AI shouldn&apos;t be reserved for Fortune 500 companies. It belongs in the hands
                of small businesses, solo founders, and the teams who actually talk to customers every day.
              </p>
              <p className="text-white font-semibold text-base">
                I&rsquo;m not just a consultant; I&rsquo;m a guide who has walked this path and can show you the way through, one pragmatic workflow at a
                time.
              </p>
              <p className="text-sm italic text-slate-400 pt-2">
                – Upton Rand, Founder &amp; CEO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
