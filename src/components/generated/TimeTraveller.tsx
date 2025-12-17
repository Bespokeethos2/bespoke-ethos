
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown } from 'lucide-react';

const TimeTraveller = () => {
  const [isAugmented, setIsAugmented] = useState(false);

  // Simulated data for the graph (placeholders)
  const currentTrajectory = [100, 110, 121, 133, 146]; // Linear growth
  const aiAugmentedTrajectory = [100, 130, 169, 220, 286]; // Exponential growth

  const currentValue = currentTrajectory[4];
  const augmentedValue = aiAugmentedTrajectory[4];
  const projectedDifference = currentValue && augmentedValue ? Math.round(augmentedValue / currentValue) : 0;

  return (
    <motion.div
      className="flex flex-col items-center justify-center p-4 rounded-lg bg-gradient-to-br from-blue-800 to-blue-600 text-white shadow-lg h-72 w-full max-w-sm"
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-semibold mb-2">The Time Traveller</h2>

      <div className="flex items-center mb-4">
        <span className="mr-2 text-sm">Current Trajectory</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={isAugmented}
            onChange={() => setIsAugmented(!isAugmented)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-white">AI Augmented</span>
        </label>
      </div>

      {/* Simplified Graph - replace with a real charting library for advanced visuals */}
      <div className="w-full h-24 relative">
        <motion.div
          className="absolute left-0 top-0 w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to top, ${isAugmented ? 'rgba(100,255,100,0.7)' : 'rgba(255,255,255,0.7)'} , transparent)`,
          }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute bottom-0 w-full flex justify-around items-end h-full">
          {currentTrajectory.map((value, index) => (
            <div key={index} className="relative">
              <div
                className="bg-gray-400 rounded-t-md w-4"
                style={{ height: `${value / 3}px` }}
              ></div>
            </div>
          ))}
          {isAugmented && aiAugmentedTrajectory.map((value, index) => (
            <div key={index + 5} className="relative">
              <div
                className="bg-green-400 rounded-t-md w-4"
                style={{ height: `${value / 3}px` }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <motion.p className="mt-4 text-sm font-medium text-center">
        In 3 years, you could be {projectedDifference}x ahead.
        {projectedDifference > 1 ? <ArrowUp color="green" /> : <ArrowDown color="red" />}
      </motion.p>
    </motion.div>
  );
};

export default TimeTraveller;
