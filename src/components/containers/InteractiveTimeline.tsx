"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  highlight?: boolean;
}

interface InteractiveTimelineProps {
  events: TimelineEvent[];
  title?: string;
  subtitle?: string;
  className?: string;
}

/**
 * Interactive Timeline Component
 * 
 * A vertical timeline with animated entries, perfect for:
 * - Company milestones
 * - Project roadmaps
 * - Process steps
 * - Case study progression
 */
export function InteractiveTimeline({
  events,
  title,
  subtitle,
  className,
}: InteractiveTimelineProps) {
  return (
    <section className={clsx("py-16 md:py-24", className)}>
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-emerald-400 via-emerald-500 to-slate-300 md:left-1/2 md:-translate-x-0.5" />

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <TimelineItem
                key={event.id}
                event={event}
                index={index}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  event,
  index,
  isEven,
}: {
  event: TimelineEvent;
  index: number;
  isEven: boolean;
}) {
  return (
    <motion.div
      className={clsx(
        "relative flex items-start gap-6",
        "md:flex-row",
        !isEven && "md:flex-row-reverse"
      )}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Mobile: Timeline node on left */}
      <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
        <div
          className={clsx(
            "flex h-8 w-8 items-center justify-center rounded-full border-2",
            event.highlight
              ? "border-emerald-500 bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
              : "border-slate-300 bg-white text-slate-500 dark:border-slate-600 dark:bg-slate-800"
          )}
        >
          {event.icon || (
            <span className="text-xs font-bold">{index + 1}</span>
          )}
        </div>
      </div>

      {/* Content card */}
      <div
        className={clsx(
          "flex-1",
          "md:w-[calc(50%-2rem)]",
          isEven ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
        )}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={clsx(
            "rounded-xl border bg-white p-5 shadow-sm transition-all",
            "hover:shadow-lg hover:border-emerald-200",
            "dark:bg-slate-800 dark:border-slate-700 dark:hover:border-emerald-600",
            event.highlight && "ring-2 ring-emerald-500/20"
          )}
        >
          {/* Date badge */}
          <span
            className={clsx(
              "inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
              event.highlight
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                : "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400"
            )}
          >
            {event.date}
          </span>

          {/* Title */}
          <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
            {event.title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {event.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HORIZONTAL TIMELINE (Alternative)
   ═══════════════════════════════════════════════════════════════════════════ */

interface HorizontalTimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export function HorizontalTimeline({ events, className }: HorizontalTimelineProps) {
  return (
    <div className={clsx("w-full overflow-x-auto pb-4", className)}>
      <div className="relative min-w-max px-8 py-12">
        {/* Horizontal line */}
        <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-slate-200 via-emerald-400 to-slate-200" />

        {/* Events */}
        <div className="flex gap-16">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Node */}
              <div
                className={clsx(
                  "relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2",
                  event.highlight
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : "border-slate-300 bg-white text-slate-600"
                )}
              >
                {event.icon || <span className="text-sm font-bold">{index + 1}</span>}
              </div>

              {/* Content (alternating top/bottom) */}
              <div
                className={clsx(
                  "absolute w-40 text-center",
                  index % 2 === 0 ? "-top-24" : "top-14"
                )}
              >
                <span className="text-xs font-semibold text-emerald-600">
                  {event.date}
                </span>
                <h4 className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                  {event.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InteractiveTimeline;
