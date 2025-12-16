
import { cn } from "@/lib/utils";
import React from "react";

interface PremiumContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "glass" | "obsidian" | "neon";
  intensity?: "low" | "medium" | "high";
}

export function PremiumContainer({
  children,
  className,
  variant = "glass",
  intensity = "medium",
  ...props
}: PremiumContainerProps) {
  const baseStyles = "relative overflow-visible rounded-2xl transition-all duration-500 ease-out";
  
  const variants = {
    glass: "border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-[0_12px_48px_0_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.05)] hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(249,115,22,0.3),0_16px_56px_-8px_rgba(220,38,38,0.4)]",
    obsidian: "border border-white/5 bg-black/40 backdrop-blur-md shadow-[0_8px_40px_0_rgba(0,0,0,0.5)] hover:border-white/10 hover:shadow-[0_12px_56px_0_rgba(0,0,0,0.6)]",
    neon: "border border-orange-500/20 bg-slate-950/80 backdrop-blur-3xl shadow-[0_8px_32px_-3px_rgba(249,115,22,0.15),0_0_0_1px_rgba(249,115,22,0.1)] hover:shadow-[0_12px_48px_-5px_rgba(249,115,22,0.35)] hover:border-orange-500/40"
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {/* Glow Effect Layer */}
      <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 hover:opacity-100 pointer-events-none">
        <div className="absolute -inset-[100%] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1)_0%,transparent_50%)]" />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Shine Line */}
      <div 
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50"
        aria-hidden="true"
      />
    </div>
  );
}
