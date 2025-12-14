"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Flag, Truck, Package, AlertTriangle, CheckCircle } from 'lucide-react';

interface DeliveryPoint {
    id: string;
    x: number;
    y: number;
    name: string;
}

const RouteOptimizer = () => {
    const [deliveryPoints, setDeliveryPoints] = useState<DeliveryPoint[]>([
        { id: 'A', x: 50, y: 100, name: 'Warehouse' },
        { id: 'B', x: 200, y: 150, name: 'Downtown' },
        { id: 'C', x: 350, y: 50, name: 'University' },
        { id: 'D', x: 400, y: 200, name: 'Hospital' },
    ]);

    const [route, setRoute] = useState<string[]>(['A', 'B', 'C', 'D']);
    const [draggingPoint, setDraggingPoint] = useState<string | null>(null);
    const [traffic, setTraffic] = useState<{ x: number; y: number }[]>([]);
    const [fuel, setFuel] = useState(100);
    const [cost, setCost] = useState(0);
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailed, setIsFailed] = useState(false);

    const mapRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (isRunning) {
            const trafficInterval = setInterval(() => {
                setTraffic(prevTraffic => {
                    const newTraffic = [...prevTraffic];
                    if (Math.random() < 0.3) { // 30% chance to add traffic
                        newTraffic.push({
                            x: Math.random() * 500,
                            y: Math.random() * 300,
                        });
                    }
                    if (newTraffic.length > 5) {
                        newTraffic.shift(); // Limit traffic count
                    }
                    return newTraffic;
                });
            }, 2000);

            const fuelInterval = setInterval(() => {
                setFuel(prevFuel => Math.max(0, prevFuel - 1));
            }, 500);

            const timerInterval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);

            return () => {
                clearInterval(trafficInterval);
                clearInterval(fuelInterval);
                clearInterval(timerInterval);
            };
        }
    }, [isRunning]);

    useEffect(() => {
        if (fuel <= 0) {
            setIsRunning(false);
            setIsFailed(true);
            alert("Out of Fuel! Mission Failed.");
        }
    }, [fuel]);

    const handleDragStart = (id: string) => {
        setDraggingPoint(id);
    };

    const handleDrag = (e: React.MouseEvent<SVGSVGElement>) => {
        if (draggingPoint) {
            const svg = mapRef.current;
            if (!svg) return;
            const point = svg.createSVGPoint();
            point.x = e.clientX;
            point.y = e.clientY;
            const cursorpt = point.matrixTransform(svg.getScreenCTM()?.inverse());

            setDeliveryPoints(prevPoints =>
                prevPoints.map(point =>
                    point.id === draggingPoint
                        ? { ...point, x: cursorpt.x, y: cursorpt.y }
                        : point
                )
            );
        }
    };

    const handleDragEnd = () => {
        setDraggingPoint(null);

        //Basic route re-ordering (very rudimentary, replace with TSP solver)
        const newRoute = [...route]; // Simple re-ordering
        setRoute(newRoute);
        recalculateStats();
    };

    const calculateDistance = (p1: DeliveryPoint, p2: DeliveryPoint) => {
        return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    };

    const recalculateStats = () => {
        let totalDistance = 0;
        for (let i = 0; i < route.length - 1; i++) {
            const point1 = deliveryPoints.find(p => p.id === route[i]);
            const point2 = deliveryPoints.find(p => p.id === route[i + 1]);
            if (point1 && point2) {
                totalDistance += calculateDistance(point1, point2);
            }
        }

        setCost(Math.round(totalDistance * 0.5));
        // Time is somewhat correlated to distance... and some randomness.
        setTime(Math.round(totalDistance / 20 + Math.random() * 10));

    };

    const handleStart = () => {
        setIsRunning(true);
        setIsSuccess(false);
        setIsFailed(false);
        setFuel(100);
        setCost(0);
        setTime(0);
        setTraffic([]); //reset
    };

    const handleReset = () => {
        setIsRunning(false);
        setIsSuccess(false);
        setIsFailed(false);
        setDeliveryPoints([
            { id: 'A', x: 50, y: 100, name: 'Warehouse' },
            { id: 'B', x: 200, y: 150, name: 'Downtown' },
            { id: 'C', x: 350, y: 50, name: 'University' },
            { id: 'D', x: 400, y: 200, name: 'Hospital' },
        ]);
        setRoute(['A', 'B', 'C', 'D']);
        setFuel(100);
        setCost(0);
        setTime(0);
        setTraffic([]); //reset
    };

    useEffect(() => {
        if (time > 60) {
            setIsRunning(false);
            setIsFailed(true);
            alert("Delivery Overdue! Mission Failed.");
        }

        if (isRunning && deliveryPoints.every(point => point.x > 0 && point.y > 0) && fuel > 0 && time < 60) {
            setIsSuccess(true);
        }
    }, [time, fuel, deliveryPoints, isRunning]);

    return (
        <motion.div className="bg-slate-900 text-teal-400 min-h-screen flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold mb-4">Route Optimizer</h1>
            <p className="mb-4 text-sm">Drag the delivery points to optimize the route.</p>

            <div className="flex flex-col md:flex-row gap-4">
                <div className="border border-slate-700 rounded-md p-4">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-semibold">Map of Cleveland</h2>
                        <div className="flex gap-2">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="bg-teal-700 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
                                onClick={handleStart}
                                disabled={isRunning}
                            >
                                <Play className="inline-block mr-2" size={16} />
                                Start
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
                                onClick={handleReset}
                            >
                                <RotateCcw className="inline-block mr-2" size={16} />
                                Reset
                            </motion.button>
                        </div>
                    </div>

                    <svg
                        ref={mapRef}
                        width="500"
                        height="300"
                        className="bg-slate-800 rounded-md cursor-grab active:cursor-grabbing"
                        onMouseMove={isRunning ? handleDrag : undefined}
                        onMouseUp={handleDragEnd}
                        onMouseLeave={handleDragEnd}
                    >
                        {/* Map Background (simple rectangle) */}
                        <rect width="100%" height="100%" fill="#27272a" />

                        {/* Route Line */}
                        {isRunning &&
                            route.slice(0, route.length - 1).map((pointId, index) => {
                                const startPoint = deliveryPoints.find(p => p.id === pointId);
                                const endPoint = deliveryPoints.find(p => p.id === route[index + 1]);

                                if (startPoint && endPoint) {
                                    return (
                                        <line
                                            key={`${startPoint.id}-${endPoint.id}`}
                                            x1={startPoint.x}
                                            y1={startPoint.y}
                                            x2={endPoint.x}
                                            y2={endPoint.y}
                                            stroke="#14b8a6"
                                            strokeWidth="3"
                                        />
                                    );
                                }
                                return null;
                            })}

                        {/* Traffic Obstacles */}
                        {isRunning && traffic.map((t, index) => (
                            <motion.circle
                                key={index}
                                cx={t.x}
                                cy={t.y}
                                r="8"
                                fill="red"
                                className="animate-pulse"
                            />
                        ))}

                        {/* Delivery Points */}
                        {deliveryPoints.map(point => (
                            <motion.circle
                                key={point.id}
                                cx={point.x}
                                cy={point.y}
                                r="12"
                                fill="#ddd6fe"
                                stroke="#7c3aed"
                                strokeWidth="2"
                                className="cursor-grab active:cursor-grabbing"
                                onMouseDown={() => isRunning ? handleDragStart(point.id) : null}
                                whileHover={{ scale: 1.2 }}
                            >
                            </motion.circle>
                        ))}

                        {deliveryPoints.map(point => (
                            <text
                                key={`text-${point.id}`}
                                x={point.x + 15}
                                y={point.y + 5}
                                fill="white"
                                fontSize="12"
                            >
                                {point.name}
                            </text>
                        ))}
                    </svg>

                </div>

                {/* Stats & Controls */}
                <div className="border border-slate-700 rounded-md p-4 flex flex-col gap-2 w-full md:w-auto">
                    <h2 className="text-xl font-semibold mb-2">Mission Details</h2>
                    <div className="flex items-center gap-2">
                        <Truck className="text-teal-500" size={20} />
                        Fuel:
                        <motion.div
                            className="bg-slate-700 h-4 rounded-md w-full"
                            style={{ width: `${fuel}%` }}
                        >
                            <motion.div
                                className="bg-green-500 h-4 rounded-md"
                                style={{ width: `${fuel}%` }}
                            />
                        </motion.div>
                        {fuel}%
                    </div>

                    <div className="flex items-center gap-2">
                        <Package className="text-teal-500" size={20} />
                        Cost: ${cost}
                    </div>

                    <div className="flex items-center gap-2">
                        <Flag className="text-teal-500" size={20} />
                        Time: {time}s
                    </div>

                    <AnimatePresence>
                        {isSuccess && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                className="flex items-center justify-center bg-green-700 text-white py-2 px-4 rounded-md mt-4"
                            >
                                <CheckCircle className="mr-2" size={20} />
                                Mission Success!
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {isFailed && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                className="flex items-center justify-center bg-red-700 text-white py-2 px-4 rounded-md mt-4"
                            >
                                <AlertTriangle className="mr-2" size={20} />
                                Mission Failed!
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

export default RouteOptimizer;