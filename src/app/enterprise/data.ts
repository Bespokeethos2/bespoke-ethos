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
    subtitle: "Workflow Automation Setup™ for growing teams",
    summary:
      "We build workflow automations that pass security checks, live in your own cloud, and keep a clear record of every approval. No black boxes.",
    heroImage: {
      src: "/assets/generated/hero-flowstack-desktop.webp",
      alt: "Automation control center with approvals and monitoring dashboards",
    },
    idealFor: [
      "Ops leaders managing too many systems without enough developers",
      "Teams that need a human to approve things before they happen",
      "Founders who want to know exactly what their automations are doing",
    ],
    outcomes: [
      "Documented workflows with human approvals built in",
      "Self-healing pipelines that don't break silently",
      "One dashboard to see status across all your tools",
    ],
    deliverables: [
      "Architecture design signed-off with your security team",
      "Implementation in your cloud account (AWS/Azure/GCP)",
      "Training so your team can manage it after we leave",
    ],
    cloudNote:
      "Comfortable everywhere from AWS to Azure. We’re Microsoft-backed founders, so we know how to keep your code portable and under your control, no matter which cloud you use.",
    card: {
      image: "/assets/logos/flowstack.png",
      alt: "Automation Fabric title card",
      tagline: "Automations that actually work",
      description: "Robust workflows with approvals, audits, and monitoring built in.",
    },
  },
  {
    slug: "cloud-chatbot",
    title: "Cloud Chatbot Control Room",
    subtitle: "Customer service that scales",
    summary:
      "Your customer service AI, trained on your brand's voice and rules. It handles voice, chat, and tickets, and knows exactly when to ask a human for help.",
    heroImage: {
      src: "/assets/generated/hero-cadence-desktop.webp",
      alt: "Chatbot workflow showing knowledge sources and escalation paths",
    },
    idealFor: [
      "CX leaders who need consistent answers across thousands of chats",
      "Teams that need strict rules on what the AI can and can't say",
      "Support managers who want transcripts and analytics for coaching",
    ],
    outcomes: [
      "On-brand responses that handle 35–55% of common questions",
      "Smart handoffs with transcripts so your team has context",
      "A single source of truth for all your answers",
    ],
    deliverables: [
      "Knowledge audit of your help docs, legal policies, and scripts",
      "Chatbot setup in your preferred channels (Web, SMS, etc.)",
      "Dashboards to track quality and compliance",
    ],
    cloudNote:
      "Deploy on Azure OpenAI, AWS Bedrock, or GCP. We help you pick the right model and keep you from getting locked into one vendor.",
    card: {
      image: "/assets/logos/cadence.png",
      alt: "Cloud Chatbot Control Room card",
      tagline: "Customer service that feels like you",
      description: "Omnichannel assistants that speak your brand's language perfectly.",
    },
  },
  {
    slug: "decision-room",
    title: "Decision Room",
    subtitle: "Research that helps you decide",
    summary:
      "AI agents that research your biggest questions, debate the options, and give you a clear, cited brief so you can make a confident decision.",
    heroImage: {
      src: "/assets/generated/hero-consensus-desktop.webp",
      alt: "AI agents debating options around a decision dashboard",
    },
    idealFor: [
      "Founders making high-stakes decisions without a big team",
      "Finance leaders who want to see the math behind the scenarios",
      "Anyone who needs a second brain to stress-test a strategy",
    ],
    outcomes: [
      "Structured debates that show you the pros and cons",
      "Data connections to your existing BI tools",
      "Clear decision briefs with recommendations and risks",
    ],
    deliverables: [
      "Curated research tuned to your specific industry and data",
      "Custom personas to challenge your assumptions",
      "Integration with the tools you use every day",
    ],
    cloudNote:
      "Runs securely in your private cloud environment. We ensure your data stays yours and your strategy stays private.",
    card: {
      image: "/assets/logos/consensus.png",
      alt: "Decision Room title card",
      tagline: "Clear answers for hard decisions",
      description: "Research rooms with citations, dissent, and clear recommendations.",
    },
  },
  {
    slug: "reliability-ops",
    title: "Reliability Ops",
    subtitle: "Fix your broken automations",
    summary:
      "We stabilize your fragile Zaps and scripts before they break something important. Then we add monitoring so you sleep better.",
    heroImage: {
      src: "/assets/generated/hero-redbridging-desktop.webp",
      alt: "Engineers monitoring automation reliability dashboards",
    },
    idealFor: [
      "Teams inheriting a mess of old automations",
      "IT leaders trying to clean up after rapid growth",
      "Anyone worried their systems might break during a busy season",
    ],
    outcomes: [
      "A complete map of every automation you have running",
      "Rebuilt, reliable workflows that don't break randomly",
      "Alerts that tell you exactly what went wrong and where",
    ],
    deliverables: [
      "90-day plan to fix the most critical risks",
      "Prioritized rebuilds based on business impact",
      "Training and runbooks for your team",
    ],
    cloudNote:
      "We'll untangle whatever you have, whether it's in AWS, Azure, or on-prem. We help you take back control of your stack.",
    card: {
      image: "/assets/logos/RedBridging.png",
      alt: "Reliability Ops title card",
      tagline: "Fix your broken automations",
      description: "Stabilize, monitor, and own every automation before it breaks.",
    },
  },
];

export function getEnterpriseOffering(slug: string) {
  return ENTERPRISE_OFFERINGS.find((offering) => offering.slug === slug);
}
