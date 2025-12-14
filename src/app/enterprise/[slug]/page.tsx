import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OrganizationJsonLd } from '@/app/_components/seo/organization-jsonld';
import {
  ENTERPRISE_OFFERINGS,
  ENTERPRISE_CONTACT,
  type EnterpriseOffering,
  getEnterpriseOffering,
} from "../data";

type EnterpriseParams = { slug: string };
type EnterprisePageProps = {
  params: Promise<EnterpriseParams>;
};

export async function generateStaticParams() {
  return ENTERPRISE_OFFERINGS.map((offering) => ({ slug: offering.slug }));
}

export async function generateMetadata({ params }: EnterprisePageProps): Promise<Metadata> {
  const { slug } = await params;
  const offering = getEnterpriseOffering(slug);
  if (!offering) {
    return {};
  }
  return {
    title: `${offering.title} | Bespoke Ethos Enterprise`,
    description: offering.summary,
    alternates: { canonical: `/enterprise/${offering.slug}` },
  };
}

export default async function EnterpriseOfferingPage({ params }: EnterprisePageProps) {
  const { slug } = await params;
  const offering = getEnterpriseOffering(slug);
  if (!offering) {
    notFound();
  }

  return (
    <main className="be-page-slate">
      <OrganizationJsonLd />
      <section className="gap-6 -mt-10 md:-mt-6">
        <div className="be-section-card space-y-8">
          <header className="space-y-4 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-text-tertiary dark:text-dark-text-tertiary">
              Enterprise Suite · {offering.subtitle}
            </p>
            <h1 className="font-hero-accent text-3xl md:text-4xl">{offering.title}</h1>
            <p className="mx-auto max-w-3xl text-base text-text-secondary dark:text-dark-text-secondary">
              {offering.summary}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href={`mailto:${ENTERPRISE_CONTACT}?subject=${encodeURIComponent(offering.title)}%20Inquiry`}
                className="primary-cta"
              >
                Email {ENTERPRISE_CONTACT}
              </Link>
              <Link href="/contact?service=enterprise" className="secondary-cta">
                Schedule a deep-dive
              </Link>
            </div>
          </header>

          <div className="relative aspect-[5/2] w-full overflow-hidden rounded-2xl border border-border bg-surface-secondary dark:border-dark-border dark:bg-dark-surface-secondary">
            <Image
              src={offering.heroImage.src}
              alt={offering.heroImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 960px"
              priority
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <EnterpriseListCard title="Built for teams like" items={offering.idealFor} />
            <EnterpriseListCard title="Outcomes you can show leadership" items={offering.outcomes} />
          </div>

          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">What we ship</h2>
              <ul className="list-disc space-y-2 pl-5 text-sm text-text-secondary dark:text-dark-text-secondary">
                {offering.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                Every engagement includes executive readouts, documentation you can hand to auditors, and a knowledge
                transfer sprint so you&apos;re not married to us forever.
              </p>
            </div>
            <aside className="rounded-2xl border border-border bg-surface-secondary/60 p-5 text-sm text-text-secondary shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:border-dark-border dark:bg-dark-surface-secondary/60 dark:text-dark-text-secondary">
              <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">
                Cloud loyalty without lock-in
              </h3>
              <p className="mt-2">
                We&apos;re Microsoft-backed founders, so Azure will always have our heart. But our job is to make your
                stack work. Whether your compliance team lives in AWS, GCP, Alibaba, OCI, or on-prem, we deploy there,
                wire up your identity + networking, and keep your data where it belongs. Your money, your cloud, our
                responsibility.
              </p>
              {offering.cloudNote ? <p className="mt-3 italic text-xs">{offering.cloudNote}</p> : null}
            </aside>
          </div>

          <div className="rounded-2xl border border-border bg-surface-primary p-5 text-center dark:border-dark-border dark:bg-dark-surface-primary">
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
              Ready to scope <strong>{offering.title}</strong>? Email{" "}
              <Link
                className="underline"
                href={`mailto:${ENTERPRISE_CONTACT}?subject=${encodeURIComponent(offering.title)}%20Kickoff`}
              >
                {ENTERPRISE_CONTACT}
              </Link>{" "}
              or send over your architecture doc—we&apos;ll sign the NDA and dig in.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function EnterpriseListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-surface-secondary/60 p-5 shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:border-dark-border dark:bg-dark-surface-secondary/60">
      <h2 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">{title}</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-text-secondary dark:text-dark-text-secondary">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
