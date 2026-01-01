import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Bespoke Ethos AI Consulting",
  description:
    "Get in touch with Bespoke Ethos for AI automation, workflow consulting, and custom chatbot development. Cleveland-based AI consulting for small businesses. Contact us to discuss your project.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
