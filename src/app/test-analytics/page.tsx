'use client';

import { useEffect, useState } from 'react';
import * as gtag from '@/lib/analytics';
import { OrganizationJsonLd } from '@/app/_components/seo/organization-jsonld';


export default function AnalyticsTest() {
  const [status, setStatus] = useState('Checking...');
  const [gaIds, setGaIds] = useState({ primary: '', secondary: '' });

  useEffect(() => {
    // Check if gtag is loaded
    if (typeof window !== 'undefined') {
      const primary = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-8GN8YM8KRK';
      const secondary = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID_2 || 'G-88HHX2W6PV';
      
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setGaIds({ primary, secondary });

      if (typeof window.gtag === 'function') {
        setStatus('✅ Google Analytics is loaded and working!');
        // Send a test event
        gtag.event({ action: 'test', category: 'Analytics Test', label: 'Page Load' });
      } else {
        setStatus('❌ Google Analytics gtag function not found');
      }
    }
  }, []);

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <OrganizationJsonLd />
      <h1 style={{ marginBottom: '20px' }}>Google Analytics Debug Page</h1>
      <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h2>Status: {status}</h2>
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
          <li>Filter by 'google-analytics' or 'gtag'</li>
          <li>Reload this page</li>
          <li>You should see requests to https://www.google-analytics.com/g/collect</li>
        </ol>
      </div>
    </div>
  );
}
