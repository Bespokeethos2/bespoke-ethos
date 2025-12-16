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
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-xl hover:shadow-2xl hover:border-orange-300 transition-all",
        className
      )}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-4 font-heading">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-slate-700 leading-relaxed mb-8 flex-grow">
          {description}
        </p>
        
        {/* Badge container with proper aspect ratio handling */}
        <div className="relative mt-auto pt-6 border-t border-slate-100">
          {/* Inner frame with subtle shadow */}
          <div className="relative rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 border border-slate-200 shadow-sm flex items-center justify-center">
            {/* Badge image - larger size for better visibility */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110"
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
