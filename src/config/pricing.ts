export const PRICING = {
  currency: "$",
  automationSkyway: {
    setup: 1497, // Starting price - varies by scope
    monthly: 199, // Base monthly - scales with complexity
  },
  chatbots: {
    // Standard offering
    standardMonthly: 79.99,
    // Range for custom work (old range was 49-199)
    rangeMin: 79.99,
    rangeMax: 199,
  },
  cadence: {
    setup: 997,
    monthly: 149,
  },
  automationRescue: {
    // Standalone a la carte price for non-members
   standaloneALaCarte: 149.99,
    aiToolStackConsultation: 99.99,
    zapierMakeWorkflowAudit: 199.99,
    chatbotAuditTuneUp: 249.99,
    promptEngineering: 399.99,
    // Standalone price for members (old range was 49-99)
    standaloneLow: 49.99,
    standaloneHigh: 99,
  },
  aiResearchAssistant: {
    monthly: 299.99,
    queryLimit: 4,
  },
  aiStrategySprint: {
    setup: 997,
    monthly: 149,
    pilot: 500,
  },
  scale: {
    monthly: 199,
  },
} as const;

export function formatMoney(amount: number, currency = PRICING.currency) {
  const withCents = Math.round(amount * 100) % 100 !== 0;
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: withCents ? 2 : 0,
    maximumFractionDigits: withCents ? 2 : 0,
  })
    .format(amount);
  if (currency === "$") return formatted;
  return formatted.startsWith("$") ? currency + formatted.slice(1) : formatted;
}

export function planSummary(setup: number, monthly: number) {
  return `From ${formatMoney(setup)} setup + ${formatMoney(monthly)}/mo`;
}

export function planFromMonthly(monthly: number) {
  return `From ${formatMoney(monthly)}/mo`;
}
