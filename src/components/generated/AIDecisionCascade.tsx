"use client";

import React, { useState, createContext, useContext } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, CheckCircle, XCircle } from 'lucide-react';

// Styled Components (using Tailwind classes directly)
const Button = ({ children, onClick, className }: { children: React.ReactNode, onClick: () => void, className?: string }) => (
  <button
    className={`bg-teal-700 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

// Game Context
interface GameContextType {
  score: number;
  level: number;
  interventionPoints: number[];
  currentProcess: string[];
  addScore: (points: number) => void;
  resetGame: () => void;
  nextLevel: () => void;
  selectedIntervention: number | null;
  setSelectedIntervention: (index: number | null) => void;
  isCorrect: boolean | null;
  setIsCorrect: (value: boolean | null) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};

const PROCESSES = [
  {
    name: "Loan Application",
    steps: ["Data Input", "Credit Check", "Risk Assessment", "Approval"],
    intervention: 2, // Risk Assessment
  },
  {
    name: "Hiring Process",
    steps: ["Resume Screening", "Initial Interview", "Technical Assessment", "Final Interview"],
    intervention: 0, // Resume Screening
  },
  {
    name: "Medical Diagnosis",
    steps: ["Symptom Collection", "Initial Tests", "AI Analysis", "Doctor Review"],
    intervention: 3, // Doctor Review
  },
];

// Game Provider
interface GameProviderProps {
  children: React.ReactNode;
}

const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [selectedIntervention, setSelectedIntervention] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const processIndex = (level - 1) % PROCESSES.length;
  const currentProcess = PROCESSES[processIndex]?.steps ?? [];
  const interventionPoints = PROCESSES[processIndex]
    ? [PROCESSES[processIndex].intervention]
    : [];

  const addScore = (points: number) => {
    setScore((prevScore) => prevScore + points);
  };

  const resetGame = () => {
    setScore(0);
    setLevel(1);
    setSelectedIntervention(null);
    setIsCorrect(null);
  };

  const nextLevel = () => {
    setLevel((prevLevel) => prevLevel + 1);
    setSelectedIntervention(null);
    setIsCorrect(null);
  };

  const value: GameContextType = {
    score,
    level,
    interventionPoints,
    currentProcess,
    addScore,
    resetGame,
    nextLevel,
    selectedIntervention,
    setSelectedIntervention,
    isCorrect,
    setIsCorrect,
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};


// Cascade Component
const Cascade = () => {
  const { currentProcess, interventionPoints, selectedIntervention, setSelectedIntervention, isCorrect, setIsCorrect, addScore, nextLevel } = useGame();
  const numSteps = currentProcess.length;

  const handleInterventionSelect = (index: number) => {
    setSelectedIntervention(index);
    const correct = interventionPoints.includes(index);
    setIsCorrect(correct);

    if (correct) {
      addScore(100);
      setTimeout(() => {
        nextLevel();
      }, 1500);
    } else {
      addScore(-50);
      setTimeout(() => {
        setIsCorrect(null);
        setSelectedIntervention(null);
      }, 1500);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      {currentProcess.map((step, index) => (
        <motion.div
          key={index}
          className={`relative w-64 h-16 bg-slate-800 border border-slate-700 rounded-md flex items-center justify-center text-teal-400 mb-4 cursor-pointer ${selectedIntervention === index && isCorrect === true ? 'bg-green-700' : ''} ${selectedIntervention === index && isCorrect === false ? 'bg-red-700' : ''}`}
          onClick={() => handleInterventionSelect(index)}
          style={{zIndex: numSteps - index}}
        >
          {step}
          {selectedIntervention === index && isCorrect === true && (
            <motion.div
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-green-500 bg-opacity-50 rounded-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CheckCircle className="text-white w-8 h-8" />
            </motion.div>
          )}
          {selectedIntervention === index && isCorrect === false && (
            <motion.div
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-red-500 bg-opacity-50 rounded-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <XCircle className="text-white w-8 h-8" />
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

const AIDecisionCascade = () => {
  return (
    <GameProvider>
      <div className="bg-slate-900 text-teal-400 min-h-screen flex flex-col items-center justify-start p-8">
        <div className="absolute top-4 right-4 text-2xl">
          Score: <ScoreDisplay />
        </div>
        <h1 className="text-4xl font-bold mb-4">AI Decision Cascade</h1>
        <Cascade />
        <div className="mt-8">
          <ResetButton />
        </div>
      </div>
    </GameProvider>
  );
};

const ScoreDisplay = () => {
    const { score } = useGame();
    return <span>{score}</span>;
};


const ResetButton = () => {
  const { resetGame } = useGame();
  return (
    <Button onClick={resetGame} className="bg-coral-500 hover:bg-coral-700">
      <RotateCcw className="inline-block mr-2" />
      Reset Game
    </Button>
  );
};

export default AIDecisionCascade;
