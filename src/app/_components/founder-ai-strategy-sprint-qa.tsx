export function FounderAiStrategySprintQA() {
  const items: { q: string; a: string }[] = [
    {
      q: "Cadence's price tag is $997 and $149 per month. So what do you get with that?",
      a: "First, Cadence comes with automation repair for life. So if Cadence goes down, we're there getting it back online—getting your brand voice back. You're not just buying software; you're buying a guarantee that it works.",
    },
    {
      q: "Can Cadence do anything else besides being a chatbot?",
      a: "Cadence can do so much more. Cadence can be plugged into back-end scheduling software, email reminders, or even your sales system. The possibilities are really endless. It's not just a chat bubble; it's an orchestration layer for your business.",
    },
    {
      q: "We don't really have strong computers. Is that a problem?",
      a: "No, not at all. Cadence runs in the cloud, meaning that he's not reliant on your computer speed or your customers'. He's just there, fast on his feet every day.",
    },
    {
      q: "Who is Cadence actually for?",
      a: "Cadence is for founders who care about voice and relationship: owner-led brands, story-heavy products, and teams who want fewer repetitive questions without sending visitors into a dead-end loop. If you just want a cheap FAQ bot to make your site look \"AI-enabled,\" you don't need me and you don't need Cadence.",
    },
    {
      q: "How do I know it won’t embarrass my brand?",
      a: "We start small and we measure. You’ll see transcripts, escalation rules, and what Cadence is and isn’t allowed to promise before anything goes live. During the pilot we tune it together and keep you in the approval loop. If something ever feels off, we change it. You stay in control—that’s the whole point.",
    },
  ];

  return (
    <section
      aria-labelledby="founder-ai-strategy-sprint-qa-heading"
      className="mt-10 space-y-4 rounded-2xl border border-border bg-surface-secondary/70 p-5 text-sm text-text-secondary shadow-sm dark:border-dark-border dark:bg-dark-surface-secondary/70 dark:text-dark-text-secondary"
    >
      <div className="space-y-1">
        <h2
          id="founder-ai-strategy-sprint-qa-heading"
          className="text-base font-semibold text-text-primary dark:text-dark-text-primary"
        >
          A few questions I’d ask about a $997 chatbot
        </h2>
        <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary">
          Answered by Upton, founder of Bespoke Ethos.
        </p>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <article
            key={item.q}
            className="rounded-xl border border-border/70 bg-surface-primary/60 p-3 dark:border-dark-border/70 dark:bg-dark-surface-primary/60"
          >
            <h3 className="text-sm font-semibold text-text-primary dark:text-dark-text-primary">{item.q}</h3>
            <p className="mt-1 text-xs leading-relaxed text-text-secondary dark:text-dark-text-secondary">{item.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
