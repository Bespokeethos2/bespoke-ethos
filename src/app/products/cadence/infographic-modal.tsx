'use client';

import { useState } from 'react';
import Image from 'next/image';

export function CadenceInfographicModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Clickable infographic */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-full rounded-2xl border border-border bg-white p-6 shadow-xl transition-all hover:shadow-2xl active:scale-95 dark:border-dark-border dark:bg-black/40 md:p-8 cursor-pointer"
        aria-label="Click to enlarge Cadence infographic"
      >
        <Image
          src="/assets/cadence-infographic.svg"
          alt="Cadence AI Concierge - How customers ask questions, Cadence understands and responds with your brand voice"
          width={600}
          height={500}
          className="w-full h-auto pointer-events-none"
          loading="lazy"
        />
        <p className="text-xs text-text-tertiary mt-2 text-center dark:text-dark-text-tertiary">
          Click to enlarge
        </p>
      </button>

      {/* Modal backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged Cadence infographic"
        >
          {/* Modal content */}
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl dark:bg-slate-900 max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white dark:bg-slate-800/90 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal image */}
            <div className="p-8">
              <Image
                src="/assets/cadence-infographic.svg"
                alt="Cadence AI Concierge - Enlarged view"
                width={800}
                height={667}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}