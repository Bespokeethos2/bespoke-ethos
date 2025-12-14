"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { User, Mail, MessageSquare, Award, MonitorSmartphone, MousePointer2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Particle = {
  id: number;
  x: number;
  y: number;
  value: number;
};

export function LeadGeneratorClicker() {
  const [leads, setLeads] = useState(0);
  const [clickPower, setClickPower] = useState(1);
  const [autoRate, setAutoRate] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  
  // Upgrades
  const [hasEmailAuto, setHasEmailAuto] = useState(false);
  const [hasChatbot, setHasChatbot] = useState(false);

  // Auto-generate leads effect
  useEffect(() => {
    if (autoRate === 0) return;
    const interval = setInterval(() => {
        setLeads((prev) => prev + autoRate);
    }, 1000);
    return () => clearInterval(interval);
  }, [autoRate]);

  const addParticle = (x: number, y: number, val: number) => {
    const id = Date.now();
    setParticles((prev) => [...prev, { id, x, y, value: val }]);
    setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
    }, 1000);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Get click position relative to button
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setLeads((prev) => prev + clickPower);
    addParticle(x, y, clickPower);
  };

  const buyEmailAuto = () => {
    if (leads >= 15 && !hasEmailAuto) {
      setLeads((prev) => prev - 15);
      setHasEmailAuto(true);
      setAutoRate((prev) => prev + 1);
    }
  };

  const buyChatbot = () => {
    if (leads >= 60 && !hasChatbot) {
      setLeads((prev) => prev - 60);
      setHasChatbot(true);
      setAutoRate((prev) => prev + 5);
      setClickPower((prev) => prev + 2);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="w-full max-w-md mx-auto p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden bg-white dark:bg-slate-900"
    >
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-5 pointer-events-none" />
        
        {/* Header */}
        <div className="text-center mb-8 relative z-10">
            <div className="flex items-center justify-center gap-2 text-slate-400 mb-2">
                <MonitorSmartphone className="w-4 h-4" />
                <h3 className="text-xs font-bold uppercase tracking-widest">Lead Gen Simulation</h3>
            </div>
            <motion.div 
                key={leads}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                className="text-6xl font-black text-slate-900 dark:text-white font-mono tabular-nums tracking-tighter"
            >
                {leads}
            </motion.div>
            <p className="text-sm font-medium text-slate-500 mt-2">
                active leads in pipeline
            </p>
        </div>

        {/* Main Interaction */}
        <div className="flex justify-center mb-10 relative">
            <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full scale-150 animate-pulse pointer-events-none opacity-50" />
            
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClick}
                className="relative h-32 w-32 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-[0_10px_30px_rgba(249,115,22,0.4)] flex items-center justify-center border-4 border-white dark:border-slate-800 z-10 group"
            >
                <MousePointer2 className="w-12 h-12 text-white fill-white/20" />
                
                {/* Click Power Badge */}
                <div className="absolute -top-3 -right-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-slate-200 dark:border-slate-700">
                    +{clickPower}
                </div>

                {/* Particle System Container inside button for clipping if needed, or outside */}
                <AnimatePresence>
                    {particles.map(p => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 1, y: 0, x: 0 }}
                            animate={{ opacity: 0, y: -50 }}
                            exit={{ opacity: 0 }}
                            className="absolute pointer-events-none text-2xl font-bold text-white drop-shadow-md"
                            style={{ left: p.x, top: p.y }}
                        >
                            +{p.value}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.button>
        </div>

        {/* Upgrades Shop */}
        <div className="space-y-4 relative z-10">
            <div className="flex justify-between items-end mb-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Automation Upgrades</p>
                {autoRate > 0 && <span className="text-xs text-emerald-500 font-bold animate-pulse">Running: +{autoRate}/sec</span>}
            </div>
            
            <UpgradeButton 
                title="Email Sequence"
                cost={15}
                leads={leads}
                purchased={hasEmailAuto}
                onBuy={buyEmailAuto}
                rate="+1/s"
                icon={<Mail className="w-5 h-5 text-blue-500" />}
            />

            <UpgradeButton 
                title="AI Chatbot Strategy"
                cost={60}
                leads={leads}
                purchased={hasChatbot}
                onBuy={buyChatbot}
                rate="+5/s"
                icon={<MessageSquare className="w-5 h-5 text-purple-500" />}
            />
        </div>
    </motion.div>
  );
}

function UpgradeButton({ 
  title, 
  cost, 
  leads, 
  purchased, 
  onBuy, 
  rate, 
  icon 
}: { 
  title: string, 
  cost: number, 
  leads: number, 
  purchased: boolean, 
  onBuy: () => void, 
  rate: string, 
  icon: React.ReactNode 
}) {
    const canAfford = leads >= cost;
    
    return (
        <motion.button 
            layout
            onClick={onBuy}
            disabled={!canAfford && !purchased}
            whileHover={!purchased && canAfford ? { scale: 1.02, backgroundColor: "rgba(240, 253, 244, 0.5)" } : {}}
            whileTap={!purchased && canAfford ? { scale: 0.98 } : {}}
            className={cn(
                "w-full flex items-center justify-between p-4 rounded-2xl border transition-all relative overflow-hidden group",
                purchased 
                    ? "bg-emerald-50/50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800" 
                    : canAfford 
                        ? "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm cursor-pointer"
                        : "bg-slate-50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-800 opacity-60 cursor-not-allowed"
            )}
        >
            {/* Progress bar effect for purchased */}
            {purchased && (
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    className="absolute inset-0 bg-emerald-500/5 dark:bg-emerald-500/10 z-0"
                />
            )}

            <div className="flex items-center gap-4 relative z-10">
                <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                    purchased ? "bg-emerald-100 dark:bg-emerald-900/30" : "bg-slate-100 dark:bg-slate-800"
                )}>
                    {purchased ? <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> : icon}
                </div>
                <div className="text-left">
                    <div className={cn("font-bold text-sm", purchased ? "text-emerald-700 dark:text-emerald-300" : "text-slate-900 dark:text-white")}>
                        {title}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">Auto-pilot: {rate}</div>
                </div>
            </div>
            
            <div className="relative z-10">
                {purchased ? (
                    <span className="text-[10px] uppercase font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-md">Active</span>
                ) : (
                    <div className={cn("text-sm font-mono font-bold px-3 py-1.5 rounded-lg", canAfford ? "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400 group-hover:bg-orange-100" : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-600")}>
                        {cost} leads
                    </div>
                )}
            </div>
        </motion.button>
    );
}
