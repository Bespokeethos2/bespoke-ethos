
'use client';

import { useChat } from 'ai/react';
import { useRef, useEffect } from 'react';
import { Send, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';

export function GeminiChatbot() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat/google',
  });
  
  const [isOpen, setIsOpen] = React.useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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
            <Button 
                onClick={() => setIsOpen(true)}
                className="h-14 w-14 rounded-full bg-teal-500 hover:bg-teal-400 shadow-lg shadow-teal-500/20"
            >
                <MessageCircle className="h-6 w-6 text-slate-900" />
            </Button>
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
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                        <X className="h-5 w-5 text-slate-400" />
                    </Button>
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
                    <Input 
                        value={input} 
                        onChange={handleInputChange} 
                        placeholder="Ask about AI..."
                        className="flex-1 bg-slate-900 border-slate-700 text-slate-100 placeholder:text-slate-500 focus-visible:ring-teal-500"
                    />
                    <Button type="submit" size="icon" className="bg-teal-500 hover:bg-teal-400 text-slate-900">
                        <Send className="h-4 w-4" />
                    </Button>
                </form>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
