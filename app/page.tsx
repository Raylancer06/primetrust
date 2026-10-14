import React from 'react';
import Link from 'next/link';
import ReturnCalculator from '@/components/ReturnCalculator';
import TransactionTable from '@/components/TransactionTable';
import FaqAccordion from '@/components/FaqAccordion';

export default function HomePage() {
  const faqItems = [
    {
      question: 'What is the minimum investment required?',
      answer: (
        <p>
          The minimum capital allocation threshold is set at ₹10,000. This ensures disciplined, accessible wealth building for individual and corporate investors without disproportionate entry barriers.
        </p>
      ),
    },
    {
      question: 'How are returns distributed?',
      answer: (
        <p>
          Proposed monthly returns of 9% are scheduled for direct credit into your registered Indian bank account every 30 days. Payout executions are subject to ongoing legal and regulatory governance clearances.
        </p>
      ),
    },
    {
      question: 'How does the 1% referral reward work?',
      answer: (
        <p>
          When an investor joins using your referral code and successfully completes capital allocation of at least ₹10,000, a 1% direct reward is generated and credited to your verified portfolio ledger upon KYC approval.
        </p>
      ),
    },
    {
      question: 'What customer contact channels are available?',
      answer: (
        <p>
          Our corporate advisory desk provides official direct email support at{' '}
          <a className="text-secondary font-bold underline" href="mailto:primetrustinvestmentcompany7@gmail.com">
            primetrustinvestmentcompany7@gmail.com
          </a>
          . Queries are reviewed and answered by assigned compliance desk officers within business hours.
        </p>
      ),
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-low via-background to-background py-12 sm:py-16 md:py-24">
        {/* Ambient decorative glow */}
        <div className="absolute -top-32 right-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none animate-pulse-glow"></div>
        <div className="absolute bottom-0 -left-20 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-surface-container-high/60 blur-2xl pointer-events-none animate-pulse-glow"></div>
        
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start gap-5">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-surface-container-lowest shadow-sm border border-outline-variant/30 hover:border-secondary/50 transition-colors">
                <span className="w-2 h-2 rounded-full bg-secondary shrink-0 animate-pulse"></span>
                <span className="font-label-sm text-xs sm:text-label-sm uppercase tracking-wider text-secondary font-bold">
                  Certified Wealth Management • Plan • Invest • Grow
                </span>
              </div>

              {/* Hero Headline */}
              <h1 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl lg:text-display-lg text-on-surface font-extrabold tracking-tight leading-[1.15]">
                Investment Plans for Your{' '}
                <span className="bg-gradient-to-r from-on-surface via-secondary to-on-secondary-fixed-variant bg-clip-text text-transparent">
                  Financial Goals
                </span>
              </h1>

              {/* Subheading */}
              <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
                Transparent wealth creation structured for disciplined Indian investors. Start with accessible capital and planned predictable monthly returns.
              </p>

              {/* Key Highlights inline badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest shadow-sm border border-outline-variant/30 hover:border-secondary/40 text-xs sm:text-sm hover:-translate-y-0.5 transition-transform">
                  <span className="material-symbols-outlined text-[16px] text-secondary">payments</span>
                  <span className="font-label-md font-semibold text-on-surface">Min. Investment: ₹10,000</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary-fixed/50 shadow-sm border border-secondary/20 text-xs sm:text-sm hover:-translate-y-0.5 transition-transform">
                  <span className="material-symbols-outlined text-[16px] text-secondary">trending_up</span>
                  <span className="font-label-md font-bold text-on-secondary-fixed">Proposed Monthly Return: 9%*</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest shadow-sm border border-outline-variant/30 hover:border-secondary/40 text-xs sm:text-sm hover:-translate-y-0.5 transition-transform">
                  <span className="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
                  <span className="font-label-md font-semibold text-on-surface">Verified Direct Withdrawals</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
                <Link
                  href="/investment"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 rounded-xl font-label-md text-label-md font-bold text-on-secondary-fixed bg-gradient-to-r from-secondary-fixed via-secondary-container to-secondary-fixed-dim hover:brightness-105 shadow-[0_4px_16px_rgba(254,206,88,0.4)] transition-all transform hover:-translate-y-0.5 active:scale-95 btn-shimmer"
                >
                  <span>Explore Investment Plans</span>
                  <span className="material-symbols-outlined text-[18px] ml-1.5">arrow_forward</span>
                </Link>
                <a
                  href="#calculator-section"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-xl font-label-md text-label-md font-semibold text-on-surface bg-surface-container-lowest shadow-sm border border-outline-variant/40 hover:bg-surface-container transition-all"
                >
                  <span className="material-symbols-outlined text-[18px] mr-1.5 text-secondary">calculate</span>
                  <span>Calculate Returns</span>
                </a>
              </div>

              {/* Statutory micro disclaimer */}
              <p className="font-label-sm text-xs text-outline pt-1">
                *Proposed returns are subject to legal &amp; regulatory approval. Capital allocations subject to market governance.
              </p>
            </div>

            {/* Right Side: Behoof Visual Investment Preview Card */}
            <div className="lg:col-span-5 relative w-full">
              {/* Decorative Top Accent */}
              <div className="h-1.5 w-full bg-gradient-to-r from-secondary-fixed via-secondary-container to-secondary rounded-t-2xl"></div>
              <div className="bg-surface-container-lowest rounded-b-2xl shadow-xl p-5 sm:p-7 flex flex-col gap-5 border border-outline-variant/30 border-t-0 hover-card-effect">
                {/* Header of Card */}
                <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
                  <div>
                    <span className="font-label-sm text-xs uppercase tracking-wider text-secondary font-bold">
                      Indicative Performance
                    </span>
                    <h3 className="font-headline-sm text-lg sm:text-headline-sm font-bold text-on-surface">
                      Portfolio Yield Snapshot
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary text-[22px]">account_balance</span>
                  </div>
                </div>

                {/* Main Metric High Density Display */}
                <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low flex items-center justify-between">
                  <div>
                    <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider">
                      Projected Monthly Yield
                    </span>
                    <div className="font-display-lg text-3xl sm:text-4xl font-extrabold text-on-surface leading-none mt-1">
                      9.0<span className="text-secondary text-2xl">%</span>
                    </div>
                    <span className="font-label-sm text-xs text-outline mt-1 block">Per Calendar Month</span>
                  </div>
                  <div className="text-right">
                    <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider">
                      Entry Threshold
                    </span>
                    <div className="font-headline-md text-xl sm:text-2xl font-bold text-on-surface mt-1">
                      ₹10,000
                    </div>
                    <span className="inline-flex items-center gap-1 font-label-sm text-xs text-secondary font-semibold mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Accessible
                    </span>
                  </div>
                </div>

                {/* Inline SVG Yield Chart Simulation */}
                <div className="bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/30 flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs font-label-sm text-on-surface-variant">
                    <span>12-Month Cumulative Capital Simulation</span>
                    <span className="font-bold text-secondary">+108% Annualized</span>
                  </div>
                  <svg className="w-full h-20 sm:h-24 overflow-visible" fill="none" viewBox="0 0 400 120">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#fece58" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#fece58" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,110 C50,100 80,92 120,80 C160,68 200,60 250,42 C300,24 350,16 400,6 L400,120 L0,120 Z" fill="url(#chartGradient)" />
                    <path d="M0,110 C50,100 80,92 120,80 C160,68 200,60 250,42 C300,24 350,16 400,6" stroke="#775a00" strokeLinecap="round" strokeWidth="3" />
                    <circle cx="400" cy="6" fill="#775a00" r="5" />
                    <circle cx="250" cy="42" fill="#fece58" r="4" />
                    <circle cx="120" cy="80" fill="#fece58" r="4" />
                  </svg>
                </div>

                {/* Key Asset Backing Bullet Points */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low">
                    <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">
                      account_balance_wallet
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-sm text-xs font-bold text-on-surface truncate">
                        Direct Bank Payout
                      </span>
                      <span className="font-label-sm text-[10px] text-on-surface-variant truncate">
                        IMPS / NEFT Auto-credit
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low">
                    <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">
                      group_add
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-sm text-xs font-bold text-on-surface truncate">
                        1% Referral Bonus
                      </span>
                      <span className="font-label-sm text-[10px] text-on-surface-variant truncate">
                        Instant Partner Reward
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Action button */}
                <Link
                  href="/investment"
                  className="w-full py-3 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-bold text-center hover:bg-on-surface transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 btn-shimmer"
                >
                  <span>Enroll in Wealth Builder Plan</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATISTICS STRIP */}
      <section className="w-full bg-surface-container-lowest shadow-[0_2px_12px_rgba(0,0,0,0.03)] py-8 border-y border-outline-variant/20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex flex-col items-center lg:items-start p-4 sm:p-5 rounded-xl bg-surface-container-low/60 hover:bg-surface-container-low hover-card-effect border border-transparent">
              <div className="flex items-center gap-1.5 text-secondary">
                <span className="material-symbols-outlined text-[20px]">currency_rupee</span>
                <span className="font-label-sm text-xs uppercase tracking-wider font-bold text-secondary">
                  Minimum Allocation
                </span>
              </div>
              <div className="font-headline-xl text-2xl sm:text-3xl font-extrabold text-on-surface mt-1">
                ₹10,000
              </div>
              <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant text-center lg:text-left mt-0.5">
                Accessible entry threshold
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start p-4 sm:p-5 rounded-xl bg-surface-container-low/60 hover:bg-surface-container-low hover-card-effect border border-transparent">
              <div className="flex items-center gap-1.5 text-secondary">
                <span className="material-symbols-outlined text-[20px]">percent</span>
                <span className="font-label-sm text-xs uppercase tracking-wider font-bold text-secondary">
                  Proposed Monthly
                </span>
              </div>
              <div className="font-headline-xl text-2xl sm:text-3xl font-extrabold text-on-surface mt-1">
                9.0%<span className="text-secondary font-bold text-lg sm:text-headline-sm">*</span>
              </div>
              <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant text-center lg:text-left mt-0.5">
                Planned predictable payouts
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start p-4 sm:p-5 rounded-xl bg-surface-container-low/60 hover:bg-surface-container-low hover-card-effect border border-transparent">
              <div className="flex items-center gap-1.5 text-secondary">
                <span className="material-symbols-outlined text-[20px]">loyalty</span>
                <span className="font-label-sm text-xs uppercase tracking-wider font-bold text-secondary">
                  Direct Referral
                </span>
              </div>
              <div className="font-headline-xl text-2xl sm:text-3xl font-extrabold text-on-surface mt-1">
                1.0%
              </div>
              <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant text-center lg:text-left mt-0.5">
                On partner capital verified
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start p-4 sm:p-5 rounded-xl bg-surface-container-low/60 hover:bg-surface-container-low hover-card-effect border border-transparent">
              <div className="flex items-center gap-1.5 text-secondary">
                <span className="material-symbols-outlined text-[20px]">security</span>
                <span className="font-label-sm text-xs uppercase tracking-wider font-bold text-secondary">
                  Bank Verification
                </span>
              </div>
              <div className="font-headline-xl text-2xl sm:text-3xl font-extrabold text-on-surface mt-1">
                100%
              </div>
              <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant text-center lg:text-left mt-0.5">
                Direct institutional settlements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY PRIME TRUST SECTION */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-background">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold mb-2">
              The Prime Trust Edge
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-headline-xl font-bold text-on-surface tracking-tight">
              Engineered for Security, Predictability &amp; Scale
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              Combining the procedural rigor of established financial stewardship with the swift execution of modern fintech.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 hover-card-effect flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-secondary text-[26px]">pie_chart</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                  Disciplined Asset Allocation
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Rigorous risk evaluation focusing on steady yield and principal preservation across multi-tier enterprise instruments.
                </p>
              </div>
              <div className="pt-5 flex items-center gap-1 text-secondary font-label-md text-label-md font-semibold">
                <span>Preservation First</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 hover-card-effect flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-secondary-fixed/40 flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-secondary text-[26px]">visibility</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                  Transparent Terms
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Flat, unclouded structure with zero concealed processing fees and automated monthly payout tracking sent directly to your ledger.
                </p>
              </div>
              <div className="pt-5 flex items-center gap-1 text-secondary font-label-md text-label-md font-semibold">
                <span>Zero Hidden Deductions</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 hover-card-effect flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-secondary text-[26px]">account_balance</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                  Verified Direct Settlements
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Rapid local Indian banking withdrawals straight to your verified KYC bank account via IMPS, NEFT, and RTGS infrastructure.
                </p>
              </div>
              <div className="pt-5 flex items-center gap-1 text-secondary font-label-md text-label-md font-semibold">
                <span>Direct to Bank</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 hover-card-effect flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-secondary text-[26px]">verified</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                  Regulatory &amp; Compliance Focus
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Operating under rigorous procedural adherence, proactive legal governance, and planned statutory safeguards for every rupee.
                </p>
              </div>
              <div className="pt-5 flex items-center gap-1 text-secondary font-label-md text-label-md font-semibold">
                <span>Rigorous Governance</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INVESTMENT PLAN PREVIEW CARD SECTION */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-surface-container-low/50">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold mb-2">
              Flagship Portfolio Option
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-headline-xl font-bold text-on-surface tracking-tight">
              Prime Trust Wealth Builder Plan
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              A single disciplined investment vehicle structured to deliver regular monthly returns and steady capital stewardship.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden border border-outline-variant/30 relative hover-card-effect">
            <div className="h-2 w-full bg-gradient-to-r from-secondary-fixed via-secondary-container to-secondary"></div>
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col gap-6 sm:gap-8">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline-variant/20">
                <div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-secondary-fixed/50 font-label-sm text-xs font-bold text-on-secondary-fixed mb-1.5">
                    POPULAR CHOICE
                  </div>
                  <h3 className="font-headline-md text-2xl font-extrabold text-on-surface">
                    Wealth Builder Plan
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Recommended for individuals and business owners seeking steady cash flow
                  </p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="font-label-sm text-xs uppercase tracking-wider text-outline font-semibold">
                    Proposed Return
                  </span>
                  <div className="font-display-lg text-3xl sm:text-4xl font-extrabold text-secondary leading-none mt-1">
                    9.0%
                  </div>
                  <span className="font-label-sm text-xs text-on-surface-variant">Monthly Credit*</span>
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 sm:p-5 rounded-xl bg-surface-container-low">
                <div className="flex flex-col">
                  <span className="font-label-sm text-xs text-on-surface-variant uppercase font-semibold">Min. Capital</span>
                  <span className="font-headline-sm text-xl sm:text-headline-sm font-bold text-on-surface mt-1">₹10,000</span>
                  <span className="font-label-sm text-[11px] text-outline">Accessible to all</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-xs text-on-surface-variant uppercase font-semibold">Payout Schedule</span>
                  <span className="font-headline-sm text-xl sm:text-headline-sm font-bold text-on-surface mt-1">Monthly</span>
                  <span className="font-label-sm text-[11px] text-outline">Direct bank credit</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-xs text-on-surface-variant uppercase font-semibold">Capital Review</span>
                  <span className="font-headline-sm text-xl sm:text-headline-sm font-bold text-on-surface mt-1">Structured</span>
                  <span className="font-label-sm text-[11px] text-outline">Documented ledger</span>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">check_circle</span>
                  <span className="font-body-sm text-body-sm text-on-surface">Capital preservation and disciplined allocation framework</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">check_circle</span>
                  <span className="font-body-sm text-body-sm text-on-surface">Automated monthly payout straight to verified bank account</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">check_circle</span>
                  <span className="font-body-sm text-body-sm text-on-surface">Transparent monthly statement reporting &amp; transaction ledgers</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">check_circle</span>
                  <span className="font-body-sm text-body-sm text-on-surface">Designated portfolio support &amp; priority email assistance</span>
                </div>
              </div>

              {/* Action Row */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-outline-variant/20">
                <p className="font-label-sm text-xs text-outline max-w-sm text-center sm:text-left">
                  *Subject to legal &amp; regulatory approval. No hidden setup charges or account maintenance deductions.
                </p>
                <Link
                  href="/investment"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-label-md text-label-md font-bold text-on-secondary-fixed bg-gradient-to-r from-secondary-fixed via-secondary-container to-secondary-fixed-dim hover:brightness-105 shadow-[0_4px_12px_rgba(254,206,88,0.3)] hover:shadow-[0_6px_20px_rgba(254,206,88,0.45)] transition-all shrink-0 active:scale-95 btn-shimmer"
                >
                  <span>Start with ₹10,000</span>
                  <span className="material-symbols-outlined text-[18px] ml-1.5">arrow_forward</span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE INVESTMENT CALCULATOR */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-background scroll-mt-24" id="calculator-section">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <ReturnCalculator variant="home" />
        </div>
      </section>

      {/* 6. DEPOSIT & SETTLEMENT ARCHITECTURE */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-surface-container-low/40">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold mb-2">
              Streamlined Lifecycle
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-headline-xl font-bold text-on-surface tracking-tight">
              Deposit &amp; Settlement Architecture
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Built on direct Indian banking settlement corridors with complete transparency at every verification milestone.
            </p>
          </div>

          {/* 4-Step Process Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 flex flex-col hover-card-effect">
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-label-md text-label-md font-bold text-on-surface">01</span>
                <span className="material-symbols-outlined text-secondary text-[24px]">person_add</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">Account Registration</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Create your Prime Trust portal credential in under two minutes with your mobile number and official email.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 flex flex-col hover-card-effect">
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-label-md text-label-md font-bold text-on-surface">02</span>
                <span className="material-symbols-outlined text-secondary text-[24px]">badge</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">KYC &amp; Bank Verification</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Submit your PAN and linked Indian bank account details for instant automated penny-drop verification.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 flex flex-col hover-card-effect">
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-label-md text-label-md font-bold text-on-surface">03</span>
                <span className="material-symbols-outlined text-secondary text-[24px]">account_balance_wallet</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">Capital Allocation</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Fund your plan starting from ₹10,000 using standard domestic banking channels (NEFT / RTGS / IMPS).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 flex flex-col hover-card-effect">
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-secondary-fixed/50 flex items-center justify-center font-label-md text-label-md font-bold text-on-secondary-fixed">04</span>
                <span className="material-symbols-outlined text-secondary text-[24px]">payments</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">Monthly Auto-Payout</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Receive your proposed 9.0% monthly return credited automatically straight into your verified bank account.
              </p>
            </div>
          </div>

          {/* Channel Support Banner */}
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary text-[20px]">sync_alt</span>
              </div>
              <div>
                <span className="font-label-md text-label-md font-bold text-on-surface">Supported Indian Banking Channels:</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Direct electronic fund settlements via NEFT, RTGS, and IMPS nationwide.</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-surface-container font-label-sm text-label-sm font-bold text-on-surface">NEFT</span>
              <span className="px-3 py-1 rounded-lg bg-surface-container font-label-sm text-label-sm font-bold text-on-surface">RTGS</span>
              <span className="px-3 py-1 rounded-lg bg-surface-container font-label-sm text-label-sm font-bold text-on-surface">IMPS</span>
              <span className="px-3 py-1 rounded-lg bg-secondary-fixed/40 font-label-sm text-label-sm font-bold text-secondary">Zero Transfer Fee</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. RECENT TRANSACTIONS */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-background">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
                Ledger Transparency
              </span>
              <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-headline-xl font-bold text-on-surface tracking-tight mt-1">
                Recent Transaction Activity
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                Live System Activity Stream
              </span>
            </div>
          </div>

          {/* Prototype Demo Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-high/60 shadow-sm mb-6 flex items-start gap-3 border border-outline-variant/20">
            <span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">notification_important</span>
            <div>
              <span className="font-label-sm text-xs uppercase font-bold text-secondary tracking-wider">PROTOTYPE DEMO DATA</span>
              <p className="font-body-sm text-xs sm:text-body-sm text-on-surface leading-relaxed mt-0.5">
                The entries below are fictional sample records for UI demonstration. In production, verified transaction ledger entries are displayed with customer identities strictly masked in compliance with data privacy regulations.
              </p>
            </div>
          </div>

          <TransactionTable />
        </div>
      </section>

      {/* 8. REFER AND EARN */}
      <section className="w-full py-12 sm:py-16 bg-surface-container-low/50">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-container-lowest rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-10 lg:p-12 relative overflow-hidden border border-outline-variant/30 hover-card-effect">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none animate-pulse-glow"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 flex flex-col items-start gap-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed/50 font-label-sm text-xs font-bold text-on-secondary-fixed">
                  <span className="material-symbols-outlined text-[16px]">stars</span> PARTNER REWARDS PROGRAM
                </div>
                <h2 className="font-headline-xl text-2xl sm:text-3xl lg:text-headline-xl font-bold text-on-surface tracking-tight">
                  Refer and Earn 1% Qualified Partner Reward
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Invite fellow investors to Prime Trust. Receive a proposed 1% reward on qualifying investments once your referred partner&apos;s capital is fully verified and credited.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary text-[20px]">check</span>
                    <span className="font-label-md text-label-md font-semibold text-on-surface">Unlimited Invitations</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary text-[20px]">check</span>
                    <span className="font-label-md text-label-md font-semibold text-on-surface">Instant Settlement</span>
                  </div>
                </div>
              </div>

              {/* 3-Step Flow */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                  <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-secondary shrink-0">1</div>
                  <div>
                    <span className="font-label-md text-label-md font-bold text-on-surface">Share Referral Link</span>
                    <p className="font-body-sm text-xs text-on-surface-variant">Send your designated investor code to peers.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                  <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-secondary shrink-0">2</div>
                  <div>
                    <span className="font-label-md text-label-md font-bold text-on-surface">Friend Invests Min ₹10,000</span>
                    <p className="font-body-sm text-xs text-on-surface-variant">Their capital is allocated and KYC cleared.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-secondary-fixed/30 border border-secondary/20 hover:bg-secondary-fixed/40 transition-colors">
                  <div className="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-secondary-fixed shrink-0">3</div>
                  <div>
                    <span className="font-label-md text-label-md font-bold text-on-secondary-fixed">Receive 1% Direct Credit</span>
                    <p className="font-body-sm text-xs text-on-secondary-fixed">Credited directly to your wallet balance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-background">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold mb-2">
              Frequently Asked Questions
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-headline-xl font-bold text-on-surface tracking-tight">
              Clarity on Every Detail
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Have questions regarding investment allocations, proposed yield frequencies, or referral payouts? Review our core policies.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FaqAccordion items={faqItems} defaultOpenIndex={0} />
          </div>
        </div>
      </section>

      {/* 10. BOTTOM CALL TO ACTION STRIP */}
      <section className="w-full bg-surface-container-low py-12 sm:py-16 border-t border-outline-variant/30">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-5">
          <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-headline-xl font-bold text-on-surface tracking-tight">
            Ready to Build Structured Wealth with Prime Trust?
          </h2>
          <p className="font-body-lg text-base sm:text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            Begin your journey with ₹10,000 minimum capital allocation and institutional transparency.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1 w-full sm:w-auto">
            <Link
              href="/investment"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-label-md text-label-md font-bold text-on-secondary-fixed bg-gradient-to-r from-secondary-fixed via-secondary-container to-secondary-fixed-dim hover:brightness-105 shadow-md hover:shadow-xl transition-all btn-shimmer active:scale-95"
            >
              <span>Get Started Now</span>
              <span className="material-symbols-outlined text-[18px] ml-1.5">arrow_forward</span>
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-label-md text-label-md font-semibold text-on-surface bg-surface-container-lowest shadow-sm border border-outline-variant/30 hover:bg-surface-container transition-all active:scale-95"
            >
              <span>Contact Wealth Advisors</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
