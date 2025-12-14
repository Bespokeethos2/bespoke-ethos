"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface TokenUsage {
  input_tokens: number;
  output_tokens: number;
  total_tokens: number;
  context_window_limit: number;
}

interface TokenUsageContextType {
  usage: TokenUsage;
  updateUsage: (newUsage: Partial<TokenUsage>) => void;
  compactContext: () => void;
  isCompacting: boolean;
}

const defaultUsage: TokenUsage = {
  input_tokens: 0,
  output_tokens: 0,
  total_tokens: 0,
  context_window_limit: 200000, // Claude 3.5 Sonnet limit
};

const TokenUsageContext = createContext<TokenUsageContextType | undefined>(undefined);

export function TokenUsageProvider({ children }: { children: ReactNode }) {
  const [usage, setUsage] = useState<TokenUsage>(defaultUsage);
  const [isCompacting, setIsCompacting] = useState(false);

  const updateUsage = (newUsage: Partial<TokenUsage>) => {
    setUsage((prev) => ({ ...prev, ...newUsage }));
  };

  const compactContext = async () => {
    setIsCompacting(true);
    // TODO: Implement actual compaction logic (e.g., summarize history API call)
    console.log("Compacting context...");
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
    setIsCompacting(false);
  };

  return (
    <TokenUsageContext.Provider
      value={{
        usage,
        updateUsage,
        compactContext,
        isCompacting,
      }}
    >
      {children}
    </TokenUsageContext.Provider>
  );
}

export function useTokenUsage() {
  const context = useContext(TokenUsageContext);
  if (context === undefined) {
    throw new Error("useTokenUsage must be used within a TokenUsageProvider");
  }
  return context;
}
