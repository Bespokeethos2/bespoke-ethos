"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface DimensionContactFormProps {
  onSuccess?: () => void;
  className?: string;
}

/**
 * Dimension-styled contact form component
 * Adapted from HTML5 UP template with Bespoke Ethos branding
 */
export function DimensionContactForm({
  onSuccess,
  className,
}: DimensionContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setIsSuccess(true);
      onSuccess?.();
    } catch {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={clsx("dimension-contact-form", className)}>
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-8 text-center"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
              <svg
                className="h-8 w-8 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-medium text-white">
              Message Sent!
            </h3>
            <p className="text-white/60">
              Thank you for reaching out. We&apos;ll be in touch soon.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Name & Email Row */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="group">
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium uppercase tracking-wider text-white/60"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  className={clsx(
                    "w-full rounded-none border-b-2 border-white/20 bg-transparent px-0 py-2",
                    "text-white placeholder-white/40",
                    "transition-colors duration-300",
                    "focus:border-emerald-400 focus:outline-none"
                  )}
                  placeholder="Your name"
                />
              </div>
              <div className="group">
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium uppercase tracking-wider text-white/60"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  className={clsx(
                    "w-full rounded-none border-b-2 border-white/20 bg-transparent px-0 py-2",
                    "text-white placeholder-white/40",
                    "transition-colors duration-300",
                    "focus:border-emerald-400 focus:outline-none"
                  )}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium uppercase tracking-wider text-white/60"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                className={clsx(
                  "w-full resize-none rounded-none border-b-2 border-white/20 bg-transparent px-0 py-2",
                  "text-white placeholder-white/40",
                  "transition-colors duration-300",
                  "focus:border-emerald-400 focus:outline-none"
                )}
                placeholder="How can we help you?"
              />
            </div>

            {/* Error message */}
            {error && (
              <p className="text-sm text-red-400">{error}</p>
            )}

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={clsx(
                  "relative px-6 py-3 text-sm font-medium uppercase tracking-[0.15em]",
                  "border border-white/30 bg-transparent text-white",
                  "transition-all duration-300",
                  "hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
                  "disabled:cursor-not-allowed disabled:opacity-50"
                )}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
              <button
                type="reset"
                className={clsx(
                  "px-6 py-3 text-sm font-medium uppercase tracking-[0.15em]",
                  "border border-white/20 bg-transparent text-white/60",
                  "transition-all duration-300",
                  "hover:border-white/40 hover:text-white/80"
                )}
              >
                Reset
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Social links */}
      <div className="mt-8 border-t border-white/10 pt-6">
        <SocialLinks />
      </div>
    </div>
  );
}

function SocialLinks() {
  const socials = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/bespoke-ethos",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/bespokeethos",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/bespoke-ethos",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
  ];

  return (
    <ul className="flex justify-center gap-4">
      {socials.map((social) => (
        <li key={social.name}>
          <Link
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "flex h-10 w-10 items-center justify-center rounded-full",
              "border border-white/20 text-white/60",
              "transition-all duration-300",
              "hover:border-emerald-400 hover:text-emerald-400"
            )}
            aria-label={social.name}
          >
            {social.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default DimensionContactForm;
