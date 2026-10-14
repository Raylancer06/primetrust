import React from 'react';
import Link from 'next/link';
import ReturnCalculator from '@/components/ReturnCalculator';

export const metadata = {
  title: 'Investment Plans | Prime Trust Financial & Investment Company',
  description: 'Clear, disciplined wealth creation designed for stability and consistent monthly growth. Single Tier Official Allocation.',
};

export default function InvestmentPlansPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HEADER SECTION */}
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-secondary-fixed/10 via-surface-container/20 to-transparent">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-6 sm:pb-8">
          <div className="flex flex-col gap-2">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 font-label-sm text-xs sm:text-label-sm uppercase tracking-wider text-secondary">
              <Link href="/" className="hover:text-on-surface transition-colors">
                Home
              </Link>
              <span className="text-outline-variant">/</span>
              <span className="text-on-surface font-bold">Investment Plans</span>
            </div>

            {/* Title & Badge */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-2">
              <div>
                <h1 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight">
                  Investment Plans
                </h1>
                <p className="font-body-lg text-base sm:text-body-lg text-on-surface-variant max-w-2xl mt-2 leading-relaxed">
                  Clear, disciplined wealth creation designed for stability and consistent monthly growth.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 bg-surface-container-lowest px-4 py-2 rounded-full shadow-sm border border-outline-variant/30 text-on-surface-variant font-label-md text-xs sm:text-label-md w-fit">
                <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span>Single Tier Official Allocation • FY 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN SHOWCASE GRID */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Primary Plan Feature Card (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-surface-container-lowest rounded-2xl shadow-md p-6 sm:p-8 lg:p-10 relative overflow-hidden border border-outline-variant/30 hover-card-effect">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary-fixed via-secondary to-secondary-container"></div>
            
            <div className="flex flex-col gap-6 sm:gap-8">
              {/* Card Header & Badges */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex flex-col">
                  <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-bold">
                    Sole Verified Strategy
                  </span>
                  <h2 className="font-headline-md text-2xl sm:text-3xl font-bold text-on-surface mt-1">
                    Prime Trust Growth Plan
                  </h2>
                  <p className="font-body-sm text-sm text-on-surface-variant mt-1">
                    Focused asset allocation in evaluated yield-generating commercial and corporate instruments.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-xs font-bold shadow-sm">
                  <span className="material-symbols-outlined text-[16px] text-on-secondary-fixed">verified</span>
                  Institutional Grade
                </span>
              </div>

              {/* Return Spotlight Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-5 sm:p-6 bg-surface-container-low rounded-xl border border-outline-variant/20">
                <div className="flex flex-col">
                  <span className="font-label-md text-xs sm:text-sm text-on-surface-variant">Proposed Monthly Return</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-display-lg text-4xl sm:text-5xl font-extrabold text-secondary tracking-tight">
                      9%
                    </span>
                    <span className="font-label-md text-sm text-on-surface-variant font-medium">/ month</span>
                  </div>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-container-highest text-on-surface text-[10px] font-semibold tracking-wide">
                      Subject to legal &amp; regulatory approval
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-center sm:pl-6 sm:border-l sm:border-outline-variant/30">
                  <span className="font-label-md text-xs sm:text-sm text-on-surface-variant">Minimum Entry Allocation</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-currency-display text-2xl sm:text-3xl font-bold text-on-surface">
                      ₹10,000
                    </span>
                  </div>
                  <span className="font-body-sm text-xs text-on-surface-variant mt-1">
                    Direct Domestic Bank Transfer
                  </span>
                </div>
              </div>

              {/* Feature Bullets */}
              <div className="flex flex-col gap-3">
                <h3 className="font-label-md text-xs uppercase tracking-wider text-on-surface font-bold">
                  Key Plan Specifications
                </h3>
                <ul className="grid grid-cols-1 gap-3.5">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">check_circle</span>
                    <div className="flex flex-col">
                      <span className="font-body-md text-sm sm:text-body-md text-on-surface font-semibold">Minimum entry ticket: ₹10,000</span>
                      <span className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">Accessible institutional participation threshold without high wealth gatekeeping.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">check_circle</span>
                    <div className="flex flex-col">
                      <span className="font-body-md text-sm sm:text-body-md text-on-surface font-semibold">Zero hidden subscription or deposit fees</span>
                      <span className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">100% of your allocated principal is invested directly into designated holdings.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">check_circle</span>
                    <div className="flex flex-col">
                      <span className="font-body-md text-sm sm:text-body-md text-on-surface font-semibold">Monthly Direct Bank Payout</span>
                      <span className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">Automated direct ledger payout crediting to verified investor bank accounts via NEFT/IMPS.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">check_circle</span>
                    <div className="flex flex-col">
                      <span className="font-body-md text-sm sm:text-body-md text-on-surface font-semibold">Comprehensive ledger &amp; tax statements</span>
                      <span className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">Instant download of annual fiscal reports and verified audit settlement trails.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">check_circle</span>
                    <div className="flex flex-col">
                      <span className="font-body-md text-sm sm:text-body-md text-on-surface font-semibold">Capital return guidelines upon tenure completion</span>
                      <span className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">Strict asset stewardship with full contractual capital return protocols.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Footer */}
            <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface-container-low p-4 sm:p-5 rounded-xl border border-outline-variant/20">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-[22px] shrink-0">contact_support</span>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-sm text-xs text-on-surface-variant">Advisory Contact Desk</span>
                  <a href="mailto:primetrustinvestmentcompany7@gmail.com" className="font-body-sm text-xs sm:text-sm font-semibold text-on-surface hover:text-secondary transition-colors underline decoration-secondary truncate">
                    primetrustinvestmentcompany7@gmail.com
                  </a>
                </div>
              </div>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-xl font-label-md text-label-md font-bold text-on-secondary-fixed bg-gradient-to-r from-secondary-fixed via-secondary-container to-secondary-fixed-dim hover:brightness-105 active:scale-[0.98] transition-all shadow-[0_2px_12px_rgba(254,206,88,0.4)] whitespace-nowrap shrink-0 btn-shimmer"
              >
                <span>Start with ₹10,000</span>
                <span className="material-symbols-outlined ml-1.5 text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Right Visual & Trust Architecture Panel (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-primary-container text-surface-variant rounded-2xl shadow-md p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between flex-1 border border-outline/20 hover-card-effect">
              <div className="absolute -right-8 -top-8 w-40 h-40 bg-secondary-fixed/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex flex-col gap-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-xs uppercase tracking-widest text-secondary-fixed font-bold">
                    Stewardship Mandate
                  </span>
                  <span className="material-symbols-outlined text-secondary-fixed text-[24px]">verified_user</span>
                </div>
                
                <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-surface-container-lowest">
                  Disciplined Asset Allocation
                </h3>
                <p className="font-body-md text-sm sm:text-body-md text-primary-fixed-dim leading-relaxed">
                  Prime Trust Financial &amp; Investment Company prioritizes sovereign preservation before capital enhancement. We deploy allocations solely within audited structured commercial loans, asset-backed commercial instruments, and vetted treasury yield repos.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="p-4 bg-tertiary-container/90 rounded-xl border border-outline/10">
                    <span className="font-label-sm text-xs text-secondary-fixed font-bold uppercase">Cadence</span>
                    <p className="font-headline-sm text-lg sm:text-headline-sm font-bold text-surface-container-lowest mt-1">Monthly</p>
                    <span className="font-label-sm text-xs text-primary-fixed-dim">Automated Payout</span>
                  </div>
                  <div className="p-4 bg-tertiary-container/90 rounded-xl border border-outline/10">
                    <span className="font-label-sm text-xs text-secondary-fixed font-bold uppercase">Setup Fee</span>
                    <p className="font-headline-sm text-lg sm:text-headline-sm font-bold text-secondary-fixed mt-1">₹0.00</p>
                    <span className="font-label-sm text-xs text-primary-fixed-dim">Zero Hidden Dues</span>
                  </div>
                </div>
              </div>

              {/* Collateral Allocation Model SVG */}
              <div className="mt-6 pt-4 relative z-10 bg-tertiary-container/50 p-4 rounded-xl border border-outline/10">
                <span className="font-label-sm text-xs uppercase tracking-wider text-secondary-fixed font-bold block mb-2">
                  Portfolio Collateral Allocation Model
                </span>
                <div className="flex items-center gap-4">
                  <svg className="w-18 h-18 sm:w-20 sm:h-20 shrink-0 transform -rotate-90" viewBox="0 0 36 36">
                    <path className="text-on-primary-fixed-variant" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5" />
                    <path className="text-secondary-fixed stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray="55, 100" strokeWidth="3.5" />
                    <path className="text-tertiary-fixed-dim stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray="30, 100" strokeDashoffset="-55" strokeWidth="3.5" />
                  </svg>
                  <div className="flex flex-col gap-1.5 text-[11px] font-label-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary-fixed shrink-0"></span>
                      <span className="text-surface-container-lowest">55% Structured Commercial Yield</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim shrink-0"></span>
                      <span className="text-surface-container-lowest">30% Senior Asset-Backed Debt</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-on-primary-fixed-variant shrink-0"></span>
                      <span className="text-primary-fixed-dim">15% High-Liquidity Reserve</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Assurance Banner */}
            <div className="bg-surface-container-lowest rounded-2xl p-4 sm:p-5 shadow-sm border border-outline-variant/30 flex items-center gap-4 hover-card-effect">
              <div className="w-11 h-11 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary text-[24px]">gavel</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-sm font-bold text-on-surface">Strict Single Strategy Protocol</span>
                <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
                  Prime Trust operates exclusively under the Growth Plan. We do not engage speculative multi-tiered options.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE INVESTMENT CALCULATOR SECTION */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <ReturnCalculator variant="investment" />
      </section>

      {/* 4. EXECUTION WORKFLOW (4-Step Investment Process) */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <div className="flex flex-col gap-2 text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-bold">
            Execution Workflow
          </span>
          <h2 className="font-headline-md text-2xl sm:text-3xl font-bold text-on-surface">
            How Investment Allocation Works
          </h2>
          <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant">
            A streamlined, regulatory-aligned 4-step onboarding journey built for capital safety and complete transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30 p-6 flex flex-col justify-between group hover-card-effect">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-full bg-surface-container-high text-secondary flex items-center justify-center font-headline-sm text-headline-sm font-bold">01</span>
                <span className="material-symbols-outlined text-outline-variant text-[24px]">badge</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Account &amp; KYC Verification</h3>
              <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
                Provide valid Indian national identification (Aadhaar / PAN) and primary bank account details to verify authorized account ownership and compliance.
              </p>
            </div>
            <div className="mt-4 pt-3 font-label-sm text-xs text-secondary font-semibold border-t border-outline-variant/20">
              Standard turnaround: &lt; 2 hours
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30 p-6 flex flex-col justify-between group hover-card-effect">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-full bg-surface-container-high text-secondary flex items-center justify-center font-headline-sm text-headline-sm font-bold">02</span>
                <span className="material-symbols-outlined text-outline-variant text-[24px]">payments</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Capital Allocation</h3>
              <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
                Deposit a minimum ticket of ₹10,000 via secure domestic banking rails (IMPS / NEFT / RTGS) directly into Prime Trust custody accounts.
              </p>
            </div>
            <div className="mt-4 pt-3 font-label-sm text-xs text-secondary font-semibold border-t border-outline-variant/20">
              Instant receipt generated
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30 p-6 flex flex-col justify-between group hover-card-effect">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-full bg-surface-container-high text-secondary flex items-center justify-center font-headline-sm text-headline-sm font-bold">03</span>
                <span className="material-symbols-outlined text-outline-variant text-[24px]">pie_chart</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Portfolio Activation</h3>
              <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
                Allocated funds are deployed into vetted structured yield opportunities and institutional asset facilities under contractual governance.
              </p>
            </div>
            <div className="mt-4 pt-3 font-label-sm text-xs text-secondary font-semibold border-t border-outline-variant/20">
              Ledger reflects within 24 hrs
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30 p-6 flex flex-col justify-between group hover-card-effect">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-headline-sm text-headline-sm font-bold">04</span>
                <span className="material-symbols-outlined text-secondary text-[24px]">account_balance_wallet</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Receive Monthly Payouts</h3>
              <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
                Enjoy proposed 9% monthly returns deposited automatically to your verified registered bank account with an instant digital audit trail.
              </p>
            </div>
            <div className="mt-4 pt-3 font-label-sm text-xs text-secondary font-semibold border-t border-outline-variant/20">
              Automated recurring cycle
            </div>
          </div>
        </div>
      </section>

      {/* 5. BENTO GRID: WITHDRAWAL POLICY & REFERRAL */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Withdrawal & Liquidity Guidelines (7 cols) */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl shadow-md p-6 sm:p-8 lg:p-10 flex flex-col justify-between border border-outline-variant/30 hover-card-effect">
            <div>
              <div className="flex items-center gap-2 font-label-sm text-xs uppercase tracking-widest text-secondary font-bold">
                <span className="material-symbols-outlined text-[18px]">currency_exchange</span>
                Liquidity Framework
              </div>
              <h2 className="font-headline-md text-2xl sm:text-3xl font-bold text-on-surface mt-1">
                Withdrawal &amp; Liquidity Policy
              </h2>
              <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant mt-2 leading-relaxed">
                Institutional capital protection requires orderly liquidity procedures. Here is how your yields and principal redemption operate.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1 border border-outline-variant/20 hover-card-effect">
                  <div className="flex items-center gap-2 text-on-surface font-headline-sm text-sm sm:text-body-md font-bold">
                    <span className="material-symbols-outlined text-secondary text-[20px]">calendar_month</span>
                    Payout Schedule
                  </div>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                    Monthly yield payouts are processed every 30 days automatically. No withdrawal requests or ticket delays are needed.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1 border border-outline-variant/20 hover-card-effect">
                  <div className="flex items-center gap-2 text-on-surface font-headline-sm text-sm sm:text-body-md font-bold">
                    <span className="material-symbols-outlined text-secondary text-[20px]">assured_workload</span>
                    Authorized Banking
                  </div>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                    Credits are strictly remitted to the verified domestic primary bank account submitted during KYC to eliminate fraud risk.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1 border border-outline-variant/20 hover-card-effect">
                  <div className="flex items-center gap-2 text-on-surface font-headline-sm text-sm sm:text-body-md font-bold">
                    <span className="material-symbols-outlined text-secondary text-[20px]">security</span>
                    Principal Redemption
                  </div>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                    Standard lock-in protocols protect structured asset valuations. Principal return protocols initiate upon tenure completion.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1 border border-outline-variant/20 hover-card-effect">
                  <div className="flex items-center gap-2 text-on-surface font-headline-sm text-sm sm:text-body-md font-bold">
                    <span className="material-symbols-outlined text-secondary text-[20px]">money_off</span>
                    Zero Exit Deduction
                  </div>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                    There are zero hidden withdrawal processing fees or penalty deductions applied against scheduled contract maturities.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-3.5 bg-surface-container rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-label-md text-xs sm:text-label-md text-on-surface border border-outline-variant/30">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
                Audited payout records accessible on dashboard
              </span>
              <span className="text-secondary font-bold">SEBI / RBI Aligned Protocols</span>
            </div>
          </div>

          {/* Referral Program Explanation (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-surface-container-low via-surface-container-lowest to-surface-container-low rounded-2xl shadow-md p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden border border-outline-variant/30 hover-card-effect">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-bold">
                  Partnership Desk
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-xs font-bold">
                  Active Initiative
                </span>
              </div>

              <h2 className="font-headline-md text-2xl font-bold text-on-surface">
                1% Referral Partner Benefit
              </h2>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Existing verified investors can invite qualified family offices, colleagues, and institutional peers into the Prime Trust ecosystem.
              </p>

              {/* Concrete Illustration Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 flex flex-col gap-2">
                <span className="font-label-sm text-xs uppercase text-secondary font-bold tracking-wider">
                  Concrete Reward Illustration
                </span>
                <div className="flex items-center justify-between py-2 border-b border-surface-container">
                  <span className="font-body-sm text-sm text-on-surface">Referred Capital Allocation</span>
                  <span className="font-headline-sm text-base sm:text-headline-sm font-bold text-on-surface">₹1,00,000</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="font-body-sm text-sm text-on-surface">One-Time Partner Credit (1%)</span>
                  <span className="font-headline-sm text-base sm:text-headline-sm font-bold text-secondary">₹1,000</span>
                </div>
                <span className="font-label-sm text-[11px] text-on-surface-variant mt-1 leading-relaxed">
                  Directly credited to your investor ledger upon successful KYC approval and 30-day principal settlement.
                </span>
              </div>

              <ul className="flex flex-col gap-2 text-on-surface font-body-sm text-xs sm:text-sm">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check</span>
                  Transparent real-time referral ledger tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">check</span>
                  No caps on cumulative referral allocations
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-2">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-label-md text-label-md font-bold text-on-surface bg-surface-container-high hover:bg-surface-container border border-outline-variant/30 transition-all text-center hover-card-effect btn-shimmer active:scale-[0.98]"
              >
                Access Partner Referral Portal
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 6. RISK DISCLOSURES */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 sm:pb-16 w-full">
        <div className="bg-surface-container-low rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 relative overflow-hidden border border-outline-variant/30 hover-card-effect">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-secondary via-secondary-container to-secondary-fixed"></div>
          <div className="pl-3 sm:pl-5 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-secondary font-label-md text-xs sm:text-label-md font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[20px]">policy</span>
              Statutory Risk Governance &amp; Regulatory Disclosures
            </div>
            
            <div className="flex flex-col gap-3 font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
              <p>
                <strong className="text-on-surface font-semibold">Prospective Returns &amp; Yield Target Advisory:</strong> Investments are subject to market volatility and economic conditions. Proposed monthly returns of 9% are prospective targets subject to requisite legal, tax, and regulatory authorizations under applicable financial governance frameworks. Prime Trust Financial &amp; Investment Company does not offer speculative market trading or guaranteed riskless returns.
              </p>
              <p>
                <strong className="text-on-surface font-semibold">Past Performance &amp; Due Diligence:</strong> Past performance does not guarantee future results. Investors are advised to read all agreement documentation, charter clauses, and risk assessment disclosures carefully before allocating capital. All decisions are voluntary and must align with the individual investor&apos;s financial objectives and liquidity requirements.
              </p>
              <p>
                <strong className="text-on-surface font-semibold">Institutional Inquiries &amp; Custody Oversight:</strong> For contract copies, verified compliance credentials, or institutional inquiries, contact our governance office at{' '}
                <a className="text-on-surface font-semibold underline decoration-secondary" href="mailto:primetrustinvestmentcompany7@gmail.com">
                  primetrustinvestmentcompany7@gmail.com
                </a>.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 font-label-sm text-xs text-on-surface-variant border-t border-outline-variant/20">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
                Strict Single-Plan Architecture
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-secondary">lock</span>
                Encrypted Transaction Records
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-secondary">account_balance</span>
                Authorized Indian Banking Channels
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
