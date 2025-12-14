import Link from "next/link";
import { Section } from "@/common/layout";
import { BorderBeam } from "@/components/ui/border-beam";
import { CredentialCard } from "./credential-card";

export function TrustCredentials() {
  return (
    <Section>
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-accent-500 text-sm font-semibold uppercase tracking-[0.3em]">
          Trusted & Certified
        </p>
        <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
          Real Credentials. Real Experience.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          We&rsquo;re not just another AI consultant. We&rsquo;re vetted, certified, and battle-tested.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3 items-stretch">
          {/* NGLCC Certified */}
          <CredentialCard
            title="NGLCC Certified"
            description="Officially recognized as an LGBTQ-owned business by the National LGBT Chamber of Commerce."
            imageSrc="/assets/generated/badge_nglcc.svg"
            imageAlt="NGLCC Certified LGBT Business Enterprise"
          />

          {/* Catalant Vetted */}
          <CredentialCard
            title="Catalant Certified"
            description="Vetted and approved as a professional business consultant through Catalant's rigorous screening process."
            imageSrc="/assets/generated/badge_catalant.svg"
            imageAlt="Catalant Vetted Consultant"
          />

          {/* AI Experience */}
          <CredentialCard
            title="Frontier AI, Human in the Loop"
            description="5+ years training and evaluating frontier models behind tools like ChatGPT, Copilot, and Gemini—sharpening teeth in Azure with Microsoft enterprise developers in 2024, and now building in Google's cloud while applying to their Founders program."
            imageSrc="/assets/generated/badge_experience.svg"
            imageAlt="5+ years frontier AI trainer experience badge"
          />
        </div>

        {/* 25% Discount Callout with LGBTQ+ button */}
        <div
          className="mt-12 mx-auto max-w-4xl rounded-2xl border-2 border-accent-500/20 p-8 text-center"
          style={{ backgroundColor: "var(--cream-bg)" }}
        >
          <h3 className="text-2xl font-semibold text-slate-900">
            25% Off for LGBTQ+ Businesses
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Starting a business as a minority is hard as hell. I know—I&rsquo;ve been there. That&rsquo;s why LGBTQ-owned businesses get 25% off. No hoops, no fine print. Just mention it when you reach out.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/lgbtq-discount"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-colors duration-200 hover:bg-slate-50"
            >
              Learn about the 25% discount
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
