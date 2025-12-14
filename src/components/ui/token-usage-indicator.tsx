"use client";

import * as React from "react";
import { useTokenUsage } from "@/context/TokenUsageContext";
import { cn } from "@/lib/utils";
import { ActivityLogIcon, LightningBoltIcon } from "@radix-ui/react-icons";

interface TokenUsageIndicatorProps {
  className?: string;
}

export function TokenUsageIndicator({ className }: TokenUsageIndicatorProps) {
  const { usage, compactContext, isCompacting } = useTokenUsage();

  const percentage = Math.min(
    (usage.total_tokens / usage.context_window_limit) * 100,
    100
  );

  // Determine color based on usage
  const getColor = () => {
    if (percentage > 80) return "text-red-500";
    if (percentage > 50) return "text-yellow-500";
    return "text-green-500";
  };

  return (
    <div
      className={cn(
        "flex items-center gap-2 text-xs font-mono cursor-pointer hover:bg-muted/50 p-1.5 rounded transition-colors group",
        className
      )}
      onClick={compactContext}
      title="Click to compact context window"
    >
      <div className="relative">
        {isCompacting ? (
           <LightningBoltIcon className="w-4 h-4 text-yellow-400 animate-pulse" />
        ) : (
           <ActivityLogIcon className={cn("w-4 h-4 transition-colors", getColor())} />
        )}
      </div>
      
      <span className="hidden group-hover:inline-block whitespace-nowrap">
        {usage.total_tokens.toLocaleString()} / {(usage.context_window_limit / 1000).toFixed(0)}k
      </span>
      
      {/* Progress Bar Background */}
      <div 
        className="absolute bottom-0 left-0 h-0.5 bg-current opacity-20 transition-all duration-500"
        style={{ width: `${percentage}%`, color: 'currentColor' }} 
      />
    </div>
  );
}
