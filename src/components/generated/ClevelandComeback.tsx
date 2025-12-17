"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Factory, Heart, Truck, AlertTriangle } from 'lucide-react';

interface Sector {
    name: string;
    health: number;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const ClevelandComeback = () => {
    const [aiBricks, setAiBricks] = useState(10);
    const [sectors, setSectors] = useState<Sector[]>([
        { name: 'Manufacturing', health: 50, icon: Factory },
        { name: 'Healthcare', health: 50, icon: Heart },
        { name: 'Logistics', health: 50, icon: Truck },
    ]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [message, setMessage] = useState('');

    const handleBrickAllocation = useCallback((sectorName: string) => {
        if (aiBricks > 0 && !gameOver) {
            setAiBricks((prevBricks) => prevBricks - 1);

            setSectors((prevSectors) =>
                prevSectors.map((sector) =>
                    sector.name === sectorName
                        ? { ...sector, health: Math.min(100, sector.health + 15) }
                        : sector
                )
            );
        } else if (gameOver) {
            setMessage('Game Over. Please restart.');
        }
         else {
            setMessage('Not enough AI Bricks!');
        }
    }, [aiBricks, gameOver]);

    const handleSectorNeglect = useCallback(() => {
        setSectors((prevSectors) =>
            prevSectors.map((sector) => ({ ...sector, health: Math.max(0, sector.health - 5) }))
        );
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleSectorNeglect();
        }, 3000);

        return () => clearInterval(intervalId);
    }, [handleSectorNeglect]);

    useEffect(() => {
        const newScore = sectors.reduce((acc, sector) => acc + sector.health, 0);
        setScore(newScore);

        if (sectors.every((sector) => sector.health <= 0)) {
            setGameOver(true);
            setMessage('All sectors have collapsed! Game Over!');
        }

        if (aiBricks === 0 && sectors.every(sector => sector.health >= 75)) {
             setGameOver(true);
             setMessage('All sectors are thriving! You win!');
        }

    }, [sectors, aiBricks]);

    const handleReset = () => {
        setAiBricks(10);
        setSectors([
            { name: 'Manufacturing', health: 50, icon: Factory },
            { name: 'Healthcare', health: 50, icon: Heart },
            { name: 'Logistics', health: 50, icon: Truck },
        ]);
        setScore(0);
        setGameOver(false);
        setMessage('');
    };

    return (
        <motion.div
            className="bg-slate-900 min-h-screen flex flex-col items-center justify-center p-4 text-teal-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-3xl font-bold mb-4">Cleveland Comeback</h1>

            <div className="mb-4">
                AI Bricks: {aiBricks}
            </div>
            <div className="mb-4">
                Score: {score}
            </div>

             {message && (
                <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mb-4 p-2 bg-red-800 text-white rounded-md flex items-center"
              >
                <AlertTriangle className="mr-2" />
                {message}
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {sectors.map((sector) => (
                    <motion.div
                        key={sector.name}
                        className="border border-slate-700 rounded-md p-4 flex flex-col items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => !gameOver && handleBrickAllocation(sector.name)}
                        style={{cursor: gameOver ? 'not-allowed' : 'pointer'}}
                    >
                        <sector.icon className="w-8 h-8 mb-2" />
                        <h2 className="text-xl">{sector.name}</h2>
                        <div className="w-full bg-slate-700 rounded-full h-4 mt-2">
                            <motion.div
                                className="bg-coral-500 h-4 rounded-full"
                                style={{ width: `${sector.health}%` }}
                            />
                        </div>
                        <p className="text-sm mt-1">{sector.health}%</p>
                    </motion.div>
                ))}
            </div>

            <button
                className="mt-8 bg-teal-700 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleReset}
            >
                <RotateCcw className="inline-block mr-2" />
                Reset
            </button>
        </motion.div>
    );
};

export default ClevelandComeback;