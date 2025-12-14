"use client";

import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface ArticleData {
  id: string;
  title: string;
  content: React.ReactNode;
  image?: string;
}

interface DimensionLandingProps {
  title: string;
  subtitle: React.ReactNode;
  articles: ArticleData[];
  backgroundImage?: string;
  logoSrc?: string;
  className?: string;
}

/**
 * Dimension-style landing page with modal navigation
 * Adapted from HTML5 UP's Dimension template for Bespoke Ethos
 * Colors: Emerald accent on slate/zinc dark background
 */
export function DimensionLanding({
  title,
  subtitle,
  articles,
  backgroundImage = "/bg-dimension.jpg",
  logoSrc = "/assets/logo-mobile.png",
  className,
}: DimensionLandingProps) {
  const [activeArticle, setActiveArticle] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  const openArticle = useCallback((id: string) => {
    setActiveArticle(id);
  }, []);

  const closeArticle = useCallback(() => {
    setActiveArticle(null);
  }, []);

  const isArticleVisible = activeArticle !== null;

  return (
    <div
      className={clsx(
        "dimension-landing relative min-h-screen overflow-hidden",
        isLoading && "is-loading",
        className
      )}
    >
      {/* Background Layer */}
      <DimensionBackground
        image={backgroundImage}
        isBlurred={isArticleVisible}
      />

      {/* Main Wrapper */}
      <div
        id="dimension-wrapper"
        className={clsx(
          "relative z-10 flex min-h-screen flex-col items-center justify-center p-6 transition-all duration-500",
          isArticleVisible && "pointer-events-none opacity-0"
        )}
      >
        {/* Header */}
        <DimensionHeader
          title={title}
          subtitle={subtitle}
          logoSrc={logoSrc}
          isVisible={!isArticleVisible}
        />

        {/* Navigation */}
        <DimensionNav
          articles={articles}
          onOpenArticle={openArticle}
          isVisible={!isArticleVisible}
        />
      </div>

      {/* Article Panels */}
      <AnimatePresence mode="wait">
        {activeArticle && (
          <DimensionArticle
            key={activeArticle}
            article={articles.find((a) => a.id === activeArticle)!}
            onClose={closeArticle}
          />
        )}
      </AnimatePresence>

      {/* Footer */}
      <DimensionFooter isVisible={!isArticleVisible} />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   BACKGROUND COMPONENT
   ───────────────────────────────────────────────────────────────────────────── */

function DimensionBackground({
  image,
  isBlurred,
}: {
  image: string;
  isBlurred: boolean;
}) {
  return (
    <div className="fixed inset-0 z-0">
      {/* Overlay gradient */}
      <div
        className={clsx(
          "absolute inset-0 z-20 transition-colors duration-700",
          "bg-gradient-to-t from-slate-950/90 via-slate-900/70 to-slate-900/50"
        )}
      />
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 z-10 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      {/* Background image */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          scale: isBlurred ? 1.05 : 1.125,
          filter: isBlurred ? "blur(4px)" : "blur(0px)",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   HEADER COMPONENT
   ───────────────────────────────────────────────────────────────────────────── */

function DimensionHeader({
  title,
  subtitle,
  logoSrc,
  isVisible,
}: {
  title: string;
  subtitle: React.ReactNode;
  logoSrc: string;
  isVisible: boolean;
}) {
  return (
    <motion.header
      className="text-center"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Logo */}
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-slate-800/50 backdrop-blur-sm">
        <div className="relative h-12 w-12">
          <Image src={logoSrc} alt="Logo" fill className="object-contain" />
        </div>
      </div>

      {/* Title */}
      <h1 className="mb-4 font-serif text-4xl font-light tracking-[0.25em] text-white md:text-5xl lg:text-6xl">
        {title}
      </h1>

      {/* Subtitle */}
      <div className="mx-auto max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
        {subtitle}
      </div>
    </motion.header>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   NAVIGATION COMPONENT
   ───────────────────────────────────────────────────────────────────────────── */

function DimensionNav({
  articles,
  onOpenArticle,
  isVisible,
}: {
  articles: ArticleData[];
  onOpenArticle: (id: string) => void;
  isVisible: boolean;
}) {
  return (
    <motion.nav
      className="mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
        {articles.map((article) => (
          <li key={article.id}>
            <button
              onClick={() => onOpenArticle(article.id)}
              className={clsx(
                "relative px-5 py-2.5 text-sm font-medium uppercase tracking-[0.2em] text-white/90",
                "border border-white/30 bg-transparent",
                "transition-all duration-300 ease-out",
                "hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              )}
            >
              {article.title}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   ARTICLE PANEL COMPONENT
   ───────────────────────────────────────────────────────────────────────────── */

function DimensionArticle({
  article,
  onClose,
}: {
  article: ArticleData;
  onClose: () => void;
}) {
  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Article Card */}
      <motion.article
        className={clsx(
          "relative z-10 w-full max-w-3xl max-h-[85vh] overflow-y-auto",
          "rounded-lg border border-white/10 bg-slate-900/95 p-6 shadow-2xl backdrop-blur-md sm:p-8 md:p-10"
        )}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className={clsx(
            "absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full",
            "border border-white/20 bg-slate-800/50 text-white/70",
            "transition-all hover:border-emerald-400 hover:text-emerald-400"
          )}
          aria-label="Close article"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Article header */}
        <h2 className="mb-6 border-b border-white/10 pb-4 font-serif text-2xl font-light tracking-wider text-white sm:text-3xl">
          {article.title}
        </h2>

        {/* Article image */}
        {article.image && (
          <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </div>
        )}

        {/* Article content */}
        <div className="prose prose-invert prose-emerald max-w-none text-white/80">
          {article.content}
        </div>
      </motion.article>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   FOOTER COMPONENT
   ───────────────────────────────────────────────────────────────────────────── */

function DimensionFooter({ isVisible }: { isVisible: boolean }) {
  return (
    <motion.footer
      className="absolute bottom-0 left-0 right-0 z-10 p-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <p className="text-xs text-white/40">
        © {new Date().getFullYear()}{" "}
        <Link
          href="/"
          className="text-white/60 transition-colors hover:text-emerald-400"
        >
          Bespoke Ethos
        </Link>
        . All rights reserved.
      </p>
    </motion.footer>
  );
}

export default DimensionLanding;
