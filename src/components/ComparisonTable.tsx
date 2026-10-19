"use client";

import React from "react";
import { Check, X, ShieldAlert, Award, ArrowRight } from "lucide-react";

export function ComparisonTable() {
  const comparisons = [
    {
      feature: "Platform Commission & Guest Fees",
      ota: "15% – 20% lost per booking (Host fee + Guest markup)",
      alignhomes: "0% Commission. You keep 100% of guest payments directly via Stripe",
      winner: "alignhomes",
    },
    {
      feature: "Guest Data & CRM Ownership",
      ota: "Zero data ownership. Phone & email obscured by relay domains",
      alignhomes: "100% First-Party Data. Build your high-net-worth repeat guest database",
      winner: "alignhomes",
    },
    {
      feature: "Security Deposit & Damage Protection",
      ota: "Vague 'AirCover' claims that take weeks and often deny payout",
      alignhomes: "Pre-authorized Stripe card holds ($500–$5,000) under your control",
      winner: "alignhomes",
    },
    {
      feature: "Cancellation & Refund Terms",
      ota: "Subject to platform algorithm penalties & sudden guest-favored refunds",
      alignhomes: "Your own ironclad policy with automated split payment schedules",
      winner: "alignhomes",
    },
    {
      feature: "Search Algorithm & Ranking Vulnerability",
      ota: "One bad review or algorithm shift drops your revenue by 60%",
      alignhomes: "Independent web asset you own forever with SEO & direct brand equity",
      winner: "alignhomes",
    },
    {
      feature: "Property Valuation Multiple on Exit",
      ota: "Valued solely as residential real estate with volatile platform cash flow",
      alignhomes: "Valued as a defensible hospitality brand with proprietary customer list",
      winner: "alignhomes",
    },
    {
      feature: "Google & Meta Search Distribution",
      ota: "Restricted to internal marketplace rankings",
      alignhomes: "Direct Google Vacation Rentals feed & Instagram booking funnels",
      winner: "alignhomes",
    },
  ];

  return (
    <section id="pms-integrations" className="py-24 bg-obsidian text-alabaster relative overflow-hidden">
      {/* Background radial luxury accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-150 h-150 bg-forest/20 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-100 h-100 bg-terracotta/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider uppercase text-terracotta">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>The Strategic Reality</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
            The OTA Trap vs. The Alignhomes Asset
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Airbnb and Vrbo are fantastic discovery channels for initial guests. But relying on them
            for 100% of your revenue leaves your luxury business permanently rented.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="rounded-3xl bg-obsidian-card border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Table Header Columns */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10 p-6 md:p-8 bg-white/2">
            <div className="md:col-span-4 text-xs font-semibold uppercase tracking-wider text-white/50">
              Core Strategic Metric
            </div>
            <div className="md:col-span-4 text-xs font-semibold uppercase tracking-wider text-red-400 flex items-center gap-1.5 mt-2 md:mt-0">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span>Relying 100% on Airbnb / Vrbo</span>
            </div>
            <div className="md:col-span-4 text-xs font-semibold uppercase tracking-wider text-emerald-wealth flex items-center gap-1.5 mt-2 md:mt-0">
              <span className="w-2 h-2 rounded-full bg-emerald-wealth" />
              <span>Your Alignhomes Direct Channel</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/5">
            {comparisons.map((row, index) => (
              <div
                key={row.feature}
                className="grid grid-cols-1 md:grid-cols-12 p-6 md:p-8 hover:bg-white/2 transition-colors items-center gap-4 md:gap-0"
              >
                {/* Feature Label */}
                <div className="md:col-span-4 pr-4">
                  <div className="font-medium text-white text-sm md:text-base">{row.feature}</div>
                </div>

                {/* OTA Column */}
                <div className="md:col-span-4 pr-6 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/15 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-white/60 leading-relaxed">{row.ota}</span>
                </div>

                {/* Alignhomes Column */}
                <div className="md:col-span-4 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-wealth flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm text-white/95 font-medium leading-relaxed">
                    {row.alignhomes}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Table Bottom Takeaway Banner */}
          <div className="p-6 md:p-8 bg-linear-to-r from-forest/60 via-obsidian-card to-terracotta/20 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <div className="text-xs font-semibold uppercase tracking-wider text-terracotta">
                Enterprise Multiplier
              </div>
              <p className="text-sm sm:text-base text-white/90">
                A luxury rental portfolio with a 40%+ direct booking engine commands a{" "}
                <span className="text-white font-bold underline decoration-emerald-wealth decoration-2">
                  1.8x higher valuation
                </span>{" "}
                upon exit.
              </p>
            </div>
            <a
              href="#audit-request"
              className="whitespace-nowrap px-6 py-3.5 rounded-full bg-alabaster text-obsidian text-xs font-semibold tracking-wider uppercase hover:bg-white hover:scale-105 transition-all shadow-lg shadow-white/5"
            >
              Get Your Direct-Booking Audit →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
