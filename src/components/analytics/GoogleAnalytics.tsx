'use client';

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import * as gtag from '@/lib/analytics';

const GA_MEASUREMENT_ID_2 = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID_2;

function GoogleAnalyticsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      gtag.pageview(url);
    }
  }, [pathname, searchParams]);

  return null;
}

export function GoogleAnalytics() {
  if (!gtag.GA_MEASUREMENT_ID && !GA_MEASUREMENT_ID_2) {
    return null;
  }

  const primaryId = gtag.GA_MEASUREMENT_ID || GA_MEASUREMENT_ID_2;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${gtag.GA_MEASUREMENT_ID ? `gtag('config', '${gtag.GA_MEASUREMENT_ID}', { page_path: window.location.pathname, anonymize_ip: true });` : ''}
            ${GA_MEASUREMENT_ID_2 ? `gtag('config', '${GA_MEASUREMENT_ID_2}', { page_path: window.location.pathname, anonymize_ip: true });` : ''}
          `,
        }}
      />
      <Suspense fallback={null}>
        <GoogleAnalyticsInner />
      </Suspense>
    </>
  );
}
