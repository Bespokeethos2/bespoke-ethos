// Server-side Google Analytics 4 event tracking via Measurement Protocol
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GA_API_SECRET = process.env.GA4_API_SECRET;

interface ServerEvent {
  name: string;
  params?: Record<string, any>;
}

/**
 * Send events to GA4 from the server (Next.js API routes, Server Actions, etc.)
 * Uses the GA4 Measurement Protocol API
 */
export async function trackServerEvent(
  clientId: string,
  events: ServerEvent[]
): Promise<boolean> {
  if (!GA_MEASUREMENT_ID || !GA_API_SECRET) {
    console.warn('GA4 server tracking not configured');
    return false;
  }

  try {
    const response = await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`,
      {
        method: 'POST',
        body: JSON.stringify({
          client_id: clientId,
          events: events,
        }),
      }
    );

    return response.ok;
  } catch (error) {
    console.error('Failed to send server event to GA4:', error);
    return false;
  }
}

/**
 * Helper to track form submissions from server
 */
export async function trackFormSubmission(
  clientId: string,
  formName: string,
  metadata?: Record<string, any>
) {
  return trackServerEvent(clientId, [
    {
      name: 'form_submit',
      params: {
        form_name: formName,
        ...metadata,
      },
    },
  ]);
}

/**
 * Helper to track conversions from server
 */
export async function trackConversion(
  clientId: string,
  conversionName: string,
  value?: number,
  currency: string = 'USD'
) {
  return trackServerEvent(clientId, [
    {
      name: conversionName,
      params: {
        value: value,
        currency: currency,
      },
    },
  ]);
}
