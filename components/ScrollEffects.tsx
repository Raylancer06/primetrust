'use strict';
'use client';

import React, { useState, useEffect } from 'react';

export default function ScrollEffects() {
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPercent(pct);
      setShowBackToTop(scrollTop > 260);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* 1. Top Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3.5px] bg-gradient-to-r from-secondary-fixed via-secondary-container to-secondary z-[100] transition-all duration-100 ease-out shadow-[0_1px_6px_rgba(254,206,88,0.6)]"
        style={{ width: `${scrollPercent}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollPercent)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      {/* 2. Floating Modern Back to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-surface-container-lowest text-on-surface shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-secondary/40 hover:border-secondary hover:bg-surface-container hover:text-secondary hover:-translate-y-1 hover:shadow-[0_6px_24px_rgba(254,206,88,0.4)] active:scale-95 transition-all duration-300 flex items-center justify-center group ${
          showBackToTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll back to top of page"
        title="Back to Top"
      >
        <span className="material-symbols-outlined text-[22px] transition-transform duration-200 group-hover:-translate-y-0.5 text-secondary">
          arrow_upward
        </span>
      </button>
    </>
  );
}
