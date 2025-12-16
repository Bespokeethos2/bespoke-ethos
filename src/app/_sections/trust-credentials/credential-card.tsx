"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CredentialCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export function CredentialCard({
  title,
  description,
  imageSrc,
  imageAlt,
  className,
}: CredentialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group relative flex h-full min-h-[420px] flex-col overflow-visible rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all hover:shadow-[0_24px_80px_rgba(249,115,22,0.35)] hover:border-orange-500/40 m-4",
        className
      )}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 font-heading text-glow-crimson">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 flex-grow">
          {description}
        </p>
        
        {/* Badge container with proper aspect ratio handling */}
        <div className="relative mt-auto pt-6">
          {/* Inner frame with glass effect and proper thumbnail styling */}
          <div className="relative rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md p-6 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] flex items-center justify-center">
            {/* Badge image - better thumbnail size */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_4px_12px_rgba(249,115,22,0.3)]"
                sizes="(max-width: 768px) 100vw, 128px"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
