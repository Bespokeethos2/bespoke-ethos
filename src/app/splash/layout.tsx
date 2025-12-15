"use client";

import '@/styles/template/main.scss';

export default function SplashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="dimension-wrapper">
      {children}
    </div>
  );
}
