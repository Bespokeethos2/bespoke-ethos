import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Bespoke Ethos",
  description: "Explore our range of services for small businesses.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <h1>Our Services</h1>
      <p>Explore our range of services for small businesses.</p>
      {/* Add your actual services content here */}
    </main>
  );
}
