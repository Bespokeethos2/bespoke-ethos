'use client';

/**
 * AI 101 Tooltip Component
 * Educational tooltips for AI terminology
 * Accessible, keyboard-navigable, mobile-friendly
 * 
 * @see https://web.dev/building-a-tooltip-component
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/
 */

import { useState, useRef, useEffect, ReactNode } from 'react';
import { Info, X, BookOpen } from 'lucide-react';

// AI Glossary Database
export const AI_GLOSSARY: Record<string, { term: string; definition: string; example?: string }> = {
  // Core AI Terms
  'ai': {
    term: 'Artificial Intelligence (AI)',
    definition: 'Computer systems that can perform tasks typically requiring human intelligence, like understanding language, recognizing patterns, and making decisions.',
    example: 'A chatbot that answers customer questions is using AI.',
  },
  'machine-learning': {
    term: 'Machine Learning (ML)',
    definition: 'A type of AI where computers learn from data patterns rather than following explicit programming rules.',
    example: 'Netflix recommending shows based on what you watched.',
  },
  'llm': {
    term: 'Large Language Model (LLM)',
    definition: 'AI systems trained on massive amounts of text to understand and generate human-like language. Examples include GPT-4 and Claude.',
    example: 'ChatGPT is an LLM that can write emails, answer questions, and help with tasks.',
  },
  'prompt': {
    term: 'Prompt',
    definition: 'The input or instruction you give to an AI to tell it what you want it to do.',
    example: '"Write me a professional email declining a meeting" is a prompt.',
  },
  'automation': {
    term: 'Automation',
    definition: 'Using technology to perform repetitive tasks without human intervention, saving time and reducing errors.',
    example: 'Automatically sending a welcome email when someone signs up.',
  },
  'workflow': {
    term: 'Workflow',
    definition: 'A sequence of steps or tasks that complete a business process, often automated to save time.',
    example: 'Lead comes in → CRM updated → Follow-up email sent → Task created.',
  },
  'integration': {
    term: 'Integration',
    definition: 'Connecting different software tools so they can share data and work together automatically.',
    example: 'Connecting your website form to your email marketing tool.',
  },
  'rag': {
    term: 'RAG (Retrieval Augmented Generation)',
    definition: 'An AI technique that retrieves relevant information from a knowledge base before generating a response, making answers more accurate.',
    example: 'An AI assistant that searches your company documents to answer customer questions.',
  },
  'fine-tuning': {
    term: 'Fine-Tuning',
    definition: 'Customizing an AI model by training it on your specific data to make it better at your particular use case.',
    example: 'Training a model on your customer support tickets so it understands your products.',
  },
  'hallucination': {
    term: 'Hallucination',
    definition: 'When an AI confidently generates incorrect or made-up information as if it were true.',
    example: 'An AI citing a fake research paper that doesn\'t exist.',
  },
  'token': {
    term: 'Token',
    definition: 'A unit of text (roughly 4 characters or 3/4 of a word) that AI models use to process language. Usage is often priced per token.',
    example: 'The word "automation" is about 3 tokens.',
  },
  'api': {
    term: 'API (Application Programming Interface)',
    definition: 'A way for different software applications to communicate with each other and share data.',
    example: 'Your website uses an API to get real-time weather data.',
  },
  'chatbot': {
    term: 'Chatbot',
    definition: 'An AI program that can have conversations with humans, usually through text or voice.',
    example: 'The chat bubble in the corner of websites that answers questions.',
  },
  'natural-language-processing': {
    term: 'Natural Language Processing (NLP)',
    definition: 'AI technology that helps computers understand, interpret, and respond to human language.',
    example: 'When Siri understands your spoken request.',
  },
  'cognitive-prosthetic': {
    term: 'Cognitive Prosthetic',
    definition: 'AI tools designed to augment and support human thinking, memory, and decision-making—like a "brain extension."',
    example: 'An AI that remembers all your client conversations and suggests follow-ups.',
  },
  'alignment': {
    term: 'AI Alignment',
    definition: 'Ensuring AI systems behave in ways that match human intentions and values.',
    example: 'Training a customer service AI to be helpful but never deceptive.',
  },
  'consensus-engine': {
    term: 'Consensus Engine',
    definition: 'A multi-model AI system that runs decisions through multiple AI models to debate, challenge, and synthesize recommendations for high-stakes choices.',
    example: 'When you have no clear answer, the Consensus Engine weighs options from multiple AI perspectives.',
  },
};

