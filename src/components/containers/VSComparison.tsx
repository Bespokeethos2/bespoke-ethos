"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";

interface ComparisonItem {
  feature: string;
  category?: string;
  left: {
    value: string | boolean;
    tooltip?: string;
  };
  right: {
    value: string | boolean;
    tooltip?: string;
  };
}

interface VSComparisonProps {
  title?: string;
  subtitle?: string;
  leftLabel: string;
  rightLabel: string;
  leftHighlight?: boolean;
  rightHighlight?: boolean;
  items: ComparisonItem[];
  className?: string;
}

/**
 * VS Comparison Component
 * 
 * Side-by-side comparison table with animated toggle,
 * perfect for:
 * - Pricing plan comparisons
 * - Before/After scenarios
 * - Us vs Them differentiation
 * - Feature matrices
 */
export function VSComparison({
  title,
  subtitle,
  leftLabel,
  rightLabel,
  leftHighlight = false,
  rightHighlight = true,
  items,
  className,
}: VSComparisonProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );

  // Group items by category
  const categories = items.reduce((acc, item) => {
    const cat = item.category || "Features";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {} as Record<string, ComparisonItem[]>);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  return (
    <section className={clsx("py-16 md:py-24", className)}>
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
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

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
          {/* Header row */}
          <div className="grid grid-cols-3 border-b border-slate-200 dark:border-slate-700">
            <div className="p-4 md:p-6" /> {/* Empty cell */}
            <ComparisonHeader
              label={leftLabel}
              isHighlighted={leftHighlight}
            />
            <ComparisonHeader
              label={rightLabel}
              isHighlighted={rightHighlight}
            />
          </div>

          {/* Feature rows by category */}
          {Object.entries(categories).map(([category, categoryItems]) => (
            <div key={category}>
              {/* Category header (if multiple categories) */}
              {Object.keys(categories).length > 1 && (
                <button
                  onClick={() => toggleCategory(category)}
                  className="flex w-full items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400"
                >
                  <motion.span
                    animate={{
                      rotate: expandedCategories.has(category) ? 90 : 0,
                    }}
                  >
                    ▶
                  </motion.span>
                  {category}
                </button>
              )}

              <AnimatePresence initial={false}>
                {(Object.keys(categories).length === 1 ||
                  expandedCategories.has(category)) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {categoryItems.map((item, index) => (
                      <ComparisonRow
                        key={item.feature}
                        item={item}
                        leftHighlight={leftHighlight}
                        rightHighlight={rightHighlight}
                        isLast={index === categoryItems.length - 1}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonHeader({
  label,
  isHighlighted,
}: {
  label: string;
  isHighlighted: boolean;
}) {
  return (
    <div
      className={clsx(
        "relative p-4 text-center md:p-6",
        isHighlighted
          ? "bg-emerald-50 dark:bg-emerald-900/20"
          : "bg-slate-50 dark:bg-slate-900/30"
      )}
    >
      {isHighlighted && (
        <motion.div
          className="absolute -top-1 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Recommended
        </motion.div>
      )}
      <span
        className={clsx(
          "text-sm font-bold uppercase tracking-wider md:text-base",
          isHighlighted
            ? "text-emerald-700 dark:text-emerald-400"
            : "text-slate-700 dark:text-slate-300"
        )}
      >
        {label}
      </span>
    </div>
  );
}

function ComparisonRow({
  item,
  leftHighlight,
  rightHighlight,
  isLast,
}: {
  item: ComparisonItem;
  leftHighlight: boolean;
  rightHighlight: boolean;
  isLast: boolean;
}) {
  return (
    <motion.div
      className={clsx(
        "grid grid-cols-3",
        !isLast && "border-b border-slate-100 dark:border-slate-700/50"
      )}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      {/* Feature name */}
      <div className="flex items-center p-4 text-sm font-medium text-slate-700 dark:text-slate-300 md:text-base">
        {item.feature}
      </div>

      {/* Left value */}
      <ComparisonCell
        value={item.left.value}
        tooltip={item.left.tooltip}
        isHighlighted={leftHighlight}
      />

      {/* Right value */}
      <ComparisonCell
        value={item.right.value}
        tooltip={item.right.tooltip}
        isHighlighted={rightHighlight}
      />
    </motion.div>
  );
}

function ComparisonCell({
  value,
  tooltip,
  isHighlighted,
}: {
  value: string | boolean;
  tooltip?: string;
  isHighlighted: boolean;
}) {
  const content =
    typeof value === "boolean" ? (
      value ? (
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30">
          <CheckIcon className="h-4 w-4" />
        </div>
      ) : (
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-slate-700">
          <Cross2Icon className="h-4 w-4" />
        </div>
      )
    ) : (
      <span
        className={clsx(
          "text-sm md:text-base",
          isHighlighted
            ? "font-semibold text-emerald-700 dark:text-emerald-400"
            : "text-slate-600 dark:text-slate-400"
        )}
      >
        {value}
      </span>
    );

  return (
    <div
      className={clsx(
        "flex items-center justify-center p-4",
        isHighlighted && "bg-emerald-50/50 dark:bg-emerald-900/10"
      )}
      title={tooltip}
    >
      {content}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SIMPLE SIDE-BY-SIDE VARIANT
   ═══════════════════════════════════════════════════════════════════════════ */

interface SideBySideProps {
  leftTitle: string;
  rightTitle: string;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  leftSubtitle?: string;
  rightSubtitle?: string;
  leftHighlight?: boolean;
  rightHighlight?: boolean;
  className?: string;
}

export function SideBySide({
  leftTitle,
  rightTitle,
  leftContent,
  rightContent,
  leftSubtitle,
  rightSubtitle,
  leftHighlight = false,
  rightHighlight = true,
  className,
}: SideBySideProps) {
  return (
    <div className={clsx("grid gap-6 md:grid-cols-2", className)}>
      {/* Left card */}
      <motion.div
        className={clsx(
          "rounded-xl border p-6",
          leftHighlight
            ? "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20"
            : "border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800"
        )}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h3
          className={clsx(
            "text-xl font-bold",
            leftHighlight
              ? "text-emerald-700 dark:text-emerald-400"
              : "text-slate-900 dark:text-white"
          )}
        >
          {leftTitle}
        </h3>
        {leftSubtitle && (
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {leftSubtitle}
          </p>
        )}
        <div className="mt-4">{leftContent}</div>
      </motion.div>

      {/* Right card */}
      <motion.div
        className={clsx(
          "rounded-xl border p-6",
          rightHighlight
            ? "border-emerald-200 bg-emerald-50 ring-2 ring-emerald-500/20 dark:border-emerald-800 dark:bg-emerald-900/20"
            : "border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800"
        )}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        {rightHighlight && (
          <span className="mb-3 inline-block rounded-full bg-emerald-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
            Recommended
          </span>
        )}
        <h3
          className={clsx(
            "text-xl font-bold",
            rightHighlight
              ? "text-emerald-700 dark:text-emerald-400"
              : "text-slate-900 dark:text-white"
          )}
        >
          {rightTitle}
        </h3>
        {rightSubtitle && (
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {rightSubtitle}
          </p>
        )}
        <div className="mt-4">{rightContent}</div>
      </motion.div>
    </div>
  );
}

export default VSComparison;
