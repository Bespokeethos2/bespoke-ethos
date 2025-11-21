import Link from "next/link";
import clsx from "clsx";
import { VogueCard } from "./vogue-card";

type StackCard = {
  key: string;
  title: string;
  tagline: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

const STACKED_CARDS: StackCard[] = [
  {
    key: "cadence",
    title: "Cadence",
    tagline: "For people who hate chatbots",
    description:
      "A premium, relationship-first customer chatbot trained on your products, voice, and founder stories—built for people who hate generic bots.",
    href: "/products/cadence",
    imageSrc: "/assets/logos/cadence.png",
    imageAlt: "Cadence couture card",
  },
  {
    key: "flowstack",
    title: "Flowstack",
    tagline: "Workflow automation",
    description:
      "Automate the single task stealing the most hours from your week—without giving up approvals, audit trails, or rollback.",
    href: "/solutions/flowstack",
    imageSrc: "/assets/logos/flowstack.png",
    imageAlt: "Flowstack couture card",
  },
  {
    key: "consensus",
    title: "Consensus Engine",
    tagline: "Decision clarity",
    description:
      "Turn one big strategic question into a calm, cited brief by running it through several AI research lenses instead of one guess.",
    href: "/solutions/consensus-engine",
    imageSrc: "/assets/logos/consensus.png",
    imageAlt: "Consensus Engine couture card",
  },
  {
    key: "redbridging",
    title: "Redbridging",
    tagline: "Automation reliability",
    description:
      "Rescue brittle automations—stabilize, document, and maintain them so they stop breaking the night before your launch.",
    href: "/solutions/redbridging",
    imageSrc: "/assets/logos/RedBridging.png",
    imageAlt: "Redbridging couture card",
  },
] as const;

const LAYER_CLASSES = [
  // top card
  "z-40 rotate-[-1deg] -translate-y-1",
  // second card
  "z-30 rotate-1 translate-y-4",
  // third card
  "z-20 rotate-[-2deg] translate-y-8",
  // bottom card
  "z-10 rotate-2 translate-y-12",
] as const;

export function StackedProductCards() {
  return (
    <div
      className="relative mx-auto mt-6 flex max-w-5xl items-center justify-center"
      aria-label="Stacked view of flagship small-business solutions"
    >
      <div className="relative h-[520px] w-full max-w-2xl sm:h-[560px]">
        {STACKED_CARDS.map((card, index) => {
          const layerClass = LAYER_CLASSES[index] ?? LAYER_CLASSES[LAYER_CLASSES.length - 1];

          return (
            <Link
              key={card.key}
              href={card.href}
              className={clsx(
                "group absolute inset-x-0 mx-auto max-w-md transition-transform duration-500 ease-out",
                layerClass,
              )}
            >
              <VogueCard
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                title={card.title}
                tagline={card.tagline}
                description={card.description}
                className="pointer-events-none group-hover:-translate-y-3 group-hover:rotate-0"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

