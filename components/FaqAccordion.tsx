'use strict';
'use client';

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenIndex?: number;
}

export default function FaqAccordion({ items, defaultOpenIndex = 0 }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="bg-surface-container-lowest rounded-xl sm:rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-headline-sm text-base sm:text-headline-sm font-bold text-on-surface focus:outline-none focus:bg-surface-container-low transition-colors gap-4"
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span
                className={`material-symbols-outlined text-secondary transition-transform duration-200 shrink-0 ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`}
              >
                expand_more
              </span>
            </button>
            {isOpen && (
              <div className="px-4 sm:px-5 pb-5 pt-1 text-on-surface-variant font-body-md text-sm sm:text-body-md leading-relaxed border-t border-outline-variant/20">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
