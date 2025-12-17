"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { SlidersHorizontal, TrendingDown, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence, useAnimation, useMotionValue, useTransform } from "framer-motion";

export function EfficiencyEngine() {
  const [adminLoad, setAdminLoad] = useState(80); // 0-100%
  const [automationLevel, setAutomationLevel] = useState(10); // 0-100%
  
  // Derived values
  const waste = Math.max(0, adminLoad - automationLevel) * 1.5; // Arbitrary units
  const profit = Math.max(10, (100 - waste) * 1.2);
  const efficiency = Math.max(0, 100 - waste);

  // Particles for visual flair
  const controls = useAnimation();

  useEffect(() => {
    if (efficiency > 80) {
      controls.start("success");
    } else {
      controls.start("idle");
    }
  }, [efficiency, controls]);

  return (
    <div className="w-full max-w-3xl mx-auto my-12 perspective-1000">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border-2 border-slate-700/50 shadow-2xl overflow-hidden"
        style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
      >
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500 opacity-80" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-slate-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="p-8 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-bold font-hero-accent text-white flex items-center gap-3">
                <div className="p-2 bg-slate-800 rounded-lg border border-slate-700 shadow-inner">
                   <SlidersHorizontal className="w-6 h-6 text-orange-400" />
                </div>
                Efficiency Engine
              </h3>
              <p className="text-slate-400 mt-1 max-w-sm text-sm leading-relaxed">
                Drag the sliders to see how <span className="text-orange-300 font-medium">Administrative Load</span> kills profit, and how <span className="text-blue-300 font-medium">Automation</span> repairs it.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-slate-900/50 p-3 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                <div className="text-right">
                    <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-0.5">Projected ARR Gain</div>
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={profit}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            className={cn("text-2xl font-mono font-bold flex items-center justify-end gap-2", 
                                profit > 80 ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]" : "text-amber-400"
                            )}
                        >
                            {profit > 80 && <TrendingUp className="w-5 h-5" />}
                            ${Math.floor(profit * 1.5)}k
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            {/* Controls */}
            <div className="md:col-span-7 space-y-8 py-4">
               {/* Slider 1 */}
               <div className="space-y-4">
                 <div className="flex justify-between items-end">
                   <label className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
                     Busywork Volume
                   </label>
                   <span className="text-rose-300 font-mono bg-rose-500/10 px-2 py-1 rounded text-xs border border-rose-500/20">{adminLoad}%</span>
                 </div>
                 <div className="relative group h-6 flex items-center">
                    <div className="absolute w-full h-2 bg-slate-800 rounded-full overflow-hidden shadow-inner border border-slate-700/50">
                        <div className="h-full bg-rose-500/30 w-full" style={{ width: `${adminLoad}%` }}/>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={adminLoad}
                        onChange={(e) => setAdminLoad(Number(e.target.value))}
                        className="w-full h-6 opacity-0 cursor-pointer absolute z-20"
                    />
                    <motion.div 
                        className="absolute h-6 w-6 bg-slate-200 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.5)] border-2 border-rose-500 z-10 pointer-events-none"
                        style={{ left: `calc(${adminLoad}% - 12px)` }}
                        animate={{ scale: 1 }}
                        whileTap={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                 </div>
               </div>

               {/* Slider 2 */}
               <div className="space-y-4">
                 <div className="flex justify-between items-end">
                   <label className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                     Automation Coverage
                   </label>
                   <span className="text-blue-300 font-mono bg-blue-500/10 px-2 py-1 rounded text-xs border border-blue-500/20">{automationLevel}%</span>
                 </div>
                 <div className="relative group h-6 flex items-center">
                    <div className="absolute w-full h-2 bg-slate-800 rounded-full overflow-hidden shadow-inner border border-slate-700/50">
                        <div className="h-full bg-blue-500/30 w-full" style={{ width: `${automationLevel}%` }}/>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={automationLevel}
                        onChange={(e) => setAutomationLevel(Number(e.target.value))}
                        className="w-full h-6 opacity-0 cursor-pointer absolute z-20"
                    />
                     <motion.div 
                        className="absolute h-6 w-6 bg-slate-200 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.5)] border-2 border-blue-500 z-10 pointer-events-none"
                        style={{ left: `calc(${automationLevel}% - 12px)` }}
                        animate={{ scale: 1 }}
                        whileTap={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                 </div>
               </div>
            </div>

            {/* Results Visualization */}
            <div className="md:col-span-5 flex flex-col gap-4">
                <div className="flex-1 bg-slate-800/80 rounded-xl p-4 border border-slate-700/50 relative overflow-hidden flex flex-col justify-center items-center shadow-inner">
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2 z-10">Operational Waste</span>
                    <motion.div 
                        className="text-4xl font-mono relative z-10 flex items-center gap-2"
                        animate={{ color: waste > 50 ? "#f43f5e" : "#e2e8f0" }}
                    >
                        {waste > 50 && <AlertCircle className="w-6 h-6 text-rose-500" />}
                        {Math.floor(waste)}%
                    </motion.div>
                    
                    {/* Liquid fill effect for waste */}
                    <motion.div 
                        className="absolute bottom-0 left-0 right-0 bg-rose-500/10 mix-blend-overlay"
                        animate={{ height: `${waste}%` }}
                        transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                    />
                    {waste > 60 && (
                        <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-20 pointer-events-none mix-blend-overlay" />
                    )}
                </div>

                <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/50 flex flex-col justify-center items-center relative overflow-hidden shadow-inner">
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Efficiency Rating</span>
                    <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-700">
                        <motion.div 
                            className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400"
                            animate={{ width: `${efficiency}%` }}
                            transition={{ type: "spring", stiffness: 100 }}
                        />
                    </div>
                    <div className="mt-2 text-xs font-medium text-emerald-400 flex items-center gap-1">
                        {efficiency > 80 ? "Optimized State" : "Sub-optimal State"}
                        {efficiency > 80 && <CheckCircle2 className="w-3 h-3" />}
                    </div>
                </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 text-center">
             <p className="text-xs text-slate-500 font-medium">
                Scenario: {efficiency > 80 
                    ? <span className="text-emerald-400">High Automation / Low Manual Drag</span> 
                    : waste > 60 
                        ? <span className="text-rose-400">Wait, you're lighting money on fire.</span> 
                        : "Typical Small Business Plateau"}
             </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
