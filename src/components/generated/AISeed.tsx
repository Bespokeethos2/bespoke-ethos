"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, XCircle, CheckCircle, AlertTriangle } from 'lucide-react';
import styled from 'styled-components';

const AISeed = () => {
    const [code, setCode] = useState(50);
    const [data, setData] = useState(50);
    const [compute, setCompute] = useState(50);
    const [seedHealth, setSeedHealth] = useState(50);
    const [output, setOutput] = useState<string | null>(null);
    const [message, setMessage] = useState<string>('Nurture the AI Seed with Code, Data, and Compute.');
    const [isHarvestable, setIsHarvestable] = useState(false);
    const [harvestCount, setHarvestCount] = useState(0);

    useEffect(() => {
        const health = code + data + compute;
        setSeedHealth(health / 3);

        if (seedHealth <= 0) {
            setMessage('The AI Seed has withered. Not enough resources.');
        } else if (seedHealth >= 90) {
            setMessage('The AI Seed is thriving! Ready to Harvest!');
            setIsHarvestable(true);
        } else {
            setMessage('Nurture the AI Seed with Code, Data, and Compute.');
            setIsHarvestable(false);
        }
    }, [code, data, compute, seedHealth]);

    const feedCode = () => {
        setCode(Math.min(100, code + 10));
        setData(Math.max(0, data - 5));
        setCompute(Math.max(0, compute - 5));
    };

    const feedData = () => {
        setData(Math.min(100, data + 10));
        setCode(Math.max(0, code - 5));
        setCompute(Math.max(0, compute - 5));
    };

    const feedCompute = () => {
        setCompute(Math.min(100, compute + 10));
        setCode(Math.max(0, code - 5));
        setData(Math.max(0, data - 5));
    };

    const resetSeed = () => {
        setCode(50);
        setData(50);
        setCompute(50);
        setSeedHealth(50);
        setOutput(null);
        setMessage('Nurture the AI Seed with Code, Data, and Compute.');
        setIsHarvestable(false);
        setHarvestCount(0);
    };

    const harvestSeed = useCallback(() => {
        if (isHarvestable) {
            const outputs = [
                'Generated a poem about digital dreams.',
                'Identified patterns in global climate data.',
                'Created a unique piece of generative art.',
                'Optimized energy consumption in smart grids.',
                'Developed a new algorithm for medical diagnosis.',
            ];
            const randomIndex = Math.floor(Math.random() * outputs.length);
            setOutput(outputs[randomIndex]);
            setMessage(outputs[randomIndex]);
            setHarvestCount(harvestCount + 1);
            setCode(50);
            setData(50);
            setCompute(50);
            setSeedHealth(50);
            setIsHarvestable(false);
        }
    }, [isHarvestable, harvestCount]);

    const renderParticles = () => {
        const particles = [];
        for (let i = 0; i < seedHealth; i++) {
            particles.push(
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-teal-400"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, delay: Math.random() }}
                />
            );
        }
        return particles;
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-teal-400 p-4">
            <h1 className="text-3xl font-bold mb-4">AI Seed</h1>
            <p className="mb-4">{message}</p>

            <div className="relative w-64 h-64 rounded-full bg-slate-800 border-2 border-slate-700 overflow-hidden">
                {renderParticles()}
                <motion.div
                    className="absolute w-full h-full rounded-full"
                    style={{
                        background: `radial-gradient(circle, rgba(64, 224, 208, ${seedHealth / 100}), rgba(47, 79, 79, 0))`
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-semibold z-10">
                    {seedHealth > 0 ? `${Math.round(seedHealth)}%` : "Withered"}
                </div>
            </div>

            <div className="flex justify-around w-full mt-4">
                <button onClick={feedCode} className="bg-slate-700 hover:bg-slate-600 text-teal-300 font-bold py-2 px-4 rounded">
                    Code ({code})
                </button>
                <button onClick={feedData} className="bg-slate-700 hover:bg-slate-600 text-teal-300 font-bold py-2 px-4 rounded">
                    Data ({data})
                </button>
                <button onClick={feedCompute} className="bg-slate-700 hover:bg-slate-600 text-teal-300 font-bold py-2 px-4 rounded">
                    Compute ({compute})
                </button>
            </div>

            <div className="w-full mt-6">
                <div className="flex justify-between">
                    <span>Code</span>
                    <span>Data</span>
                    <span>Compute</span>
                </div>
                <div className="flex h-4 bg-slate-700 rounded">
                    <div className="bg-teal-500" style={{ width: `${code}%` }}></div>
                    <div className="bg-purple-500" style={{ width: `${data}%` }}></div>
                    <div className="bg-orange-500" style={{ width: `${compute}%` }}></div>
                </div>
            </div>

            <div className="mt-6 flex space-x-4">
                <button
                    onClick={harvestSeed}
                    disabled={!isHarvestable}
                    className={`bg-teal-600 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded ${isHarvestable ? '' : 'opacity-50 cursor-not-allowed'}`}
                >
                    Harvest <Play className="inline-block ml-2" size={16} />
                </button>
                <button
                    onClick={resetSeed}
                    className="bg-slate-600 hover:bg-slate-500 text-teal-200 font-bold py-2 px-4 rounded"
                >
                    Reset <RotateCcw className="inline-block ml-2" size={16} />
                </button>
            </div>

            {output && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="mt-8 p-4 bg-slate-800 rounded shadow-md"
                >
                    <p>Output: {output}</p>
                </motion.div>
            )}

            <p className="mt-4">Harvest Count: {harvestCount}</p>
        </div>
    );
};

export default AISeed;