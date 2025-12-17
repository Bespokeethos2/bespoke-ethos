import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Book a Consultation | Bespoke Ethos",
  description: "Schedule a 30-minute consultation to discuss your AI automation needs. Free consultation for Cleveland area businesses.",
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Book a Consultation | Bespoke Ethos",
    description: "Schedule a 30-minute consultation to discuss your AI automation needs.",
    images: ["/assets/generated/logo-square-dark.png"],
  },
};

export default function BookRedirectPage() {
  redirect("https://calendly.com/contact-bespokeethos/30min");
}

