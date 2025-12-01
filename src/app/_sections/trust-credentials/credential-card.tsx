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
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 p-6 shadow-lg backdrop-blur-md transition-all hover:shadow-xl hover:border-orange-200/60",
        className
      )}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        {/* Badge container with proper aspect ratio handling */}
        <div className="relative mt-auto">
          {/* Inner frame with subtle shadow */}
          <div className="relative rounded-xl bg-gradient-to-br from-slate-50 to-white p-6 border border-slate-100 shadow-inner">
            {/* Badge image - using object-contain to preserve aspect ratio */}
            <div className="relative w-full aspect-square flex items-center justify-center">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={180}
                height={180}
                className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
