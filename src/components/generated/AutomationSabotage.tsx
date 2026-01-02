"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, CheckCircle, XCircle } from 'lucide-react';

interface Difference {
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
    description: string;
}

const differences: Difference[] = [
    { id: 1, x: 150, y: 100, width: 50, height: 30, description: "Missing Data Input Validation" },
    { id: 2, x: 300, y: 250, width: 40, height: 40, description: "Inadequate Training on New System" },
    { id: 3, x: 450, y: 180, width: 60, height: 25, description: "Lack of Regular Maintenance" },
];

const initialTime = 30;

const AutomationSabotage = () => {
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [gameStarted, setGameStarted] = useState(false);
    const [foundDifferences, setFoundDifferences] = useState<number[]>([]);
    const [feedback, setFeedback] = useState<{ correct: boolean; message: string } | null>(null);
    const allDifferencesFound = foundDifferences.length === differences.length;
    const isGameOver = (gameStarted && timeLeft <= 0) || allDifferencesFound;

    useEffect(() => {
        if (!gameStarted || timeLeft <= 0) {
            return;
        }

        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    setGameStarted(false);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [gameStarted, timeLeft]);

    const startGame = () => {
        setGameStarted(true);
        setScore(0);
        setTimeLeft(initialTime);
        setFoundDifferences([]);
        setFeedback(null);
    };

    const resetGame = () => {
        setGameStarted(false);
        setScore(0);
        setTimeLeft(initialTime);
        setFoundDifferences([]);
        setFeedback(null);
    };

    const handleClick = (id: number, e: React.MouseEvent) => {
        e.preventDefault();

        if (!gameStarted || isGameOver) return;

        if (foundDifferences.includes(id)) {
            return; // Already found
        }

        const difference = differences.find((diff) => diff.id === id);

        if (difference) {
            setScore((prevScore) => prevScore + 1);
            const nextFound = [...foundDifferences, id];
            setFoundDifferences(nextFound);
            setFeedback({ correct: true, message: `Correct! ${difference.description}` });
            setTimeout(() => setFeedback(null), 2000);
            if (nextFound.length === differences.length) {
                setGameStarted(false);
            }
        } else {
            setScore((prevScore) => prevScore - 1);
            setFeedback({ correct: false, message: "Incorrect!" });
            setTimeout(() => setFeedback(null), 2000);
        }
    };


    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-teal-400 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-3xl font-bold mb-4">Automation Sabotage</h1>

            <div className="flex space-x-4 mb-4">
                <div>Time: {timeLeft}</div>
                <div>Score: {score}</div>
            </div>

            <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/successful_automation.png" alt="Successful Automation" className="rounded-md shadow-md" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/failed_automation.png"
                    alt="Failed Automation"
                    className="rounded-md shadow-md absolute top-0 left-0 opacity-50 hover:opacity-100"
                />
                {differences.map((difference) => (
                    <motion.button
                        key={difference.id}
                        className="absolute bg-transparent border-none outline-none focus:outline-none"
                        style={{
                            top: difference.y,
                            left: difference.x,
                            width: difference.width,
                            height: difference.height,
                            cursor: "pointer",
                        }}
                        onClick={(e) => handleClick(difference.id, e)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <AnimatePresence>
                            {foundDifferences.includes(difference.id) && (
                                <motion.div
                                    className="absolute top-0 left-0 w-full h-full bg-green-500 opacity-50 rounded"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.5 }}
                                    exit={{ opacity: 0 }}
                                />
                            )}
                        </AnimatePresence>
                    </motion.button>
                ))}
            </div>

            <AnimatePresence>
                {feedback && (
                    <motion.div
                        className={`mt-4 p-2 rounded-md ${feedback.correct ? "bg-green-700" : "bg-red-700"} text-white`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        {feedback.correct ? <CheckCircle className="inline-block mr-2" /> : <XCircle className="inline-block mr-2" />}
                        {feedback.message}
                    </motion.div>
                )}
            </AnimatePresence>

            {isGameOver && (
                <div className="mt-8 p-4 bg-slate-800 rounded-md text-center">
                    {allDifferencesFound ? (
                        <>
                            <h2 className="text-2xl font-bold mb-2">Congratulations! You found all the issues!</h2>
                            <p>Your score reflects your ability to identify common automation pitfalls. Well done!</p>
                        </>
                    ) : (
                        <>
                            <h2 className="text-2xl font-bold mb-2">Time&apos;s Up!</h2>
                            <p>Even with automation, overlooking details can lead to significant setbacks. Review the areas where automation faltered and consider improvements for future implementations.</p>
                        </>
                    )}
                </div>
            )}

            <div className="mt-4 space-x-4">
                {!gameStarted && !isGameOver && (
                    <motion.button
                        className="bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-teal-600"
                        onClick={startGame}
                        disabled={gameStarted}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Play className="inline-block mr-2" />
                        Start Game
                    </motion.button>
                )}

                {(gameStarted || isGameOver) && (
                    <motion.button
                        className="bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-600"
                        onClick={resetGame}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <RotateCcw className="inline-block mr-2" />
                        Reset Game
                    </motion.button>
                )}
            </div>
        </motion.div>
    );
};

export default AutomationSabotage;
