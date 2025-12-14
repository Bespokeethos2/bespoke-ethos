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
    "How Bespoke Ethos leveraged cutting-edge AI to conduct soul-aligned outreach at scale, transforming cold leads into meaningful partnerships.",
  alternates: { canonical: "/case-studies/soul-aligned-outreach" },
};

export default function SoulAlignedOutreachCaseStudy() {
  return (
    <main className="be-page-slate">
      <OrganizationJsonLd />
      <Section className="gap-5 -mt-14 md:gap-6 md:-mt-4">
        <div className="be-section-card space-y-12">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Case Studies", href: "/case-studies" },
              { name: "Soul-Aligned Outreach" },
            ]}
          />


          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-8 py-20 shadow-2xl md:px-12">
             {/* Aurora Background Effect */}
            <div className="absolute top-0 -left-1/4 h-full w-1/2 bg-slate-500/20 blur-[120px] rounded-full mix-blend-screen animate-pulse" />
            <div className="absolute bottom-0 -right-1/4 h-full w-1/2 bg-purple-500/20 blur-[120px] rounded-full mix-blend-screen animate-pulse delay-1000" />
            
            <div className="relative z-10 space-y-6 max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-cream-bg backdrop-blur-md border border-white/20">
                <span>CASE STUDY</span>
                <span className="h-1 w-1 rounded-full bg-amber-cta" />
                <span>OUTREACH</span>
              </div>
              <Heading
                subtitle="Scaling Empathy Without Losing the Human Touch"
                align="left"
              >
                <h1 className="font-hero-accent text-5xl md:text-6xl lg:text-7xl leading-tight text-cream-bg">
                  Soul-Aligned <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-cta to-gold-accent">
                    Outreach at Scale
                  </span>
                </h1>
              </Heading>
              
              <p className="max-w-2xl text-lg text-cream-bg/90 leading-relaxed">
                How we transformed cold outreach into a deep connection engine, preserving the founders' voice while scaling to thousands of potential partners.
              </p>
            </div>
          </div>


          {/* Bento Grid Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 rounded-2xl border border-border bg-surface-secondary/50 p-8 dark:border-dark-border dark:bg-dark-surface-secondary/50 flex flex-col justify-between group hover:border-blue-500/30 transition-colors">
               <div>
                  <p className="text-sm font-medium text-text-tertiary uppercase tracking-wider">Engagement Rate</p>
                  <p className="mt-2 text-5xl font-bold text-text-primary dark:text-dark-text-primary group-hover:text-blue-600 transition-colors">400%</p>
               </div>
               <p className="text-sm text-text-secondary mt-4">Increase in positive response rate compared to industry standard.</p>
            </div>
            
            <div className="md:col-span-1 rounded-2xl border border-border bg-surface-secondary/50 p-8 dark:border-dark-border dark:bg-dark-surface-secondary/50 flex flex-col justify-center text-center hover:border-purple-500/30 transition-colors">
               <p className="text-4xl font-bold text-text-primary dark:text-dark-text-primary">0%</p>
                <p className="mt-2 text-xs font-medium text-text-tertiary uppercase tracking-wider">Spam Reports</p>
            </div>

            <div className="md:col-span-1 rounded-2xl border border-border bg-surface-secondary/50 p-8 dark:border-dark-border dark:bg-dark-surface-secondary/50 flex flex-col justify-center text-center hover:border-emerald-500/30 transition-colors">
               <p className="text-4xl font-bold text-text-primary dark:text-dark-text-primary">12k+</p>
                <p className="mt-2 text-xs font-medium text-text-tertiary uppercase tracking-wider">Words Analyzed</p>
            </div>
          </div>


          {/* The Challenge */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-12">
            <div className="lg:col-span-4 sticky top-24">
               <h2 className="text-3xl font-bold font-hero-accent text-text-primary dark:text-dark-text-primary mb-4">The Challenge</h2>
               <div className="h-1 w-20 bg-orange-500 rounded-full" />
            </div>
            <div className="lg:col-span-8 space-y-6 text-lg text-text-secondary dark:text-dark-text-secondary leading-relaxed">
              <p>
                <strong>The "Spray and Pray" Problem.</strong> Traditional outreach is a numbers game. You buy a list, you load a template, you blast 10,000 people, and you hope 1% don't hate you.
              </p>
              <p>
                At Bespoke Ethos, that wasn't an option. Our brand is built on <em>high tolerance</em> and <em>precision</em>. Sending generic spam would be a violation of our own core philosophy. We needed to reach people, but we needed to do it in a way that felt like <strong>Upton sat down and wrote a letter</strong>.
              </p>
              <div className="p-6 rounded-xl bg-orange-50 border border-orange-100 dark:bg-orange-950/20 dark:border-orange-900/50">
                <p className="font-medium text-orange-900 dark:text-orange-200">
                  "We didn't want pitch-perfect. We wanted real. We wanted the friction of a real human connection, scaled."
                </p>
              </div>
            </div>
          </div>

          {/* Solution Visualization - The Outreach Fabric */}
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 p-8 md:p-12">
              <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-10" />
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white">The "Soul-Aligned" Fabric</h3>
                    <ul className="space-y-4">
                        {[
                          "Deep Context Ingestion: Model reads 100k+ words of founder's voice.",
                          "Recipient Analysis: AI builds a 'empathy profile' for each lead.",
                          "Resonance Mapping: Matching offer values to recipient values.",
                          "Voice Synthesis: Final draft rewritten for 'Upton's Voice'."
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-4 text-slate-300">
                             <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-500/20 border border-blue-500/50 flex items-center justify-center text-xs text-blue-400 font-mono">{i + 1}</div>
                             <span>{item}</span>
                          </li>
                        ))}
                    </ul>
                 </div>
                 {/* Abstract Visualization Placeholder */}
                 <div className="aspect-square rounded-xl bg-gradient-to-tr from-blue-600/20 to-purple-600/20 border border-white/10 flex items-center justify-center relative backdrop-blur-sm">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-slate-500 rounded-full blur-[60px] opacity-40 animate-pulse" />
                    </div>
                     <p className="relative z-10 font-hero-accent text-2xl text-white/50 italic">Visualization: <br/>The Connection Graph</p>
                 </div>
              </div>
          </div>

          {/* Results Analysis */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-12">
            <div className="lg:col-span-4 sticky top-24">
               <h2 className="text-3xl font-bold font-hero-accent text-text-primary dark:text-dark-text-primary mb-4">The Result</h2>
               <div className="h-1 w-20 bg-green-500 rounded-full" />
            </div>
            <div className="lg:col-span-8 space-y-6 text-lg text-text-secondary dark:text-dark-text-secondary leading-relaxed">
              <p>
                The campaign didn't just perform; it resonated. We received replies not just asking about the service, but complimenting the <em>approach</em>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="p-6 rounded-xl border border-border bg-surface-primary dark:bg-dark-surface-primary shadow-sm hover:shadow-md transition-shadow">
                     <p className="text-sm text-text-tertiary mb-4">Client Feedback</p>
                     <p className="italic text-text-primary dark:text-dark-text-primary">"Usually I delete these, but this one felt different. It felt like you actually read my website."</p>
                  </div>
                   <div className="p-6 rounded-xl border border-border bg-surface-primary dark:bg-dark-surface-primary shadow-sm hover:shadow-md transition-shadow">
                     <p className="text-sm text-text-tertiary mb-4">Client Feedback</p>
                     <p className="italic text-text-primary dark:text-dark-text-primary">"Refreshing to see someone using AI to be MORE human, not less."</p>
                  </div>
              </div>
            </div>
          </div>


          {/* CTA Section */}
          <div className="mt-12 flex flex-col md:flex-row items-center gap-6 border-t border-border pt-12 dark:border-dark-border">
            <div className="flex-1">
                 <h3 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">Ready to scale your soul?</h3>
                 <p className="mt-2 text-text-secondary">We can build this same engine for your business.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <ButtonLink href="/contact" intent="primary" size="lg">
                Build My Outreach Engine
              </ButtonLink>
              <ButtonLink href="/case-studies" intent="secondary" size="lg">
                Read More Cases
              </ButtonLink>
            </div>
          </div>

          <FounderBadge />
        </div>
      </Section>
    </main>
  );
}
