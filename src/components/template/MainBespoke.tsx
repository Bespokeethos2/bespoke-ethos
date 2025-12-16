"use client";

import React from 'react';
import Image from 'next/image';
import { ButtonLink } from '@/common/button';
import { CapabilitiesBento } from '@/components/ui/capabilities-bento';
import { TrustCredentials } from '@/app/_sections/trust-credentials';
import { FounderStory } from '@/app/_sections/founder-story';
import { AutomationOpportunityScan } from '@/components/AutomationOpportunityScan';
import { ConsensusEngineCard } from '@/components/ConsensusEngineCard';
import { AI101Modal } from '@/components/ai-explainer/AI101Modal';

interface MainBespokeProps {
  article: string;
  articleTimeout: boolean;
  onCloseArticle: () => void;
  timeout: boolean;
}

export default function MainBespoke({ article, articleTimeout, onCloseArticle, timeout }: MainBespokeProps) {
  const close = (
    <div 
      className="close" 
      onClick={onCloseArticle}
      role="button"
      tabIndex={0}
      aria-label="Close article"
      onKeyDown={(e) => { if(e.key === 'Enter') onCloseArticle() }}
    ></div>
  );

  return (
    <div id="main" style={{ display: timeout ? 'flex' : 'none' }}>

      {/* Solutions Panel (intro) - Capabilities & Services */}
      <article 
        id="intro" 
        className={`${article === 'intro' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} 
        style={{ display: article === 'intro' ? 'block' : 'none' }}
      >
        <h2 className="major">Solutions</h2>
        <span className="image main">
          <Image src="/assets/generated/hero-home.png" alt="AI Automation Solutions" width={800} height={450} className="rounded-lg" />
        </span>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Intelligent Workflows That Work</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              You don&apos;t need another &quot;AI Chatbot.&quot; You need a <strong className="text-orange-200">machine shop</strong>. 
              We build resilient, fixed-price automation workflows with tight tolerances. Approvals on everything. No black boxes. Just relief.
            </p>
          </div>

          {/* Capabilities Bento - Embedded */}
          <div className="capabilities-section">
            <CapabilitiesBento />
          </div>

          <div className="pricing-highlight border-l-4 border-orange-500 pl-6 py-4 bg-slate-800/50 rounded-r-lg">
            <h4 className="text-xl font-bold text-white mb-2">Fixed-Price Builds Starting At</h4>
            <div className="text-4xl font-black text-orange-400 mb-2">$1,497</div>
            <p className="text-sm text-slate-300 mb-4">
              Zero hourly billings. Fixed scope. You own the code and the keys. 
              <span className="block mt-2 text-orange-300 font-semibold">LGBTQ-owned businesses pay $1,122 (25% off).</span>
            </p>
            <div className="flex gap-3">
              <ButtonLink 
                href="/pricing" 
                className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-6 py-2 rounded-full"
              >
                View Pricing
              </ButtonLink>
              <ButtonLink 
                href="/contact" 
                className="bg-white/20 hover:bg-white/30 text-white font-bold px-6 py-2 rounded-full border border-white/40"
              >
                Get Started
              </ButtonLink>
            </div>
          </div>

          <div className="ai-strategy-section">
            <h4 className="text-xl font-bold text-white mb-3">AI Strategy Sprints™</h4>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Don&apos;t guess. We run multi-agent adversarial research sprints to stress-test your strategy before you spend a dime. 
              It&apos;s like having a boardroom of experts in a box.
            </p>
            <ConsensusEngineCard />
          </div>
        </div>
        {close}
      </article>

      {/* Case Studies Panel (work) - Trust Credentials + Testimonials */}
      <article 
        id="work" 
        className={`${article === 'work' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} 
        style={{ display: article === 'work' ? 'block' : 'none' }}
      >
        <h2 className="major">Case Studies</h2>
        <span className="image main">
          <Image src="/assets/generated/badge_nglcc.svg" alt="NGLCC Certified" width={800} height={400} className="rounded-lg" />
        </span>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Real Credentials. Real Experience.</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              We&rsquo;re not just another AI consultant. We&rsquo;re vetted, certified, and battle-tested by enterprise clients and trusted organizations.
            </p>
          </div>

          {/* Trust Credentials */}
          <div className="trust-section">
            <TrustCredentials />
          </div>

          <div className="testimonial border-l-4 border-orange-500 pl-6 py-4 bg-slate-800/50 rounded-r-lg">
            <p className="text-slate-200 italic mb-3 text-lg">
              &quot;Upton helped us automate our entire intake process. We got our weekends back.&quot;
            </p>
            <footer className="text-sm font-bold text-orange-400 uppercase tracking-wide">
              — Sarah & Jen, Cleveland
            </footer>
          </div>

          <div className="cta-section">
            <h4 className="text-xl font-bold text-white mb-3">Ready to See Results?</h4>
            <p className="text-slate-300 mb-4">
              Join the growing list of businesses that have automated their workflows and reclaimed their time.
            </p>
            <ButtonLink 
              href="/contact" 
              className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-3 rounded-full inline-block"
            >
              Book a Strategy Call
            </ButtonLink>
          </div>
        </div>
        {close}
      </article>

      {/* About Panel - Founder Story */}
      <article 
        id="about" 
        className={`${article === 'about' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} 
        style={{ display: article === 'about' ? 'block' : 'none' }}
      >
        <h2 className="major">About</h2>
        <span className="image main">
          <Image src="/founder-upton-rand.jpg" alt="Upton Rand, Founder" width={800} height={600} className="rounded-lg" />
        </span>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">It&apos;s not about the model. It&apos;s about the tolerance.</h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I&apos;m <strong className="text-white">Upton Rand</strong>. I spent 5 years training these models back when they were just research papers. 
                Here is the honest truth: <strong className="text-white">AI is messy.</strong> It hallucinates. It drifts. It forgets.
              </p>
              <p>
                Most consultants try to sell you a &quot;magic button.&quot; I sell you a <strong className="text-white">machine shop</strong>. 
                We build workflows that handle the messiness. We engineer the{" "}
                <AI101Modal explainerKey="humanInLoop" triggerText="approvals" className="text-sm font-medium text-orange-400 underline" />, the rollbacks, and the audit trails. 
                We treat AI like high-voltage wiring: powerful, essential, and dangerous if not grounded properly.
              </p>
            </div>
          </div>

          {/* Founder Story Component */}
          <div className="founder-story-section">
            <FounderStory />
          </div>

          <div className="mission border-l-4 border-orange-500 pl-6 py-4 bg-slate-800/50 rounded-r-lg">
            <h4 className="text-xl font-bold text-white mb-3">We Lift As We Climb</h4>
            <p className="text-slate-300 mb-3">
              As an NGLCC-certified business, we know the hustle. We reserve grant slots and offer a 
              permanent <span className="text-orange-400 font-semibold">25% discount</span> for LGBTQ-owned businesses.
            </p>
            <p className="text-sm text-slate-400 italic">
              Starting a business as a minority is hard as hell. I know—I&rsquo;ve been there. That&rsquo;s why LGBTQ-owned businesses get 25% off. No hoops, no fine print. Just mention it when you reach out.
            </p>
          </div>
        </div>
        {close}
      </article>

      {/* Contact Panel - Booking CTA + Opportunity Scan */}
      <article 
        id="contact" 
        className={`${article === 'contact' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} 
        style={{ display: article === 'contact' ? 'block' : 'none' }}
      >
        <h2 className="major">Get Started</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Let&apos;s Build Your Workflow</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Stop paying for slide decks. Start building workflows that actually work. 
              We&apos;ll scope your project, build it, deploy it, and hand you the keys.
            </p>
          </div>

          {/* AI Automation Opportunity Scan */}
          <div className="opportunity-scan-section">
            <h4 className="text-xl font-bold text-white mb-4">Discover Your Automation Opportunities</h4>
            <p className="text-slate-300 mb-4">
              Take our free AI Automation Opportunity Scan to see what workflows we can automate for you.
            </p>
            <AutomationOpportunityScan />
          </div>

          <div className="contact-options grid md:grid-cols-2 gap-6 mt-8">
            <div className="contact-card bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h5 className="text-lg font-bold text-white mb-3">Book a Strategy Call</h5>
              <p className="text-slate-300 mb-4 text-sm">
                Schedule a free 30-minute consultation to discuss your automation needs.
              </p>
              <ButtonLink 
                href="/contact" 
                className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-6 py-2 rounded-full inline-block w-full text-center"
              >
                Book Now
              </ButtonLink>
            </div>

            <div className="contact-card bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h5 className="text-lg font-bold text-white mb-3">Email Us</h5>
              <p className="text-slate-300 mb-4 text-sm">
                Have a quick question? Send us an email and we&apos;ll respond within 24 hours.
              </p>
              <a 
                href="mailto:hello@bespokeethos.com" 
                className="bg-slate-700 hover:bg-slate-600 text-white font-bold px-6 py-2 rounded-full inline-block w-full text-center"
              >
                hello@bespokeethos.com
              </a>
            </div>
          </div>

          <div className="guarantee border-l-4 border-orange-500 pl-6 py-4 bg-slate-800/50 rounded-r-lg mt-8">
            <h4 className="text-xl font-bold text-white mb-2">90-Day &quot;Break It, We Fix It&quot; Warranty</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">✓</span>
                <span>Zero hourly billings. Fixed scope.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">✓</span>
                <span>You own the code and the keys.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">✓</span>
                <span>Founder-led. No junior associates.</span>
              </li>
            </ul>
          </div>
        </div>
        {close}
      </article>

    </div>
  );
}
