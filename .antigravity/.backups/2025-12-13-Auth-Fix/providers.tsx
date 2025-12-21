import { ThemeProvider } from "next-themes";

import { ThemeAccentProvider } from "@/context/theme-provider";
import { TooltipProvider } from "@/common/tooltip";
import { FeatureFlagProvider } from "@/context/feature-flag-provider";
import { getServerFeatureFlags } from "@/config/feature-flags";
import { TokenUsageProvider } from "@/context/TokenUsageContext";

export function Providers({ children }: { children: React.ReactNode }) {
  const initialFeatureFlags = getServerFeatureFlags();

  return (
    <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light" forcedTheme="light">
      <ThemeAccentProvider />
      <FeatureFlagProvider initialFlags={initialFeatureFlags}>
        <TokenUsageProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </TokenUsageProvider>
      </FeatureFlagProvider>
    </ThemeProvider>
  );
}
