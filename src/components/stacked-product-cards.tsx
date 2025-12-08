import Link from "next/link";
import Image from "next/image";

type ProductCard = {
  key: string;
  title: string;
  tagline: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

const PRODUCT_CARDS: ProductCard[] = [
  {
    key: "cadence",
    title: "Cadence – Your AI Concierge",
    tagline: "On-brand AI front door",
    description:
      "Customer-facing AI concierge that answers common questions, routes work, and hands off to you when it matters.",
    href: "/products/cadence",
    imageSrc: "/assets/generated/hero-chatbots-desktop.webp",
    imageAlt: "AI chatbot concierge hero image",
  },
  {
    key: "automation-skyway",
    title: "Automation Skyway",
    tagline: "Your direct path to the cloud",
    description:
      "Map your process, keep approvals intact, build production-ready cloud automation in days, not months.",
    href: "/solutions/automation-skyway",
    imageSrc: "/assets/generated/hero-flowstack-desktop.webp",
    imageAlt: "Automation Skyway cloud workflow automation hero image",
  },
  {
    key: "consensus",
    title: "Consensus Engine",
    tagline: "Clarity with receipts",
    description:
      "Multi-lens research sprint that synthesizes sources, surfaces options, and delivers a cited brief for confident decisions.",
    href: "/solutions/consensus-engine",
    imageSrc: "/assets/generated/hero-consensus-desktop.webp",
    imageAlt: "AI research assistant hero image",
  },
  {
    key: "redbridging",
    title: "Automation Rescue",
    tagline: "Fix, fortify, monitor",
    description:
      "Broken workflow? Duct-taped integrations? We fix what's failing and build it right—fast.",
    href: "/solutions/redbridging",
    imageSrc: "/assets/generated/hero-redbridging-desktop.webp",
    imageAlt: "Automation rescue hero image",
  },
];

export function StackedProductCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2" aria-label="Flagship small-business solutions">
      {PRODUCT_CARDS.map((card) => (
        <Link
          key={card.key}
          href={card.href}
          className="group flex flex-col rounded-xl border border-border bg-surface-secondary p-4 transition-all hover:border-accent-400 hover:shadow-lg dark:border-dark-border dark:bg-dark-surface-secondary dark:hover:border-accent-500"
        >
          <div className="relative mb-4 h-40 w-full overflow-hidden rounded-lg">
            <Image
              src={card.imageSrc}
              alt={card.imageAlt}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
            {card.tagline}
          </p>
          <h3 className="mb-2 text-lg font-bold text-text-primary dark:text-dark-text-primary">
            {card.title}
          </h3>
          <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
            {card.description}
          </p>
        </Link>
      ))}
    </div>
  );
}
