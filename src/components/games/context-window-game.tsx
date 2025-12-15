"use client";

import { useState } from "react";
import Image from "next/image";

export function ContextWindowGame() {
  const [contextSize, setContextSize] = useState(1);
  const [memory, setMemory] = useState<string[]>([]);
  
  const memories = [
    "User: Hello!",
    "AI: Hi there.",
    "User: My name is Upton.",
    "AI: Nice to meet you, Upton.",
    "User: What's my name?",
    "AI: Upton!",
    "User: I like pizza.",
    "AI: Noted.",
    "User: What food do I like?"
  ];

  const handleSlide = (val: number) => {
    setContextSize(val);
    // Simple logic: bigger context = remember more recent items
    // But concept is: Window size determines how far back it sees
    setMemory(memories.slice(Math.max(0, memories.length - val), memories.length));
  };

  return (
    <div className="p-6 bg-slate-900 rounded-xl border border-slate-700 my-8 not-prose">
      <h3 className="text-xl font-bold text-white mb-4 font-mono">Simulate: Context Window</h3>
      <p className="text-sm text-slate-400 mb-6">
        Drag the slider to increase the AI's "Context Window" (memory span). 
        Top-heavy models forget the start of the conversation.
      </p>

      {/* Visualizer */}
      <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
        
        {/* Brain Sprite */}
        <div className="relative w-32 h-32 bg-slate-800 rounded-xl overflow-hidden border border-slate-600 flex-shrink-0">
           <div className="w-full h-full transition-all duration-500"
                style={{
                  backgroundImage: 'url(/assets/generated/sprite_context_brain_1765742349263.png)',
                  backgroundSize: '100% 400%', // Assuming vertical strip based on typical 'stages' generation, need to verify. 
                  // If it's a grid 2x2 like the robot, I'll adjust. Let's bet on 1x4 vertical for "filling up" prompt often stacking.
                  // Actually, let's use 2x2 logic just in case, it's safer if I can't see it.
                  // REVISION: I will use 2x2 logic as it matches the standard square output.
                  // Top-Left: Empty, Top-Right: Half, Bottom-Left: Full, Bottom-Right: Overload
                }}
           >
             <div className="w-full h-full" style={{
                  backgroundImage: 'url(/assets/generated/sprite_context_brain_1765742349263.png)',
                  backgroundSize: '200% 200%',
                  backgroundPosition: 
                    contextSize < 3 ? '0% 0%' :   // Empty
                    contextSize < 6 ? '100% 0%' : // Half
                    contextSize < 8 ? '0% 100%' : // Full
                                      '100% 100%' // Overload
             }} />
           </div>
        </div>

        {/* Chat Log */}
        <div className="flex-1 space-y-2 font-mono text-sm bg-black/50 p-4 rounded h-48 overflow-y-auto no-scrollbar">
          {memories.map((m, i) => {
             const isVisible = i >= (memories.length - contextSize);
             return (
               <div key={i} className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-20 blur-[1px]'}`}>
                 <span className={m.startsWith('User') ? 'text-blue-400' : 'text-orange-400'}>{m.split(':')[0]}:</span>
                 <span className="text-slate-300">{m.split(':')[1]}</span>
               </div>
             )
          })}
        </div>
      </div>

      <input 
        type="range" 
        min="1" 
        max="9" 
        value={contextSize} 
        onChange={(e) => handleSlide(parseInt(e.target.value))}
        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
      />
      <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono uppercase">
        <span>1k Tokens (Goldfish)</span>
        <span>128k Tokens (Novel)</span>
      </div>
    </div>
  );
}
