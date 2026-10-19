"use client";

import React, { useState } from "react";
import { ArrowRight, Check, X, Sparkles, DollarSign, ShieldAlert, TrendingUp } from "lucide-react";

export function ReceiptComparison() {
  const [nightlyRate, setNightlyRate] = useState(650);
  const nights = 7;
  const staySubtotal = nightlyRate * nights;
  const cleaning = 350;

  // Airbnb Math
  const otaGuestFeeRate = 0.142; // ~14.2% guest service fee
  const otaGuestFee = Math.round((staySubtotal + cleaning) * otaGuestFeeRate);
  const otaHostCut = Math.round(staySubtotal * 0.03); // 3% host cut
  const otaTotalGuestPays = staySubtotal + cleaning + otaGuestFee;
  const otaHostNetPayout = staySubtotal + cleaning - otaHostCut;

  // Alignhomes Direct Math
  // Host gives 5% direct courtesy discount to guest to incentivize direct booking,
  // yet Host still walks away with substantially MORE profit!
  const directGuestDiscount = Math.round(staySubtotal * 0.05);
  const directTotalGuestPays = staySubtotal - directGuestDiscount + cleaning;
  const directHostNetPayout = directTotalGuestPays; // Zero commission
  const hostNetExtraProfit = directHostNetPayout - otaHostNetPayout;
  const guestSavings = otaTotalGuestPays - directTotalGuestPays;

  return (
    <section className="py-24 bg-alabaster border-t border-[#E6E0D4] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand border border-[#DDD6C8] text-xs font-semibold tracking-wider uppercase text-forest">
            <Sparkles className="w-3.5 h-3.5 text-terracotta" />
            <span>The Win-Win Economics</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#11261B]">
            Why Direct Booking Wins Both Host & Guest
          </h2>
          <p className="text-base text-[#55615C] max-w-2xl mx-auto">
            Airbnb inflates your guest's total price with hidden service fees while slicing a cut
            from your payout. See what happens on a typical 7-night reservation.
          </p>
        </div>

        {/* Rate Selector */}
        <div className="max-w-md mx-auto mb-12 p-4 rounded-2xl bg-sand border border-[#E3DDCF] flex items-center justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4A534F]">
            Test Nightly Rate:
          </span>
          <div className="flex items-center gap-2">
            {[450, 650, 950, 1500].map((rate) => (
              <button
                key={rate}
                onClick={() => setNightlyRate(rate)}
                className={`py-1.5 px-3 rounded-xl text-xs font-bold font-mono transition-all ${
                  nightlyRate === rate
                    ? "bg-forest text-white shadow-xs"
                    : "bg-alabaster text-[#4A534F] border border-[#DCD5C8] hover:border-forest"
                }`}
              >
                ${rate}
              </button>
            ))}
          </div>
        </div>

        {/* Side-by-Side Receipt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* LEFT: The Airbnb Receipt */}
          <div className="rounded-3xl bg-alabaster border-2 border-red-200/80 p-7 sm:p-9 shadow-lg relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-red-100 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-red-700">
                    Guest Booking via Airbnb
                  </span>
                </div>
                <span className="text-[11px] font-mono text-red-500 bg-red-50 px-2 py-0.5 rounded">
                  High Friction
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs text-[#55615C]">
                <div className="flex justify-between">
                  <span>${nightlyRate} × 7 Nights</span>
                  <span className="font-semibold text-[#11261B]">${staySubtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cleaning Fee</span>
                  <span className="font-semibold text-[#11261B]">${cleaning}</span>
                </div>
                <div className="flex justify-between text-red-600 font-semibold p-2.5 rounded-xl bg-red-50/70 border border-red-100">
                  <span className="flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Airbnb Guest Service Fee (~14.2%)</span>
                  </span>
                  <span>+${otaGuestFee.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE4D7] space-y-3">
                <div className="flex justify-between items-baseline font-mono">
                  <span className="text-xs text-[#707D77] uppercase font-sans font-semibold">
                    Total Guest Pays:
                  </span>
                  <span className="font-serif text-2xl font-bold text-red-600">
                    ${otaTotalGuestPays.toLocaleString()}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-sand border border-[#E3DDCF] space-y-1 text-xs font-mono">
                  <div className="flex justify-between text-[#707D77]">
                    <span>Host 3% Platform Deduction:</span>
                    <span className="text-red-500">-${otaHostCut.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-bold text-[#11261B] pt-1 border-t border-[#E5E0D8]">
                    <span>Your Net Payout:</span>
                    <span>${otaHostNetPayout.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-red-100 text-[11px] text-red-600/80 flex items-center gap-2">
              <X className="w-3.5 h-3.5 shrink-0" />
              <span>You receive zero first-party guest email or phone records.</span>
            </div>
          </div>

          {/* RIGHT: The Alignhomes Direct Channel Receipt */}
          <div className="rounded-3xl bg-alabaster border-2 border-emerald-wealth/70 p-7 sm:p-9 shadow-xl relative flex flex-col justify-between ring-4 ring-emerald-wealth/10">
            {/* Best Value Badge */}
            <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-emerald-wealth text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
              Maximum Profit Channel
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#BFDFCD]/60 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-wealth" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#115E3F]">
                    Your Alignhomes Direct Channel
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#115E3F] bg-[#EBF5EF] px-2 py-0.5 rounded border border-[#BFDFCD]">
                  100% Commission-Free
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs text-[#55615C]">
                <div className="flex justify-between">
                  <span>${nightlyRate} × 7 Nights</span>
                  <span className="font-semibold text-[#11261B]">${staySubtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cleaning Fee</span>
                  <span className="font-semibold text-[#11261B]">${cleaning}</span>
                </div>
                <div className="flex justify-between text-[#115E3F] font-semibold p-2.5 rounded-xl bg-[#EBF5EF] border border-[#BFDFCD]">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-wealth" />
                    <span>Direct Courtesy Guest VIP Perk (5% Off)</span>
                  </span>
                  <span>-${directGuestDiscount.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE4D7] space-y-3">
                <div className="flex justify-between items-baseline font-mono">
                  <span className="text-xs text-[#707D77] uppercase font-sans font-semibold">
                    Total Guest Pays:
                  </span>
                  <div className="text-right">
                    <span className="font-serif text-2xl font-bold text-[#115E3F]">
                      ${directTotalGuestPays.toLocaleString()}
                    </span>
                    <span className="block text-[11px] text-emerald-wealth font-sans font-semibold">
                      (Guest saves ${guestSavings.toLocaleString()} vs. Airbnb)
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#EBF5EF] border border-[#BFDFCD] space-y-1 text-xs font-mono">
                  <div className="flex justify-between text-[#115E3F]">
                    <span>OTA Commission Deducted:</span>
                    <span className="font-bold">$0.00 (Zero)</span>
                  </div>
                  <div className="flex justify-between font-bold text-[#115E3F] pt-1 border-t border-[#BFDFCD] text-sm">
                    <span>Your Net Payout:</span>
                    <span>${directHostNetPayout.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Highlight */}
            <div className="mt-6 pt-4 border-t border-[#BFDFCD]/60 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-[#115E3F]">
                <span>Your Extra Net Profit on this Stay:</span>
                <span className="font-mono text-base bg-[#EBF5EF] px-2 py-0.5 rounded border border-[#BFDFCD]">
                  +${hostNetExtraProfit.toLocaleString()} extra in bank
                </span>
              </div>
              <p className="text-[11px] text-[#707D77]">
                Plus: You keep their verified email & phone number for direct repeat rebooking next season.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
