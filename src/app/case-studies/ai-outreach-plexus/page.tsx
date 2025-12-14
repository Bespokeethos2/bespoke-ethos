import type { Metadata } from "next";
import { Breadcrumbs } from "@/app/_components/seo/breadcrumbs";
import { FounderBadge } from "@/app/_components/founder-badge";
import { ButtonLink } from "@/common/button";
import { Heading } from "@/common/heading";
import { Section } from "@/common/layout";
import { OrganizationJsonLd } from '@/app/_components/seo/organization-jsonld';


export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Case Study: Soul-Aligned Outreach at Scale | Bespoke Ethos",
  description:
    "How Bespoke Ethos used Claude Opus 4.5 and GPT-5.1 Professional to send 328+ human-first AI outreach emails to Plexus members with soul-aligned copy.",
  alternates: { canonical: "/case-studies/ai-outreach-plexus" },
};

export default function AIOutreachPlexusCaseStudy() {
  return (
    <main className="be-page-slate">
      <OrganizationJsonLd />
      <Section className="gap-5 -mt-14 md:gap-6 md:-mt-4">
        <div className="be-section-card space-y-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Case Studies", href: "/case-studies" },
              { name: "Soul-Aligned Outreach at Scale" },
            ]}
          />

          {/* Hero Section */}
          <div className="space-y-6">
            <Heading
              subtitle="How Bespoke Ethos Used Claude Opus 4.5 to Connect with 328+ Plexus-Aligned Small Businesses"
              align="left"
            >
              <h1 className="font-hero-accent">Case Study: Soul-Aligned Outreach at Scale</h1>
            </Heading>
            <p className="text-sm text-text-tertiary dark:text-dark-text-tertiary">
              Bespoke Ethos | Upton Rand (Founder)
            </p>

            {/* Hero Image Placeholder */}
            <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface-secondary to-surface-tertiary dark:border-dark-border dark:from-dark-surface-secondary dark:to-dark-surface-tertiary">
              <div className="flex h-full items-center justify-center">
                <p className="text-sm text-text-tertiary dark:text-dark-text-tertiary">
                  [Hero Illustration: Small studio with AI megaphone → connection lines]
                </p>
              </div>
            </div>
          </div>

          {/* Stats Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl border border-border bg-surface-secondary/80 p-6 dark:border-dark-border dark:bg-dark-surface-secondary/80">
            <div className="text-center">
              <p className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">328+</p>
              <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary">Personalized Emails</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">5</p>
              <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary">Refinement Passes</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">2</p>
              <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary">Premium AI Models</p>
            </div>
          </div>

          {/* The Challenge Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">🎯 The Challenge</h2>
            <p className="text-text-secondary dark:text-dark-text-secondary">
              Bespoke Ethos set out to build 328+ highly personalized outreach emails for Plexus member businesses. These
              weren't transactional asks. They were invitations to real partnership — grounded in shared values, respect,
              and soul-aligned tech.
            </p>
            <p className="text-text-secondary dark:text-dark-text-secondary">
              But traditional AI outreach falls flat. Even advanced tools often write like they're optimizing for approval,
              not connection. We didn't want pitch-perfect. We wanted real.
            </p>
          </div>

          {/* First Attempt Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
              💡 Our First Attempt — GPT-5.1 Pro on High Inference
            </h2>
            <p className="text-text-secondary dark:text-dark-text-secondary">
              We started strong — using GPT-5.1 Professional Edition with Codex for deep research and message generation.
              High inference mode gave us maximum reasoning power, nuance, and accuracy.
            </p>
            <p className="text-text-secondary dark:text-dark-text-secondary">
              But even then… the emails read like good mimicry. They were clear, accurate, well-structured — and somehow
              still sounded like a polite stranger trying too hard. They lacked friction. They lacked the voice. They lacked
              Upton.
            </p>
            <p className="text-text-secondary dark:text-dark-text-secondary">So we brought in a specialist.</p>

            {/* GPT-5.1 Model Card */}
            <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50/50 p-6 dark:border-orange-900/50 dark:bg-orange-950/30">
              <h3 className="mb-4 text-lg font-semibold text-text-primary dark:text-dark-text-primary">
                GPT-5.1 Pro (High Inference) at a glance
              </h3>
              <p className="mb-4 text-text-secondary dark:text-dark-text-secondary">
                GPT-5.1 Professional Edition in high inference mode is a powerful general-purpose AI model.
              </p>
              <ul className="space-y-2 text-text-secondary dark:text-dark-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-text-tertiary dark:text-dark-text-tertiary">•</span>
                  <span>Understanding complex questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-text-tertiary dark:text-dark-text-tertiary">•</span>
                  <span>Writing clear, structured text</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-text-tertiary dark:text-dark-text-tertiary">•</span>
                  <span>Handling detailed reasoning tasks</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-text-tertiary dark:text-dark-text-tertiary">
                We used it to generate our first batch of outreach emails. The result was technically solid, but the tone
                still felt too generic — like a polite stranger who had read our notes but hadn't quite lived our story.
              </p>
            </div>
          </div>

          {/* Claude Opus Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
              🤖 Enter Claude Opus 4.5 (Anthropic)
            </h2>
            <p className="text-text-secondary dark:text-dark-text-secondary">
              Claude Opus 4.5 is the latest flagship model from Anthropic — designed not just for intelligence, but for
              empathy, ethical nuance, and human tone fidelity. It's also wildly expensive — often 10 to 50x the cost per
              token compared to standard models.
            </p>
            <p className="text-text-secondary dark:text-dark-text-secondary">
              We deployed Opus specifically because:
            </p>
            <ul className="space-y-2 text-text-secondary dark:text-dark-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-text-tertiary dark:text-dark-text-tertiary">•</span>
                <span>
                  It could read and hold over 100,000 words of Bespoke Ethos voice, brand philosophy, opinions, and tone
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-tertiary dark:text-dark-text-tertiary">•</span>
                <span>It could understand deep client context from bios, product pages, values, and testimonials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-tertiary dark:text-dark-text-tertiary">•</span>
                <span>
                  It could generate messages that didn't just sound "personalized" — they sounded like Upton on a good
                  day: clear, warm, funny, and aligned
                </span>
              </li>
            </ul>
            <p className="mt-4 text-text-secondary dark:text-dark-text-secondary">
              Where GPT-5.1 wrote smart copy, Claude wrote soul-aware copy.
            </p>

            {/* Claude Opus Model Card */}
            <div className="mt-6 rounded-2xl border border-border bg-surface-secondary/80 p-6 dark:border-dark-border dark:bg-dark-surface-secondary/80">
              <h3 className="mb-4 text-lg font-semibold text-text-primary dark:text-dark-text-primary">
                Claude Opus 4.5 at a glance
              </h3>
              <p className="mb-4 text-text-secondary dark:text-dark-text-secondary">
                Claude Opus 4.5 is Anthropic's flagship "deep-thinking" AI model.
              </p>
              <ul className="space-y-2 text-text-secondary dark:text-dark-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-text-tertiary dark:text-dark-text-tertiary">•</span>
                  <span>Read huge amounts of text at once</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-text-tertiary dark:text-dark-text-tertiary">•</span>
                  <span>Respond with careful, context-aware answers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-text-tertiary dark:text-dark-text-tertiary">•</span>
                  <span>Sound more like a thoughtful collaborator than a script generator</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-text-tertiary dark:text-dark-text-tertiary">
                We chose Opus for this project because we weren't just trying to write quickly — we were trying to write
                in a way that sounded like us and respected the people we were emailing.
              </p>
            </div>

            {/* Who is Claude Opus Explainer */}
            <div className="mt-6 rounded-2xl border border-border bg-surface-secondary/50 p-6 dark:border-dark-border dark:bg-dark-surface-secondary/50">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-text-primary dark:text-dark-text-primary">
                <span>✨</span> Who (or what) is Claude Opus?
              </h3>
              <p className="text-text-secondary dark:text-dark-text-secondary">
                Claude Opus is Anthropic's most capable AI model — think of it as the "thoughtful collaborator" in the AI world. Unlike models optimized purely for speed or cost, Opus is built to understand nuance, ethics, and human context. It's slower and more expensive, but it's the only model we found that could genuinely sound like a person, not a machine pretending to be one.
              </p>
            </div>
          </div>

          {/* Model Comparison */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
              GPT-5.1 Pro vs Claude Opus 4.5: Why We Switched
            </h2>
            <div className="overflow-x-auto rounded-2xl border-2 border-orange-200 bg-white dark:border-orange-900/80 dark:bg-dark-surface-primary">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-secondary/80 dark:border-dark-border dark:bg-dark-surface-secondary/80">
                    <th className="px-6 py-4 text-left font-semibold text-text-primary dark:text-dark-text-primary">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-text-primary dark:text-dark-text-primary">
                      GPT-5.1 Professional (High Inference)
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-text-primary dark:text-dark-text-primary">
                      Claude Opus 4.5
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border dark:border-dark-border">
                    <td className="px-6 py-4 text-text-secondary dark:text-dark-text-secondary">Primary Strength</td>
                    <td className="px-6 py-4 text-text-secondary dark:text-dark-text-secondary">
                      Excellent general intelligence, structure, and clarity
                    </td>
                    <td className="px-6 py-4 text-text-secondary dark:text-dark-text-secondary">
                      Nuance, ethics, and tone fidelity
                    </td>
                  </tr>
                  <tr className="border-b border-border dark:border-dark-border">
                    <td className="px-6 py-4 text-text-secondary dark:text-dark-text-secondary">Context Handling</td>
                    <td className="px-6 py-4 text-text-secondary dark:text-dark-text-secondary">
                      Fast at producing clean first drafts
                    </td>
                    <td className="px-6 py-4 text-text-secondary dark:text-dark-text-secondary">
                      Handles large amounts of brand + client context
                    </td>
                  </tr>
                  <tr className="border-b border-border dark:border-dark-border">
                    <td className="px-6 py-4 text-text-secondary dark:text-dark-text-secondary">Email Tone</td>
                    <td className="px-6 py-4 text-text-secondary dark:text-dark-text-secondary">
                      Felt "correct" but a bit generic
                    </td>
                    <td className="px-6 py-4 text-text-secondary dark:text-dark-text-secondary">
                      Felt closer to "Upton on a good day"
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-text-primary dark:text-dark-text-primary">Conclusion</td>
                    <td className="px-6 py-4 font-semibold text-text-primary dark:text-dark-text-primary">Smart Copy</td>
                    <td className="px-6 py-4 font-semibold text-text-primary dark:text-dark-text-primary">
                      Soul-Aligned Copy
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 rounded-lg bg-orange-50/80 p-4 text-sm text-orange-900/80 dark:bg-orange-950/50 dark:text-orange-200/80">
              <strong>Bottom Line:</strong> GPT-5.1 Pro gave us smart copy. Claude Opus 4.5 gave us soul-aligned copy.
              That's why we moved our later passes entirely into Opus.
            </p>

            {/* Comparison Visual Placeholder */}
            <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-border bg-linear-to-br from-surface-secondary to-surface-tertiary dark:border-dark-border dark:from-dark-surface-secondary dark:to-dark-surface-tertiary">
              <div className="flex h-full items-center justify-center">
                <p className="text-sm text-text-tertiary dark:text-dark-text-tertiary">
                  [Comparison Visual: GPT sharp/geometric vs Claude soft/organic]
                </p>
              </div>
            </div>
          </div>

          {/* Our Outreach System */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">🛠 Our Outreach System</h2>
            <p className="text-text-secondary dark:text-dark-text-secondary">
              We didn't just generate emails. We built a multi-pass system:
            </p>
            <ol className="space-y-3 text-text-secondary dark:text-dark-text-secondary">
              <li className="flex gap-3">
                <span className="font-semibold text-text-primary dark:text-dark-text-primary">1.</span>
                <span>
                  <strong>Codex Research:</strong> Codex scraped 700–800 characters of usable tone and pain point data
                  per recipient
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-text-primary dark:text-dark-text-primary">2.</span>
                <span>
                  <strong>First Draft:</strong> GPT-5.1 Pro generated first drafts — rejected for being too smooth, too
                  vague
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-text-primary dark:text-dark-text-primary">3.</span>
                <span>
                  <strong>Emotional Rewrite:</strong> Claude Opus 4.5 rewrote them with emotional intelligence and
                  ethical tone matching
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-text-primary dark:text-dark-text-primary">4.</span>
                <span>
                  <strong>AI Pullback:</strong> Second Opus pass: "Pull back the AI" — make it less polished, more real
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-text-primary dark:text-dark-text-primary">5.</span>
                <span>
                  <strong>Final Polish:</strong> Messages were refined to sound like Upton on a good day — confident,
                  caring, dry, direct
                </span>
              </li>
            </ol>

            {/* Multi-pass Refinement Visual Placeholder */}
            <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface-secondary to-surface-tertiary dark:border-dark-border dark:from-dark-surface-secondary dark:to-dark-surface-tertiary">
              <div className="flex h-full items-center justify-center">
                <p className="text-sm text-text-tertiary dark:text-dark-text-tertiary">
                  [Multi-pass Visual: 5 refinement steps with improving clarity]
                </p>
              </div>
            </div>
          </div>

          {/* Infrastructure Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">📊 The Infrastructure</h2>
            <p className="text-text-secondary dark:text-dark-text-secondary">
              Under the hood, this wasn't just a writing exercise. It was a system:
            </p>
            <ul className="space-y-2 text-text-secondary dark:text-dark-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-text-tertiary dark:text-dark-text-tertiary">•</span>
                <span>
                  <strong>Intention Tracking:</strong> An intention spreadsheet tracked research inputs, tone choices,
                  CTA language, discount mentions, and more
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-tertiary dark:text-dark-text-tertiary">•</span>
                <span>
                  <strong>Version Control:</strong> Final drafts were version-controlled and linked to original source
                  insights
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-tertiary dark:text-dark-text-tertiary">•</span>
                <span>
                  <strong>CRM Mapping:</strong> All replies will be mapped into CRM, allowing full traceability: "what
                  we wrote, why we wrote it, and what came back"
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-tertiary dark:text-dark-text-tertiary">•</span>
                <span>
                  <strong>Send Optimization:</strong> Send windows were time-optimized: 30 messages per day, Tuesday and
                  Wednesday between 11am and 12pm — statistically strong response windows for cold outreach
                </span>
              </li>
            </ul>

            {/* Infrastructure Visual Placeholder */}
            <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface-secondary to-surface-tertiary dark:border-dark-border dark:from-dark-surface-secondary dark:to-dark-surface-tertiary">
              <div className="flex h-full items-center justify-center">
                <p className="text-sm text-text-tertiary dark:text-dark-text-tertiary">
                  [Infrastructure Visual: Research → AI → Refinement → Output flow]
                </p>
              </div>
            </div>
          </div>

          {/* What We Learned */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">🧠 What We Learned</h2>
            <p className="text-text-secondary dark:text-dark-text-secondary">
              A few big lessons surfaced:
            </p>
            <ul className="space-y-2 text-text-secondary dark:text-dark-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-text-tertiary dark:text-dark-text-tertiary">•</span>
                <span>
                  <strong>Model intelligence isn't enough</strong> — emotional alignment takes more than logic
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-tertiary dark:text-dark-text-tertiary">•</span>
                <span>
                  <strong>Claude Opus is expensive for a reason</strong> — it was the only model that made our voice
                  feel lived-in
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-tertiary dark:text-dark-text-tertiary">•</span>
                <span>
                  <strong>The fifth draft is where the truth lives</strong> — voice takes iteration
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-tertiary dark:text-dark-text-tertiary">•</span>
                <span>
                  <strong>High-touch AI still needs intention</strong> — context is what made this scale feel personal
                </span>
              </li>
            </ul>
          </div>

          {/* Where We're Going */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">🚀 Where We're Going</h2>
            <p className="text-text-secondary dark:text-dark-text-secondary">
              This campaign created more than messages. It built a replicable emotional outreach engine for value-aligned
              partnerships — across Plexus, LGBTQ+ businesses, and beyond.
            </p>
            <p className="text-text-secondary dark:text-dark-text-secondary">
              We're not sending emails.
            </p>
            <p className="text-text-secondary dark:text-dark-text-secondary">
              We're building bridges.
            </p>
            <p className="text-text-secondary dark:text-dark-text-secondary">
              And we're doing it with models that can hold a human voice — not just fake it.
            </p>

            {/* Closing Visual Placeholder */}
            <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface-secondary to-surface-tertiary dark:border-dark-border dark:from-dark-surface-secondary dark:to-dark-surface-tertiary">
              <div className="flex h-full items-center justify-center">
                <p className="text-sm text-text-tertiary dark:text-dark-text-tertiary">
                  [Closing Visual: Bridge made of message bubbles connecting two sides]
                </p>
              </div>
            </div>
          </div>

          {/* AI 101 Definitions */}
          <div className="space-y-4 rounded-2xl border border-border bg-surface-secondary/80 p-6 dark:border-dark-border dark:bg-dark-surface-secondary/80">
            <h2 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">AI 101: Key Terms</h2>
            <p className="text-sm text-text-tertiary dark:text-dark-text-tertiary">
              Click any term below to learn more about the tools and concepts we used.
            </p>
            <div className="space-y-4 pt-2">
              <div>
                <h3 className="font-semibold text-text-primary dark:text-dark-text-primary">
                  GPT-5.1 Professional Edition
                </h3>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                  A premium version of GPT-5.1 with more power and control. Think of it as the "pro" model of an AI
                  assistant that can reason more deeply and handle harder tasks.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary dark:text-dark-text-primary">High inference mode</h3>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                  A setting that gives the AI more "brainpower" per request. It takes a bit longer and costs more, but
                  it can understand context and nuance better.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary dark:text-dark-text-primary">Codex</h3>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                  An AI tool that's very good at working with code and structured tasks. Here, we used it to help scrape
                  and organize recipient research data.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary dark:text-dark-text-primary">Claude Opus 4.5</h3>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                  Anthropic's most advanced AI model in the Claude family. It's designed to handle very long documents
                  and respond in a more thoughtful, human-sounding way.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary dark:text-dark-text-primary">CRM</h3>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                  Customer Relationship Management software. It's a system for tracking people, conversations, deals, and
                  what you've sent to whom.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary dark:text-dark-text-primary">Multi-pass system</h3>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                  Instead of writing once and sending, we ran the emails through several rounds of refinement. Each
                  "pass" improved tone, clarity, and alignment with our voice.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary dark:text-dark-text-primary">Outreach engine</h3>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                  A repeatable system for sending thoughtful messages at scale. Not just a single campaign, but a
                  structure we can reuse and adapt.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ButtonLink href="/contact" intent="primary">
              Talk about a similar project
            </ButtonLink>
            <ButtonLink href="/case-studies" intent="secondary">
              Back to Case Studies
            </ButtonLink>
          </div>

          <FounderBadge />
        </div>
      </Section>
    </main>
  );
}
