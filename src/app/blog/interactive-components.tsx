"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

// --- Enframing Checklist Component ---
export function EnframingChecklist() {
  const [items, setItems] = useState([
    {
      question: "Is your connection mediated?",
      warning: "Technology turns the world into a standing reserve (*Bestand*).",
      take: "If you can't feel the heat from their body, it's not a real connection.",
      checked: false,
    },
    {
      question: "Is your happiness an 'optimized output'?",
      warning: "*Eudaimonia* is a virtuous life, not a dopamine hit.",
      take: "Log off the happiness hack. Go share a messy silence with someone.",
      checked: false,
    },
    {
      question: "Are you building digital tribes?",
      warning: "Algorithms profit off isolation by creating echo chambers.",
      take: "Your real tribe is the one you can meet for coffee.",
      checked: false,
    },
  ]);

  const toggleItem = (index: number) => {
    setItems((prevItems) => 
      prevItems.map((item, i) => 
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, idx) => (
        <button
          key={idx}
          onClick={() => toggleItem(idx)}
          className={cn(
            "group flex flex-col sm:flex-row items-start gap-4 p-4 rounded-lg border text-left transition-all duration-200",
            item.checked
              ? "bg-accent-50 border-accent-200 dark:bg-accent-900/10 dark:border-accent-800"
              : "bg-surface-primary border-border hover:border-accent-300 dark:bg-dark-surface-primary dark:border-dark-border dark:hover:border-accent-700"
          )}
        >
          <div className={cn(
            "mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded border transition-colors",
            item.checked
              ? "bg-accent-600 border-accent-600 text-white"
              : "border-gray-400 group-hover:border-accent-500"
          )}>
            {item.checked && (
               <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <div className="space-y-1">
            <h4 className={cn("font-bold text-base", item.checked ? "text-accent-900 dark:text-accent-100" : "text-text-primary dark:text-dark-text-primary")}>
              {item.question}
            </h4>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                <div>
                   <span className="block text-xs uppercase tracking-wide opacity-70 mb-0.5">Heidegger's Warning</span>
                   <p className="italic text-text-secondary dark:text-dark-text-secondary">{item.warning}</p>
                </div>
                <div>
                   <span className="block text-xs uppercase tracking-wide opacity-70 mb-0.5 text-accent-700 dark:text-accent-400">GMFG Take</span>
                   <p className="font-medium text-text-primary dark:text-dark-text-primary">{item.take}</p>
                </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

// --- Optimist/Skeptic Poll Component ---
export function OptimistSkepticPoll() {
  const [vote, setVote] = useState<"optimist" | "skeptic" | null>(null);
  const [counts, setCounts] = useState({ optimist: 124, skeptic: 89 });

  const handleVote = (type: "optimist" | "skeptic") => {
    if (vote) return;
    setVote(type);
    setCounts((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const total = counts.optimist + counts.skeptic;
  const optimistPercent = Math.round((counts.optimist / total) * 100) || 0;
  const skepticPercent = Math.round((counts.skeptic / total) * 100) || 0;

  return (
    <div className="w-full max-w-lg mx-auto">
      {!vote ? (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleVote("optimist")}
            className="flex-1 py-4 px-6 rounded-xl border border-transparent bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-bold transition-transform active:scale-95 shadow-sm"
          >
            I'm an Optimist
            <span className="block text-xs font-normal opacity-80 mt-1">Tech can augment us</span>
          </button>
          <button
            onClick={() => handleVote("skeptic")}
            className="flex-1 py-4 px-6 rounded-xl border border-transparent bg-rose-100 hover:bg-rose-200 text-rose-900 font-bold transition-transform active:scale-95 shadow-sm"
          >
            I'm a Skeptic
            <span className="block text-xs font-normal opacity-80 mt-1">It's a trap</span>
          </button>
        </div>
      ) : (
        <div className="space-y-4 animate-fadeIn">
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-semibold">
              <span className="text-emerald-700">Optimists</span>
              <span className="text-text-secondary">{optimistPercent}%</span>
            </div>
            <div className="h-4 w-full bg-emerald-50 rounded-full overflow-hidden">
              <div style={{ width: `${optimistPercent}%` }} className="h-full bg-emerald-500 transition-all duration-1000 ease-out" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm font-semibold">
              <span className="text-rose-700">Skeptics</span>
              <span className="text-text-secondary">{skepticPercent}%</span>
            </div>
            <div className="h-4 w-full bg-rose-50 rounded-full overflow-hidden">
               <div style={{ width: `${skepticPercent}%` }} className="h-full bg-rose-500 transition-all duration-1000 ease-out" />
            </div>
          </div>
          
          <p className="pt-4 text-center text-sm font-medium text-text-secondary border-t border-border mt-4">
            Thanks for voting! You're with the <span className={vote === 'optimist' ? 'text-emerald-600' : 'text-rose-600'}>{vote === 'optimist' ? 'Optimists' : 'Skeptics'}</span>.
          </p>
        </div>
      )}
    </div>
  );
}
