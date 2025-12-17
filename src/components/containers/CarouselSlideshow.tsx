"use client";

import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

interface Slide {
  id: string;
  title?: string;
  subtitle?: string;
  content?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  backgroundColor?: string;
}

interface CarouselSlideshowProps {
  slides: Slide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  fullHeight?: boolean;
  className?: string;
}

/**
 * Carousel / Slideshow Component
 * 
 * Smooth, animated slideshow with:
 * - Auto-play with pause on hover
 * - Arrow navigation
 * - Dot indicators
 * - Full-height hero mode
 * 
 * Perfect for:
 * - Hero sections with multiple messages
 * - Portfolio showcases
 * - Testimonial carousels
 * - Feature highlights
 */
export function CarouselSlideshow({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  fullHeight = false,
  className,
}: CarouselSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-play
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const interval = setInterval(goNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, goNext, isPaused]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const currentSlide = slides[currentIndex];

  // Return null if slides array is empty or currentSlide is undefined
  if (!currentSlide) {
    return null;
  }

  return (
    <div
      className={clsx(
        "relative overflow-hidden",
        fullHeight ? "h-screen" : "aspect-video",
        className
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className={clsx(
            "absolute inset-0 flex items-center justify-center",
            currentSlide.backgroundColor || "bg-slate-900"
          )}
        >
          {/* Background image */}
          {currentSlide.image && (
            <Image
              src={currentSlide.image}
              alt={currentSlide.imageAlt || ""}
              fill
              className="object-cover"
              priority
            />
          )}

          {/* Overlay */}
          {currentSlide.image && (
            <div className="absolute inset-0 bg-slate-900/60" />
          )}

          {/* Content */}
          <div className="relative z-10 px-8 text-center text-white md:px-16">
            {currentSlide.title && (
              <motion.h2
                className="mb-4 text-3xl font-bold md:text-5xl lg:text-6xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {currentSlide.title}
              </motion.h2>
            )}
            {currentSlide.subtitle && (
              <motion.p
                className="mx-auto max-w-2xl text-lg text-white/80 md:text-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {currentSlide.subtitle}
              </motion.p>
            )}
            {currentSlide.content && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {currentSlide.content}
              </motion.div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {showArrows && slides.length > 1 && (
        <>
          <button
            onClick={goPrev}
            className={clsx(
              "absolute left-4 top-1/2 z-20 -translate-y-1/2 p-3",
              "rounded-full bg-white/10 backdrop-blur-sm",
              "text-white transition-all hover:bg-white/20",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            )}
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={goNext}
            className={clsx(
              "absolute right-4 top-1/2 z-20 -translate-y-1/2 p-3",
              "rounded-full bg-white/10 backdrop-blur-sm",
              "text-white transition-all hover:bg-white/20",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            )}
            aria-label="Next slide"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {showDots && slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={clsx(
                "h-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/60"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress bar */}
      {autoPlay && (
        <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/20">
          <motion.div
            className="h-full bg-emerald-500"
            initial={{ width: "0%" }}
            animate={{ width: isPaused ? undefined : "100%" }}
            transition={{
              duration: autoPlayInterval / 1000,
              ease: "linear",
            }}
            key={currentIndex}
          />
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   CARD CAROUSEL (Horizontal scrolling cards)
   ═══════════════════════════════════════════════════════════════════════════ */

interface CardCarouselProps {
  children: React.ReactNode[];
  className?: string;
}

export function CardCarousel({ children, className }: CardCarouselProps) {
  return (
    <div className={clsx("relative", className)}>
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
        {children.map((child, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-center first:pl-4 last:pr-4 md:first:pl-8 md:last:pr-8"
          >
            {child}
          </div>
        ))}
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-white to-transparent dark:from-slate-900 md:w-16" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-white to-transparent dark:from-slate-900 md:w-16" />
    </div>
  );
}

export default CarouselSlideshow;
