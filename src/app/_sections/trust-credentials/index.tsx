import Link from "next/link";
import { Section } from "@/common/layout";
import { BorderBeam } from "@/components/ui/border-beam";
import { CredentialCard } from "./credential-card";

export function TrustCredentials() {
  return (
    <Section>
      <div className="mx-auto max-w-7xl text-center px-4 sm:px-6">
        <p className="text-orange-500 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-3">
          Trusted & Certified
        </p>
        <h2 className="mt-3 sm:mt-4 text-balance text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-slate-900">
          Real Credentials. Real Experience.
        </h2>
        <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-base sm:text-lg text-slate-700">
          We&rsquo;re not just another AI consultant. We&rsquo;re vetted, certified, and battle-tested.
        </p>

        {/* Add extra padding around cards for shadow visibility */}
        <div className="mt-12 sm:mt-14 md:mt-16 grid gap-8 md:gap-10 lg:gap-12 md:grid-cols-3 items-stretch px-4">
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
          className="mt-16 sm:mt-20 mx-auto max-w-4xl rounded-2xl border-2 border-orange-500/30 p-8 sm:p-10 text-center bg-gradient-to-br from-orange-50 to-amber-50 shadow-lg"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            25% Off for LGBTQ+ Businesses
          </h3>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-slate-700 leading-relaxed">
            Starting a business as a minority is hard as hell. I know—I&rsquo;ve been there. That&rsquo;s why LGBTQ-owned businesses get 25% off. No hoops, no fine print. Just mention it when you reach out.
          </p>
          <div className="mt-6 sm:mt-7 flex justify-center">
            <Link
              href="/lgbtq-discount"
              className="inline-flex items-center rounded-full border-2 border-slate-900 bg-slate-900 px-8 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-slate-800 hover:shadow-lg"
            >
              Learn about the 25% discount
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
