"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  onOpenArticle: (article: string) => void;
  timeout: boolean;
}

export default function Header({ onOpenArticle, timeout }: HeaderProps) {
  return (
    <header id="header" className={timeout ? 'header-hidden' : ''}>
      {/* Quick Links - Above the line */}
      <nav className="quick-links" style={{ 
        display: 'flex', 
        gap: '2rem', 
        fontSize: '0.75rem', 
        textTransform: 'uppercase', 
        letterSpacing: '0.15em',
        marginBottom: '1rem'
      }}>
        <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Home</Link>
        <Link href="/pricing" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Pricing</Link>
        <Link href="/blog" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Blog</Link>
        <Link href="/contact" style={{ color: '#fdba74', textDecoration: 'none' }}>Contact</Link>
      </nav>

      {/* BespokeEthos Logo */}
      <div className="logo flex items-center justify-center logo-glow">
        <Image 
          src="/assets/logo-dark.png" 
          alt="Bespoke Ethos" 
          width={48} 
          height={48}
          className="drop-shadow-[0_0_12px_rgba(249,115,22,0.8)]"
        />
      </div>
      
      {/* Title & Value Proposition */}
      <div className="content">
        <div className="inner">
          <h1>Bespoke Ethos</h1>
          <p>
            We build intelligent workflows—not chatbots.<br />
            <span style={{ color: '#fdba74' }}>Fixed-price AI automation for Cleveland businesses.</span>
          </p>
        </div>
      </div>
      
      {/* Navigation - Opens slide-in articles */}
      <nav>
        <ul>
          <li><button onClick={() => onOpenArticle('intro')}>Solutions</button></li>
          <li><button onClick={() => onOpenArticle('work')}>Case Studies</button></li>
          <li><button onClick={() => onOpenArticle('about')}>About</button></li>
          <li><button onClick={() => onOpenArticle('contact')} className="nav-cta">Get Started</button></li>
        </ul>
      </nav>
    </header>
  );
}
