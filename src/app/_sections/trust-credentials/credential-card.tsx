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
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group relative flex h-full min-h-[400px] flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all hover:shadow-[0_16px_48px_rgba(249,115,22,0.2)] hover:border-orange-200/60",
        className
      )}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-orange-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 font-heading">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 flex-grow">
          {description}
        </p>
        
        {/* Badge container with proper aspect ratio handling */}
        <div className="relative mt-auto pt-6">
          {/* Inner frame with subtle shadow */}
          <div className="relative rounded-xl bg-linear-to-br from-slate-50 to-white p-6 border border-slate-100 shadow-inner flex items-center justify-center">
            {/* Badge image - constrained size */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 96px"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
