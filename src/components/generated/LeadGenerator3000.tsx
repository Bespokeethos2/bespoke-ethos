"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Users, Network, Zap, TrendingUp } from 'lucide-react';

const LeadGenerator3000 = () => {
  const [leads, setLeads] = useState(0);
  const [agentLevel, setAgentLevel] = useState(1);
  const [autoFollowUp, setAutoFollowUp] = useState(false);
  const [socialMedia, setSocialMedia] = useState(false);
  const [clicksPerLead, setClicksPerLead] = useState(1);
  const [autoLeadsPerSecond, setAutoLeadsPerSecond] = useState(0);
  const [leadIncrement, setLeadIncrement] = useState(0);

  const [upgradeCostMultiplier, setUpgradeCostMultiplier] = useState(1.15);

  const [availableUpgrades, setAvailableUpgrades] = useState([
    { id: 'fasterClicks', name: 'Faster Clicks', cost: 50, description: 'Increase leads per click.', purchased: false, icon: Zap },
    { id: 'autoFollowUp', name: 'Automated Follow-up', cost: 200, description: 'Generate leads automatically.', purchased: false, icon: RotateCcw },
    { id: 'socialMedia', name: 'Social Media Integration', cost: 500, description: 'Boost leads through social media.', purchased: false, icon: Network },
    { id: 'teamExpansion', name: 'Team Expansion', cost: 1000, description: 'Hire more agents.', purchased: false, icon: Users },
    { id: 'trendingUp', name: 'Trending Up', cost: 2500, description: 'Gain additional leads from a single click', purchased: false, icon: TrendingUp },

  ]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (autoFollowUp) {
      intervalId = setInterval(() => {
        setLeads((prevLeads) => prevLeads + autoLeadsPerSecond);
        setLeadIncrement(autoLeadsPerSecond);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoFollowUp, autoLeadsPerSecond]);


  const handleGenerateLeads = () => {
    setLeads((prevLeads) => prevLeads + clicksPerLead);
    setLeadIncrement(clicksPerLead);
  };


  const purchaseUpgrade = (id: string) => {
    const upgrade = availableUpgrades.find((upgrade) => upgrade.id === id);
    if (!upgrade) return;

    if (leads >= upgrade.cost) {
      setLeads((prevLeads) => prevLeads - upgrade.cost);

      setAvailableUpgrades((prevUpgrades) =>
        prevUpgrades.map((u) =>
          u.id === id ? { ...u, purchased: true } : u
        )
      );

      if (id === 'fasterClicks') {
        setClicksPerLead((prevClicks) => prevClicks * 2);
        setAvailableUpgrades((prev) => prev.map((item) => item.id === 'fasterClicks' ? {...item, cost: item.cost * upgradeCostMultiplier} : item))
      } else if (id === 'autoFollowUp') {
        setAutoFollowUp(true);
        setAutoLeadsPerSecond(5);
        setAvailableUpgrades((prev) => prev.map((item) => item.id === 'autoFollowUp' ? {...item, cost: item.cost * upgradeCostMultiplier} : item))
      } else if (id === 'socialMedia') {
        setSocialMedia(true);
        setAutoLeadsPerSecond((prevAutoLeads) => prevAutoLeads + 10);
        setAvailableUpgrades((prev) => prev.map((item) => item.id === 'socialMedia' ? {...item, cost: item.cost * upgradeCostMultiplier} : item))
      }
      else if (id === 'teamExpansion') {
        setAgentLevel((prevAgentLevel) => prevAgentLevel + 1);
        setClicksPerLead((prevClicks) => prevClicks + 5);
        setAvailableUpgrades((prev) => prev.map((item) => item.id === 'teamExpansion' ? {...item, cost: item.cost * upgradeCostMultiplier} : item))
      }
      else if (id === 'trendingUp') {
        setClicksPerLead((prevClicks) => prevClicks * 3);
        setAvailableUpgrades((prev) => prev.map((item) => item.id === 'trendingUp' ? {...item, cost: item.cost * upgradeCostMultiplier} : item))
      }
    }
  };


  return (
    <div className="bg-slate-900 min-h-screen flex flex-col md:flex-row">

      {/* Sidebar */}
      <div className="w-full md:w-1/4 p-4 border-r border-slate-700">
        <h2 className="text-xl text-teal-300 mb-4">Upgrades</h2>
        <ul>
          {availableUpgrades.map((upgrade) => (
            <li key={upgrade.id} className="mb-2">
              <button
                className={`w-full text-left p-3 rounded-md ${
                  leads >= upgrade.cost && !upgrade.purchased
                    ? 'bg-slate-800 hover:bg-slate-700 text-coral-300'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                } border border-slate-700`}
                onClick={() => purchaseUpgrade(upgrade.id)}
                disabled={leads < upgrade.cost || upgrade.purchased}
              >
                 <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center space-x-2">
                            {React.createElement(upgrade.icon, {className: 'h-4 w-4'})}
                            <span>{upgrade.name}</span>
                        </div>
                      <p className="text-sm text-slate-400">{upgrade.description}</p>
                    </div>
                    <div>
                       {upgrade.purchased ? <span className="text-green-500">Purchased</span> : <span>Cost: {upgrade.cost}</span>}
                    </div>
                 </div>

              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-4 flex flex-col items-center justify-center">
        <motion.div className="text-teal-400 text-2xl mb-4">Leads: {leads.toFixed(0)}</motion.div>

        <AnimatePresence>
            {leadIncrement > 0 && (
              <motion.div
                className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-green-500 text-lg pointer-events-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: -20 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 1 }}
              >
                +{leadIncrement.toFixed(0)}
              </motion.div>
            )}
          </AnimatePresence>


        <motion.button
          className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold py-4 px-8 rounded-full shadow-lg transition-colors duration-300"
          onClick={handleGenerateLeads}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Generate Leads
        </motion.button>

        <div className="mt-8 text-slate-400">
          Agent Level: {agentLevel} | Clicks per Lead: {clicksPerLead}
          {autoFollowUp && (
            <div>Auto Leads per Second: {autoLeadsPerSecond}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadGenerator3000;