import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics Test | Bespoke Ethos",
  description: "Internal analytics testing page for verifying Google Analytics integration.",
  alternates: { canonical: "/test-analytics" },
  robots: {
    index: false,
    follow: false,
  },
};

export default function TestAnalyticsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
