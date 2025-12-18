import React from "react";

interface TextLogoProps {
  className?: string;
  variant?: "header" | "mobile";
}

const LOGO_SIZE_CLASSES = {
  mobile: "text-xl sm:text-2xl",
  header: "text-2xl sm:text-3xl md:text-4xl",
} as const;

export const TextLogo: React.FC<TextLogoProps> = ({ className = "", variant = "header" }) => {
  const sizeClasses = LOGO_SIZE_CLASSES[variant];
  
  return (
    <span className={`font-black tracking-tight ${sizeClasses} ${className}`}>
      <span className="text-white">Bespoke</span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
        AI
      </span>
    </span>
  );
};
