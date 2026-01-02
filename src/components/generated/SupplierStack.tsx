"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Info, X } from 'lucide-react';

const BLOCK_COLORS = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
const BLOCK_WIDTH = 60;
const BLOCK_HEIGHT = 20;

const SupplierStack = () => {
  const [blocks, setBlocks] = useState<
    { id: number; color: string; height: number; width: number; x: number; y: number }[]
  >([]);
  const [score, setScore] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [platformTilt, setPlatformTilt] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const platformRef = useRef<HTMLDivElement>(null);

  const addBlock = useCallback(() => {
    setBlocks((prevBlocks) => {
      const newBlock = {
        id: prevBlocks.length,
        color: BLOCK_COLORS[Math.floor(Math.random() * BLOCK_COLORS.length)] ?? 'bg-slate-500',
        height: BLOCK_HEIGHT,
        width: BLOCK_WIDTH,
        x: 0,
        y: -BLOCK_HEIGHT,
      };
      return [...prevBlocks, newBlock];
    });
  }, []);

  useEffect(() => {
    if (isRunning && !isGameOver) {
      const intervalId = setInterval(() => {
        addBlock();
      }, 2000);

      return () => clearInterval(intervalId);
    }
  }, [isRunning, isGameOver, addBlock]);

  useEffect(() => {
    if (blocks.length > 0) {
      const gravityInterval = setInterval(() => {
        setBlocks((prevBlocks) =>
          prevBlocks.map((block) => {
            const newY = block.y + 2;
            if (newY > 0) {
              // Check for collision with the platform
              const platformRect = platformRef.current?.getBoundingClientRect();
              if (platformRect) {
                const blockRect = {
                  x: block.x + platformRect.width / 2 - BLOCK_WIDTH / 2,
                  y: newY,
                  width: BLOCK_WIDTH,
                  height: BLOCK_HEIGHT
                }

                if (blockRect.y + BLOCK_HEIGHT >= platformRect.top &&
                  blockRect.y <= platformRect.bottom &&
                  blockRect.x + BLOCK_WIDTH >= platformRect.left &&
                  blockRect.x <= platformRect.right) {
                  return { ...block, y: 0 };
                }
              }
            }

            return { ...block, y: newY };
          })
        );
      }, 20);

      return () => clearInterval(gravityInterval);
    }
  }, [blocks]);

  useEffect(() => {
    const checkGameOver = () => {
      if (blocks.length > 0) {
        const allBlocksResting = blocks.every(block => block.y === 0);
        if (allBlocksResting) {
          const newScore = blocks.length * 10;
          setScore(newScore);
          setIsGameOver(true);
          setIsRunning(false);
        }
      }
    };

    const gameOverCheckInterval = setInterval(checkGameOver, 1000); // Check every second

    return () => clearInterval(gameOverCheckInterval);
  }, [blocks]);

  const handleStartGame = () => {
    setBlocks([]);
    setScore(0);
    setIsRunning(true);
    setIsGameOver(false);
  };

  const handleResetGame = () => {
    setBlocks([]);
    setScore(0);
    setIsRunning(false);
    setIsGameOver(false);
  };

  const platformVariants = {
    tiltLeft: { rotate: -5 },
    tiltRight: { rotate: 5 },
    normal: { rotate: 0 },
  };

  const handleTiltLeft = () => {
    setPlatformTilt(-5);
  };

  const handleTiltRight = () => {
    setPlatformTilt(5);
  };

  const handleTiltNormal = () => {
    setPlatformTilt(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-teal-400 p-4">
      <h1 className="text-3xl font-bold mb-4">Supplier Stack</h1>

      <div className="relative w-64 h-80 border-2 border-slate-700 rounded-md overflow-hidden mb-4">
        <AnimatePresence>
          {blocks.map((block) => (
            <motion.div
              key={block.id}
              className={`absolute ${block.color} rounded-sm`}
              style={{
                width: block.width,
                height: block.height,
                transform: `translate(${block.x}px, ${block.y}px)`,
                left: `calc(50% - ${block.width / 2}px)`,
                bottom: 0,
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: block.y }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            />
          ))}
        </AnimatePresence>

        <motion.div
          ref={platformRef}
          className="absolute bottom-0 left-0 w-full h-6 bg-gray-600 border-t-2 border-slate-700"
          style={{ originX: '50%', originY: 'top' }}
          variants={platformVariants}
          animate={{ rotate: platformTilt }}
          transition={{ duration: 0.2 }}
        />
      </div>

      <div className="flex space-x-4 mb-4">
        {!isRunning && !isGameOver && (
          <button
            className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleStartGame}
          >
            <Play className="inline-block mr-2" size={16} />
            Start Game
          </button>
        )}
        {isGameOver && (
          <button
            className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleResetGame}
          >
            <RotateCcw className="inline-block mr-2" size={16} />
            Play Again
          </button>
        )}
        {isRunning && (
          <div className="flex space-x-2">
            <button
              className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleTiltLeft}
            >
              Tilt Left
            </button>
            <button
              className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleTiltNormal}
            >
              Center
            </button>
            <button
              className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleTiltRight}
            >
              Tilt Right
            </button>
          </div>
        )}
      </div>

      <p>Score: {score}</p>
      {isGameOver && <p className="text-green-400 font-bold">Game Over! Final Score: {score}</p>}

      <button
        className="text-sm text-slate-500 hover:text-slate-400 mt-4"
        onClick={() => setShowInfo(!showInfo)}
      >
        <Info className="inline-block mr-1" size={16} />
        How to Play
      </button>

      <AnimatePresence>
        {showInfo && (
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-800 p-6 rounded-md shadow-lg border border-slate-700"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold">How to Play Supplier Stack</h3>
              <button className="text-slate-400 hover:text-slate-300" onClick={() => setShowInfo(false)}>
                <X size={20} />
              </button>
            </div>
            <p className="text-sm">
              Stack diverse supplier blocks strategically. Each block represents an advantage.
              Higher, more diverse stacks = higher ROI score.
              Tilting the platform helps balance. A toppled stack lowers your score.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SupplierStack;
