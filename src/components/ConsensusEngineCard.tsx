'use client';

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

export function ConsensusEngineCard({ className }: { className?: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={clsx(
        "relative mx-auto my-8 sm:my-12 md:my-16 lg:my-20 max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-black shadow-2xl border border-white/10",
        className,
      )}
    >
      {/* Proprietary Badge */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
        <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-orange-500/40 bg-orange-950/60 text-xs font-semibold uppercase tracking-[0.18em] text-orange-200 shadow-lg shadow-orange-900/30 whitespace-nowrap backdrop-blur-sm">
          PROPRIETARY
        </span>
      </div>

      {/* Header */}
      <div className="p-6 sm:p-8 md:p-12 lg:p-14">
        <div className="mb-6 sm:mb-8 grid w-full items-center gap-6 text-center md:grid-cols-[auto,1fr]">
          {/* 4-agent grid image (kept as a card, not a hero) */}
          <div className="mx-auto rounded-3xl border border-orange-500/20 bg-slate-900/60 p-3 shadow-[0_8px_32px_rgba(249,115,22,0.3)] backdrop-blur-xl">
            <Image
              src="/assets/consensus-infographic.png"
              alt="Consensus Engine AI Strategy Sprint: Four specialized research agents (copy, finance, legal, and future modeling) analyzing 1000+ sources to deliver one actionable business brief"
              width={300}
              height={300}
              className="h-[160px] sm:h-[200px] w-auto object-contain"
              sizes="(max-width: 640px) 90vw, 300px"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col items-center gap-3 sm:gap-4 md:justify-center">
            <div className="max-w-xl text-center">
              <h2
                id="consensus-engine-heading"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white pr-0 text-glow-crimson"
              >
                Consensus Engine — Your AI Strategy Sprint
              </h2>
              <p className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-orange-400">
                Exclusive to Bespoke Ethos clients
              </p>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-200">
                Meet the four fine-tuned researchers that cross-verify 1,000+ sources before you ever see a
                recommendation.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <span className="rounded-full bg-orange-950/50 border border-orange-500/30 px-3 py-1 text-xs font-semibold text-orange-300 backdrop-blur-sm">
                4 AI Agents
              </span>
              <span className="rounded-full bg-orange-950/50 border border-orange-500/30 px-3 py-1 text-xs font-semibold text-orange-300 backdrop-blur-sm">
                1000+ Sources
              </span>
              <span className="rounded-full bg-orange-950/50 border border-orange-500/30 px-3 py-1 text-xs font-semibold text-orange-300 backdrop-blur-sm">
                Superhuman Speed
              </span>
            </div>
          </div>
        </div>

        {/* Simplified Value Prop */}
        <div className="mb-6 sm:mb-8 rounded-xl border border-orange-500/30 bg-slate-900/60 p-4 sm:p-6 shadow-[0_20px_60px_rgba(249,115,22,0.35)] backdrop-blur-md">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 text-glow-crimson">
            Got a big question? Get real answers.
          </p>
            <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-3 sm:mb-4 leading-relaxed">
              Our proprietary research sprint analyzes <strong className="text-orange-400">1000+ sources</strong> at superhuman speed—SEC filings,
              patents, journals, tax regulations, and more—then delivers one actionable brief with citations.
            </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm text-slate-200">
            <span className="px-3 py-1 bg-slate-800/80 border border-white/10 rounded-full font-semibold">
              4 Specialized AI Agents
            </span>
            <span className="px-3 py-1 bg-slate-800/80 border border-white/10 rounded-full font-semibold">
              Live Web Search
            </span>
            <span className="px-3 py-1 bg-slate-800/80 border border-white/10 rounded-full font-semibold">
              Deep Archives
            </span>
          </div>
        </div>

        {/* Simple 3-Step Process */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {[
            { 
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>,
              title: "You Ask", 
              desc: "Any business question. Pricing, automation, marketing, compliance-anything." 
            },
            { 
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
              title: "We Research", 
              desc: "4 AI agents independently analyze 1000+ sources, then cross-verify findings." 
            },
            { 
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
              title: "You Decide", 
              desc: "Get one cited, actionable report. Make your call with confidence." 
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="relative text-center rounded-2xl border border-orange-500/20 bg-slate-800/60 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect background */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(circle at center, rgba(249, 115, 22, 0.2) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(249, 115, 22, 0.3)",
                    "0 0 40px rgba(249, 115, 22, 0.5)",
                    "0 0 20px rgba(249, 115, 22, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative z-10">
                <motion.div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-slate-900 text-4xl font-bold mx-auto mb-4 bg-gradient-to-br from-orange-400 via-orange-500 to-amber-300 border border-orange-300/50 shadow-[0_0_20px_rgba(249,115,22,0.45)]"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    boxShadow: [
                      "0 0 12px rgba(249, 115, 22, 0.4)",
                      "0 0 26px rgba(249, 115, 22, 0.7)",
                      "0 0 12px rgba(249, 115, 22, 0.4)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-2 text-white text-glow-crimson">{step.title}</h3>
                <p className="text-lg text-slate-300">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expandable Agent Details */}
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="text-orange-400 font-semibold hover:text-orange-300 hover:underline mb-6 flex items-center gap-2 mx-auto transition-colors"
          aria-expanded={isExpanded ? "true" : "false"}
          aria-controls="consensus-agents-panel"
        >
          {isExpanded ? "Hide the 4 AI Agents" : "See the 4 AI Agents"}
        </button>

        {isExpanded && (
          <div
            id="consensus-agents-panel"
            className="bg-slate-900/60 border border-orange-500/20 rounded-lg p-6 mb-8 backdrop-blur-md"
            role="region"
            aria-label="Details about the four Consensus Engine research agents"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-900/30 border border-blue-500/20 rounded-lg">
                <h5 className="font-bold mb-1 text-blue-300">Clarice</h5>
                <p className="text-sm text-slate-300">Copy &amp; narrative lens</p>
              </div>
              <div className="p-4 bg-green-900/30 border border-green-500/20 rounded-lg">
                <h5 className="font-bold mb-1 text-green-300">Brutus</h5>
                <p className="text-sm text-slate-300">Finance &amp; numbers lens</p>
              </div>
              <div className="p-4 bg-purple-900/30 border border-purple-500/20 rounded-lg">
                <h5 className="font-bold mb-1 text-purple-300">Astrid</h5>
                <p className="text-sm text-slate-300">Legal, tax, &amp; compliance lens</p>
              </div>
              <div className="p-4 bg-red-900/30 border border-red-500/20 rounded-lg">
                <h5 className="font-bold mb-1 text-red-300">Ember</h5>
                <p className="text-sm text-slate-300">Future modeling &amp; predictive lens</p>
              </div>
            </div>
          </div>
        )}

        {/* Offer Callout */}
        <div className="text-center mb-6 sm:mb-8 p-6 sm:p-8 bg-gradient-to-r from-orange-950/50 to-red-950/50 rounded-xl border-2 border-orange-500/40 backdrop-blur-sm shadow-[0_0_40px_rgba(249,115,22,0.3)]">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 text-glow-crimson">
            Free With Your Consultation
          </p>
          <p className="text-lg sm:text-xl text-slate-200 mb-2">
            Every 30-minute consultation includes <strong className="text-orange-400">one free Consensus Engine brief</strong>
          </p>
          <p className="text-xs sm:text-sm text-slate-300">
            (Normally $79.99 — Ask any business question)
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a href="#book" className="inline-flex px-8 sm:px-10 py-3 sm:py-4 text-lg sm:text-xl font-bold bg-orange-600 hover:bg-orange-500 text-white rounded-full shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] transition-all">
            Get Answers — Book Free Consultation
          </a>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-300">
            30 minutes • Zero pressure • One free research report
          </p>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="h-2 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500" />
    </div>
  );
}
