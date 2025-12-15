"use client";

import React from 'react';

interface FooterProps {
  timeout: boolean;
}

export default function Footer({ timeout }: FooterProps) {
    return (
        <footer id="footer" style={timeout ? {display: 'none'} : {}}>
            <p className="copyright">&copy; Next.js Starter - Dimension. Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://github.com/zeit/next.js">Next.js</a></p>
        </footer>
    )
}
