
import React from 'react';
import { ActivityLogIcon, LightningBoltIcon } from "@radix-ui/react-icons";

// --- CONTEXT ---
// Copy this into your extension's ContextProvider
/*
export const TokenUsageContext = React.createContext({
  usage: { total_tokens: 0, context_window_limit: 200000 },
  compactContext: () => {},
  isCompacting: false
});
*/

// --- COMPONENT ---
export function TokenUsageIndicator() {
  // Mock hook usage - replace with actual context hook
  const { usage, compactContext, isCompacting } = {
     usage: { total_tokens: 45000, context_window_limit: 200000 },
     compactContext: () => console.log('Compacting...'),
     isCompacting: false
  };

  const percentage = Math.min(
    (usage.total_tokens / usage.context_window_limit) * 100,
    100
  );

  const getColor = () => {
    if (percentage > 80) return "text-red-500";
    if (percentage > 50) return "text-yellow-500";
    return "text-green-500";
  };

  return (
    <div
      className="flex items-center gap-2 text-xs font-mono cursor-pointer hover:bg-zinc-800 p-1.5 rounded transition-colors group text-zinc-400"
      onClick={compactContext}
      title="Click to compact context window"
    >
      <div className="relative">
        {isCompacting ? (
           <LightningBoltIcon className="w-4 h-4 text-yellow-400 animate-pulse" />
        ) : (
           <ActivityLogIcon className={`w-4 h-4 transition-colors ${getColor()}`} />
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
