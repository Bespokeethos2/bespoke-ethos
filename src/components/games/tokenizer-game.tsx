"use client";

import { useState, useMemo } from "react";

export function TokenizerGame() {
  const [input, setInput] = useState("AI automation saves time.");
  
  // Mock tokenizer logic (splitting by space/punctuation/common subwords for demo)
  const tokens = useMemo(() => {
    // This is a fake visualizer. Real tokenizers are complex.
    // We'll just split by spaces and some chunks to show the "subword" concept.
    const words = input.match(/(\w+|\s+|[^\w\s])/g) || [];
    return words.map((w, i) => ({ id: i, text: w, color: i % 2 === 0 ? 'bg-blue-500/20 text-blue-200' : 'bg-orange-500/20 text-orange-200' }));
  }, [input]);

  const tokenCount = tokens.length;
  // Approx cost calculation (mock)
  const cost = (tokenCount * 0.00000015).toFixed(8); 

  return (
    <div className="p-6 bg-slate-950 rounded-xl border border-slate-800 my-8 not-prose font-sans">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white font-hero-accent">The Tokenizer Slicer</h3>
        <div className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded">
          {tokenCount} tokens • ${cost}
        </div>
      </div>
      
      <p className="text-sm text-slate-400 mb-6">
        AI doesn&apos;t read words. It reads &ldquo;tokens&rdquo; (chunks of characters).
        Type below to see how the machine slices your text.
      </p>

      {/* Input */}
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full text-lg p-4 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors resize-none mb-6"
        rows={3}
      />

      {/* Visualizer */}
      <div className="flex flex-wrap gap-1 p-4 bg-black/50 rounded-lg min-h-[100px] content-start font-mono text-base">
        {tokens.map((t) => (
          <span 
            key={t.id} 
            className={`px-1.5 py-0.5 rounded border border-white/5 ${t.color} hover:brightness-110 transition-all cursor-default`}
            title={`Token ID: ${1000 + t.id}`}
          >
            {t.text === ' ' ? '·' : t.text}
          </span>
        ))}
      </div>
      
      <div className="mt-4 flex gap-4 text-xs text-slate-600">
         <div className="flex items-center gap-2">
           <div className="w-3 h-3 bg-blue-500/20 rounded border border-blue-500/50"></div>
           Token A
         </div>
         <div className="flex items-center gap-2">
           <div className="w-3 h-3 bg-orange-500/20 rounded border border-orange-500/50"></div>
           Token B
         </div>
      </div>
    </div>
  );
}
