// Google Analytics 4 utility functions (single tag)
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Track page views (client-side)
export const pageview = (url: string) => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Track custom events (client-side)
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;

  window.gtag('event', action, {
    send_to: GA_MEASUREMENT_ID,
    event_category: category,
    event_label: label,
    value: value,
  });
};
