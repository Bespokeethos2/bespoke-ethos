import type { Metadata } from "next";

import { Section } from "@/common/layout";
import { Heading } from "@/common/heading";
import { Breadcrumbs } from "@/app/_components/seo/breadcrumbs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Privacy Policy | Bespoke Ethos",
  description: "How Bespoke Ethos protects your data, what we collect, and your rights. Plain English privacy policy for small business owners.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <main className="be-page-slate">
      <Section className="gap-5 -mt-14 md:gap-6 md:-mt-4">
        <div className="be-section-card space-y-6">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]} />
          <Heading align="left" subtitle="How we handle your information">
            <h1 className="font-hero-accent">Privacy Policy</h1>
          </Heading>

          <div className="prose max-w-none text-sm text-text-secondary dark:prose-invert dark:text-dark-text-secondary space-y-6">
            {/* Quick Summary */}
            <div className="rounded-lg border border-border bg-surface-secondary/50 dark:border-dark-border dark:bg-dark-surface-secondary/50 p-4">
              <h2 className="text-base font-semibold text-text-primary dark:text-dark-text-primary mb-2">
                The Short Version
              </h2>
              <p className="text-sm">
                We collect only what we need to help you. We don&apos;t sell your data. We use industry-standard security. You can ask us to delete your information anytime. This policy is written in plain English—no legal jargon.
              </p>
            </div>

            {/* 1. What Information We Collect */}
            <section>
              <h2 className="text-base font-semibold text-text-primary dark:text-dark-text-primary mb-3">
                1. What Information We Collect
              </h2>
              
              <h3 className="text-sm font-semibold text-text-primary dark:text-dark-text-primary mt-4 mb-2">
                Information You Give Us
              </h3>
              <p>
                When you contact us through our website, email, or schedule a consultation, we collect:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your name and email address</li>
                <li>Your company name and phone number (if provided)</li>
                <li>Details about your project or question</li>
                <li>Any files or documents you share with us</li>
              </ul>

              <h3 className="text-sm font-semibold text-text-primary dark:text-dark-text-primary mt-4 mb-2">
                Information We Collect Automatically
              </h3>
              <p>
                When you visit our website, we automatically collect:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Technical data:</strong> Your IP address, browser type, device type, and operating system</li>
                <li><strong>Usage data:</strong> Which pages you visit, how long you stay, and what you click on</li>
                <li><strong>Cookies:</strong> Small files that help us remember you and improve your experience</li>
              </ul>
              <p className="text-xs text-text-secondary dark:text-dark-text-secondary mt-2">
                We use this information to understand how people use our site, fix problems, and make improvements. We do not use it to track you across other websites.
              </p>
            </section>

            {/* 2. Why We Collect This Information */}
            <section>
              <h2 className="text-base font-semibold text-text-primary dark:text-dark-text-primary mb-3">
                2. Why We Collect This Information
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>To respond to your inquiries:</strong> We need your contact information to get back to you</li>
                <li><strong>To prevent spam:</strong> We use technical data to block malicious activity and protect our site</li>
                <li><strong>To improve our website:</strong> We analyze how visitors use our site to make it better</li>
                <li><strong>To send you updates:</strong> If you opt in, we&apos;ll send you news about our services (you can unsubscribe anytime)</li>
                <li><strong>To comply with the law:</strong> We keep records as required by tax and business regulations</li>
              </ul>
            </section>

            {/* 3. Who We Share Your Information With */}
            <section>
              <h2 className="text-base font-semibold text-text-primary dark:text-dark-text-primary mb-3">
                3. Who We Share Your Information With
              </h2>
              
              <p>
                <strong>We do not sell your data.</strong> We do not share your personal information with third parties for marketing purposes.
              </p>

              <p className="mt-3">
                We do use trusted third-party services to run our business. These companies process your data on our behalf and are bound by strict confidentiality agreements:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Email and communication tools:</strong> We use Resend and similar services to send you emails</li>
                <li><strong>Analytics:</strong> We use Vercel Analytics to understand how people use our site</li>
                <li><strong>Spam protection:</strong> We use security tools to block malicious activity</li>
                <li><strong>Form hosting:</strong> If you use our contact forms, they may be processed by our form provider</li>
                <li><strong>Cloud hosting:</strong> Our website is hosted on Vercel, which stores your data securely</li>
              </ul>

              <p className="text-xs text-text-secondary dark:text-dark-text-secondary mt-3">
                All of these services have their own privacy policies. We&apos;ve chosen them because they meet high security and privacy standards.
              </p>
            </section>

            {/* 4. How Long We Keep Your Information */}
            <section>
              <h2 className="text-base font-semibold text-text-primary dark:text-dark-text-primary mb-3">
                4. How Long We Keep Your Information
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Contact form submissions:</strong> We keep these for 2 years to follow up on opportunities and for record-keeping</li>
                <li><strong>Email communications:</strong> We keep your email address as long as you&apos;re subscribed to our updates</li>
                <li><strong>Website analytics:</strong> We keep usage data for up to 1 year</li>
                <li><strong>Cookies:</strong> Most expire after 1 year, but you can clear them anytime</li>
              </ul>
              <p className="text-xs text-text-secondary dark:text-dark-text-secondary mt-3">
                If you ask us to delete your information, we&apos;ll remove it within 30 days (except where we&apos;re required by law to keep it).
              </p>
            </section>

            {/* 5. Your Rights */}
            <section>
              <h2 className="text-base font-semibold text-text-primary dark:text-dark-text-primary mb-3">
                5. Your Rights
              </h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Access:</strong> Ask us what information we have about you</li>
                <li><strong>Correct:</strong> Ask us to fix any information that&apos;s wrong</li>
                <li><strong>Delete:</strong> Ask us to delete your information (we&apos;ll do this within 30 days)</li>
                <li><strong>Opt out:</strong> Unsubscribe from our emails anytime by clicking the link at the bottom of any email</li>
                <li><strong>Opt out of cookies:</strong> Adjust your browser settings to reject cookies (though some features may not work as well)</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email us at <a href="mailto:contact@bespokeethos.com" className="text-accent-600 hover:underline">contact@bespokeethos.com</a> with your request. We&apos;ll respond within 30 days.
              </p>
            </section>

            {/* 6. Security */}
            <section>
              <h2 className="text-base font-semibold text-text-primary dark:text-dark-text-primary mb-3">
                6. How We Protect Your Information
              </h2>
              <p>
                We take security seriously. Here&apos;s what we do:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>We use HTTPS encryption on our website (look for the padlock in your browser)</li>
                <li>We store data on secure servers with firewalls and regular security updates</li>
                <li>We limit access to your information to only the people who need it</li>
                <li>We use industry-standard security tools to detect and prevent attacks</li>
              </ul>
              <p className="text-xs text-text-secondary dark:text-dark-text-secondary mt-3">
                No system is 100% secure, but we work hard to keep your data safe. If we discover a security breach, we&apos;ll notify you as soon as possible.
              </p>
            </section>

            {/* 7. Cookies and Tracking */}
            <section>
              <h2 className="text-base font-semibold text-text-primary dark:text-dark-text-primary mb-3">
                7. Cookies and Tracking
              </h2>
              <p>
                A cookie is a small file that your browser stores on your device. We use cookies to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Remember your preferences (like dark mode)</li>
                <li>Keep you logged in if you have an account</li>
                <li>Understand how people use our site</li>
              </ul>
              <p className="mt-3">
                <strong>You can control cookies:</strong> Most browsers let you reject cookies or delete them. You can also use privacy extensions. If you disable cookies, some features may not work properly.
              </p>
              <p className="text-xs text-text-secondary dark:text-dark-text-secondary mt-3">
                We do not use tracking pixels, retargeting ads, or cross-site tracking. We respect your privacy and don&apos;t follow you around the internet.
              </p>
            </section>

            {/* 8. Third-Party Links */}
            <section>
              <h2 className="text-base font-semibold text-text-primary dark:text-dark-text-primary mb-3">
                8. Links to Other Websites
              </h2>
              <p>
                Our website may contain links to other sites. We&apos;re not responsible for their privacy practices. If you click a link to another website, read their privacy policy—it may be different from ours.
              </p>
            </section>

            {/* 9. Children&apos;s Privacy */}
            <section>
              <h2 className="text-base font-semibold text-text-primary dark:text-dark-text-primary mb-3">
                9. Children&apos;s Privacy
              </h2>
              <p>
                Our website is not intended for children under 13. We do not knowingly collect information from children. If we discover we&apos;ve collected data from a child, we&apos;ll delete it immediately. If you believe we have, please contact us at <a href="mailto:contact@bespokeethos.com" className="text-accent-600 hover:underline">contact@bespokeethos.com</a>.
              </p>
            </section>

            {/* 10. California and EU Privacy Rights */}
            <section>
              <h2 className="text-base font-semibold text-text-primary dark:text-dark-text-primary mb-3">
                10. Your Privacy Rights by Location
              </h2>
              
              <h3 className="text-sm font-semibold text-text-primary dark:text-dark-text-primary mt-4 mb-2">
                California Residents (CCPA)
              </h3>
              <p>
                If you live in California, you have the right to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Know what personal information we collect</li>
                <li>Know whether we sell your information (we don&apos;t)</li>
                <li>Delete your information</li>
                <li>Opt out of any future sales (not applicable since we don&apos;t sell data)</li>
              </ul>

              <h3 className="text-sm font-semibold text-text-primary dark:text-dark-text-primary mt-4 mb-2">
                European Residents (GDPR)
              </h3>
              <p>
                If you live in the EU, you have the right to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Delete your data (right to be forgotten)</li>
                <li>Restrict how we use your data</li>
                <li>Port your data to another service</li>
                <li>Object to automated decision-making</li>
              </ul>
              <p className="text-xs text-text-secondary dark:text-dark-text-secondary mt-2">
                To exercise these rights, email <a href="mailto:contact@bespokeethos.com" className="text-accent-600 hover:underline">contact@bespokeethos.com</a>.
              </p>
            </section>

            {/* 11. Changes to This Policy */}
            <section>
              <h2 className="text-base font-semibold text-text-primary dark:text-dark-text-primary mb-3">
                11. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this policy from time to time. If we make significant changes, we&apos;ll notify you by email or by posting a notice on our website. Your continued use of our site means you accept the updated policy.
              </p>
              <p className="text-xs text-text-secondary dark:text-dark-text-secondary mt-2">
                Last updated: December 2025
              </p>
            </section>

            {/* 12. Contact Us */}
            <section>
              <h2 className="text-base font-semibold text-text-primary dark:text-dark-text-primary mb-3">
                12. Questions? Get in Touch
              </h2>
              <p>
                If you have questions about this privacy policy or how we handle your data, we&apos;re happy to help. Contact us:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Email:</strong> <a href="mailto:contact@bespokeethos.com" className="text-accent-600 hover:underline">contact@bespokeethos.com</a></li>
                <li><strong>Website:</strong> <a href="https://www.bespokeethos.com" className="text-accent-600 hover:underline">bespokeethos.com</a></li>
              </ul>
              <p className="text-xs text-text-secondary dark:text-dark-text-secondary mt-3">
                We&apos;ll get back to you within 5 business days.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}
