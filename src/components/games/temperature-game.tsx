"use client";

import { useState } from "react";

export function TemperatureGame() {
  const [temp, setTemp] = useState(0.2);
  
  const generateText = (t: number) => {
    if (t < 0.3) return "The cat sat on the mat. The cat is nice. The mat is soft."; // Repetitive
    if (t < 0.7) return "The cat sprawled across the velvet rug, purring softly as the sun went down."; // Creative/Good
    if (t < 0.9) return "The velvet rug purred at the sun, demanding lasagne from the sky."; // Mild Hallucination
    return "Rug sun purple cat dimension 404 meow glitch_matrix[0]."; // Chaos
  };
  const output = generateText(temp);

  return (
    <div className="p-6 bg-slate-900 rounded-xl border border-slate-700 my-8 not-prose font-sans">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white font-hero-accent">Temperature Dial</h3>
        <div className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded">
          Temp: {temp.toFixed(1)}
        </div>
      </div>
      
      <p className="text-sm text-slate-400 mb-6">
        &ldquo;Temperature&rdquo; controls randomness. Low is safe but boring. High is creative but risky.
      </p>

      {/* Visualizer Row */}
      <div className="flex flex-col sm:flex-row gap-6 items-center">
        
        {/* Robot Face Sprite */}
        <div className="relative w-32 h-32 bg-slate-800 rounded-xl overflow-hidden border-2 border-slate-700 transition-colors duration-500"
             style={{ borderColor: temp > 0.8 ? '#ef4444' : temp > 0.5 ? '#f97316' : '#3b82f6' }}>
           
           <div className="w-full h-full transition-all duration-300"
                style={{
                  backgroundImage: 'url(/assets/generated/sprite_robot_emotions_1765742362335.png)',
                  backgroundSize: '200% 200%',
                  backgroundPosition: 
                    temp < 0.3 ? '0% 0%' :   // Neutral
                    temp < 0.7 ? '100% 0%' : // Focused
                    temp < 0.9 ? '0% 100%' : // Creative
                                 '100% 100%' // Glitch
                }}
           />
        </div>

        {/* Output Text */}
        <div className="flex-1 p-4 bg-black/50 rounded-lg min-h-[100px] flex items-center">
           <p className={`font-mono text-sm transition-all duration-300 ${temp > 0.9 ? 'text-red-400 font-bold tracking-widest' : 'text-slate-300'}`}>
             &ldquo;{output}&rdquo;
           </p>
        </div>
      </div>

      {/* Slider */}
      <div className="mt-8">
        <input 
          type="range" 
          min="0" 
          max="1.5" 
          step="0.1"
          value={temp} 
          onChange={(e) => setTemp(parseFloat(e.target.value))}
          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
        />
        <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono uppercase">
          <span>0.0 (Robotic)</span>
          <span>0.7 (Creative)</span>
          <span>1.5 (Hallucination)</span>
        </div>
      </div>
    </div>
  );
}