interface AI101TooltipProps {
  term: keyof typeof AI_GLOSSARY;
  children: ReactNode;
  inline?: boolean;
}

export function AI101Tooltip({ term, children, inline = true }: AI101TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const glossaryEntry = AI_GLOSSARY[term];
  const hasEntry = Boolean(glossaryEntry);

  // Position calculation
  useEffect(() => {
    if (!isOpen || !triggerRef.current || !tooltipRef.current) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      if (!triggerRef.current || !tooltipRef.current) {
        return;
      }

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let top = triggerRect.bottom + 8;
      let left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);

      // Prevent going off-screen horizontally
      if (left < 16) left = 16;
      if (left + tooltipRect.width > viewportWidth - 16) {
        left = viewportWidth - tooltipRect.width - 16;
      }

      // Flip to top if not enough space below
      if (top + tooltipRect.height > viewportHeight - 16) {
        top = triggerRect.top - tooltipRect.height - 8;
      }

      setPosition({ top, left });
    });

    return () => cancelAnimationFrame(frame);
  }, [isOpen]);

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node) &&
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => setIsOpen(true), 200);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => setIsOpen(false), 300);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleTooltipMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleTooltipMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 300);
  };

  const tooltipId = `ai101-tooltip-${term}`;

  if (!hasEntry) {
    console.warn(`AI101Tooltip: Unknown term "${term}"`);
    return <>{children}</>;
  }

  return (
    <>
      {/* Trigger */}
      <span
        ref={triggerRef}
        role="button"
        tabIndex={0}
        aria-describedby={isOpen ? tooltipId : undefined}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        className={`
          cursor-help border-b-2 border-dashed border-[#533483]/50 
          hover:border-[#533483] transition-colors
          ${inline ? 'inline' : 'inline-flex items-center gap-1'}
        `}
      >
        {children}
        {!inline && <Info className="w-4 h-4 text-[#533483]" />}
      </span>

      {/* Tooltip Portal */}
      {isOpen && (
        <div
          ref={tooltipRef}
          id={tooltipId}
          role="tooltip"
          onMouseEnter={handleTooltipMouseEnter}
          onMouseLeave={handleTooltipMouseLeave}
          className="fixed z-[9999] w-[320px] max-w-[calc(100vw-32px)]"
          style={{ top: position.top, left: position.left }}
        >
          <div className="bg-[#1a1a2e] border border-[#533483]/30 rounded-xl shadow-2xl overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-[#0f3460] to-[#533483]">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-white/80" />
                <span className="text-xs font-medium text-white/80">AI 101</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded hover:bg-white/10 transition-colors"
                aria-label="Close tooltip"
              >
                <X className="w-3 h-3 text-white/60" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              <h4 className="font-semibold text-white text-sm">
                {glossaryEntry.term}
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                {glossaryEntry.definition}
              </p>
              {glossaryEntry.example && (
                <div className="bg-white/5 rounded-lg p-3 border-l-2 border-[#f39c12]">
                  <p className="text-xs text-white/60 mb-1">Example:</p>
                  <p className="text-sm text-white/80 italic">
                    {glossaryEntry.example}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Arrow */}
          <div 
            className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 
              border-l-[8px] border-l-transparent 
              border-r-[8px] border-r-transparent 
              border-b-[8px] border-b-[#0f3460]"
          />
        </div>
      )}
    </>
  );
}

// Convenience component for inline usage
export function AITerm({ 
  term, 
  label 
}: { 
  term: keyof typeof AI_GLOSSARY; 
  label?: string;
}) {
  const glossaryEntry = AI_GLOSSARY[term];
  return (
    <AI101Tooltip term={term}>
      {label || glossaryEntry?.term || term}
    </AI101Tooltip>
  );
}

// Component to display full glossary
export function AI101Glossary() {
  const terms = Object.entries(AI_GLOSSARY).sort((a, b) => 
    a[1].term.localeCompare(b[1].term)
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <BookOpen className="w-6 h-6 text-[#533483]" />
        <h2 className="text-2xl font-bold text-white">AI 101 Glossary</h2>
      </div>
      <p className="text-white/60">
        New to AI? No worries. Here are the terms you&apos;ll encounter, explained simply.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {terms.map(([key, entry]) => (
          <div
            key={key}
            className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#533483]/50 transition-colors"
          >
            <h3 className="font-semibold text-white mb-2">{entry.term}</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              {entry.definition}
            </p>
            {entry.example && (
              <p className="text-xs text-white/50 mt-2 italic">
                → {entry.example}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AI101Tooltip;
