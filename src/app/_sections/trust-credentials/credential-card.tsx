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
    <div className="flex flex-col items-center">
      <motion.div
        whileHover={{ y: -8, scale: 1.03 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "group relative flex h-full flex-col overflow-visible rounded-2xl border-4 border-orange-200/60 bg-gradient-to-br from-amber-50 to-orange-50 p-6 sm:p-8 shadow-2xl hover:shadow-[0_25px_60px_rgba(251,146,60,0.35)] hover:border-orange-400 transition-all aspect-square will-change-transform w-full max-w-[400px]",
          className
        )}
      >
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-100/20 to-orange-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
        
        {/* Content container */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-black text-slate-950 mb-3 sm:mb-4 font-heading">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-slate-900 leading-relaxed mb-8 flex-grow font-semibold">
            {description}
          </p>
          
          {/* Badge container with proper aspect ratio handling */}
          <div className="relative flex-grow flex items-center justify-center">
            {/* Inner frame with subtle shadow */}
            <div className="relative rounded-xl bg-gradient-to-br from-white to-orange-50 p-6 border-2 border-orange-300/40 shadow-lg flex items-center justify-center">
              {/* Badge image - larger size for better visibility */}
              <div className="relative w-24 h-24 flex items-center justify-center">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110 will-change-transform"
                  sizes="(max-width: 768px) 100vw, 96px"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Brief description below card */}
      <p className="mt-4 text-xs sm:text-sm text-slate-700 font-medium text-center max-w-[400px] px-2">
        {description}
      </p>
    </div>
  );
}