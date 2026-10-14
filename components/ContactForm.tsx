'use strict';
'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    capital: '',
    message: '',
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message || !formData.consent) {
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      capital: '',
      message: '',
      consent: false,
    });
    setSubmitted(false);
  };

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-5 sm:p-8 lg:p-10 shadow-[0_4px_30px_rgba(15,23,42,0.06)] relative overflow-hidden border border-outline-variant/30">
      {/* Hairline Gold Accent Ribbon */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-fixed via-secondary to-secondary-container"></div>

      <div className="flex flex-col gap-2 pb-6 sm:pb-8">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
          Direct Dispatch
        </span>
        <h2 className="font-headline-xl text-2xl sm:text-3xl lg:text-headline-xl text-on-surface font-bold tracking-tight">
          Send Us a Message
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Fill out the form below and an investment coordinator will respond to your registered email address.
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label className="font-label-md text-label-md font-semibold text-on-surface" htmlFor="full-name">
              Full Name <span className="text-error">*</span>
            </label>
            <div className="relative">
              <input
                id="full-name"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Enter your full name as per PAN / Aadhaar"
                className="w-full bg-surface-container-lowest border border-outline-variant/40 px-4 py-3 rounded-xl text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary focus:bg-surface-container-low transition-all shadow-[0_1px_2px_rgba(0,0,0,0.03)] pr-11"
              />
              <span className="material-symbols-outlined absolute right-3.5 top-3.5 text-[20px] text-outline pointer-events-none">
                badge
              </span>
            </div>
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-1.5">
            <label className="font-label-md text-label-md font-semibold text-on-surface" htmlFor="email">
              Email Address <span className="text-error">*</span>
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="yourname@example.com"
                className="w-full bg-surface-container-lowest border border-outline-variant/40 px-4 py-3 rounded-xl text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary focus:bg-surface-container-low transition-all shadow-[0_1px_2px_rgba(0,0,0,0.03)] pr-11"
              />
              <span className="material-symbols-outlined absolute right-3.5 top-3.5 text-[20px] text-outline pointer-events-none">
                mail
              </span>
            </div>
          </div>

          {/* Dual Selection Grid: Inquiry Subject & Proposed Capital */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Inquiry Subject */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md font-semibold text-on-surface" htmlFor="subject">
                Inquiry Subject <span className="text-error">*</span>
              </label>
              <div className="relative">
                <select
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-surface-container-lowest border border-outline-variant/40 px-4 py-3 rounded-xl text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary focus:bg-surface-container-low transition-all appearance-none shadow-[0_1px_2px_rgba(0,0,0,0.03)] pr-10 cursor-pointer"
                >
                  <option disabled value="">Select an inquiry category</option>
                  <option value="General Investment Inquiry">General Investment Inquiry</option>
                  <option value="Investment Plan (₹10,000+)">Investment Plan (₹10,000+)</option>
                  <option value="Referral Program Question">Referral Program Question</option>
                  <option value="KYC & Account Support">KYC &amp; Account Support</option>
                  <option value="Other">Other</option>
                </select>
                <span className="material-symbols-outlined absolute right-3.5 top-3.5 text-[20px] text-outline pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            {/* Proposed Investment Capital */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md font-semibold text-on-surface" htmlFor="capital">
                Proposed Capital <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <select
                  id="capital"
                  value={formData.capital}
                  onChange={(e) => setFormData({ ...formData, capital: e.target.value })}
                  className="w-full bg-surface-container-lowest border border-outline-variant/40 px-4 py-3 rounded-xl text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary focus:bg-surface-container-low transition-all appearance-none shadow-[0_1px_2px_rgba(0,0,0,0.03)] pr-10 cursor-pointer"
                >
                  <option value="">Select allocation tier</option>
                  <option value="₹10,000 - ₹50,000">₹10,000 - ₹50,000</option>
                  <option value="₹50,000 - ₹2,00,000">₹50,000 - ₹2,00,000</option>
                  <option value="₹2,00,000+">₹2,00,000+</option>
                </select>
                <span className="material-symbols-outlined absolute right-3.5 top-3.5 text-[20px] text-outline pointer-events-none">
                  currency_rupee
                </span>
              </div>
            </div>
          </div>

          {/* Message Body */}
          <div className="flex flex-col gap-1.5">
            <label className="font-label-md text-label-md font-semibold text-on-surface" htmlFor="message">
              Message Body <span className="text-error">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Enter your question or specific portfolio details..."
              className="w-full bg-surface-container-lowest border border-outline-variant/40 px-4 py-3 rounded-xl text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary focus:bg-surface-container-low transition-all resize-y shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
            />
          </div>

          {/* Anti-spam / Consent Checkbox */}
          <div className="pt-1">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                required
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 h-4 w-4 rounded border-outline-variant text-secondary accent-secondary focus:ring-secondary cursor-pointer shrink-0"
              />
              <span className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                I acknowledge that Prime Trust communicates officially via <strong className="text-on-surface">primetrustinvestmentcompany7@gmail.com</strong> and investments are subject to terms and regulatory approval.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-label-md text-label-md font-bold text-on-secondary-fixed bg-gradient-to-r from-secondary-fixed via-secondary-container to-secondary-fixed-dim hover:brightness-105 active:scale-[0.98] transition-all shadow-[0_4px_16px_rgba(254,206,88,0.3)] btn-shimmer"
            >
              <span>Submit Message</span>
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </div>
        </form>
      ) : (
        /* Success Feedback Card */
        <div className="flex flex-col items-center text-center py-10 px-4 gap-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#065F46] flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-[34px]">task_alt</span>
          </div>
          <h3 className="font-headline-md text-2xl font-bold text-on-surface">
            Dispatch Successfully Logged
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg leading-relaxed">
            Thank you for reaching out, <span className="font-bold text-on-surface">{formData.fullName}</span>. An investment coordinator has received your transmission and will review it via our verified channel: <span className="font-semibold text-secondary break-all">primetrustinvestmentcompany7@gmail.com</span> within 24 to 48 business hours.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="mt-4 px-6 py-2.5 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors"
          >
            Send Another Dispatch
          </button>
        </div>
      )}
    </div>
  );
}
