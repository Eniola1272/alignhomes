"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OTACalculator } from "@/components/OTACalculator";
import { AuditModal } from "@/components/AuditModal";
import { ArrowLeft, ArrowRight, ShieldCheck, TrendingUp, AlertTriangle, CheckCircle2, DollarSign } from "lucide-react";

export default function CalculatorPage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E2321] selection:bg-[#1B3B2B] selection:text-[#FAF8F5]">
      <Navbar onOpenAuditModal={() => setIsAuditModalOpen(true)} />

      <main className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#707D77] hover:text-[#1B3B2B] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Overview</span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="max-w-3xl space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0EC] border border-[#EBC8BA] text-xs font-semibold uppercase tracking-wider text-[#A34322]">
              <AlertTriangle className="w-3.5 h-3.5 text-[#C87D55]" />
              <span>Host Financial Model</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#11261B] leading-[1.15]">
              The OTA Fee Bleed Calculator
            </h1>
            <p className="text-base sm:text-lg text-[#55615C] leading-relaxed">
              Every booking through Airbnb and Vrbo costs you between 15% and 20% in direct host cuts
              and hidden guest checkout markups. Adjust the sliders below to reveal your exact annual
              leakage and 5-year wealth retained with an independent direct-booking channel.
            </p>
          </div>

          {/* Calculator Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* The Interactive Calculator Component */}
            <div className="lg:col-span-7">
              <OTACalculator onReclaimClick={() => setIsAuditModalOpen(true)} />
            </div>

            {/* Explanatory Breakdown Card */}
            <div className="lg:col-span-5 space-y-6">
              {/* Fee Reality Card */}
              <div className="rounded-2xl bg-[#F2EFE9] border border-[#E4DEC3] p-6 space-y-4 shadow-sm">
                <h3 className="font-serif text-xl font-medium text-[#11261B] flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-[#C87D55]" />
                  <span>Where Does the 15%–20% Go?</span>
                </h3>
                
                <div className="space-y-3 text-xs text-[#55615C] leading-relaxed">
                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E0D9CC] space-y-1">
                    <div className="font-semibold text-[#11261B] flex justify-between">
                      <span>3% Host Service Fee</span>
                      <span className="text-[#A34322] font-mono">Deducted from payout</span>
                    </div>
                    <p className="text-[11px] text-[#707D77]">
                      Taken directly from your bank deposit on every single night.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E0D9CC] space-y-1">
                    <div className="font-semibold text-[#11261B] flex justify-between">
                      <span>14.2% Guest Service Fee</span>
                      <span className="text-[#A34322] font-mono">Added at checkout</span>
                    </div>
                    <p className="text-[11px] text-[#707D77]">
                      An artificial tax added on top of your nightly rate that discourages high-ticket bookings.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E0D9CC] space-y-1">
                    <div className="font-semibold text-[#11261B] flex justify-between">
                      <span>Lost Guest CRM Data</span>
                      <span className="text-[#A34322] font-mono">100% Retained by OTA</span>
                    </div>
                    <p className="text-[11px] text-[#707D77]">
                      You never get their real email or phone number. When they rebook next year, they pay Airbnb again instead of you.
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E4DEC3]">
                  <div className="flex items-center gap-2 text-xs text-[#115E3F] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    <span>With Alignhomes: 0% OTA cuts. You keep 100% of guest payments.</span>
                  </div>
                </div>
              </div>

              {/* Direct Audit CTA Banner */}
              <div className="rounded-2xl bg-[#1B3B2B] text-[#FAF8F5] p-6 space-y-4 shadow-lg shadow-[#1B3B2B]/15">
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-wider text-[#C87D55] font-semibold">
                    Free Technical Analysis
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-white">
                    Want an exact audit of your listing?
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Send us your Airbnb or Vrbo link. We’ll calculate your historical fee losses and send
                    a custom migration roadmap within 24 hours.
                  </p>
                </div>

                <button
                  onClick={() => setIsAuditModalOpen(true)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#FAF8F5] text-[#1B3B2B] text-xs font-semibold uppercase tracking-wider hover:bg-white transition-all shadow-md"
                >
                  <span>Request My Direct Booking Roadmap</span>
                  <ArrowRight className="w-4 h-4 text-[#C87D55]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </div>
  );
}
