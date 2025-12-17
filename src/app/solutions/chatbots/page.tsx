import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Chatbots (now Cadence  Your AI Concierge) | Bespoke Ethos",
  description:
    "This legacy Chatbots URL now routes to Cadence  Your AI Concierge—our flagship on-brand AI concierge offering.",
  alternates: { canonical: "/products/cadence" },
  openGraph: {
    title: "Cadence - Your AI Concierge | Bespoke Ethos",
    description: "24/7 AI receptionist that routes calls, schedules meetings, and answers questions.",
    images: ["/assets/logos/cadence_logo.png"],
  },
};

export default function ChatbotsPage() {
  // Note: JSON-LD not needed for redirect pages - they don't render
  redirect("/products/cadence");
}

