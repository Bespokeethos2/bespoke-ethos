
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Define the TaskParticle type
type TaskParticle = {
  id: string;
  type: 'Email' | 'Data' | 'Admin';
  x: number;
  y: number;
};

const EntropyCrusher = () => {
  const [isOptimized, setIsOptimized] = useState(false);
  const [particles] = useState<TaskParticle[]>(() =>
    Array.from({ length: 50 }, (_, i) => {
      const type = ['Email', 'Data', 'Admin'][Math.floor(Math.random() * 3)] as 'Email' | 'Data' | 'Admin';
      const x = Math.random() * 100 - 50; // Random x position within a range
      const y = Math.random() * 100 - 50; // Random y position within a range
      return { id: `particle-${i}`, type, x, y };
    })
  );
  const chaosReduction = isOptimized ? 98 : 0;

  const handleMagnetDrop = () => {
    // Trigger optimization when magnet is "dropped"
    setIsOptimized(true);
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center p-4 rounded-lg bg-gradient-to-br from-purple-800 to-purple-600 text-white shadow-lg overflow-hidden relative h-72 w-full max-w-sm"
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-semibold mb-2">The Entropy Crusher</h2>
      <div className="relative w-48 h-48 rounded-full overflow-hidden">
        {!isOptimized && (
          <motion.div className="absolute w-full h-full">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className={`absolute rounded-full shadow-md z-10`}
                style={{
                  left: `calc(50% + ${particle.x}px)`,
                  top: `calc(50% + ${particle.y}px)`,
                  width: '8px',
                  height: '8px',
                  backgroundColor: particle.type === 'Email' ? '#FF4500' : particle.type === 'Data' ? '#00BFFF' : '#FFA500', // Example colors
                }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              />
            ))}
          </motion.div>
        )}

        {isOptimized && (
          <motion.div
            className="absolute w-full h-full grid grid-cols-5 gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {Array.from({ length: 25 }).map((_, index) => (
              <motion.div
                key={index}
                className="w-full h-full bg-green-400 rounded-sm"
                style={{ scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
              />
            ))}
          </motion.div>
        )}

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ pointerEvents: isOptimized ? 'none' : 'auto' }}
        >
          {!isOptimized && (
            <motion.div
              className="bg-white text-purple-700 px-4 py-2 rounded-full shadow-md cursor-grab hover:bg-purple-100 active:scale-95"
              drag
              onDragEnd={handleMagnetDrop}
            >
              Bespoke AI
            </motion.div>
          )}
        </motion.div>
      </div>

      <motion.p
        className="mt-4 text-sm font-medium"
        animate={{ opacity: isOptimized ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        Chaos Reduced by {chaosReduction}%
      </motion.p>
    </motion.div>
  );
};

export default EntropyCrusher;
