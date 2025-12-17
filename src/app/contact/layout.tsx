import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Bespoke Ethos | Cleveland AI Automation",
  description: "Get in touch with Bespoke Ethos. Free consultation for Cleveland area businesses. Schedule a call to discuss your AI automation needs.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Bespoke Ethos | Cleveland AI Automation",
    description: "Get in touch with Bespoke Ethos. Free consultation for Cleveland area businesses.",
    images: ["/assets/generated/service_consult.svg"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
