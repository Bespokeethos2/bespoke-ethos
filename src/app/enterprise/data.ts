export type EnterpriseOffering = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  heroImage: {
    src: string;
    alt: string;
  };
  idealFor: string[];
  outcomes: string[];
  deliverables: string[];
  cloudNote?: string;
  card: {
    image: string;
    alt: string;
    tagline: string;
    description: string;
  };
};

export const ENTERPRISE_CONTACT = "contact@bespokeethos.com";

export const ENTERPRISE_OFFERINGS: EnterpriseOffering[] = [
  {
    slug: "automation-fabric",
    title: "Automation Fabric",
    subtitle: "Flowstack™ for regulated teams",
    summary:
      "We architect Flowstack™ deployments that can pass infosec, live in your cloud, and keep every approval + audit trail your compliance lead obsesses over.",
    heroImage: {
      src: "/assets/generated/hero-flowstack-desktop.webp",
      alt: "Enterprise automation command center with approvals and monitoring dashboards",
    },
    idealFor: [
      "Ops leaders who need to orchestrate dozens of systems without hiring another 6 developers",
      "Regulated teams that require auditable approvals before anything moves",
      "Executives who want real telemetry on every automation that ships",
    ],
    outcomes: [
      "Documented workflows with human-in-the-loop approvals",
      "Self-healing pipelines with live runbooks and ownership",
      "One control room that shows status across SaaS, RPA, APIs, and data warehouses",
    ],
    deliverables: [
      "Architecture + security design signed-off with your infosec partner",
      "Implementation in your cloud tenancy plus runbooks + test harnesses",
      "Shadow week + enablement so your team can own day-2 without us",
    ],
    cloudNote:
      "Comfortable everywhere from AWS GovCloud to Alibaba Cloud. We’re Microsoft-backed founders so Azure is home base—but we never lock you in. Your cloud, your budget, our responsibility.",
    card: {
      image: "/assets/logos/flowstack.png",
      alt: "Automation Fabric title card",
      tagline: "Flowstack™ for regulated teams",
      description: "Automation fabric for enterprises that need approvals, audits, and telemetry on every run.",
    },
  },
  {
    slug: "cloud-chatbot",
    title: "Cloud Chatbot Control Room",
    subtitle: "Cadence™ deployed at enterprise scale",
    summary:
      "Cadence™ becomes a governed omnichannel assistant—voice, chat, ticketing—trained on your brand canon and wired into approvals so legal sleeps at night.",
    heroImage: {
      src: "/assets/generated/hero-cadence-desktop.webp",
      alt: "Enterprise chatbot workflow showing knowledge sources and escalation paths",
    },
    idealFor: [
      "Customer experience leaders who need on-brand automation across hundreds of SKUs",
      "Compliance teams that require redlines, disallowed phrases, and policy enforcement",
      "Support VPs who want live transcripts, coaching moments, and deflection analytics",
    ],
    outcomes: [
      "On-brand responses across chat, email, SMS, and IVR deflecting 35–55% of tier-1 volume",
      "Escalation ladders with transcripts and tagging so humans jump in fully briefed",
      "Knowledge governance: every answer cited, every change request tracked",
    ],
    deliverables: [
      "Knowledge harvest + empathy interviews across product, legal, CX",
      "Cadence™ orchestration in your preferred channels + CRM/Ticketing",
      "CX ops package: analytics, QA workflows, compliance playbooks",
    ],
    cloudNote:
      "Ship it in Azure OpenAI, AWS Bedrock, GCP Vertex, or a sovereign LLM—Cadence™ speaks all three clouds. We happen to love Azure, but we don’t make you move.",
    card: {
      image: "/assets/logos/cadence.png",
      alt: "Cloud Chatbot Control Room card",
      tagline: "Cadence™ at enterprise scale",
      description: "Governed omnichannel assistants that speak every language your brand does.",
    },
  },
  {
    slug: "decision-room",
    title: "Decision Room",
    subtitle: "Consensus Engine™ with executive guardrails",
    summary:
      "Multi-agent research cells that debate billion-dollar calls, cite every source, and plug into your BI stack so finance, product, and strategy share one brain.",
    heroImage: {
      src: "/assets/generated/hero-consensus-desktop.webp",
      alt: "Multiple AI agents debating around an executive decision dashboard",
    },
    idealFor: [
      "Strategy + corp dev teams drowning in diligence requests",
      "Finance leaders who want transparent scenario modeling",
      "Founders who need a second brain that can’t take a vacation",
    ],
    outcomes: [
      "Structured debates with concede/dissent logic plus audit-ready packets",
      "API + warehouse hooks so insights land inside Power BI, Tableau, or Fabric",
      "Executive briefing layer: recommendations, risk radar, ‘what changes the answer’",
    ],
    deliverables: [
      "Source curation tuned to your vertical, proprietary data, and analyst notes",
      "Custom personas + escalation logic reviewed with your leadership team",
      "Integration sprint to expose results in the tools your board already reads",
    ],
    cloudNote:
      "Consensus Engine™ runs wherever your governance requires: Azure confidential compute, AWS Nitro, private data centers—you pick, we harden it.",
    card: {
      image: "/assets/logos/consensus.png",
      alt: "Decision Room title card",
      tagline: "Consensus Engine™ for execs",
      description: "Adversarial research rooms with citations, dissent, and API hooks into your BI stack.",
    },
  },
  {
    slug: "reliability-ops",
    title: "Reliability Ops",
    subtitle: "Redbridging™ for enterprise automation rescue",
    summary:
      "Stabilize brittle Zapier/Make/RPA and shadow IT before it blows up quarter close. Then wrap it with monitoring, rollback, and on-call you can trust.",
    heroImage: {
      src: "/assets/generated/hero-redbridging-desktop.webp",
      alt: "Engineers monitoring automation reliability dashboards with alerts",
    },
    idealFor: [
      "Revenue ops teams inheriting years of duct-taped automations",
      "IT leaders tasked with consolidating tooling after acquisitions",
      "Any org that needs a safety audit before scale or IPO",
    ],
    outcomes: [
      "Full inventory + blast radius map of every automation in production",
      "Refactors into maintainable services with Terraform/Terragrunt handoff",
      "24/7 alerting playbooks so nobody wakes up guessing who owns a failure",
    ],
    deliverables: [
      "90-day stabilization plan with quantified risk + ROI",
      "Rebuilds prioritized by revenue impact and compliance deadlines",
      "Runbooks, pager rotations, and training for your internal team",
    ],
    cloudNote:
      "Yes, we’ll untangle whatever lives in AWS, Azure, Alibaba, or on-prem. We prefer Azure because we’re Microsoft-backed, but your stack stays your stack.",
    card: {
      image: "/assets/logos/RedBridging.png",
      alt: "Reliability Ops title card",
      tagline: "Redbridging™ Enterprise",
      description: "Stabilize, monitor, and own every automation before it can blow up quarter close.",
    },
  },
];

export function getEnterpriseOffering(slug: string) {
  return ENTERPRISE_OFFERINGS.find((offering) => offering.slug === slug);
}
