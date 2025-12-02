"use client";

import { motion } from "framer-motion";
import { IconRobot, IconBrain, IconWand, IconLifebuoy } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  colorClass: string;
  delay: number;
}

function ProductCard({ title, description, icon, href, colorClass, delay }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col h-full"
    >
      <Link href={href} className="flex flex-col h-full p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-orange-200 transition-all">
        <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors", colorClass)}>
          {icon}
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      </Link>
    </motion.div>
  );
}

export function ProductQuadrant() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mx-auto lg:mx-0">
      <ProductCard
        title="Cadence"
        description="Your AI Concierge. Handles inbound leads, books meetings, and answers questions 24/7."
        icon={<IconRobot className="w-6 h-6 text-blue-700 dark:text-blue-600" />}
        href="/products/cadence"
        colorClass="bg-blue-50 group-hover:bg-blue-100"
        delay={0.1}
      />
      <ProductCard
        title="Consensus Engine"
        description="Your AI Strategy Sprint. Turns messy stakeholder opinions into clear, cited decision briefs."
        icon={<IconBrain className="w-6 h-6 text-purple-700 dark:text-purple-600" />}
        href="/solutions/consensus-engine"
        colorClass="bg-purple-50 group-hover:bg-purple-100"
        delay={0.2}
      />
      <ProductCard
        title="Automation Fabric"
        description="Workflow Automation Setup. We build robust, self-healing automations that don't break silently."
        icon={<IconWand className="w-6 h-6 text-orange-700 dark:text-orange-600" />}
        href="/enterprise/automation-fabric"
        colorClass="bg-orange-50 group-hover:bg-orange-100"
        delay={0.3}
      />
      <ProductCard
        title="Automation Rescue"
        description="Fix your broken Zaps. We audit, repair, and document your brittle workflows."
        icon={<IconLifebuoy className="w-6 h-6 text-emerald-700 dark:text-emerald-600" />}
        href="/solutions/essentials"
        colorClass="bg-emerald-50 group-hover:bg-emerald-100"
        delay={0.4}
      />
    </div>
  );
}
