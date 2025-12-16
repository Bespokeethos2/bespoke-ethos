import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconBrandLinkedin } from "@tabler/icons-react";

import { ButtonLink } from "@/common/button";
import { DarkLightImageAutoscale } from "@/common/dark-light-image";

type NavLink = { title: string; url: string };
type SocialLink = {
  title: string;
  url: string;
  iconUrl?: string | null;
  iconAsset?: string | null;
  Icon?: ComponentType<{ className?: string }>;
};

const FALLBACK_NAV_LINKS: NavLink[] = [
  { title: "Home", url: "/" },
  { title: "Products", url: "/solutions" },
  { title: "Pricing", url: "/pricing" },
  { title: "About", url: "/about" },
  { title: "Blog", url: "/blog" },
  { title: "FAQ", url: "/faq" },
  { title: "LGBTQ Discount", url: "/lgbtq-discount" },
  { title: "Contact", url: "/contact" },
  { title: "Privacy", url: "/privacy-policy" },
  { title: "Terms", url: "/terms" },
];

const FALLBACK_SOCIAL_LINKS: SocialLink[] = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/company/bespoke-ethos",
    Icon: IconBrandLinkedin,
  },
];

const FALLBACK_COPYRIGHT =
  "c 2025 Gaymensfieldguide DBA Bespoke Ethos. All rights reserved.";

type LogoVariant = {
  url: string;
  alt: string | null;
  width: number;
  height: number;
  aspectRatio: string;
  blurDataURL: string;
};

type FooterLogo = {
  dark: LogoVariant;
  light: LogoVariant;
};

const SillyBeanIcon = () => (
  <span
    aria-hidden
    className="text-lg leading-none text-slate-700 dark:text-amber-200"
  >
    🫘
  </span>
);

const FALLBACK_LOGO: FooterLogo = {
  dark: {
    url: "/assets/logo-dark.png",
    alt: "Bespoke Ethos logo",
    width: 600,
    height: 600,
    aspectRatio: "1/1",
    blurDataURL: "",
  },
  light: {
    url: "/assets/logo-light-2.png",
    alt: "Bespoke Ethos logo",
    width: 300,
    height: 140,
    aspectRatio: "300/140",
    blurDataURL: "",
  },
};

type FooterLayoutProps = {
  logo: FooterLogo;
  navItems: NavLink[];
  socialLinks: SocialLink[];
  showUseTemplate?: boolean;
  copyright: string;
  logoIsLocal?: boolean;
  backgroundSrc?: string;
};

function isExternalLink(url: string): boolean {
  return /^https?:\/\//.test(url);
}

function FooterLayout({
  logo,
  navItems,
  socialLinks,
  copyright,
  logoIsLocal,
}: FooterLayoutProps) {
  return (
    <footer className="w-full border-t-2 border-slate-300 bg-slate-50 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Column 1: Brand & Logo */}
          <div className="col-span-1 md:col-span-1">
             <Link aria-label="Homepage" href="/" className="inline-block mb-4">
                {logoIsLocal ? (
                  <Image
                    alt="Bespoke Ethos logo"
                    className="h-auto w-32 logo-no-bg"
                    height={logo.light.height}
                    src={logo.light.url}
                    width={logo.light.width}
                    priority
                  />
                ) : (
                  <DarkLightImageAutoscale priority {...logo} />
                )}
            </Link>
            <p className="text-xs text-slate-700 max-w-xs mt-2 leading-relaxed">
              AI consulting and workflow automation for small businesses.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wide">Nav</h3>
            <ul className="space-y-3">
              {navItems.slice(0, 5).map(({ title, url }) => (
                <li key={title}>
                  <Link href={url} className="text-sm text-slate-700 hover:text-orange-600 hover:underline transition-colors font-medium">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & More */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wide">Company</h3>
            <ul className="space-y-3">
               {navItems.slice(5).map(({ title, url }) => (
                <li key={title}>
                  <Link href={url} className="text-sm text-slate-700 hover:text-orange-600 hover:underline transition-colors font-medium">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Offerings & Social */}
           <div>
            <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wide">Solutions</h3>
            <ul className="space-y-3">
                <li><Link href="/products/cadence" className="text-sm text-slate-700 hover:text-orange-600 hover:underline font-medium">Cadence AI Concierge</Link></li>
                <li><Link href="/solutions/consensus-engine" className="text-sm text-slate-700 hover:text-orange-600 hover:underline font-medium">Consensus Engine</Link></li>
                <li><Link href="/solutions/redbridging" className="text-sm text-slate-700 hover:text-orange-600 hover:underline font-medium">Automation Rescue</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t-2 border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 font-medium">
            {copyright}
          </p>
          <div className="flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity duration-300">
             {/* Simple small badges */}
             <div className="text-[10px] uppercase tracking-wider text-slate-700 font-bold">NGLCC Certified</div>
             <div className="h-3 w-px bg-slate-300"></div>
             <div className="text-[10px] uppercase tracking-wider text-slate-700 font-bold">Catalant Vetted</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export async function Footer() {
  return (
    <FooterLayout
      logo={FALLBACK_LOGO}
      navItems={FALLBACK_NAV_LINKS}
      socialLinks={FALLBACK_SOCIAL_LINKS}
      copyright={FALLBACK_COPYRIGHT}
      showUseTemplate={false}
      logoIsLocal
      backgroundSrc="/assets/generated/footer-wave.svg"
    />
  );
}
