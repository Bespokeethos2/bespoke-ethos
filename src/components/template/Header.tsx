"use client";

import React from 'react';
import { Gem } from 'lucide-react';

interface HeaderProps {
  onOpenArticle: (article: string) => void;
  timeout: boolean;
}

export default function Header({ onOpenArticle, timeout }: HeaderProps) {
  return (
    <header id="header" className={timeout ? 'header-hidden' : ''}>
      {/* Logo with subtle white glow for visibility */}
      <div className="logo flex items-center justify-center logo-glow">
        <Gem className="w-8 h-8 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]" strokeWidth={1.5} />
      </div>
      
      {/* Title & CTA in frosted glass container */}
      <div className="content">
        <div className="inner text-glass-container">
          <h1 className="text-glow-white">Bespoke Ethos</h1>
          <p className="text-slate-300">
            Fixed-price AI automation for Cleveland businesses.<br />
            <span className="text-orange-300 font-medium">Ship working code, not slide decks.</span>
          </p>
        </div>
      </div>
      
      {/* High-conversion navigation based on AI consulting best practices */}
      <nav>
        <ul>
          <li><button onClick={() => onOpenArticle('intro')}>See Solutions</button></li>
          <li><button onClick={() => onOpenArticle('work')}>Case Studies</button></li>
          <li><button onClick={() => onOpenArticle('about')}>Our Approach</button></li>
          <li><button onClick={() => onOpenArticle('contact')} className="nav-cta">Get Started</button></li>
        </ul>
      </nav>
    </header>
  );
}
