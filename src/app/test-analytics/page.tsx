'use client';

import * as gtag from '@/lib/analytics';
import { OrganizationJsonLd } from '@/app/_components/seo/organization-jsonld';

export default function AnalyticsTest() {
  const gaIds = {
    primary: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-8GN8YM8KRK',
    secondary: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID_2 || 'G-88HHX2W6PV',
  };
  const hasGtag = typeof window !== 'undefined' && typeof window.gtag === 'function';
  const status = hasGtag
    ? '✅ Google Analytics is loaded and working!'
    : '❌ Google Analytics gtag function not found';

  const handleTestEvent = () => {
    if (!hasGtag) return;
    gtag.event({ action: 'test', category: 'Analytics Test', label: 'Manual Test' });
  };

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <OrganizationJsonLd />
      <h1 style={{ marginBottom: '20px' }}>Google Analytics Debug Page</h1>
      <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h2>Status: {status}</h2>
        <button type="button" onClick={handleTestEvent} style={{ marginTop: '12px' }}>
          Send test event
        </button>
      </div>
      <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h3>GA Measurement IDs:</h3>
        <p><strong>Primary:</strong> {gaIds.primary}</p>
        <p><strong>Secondary:</strong> {gaIds.secondary}</p>
      </div>
      <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
        <h3>Instructions:</h3>
        <ol>
          <li>Open browser DevTools (F12)</li>
          <li>Go to Network tab</li>
          <li>Filter by &apos;google-analytics&apos; or &apos;gtag&apos;</li>
          <li>Reload this page</li>
          <li>You should see requests to https://www.google-analytics.com/g/collect</li>
        </ol>
      </div>
    </div>
  );
}
