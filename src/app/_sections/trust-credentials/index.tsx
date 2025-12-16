import Link from "next/link";
import { Section } from "@/common/layout";
import { BorderBeam } from "@/components/ui/border-beam";
import { CredentialCard } from "./credential-card";

export function TrustCredentials() {
  return (
    <Section className="!py-12 !sm:py-16 !md:py-20 !lg:py-24">
      <div className="mx-auto max-w-7xl text-center px-4 sm:px-6">
        <p className="text-orange-500 text-xs sm:text-sm font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-2 sm:mb-3">
          Trusted & Certified
        </p>
        <h2 className="mt-2 sm:mt-3 text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
          Real Credentials. Real Experience.
        </h2>
        <p className="mx-auto mt-3 sm:mt-4 md:mt-5 max-w-2xl text-sm sm:text-base md:text-lg text-slate-800 font-medium">
          We&rsquo;re not just another AI consultant. We&rsquo;re vetted, certified, and battle-tested.
        </p>

        {/* Cards with ample spacing for drop shadow visibility */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid gap-12 sm:gap-16 md:gap-20 lg:gap-24 md:grid-cols-3 items-start justify-items-center py-8 sm:py-12">
          {/* NGLCC Certified */}
          <CredentialCard
            title="NGLCC Certified"
            description="Certified LGBTQ-owned business supporting diverse supply chains nationwide."
            imageSrc="/assets/generated/badge_nglcc.svg"
            imageAlt="NGLCC Certified LGBT Business Enterprise"
          />

          {/* Catalant Vetted */}
          <CredentialCard
            title="Catalant Certified"
            description="Enterprise-grade vetted consultant trusted by Fortune 500 companies."
            imageSrc="/assets/generated/badge_catalant.svg"
            imageAlt="Catalant Vetted Consultant"
          />

          {/* AI Experience */}
          <CredentialCard
            title="Frontier AI Experience"
            description="Five years training frontier models powering ChatGPT and enterprise AI."
            imageSrc="/assets/generated/badge_experience.svg"
            imageAlt="5+ years frontier AI trainer experience badge"
          />
        </div>

        {/* 25% Discount Callout with LGBTQ+ button */}
        <div
          className="mt-12 sm:mt-16 md:mt-20 mx-auto max-w-4xl rounded-2xl border-4 border-orange-500/50 p-6 sm:p-8 md:p-10 text-center bg-gradient-to-br from-orange-100 to-amber-100 shadow-2xl"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-950">
            25% Off for LGBTQ+ Businesses
          </h3>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-slate-900 leading-relaxed font-semibold">
            Starting a business as a minority is hard as hell. I know—I&rsquo;ve been there. That&rsquo;s why LGBTQ-owned businesses get 25% off. No hoops, no fine print. Just mention it when you reach out.
          </p>
          <div className="mt-5 sm:mt-6 md:mt-7 flex justify-center">
            <Link
              href="/lgbtq-discount"
              className="inline-flex items-center rounded-full border-2 border-slate-900 bg-slate-900 px-8 py-3 text-sm font-bold text-white shadow-xl transition-all duration-200 hover:bg-slate-800 hover:shadow-2xl hover:scale-105"
            >
              Learn about the 25% discount
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
