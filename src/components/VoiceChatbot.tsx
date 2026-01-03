'use client';

/**
 * Voice-Enabled AI Chatbot Component
 * Uses Google Cloud Speech-to-Text and Text-to-Speech APIs
 * Integrates with Brutus Intelligence API
 * 
 * @author BespokeEthos
 * @see https://cloud.google.com/speech-to-text
 * @see https://cloud.google.com/text-to-speech
 */

import { useState, useRef, useCallback, useEffect } from 'react';
import { Mic, MicOff, Volume2, VolumeX, MessageCircle, X, Send, Loader2 } from 'lucide-react';

// Web Speech API types are declared in src/types/speech-recognition.d.ts

// Types
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface VoiceChatbotProps {
  apiEndpoint?: string;
  welcomeMessage?: string;
  botName?: string;
  position?: 'bottom-right' | 'bottom-left';
}

// Google Cloud TTS Voice options
const VOICE_OPTIONS = {
  languageCode: 'en-US',
  name: 'en-US-Neural2-D', // Natural male voice
  ssmlGender: 'MALE' as const,
};

export function VoiceChatbot({
  apiEndpoint = '/api/brutus',
  welcomeMessage = "Hey! I'm the BespokeEthos AI assistant. I can help you understand how AI automation can transform your business. What's on your mind?",
  botName = 'Brutus',
  position = 'bottom-right',
}: VoiceChatbotProps) {
  // State
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Refs
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSendMessageRef = useRef<(text: string) => void>(() => {});

  // Initialize welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          role: 'assistant',
          content: welcomeMessage,
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, messages.length, welcomeMessage]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Toggle listening
  const toggleListening = useCallback(() => {
    if (!recognitionRef.current) {
      setError('Voice input not supported in this browser');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setTranscript('');
      recognitionRef.current.start();
      setIsListening(true);
    }
  }, [isListening]);

  // Text-to-Speech using Google Cloud TTS API
  const speakText = useCallback(async (text: string) => {
    if (isMuted) return;

    try {
      setIsSpeaking(true);

      // Call Google Cloud TTS API endpoint
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          voice: VOICE_OPTIONS,
        }),
      });

      if (!response.ok) {
        // Fallback to Web Speech API if Google Cloud fails
        fallbackSpeak(text);
        return;
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      
      if (audioRef.current) {
        audioRef.current.pause();
      }
      
      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      
      audio.onended = () => {
        setIsSpeaking(false);
        URL.revokeObjectURL(audioUrl);
      };
      
      audio.play();
    } catch (err) {
      console.error('TTS error:', err);
      fallbackSpeak(text);
    }
  }, [isMuted]);

  // Fallback to browser TTS
  const fallbackSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setIsSpeaking(false);
    }
  };

  // Stop speaking
  const stopSpeaking = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    window.speechSynthesis?.cancel();
    setIsSpeaking(false);
  }, []);

  // Send message to Brutus API
  const handleSendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
          model: 'gpt-4.1',
          temperature: 0.7,
          context: `You are ${botName}, an AI assistant for BespokeEthos. 
You help small business founders understand AI automation. 
Be friendly, direct, and avoid corporate jargon.
Remember: "I trained the models you're paying to use."
Key products: Cadence™ ($997/mo), Flowstack™ ($1,497), Premium Chatbot ($949+$149/mo).
NGLCC certified LGBTQ+ business with 25% discount for LGBTQ+ owners.`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const assistantContent = data.message?.content || data.choices?.[0]?.message?.content || "I'm having trouble responding. Please try again.";

      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: assistantContent,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      // Speak the response
      if (!isMuted) {
        speakText(assistantContent);
      }
    } catch (err) {
      console.error('Chat error:', err);
      setError('Failed to get response. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [apiEndpoint, messages, isMuted, speakText]);

  useEffect(() => {
    handleSendMessageRef.current = handleSendMessage;
  }, [handleSendMessage]);

  // Initialize Web Speech API for STT (fallback)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onresult = (event: SpeechRecognitionEvent) => {
          const current = event.resultIndex;
          const result = event.results[current];
          const transcriptText = result?.[0]?.transcript ?? "";
          if (!transcriptText) {
            return;
          }
          setTranscript(transcriptText);

          if (result?.isFinal) {
            handleSendMessageRef.current(transcriptText);
            setTranscript('');
          }
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
          console.error('Speech recognition error:', event.error);
          setIsListening(false);
          if (event.error === 'not-allowed') {
            setError('Microphone access denied. Please enable microphone permissions.');
          }
        };

        recognitionRef.current = recognition;
      }
    }
  }, []);

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputText);
  };

  // Position classes
  const positionClasses = position === 'bottom-right' 
    ? 'right-4 sm:right-6' 
    : 'left-4 sm:left-6';

  return (
    <>
      {/* Hidden audio element for TTS */}
      <audio ref={audioRef} className="hidden" />

      {/* Chat Widget Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`fixed bottom-4 sm:bottom-6 ${positionClasses} z-50 
            w-14 h-14 sm:w-16 sm:h-16 
            bg-gradient-to-br from-[#0f3460] to-[#533483] 
            rounded-full shadow-2xl 
            flex items-center justify-center
            hover:scale-110 transition-all duration-300
            group`}
          aria-label="Open AI Assistant"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-0 ${position === 'bottom-right' ? 'right-0 sm:right-6' : 'left-0 sm:left-6'} 
            sm:bottom-6 z-50
            w-full sm:w-[420px] h-[100dvh] sm:h-[600px] sm:max-h-[80vh]
            bg-[#1a1a2e] rounded-none sm:rounded-2xl
            shadow-2xl border-0 sm:border border-[#533483]/30
            flex flex-col overflow-hidden
            animate-in slide-in-from-bottom-4 duration-300`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-[#0f3460] to-[#533483]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-xl">🤖</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">{botName}</h3>
                <p className="text-xs text-white/70">AI Assistant • Online</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white/70" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-[#e94560] to-[#f39c12] text-white rounded-br-md'
                      : 'bg-white/10 text-white rounded-bl-md'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                  <span className="text-[10px] text-white/50 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-white/50 animate-spin" />
                    <span className="text-sm text-white/50">Thinking...</span>
                  </div>
                </div>
              </div>
            )}

            {transcript && (
              <div className="flex justify-end">
                <div className="bg-[#e94560]/50 rounded-2xl rounded-br-md px-4 py-3 border border-[#e94560]/30">
                  <p className="text-sm text-white/70 italic">{transcript}...</p>
                </div>
              </div>
            )}

            {error && (
              <div className="text-center p-2 bg-red-500/20 rounded-lg">
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Speaking Indicator */}
          {isSpeaking && (
            <div className="px-4 py-2 bg-[#533483]/30 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
                <span className="text-xs text-white/70">{botName} is speaking...</span>
                <button
                  onClick={stopSpeaking}
                  className="ml-auto text-xs text-white/50 hover:text-white underline"
                >
                  Stop
                </button>
              </div>
            </div>
          )}

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-[#16213e]">
            <div className="flex items-center gap-2">
              {/* Voice Input Button */}
              <button
                type="button"
                onClick={toggleListening}
                className={`p-3 rounded-full transition-all duration-300 ${
                  isListening
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
                aria-label={isListening ? 'Stop listening' : 'Start voice input'}
              >
                {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>

              {/* Text Input */}
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={isListening ? 'Listening...' : 'Type or speak your message...'}
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-3
                  text-white placeholder:text-white/40 
                  focus:outline-none focus:border-[#533483] focus:ring-2 focus:ring-[#533483]/30
                  transition-all"
                disabled={isLoading}
              />

              {/* Send Button */}
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                className="p-3 rounded-full bg-gradient-to-r from-[#e94560] to-[#f39c12] 
                  text-white disabled:opacity-50 disabled:cursor-not-allowed
                  hover:shadow-lg hover:scale-105 transition-all duration-300"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 mt-3">
              {['What is Cadence?', 'Show pricing', 'Book a call'].map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => handleSendMessage(suggestion)}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-white/60 
                    hover:bg-white/10 hover:text-white transition-colors border border-white/10"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default VoiceChatbot;
