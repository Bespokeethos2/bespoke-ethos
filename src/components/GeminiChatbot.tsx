
'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import { Send, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export function GeminiChatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) throw new Error('Failed to fetch');

      const data = await response.json();
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message || 'Sorry, I could not generate a response.',
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {/* Floating Action Button */}
      <motion.div 
        className="fixed bottom-4 right-4 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        {!isOpen && (
            <button 
                onClick={() => setIsOpen(true)}
                className="h-14 w-14 rounded-full bg-teal-500 hover:bg-teal-400 shadow-lg shadow-teal-500/20 flex items-center justify-center"
            >
                <MessageCircle className="h-6 w-6 text-slate-900" />
            </button>
        )}
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 100, scale: 0.95 }}
                className="fixed inset-0 sm:inset-auto sm:bottom-4 sm:right-4 sm:w-[400px] sm:h-[600px] bg-slate-900 sm:rounded-2xl border border-slate-700 shadow-2xl z-50 flex flex-col overflow-hidden"
            >
                {/* Header */}
                <div className="p-4 bg-slate-800 border-b border-slate-700 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                        <span className="font-bold text-slate-100">Bespoke Assistant</span>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-700 rounded-md">
                        <X className="h-5 w-5 text-slate-400" />
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
                    {messages.length === 0 && (
                        <div className="text-center text-slate-500 mt-10">
                            <p className="text-sm">Powered by Google Gemini</p>
                            <p className="mt-2 text-lg font-medium text-slate-300">How can I automate your workflow?</p>
                        </div>
                    )}
                    
                    {messages.map(m => (
                        <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                                m.role === 'user' 
                                    ? 'bg-teal-500 text-slate-900 rounded-br-none' 
                                    : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                            }`}>
                                {m.content}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-slate-800 rounded-2xl px-4 py-2 border border-slate-700">
                                <span className="animate-pulse">...</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Input */}
                <form onSubmit={handleSubmit} className="p-4 bg-slate-800 border-t border-slate-700 flex gap-2">
                    <input 
                        value={input} 
                        onChange={handleInputChange} 
                        placeholder="Ask about AI..."
                        className="flex-1 bg-slate-900 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus:ring-2 focus:ring-teal-500 rounded-md px-3 py-2"
                    />
                    <button type="submit" className="bg-teal-500 hover:bg-teal-400 text-slate-900 p-2 rounded-md">
                        <Send className="h-4 w-4" />
                    </button>
                </form>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import React from 'react';
