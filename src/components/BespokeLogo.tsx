
import React from "react";

export const BespokeLogo = ({ className = "h-10 w-auto" }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    aria-label="Bespoke Ethos Logo"
  >
    {/* The Handcrafted Node: Slightly imperfect circle */}
    <path 
      d="M50 10 C 75 10, 95 25, 90 55 C 85 85, 65 95, 45 92 C 25 89, 5 70, 10 40 C 15 10, 30 10, 50 10" 
      stroke="#FF7F50" 
      strokeWidth="6" 
      strokeLinecap="round"
      className="animate-pulse"
      style={{ filter: "drop-shadow(0px 0px 4px rgba(255, 127, 80, 0.5))" }}
    />
    
    {/* Inner Core */}
    <path
      d="M50 35 C 60 35, 65 45, 62 55 C 59 65, 50 68, 42 65 C 34 62, 32 50, 35 40 C 38 30, 40 35, 50 35"
      fill="#0a192f"
      stroke="#64ffda"
      strokeWidth="2"
    />
  </svg>
);
