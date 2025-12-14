"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, Activity, User, TrendingUp } from "lucide-react";

const EfficiencyEngine = () => {
  const [automation, setAutomation] = useState(50);
  const [marketing, setMarketing] = useState(50);
  const [hr, setHr] = useState(50);
  const [waste, setWaste] = useState(calculateWaste(automation, marketing, hr));
  const [profit, setProfit] = useState(calculateProfit(automation, marketing, hr));
  const [isRunning, setIsRunning] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setWaste(calculateWaste(automation, marketing, hr));
        setProfit(calculateProfit(automation, marketing, hr));
      }, 250);

      return () => clearInterval(intervalId);
    }
  }, [automation, marketing, hr, isRunning]);

  function calculateWaste(automation: number, marketing: number, hr: number): number {
    let waste = 0;
    waste += Math.abs(automation - 60) * 5;
    waste += Math.abs(marketing - 40) * 3;
    waste += Math.abs(hr - 70) * 7;
    return waste;
  }

  function calculateProfit(automation: number, marketing: number, hr: number): number {
    let profit = 100;
    profit -= calculateWaste(automation, marketing, hr);
    return Math.max(0, profit);
  }

  const handleAutomationChange = (event: any) => {
    setAutomation(parseInt(event.target.value));
  };

  const handleMarketingChange = (event: any) => {
    setMarketing(parseInt(event.target.value));
  };

  const handleHrChange = (event: any) => {
    setHr(parseInt(event.target.value));
  };

  const handlePlayPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setAutomation(50);
    setMarketing(50);
    setHr(50);
    setIsRunning(false);
    setShowParticles(false);
  };

  useEffect(() => {
    if (profit > 95) {
      setShowParticles(true);
      setTimeout(() => {
        setShowParticles(false);
      }, 2000);
    }
  }, [profit]);

  const particleCount = 20;

  const Particle = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 50 - 25;

    const particleVariants = {
      initial: {
        x: 0,
        y: 0,
        opacity: 1,
        scale: Math.random() * 0.8 + 0.2,
      },
      animate: {
        x: x,
        y: -200,
        opacity: 0,
        scale: Math.random() * 0.8 + 0.2,
        transition: {
          duration: 2,
          ease: "easeOut",
        },
      },
    };

    return (
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-yellow-500"
        variants={particleVariants}
        initial="initial"
        animate="animate"
      />
    );
  };

  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl text-teal-400 mb-6">Efficiency Engine</h1>

      <div className="mb-4">
        <label htmlFor="automation" className="block text-sm font-medium text-teal-400 mb-1">
          Automation:
        </label>
        <div className="flex items-center space-x-2">
          <Activity className="text-coral-400" />
          <input
            type="range"
            id="automation"
            min="0"
            max="100"
            value={automation}
            onChange={handleAutomationChange}
            className="w-64 h-2 bg-teal-600 rounded-lg appearance-none cursor-pointer accent-coral-400"
          />
          <span className="text-sm text-teal-400">{automation}</span>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="marketing" className="block text-sm font-medium text-teal-400 mb-1">
          Marketing Spend:
        </label>
        <div className="flex items-center space-x-2">
          <TrendingUp className="text-coral-400" />
          <input
            type="range"
            id="marketing"
            min="0"
            max="100"
            value={marketing}
            onChange={handleMarketingChange}
            className="w-64 h-2 bg-teal-600 rounded-lg appearance-none cursor-pointer accent-coral-400"
          />
          <span className="text-sm text-teal-400">{marketing}</span>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="hr" className="block text-sm font-medium text-teal-400 mb-1">
          HR Processes:
        </label>
        <div className="flex items-center space-x-2">
          <User className="text-coral-400" />
          <input
            type="range"
            id="hr"
            min="0"
            max="100"
            value={hr}
            onChange={handleHrChange}
            className="w-64 h-2 bg-teal-600 rounded-lg appearance-none cursor-pointer accent-coral-400"
          />
          <span className="text-sm text-teal-400">{hr}</span>
        </div>
      </div>

      <div className="flex space-x-4 mb-4">
        <button
          onClick={handlePlayPause}
          className="bg-coral-500 hover:bg-coral-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {isRunning ? "Pause" : "Run"} <Play className="inline-block ml-1" size={16} />
        </button>
        <button
          onClick={handleReset}
          className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Reset <RotateCcw className="inline-block ml-1" size={16} />
        </button>
      </div>

      <div className="text-center">
        <p className="text-lg text-teal-400">Waste: {waste}</p>
        <p className="text-lg text-teal-400">Profit: {profit}</p>
      </div>

      <div className="relative w-full h-full">
        <AnimatePresence>
          {showParticles && (
            <motion.div
              className="absolute inset-0 flex justify-center items-center pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {Array.from({ length: particleCount }).map((_, index) => (
                <Particle key={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EfficiencyEngine;