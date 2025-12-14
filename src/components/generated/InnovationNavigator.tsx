"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Lightbulb, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react';

const scenarios = [
    {
        id: 1,
        text: "It's 2024. A new AI technology emerges. Invest heavily, ignore it, or cautiously explore?",
        choices: [
            { text: "Invest Heavily", fpsChange: 20, nextScenario: 2 },
            { text: "Ignore It", fpsChange: -15, nextScenario: 2 },
            { text: "Cautiously Explore", fpsChange: 5, nextScenario: 2 },
        ],
    },
    {
        id: 2,
        text: "2026: Consumer preferences are shifting towards sustainable products. Adapt your supply chain, greenwash, or maintain the status quo?",
        choices: [
            { text: "Adapt Supply Chain", fpsChange: 15, nextScenario: 3 },
            { text: "Greenwash", fpsChange: -10, nextScenario: 3 },
            { text: "Maintain Status Quo", fpsChange: -5, nextScenario: 3 },
        ],
    },
    {
        id: 3,
        text: "2028: A major economic downturn hits. Cut costs drastically, seek government bailout, or innovate new revenue streams?",
        choices: [
            { text: "Cut Costs Drastically", fpsChange: -20, nextScenario: 4 },
            { text: "Seek Government Bailout", fpsChange: -15, nextScenario: 4 },
            { text: "Innovate New Revenue Streams", fpsChange: 25, nextScenario: 4 },
        ],
    },
    {
        id: 4,
        text: "2029: Remote work is now standard. Fully embrace remote, force a return to office, or offer a hybrid model?",
        choices: [
            { text: "Fully Embrace Remote", fpsChange: 10, nextScenario: 5 },
            { text: "Force Return to Office", fpsChange: -25, nextScenario: 5 },
            { text: "Offer a Hybrid Model", fpsChange: 15, nextScenario: 5 },
        ],
    },
    {
        id: 5,
        text: "2030: Congratulations, you've reached 2030!",
        choices: [],
    },
];

const initialFPS = 50;

const containerVariants = {
    hidden: { opacity: 0, x: '100vw' },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', delay: 0.2, duration: 0.5 } },
    exit: { x: '-100vw', transition: { ease: 'easeInOut', duration: 0.3 } },
};

const buttonVariants = {
    hover: { scale: 1.1, textShadow: "0px 0px 8px rgb(255,255,255)", boxShadow: "0px 0px 8px rgb(255,255,255)", transition: { duration: 0.3, yoyo: Infinity } },
    tap: { scale: 0.95 }
};

const InnovationNavigator = () => {
    const [currentScenarioId, setCurrentScenarioId] = useState(1);
    const [fps, setFps] = useState(initialFPS);
    const currentScenario = scenarios.find((s) => s.id === currentScenarioId);
    const fpsPercentage = Math.max(0, Math.min(fps, 100));

    const handleChoice = (fpsChange: number, nextScenario: number) => {
        setFps((prevFps) => Math.max(0, Math.min(100, prevFps + fpsChange)));
        setCurrentScenarioId(nextScenario);
    };

    const handleReset = () => {
        setCurrentScenarioId(1);
        setFps(initialFPS);
    };

    let fpsColor = 'bg-green-500';
    if (fpsPercentage < 30) {
        fpsColor = 'bg-red-500';
    } else if (fpsPercentage < 70) {
        fpsColor = 'bg-yellow-500';
    }

    let outcomeMessage = "";
    let outcomeIcon = null;
    if (currentScenarioId === 5) {
        if (fps >= 70) {
            outcomeMessage = "Excellent future-proofing! Your business is thriving.";
            outcomeIcon = <CheckCircle className="text-green-500 w-12 h-12" />;
        } else if (fps >= 30) {
            outcomeMessage = "Moderate future-proofing. Some improvements are needed.";
            outcomeIcon = <TrendingUp className="text-yellow-500 w-12 h-12" />;
        } else {
            outcomeMessage = "Poor future-proofing. Significant changes are required.";
            outcomeIcon = <AlertTriangle className="text-red-500 w-12 h-12" />;
        }
    }

    return (
        <motion.div
            className="bg-slate-900 min-h-screen flex flex-col items-center justify-center p-4 text-teal-400"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h1 className="text-3xl font-bold mb-4 text-center">Innovation Navigator: Future-Proofing 2030</h1>
            <div className="mb-4 flex items-center">
                <span className="mr-2">Future-Proofing Score:</span>
                <div className="w-48 h-6 bg-slate-700 rounded-full overflow-hidden relative">
                    <motion.div
                        className={`h-full rounded-full absolute top-0 left-0 ${fpsColor}`}
                        style={{ width: `${fpsPercentage}%` }}
                        transition={{ duration: 0.5 }}
                    />
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-slate-200">{fps}%</span>
                </div>
            </div>

            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentScenarioId}
                    className="bg-slate-800 rounded-lg shadow-lg p-6 w-full max-w-md text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <p className="text-lg mb-4">{currentScenario?.text}</p>
                    {currentScenario?.choices.map((choice, index) => (
                        <motion.button
                            key={index}
                            className="bg-coral-500 hover:bg-coral-700 text-white font-bold py-2 px-4 rounded mb-2 block w-full"
                            onClick={() => handleChoice(choice.fpsChange, choice.nextScenario)}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            {choice.text}
                        </motion.button>
                    ))}
                    {currentScenarioId === 5 && (
                        <>
                            <div className="flex flex-col items-center mt-4">
                                {outcomeIcon}
                                <p className="mt-2">{outcomeMessage}</p>
                            </div>
                            <motion.button
                                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-4"
                                onClick={handleReset}
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <RotateCcw className="inline-block mr-2" />
                                Reset
                            </motion.button>
                        </>
                    )}
                    {currentScenarioId !== 5 && (
                        <motion.button
                            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-4"
                            onClick={handleReset}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            style={{display: 'none'}}
                        >
                            <RotateCcw className="inline-block mr-2" />
                            Reset
                        </motion.button>
                    )}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

export default InnovationNavigator;