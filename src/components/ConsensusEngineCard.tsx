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
        "relative mx-auto my-20 max-w-5xl overflow-hidden rounded-2xl bg-linear-to-br from-slate-50 to-slate-100 shadow-xl dark:from-slate-800 dark:to-slate-900",
        className,
      )}
    >
      {/* Proprietary Badge */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
        <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/60 bg-[color:var(--navy-primary)] text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-black/30 whitespace-nowrap">
          PROPRIETARY
        </span>
      </div>

      {/* Header */}
      <div className="p-8 md:p-12 lg:p-14">
        <div className="mb-8 grid w-full items-center gap-6 text-center md:grid-cols-[auto,1fr]">
          {/* 4-agent grid image (kept as a card, not a hero) */}
          <div className="mx-auto rounded-3xl border border-white/60 bg-white/40 p-3 shadow-[0_40px_80px_rgba(15,23,42,0.4)] backdrop-blur-xl">
            <Image
              src="/assets/consensus-infographic.png"
              alt="Four research lenses inside the Consensus Engine-copy, finance, legal, and future modeling-converging into one brief"
              width={300}
              height={200}
              className="h-[200px] w-[300px] object-contain"
              sizes="(max-width: 640px) 90vw, 300px"
              priority={false}
            />
          </div>

          <div className="flex flex-col items-center gap-4 md:justify-center">
            <div className="max-w-xl text-center">
              <h2
                id="consensus-engine-heading"
                className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white pr-12 sm:pr-0"
              >
                Consensus Engine  Your AI Strategy Sprint
              </h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-300">
                Exclusive to Bespoke Ethos clients
              </p>
              <p className="mt-3 text-base text-slate-700 dark:text-slate-200">
                Meet the four fine-tuned researchers that cross-verify 1,000+ sources before you ever see a
                recommendation.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                4 AI Agents
              </span>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                1000+ Sources
              </span>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                Superhuman Speed
              </span>
            </div>
          </div>
        </div>

        {/* Simplified Value Prop */}
        <div className="mb-8 rounded-xl border border-orange-200 bg-orange-50/80 p-6 shadow-[0_30px_80px_rgba(249,115,22,0.35)] backdrop-blur-md dark:border-orange-700 dark:bg-orange-900/25">
          <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Got a big question? Get real answers.
          </p>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              Our proprietary research sprint analyzes <strong>1000+ sources</strong> at superhuman speed—SEC filings,
              patents, journals, tax regulations, and more—then delivers one actionable brief with citations.
            </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-600 dark:text-slate-400">
            <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full font-semibold">
              4 Specialized AI Agents
            </span>
            <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full font-semibold">
              Live Web Search
            </span>
            <span className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full font-semibold">
              Deep Archives
            </span>
          </div>
        </div>

        {/* Simple 3-Step Process */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
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
              className="relative text-center rounded-2xl border border-white/60 bg-white/80 p-6 shadow-lg backdrop-blur-md dark:border-slate-700/70 dark:bg-slate-900/60 group"
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
                  className="w-20 h-20 rounded-full flex items-center justify-center text-slate-900 text-4xl font-bold mx-auto mb-4 bg-linear-to-br from-orange-400 via-orange-500 to-amber-300 border border-white/70 shadow-[0_0_20px_rgba(249,115,22,0.45)]"
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
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-lg text-slate-600 dark:text-slate-300">
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
          className="text-orange-500 font-semibold hover:underline mb-6 flex items-center gap-2 mx-auto"
          aria-expanded={isExpanded ? "true" : "false"}
          aria-controls="consensus-agents-panel"
        >
          {isExpanded ? "Hide the 4 AI Agents" : "See the 4 AI Agents"}
        </button>

        {isExpanded && (
          <div
            id="consensus-agents-panel"
            className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 border border-slate-200 dark:border-slate-700"
            role="region"
            aria-label="Details about the four Consensus Engine research agents"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h5 className="font-bold mb-1">Clarice</h5>
                <p className="text-sm text-slate-600 dark:text-slate-300">Copy &amp; narrative lens</p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h5 className="font-bold mb-1">Brutus</h5>
                <p className="text-sm text-slate-600 dark:text-slate-300">Finance &amp; numbers lens</p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h5 className="font-bold mb-1">Astrid</h5>
                <p className="text-sm text-slate-600 dark:text-slate-300">Legal, tax, &amp; compliance lens</p>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <h5 className="font-bold mb-1">Ember</h5>
                <p className="text-sm text-slate-600 dark:text-slate-300">Future modeling &amp; predictive lens</p>
              </div>
            </div>
          </div>
        )}

        {/* Offer Callout */}
        <div className="text-center mb-8 p-8 bg-linear-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl border-2 border-orange-300 dark:border-orange-700">
          <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Free With Your Consultation
          </p>
          <p className="text-xl text-slate-700 dark:text-slate-300 mb-2">
            Every 30-minute consultation includes <strong>one free Consensus Engine brief</strong>
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            (Normally $79.99  Ask any business question)
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a href="#book" className="primary-cta inline-flex px-10 py-4 text-xl font-bold">
            Get Answers  Book Free Consultation
          </a>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            30 minutes  Zero pressure  One free research report
          </p>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="h-2 bg-linear-to-r from-orange-400 via-red-500 to-pink-500" />
    </div>
  );
}
