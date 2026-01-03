import React from "react";

interface TextLogoProps {
  className?: string;
  variant?: "header" | "mobile";
}

const LOGO_SIZE_CLASSES = {
  mobile: "text-xl sm:text-2xl",
  header: "text-xl sm:text-2xl md:text-3xl",
} as const;

export const TextLogo: React.FC<TextLogoProps> = ({ className = "", variant = "header" }) => {
  const sizeClasses = LOGO_SIZE_CLASSES[variant];
  
  return (
    <span className={`font-black tracking-tight leading-none ${sizeClasses} ${className}`}>
      <span className="text-white">Bespoke</span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
        AI
      </span>
    </span>
  );
};
