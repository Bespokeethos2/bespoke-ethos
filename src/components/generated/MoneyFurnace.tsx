
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Trees, Flame } from 'lucide-react';

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const MoneyFurnace = () => {
  const [employees, setEmployees] = useState(5);
  const [hours, setHours] = useState(40);
  const [annualSavings, setAnnualSavings] = useState(0);
  const [isBurning, setIsBurning] = useState(true);

  useEffect(() => {
    const calculatedSavings = employees * hours * 50 * 52 * 0.3;
    setAnnualSavings(calculatedSavings);

    if (employees > 0 && hours > 0) {
      setIsBurning(false);
    } else {
      setIsBurning(true);
    }
  }, [employees, hours]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center p-4 rounded-lg bg-gradient-to-br from-red-800 to-red-600 text-white shadow-lg h-72 w-full max-w-sm"
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-semibold mb-2">The Money Furnace</h2>

      <div className="flex flex-col w-full space-y-2">
        <label htmlFor="employees" className="text-sm">
          Employees:
        </label>
        <input
          type="range"
          id="employees"
          min="1"
          max="20"
          value={employees}
          onChange={(e) => setEmployees(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
        />
        <span className="text-xs text-gray-200">({employees})</span>

        <label htmlFor="hours" className="text-sm">
          Hours per week:
        </label>
        <input
          type="range"
          id="hours"
          min="10"
          max="60"
          value={hours}
          onChange={(e) => setHours(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
        />
        <span className="text-xs text-gray-200">({hours})</span>
      </div>

      <div className="relative w-48 h-32 mt-4 overflow-hidden">
        {isBurning ? (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-yellow-400 text-6xl animate-pulse">
              <Flame />
            </div>
            <motion.div className="absolute bottom-0 w-full text-center text-xs">
              Burning Cash Stacks
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-green-400 text-5xl animate-bounce">
              <Trees />
            </div>
            <motion.div className="absolute bottom-0 w-full text-center text-xs">
              Profit Tree
            </motion.div>
          </motion.div>
        )}
      </div>

      <motion.p className="mt-4 text-sm font-medium">
        Annual Burn Saved: {formatCurrency(annualSavings)}
      </motion.p>
    </motion.div>
  );
};

export default MoneyFurnace;
