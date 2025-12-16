import Link from "next/link";
import { Section } from "@/common/layout";
import { BorderBeam } from "@/components/ui/border-beam";
import { CredentialCard } from "./credential-card";

export function TrustCredentials() {
  return (
    <Section className="bg-slate-900/50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl text-center px-4 sm:px-6">
        <p className="text-orange-400 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em]">
          Trusted & Certified
        </p>
        <h2 className="mt-3 sm:mt-4 text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
          Real Credentials. Real Experience.
        </h2>
        <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg text-slate-200">
          We&rsquo;re not just another AI consultant. We&rsquo;re vetted, certified, and battle-tested.
        </p>

        <div className="mt-10 sm:mt-12 md:mt-16 grid gap-8 sm:gap-10 md:grid-cols-3 items-start justify-items-center max-w-6xl mx-auto">
          {/* NGLCC Certified */}
          <CredentialCard
            title="NGLCC Certified"
            description="Officially recognized LGBTQ-owned business by the National LGBT Chamber of Commerce."
            serviceDescription="Authentic LGBTQ minority business enterprise credentials and certification"
            imageSrc="/assets/generated/badge_nglcc.svg"
            imageAlt="NGLCC Certified LGBT Business Enterprise"
          />

          {/* Catalant Vetted */}
          <CredentialCard
            title="Catalant Certified"
            description="Vetted and approved as a professional business consultant through Catalant's rigorous screening process."
            serviceDescription="Enterprise-grade consultant vetting through rigorous professional screening"
            imageSrc="/assets/generated/badge_catalant.svg"
            imageAlt="Catalant Vetted Consultant"
          />

          {/* AI Experience */}
          <CredentialCard
            title="Frontier AI Experience"
            description="5+ years training and evaluating frontier models behind tools like ChatGPT, Copilot, and Gemini—working with Microsoft and Google."
            serviceDescription="Deep AI expertise from the source"
            imageSrc="/assets/generated/badge_experience.svg"
            imageAlt="5+ years frontier AI trainer experience badge"
          />
        </div>

        {/* 25% Discount Callout with LGBTQ+ button */}
        <div
          className="mt-12 sm:mt-16 mx-auto max-w-4xl rounded-2xl border-2 border-orange-500/30 bg-slate-800/60 backdrop-blur-md p-6 sm:p-8 md:p-10 text-center shadow-xl"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            25% Off for LGBTQ+ Businesses
          </h3>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed">
            Starting a business as a minority is hard as hell. I know—I&rsquo;ve been there. That&rsquo;s why LGBTQ-owned businesses get 25% off. No hoops, no fine print. Just mention it when you reach out.
          </p>
          <div className="mt-5 sm:mt-6 flex justify-center">
            <Link
              href="/lgbtq-discount"
              className="inline-flex items-center rounded-full border border-orange-500/50 bg-orange-600 hover:bg-orange-500 px-8 py-3 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Learn about the 25% discount
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
