"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Lightbulb, Brain, CheckCircle, XCircle } from 'lucide-react';

const AIOracle = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [predictionMade, setPredictionMade] = useState(false);
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const events = [
    {
      description: 'Predict website traffic for a known product launch.',
      correctValue: 40, // Predictive AI favored
      feedbackCorrect: 'Predictive models excel at forecasting based on historical data.',
      feedbackIncorrect: 'Generative models may overemphasize potential novelty, skewing the forecast.'
    },
    {
      description: 'Forecast sales leads from a brand new marketing campaign.',
      correctValue: 70, // Generative AI favored
      feedbackCorrect: 'Generative models can simulate diverse scenarios, crucial for novel situations.',
      feedbackIncorrect: 'Predictive models struggle without existing data for a new campaign.'
    },
    {
      description: 'Estimate energy consumption for a city on a typical summer day.',
      correctValue: 30, // Predictive AI favored
      feedbackCorrect: 'Predictive AI uses historical data to accurately estimate based on weather patterns.',
      feedbackIncorrect: 'Generative models may introduce unnecessary variations, reducing accuracy.'
    },
    {
      description: 'Project the success of an experimental cancer treatment.',
      correctValue: 60, // Generative AI favored - simulates complex interactions
      feedbackCorrect: 'Generative models can simulate complex biological interactions, improving accuracy.',
      feedbackIncorrect: 'Predictive models require a larger dataset of past treatment outcomes.'
    },
    {
      description: 'Anticipate stock market movement for a stable company.',
      correctValue: 20, // Predictive AI favored - relies on historical trends.
      feedbackCorrect: 'Predictive AI models thrive on stable trend analysis for stock market prediction.',
      feedbackIncorrect: 'Generative AI introduces unwarranted volatility to forecasting stock market behaviour.'
    },
  ];

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(event.target.value));
  };

  const handleSubmit = () => {
    if (!predictionMade) {
      const difference = Math.abs(sliderValue - events[currentEventIndex].correctValue);
      const isCorrect = difference <= 15; // Adjust threshold as needed

      if (isCorrect) {
        setScore(prevScore => prevScore + 100);
        setResult('correct');
        setFeedbackMessage(events[currentEventIndex].feedbackCorrect);

      } else {
        setResult('incorrect');
        setFeedbackMessage(events[currentEventIndex].feedbackIncorrect);
      }
      setPredictionMade(true);
    }
  };

  const handleNextEvent = () => {
    if (predictionMade) {
      setCurrentEventIndex(prevIndex => (prevIndex + 1) % events.length);
      setPredictionMade(false);
      setResult(null);
      setFeedbackMessage('');
    }
  };

  const handleResetGame = () => {
    setCurrentEventIndex(0);
    setScore(0);
    setSliderValue(50);
    setPredictionMade(false);
    setResult(null);
    setFeedbackMessage('');
  };

  useEffect(() => {
    if (result === 'correct') {
      // Trigger particle effect animation (basic implementation, can be improved)
      const sparks = document.querySelectorAll('.spark');
      sparks.forEach(spark => {
        spark.classList.add('animate-spark');
        spark.addEventListener('animationend', () => {
          spark.classList.remove('animate-spark');
        });
      });
    }
  }, [result]);


  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl text-teal-400 mb-4">AI Oracle</h1>

      <div className="bg-slate-800 rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="mb-4">
          <p className="text-lg text-gray-300 mb-2">{events[currentEventIndex].description}</p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500">Predictive</span>
          <motion.input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={handleSliderChange}
            className="w-32 h-2 bg-teal-600 rounded-lg appearance-none cursor-pointer accent-teal-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={predictionMade}
          />
          <span className="text-sm text-gray-500">Generative</span>
        </div>

        <div className="flex justify-between mb-4">
          <button
            className="bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleSubmit}
            disabled={predictionMade}
          >
            <Play className="inline-block mr-2" size={16} />
            Predict
          </button>

          <button
            className="bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-600"
            onClick={handleNextEvent}
            disabled={!predictionMade}
          >
            <RotateCcw className="inline-block mr-2" size={16} />
            Next Event
          </button>
        </div>

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-4 p-3 rounded-md"
              style={{ backgroundColor: result === 'correct' ? 'rgba(0, 128, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)', border: result === 'correct' ? '1px solid green' : '1px solid red' }}
            >
              {result === 'correct' ? (
                <div className="flex items-center text-green-400">
                  <CheckCircle className="mr-2" size={20} />
                  <span className="font-bold">Correct!</span>
                </div>
              ) : (
                <div className="flex items-center text-red-400">
                  <XCircle className="mr-2" size={20} />
                  <span className="font-bold">Incorrect.</span>
                </div>
              )}
              <p className="text-gray-400 mt-2">{feedbackMessage}</p>
              {result === 'correct' && (
                <>
                  <div className="spark spark-1"></div>
                  <div className="spark spark-2"></div>
                  <div className="spark spark-3"></div>
                </>
              )}

            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center space-x-4">
        <div className="text-xl text-teal-400">Score: {score}</div>
        <button
          className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-600"
          onClick={handleResetGame}
        >
          <RotateCcw className="inline-block mr-2" size={16} />
          Reset Game
        </button>
      </div>

      <style jsx>{`
            .spark {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 10px;
                height: 10px;
                background-color: coral;
                border-radius: 50%;
                opacity: 0;
                transform: translate(-50%, -50%);
            }
            .spark-1 { animation-delay: 0.1s; }
            .spark-2 { animation-delay: 0.3s; }
            .spark-3 { animation-delay: 0.5s; }

            .animate-spark {
                animation: sparkEffect 0.7s ease-out forwards;
            }

            @keyframes sparkEffect {
                0% {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0);
                }
                50% {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1.5);
                }
                100% {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(2.5);
                }
            }
        `}</style>

    </div>
  );
};

export default AIOracle;