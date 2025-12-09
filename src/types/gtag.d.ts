export interface GtagEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: { [key: string]: any }
    ) => void;
    dataLayer: any[];
  }
}

export {};
