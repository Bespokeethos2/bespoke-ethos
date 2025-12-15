"use client";

import React from 'react';
import { Gem } from 'lucide-react';

interface HeaderProps {
  onOpenArticle: (article: string) => void;
  timeout: boolean;
}

export default function Header({ onOpenArticle, timeout }: HeaderProps) {
  return (
    <header id="header" style={timeout ? { display: 'none' } : {}}>
      <div className="logo flex items-center justify-center">
        <Gem className="w-8 h-8 text-white" strokeWidth={1.5} />
      </div>
      <div className="content">
        <div className="inner">
          <h1>Dimension</h1>
          <p>A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a> and released<br />
          for free under the <a href="https://html5up.net/license">Creative Commons</a> license.</p>
        </div>
      </div>
      <nav>
        <ul>
          <li><button onClick={() => onOpenArticle('intro')}>Intro</button></li>
          <li><button onClick={() => onOpenArticle('work')}>Work</button></li>
          <li><button onClick={() => onOpenArticle('about')}>About</button></li>
          <li><button onClick={() => onOpenArticle('contact')}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
}
