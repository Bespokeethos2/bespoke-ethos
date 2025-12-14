"use client";

import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface HeroBackgroundProps {
  imageSrc: string;
  imageAlt?: string;
  /**
   * Overlay color scheme options
   * - 'emerald': Emerald tint (brand accent)
   * - 'navy': Navy/dark blue brand tint
   * - 'warm': Warm amber/orange tint
   * - 'neutral': Neutral dark overlay
   * - 'gradient': Navy to emerald gradient
   */
  overlay?: 'emerald' | 'navy' | 'warm' | 'neutral' | 'gradient';
  /**
   * Overlay opacity (0-100)
   */
  overlayOpacity?: number;
  children?: React.ReactNode;
  className?: string;
  priority?: boolean;
}

/**
 * Hero Background Component with Brand Color Overlays
 * 
 * Wraps lifestyle/freedom imagery with on-brand color filters
 * that maintain authentic feel while matching site aesthetics.
 */
export function HeroBackground({
  imageSrc,
  imageAlt = "",
  overlay = "gradient",
  overlayOpacity = 60,
  children,
  className,
  priority = true,
}: HeroBackgroundProps) {
  const overlayClasses: Record<string, string> = {
    emerald: "bg-emerald-900",
    navy: "bg-slate-900",
    warm: "bg-amber-900",
    neutral: "bg-black",
    gradient: "bg-gradient-to-br from-slate-900 via-slate-900/80 to-emerald-900/40",
  };

  return (
    <div className={clsx("relative overflow-hidden", className)}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={priority}
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Color Overlay Filter */}
      <div
        className={clsx(
          "absolute inset-0 mix-blend-multiply",
          overlayClasses[overlay]
        )}
        style={{ opacity: overlayOpacity / 100 }}
      />

      {/* Additional gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/30" />

      {/* Vignette effect for premium feel */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(15, 23, 42, 0.4) 100%)',
        }}
      />

      {/* Content */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
}

/**
 * Pre-configured hero sections with common overlays
 */

export function FreedomHero({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <HeroBackground
      imageSrc="/hero-freedom.jpg"
      imageAlt="Business owner enjoying freedom and extra time - the outcome of AI automation"
      overlay="gradient"
      overlayOpacity={50}
      className={clsx("min-h-[70vh]", className)}
    >
      {children}
    </HeroBackground>
  );
}

export function WarmHero({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <HeroBackground
      imageSrc="/hero-freedom.jpg"
      imageAlt="Golden hour moment of peace and freedom"
      overlay="warm"
      overlayOpacity={45}
      className={clsx("min-h-[70vh]", className)}
    >
      {children}
    </HeroBackground>
  );
}

export default HeroBackground;
