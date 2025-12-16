"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CredentialCardProps {
  title: string;
  description: string;
  serviceDescription?: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export function CredentialCard({
  title,
  description,
  serviceDescription,
  imageSrc,
  imageAlt,
  className,
}: CredentialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-white/20 bg-slate-800/60 backdrop-blur-xl w-full max-w-[400px] aspect-square p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_60px_rgba(249,115,22,0.3)] transition-all duration-300 will-change-transform",
        className
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Badge container at top - now larger and more prominent */}
        <div className="relative mb-5 flex-shrink-0">
          <div className="relative rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-900/50 p-5 border border-white/10 shadow-inner flex items-center justify-center">
            <div className="relative w-28 h-28 flex items-center justify-center">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-110"
                sizes="112px"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 leading-tight">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-grow">
          {description}
        </p>
        
        {/* Service Description - Brief tagline */}
        {serviceDescription && (
          <div className="mt-auto pt-4 border-t border-white/10">
            <p className="text-xs font-semibold text-orange-300 uppercase tracking-wide">
              {serviceDescription}
            </p>
          </div>
        )}
      </div>

      {/* Subtle animated border beam effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl border border-orange-500/30" />
      </div>
    </motion.div>
  );
}
