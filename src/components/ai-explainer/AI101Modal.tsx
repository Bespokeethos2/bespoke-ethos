"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface ExplainerContent {
  term: string;
  title: string;
  description: string;
  example: string;
}

const EXPLAINERS: Record<string, ExplainerContent> = {
  agents: {
    term: "AI Agents",
    title: "What are AI Agents?",
    description: "AI agents are intelligent programs that can take actions on your behalf. Unlike simple chatbots that just answer questions, agents can read emails, schedule meetings, update databases, and make decisions within defined rules.",
    example: "Example: An AI receptionist agent that answers inquiries, checks your calendar availability, and books appointments—without human intervention.",
  },
  rag: {
    term: "RAG (Retrieval-Augmented Generation)",
    title: "What is RAG?",
    description: "RAG gives AI access to your specific business knowledge. Instead of relying only on generic training data, RAG systems pull relevant information from your documents, policies, and databases to provide accurate, context-aware responses.",
    example: "Example: An AI assistant that can instantly reference your company policies, past client work, or technical documentation when answering questions.",
  },
  humanInLoop: {
    term: "Human-in-the-Loop",
    title: "What is Human-in-the-Loop?",
    description: "Human-in-the-loop means the AI does the heavy lifting, but you maintain control. Critical decisions require human approval before execution. This prevents costly mistakes while still saving you time on routine work.",
    example: "Example: AI drafts all your client emails, but you review and approve each one before it sends. The AI handles 90% of the work; you handle the final 10%.",
  },
};

interface AI101ModalProps {
  triggerText?: string;
  explainerKey: keyof typeof EXPLAINERS;
  className?: string;
}

export function AI101Modal({ triggerText, explainerKey, className = "" }: AI101ModalProps) {
  const [open, setOpen] = useState(false);
  const content = EXPLAINERS[explainerKey];

  if (!content) return null;

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className={`inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 underline decoration-dotted underline-offset-4 transition-colors ${className}`}
          aria-label={`Learn more about ${content.term}`}
        >
          <span className="text-xs font-mono">?</span>
          <span>{triggerText || content.term}</span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content 
          className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] bg-slate-900 border border-orange-500/20 p-6 sm:p-8 shadow-2xl shadow-orange-900/20 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-2xl max-h-[90vh] overflow-y-auto mx-4 sm:mx-0"
          aria-describedby="ai-explainer-description"
        >
          <div className="flex items-start justify-between mb-4">
            <Dialog.Title className="text-xl sm:text-2xl font-bold text-white">
              {content.title}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                className="rounded-full p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>
          
          <div id="ai-explainer-description" className="space-y-4">
            <div className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {content.description}
            </div>
            
            <div className="mt-6 p-4 bg-orange-950/30 border border-orange-500/20 rounded-lg">
              <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">
                Real-World Example
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {content.example}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700">
              <p className="text-xs text-slate-400">
                Want to see how this applies to your business?{" "}
                <a href="/contact" className="text-orange-400 hover:text-orange-300 underline">
                  Let's talk
                </a>
              </p>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
