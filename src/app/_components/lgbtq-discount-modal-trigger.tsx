"use client";

import * as React from "react";
import Link from "next/link";

type LGBTQDiscountModalTriggerProps = {
  children?: React.ReactNode;
};

export function LGBTQDiscountModalTrigger({ children }: LGBTQDiscountModalTriggerProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement | null>(null);
  const modalRef = React.useRef<HTMLDivElement | null>(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Return focus to the trigger after close
    window.setTimeout(() => {
      triggerRef.current?.focus();
    }, 0);
  };

  // Trap focus inside the modal when open
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }

      if (event.key !== "Tab") return;

      const container = modalRef.current;
      if (!container) return;

      const focusableSelectors =
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
      const allFocusable = Array.from(
        container.querySelectorAll<HTMLElement>(focusableSelectors),
      ).filter((el) => !el.hasAttribute("aria-hidden"));

      if (!allFocusable.length) {
        return;
      }

      const [first, ...rest] = allFocusable;
      if (!first) return;
      const last = rest[rest.length - 1] ?? first;
      const active = document.activeElement as HTMLElement | null;

      if (!active || !container.contains(active)) {
        event.preventDefault();
        first.focus();
        return;
      }

      if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Ensure focus moves inside the modal on open
  React.useEffect(() => {
    if (!isOpen) return;
    const container = modalRef.current;
    if (!container) return;

    const focusableSelectors =
      'button:not([disabled]), a[href], textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const focusable = container.querySelector<HTMLElement>(focusableSelectors);
    focusable?.focus();
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="gap-1 font-normal shrink-0 rounded-full ring-control focus-visible:ring-2 outline-hidden outline-0 bg-[var(--amber-cta)] hover:bg-[var(--gold-accent)] text-[var(--charcoal-text)] shadow-md hover:shadow-lg border-transparent inline-flex items-center justify-center h-9 px-5 text-sm md:text-base md:h-10 transition-all duration-200"
        onClick={openModal}
      >
        {children ?? "Find Out More"}
      </button>

      {isOpen ? (
        <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={closeModal}>
          <div
            ref={modalRef}
            className="modal-content relative w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 border-2 border-orange-100 bg-gradient-to-br from-white to-orange-50 shadow-tactile rounded-2xl animate-in fade-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
            aria-label="LGBTQ discount information"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 focus:outline-none"
              aria-label="Close LGBTQ discount information"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center font-hero-accent">
              25% Off for LGBTQ+ Small Business Owners
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              We know what it’s like to build a business while navigating the unique challenges our community faces. We’ve been there. Still are, actually.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              That’s why we offer <strong className="text-slate-900">25% off all upfront project costs</strong> to LGBTQ+-owned small businesses.
            </p>

            <div className="bg-white/60 border border-orange-100 rounded-xl p-6 mb-6">
              <p className="text-lg font-bold text-slate-900 mb-4">
                What’s Included:
              </p>
              <ul className="space-y-3 text-lg text-slate-600 list-disc pl-5">
                <li>25% off initial consultation fees (beyond the free 30-minute call)</li>
                <li>25% off project setup and implementation costs</li>
                <li>25% off custom AI model training</li>
                <li>25% off one-time development work</li>
              </ul>
            </div>

            <div className="bg-[#1a365d] text-white rounded-xl p-6 mb-6">
              <p className="text-lg font-bold mb-3">
                What’s Not Included:
              </p>
              <p className="opacity-90 leading-relaxed">
                Monthly subscription fees for ongoing services (API costs, hosting, maintenance). Those are charged at standard rates to keep our lights on.
              </p>
            </div>

            <p className="hidden md:block text-lg text-slate-600 leading-relaxed mb-6">
              <strong className="text-slate-900">How to claim:</strong> Just mention
              you’re an LGBTQ+-owned business during your free consultation. We’ll ask for simple
              verification (business registration, NGLCC certification if you have it, or other
              documentation). No hoops to jump through—we’re not here to gatekeep, just to support
              our community.
            </p>

            <p className="md:hidden text-lg text-slate-600 leading-relaxed mb-6">
              <strong className="text-slate-900">How to claim:</strong> Mention
              you’re an LGBTQ+-owned business during your free consultation.
            </p>

            <p className="text-lg text-slate-500 italic text-center mb-8">
              We’re NGLCC-certified ourselves. We know the journey. Let’s build something together.
            </p>

            <div className="text-center">
              <Link
                href="/contact?service=llm-setups"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f6ad55] hover:bg-[#ecc94b] text-[#2d3748] shadow-md hover:shadow-lg px-6 py-3 font-medium transition-all"
                onClick={closeModal}
              >
                Schedule Your Free Consultation
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
