"use client";

import { useEffect } from 'react';
import '@/styles/template/main.scss';

export default function SplashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Hide main site chrome when splash page is active
    document.body.setAttribute('data-splash-mode', 'true');
    
    return () => {
      document.body.removeAttribute('data-splash-mode');
    };
  }, []);

  return (
    <div id="dimension-wrapper">
      {children}
    </div>
  );
}
