'use strict';
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const LOGO_SRC = "https://lh3.googleusercontent.com/aida-public/AB6AXuAzQb5reWjjHgahMqy54LpMvSSxrnru_WNo4FDbYi8NyiJ7QhIO4BYpCj9yzx8RIfDCNt0oo_OJ_WE9nsFEviFtdaXBx5WRHooFdjAgZ4lNn6euXAY0sSsRIPWzx6gaSakTsCVmOIqtDl4yRypWMBtmQ87vJjkJf7pczwv5XkoQpEpeGvOjBB6jIIunxu3jaaCKoM9FA_DyqdAJTW930z-ym9qhFKoSgzBSusCeble4xaR0c3HHQAypWORls3FY-mwfCg";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const email = 'primetrustinvestmentcompany7@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-[#0a0e17] text-slate-300 mt-auto relative overflow-hidden border-t border-slate-800">
      {/* Ambient background illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-secondary-fixed/10 blur-[130px] pointer-events-none -z-0"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 blur-[120px] pointer-events-none -z-0"></div>

      {/* Modern Multi-Layered Metallic Gold Top Border */}
      <div className="relative z-10 w-full">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-secondary-fixed to-transparent opacity-40"></div>
        <div className="h-[1.5px] w-full bg-gradient-to-r from-secondary-fixed-dim via-secondary-container via-secondary to-secondary-fixed shadow-[0_0_12px_rgba(254,206,88,0.5)]"></div>
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
        
        {/* 1. TOP NEWSLETTER STRIP (Modern Institutional Dispatch) */}
        <div className="mb-12 pb-10 border-b border-slate-800/80">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90 border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 backdrop-blur-sm">
            <div className="flex flex-col gap-1.5 text-center lg:text-left max-w-xl">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
                <span className="text-xs font-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
                  Institutional Intelligence
                </span>
              </div>
              <h3 className="font-headline-sm text-xl sm:text-2xl font-bold text-white tracking-tight">
                Subscribe to Prime Trust Capital Briefings
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Receive curated monthly yield projections, corporate filing announcements, and Indian domestic capital markets analysis.
              </p>
            </div>

            <div className="w-full lg:w-auto shrink-0">
              {!subscribed ? (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-md">
                  <div className="relative w-full sm:w-72">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter business email..."
                      className="w-full bg-slate-950/80 border border-slate-700 focus:border-secondary-container text-white text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-secondary/50 placeholder:text-slate-500 transition-all"
                    />
                    <span className="material-symbols-outlined absolute right-3 top-3 text-[18px] text-slate-500 pointer-events-none">
                      mark_email_unread
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl font-label-md text-sm font-bold text-on-secondary-fixed bg-gradient-to-r from-secondary-fixed via-secondary-container to-secondary-fixed-dim hover:brightness-110 active:scale-95 transition-all shadow-md btn-shimmer whitespace-nowrap"
                  >
                    <span>Subscribe</span>
                    <span className="material-symbols-outlined text-[16px] ml-1.5">arrow_forward</span>
                  </button>
                </form>
              ) : (
                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-sm font-medium animate-in fade-in">
                  <span className="material-symbols-outlined text-emerald-400 text-[20px]">check_circle</span>
                  <span>Thank you! Your dispatch subscription has been registered.</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 2. MAIN 4-COLUMN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand Info & Verified Direct Desk (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            <Link href="/" className="block focus:outline-none group">
              <img 
                alt="Prime Trust Financial & Investment Company" 
                className="h-11 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
                src={LOGO_SRC} 
              />
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-secondary-fixed text-xs font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></span>
              Plan • Invest • Grow
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Premier wealth stewardship and multi-asset advisory engineered for enterprise capital growth, institutional resilience, and high-net-worth portfolio stability.
            </p>

            {/* Click-to-Copy Interactive Email Pill */}
            <div className="flex flex-col gap-1 w-full max-w-sm pt-1">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                Official Advisory Channel
              </span>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
                <a
                  href={`mailto:${email}`}
                  className="text-xs sm:text-sm font-medium text-slate-200 hover:text-secondary-fixed transition-colors truncate mr-2"
                >
                  {email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                </button>
              </div>
              {copied && (
                <span className="text-xs text-secondary-fixed font-medium mt-0.5 animate-in fade-in">
                  Official email copied to clipboard!
                </span>
              )}
            </div>

            {/* Live Desk Status */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Advisory Desk Active • Mon – Sat: 9:00 AM – 6:00 PM IST</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-secondary-fixed font-bold mb-1">
              Navigation
            </span>
            <Link 
              href="/" 
              className="link-gold-hover text-sm text-slate-400 hover:text-white py-1 w-fit flex items-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-[14px] text-slate-600">chevron_right</span>
              <span>Home</span>
            </Link>
            <Link 
              href="/about" 
              className="link-gold-hover text-sm text-slate-400 hover:text-white py-1 w-fit flex items-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-[14px] text-slate-600">chevron_right</span>
              <span>About Us</span>
            </Link>
            <Link 
              href="/investment" 
              className="link-gold-hover text-sm text-slate-400 hover:text-white py-1 w-fit flex items-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-[14px] text-slate-600">chevron_right</span>
              <span>Investment</span>
            </Link>
            <Link 
              href="/contact" 
              className="link-gold-hover text-sm text-slate-400 hover:text-white py-1 w-fit flex items-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-[14px] text-slate-600">chevron_right</span>
              <span>Contact Us</span>
            </Link>
            <Link 
              href="/investment#calculator-section" 
              className="link-gold-hover text-sm text-secondary-fixed font-semibold py-1 w-fit flex items-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-[14px] text-secondary">calculate</span>
              <span>Yield Calculator</span>
            </Link>
          </div>

          {/* Column 3: Solutions & Governance (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-secondary-fixed font-bold mb-1">
              Strategies &amp; Legal
            </span>
            <Link 
              href="/investment" 
              className="text-sm text-slate-400 hover:text-white py-1 w-fit flex items-center gap-2 group transition-colors"
            >
              <span>Growth Plan</span>
              <span className="px-1.5 py-0.2 rounded bg-secondary-fixed/20 text-secondary-fixed text-[10px] font-bold">
                9% Mo
              </span>
            </Link>
            <Link 
              href="/investment" 
              className="text-sm text-slate-400 hover:text-white py-1 w-fit flex items-center gap-2 group transition-colors"
            >
              <span>Referral Desk</span>
              <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold">
                1% Direct
              </span>
            </Link>
            <Link 
              href="/about" 
              className="link-gold-hover text-sm text-slate-400 hover:text-white py-1 w-fit flex items-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-[14px] text-slate-600">chevron_right</span>
              <span>Custody Architecture</span>
            </Link>
            <Link 
              href="/contact" 
              className="link-gold-hover text-sm text-slate-400 hover:text-white py-1 w-fit flex items-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-[14px] text-slate-600">chevron_right</span>
              <span>Fraud Prevention</span>
            </Link>
            <span className="text-sm text-slate-400 hover:text-white py-1 w-fit flex items-center gap-1.5 cursor-pointer transition-colors">
              <span className="material-symbols-outlined text-[14px] text-slate-600">chevron_right</span>
              <span>Statutory Filings</span>
            </span>
          </div>

          {/* Column 4: Institutional Security & Trust Seals (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-secondary-fixed font-bold mb-1">
              Institutional Trust
            </span>
            
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3 hover:border-slate-700 transition-colors">
              <span className="material-symbols-outlined text-secondary-fixed text-[20px] shrink-0 mt-0.5">
                verified_user
              </span>
              <div>
                <span className="text-xs font-bold text-white block">RBI &amp; SEBI Aligned Corridors</span>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                  Settlements processed exclusively via domestic NEFT / IMPS / RTGS banking channels.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3 hover:border-slate-700 transition-colors">
              <span className="material-symbols-outlined text-secondary-fixed text-[20px] shrink-0 mt-0.5">
                lock
              </span>
              <div>
                <span className="text-xs font-bold text-white block">Segregated Capital Accounts</span>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                  Client holdings maintained in independent scheduled commercial bank custodial accounts.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 3. BOTTOM BAR (Modern Institutional Strip) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Disclaimer & Copyright */}
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
              *Disclaimer: Proposed monthly returns of 9% are prospective targets subject to legal and regulatory approval under sovereign Indian financial governance. Fictional prototype demonstration.
            </p>
            <p className="text-xs text-slate-400 font-medium">
              &copy; 2025 Prime Trust Financial &amp; Investment Company. All rights reserved.
            </p>
          </div>

          {/* Social Channels & Back-to-Top Button */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-secondary hover:text-secondary-fixed text-slate-400 flex items-center justify-center transition-all hover:-translate-y-0.5"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <span className="text-xs font-bold font-mono">in</span>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-secondary hover:text-secondary-fixed text-slate-400 flex items-center justify-center transition-all hover:-translate-y-0.5"
                title="X (Twitter)"
                aria-label="Twitter Profile"
              >
                <span className="text-xs font-bold font-mono">𝕏</span>
              </a>
              <a
                href="mailto:primetrustinvestmentcompany7@gmail.com"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-secondary hover:text-secondary-fixed text-slate-400 flex items-center justify-center transition-all hover:-translate-y-0.5"
                title="Official Email"
                aria-label="Email Advisory Desk"
              >
                <span className="material-symbols-outlined text-[16px]">mail</span>
              </a>
            </div>

            {/* Back to Top Inline Action */}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-secondary-fixed transition-all"
              title="Return to top"
            >
              <span>Back to Top</span>
              <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
