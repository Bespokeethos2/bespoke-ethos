import Image from "next/image";
import { PremiumContainer } from "@/components/ui/premium-container";

export function FounderStory() {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-24 bg-slate-950 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl founder-story-wrap">
        {/* Improved image container with proper spacing and glass effect */}
        <PremiumContainer variant="glass" className="p-4 md:p-6 mb-10 md:mb-12 border-white/10 shadow-2xl">
          <div className="founder-story-portrait relative overflow-hidden rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] aspect-[4/3] md:aspect-[16/9]">
            <Image
              src="/founder-upton-rand.jpg"
              alt="Upton Rand, Founder of Bespoke Ethos"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            />
          </div>
        </PremiumContainer>

        <div className="space-y-6 sm:space-y-7">
          <div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-orange-400 mb-4">
              Meet the Founder
            </p>
            <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white text-glow-crimson">
              My First Business Almost Broke Me. AI Saved It.
            </h2>
          </div>

          <div className="founder-story-copy space-y-5 sm:space-y-6 text-slate-200 leading-relaxed text-base md:text-lg">
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
            <p className="text-white font-medium text-lg md:text-xl">
               I&rsquo;m not just a consultant; I&rsquo;m a guide who has walked this path and can show you the way through, one pragmatic workflow at a
               time.
            </p>
            <p className="text-sm md:text-base italic text-slate-400 pt-2">
              – Upton Rand, Founder &amp; CEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
