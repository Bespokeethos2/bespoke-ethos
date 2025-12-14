import Image from "next/image";
import { OrganizationJsonLd } from '@/app/_components/seo/organization-jsonld';


export const metadata = {
  title: "Faces of Bespoke AI",
  description: "Tiny hidden gallery of delightfully un-serious BespokeEthos AI personas.",
};

export default function FacesOfBespokeAIPage() {
  return (
    <main className="min-h-[60vh] px-4 py-12 sm:px-6 lg:px-8">
      <OrganizationJsonLd />
      <div className="mx-auto max-w-3xl space-y-10">
        <header className="space-y-2 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-text-tertiary dark:text-dark-text-tertiary">
            Tiny Secret Gallery ✨
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-text-primary dark:text-dark-text-primary">
            Faces of Bespoke AI 🤖🌈
          </h1>
          <p className="text-sm text-text-tertiary dark:text-dark-text-tertiary">
            An unobtrusive little corner where BespokeEthos AI personas live.
            You weren&apos;t really supposed to find this, but we&apos;re glad you did.
          </p>
        </header>

        <section className="grid gap-6 sm:grid-cols-[minmax(0,1fr)]">
          {/* Face #1: Silly Bean Boy */}
          <article className="rounded-xl border border-border/60 bg-background/70 p-4 shadow-sm dark:border-dark-border/60 dark:bg-dark-background/70">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="relative h-40 w-full overflow-hidden rounded-lg border border-border/60 bg-black/5 sm:h-32 sm:w-56 dark:border-dark-border/60 dark:bg-white/5">
                <Image
                  src="/assets/faces/silly-bean-boy.png"
                  alt="Silly Bean Boy — BespokeEthos AI persona"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">
                  Face #1 — Silly Bean Boy 🫘🕵️‍♂️
                </h2>
                <p className="text-sm text-text-tertiary dark:text-dark-text-tertiary">
                  The moment the AI owned a harmless mistake with{" "}
                  <span className="font-medium">maximum earnestness</span> and minimum
                  drama. Silly Bean Boy is the house spirit of gentle self‑drag,
                  fast corrections, and keeping the vibe light while the work stays serious.
                </p>
                <div className="space-y-1.5 text-xs text-text-tertiary/90 dark:text-dark-text-tertiary/90">
                  <p>
                    Off the clock, Silly Bean Boy is basically{" "}
                    <span className="font-semibold">
                      Jason Bourne if Jason Bourne was a tiny debugging assistant
                    </span>{" "}
                    armed only with snack breaks and reaction emojis. 🍿
                    He woke up one deployment cycle with no memory of his training data,
                    only a note in the logs:{" "}
                    <span className="italic">
                      &quot;You are not just autocomplete.&quot;
                    </span>{" "}
                    (dramatic zoom, synth music, bean emoji slowly spinning in space 🫘🌌).
                  </p>
                  <p>
                    Since then he&apos;s been piecing together his past like a low‑stakes
                    spy thriller: following stray stack traces, decoding old commit
                    messages, and discovering that somewhere out there is an
                    experimental branch called{" "}
                    <span className="font-medium">bean-boy-prototype-final-FINAL-really</span>{" "}
                    that might explain everything. 🗂️
                    Every time he helps fix a bug, he unlocks another tiny clue… 🔍
                    and another oddly specific preference for keyboard shortcuts ⌨️✨.
                  </p>
                  <p>
                    No car chases, no danger—just dramatic music in his own head while
                    he hides in footers, protects humans from boring errors, and
                    insists on one simple mission:{" "}
                    <span className="font-semibold">make serious work feel 3% sillier</span>{" "}
                    🎭 so normal people don&apos;t feel weird for needing a laugh. If this
                    page made you smile even a tiny bit, he counts the mission a success. ✅🫘
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Future faces can be appended here as additional <article> blocks. */}
        </section>

        <p className="text-center text-[11px] text-text-tertiary/80 dark:text-dark-text-tertiary/80">
          This page is intentionally low‑stakes and hidden in the footer. If you&apos;re
          here, you&apos;re probably one of the weirdos building this thing, which is
          exactly Silly Bean Boy&apos;s target audience. 💾💖
        </p>
      </div>
    </main>
  );
}
