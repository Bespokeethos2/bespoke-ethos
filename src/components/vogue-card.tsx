import Image from "next/image";
import clsx from "clsx";

type VogueCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  tagline: string;
  description: string;
  className?: string;
};

export function VogueCard({ imageSrc, imageAlt, title, tagline, description, className }: VogueCardProps) {
  return (
    <section
      className={clsx(
        "vogue-card flex flex-col gap-4 border-[5px] border-black bg-white/25 p-8 shadow-[0_44px_120px_rgba(0,0,0,0.35)] backdrop-blur-[22px] transition-transform duration-500 hover:-translate-y-1 dark:bg-white/15",
        className,
      )}
      style={{ borderRadius: 0 }}
      aria-label={`${title} feature card`}
    >
      <div className="relative h-48 w-full overflow-hidden shadow-[0_44px_120px_rgba(0,0,0,0.4)]">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 600px" />
      </div>
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.4em] text-text-tertiary dark:text-dark-text-tertiary">{tagline}</p>
        <h3 className="text-3xl font-hero-accent text-text-primary dark:text-dark-text-primary">{title}</h3>
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary">{description}</p>
      </div>
    </section>
  );
}
