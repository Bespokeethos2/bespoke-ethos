"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/template/Header';
import Main from '@/components/template/Main';
import Footer from '@/components/template/Footer';

// We might need to import the template styles here if they aren't global
// import '@/styles/template/main.css'; 

function SplashJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bespokeethos.com";
  const json = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Welcome",
    "url": `${base}/splash`,
    "description": "Enterprise-grade AI automation for small businesses. Cleveland-based, working nationwide.",
  };
  
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

export default function SplashPage() {
  const [isPreloaded, setIsPreloaded] = useState(false);
  const [article, setArticle] = useState('');
  const [timeout, setTimeoutState] = useState(false);
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [loading, setLoading] = useState('is-loading');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading('');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenArticle = (art: string) => {
    setArticleTimeout(!articleTimeout);
    setTimeout(() => {
      setArticleTimeout(false);
    }, 350);
    setTimeout(() => {
      setTimeoutState(!timeout);
      setArticle(art);
    }, 325);
  };

  const handleCloseArticle = () => {
    setArticleTimeout(!articleTimeout);
    setTimeout(() => {
        setArticleTimeout(false);
    }, 350);
    setTimeout(() => {
      setTimeoutState(!timeout);
      setArticle('');
    }, 325);
  };

  return (
    <>
      <SplashJsonLd />
      <div className={`body ${loading} is-preload`}>
        <div id="wrapper">
          <Header 
              onOpenArticle={handleOpenArticle} 
              timeout={timeout} 
          />
          <Main 
              article={article} 
              articleTimeout={articleTimeout} 
              onCloseArticle={handleCloseArticle} 
              timeout={timeout} 
          />
          <Footer timeout={timeout} />
        </div>
        <div id="bg"></div>
      </div>
    </>
  );
}
