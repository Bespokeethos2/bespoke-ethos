import Image from "next/image";

export function FounderStory() {
  return (
    <section className="bg-surface-secondary dark:bg-dark-surface-secondary py-16 md:py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Image Column */}
          <div className="founder-story-portrait relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/10 bg-slate-900/50 p-2">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="/founder-upton-rand.jpg"
                alt="Upton Rand, Founder of Bespoke Ethos"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-6 sm:space-y-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-orange-500 mb-3">
                Meet the Founder
              </p>
              <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-slate-900 dark:text-white">
                My First Business Almost Broke Me. AI Saved It.
              </h2>
            </div>

            <div className="founder-story-copy space-y-4 sm:space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
              <p>
                Six months into my first business—a publishing house I built from scratch—I was drowning. I was a creator and a storyteller, not
                a logistics expert or a CRM guru. Every minute felt like an hour.
              </p>
              <p>
                 That&apos;s when I turned to my five years of experience as a human-in-the-loop AI trainer, working with foundational models. I taught an AI to be my second brain, automating the overwhelming tasks
                 that were holding me back. It saved my business.
              </p>
              <p>
                I founded <strong className="text-slate-900 dark:text-white font-semibold">Bespoke Ethos</strong> for one reason: to bring that same relief
                 to fellow entrepreneurs and creators. With NGLCC certification and approval from Catalant enterprise consulting, I&apos;ve proven that the power of AI shouldn&apos;t be reserved for Fortune 500 companies. It belongs in the hands
                of small businesses, solo founders, and the teams who actually talk to customers every day.
              </p>
              <p className="text-slate-900 dark:text-white font-semibold">
                 I&rsquo;m not just a consultant; I&rsquo;m a guide who has walked this path and can show you the way through, one pragmatic workflow at a
                 time.
              </p>
              <p className="text-xs md:text-sm italic text-slate-600 dark:text-slate-400 border-l-2 border-orange-500 pl-4">
                – Upton Rand, Founder &amp; CEO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
