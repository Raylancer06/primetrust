import React from 'react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import EmailCopyCard from '@/components/EmailCopyCard';

export const metadata = {
  title: 'Contact Us | Prime Trust Financial & Investment Company',
  description: 'Connect with our institutional advisory desk for inquiries regarding investment plans, referral rewards, or account onboarding.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Subtle Architectural Ambient Canvas */}
      <div className="relative w-full overflow-hidden">
        {/* Fluid Gold & Platinum Ambient Glows */}
        <div className="absolute -top-32 right-10 w-72 sm:w-[520px] h-72 sm:h-[520px] bg-secondary-fixed/30 rounded-full blur-[140px] pointer-events-none -z-10"></div>
        <div className="absolute top-[420px] -left-32 w-80 sm:w-[600px] h-80 sm:h-[600px] bg-surface-container-high/60 rounded-full blur-[160px] pointer-events-none -z-10"></div>

        {/* MAIN CONTAINER */}
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          
          {/* 1. PAGE HEADER */}
          <header className="flex flex-col items-start gap-3 max-w-3xl pb-8 sm:pb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container-high text-on-surface border border-outline-variant/30">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-sm text-xs sm:text-label-sm uppercase tracking-widest text-on-surface-variant font-bold">
                Institutional Advisory Desk
              </span>
            </div>
            <h1 className="font-display-lg text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight">
              Contact Prime Trust
            </h1>
            <p className="font-body-lg text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Have questions about our investment plans, referral program, or onboarding process? Our advisory team is here to assist you with disciplined wealth stewardship.
            </p>
          </header>

          {/* 2 & 3. DUAL-COLUMN MASTER GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Official Contact Credentials & Verified Operations */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <EmailCopyCard />

              {/* Editorial Photography Accent with Scrim */}
              <div className="relative rounded-2xl overflow-hidden shadow-sm h-64 bg-primary-container border border-outline/20 hover-card-effect">
                <img
                  className="w-full h-full object-cover opacity-60"
                  alt="High angle shot of a pristine corporate conference boardroom table with financial analytical documents"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB356FT_uaCcdNYi_f447Mo4WekAB0nEwOFLQ1JrNmZHMXNq4O1SrU3hBfCXStNru9uouWpT9j0BcuaDkvBMjNWsLjlm0p93S_rPjTGbtyDJvle8y4x2pNuIwNdGLpITgMqRJ0v2lSWAysTCRdRBlOsnt4WkVcwa3MXiLJh_xIaBlHxK0Phr7_Oietqm63ttluLgVINq190nJqSX-xHcTeiscvrn-GIx4VX53Fq_rHC33G_vKVgY34O"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex flex-col gap-1">
                  <span className="font-label-sm text-xs uppercase tracking-widest text-secondary-fixed font-bold">
                    Capital Integrity
                  </span>
                  <p className="font-headline-sm text-lg font-bold text-surface-container-lowest">
                    Precision-driven wealth preservation.
                  </p>
                  <p className="font-body-sm text-xs text-tertiary-fixed-dim leading-relaxed">
                    Every dispatch undergoes dual-tier compliance scrutiny before routing to dedicated capital partners.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Us Inquiry Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

          {/* 4. FREQUENT ASSISTANCE & ONBOARDING FAQ SNIPPETS */}
          <section className="mt-12 sm:mt-16 pt-8 border-t border-outline-variant/30">
            <div className="flex flex-col items-start gap-1 mb-8">
              <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-bold">
                Protocol Clarity
              </span>
              <h2 className="font-headline-md text-2xl sm:text-3xl text-on-surface font-bold tracking-tight">
                Frequent Assistance &amp; Onboarding
              </h2>
              <p className="font-body-sm text-sm text-on-surface-variant">
                Immediate guidelines to fast-track your onboarding review.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* FAQ Card 1 */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 hover-card-effect flex flex-col gap-3 justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface font-bold text-sm mb-3">
                    01
                  </div>
                  <h3 className="font-headline-sm text-lg font-semibold text-on-surface mb-2">
                    How do I start investing?
                  </h3>
                  <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
                    Submit an inquiry using the secure form above or review our official Investment Plans page. Our team will verify your accreditation and share the compliance onboarding checklist via email.
                  </p>
                </div>
                <div className="pt-3 flex items-center gap-1 text-secondary font-label-sm text-xs font-bold border-t border-outline-variant/20">
                  <span>Onboarding Checklist Provided</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </div>
              </div>

              {/* FAQ Card 2 */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 hover-card-effect flex flex-col gap-3 justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface font-bold text-sm mb-3">
                    02
                  </div>
                  <h3 className="font-headline-sm text-lg font-semibold text-on-surface mb-2">
                    How do I verify official communications?
                  </h3>
                  <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
                    Only electronic mail originating directly from <span className="font-semibold text-on-surface break-all">primetrustinvestmentcompany7@gmail.com</span> is legally authorized and managed by Prime Trust Financial &amp; Investment Company.
                  </p>
                </div>
                <div className="pt-3 flex items-center gap-1 text-secondary font-label-sm text-xs font-bold border-t border-outline-variant/20">
                  <span>100% Cryptographic Trail</span>
                  <span className="material-symbols-outlined text-[14px]">verified_user</span>
                </div>
              </div>

              {/* FAQ Card 3 */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 hover-card-effect flex flex-col gap-3 justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface font-bold text-sm mb-3">
                    03
                  </div>
                  <h3 className="font-headline-sm text-lg font-semibold text-on-surface mb-2">
                    What is the minimum sum to begin?
                  </h3>
                  <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
                    Our entry-level institutional retail tranche starts with a ₹10,000 minimum investment, with segregated vaulting and transparent daily performance metrics.
                  </p>
                </div>
                <div className="pt-3 flex items-center gap-1 text-secondary font-label-sm text-xs font-bold border-t border-outline-variant/20">
                  <span>₹10,000 Baseline Tranche</span>
                  <span className="material-symbols-outlined text-[14px]">payments</span>
                </div>
              </div>
            </div>
          </section>

          {/* 5. SECURITY ADVISORY & FRAUD WARNING BANNER */}
          <section className="mt-12 sm:mt-16">
            <div className="rounded-2xl bg-primary-container text-surface-container-lowest p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-xl border border-outline/20 hover-card-effect">
              <div className="absolute -right-16 -bottom-16 w-56 h-56 rounded-full bg-secondary/20 blur-3xl pointer-events-none"></div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                <div className="flex items-start gap-4 max-w-3xl">
                  <div className="w-12 h-12 rounded-xl bg-error/20 text-error-container flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[28px] text-error">gshield</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-label-sm text-xs uppercase tracking-wider text-secondary-fixed font-bold">
                        Critical Security Protocol
                      </span>
                      <span className="px-2 py-0.5 rounded bg-error/30 text-error-container font-label-sm text-xs font-bold">
                        Zero Compromise
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-lg sm:text-headline-sm font-bold text-surface-container-lowest">
                      Security Advisory &amp; Fraud Prevention
                    </h4>
                    <p className="font-body-sm text-xs sm:text-body-sm text-primary-fixed-dim leading-relaxed">
                      Prime Trust will never request your private banking credentials, net-banking passwords, SMS OTPs, or UPI PINs under any operational scenario. Always verify that communications originate solely from <span className="font-semibold text-secondary-fixed break-all">primetrustinvestmentcompany7@gmail.com</span> before executing any instructions.
                    </p>
                  </div>
                </div>

                <div className="shrink-0 w-full md:w-auto">
                  <a
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-sm font-semibold hover:bg-surface-container-high transition-all text-center hover-card-effect btn-shimmer active:scale-[0.98]"
                    href="mailto:primetrustinvestmentcompany7@gmail.com?subject=Fraud%20or%20Impersonation%20Alert"
                  >
                    <span className="material-symbols-outlined text-[18px] text-error">flag</span>
                    <span>Report Suspicious Contact</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
