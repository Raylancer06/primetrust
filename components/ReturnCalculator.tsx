'use strict';
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ReturnCalculatorProps {
  variant?: 'home' | 'investment';
}

export default function ReturnCalculator({ variant = 'home' }: ReturnCalculatorProps) {
  const [amount, setAmount] = useState<number>(50000);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN').format(Math.round(val));
  };

  const monthlyRate = 0.09; // 9% proposed
  const monthlyPayout = amount * monthlyRate;
  const sixMonthsPayout = monthlyPayout * 6;
  const annualGrowth = monthlyPayout * 12;
  const totalReturn = amount + annualGrowth;

  const presets = [
    { label: '₹10K', value: 10000, display: '₹10,000' },
    { label: '₹25K', value: 25000, display: '₹25,000' },
    { label: '₹50K', value: 50000, display: '₹50,000' },
    { label: '₹1L', value: 100000, display: '₹1,00,000' },
    { label: '₹5L', value: 500000, display: '₹5,00,000' },
  ];

  if (variant === 'investment') {
    return (
      <div className="bg-surface-container-lowest rounded-xl sm:rounded-2xl shadow-md p-5 sm:p-8 lg:p-10 relative overflow-hidden">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-outline-variant/30">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              Yield Modeling • 9% Proposed Monthly Rate
            </span>
            <h2 className="font-headline-md text-headline-md sm:text-headline-xl font-bold text-on-surface mt-1">
              Interactive Investment Calculator
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
              Simulate direct monthly indicative payouts and prospective capital performance denominated in Indian Rupees (₹).
            </p>
          </div>
          <div className="md:text-right shrink-0">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Proposed Rate Fixed At</span>
            <p className="font-headline-sm text-headline-sm sm:text-headline-md font-bold text-secondary">
              9.00% / Month
            </p>
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 sm:pt-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="investmentRange-inv" className="font-label-md text-label-md font-bold text-on-surface flex justify-between items-center">
                <span>Select Allocation Capital</span>
                <span className="font-currency-display text-xl sm:text-2xl font-bold text-secondary">
                  ₹{formatINR(amount)}
                </span>
              </label>
              <input
                id="investmentRange-inv"
                type="range"
                min="10000"
                max="500000"
                step="5000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary"
              />
              <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant mt-1">
                <span>₹10,000 (Min)</span>
                <span>₹2,50,000</span>
                <span>₹5,00,000 (Max)</span>
              </div>
            </div>

            {/* Presets */}
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                Preset Allocations
              </span>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {presets.map((preset) => (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => setAmount(preset.value)}
                    className={`py-2 px-1 rounded-lg font-label-md text-label-md font-bold transition-all text-center ${
                      amount === preset.value
                        ? 'bg-secondary-fixed text-on-secondary-fixed shadow-sm'
                        : 'bg-surface-container-low text-on-surface hover:bg-surface-container-high'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Bank Info banner */}
            <div className="p-4 rounded-xl bg-surface-container-low flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">
                account_balance
              </span>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md font-bold text-on-surface">
                  Direct Bank Automated Credit
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">
                  Yield amounts are remitted directly every 30 days without manual withdrawal requests.
                </p>
              </div>
            </div>
          </div>

          {/* Breakdown Projection Matrix (Right) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Box 1 */}
              <div className="p-5 sm:p-6 rounded-xl bg-surface-container-low flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                    Base Principal
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">lock</span>
                </div>
                <div className="mt-4">
                  <p className="font-currency-display text-2xl sm:text-3xl font-bold text-on-surface">
                    ₹{formatINR(amount)}
                  </p>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Locked capital asset</span>
                </div>
              </div>

              {/* Box 2 */}
              <div className="p-5 sm:p-6 rounded-xl bg-surface-container-high flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                    Monthly Indicative Payout
                  </span>
                  <span className="material-symbols-outlined text-secondary text-[20px]">trending_up</span>
                </div>
                <div className="mt-4">
                  <p className="font-currency-display text-2xl sm:text-3xl font-bold text-secondary">
                    ₹{formatINR(monthlyPayout)}
                  </p>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">At 9.00% proposed target</span>
                </div>
              </div>

              {/* Box 3 */}
              <div className="p-5 sm:p-6 rounded-xl bg-surface-container-low flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                    6 Months Total Payout
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">date_range</span>
                </div>
                <div className="mt-4">
                  <p className="font-currency-display text-2xl sm:text-3xl font-bold text-on-surface">
                    ₹{formatINR(sixMonthsPayout)}
                  </p>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Total yield accrued over 180 days</span>
                </div>
              </div>

              {/* Box 4 */}
              <div className="p-5 sm:p-6 rounded-xl bg-surface-container-low flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                    12 Months Total Flow
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">savings</span>
                </div>
                <div className="mt-4">
                  <p className="font-currency-display text-2xl sm:text-3xl font-bold text-on-surface">
                    ₹{formatINR(totalReturn)}
                  </p>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    ₹{formatINR(annualGrowth)} Yield + ₹{formatINR(amount)} Principal
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom CTA within Calculator */}
            <div className="p-4 sm:p-5 rounded-xl bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-body-sm text-body-sm text-on-surface font-medium text-center sm:text-left">
                Ready to allocate your principal under verified institutional custody?
              </span>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-lg font-label-md text-label-md font-bold text-on-primary bg-primary hover:bg-primary-container transition-all shadow-sm shrink-0"
              >
                Proceed to Allocation
              </Link>
            </div>
          </div>
        </div>

        {/* Regulatory Warning Below Calculator */}
        <div className="mt-8 p-4 rounded-xl bg-surface-container-low flex items-start gap-3 text-on-surface-variant">
          <span className="material-symbols-outlined text-outline text-[20px] shrink-0 mt-0.5">info</span>
          <p className="font-body-sm text-body-sm leading-relaxed">
            <strong className="text-on-surface font-semibold">Regulatory Yield Disclosure:</strong> The calculations demonstrated above reflect prospective models based on a targeted 9% monthly payout rate. Projections are indicative and subject to statutory governance, economic conditions, and contractual verification. They do not constitute guaranteed bank deposit claims or debt debentures.
          </p>
        </div>
      </div>
    );
  }

  // Home Page Variant
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Interactive Controls (Left) */}
      <div className="lg:col-span-6 flex flex-col gap-6">
        <div>
          <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
            Interactive Planner
          </span>
          <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-headline-xl font-bold text-on-surface tracking-tight mt-1">
            Calculate Your Projected Returns
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl leading-relaxed">
            Model your prospective monthly earnings based on the proposed 9.0% return rate. Adjust the capital slider to match your portfolio targets.
          </p>
        </div>

        {/* Calculator Form Control Card */}
        <div className="p-5 sm:p-6 lg:p-8 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="invest-slider-home">
                Investment Capital (₹)
              </label>
              <div className="font-headline-sm text-xl sm:text-headline-sm font-bold text-secondary flex items-center">
                <span>₹{formatINR(amount)}</span>
              </div>
            </div>
            
            <input
              className="w-full h-2.5 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-secondary"
              id="invest-slider-home"
              max="1000000"
              min="10000"
              step="5000"
              type="range"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            
            <div className="flex justify-between items-center text-label-sm font-label-sm text-outline mt-2">
              <span>Min: ₹10,000</span>
              <span>₹5,00,000</span>
              <span>Max: ₹10,00,000</span>
            </div>
          </div>

          {/* Quick Capital Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-label-sm text-label-sm text-on-surface-variant mr-1">Presets:</span>
            {presets.map((preset) => (
              <button
                key={preset.value}
                type="button"
                onClick={() => setAmount(preset.value)}
                className={`px-3 py-1.5 rounded-lg font-label-sm text-label-sm font-semibold transition-colors ${
                  amount === preset.value
                    ? 'bg-secondary-fixed text-on-secondary-fixed font-bold shadow-xs'
                    : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
                }`}
              >
                {preset.display}
              </button>
            ))}
          </div>

          {/* Proposed Rate Banner */}
          <div className="p-3.5 rounded-xl bg-secondary-fixed/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-secondary">verified</span>
              <span className="font-label-sm text-label-sm font-bold text-on-secondary-fixed">Proposed Fixed Rate:</span>
            </div>
            <span className="font-label-md text-label-md font-extrabold text-on-secondary-fixed">9.0% / Month*</span>
          </div>
        </div>
      </div>

      {/* Calculated Output Cards (Right) */}
      <div className="lg:col-span-6 flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Output: Monthly Payout */}
          <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                Estimated Monthly Payout
              </span>
              <div className="font-display-lg text-3xl sm:text-4xl font-extrabold text-on-surface leading-tight mt-2 flex items-baseline">
                <span>₹{formatINR(monthlyPayout)}</span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-4">
              Credited every 30 days to your verified account.
            </p>
          </div>

          {/* Output: Annual Return */}
          <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                Estimated Annual Growth
              </span>
              <div className="font-display-lg text-3xl sm:text-4xl font-extrabold text-secondary leading-tight mt-2 flex items-baseline">
                <span>₹{formatINR(annualGrowth)}</span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-4">
              Cumulative nominal return over a 12-month tenure.
            </p>
          </div>
        </div>

        {/* Total Value Overview Card */}
        <div className="p-6 rounded-2xl bg-primary text-on-primary shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed font-bold">
              Total Estimated Value (Principal + 12M Return)
            </span>
            <div className="font-headline-xl text-2xl sm:text-3xl font-bold text-surface-container-lowest mt-1 flex items-baseline">
              <span>₹{formatINR(totalReturn)}</span>
            </div>
            <span className="font-label-sm text-[11px] text-tertiary-fixed-dim">
              Indicative simulation before applicable statutory compliance
            </span>
          </div>
          <Link
            href="/investment"
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-label-md text-label-md font-bold text-on-secondary-fixed bg-secondary-fixed hover:bg-secondary-container transition-colors text-center whitespace-nowrap shrink-0"
          >
            Lock In Plan
          </Link>
        </div>

        {/* Prominent Footnote */}
        <div className="p-3.5 rounded-xl bg-surface-container-low flex items-start gap-2.5">
          <span className="material-symbols-outlined text-[18px] text-outline mt-0.5 shrink-0">info</span>
          <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed">
            *Note: Proposed returns are subject to legal and regulatory approval. Calculations are indicative for planning purposes and do not represent guaranteed bank interest.
          </p>
        </div>
      </div>
    </div>
  );
}
