import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Prime Trust Financial & Investment Company',
  description: 'Building disciplined, transparent investment solutions tailored for sustainable capital appreciation. Plan • Invest • Grow.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. PAGE HEADER / BANNER */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest py-12 sm:py-16 md:py-20 border-b border-outline-variant/30">
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#c59a27_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container text-secondary font-label-sm text-xs sm:text-label-sm uppercase tracking-widest shadow-sm mb-4 border border-outline-variant/20">
            <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
            Institutional Overview
          </div>
          
          <h1 className="font-display-lg text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 max-w-4xl text-on-surface">
            About <span className="bg-gradient-to-r from-on-surface via-secondary to-on-surface bg-clip-text text-transparent">Prime Trust</span>
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-secondary-fixed-dim"></span>
            <p className="font-headline-sm text-sm sm:text-headline-sm font-semibold text-secondary uppercase tracking-widest">
              Plan • Invest • Grow
            </p>
            <span className="h-px w-8 bg-secondary-fixed-dim"></span>
          </div>

          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Building disciplined, transparent investment solutions tailored for sustainable capital appreciation.
          </p>

          {/* Metric Micro-Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl mt-8 sm:mt-12 text-left">
            <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-low shadow-sm border border-outline-variant/30 hover-card-effect">
              <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider block">
                Entry Threshold
              </span>
              <span className="font-currency-display text-xl sm:text-2xl text-on-surface font-bold block mt-1">
                ₹10,000
              </span>
              <span className="font-body-sm text-xs text-secondary block mt-0.5 font-medium">
                Democratized Access
              </span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-low shadow-sm border border-outline-variant/30 hover-card-effect">
              <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider block">
                Yield Model
              </span>
              <span className="font-currency-display text-xl sm:text-2xl text-on-surface font-bold block mt-1">
                Cash Flow
              </span>
              <span className="font-body-sm text-xs text-secondary block mt-0.5 font-medium">
                Predictable Payouts
              </span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-low shadow-sm border border-outline-variant/30 hover-card-effect">
              <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider block">
                Capital Guard
              </span>
              <span className="font-currency-display text-xl sm:text-2xl text-on-surface font-bold block mt-1">
                Rigid
              </span>
              <span className="font-body-sm text-xs text-secondary block mt-0.5 font-medium">
                Preservation First
              </span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-low shadow-sm border border-outline-variant/30 hover-card-effect">
              <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider block">
                Reporting
              </span>
              <span className="font-currency-display text-xl sm:text-2xl text-on-surface font-bold block mt-1">
                Real-Time
              </span>
              <span className="font-body-sm text-xs text-secondary block mt-0.5 font-medium">
                Ledger Integrity
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONCISE COMPANY INTRODUCTION & NOTICE */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Accent Module */}
            <div className="lg:col-span-5 relative w-full">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-surface-container-lowest border border-outline-variant/30">
                <div className="h-2 w-full bg-gradient-to-r from-secondary-fixed via-secondary-container to-secondary"></div>
                <div className="p-5 sm:p-7 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-bold">
                      Corporate Stewardship
                    </span>
                    <span className="material-symbols-outlined text-secondary text-2xl">verified_user</span>
                  </div>

                  <div className="relative h-44 sm:h-52 w-full rounded-xl overflow-hidden bg-surface-container">
                    <div 
                      className="absolute inset-0 bg-cover bg-center" 
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBE6XndcK3z8GjBDFrx_J278BjEc_LhQ5TMz7xK0fGeCERRpIZQL7lYlT5csSPOpRCCsC3B3VSWwsesvjU5VyW9bs5HdOhtrJmEWoantr2iRGUHSTq9jeD441B4vstSdPS9dYzkG9X0jVzUtAuB3rhwv05W3Gp6OZwQlOojCt6U2iioI_BZDa4Ct9zkM86JcM_lDx73uDi1UzHQyPUsYKIf7WQIvA2G02G9-WC5Bwr3cHM3s8SkXyaR')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-on-primary">
                      <span className="font-label-sm text-[11px] uppercase tracking-wider text-secondary-fixed font-bold block">
                        Institutional Philosophy
                      </span>
                      <span className="font-body-sm text-xs sm:text-body-sm text-surface-container-lowest font-medium">
                        Prudent Risk-Weighted Execution
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface-container-low">
                    <div className="flex items-center gap-2 text-on-surface">
                      <span className="material-symbols-outlined text-[18px] text-secondary">shield</span>
                      <span className="font-label-md text-sm font-semibold">Risk Hedging Architecture</span>
                    </div>
                    <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      Multi-asset capital allocation focused on insulation against severe volatility events.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Description */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
                About the Institution
              </span>
              <h2 className="font-headline-xl text-2xl sm:text-3xl lg:text-headline-xl text-on-surface font-bold tracking-tight">
                A Purpose-Driven Approach to Capital Growth
              </h2>
              <p className="font-body-lg text-base sm:text-body-lg text-on-surface leading-relaxed">
                Prime Trust Financial &amp; Investment Company was founded with the core objective of making structured financial growth accessible, disciplined, and transparent. We combine thorough market analysis with prudent capital allocation to help investors achieve steady returns.
              </p>
              <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant leading-relaxed">
                Our framework avoids speculative bets, focusing entirely on cash-flow generative instruments and enterprise-grade liquidity strategies that honor investor trust through systematic capital oversight.
              </p>

              {/* Fact Confirmation Notice Box */}
              <div className="mt-2 p-4 rounded-xl bg-surface-container-high/60 shadow-sm relative overflow-hidden border border-outline-variant/30">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary"></div>
                <div className="flex items-start gap-3 pl-1">
                  <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5">info</span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-sm sm:text-label-md font-bold text-on-surface">
                      Corporate Governance Advisory
                    </span>
                    <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant mt-1 leading-normal">
                      [Company Notice: Specific corporate incorporation dates, license registration numbers, and governing board credentials are currently pending final corporate filing confirmation].
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH (3-Pillar Structural Framework) */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-surface-container-low">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-14">
            <div className="flex flex-col gap-1 max-w-xl">
              <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
                Operational Pillars
              </span>
              <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-headline-xl text-on-surface font-bold tracking-tight">
                The Prime Trust Investment Framework
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md leading-relaxed">
              A disciplined three-pillar methodology designed to insulate investor capital while maintaining continuous yields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col justify-between group hover-card-effect">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-surface mb-4 group-hover:bg-secondary-fixed transition-colors">
                  <span className="material-symbols-outlined text-[26px]">account_balance</span>
                </div>
                <div className="font-label-sm text-xs text-secondary font-bold uppercase tracking-widest mb-1">
                  Pillar 01
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">
                  Prudent Capital Preservation
                </h3>
                <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant leading-relaxed">
                  Prioritizing downside protection and asset security through diversified exposure. Every strategy is rigorously stress-tested against macroeconomic fluctuations.
                </p>
              </div>
              <div className="pt-4 mt-6 bg-surface-container-low/50 -mx-6 -mb-6 p-4 rounded-b-2xl flex items-center justify-between border-t border-outline-variant/20">
                <span className="font-label-sm text-xs text-on-surface-variant">Downside Exposure</span>
                <span className="font-label-sm text-xs font-bold text-on-surface">Strictly Hedged</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col justify-between group hover-card-effect">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-surface mb-4 group-hover:bg-secondary-fixed transition-colors">
                  <span className="material-symbols-outlined text-[26px]">trending_up</span>
                </div>
                <div className="font-label-sm text-xs text-secondary font-bold uppercase tracking-widest mb-1">
                  Pillar 02
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">
                  Predictable Yield Structuring
                </h3>
                <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant leading-relaxed">
                  Targeting realistic, sustainable cash-flow returns rather than speculative volatility. Capital is directed into vetted debt, equity, and asset-backed instruments.
                </p>
              </div>
              <div className="pt-4 mt-6 bg-surface-container-low/50 -mx-6 -mb-6 p-4 rounded-b-2xl flex items-center justify-between border-t border-outline-variant/20">
                <span className="font-label-sm text-xs text-on-surface-variant">Return Horizon</span>
                <span className="font-label-sm text-xs font-bold text-on-surface">Structured &amp; Periodic</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col justify-between group hover-card-effect">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-surface mb-4 group-hover:bg-secondary-fixed transition-colors">
                  <span className="material-symbols-outlined text-[26px]">receipt_long</span>
                </div>
                <div className="font-label-sm text-xs text-secondary font-bold uppercase tracking-widest mb-1">
                  Pillar 03
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">
                  Uncompromising Transparency
                </h3>
                <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant leading-relaxed">
                  Clear reporting, automated ledger updates, and direct investor correspondence with zero hidden charges. You retain constant visibility over portfolio mechanics.
                </p>
              </div>
              <div className="pt-4 mt-6 bg-surface-container-low/50 -mx-6 -mb-6 p-4 rounded-b-2xl flex items-center justify-between border-t border-outline-variant/20">
                <span className="font-label-sm text-xs text-on-surface-variant">Fee Transparency</span>
                <span className="font-label-sm text-xs font-bold text-on-surface">Zero Concealed Costs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR MISSION STATEMENT */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-primary-container text-on-primary relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-surface-container/5 blur-3xl pointer-events-none"></div>
        
        <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tertiary-container/80 text-secondary-fixed font-label-sm text-xs uppercase tracking-widest w-fit border border-secondary/20">
                <span className="material-symbols-outlined text-[16px]">flag</span>
                Institutional Mandate
              </div>
              <h2 className="font-headline-xl text-2xl sm:text-3xl lg:text-headline-xl font-bold tracking-tight text-surface-container-lowest">
                Our Mission
              </h2>
              <blockquote className="font-body-lg text-lg sm:text-xl text-primary-fixed leading-relaxed border-l-2 border-secondary-fixed pl-4 my-2">
                &ldquo;To empower Indian retail and high-net-worth investors with accessible, high-integrity investment strategies that generate consistent monthly yields while maintaining rigorous ethical and regulatory compliance.&rdquo;
              </blockquote>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
                <div className="flex items-center gap-2 text-tertiary-fixed-dim font-body-sm text-xs sm:text-body-sm">
                  <span className="material-symbols-outlined text-secondary-fixed text-[18px]">check_circle</span>
                  Retail Accessibility
                </div>
                <div className="flex items-center gap-2 text-tertiary-fixed-dim font-body-sm text-xs sm:text-body-sm">
                  <span className="material-symbols-outlined text-secondary-fixed text-[18px]">check_circle</span>
                  High-Net-Worth Advisory
                </div>
                <div className="flex items-center gap-2 text-tertiary-fixed-dim font-body-sm text-xs sm:text-body-sm">
                  <span className="material-symbols-outlined text-secondary-fixed text-[18px]">check_circle</span>
                  Ethical Governance
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-tertiary-container/60 p-6 sm:p-7 rounded-2xl shadow-lg flex flex-col gap-4 border border-outline/10">
              <span className="font-label-sm text-xs uppercase tracking-wider text-secondary-fixed font-bold">
                Stewardship Core
              </span>
              <p className="font-body-sm text-sm text-tertiary-fixed-dim leading-relaxed">
                We operate with the conviction that wealth creation must be systematic, measurable, and shielded by stringent custodial safeguards.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-fixed text-3xl shrink-0">lock</span>
                <div>
                  <span className="font-label-md text-sm text-surface-container-lowest font-bold block">
                    Protected Capital Principle
                  </span>
                  <span className="font-label-sm text-xs text-tertiary-fixed-dim">
                    Zero tolerance for unhedged speculation
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. OUR VALUES (4 Distinct Cards) */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-surface">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
              Guiding Tenets
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-headline-xl text-on-surface font-bold tracking-tight mt-1">
              Our Core Corporate Values
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              Built upon foundational ethics, strict compliance discipline, and transparent partner relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 flex flex-col justify-between hover-card-effect">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-container text-secondary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">gavel</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-on-secondary-fixed bg-secondary-fixed font-label-sm text-xs font-semibold">
                    Value 01
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">
                  Integrity &amp; Trust
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Honest disclosures, no misleading forecasts, and respectful stewardship of client capital across all market cycles.
                </p>
              </div>
              <div className="mt-4 pt-3 font-label-sm text-xs text-secondary font-semibold flex items-center gap-1 border-t border-outline-variant/20">
                <span className="material-symbols-outlined text-[16px]">check</span> Honest Execution
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 flex flex-col justify-between hover-card-effect">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-container text-secondary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">group</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-on-secondary-fixed bg-secondary-fixed font-label-sm text-xs font-semibold">
                    Value 02
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">
                  Investor-First Discipline
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Designing investment thresholds starting at an accessible ₹10,000 so disciplined investing is within reach of every saver.
                </p>
              </div>
              <div className="mt-4 pt-3 font-label-sm text-xs text-secondary font-semibold flex items-center gap-1 border-t border-outline-variant/20">
                <span className="material-symbols-outlined text-[16px]">check</span> ₹10,000 Minimum
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 flex flex-col justify-between hover-card-effect">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-container text-secondary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">analytics</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-on-secondary-fixed bg-secondary-fixed font-label-sm text-xs font-semibold">
                    Value 03
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">
                  Operational Rigor
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Every investment decision is supported by verifiable data, structured audits, and strict compliance standards.
                </p>
              </div>
              <div className="mt-4 pt-3 font-label-sm text-xs text-secondary font-semibold flex items-center gap-1 border-t border-outline-variant/20">
                <span className="material-symbols-outlined text-[16px]">check</span> Verifiable Audits
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 flex flex-col justify-between hover-card-effect">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-container text-secondary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">support_agent</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-on-secondary-fixed bg-secondary-fixed font-label-sm text-xs font-semibold">
                    Value 04
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">
                  Direct Accountability
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Accessible communication and dedicated support via{' '}
                  <a className="text-secondary hover:underline break-all" href="mailto:primetrustinvestmentcompany7@gmail.com">
                    primetrustinvestmentcompany7@gmail.com
                  </a>.
                </p>
              </div>
              <div className="mt-4 pt-3 font-label-sm text-xs text-secondary font-semibold flex items-center gap-1 border-t border-outline-variant/20">
                <span className="material-symbols-outlined text-[16px]">check</span> Prompt Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CORPORATE GOVERNANCE & FACT CONFIRMATION SECTION */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-surface-container-low">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2 mb-8">
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
              Statutory Status
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-headline-xl text-on-surface font-bold tracking-tight">
              Corporate Governance &amp; Regulatory Confirmations
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
              Complete disclosure regarding our operational parameters, custodial frameworks, and ongoing statutory documentation filings.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl shadow-md border border-outline-variant/30 overflow-hidden hover-card-effect">
            <div className="p-5 sm:p-6 bg-surface-container-high/40 flex items-center justify-between flex-wrap gap-4 border-b border-outline-variant/30">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-2xl">policy</span>
                <span className="font-headline-sm text-base sm:text-headline-sm font-bold text-on-surface">
                  Institutional Disclosures Ledger
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-xs font-semibold">
                Status: Under Corporate Filing
              </span>
            </div>

            <div className="p-5 sm:p-8 flex flex-col gap-6 divide-y divide-outline-variant/20">
              {/* Item 1 */}
              <div className="pt-6 first:pt-0 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="md:w-1/3">
                  <span className="font-label-md text-sm sm:text-label-md font-bold text-on-surface block">
                    Legal Entity Status
                  </span>
                  <span className="font-body-sm text-xs text-on-surface-variant">Corporate Structure</span>
                </div>
                <div className="md:w-2/3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 bg-surface-container-low p-4 rounded-xl border border-outline-variant/20">
                  <span className="font-body-md text-sm sm:text-body-md font-medium text-on-surface">
                    Private Financial &amp; Investment Enterprise
                  </span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-xs shrink-0 w-fit">
                    [Registration documentation in review]
                  </span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="md:w-1/3">
                  <span className="font-label-md text-sm sm:text-label-md font-bold text-on-surface block">
                    Custodial Banking Partners
                  </span>
                  <span className="font-body-sm text-xs text-on-surface-variant">Fund Custody &amp; Clearing</span>
                </div>
                <div className="md:w-2/3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 bg-surface-container-low p-4 rounded-xl border border-outline-variant/20">
                  <span className="font-body-md text-sm sm:text-body-md font-medium text-on-surface">
                    Verified Indian Scheduled Commercial Banks
                  </span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-xs shrink-0 w-fit">
                    [Formal partner announcements pending]
                  </span>
                </div>
              </div>

              {/* Item 3 */}
              <div className="pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="md:w-1/3">
                  <span className="font-label-md text-sm sm:text-label-md font-bold text-on-surface block">
                    Compliance Framework
                  </span>
                  <span className="font-body-sm text-xs text-on-surface-variant">Regulatory Alignment</span>
                </div>
                <div className="md:w-2/3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 bg-surface-container-low p-4 rounded-xl border border-outline-variant/20">
                  <span className="font-body-md text-sm sm:text-body-md font-medium text-on-surface">
                    Operating under standard commercial contractual guidelines
                  </span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-xs shrink-0 w-fit">
                    [Pending specific regulatory approvals for proposed return schemes]
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-surface-container text-on-surface-variant font-body-sm text-xs sm:text-sm flex items-center gap-3 border-t border-outline-variant/30">
              <span className="material-symbols-outlined text-secondary text-lg shrink-0">verified</span>
              <span>
                Prime Trust Financial &amp; Investment Company prioritizes 100% adherence to all sovereign Indian statutory guidelines.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION STRIP */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-surface-container-lowest">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary-container via-inverse-surface to-primary-container p-6 sm:p-10 lg:p-12 shadow-xl text-on-primary flex flex-col lg:flex-row items-center justify-between gap-8 border border-outline/20">
            <div className="flex flex-col gap-2 text-center lg:text-left">
              <span className="font-label-sm text-xs uppercase tracking-widest text-secondary-fixed font-bold">
                Initiate Your Capital Journey
              </span>
              <h2 className="font-headline-xl text-2xl sm:text-3xl lg:text-headline-xl font-bold tracking-tight text-surface-container-lowest">
                Ready to Build Your Wealth with Prime Trust?
              </h2>
              <p className="font-body-md text-sm sm:text-body-md text-primary-fixed max-w-xl leading-relaxed">
                Explore our curated, disciplined investment plans or connect directly with our advisory desk for personalized stewardship.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
              <Link
                href="/investment"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-label-md text-label-md font-bold text-on-secondary-fixed bg-gradient-to-r from-secondary-fixed via-secondary-container to-secondary-fixed-dim hover:brightness-105 transition-all shadow-[0_4px_14px_rgba(254,206,88,0.35)] btn-shimmer active:scale-95"
              >
                <span>View Investment Plans</span>
                <span className="material-symbols-outlined text-[18px] ml-1.5">arrow_forward</span>
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-label-md text-label-md font-semibold text-surface-container-lowest bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 border border-surface-container-lowest/20 transition-colors"
              >
                <span>Contact Support</span>
                <span className="material-symbols-outlined text-[18px] ml-1.5">mail</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
