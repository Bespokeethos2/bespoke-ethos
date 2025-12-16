import Link from "next/link";
import { Section } from "@/common/layout";
import { PremiumContainer } from "@/components/ui/premium-container";
import { CredentialCard } from "./credential-card";

export function TrustCredentials() {
  return (
    <Section className="bg-slate-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl text-center px-4 sm:px-6">
        <p className="text-orange-400 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-4">
          Trusted & Certified
        </p>
        <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white text-glow-crimson mb-6">
          Real Credentials. Real Experience.
        </h2>
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
          We&rsquo;re not just another AI consultant. We&rsquo;re vetted, certified, and battle-tested.
        </p>

        {/* Cards grid with proper spacing for drop shadows */}
        <div className="mt-16 sm:mt-20 md:mt-24 grid gap-0 md:grid-cols-3 items-stretch px-0">
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

        {/* 25% Discount Callout with improved styling */}
        <PremiumContainer 
          variant="glass" 
          className="mt-16 sm:mt-20 mx-auto max-w-4xl border-orange-500/30 p-8 sm:p-10 text-center bg-orange-900/10"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            25% Off for LGBTQ+ Businesses
          </h3>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
            Starting a business as a minority is hard as hell. I know—I&rsquo;ve been there. That&rsquo;s why LGBTQ-owned businesses get 25% off. No hoops, no fine print. Just mention it when you reach out.
          </p>
          <div className="flex justify-center">
            <Link
              href="/lgbtq-discount"
              className="inline-flex items-center rounded-full border-2 border-orange-500/50 bg-orange-500/20 backdrop-blur-md px-8 py-3 text-base font-bold text-white shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all duration-200 hover:bg-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] min-h-[48px]"
            >
              Learn about the 25% discount
            </Link>
          </div>
        </PremiumContainer>
      </div>
    </Section>
  );
}
