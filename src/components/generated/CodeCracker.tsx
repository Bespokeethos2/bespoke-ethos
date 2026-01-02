"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, CheckCircle, AlertTriangle } from 'lucide-react';

const CodeCracker = () => {
    const [level, setLevel] = useState(1);
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(30);
    const [gameStarted, setGameStarted] = useState(false);
    const [codeRevealed, setCodeRevealed] = useState<boolean[]>([false, false, false, false]);

    const totalCodeSegments = 4;

    useEffect(() => {
        if (!gameStarted || time <= 0) return;
        const intervalId = setInterval(() => {
            setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [gameStarted, time]);

    const startGame = () => {
        setGameStarted(true);
        setTime(30);
        setCodeRevealed([false, false, false, false]);
        setScore(0);
        setLevel(1);
    };

    const resetGame = () => {
        setGameStarted(false);
        setTime(30);
        setCodeRevealed([false, false, false, false]);
        setScore(0);
        setLevel(1);
    };

    const revealCode = (index: number) => {
        const isGameOver = gameStarted && time <= 0;
        if (!gameStarted || isGameOver) return;
        const newCodeRevealed = [...codeRevealed];
        newCodeRevealed[index] = true;
        setCodeRevealed(newCodeRevealed);

        if (newCodeRevealed.every(Boolean)) {
            setScore(prevScore => prevScore + level * 100);
            setLevel(prevLevel => prevLevel + 1);
            setTime(prevTime => prevTime + 10);
            setCodeRevealed([false, false, false, false]);
        }
    };

    const allCodeRevealed = codeRevealed.every(Boolean);
    const isGameOver = gameStarted && time <= 0;

    const getCodeSnippet = (index: number) => {
        switch (index) {
            case 0:
                return `// Button Click Handler\nfunction handleClick() {\n  console.log("Button clicked!");\n}`;
            case 1:
                return `// Input Field Change Event\nfunction handleChange(event) {\n  const value = event.target.value;\n  // Update state\n}`;
            case 2:
                return `// Form Submission Logic\nfunction handleSubmit(event) {\n  event.preventDefault();\n  // Send data to server\n}`;
            case 3:
                return `// Data Fetching (Example)\nuseEffect(() => {\n  fetch('/api/data')\n    .then(response => response.json())\n    .then(data => console.log(data));\n}, []);`;
            default:
                return "// No code here!";
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
            <h1 className="text-3xl font-bold mb-4">Code Cracker</h1>
            <p className="mb-4">Crack the &apos;No-Code&apos; Myth!</p>

            <div className="flex space-x-4 mb-4">
                <div>Level: {level}</div>
                <div>Score: {score}</div>
                <div>Time: {time}</div>
            </div>

            <div className="relative">
                <svg width="400" height="300" className="border-2 border-slate-700 rounded-md">
                    <rect width="100%" height="100%" fill="#1e293b" />
                    <rect
                        x="50"
                        y="50"
                        width="100"
                        height="50"
                        fill="#334155"
                        className="cursor-pointer hover:opacity-75"
                        onClick={() => revealCode(0)}
                    />
                    <circle
                        cx="250"
                        cy="75"
                        r="25"
                        fill="#334155"
                        className="cursor-pointer hover:opacity-75"
                        onClick={() => revealCode(1)}
                    />
                    <polygon
                        points="50,200 150,200 100,150"
                        fill="#334155"
                        className="cursor-pointer hover:opacity-75"
                        onClick={() => revealCode(2)}
                    />
                    <text x="200" y="250" fill="white" className="cursor-pointer hover:opacity-75" onClick={() => revealCode(3)}>
                        Text Element
                    </text>
                </svg>

                <AnimatePresence>
                    {codeRevealed.map((revealed, index) => (
                        revealed && (
                            <motion.div
                                key={index}
                                className="absolute bg-slate-800 bg-opacity-70 border border-slate-700 rounded-md p-2 text-sm"
                                style={{
                                    top: index === 0 ? '20px' : index === 1 ? '0px' : index === 2 ? '120px' : '180px',
                                    left: index === 0 ? '20px' : index === 1 ? '180px' : index === 2 ? '20px' : '170px',
                                    zIndex: 10,
                                }}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <pre className="text-xs">{getCodeSnippet(index)}</pre>
                            </motion.div>
                        )
                    ))}
                </AnimatePresence>
            </div>

            <div className="mt-4">
                {!gameStarted && !isGameOver && (
                    <motion.button
                        className="bg-teal-700 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={startGame}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Play className="inline-block mr-2" size={16} />
                        Start Game
                    </motion.button>
                )}

                {isGameOver && (
                    <div className="text-red-500 font-bold mb-2">
                        <AlertTriangle className="inline-block mr-2" size={16} />
                        Game Over!
                    </div>
                )}

                {(gameStarted || isGameOver) && (
                    <motion.button
                        className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={resetGame}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <RotateCcw className="inline-block mr-2" size={16} />
                        Reset Game
                    </motion.button>
                )}
            </div>

            {allCodeRevealed && gameStarted && (
                <motion.div
                    className="text-green-500 font-bold mt-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                >
                    <CheckCircle className="inline-block mr-2" size={16} />
                    Level Complete!
                </motion.div>
            )}
        </motion.div>
    );
};

export default CodeCracker;
