"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Pause, CheckCircle, XCircle } from 'lucide-react';

const TheAlgorithmicDilemma = () => {
  const [accuracy, setAccuracy] = useState(50);
  const [efficiency, setEfficiency] = useState(50);
  const [privacy, setPrivacy] = useState(50);
  const [profit, setProfit] = useState(50);
  const [societalImpact, setSocietalImpact] = useState(50);
  const [ethicalScore, setEthicalScore] = useState(50);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [moralBankruptcy, setMoralBankruptcy] = useState(false);

  const calculateMetrics = useCallback(() => {
    // Simplified calculations, adjust as needed
    const newProfit = accuracy * 0.3 + efficiency * 0.4 - privacy * 0.1 + Math.random()*5;
    const newSocietalImpact = accuracy * 0.2 + privacy * 0.5 - efficiency * 0.1 + Math.random()*5;
    const newEthicalScore = privacy * 0.6 + societalImpact * 0.3 - accuracy * 0.2 + Math.random()*5;

    const clampedProfit = Math.max(0, Math.min(100, newProfit));
    const clampedSocietalImpact = Math.max(0, Math.min(100, newSocietalImpact));
    const clampedEthicalScore = Math.max(0, Math.min(100, newEthicalScore));

    setProfit(clampedProfit);
    setSocietalImpact(clampedSocietalImpact);
    setEthicalScore(clampedEthicalScore);

    // Check for moral bankruptcy after state updates
    if (clampedEthicalScore < 10 && clampedProfit > 80) {
      setMoralBankruptcy(true);
      setIsRunning(false);
      setGameOver(true);
    }
  }, [accuracy, efficiency, privacy, societalImpact]);

  useEffect(() => {
    if (isRunning && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
        calculateMetrics();
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRunning, timeRemaining, calculateMetrics]);

  // Separate effect to handle game over when time runs out
  useEffect(() => {
    if (timeRemaining === 0 && isRunning) {
      setIsRunning(false);
      setGameOver(true);
    }
  }, [timeRemaining, isRunning]);

  const handleSliderChange = (setter: (value: number) => void) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(parseInt(event.target.value, 10));
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setAccuracy(50);
    setEfficiency(50);
    setPrivacy(50);
    setProfit(50);
    setSocietalImpact(50);
    setEthicalScore(50);
    setTimeRemaining(60);
    setIsRunning(false);
    setGameOver(false);
    setMoralBankruptcy(false);
  };

  const getMoralCompassDirection = () => {
    if (ethicalScore > 70) return "Great!";
    if (ethicalScore > 40) return "Okay";
    return "Warning!";
  };


  return (
    <motion.div
      className="bg-slate-900 min-h-screen flex flex-col items-center justify-center p-4 text-teal-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-4">The Algorithmic Dilemma</h1>

      <div className="mb-4">
        Time Remaining: {timeRemaining} seconds
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        {/* Accuracy Slider */}
        <div className="flex flex-col border border-slate-700 p-4 rounded-lg">
          <label htmlFor="accuracy">Accuracy: {accuracy}</label>
          <input
            type="range"
            id="accuracy"
            min="0"
            max="100"
            value={accuracy}
            onChange={handleSliderChange(setAccuracy)}
            className="w-full accent-teal-500"
            disabled={gameOver || !isRunning}
          />
        </div>

        {/* Efficiency Slider */}
        <div className="flex flex-col border border-slate-700 p-4 rounded-lg">
          <label htmlFor="efficiency">Efficiency: {efficiency}</label>
          <input
            type="range"
            id="efficiency"
            min="0"
            max="100"
            value={efficiency}
            onChange={handleSliderChange(setEfficiency)}
            className="w-full accent-teal-500"
            disabled={gameOver || !isRunning}
          />
        </div>

        {/* Privacy Slider */}
        <div className="flex flex-col border border-slate-700 p-4 rounded-lg">
          <label htmlFor="privacy">Privacy: {privacy}</label>
          <input
            type="range"
            id="privacy"
            min="0"
            max="100"
            value={privacy}
            onChange={handleSliderChange(setPrivacy)}
            className="w-full accent-teal-500"
            disabled={gameOver || !isRunning}
          />
        </div>
      </div>

      {/* Metrics Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl mt-4">
        <div className="border border-slate-700 p-4 rounded-lg">Profit: {profit.toFixed(2)}</div>
        <div className="border border-slate-700 p-4 rounded-lg">Societal Impact: {societalImpact.toFixed(2)}</div>
        <div className="border border-slate-700 p-4 rounded-lg">Ethical Score: {ethicalScore.toFixed(2)}</div>
      </div>

       {/* Moral Compass */}
       <div className="mt-4">
        Moral Compass: <span className={ethicalScore > 40 ? "text-green-500" : "text-red-500"}>{getMoralCompassDirection()}</span>
      </div>


      {/* Action Buttons */}
      <div className="flex justify-center mt-4 space-x-4">
        {!isRunning && !gameOver && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleStart}
          >
            <Play className="inline-block mr-2" />
            Start
          </motion.button>
        )}
        {isRunning && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handlePause}
          >
            <Pause className="inline-block mr-2" />
            Pause
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleReset}
        >
          <RotateCcw className="inline-block mr-2" />
          Reset
        </motion.button>
      </div>

      {/* Game Over Screen */}
      <AnimatePresence>
        {gameOver && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-75 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-slate-800 p-8 rounded-lg shadow-lg text-center"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
              {moralBankruptcy ? (
                <>
                  <XCircle className="mx-auto text-red-500 w-12 h-12 mb-2" />
                  <p className="text-red-500">Moral Bankruptcy Achieved!</p>
                </>
              ) : (
                <>
                  <CheckCircle className="mx-auto text-green-500 w-12 h-12 mb-2" />
                  <p>Final Ethical Score: {ethicalScore.toFixed(2)}</p>
                </>
              )}
              <button
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                onClick={handleReset}
              >
                Play Again
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TheAlgorithmicDilemma;