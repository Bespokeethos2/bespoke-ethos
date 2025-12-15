"use client";

import React from 'react';
import Image from 'next/image';
import { Twitter, Facebook, Instagram, Github } from 'lucide-react';

interface MainProps {
  article: string;
  articleTimeout: boolean;
  onCloseArticle: () => void;
  timeout: boolean;
}

export default function Main({ article, articleTimeout, onCloseArticle, timeout }: MainProps) {
  const close = (
    <div 
      className="close" 
      onClick={onCloseArticle}
      role="button"
      tabIndex={0}
      aria-label="Close article"
      onKeyDown={(e) => { if(e.key === 'Enter') onCloseArticle() }}
    ></div>
  );

  return (
    <div id="main" style={{ display: timeout ? 'flex' : 'none' }}>

      {/* Intro */}
      <article 
        id="intro" 
        className={`${article === 'intro' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} 
        style={{ display: article === 'intro' ? 'block' : 'none' }}
      >
        <h2 className="major">Intro</h2>
        <div className="image main relative w-full h-64 mb-8">
            <Image src="/assets/template/images/pic01.jpg" alt="Intro Image" fill className="object-cover rounded-lg" />
        </div>
        <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
        {close}
      </article>

      {/* Work */}
      <article 
        id="work" 
        className={`${article === 'work' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} 
        style={{ display: article === 'work' ? 'block' : 'none' }}
      >
        <h2 className="major">Work</h2>
        <div className="image main relative w-full h-64 mb-8">
            <Image src="/assets/template/images/pic02.jpg" alt="Work Image" fill className="object-cover rounded-lg" />
        </div>
        <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
        {close}
      </article>

      {/* About */}
      <article 
        id="about" 
        className={`${article === 'about' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} 
        style={{ display: article === 'about' ? 'block' : 'none' }}
      >
        <h2 className="major">About</h2>
        <div className="image main relative w-full h-64 mb-8">
            <Image src="/assets/template/images/pic03.jpg" alt="About Image" fill className="object-cover rounded-lg" />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
        {close}
      </article>

      {/* Contact */}
      <article 
        id="contact" 
        className={`${article === 'contact' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} 
        style={{ display: article === 'contact' ? 'block' : 'none' }}
      >
        <h2 className="major">Contact</h2>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={4}></textarea>
          </div>
          <ul className="actions">
            <li><input type="submit" value="Send Message" className="special" /></li>
            <li><input type="reset" value="Reset" /></li>
          </ul>
        </form>
        <ul className="icons">
          <li><a href="#" aria-label="Twitter">
            <Twitter className="w-6 h-6" />
          </a></li>
          <li><a href="#" aria-label="Facebook">
            <Facebook className="w-6 h-6" />
          </a></li>
          <li><a href="#" aria-label="Instagram">
            <Instagram className="w-6 h-6" />
          </a></li>
          <li><a href="#" aria-label="Github">
            <Github className="w-6 h-6" />
          </a></li>
        </ul>
        {close}
      </article>

    </div>
  );
}
