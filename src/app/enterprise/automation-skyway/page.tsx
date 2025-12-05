import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ENTERPRISE_CONTACT } from "../data";
import { VogueCard } from "@/components/vogue-card";
import { ButtonLink } from "@/common/button";
import { Section } from "@/common/layout";
import { IconCheck, IconShieldCheck, IconServer, IconGitPullRequest } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Automation Skyway | Enterprise Workflow Automation Setup",
  description:
    "Architected workflow automation for regulated teams. We build self-healing pipelines that pass infosec, live in your cloud, and maintain full audit trails.",
  alternates: { canonical: "/enterprise/automation-skyway" },
};

export default function AutomationFabricPage() {
  return (
    <main className="be-page-slate">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-orange-600 mb-6">
              Enterprise Suite
            </p>
            <h1 className="font-hero-accent text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Automation Skyway
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Workflow Automation Setup™ for regulated teams. We architect self-healing pipelines that pass infosec, live in your cloud, and keep every approval + audit trail your compliance lead obsesses over.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ButtonLink intent="primary" size="lg" href={`mailto:${ENTERPRISE_CONTACT}?subject=Automation%20Fabric%20Inquiry`}>
                Request Architecture Brief
              </ButtonLink>
              <ButtonLink intent="secondary" size="lg" href="/contact?service=enterprise">
                Book Engineering Review
              </ButtonLink>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="container mx-auto px-4 mt-16">
          <div className="relative aspect-[16/9] w-full max-w-5xl mx-auto overflow-hidden rounded-2xl border border-slate-200 shadow-2xl bg-slate-50">
            <Image
              src="/assets/generated/hero-automation-skyway-desktop.webp"
              alt="Automation Skyway Control Center"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 2. The "Chaos vs Order" Problem */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 font-hero-accent">
              Stop building "Shadow IT" with Zapier.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Your team is building automations that run your business, but they live in personal accounts, break silently, and have no version control. When the creator leaves, the process dies.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded-full bg-red-100 text-red-600">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <span className="text-slate-700"><strong>No Audit Trail:</strong> Who changed that logic? When? Why?</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded-full bg-red-100 text-red-600">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <span className="text-slate-700"><strong>Silent Failures:</strong> Leads drop into a black hole because an API key expired.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded-full bg-red-100 text-red-600">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <span className="text-slate-700"><strong>Vendor Lock-in:</strong> Logic trapped in a proprietary SaaS box.</span>
              </li>
            </ul>
          </div>
          <div className="relative">
             <VogueCard
                imageSrc="/assets/logos/flowstack.png"
                imageAlt="Automation Fabric Card"
                title="Automation Skyway"
                tagline="Automations that work"
                description="We replace fragile scripts with robust, monitored infrastructure."
                className="[&_h3]:!text-white [&_p]:!text-slate-200"
              />
          </div>
        </div>
      </Section>

      {/* 3. Core Capabilities */}
      <Section className="bg-slate-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-hero-accent mb-4">
            Infrastructure, not just "scripts".
          </h2>
          <p className="text-lg text-slate-600">
            We treat automation as production software. That means git-backed, tested, and monitored.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <CapabilityCard 
            icon={<IconShieldCheck className="w-8 h-8 text-emerald-600" />}
            title="Secure by Design"
            description="Role-based access control (RBAC), encrypted secrets, and detailed logs for every single run."
          />
          <CapabilityCard 
            icon={<IconServer className="w-8 h-8 text-blue-600" />}
            title="Your Cloud, Your Code"
            description="We deploy into your Azure, AWS, or GCP account. You own the IP and the infrastructure."
          />
          <CapabilityCard 
            icon={<IconGitPullRequest className="w-8 h-8 text-purple-600" />}
            title="Git-Backed Workflow"
            description="Every change is a pull request. Rollback instantly if something breaks. Test in staging first."
          />
        </div>
      </Section>

      {/* 4. Deliverables & Outcomes */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">What we ship</h3>
            <div className="space-y-6">
              <DeliverableItem 
                title="Board-Ready Architecture"
                description="Professional, brand-safe diagrams of your infrastructure that you can reuse in pitch decks and board meetings."
              />
              <DeliverableItem 
                title="Production Implementation"
                description="Full deployment in your cloud account using Terraform. Includes runbooks, tests, and monitoring."
              />
              <DeliverableItem 
                title="Shadow Week & Training"
                description="We don't just hand over keys. We run a shadow week to train your team so they can own it."
              />
            </div>
          </div>
          <div className="bg-slate-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-orange-400">Outcomes</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 bg-orange-500/20 p-2 rounded-lg">
                  <IconCheck className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Self-Healing Pipelines</h4>
                  <p className="text-slate-300 text-sm mt-1">Automations that retry on transient failures and alert humans only when necessary.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-orange-500/20 p-2 rounded-lg">
                  <IconCheck className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Unified Control Room</h4>
                  <p className="text-slate-300 text-sm mt-1">One dashboard showing status across SaaS, RPA, APIs, and data warehouses.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-orange-500/20 p-2 rounded-lg">
                  <IconCheck className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Human-in-the-Loop</h4>
                  <p className="text-slate-300 text-sm mt-1">Approvals built-in. Sensitive actions wait for a human click before proceeding.</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-10 pt-8 border-t border-slate-700">
              <p className="text-sm text-slate-400 italic">
                "We're Microsoft-backed founders, so we understand exactly where Azure's vendor lock-in begins and ends. We use that knowledge to keep your code portable, auditable, and under your control."
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. CTA */}
      <section className="py-16 bg-orange-50 border-t border-orange-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-hero-accent mb-6">
            Ready to professionalize your automation?
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Stop relying on fragile zaps. Let's build an automation fabric that scales with your enterprise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink intent="primary" size="lg" href={`mailto:${ENTERPRISE_CONTACT}?subject=Automation%20Fabric%20Kickoff`}>
              Email {ENTERPRISE_CONTACT}
            </ButtonLink>
            <ButtonLink intent="secondary" size="lg" href="/contact?service=enterprise">
              Schedule Scoping Call
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}

function CapabilityCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

function DeliverableItem({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">
        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
          <span className="text-slate-600 font-bold">✓</span>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold text-slate-900">{title}</h4>
        <p className="text-slate-600 mt-1">{description}</p>
      </div>
    </div>
  );
}
