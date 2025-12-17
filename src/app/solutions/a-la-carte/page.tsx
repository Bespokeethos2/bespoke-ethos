import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "A La Carte (legacy) | Bespoke Ethos",
  description:
    "This legacy a la carte URL now routes to our four flagship offerings: Cadence  Your AI Concierge, Consensus Engine  Your AI Strategy Sprint, Workflow Automation Setup, and Automation Rescue.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Solutions | Bespoke Ethos",
    description: "Fixed-price AI automation builds. Intelligent workflows that run your business.",
    images: ["/assets/generated/logo-square-dark.png"],
  },
};

export default function ALaCartePage() {
  // Note: JSON-LD not needed for redirect pages - they don't render
  redirect("/solutions");
}

