'use strict';
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LOGO_SRC = "https://lh3.googleusercontent.com/aida-public/AB6AXuAzQb5reWjjHgahMqy54LpMvSSxrnru_WNo4FDbYi8NyiJ7QhIO4BYpCj9yzx8RIfDCNt0oo_OJ_WE9nsFEviFtdaXBx5WRHooFdjAgZ4lNn6euXAY0sSsRIPWzx6gaSakTsCVmOIqtDl4yRypWMBtmQ87vJjkJf7pczwv5XkoQpEpeGvOjBB6jIIunxu3jaaCKoM9FA_DyqdAJTW930z-ym9qhFKoSgzBSusCeble4xaR0c3HHQAypWORls3FY-mwfCg";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Investment', href: '/investment' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    if (href === '/investment') {
      return pathname === '/investment' || pathname === '/investment-plans';
    }
    if (href === '/about') {
      return pathname === '/about' || pathname === '/about-us';
    }
    if (href === '/contact') {
      return pathname === '/contact' || pathname === '/contact-us';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-outline-variant/20 transition-all duration-200">
        <div className="h-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* 1. Left: Brand Logo */}
          <div className="flex items-center shrink-0">
            <Link 
              href="/" 
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="Prime Trust Financial Home"
            >
              <img 
                alt="Prime Trust Financial & Investment Company" 
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
                src={LOGO_SRC}
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                  const fallback = document.getElementById('navbar-brand-text');
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              <span id="navbar-brand-text" className="hidden font-headline-md text-headline-sm font-bold text-on-surface">
                PRIME <span className="text-secondary font-extrabold">TRUST</span>
              </span>
            </Link>
          </div>

          {/* 2. Center: Desktop Navigation with ample breathing room */}
          <nav className="hidden md:flex items-center justify-center gap-1.5 lg:gap-3 flex-1 px-6 lg:px-12" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl font-label-md text-label-md transition-all duration-150 whitespace-nowrap ${
                    active
                      ? 'bg-surface-container-high text-on-surface font-bold shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-medium'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* 3. Right: Action Buttons & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl font-label-md text-label-md font-semibold text-on-surface bg-surface-container-lowest border border-outline-variant/40 shadow-[0_1px_3px_0_rgba(15,23,42,0.04)] hover:bg-surface-container-high hover:text-on-surface transition-all active:scale-95"
            >
              Login / Register
            </Link>

            <Link
              href="/investment"
              className="inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-xl font-label-md text-xs sm:text-label-md font-bold text-on-secondary-fixed bg-gradient-to-r from-secondary-fixed via-secondary-container to-secondary-fixed-dim hover:brightness-105 active:scale-95 transition-all shadow-[0_2px_8px_rgba(254,206,88,0.35)] hover:shadow-[0_4px_14px_rgba(254,206,88,0.45)] btn-shimmer shrink-0"
            >
              Plan &amp; Invest
            </Link>

            <div className="hidden sm:flex w-9 h-9 rounded-full bg-primary items-center justify-center ring-2 ring-secondary/20 shadow-sm shrink-0">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-on-surface hover:bg-surface-container focus:outline-none transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[26px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-in Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-surface-container-lowest shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between p-6 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div>
          {/* Header of Drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-outline-variant/30">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <img 
                alt="Prime Trust" 
                className="h-10 w-auto object-contain" 
                src={LOGO_SRC}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container focus:outline-none transition-colors"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>

          {/* Navigation Links list */}
          <nav className="flex flex-col gap-2 mt-6">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-label-md text-base transition-colors ${
                    active
                      ? 'bg-surface-container text-on-surface font-bold border-l-4 border-secondary'
                      : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-medium'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    chevron_right
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Quick Action in drawer */}
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/investment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-4 rounded-xl font-label-md font-bold text-center text-on-secondary-fixed bg-gradient-to-r from-secondary-fixed via-secondary-container to-secondary-fixed-dim shadow-md hover:brightness-105 transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Investment Plans</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-4 rounded-xl font-label-md font-semibold text-center text-on-surface bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 transition-colors"
            >
              Login / Investor Register
            </Link>
          </div>
        </div>

        {/* Footer info in drawer */}
        <div className="pt-6 border-t border-outline-variant/30 flex flex-col gap-2 text-xs text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[16px]">mail</span>
            <a href="mailto:primetrustinvestmentcompany7@gmail.com" className="truncate hover:text-secondary underline">
              primetrustinvestmentcompany7@gmail.com
            </a>
          </div>
          <p className="text-[11px] text-outline">
            Mon – Sat: 9:00 AM – 6:00 PM IST
          </p>
        </div>
      </div>
    </>
  );
}
