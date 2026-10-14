'use strict';
'use client';

import React, { useState } from 'react';

export default function EmailCopyCard() {
  const [copied, setCopied] = useState(false);
  const email = 'primetrustinvestmentcompany7@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(15,23,42,0.05)] overflow-hidden border border-outline-variant/30">
      {/* 2px Gold Rim Top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-secondary-fixed-dim via-secondary to-secondary-fixed"></div>

      <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20">
        <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-bold">
          Direct Channel
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] font-label-sm text-xs font-semibold">
          <span className="material-symbols-outlined text-[14px]">verified</span>
          Verified Desk
        </span>
      </div>

      <div className="flex items-start gap-4 pt-4">
        <div className="w-12 h-12 rounded-xl bg-primary-container text-secondary-fixed flex items-center justify-center shrink-0 shadow-sm">
          <span className="material-symbols-outlined text-[24px]">mark_email_read</span>
        </div>
        <div className="flex flex-col gap-1 min-w-0">
          <span className="font-headline-sm text-lg sm:text-headline-sm text-on-surface font-bold tracking-tight">
            Official Direct Email
          </span>
          <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
            All investor inquiries, KYC queries, and partnership requests are handled directly through our verified email desk.
          </p>
        </div>
      </div>

      {/* Email High-Trust Anchor */}
      <div className="mt-6 p-4 rounded-xl bg-surface-container-low flex flex-col gap-1 border border-outline-variant/20">
        <span className="font-label-sm text-xs uppercase tracking-wider text-on-surface-variant font-medium">
          Primary Contact Point
        </span>
        <div className="flex items-center justify-between gap-2 overflow-hidden">
          <a
            href={`mailto:${email}`}
            className="font-body-md text-sm sm:text-body-md font-semibold text-on-surface hover:text-secondary truncate transition-colors underline decoration-secondary-fixed decoration-2 underline-offset-4"
          >
            {email}
          </a>
          <button
            type="button"
            onClick={handleCopy}
            className="p-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors shrink-0"
            title="Copy Email"
            aria-label="Copy Email address"
          >
            <span className="material-symbols-outlined text-[18px]">
              {copied ? 'check' : 'content_copy'}
            </span>
          </button>
        </div>
        {copied && (
          <span className="font-label-sm text-xs text-secondary font-semibold transition-opacity duration-300">
            Email address copied to clipboard!
          </span>
        )}
      </div>

      {/* Operational Benchmarks */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        <div className="flex flex-col gap-1 p-3.5 rounded-xl bg-surface-container-low/60 border border-outline-variant/20">
          <div className="flex items-center gap-1.5 text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px] text-secondary">schedule</span>
            <span className="font-label-sm text-xs font-semibold uppercase tracking-wider">Operational Hours</span>
          </div>
          <span className="font-body-sm text-xs sm:text-body-sm font-semibold text-on-surface">Mon – Sat: 9:00 AM – 6:00 PM IST</span>
          <span className="font-label-sm text-[11px] text-on-surface-variant">Excluding statutory trading holidays</span>
        </div>

        <div className="flex flex-col gap-1 p-3.5 rounded-xl bg-surface-container-low/60 border border-outline-variant/20">
          <div className="flex items-center gap-1.5 text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px] text-secondary">timer</span>
            <span className="font-label-sm text-xs font-semibold uppercase tracking-wider">Response Window</span>
          </div>
          <span className="font-body-sm text-xs sm:text-body-sm font-semibold text-on-surface">24 to 48 Business Hours</span>
          <span className="font-label-sm text-[11px] text-on-surface-variant">Prioritized by tier portfolio status</span>
        </div>
      </div>

      {/* Monitored Safe Channel Notice */}
      <div className="mt-4 p-4 rounded-xl bg-surface-container flex items-start gap-3 border border-outline-variant/20">
        <span className="material-symbols-outlined text-[20px] text-on-surface-variant shrink-0 mt-0.5">policy</span>
        <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
          In strict accordance with compliance protocols, Prime Trust operates solely via digital correspondence at our registered address. No secondary telephonic or third-party agent desks are commissioned.
        </p>
      </div>
    </div>
  );
}
