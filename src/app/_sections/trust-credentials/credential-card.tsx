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
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 p-8 shadow-[0_8px_40px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all hover:shadow-[0_16px_56px_rgba(0,0,0,0.16)] hover:border-orange-200/60 m-2",
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border-4 border-orange-200/60 bg-gradient-to-br from-amber-50 to-orange-50 p-8 shadow-2xl hover:shadow-[0_20px_50px_rgba(251,146,60,0.3)] hover:border-orange-400 transition-all will-change-transform",
        className
      )}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-100/20 to-orange-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Title */}
        <h3 className="text-xl font-black text-slate-950 mb-4 font-heading">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-slate-900 leading-relaxed mb-8 flex-grow font-semibold">
          {description}
        </p>
        
        {/* Badge container with proper aspect ratio handling */}
        <div className="relative mt-auto pt-6 border-t-2 border-orange-300/50">
          {/* Inner frame with subtle shadow */}
          <div className="relative rounded-xl bg-gradient-to-br from-white to-orange-50 p-6 border-2 border-orange-300/40 shadow-lg flex items-center justify-center">
            {/* Badge image - larger size for better visibility */}
            <div className="relative w-32 aspect-square flex items-center justify-center">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 96px"
                className="object-contain transition-transform duration-300 group-hover:scale-110 will-change-transform"
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
