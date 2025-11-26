import Image from "next/image";
import { Section } from "@/common/layout";

export function AlexMollyStory() {
  return (
    <Section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Left Side: Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-xl lg:aspect-[5/4]">
              <Image
                src="/assets/Real-CustomersAlex-Ordedock-Coffee-Marquette-Mi.jpg"
                alt="Alex Ordedock with his laptop showing the Molly tutor interface"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Right Side: Text Block */}
          <div className="mt-12 lg:col-span-6 lg:mt-0 lg:flex lg:flex-col lg:justify-center">
            <h2 className="text-base font-semibold uppercase tracking-wider text-accent-500">
              Meet Alex
            </h2>
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-text-primary dark:text-dark-text-primary sm:text-4xl">
              How Molly Saved Finals Week.
            </h3>
            <p className="mt-4 text-lg text-text-secondary dark:text-dark-text-secondary">
              Alex, a bar worker from Michigan, struggled with math. We built ‘Molly’—a custom Gemini-based tutor that cracks jokes he likes and teaches to his pace. Weeks later, Alex entered finals week carrying an A/B+, his first time above a C.
            </p>
            <p className="mt-6 text-lg font-medium italic text-text-primary dark:text-dark-text-primary">
              “Real student. Real results.”
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
