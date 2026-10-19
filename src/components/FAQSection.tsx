"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles, ArrowRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  tag: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Will Airbnb or Vrbo penalize or de-rank my listing if I take direct bookings?",
      answer:
        "No. Airbnb and Vrbo’s Terms of Service explicitly permit hosts to operate independent websites and provide official calendar synchronization URLs specifically for this reason. Premier luxury hospitality brands operate both channels simultaneously—using Airbnb for initial guest discovery and their Alignhomes direct channel for 100% commission-free repeat stays.",
      tag: "Platform Policy",
    },
    {
      question: "What happens if a guest causes damage? Am I truly protected without AirCover?",
      answer:
        "You are significantly better protected. Airbnb’s AirCover is infamous for taking 4–8 weeks to process claims and frequently denying valid damage requests. Alignhomes implements hotel-grade Stripe credit card pre-authorizations ($1,000–$5,000 holds) and digital liability agreements signed before check-in. The security hold is under your full control—no pleading with platform customer support.",
      tag: "Damage Protection",
    },
    {
      question: "How do you guarantee zero double-bookings during peak holidays?",
      answer:
        "We engineer high-availability, bi-directional event webhooks with your Property Management System (Hostaway, Guesty, Hospitable, OwnerRez) and direct iCal feeds. The millisecond a guest completes checkout on your direct site, those dates are automatically blacked out across Airbnb and Vrbo before the confirmation email even arrives.",
      tag: "Calendar Synchronization",
    },
    {
      question: "Do I have to switch my PMS, change my cleaning crew, or open new bank accounts?",
      answer:
        "Not at all. We build bespoke frontends that seamlessly integrate with your existing operational stack. You keep your current PMS, your current Stripe account, your cleaning workflows, and your existing smart locks. Payments settle directly into your existing business bank account.",
      tag: "Operations & Setup",
    },
    {
      question: "How do guests find my direct website instead of booking on Airbnb?",
      answer:
        "Our clients acquire direct bookings through four primary engines: 1) Automated post-stay email sequences offering past guests a VIP direct rate; 2) Direct Google Vacation Rentals meta-search feed integration appearing directly on Google Maps; 3) High-converting Instagram bio booking funnels; 4) In-villa QR guidebooks and physical welcome collateral.",
      tag: "Guest Acquisition",
    },
    {
      question: "What is the timeline from project kick-off to full launch?",
      answer:
        "A typical bespoke build takes 14 to 21 business days. We handle architecture, custom UI design, PMS API synchronization, Stripe security compliance, and testing. There is zero downtime and zero disruption to your active reservations.",
      tag: "Timeline & Delivery",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#F2EFE9] border-t border-[#E6E0D4] relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#DDD6C8] text-xs font-semibold tracking-wider uppercase text-[#1B3B2B]">
            <HelpCircle className="w-3.5 h-3.5 text-[#C87D55]" />
            <span>Common Host Inquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#11261B]">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#55615C] max-w-xl mx-auto">
            Everything you need to know about launching an independent direct-booking channel for your
            luxury vacation rentals.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-[#FAF8F5] border border-[#E3DDCF] overflow-hidden transition-all duration-200 hover:border-[#1B3B2B]/30"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C87D55] font-semibold">
                      {faq.tag}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-[#11261B]">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#F2EFE9] flex items-center justify-center shrink-0 transition-transform duration-200 text-[#1B3B2B] ${
                      isOpen ? "rotate-180 bg-[#1B3B2B] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#55615C] leading-relaxed border-t border-[#F2EFE9] animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#FAF8F5] border border-[#E3DDCF] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif text-lg font-bold text-[#11261B]">
              Have a specific PMS or custom setup question?
            </h4>
            <p className="text-xs text-[#707D77]">
              Our lead engineers review every listing URL personally within 24 hours.
            </p>
          </div>
          <a
            href="#audit-request"
            className="whitespace-nowrap px-5 py-2.5 rounded-full bg-[#1B3B2B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#224935] transition-colors shrink-0"
          >
            Ask in Your Free Audit →
          </a>
        </div>
      </div>
    </section>
  );
}
