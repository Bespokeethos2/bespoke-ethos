"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/template/Header';
import Main from '@/components/template/Main';
import Footer from '@/components/template/Footer';

// We might need to import the template styles here if they aren't global
// import '@/styles/template/main.css'; 

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
  );
}
