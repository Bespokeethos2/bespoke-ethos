import type { Metadata } from "next";

import { Section } from "@/common/layout";
import { Heading } from "@/common/heading";
import { Breadcrumbs } from "@/app/_components/seo/breadcrumbs";
import { StackedProductCards } from "@/components/stacked-product-cards";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Small Business AI Products | Bespoke Ethos",
  description:
    "Cadence, Flowstack, Consensus Engine, and Redbridging—our flagship small-business AI products for chat, automation, research, and reliability.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <main className="be-page-slate">
      <Section className="gap-5 -mt-14 md:gap-6 md:-mt-4">
        <div className="be-section-card space-y-6">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Products" },
            ]}
          />
          <Heading subtitle="Flagship tools for founders in the thick of it" align="left">
            <h1>Small Business Solutions</h1>
          </Heading>
          <p className="max-w-2xl text-sm text-text-secondary dark:text-dark-text-secondary">
            These are the tools we reach for most often when a small-business founder asks for help: Cadence for
            relationship-first chat, Flowstack for auditable automation, Consensus Engine for big decisions, and
            Redbridging for keeping critical workflows from falling apart.
          </p>

          <StackedProductCards />
        </div>
      </Section>
    </main>
  );
}

