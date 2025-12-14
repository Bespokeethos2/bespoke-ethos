"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "./HeroBackground";
import clsx from "clsx";

/**
 * Homepage Hero Section for Bespoke AI
 * 
 * Features:
 * - "Promised Land" lifestyle background with brand overlay
 * - Clear value prop headline
 * - Single CTA for max conversion
 * - Social proof strip
 */
export function HomepageHero({ className }: { className?: string }) {
  return (
    <HeroBackground
      imageSrc="/hero-freedom.jpg"
      imageAlt="Business owner enjoying freedom and extra time"
      overlay="gradient"
      overlayOpacity={50}
      className={clsx("min-h-[90vh] flex items-center", className)}
    >
      <div className="container mx-auto px-6 py-20 text-center">
        {/* Main headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get your weekends back.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Bespoke AI automates the tedious stuff so you can focus on what actually matters.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/contact"
            className={clsx(
              "inline-flex items-center justify-center",
              "px-8 py-4 text-lg font-semibold",
              "bg-emerald-500 text-white rounded-full",
              "shadow-lg shadow-emerald-500/30",
              "hover:bg-emerald-400 hover:shadow-emerald-400/40 hover:scale-105",
              "transition-all duration-300",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            )}
          >
            Book a Free Consult
          </Link>
          <p className="mt-4 text-sm text-white/60">
            No obligation. 15 minutes could save you 15 hours a week.
          </p>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm uppercase tracking-wider text-white/50 mb-4">
            Trusted by businesses who value their time
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Client logos would go here - placeholder for now */}
            <span className="text-white/70 font-semibold">500+ hours saved</span>
            <span className="text-white/40">•</span>
            <span className="text-white/70 font-semibold">50+ businesses automated</span>
            <span className="text-white/40">•</span>
            <span className="text-white/70 font-semibold">Cleveland, OH</span>
          </div>
        </motion.div>
      </div>
    </HeroBackground>
  );
}

export default HomepageHero;
