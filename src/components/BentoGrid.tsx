"use client";

import React, { useState } from "react";
import {
  CalendarCheck,
  CreditCard,
  Zap,
  Sliders,
  Shield,
  CheckCircle,
  RefreshCw,
  Clock,
  ArrowRight,
  Lock,
  Smartphone,
  Gauge,
  Sparkles,
  ShieldAlert,
} from "lucide-react";

export function BentoGrid() {
  // Card 3 Split Payment Engine State
  const [splitOption, setSplitOption] = useState<"60-40" | "50-50" | "100-full">("50-50");
  // Card 1 Sync Status simulated ping
  const [syncing, setSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState("Just now");

  const triggerManualSync = () => {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      setLastSyncTime("All channels blocked (0.38s)");
    }, 700);
  };

  return (
    <section id="bento-architecture" className="py-24 bg-[#F2EFE9] border-y border-[#E6E0D4] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#DDD6C8] text-xs font-semibold tracking-wider uppercase text-[#1B3B2B]">
            <Sparkles className="w-3.5 h-3.5 text-[#C87D55]" />
            <span>How Your Direct Channel Works</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#11261B] tracking-tight leading-[1.18]">
            Built Like a FinTech App. <br className="hidden sm:block" />
            Designed Like a 5-Star Resort.
          </h2>
          <p className="text-base sm:text-lg text-[#55615C] leading-relaxed">
            Generic website builders like WordPress and Wix are notorious for breaking, slowing down,
            and causing disastrous double-bookings. We build modern, dedicated booking engines designed
            specifically to protect your calendar and maximize your net profit.
          </p>
        </div>

        {/* Asymmetric 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {/* ================= CARD 1: Zero Double-Booking Guarantee ================= */}
          <div className="md:col-span-12 lg:col-span-7 bg-[#FAF8F5] rounded-3xl p-7 lg:p-9 border border-[#E4DEC3]/80 shadow-md shadow-[#1B3B2B]/5 flex flex-col justify-between group hover:border-[#1B3B2B]/30 transition-all duration-300">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF5EF] border border-[#BFDFCD] text-xs font-semibold text-[#115E3F]">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span>Zero Double-Booking Guarantee</span>
                </div>
                <div className="text-xs font-mono text-[#78857F] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C87D55]" />
                  <span>Sync Speed: &lt;400ms</span>
                </div>
              </div>

              <h3 className="font-serif text-2xl lg:text-3xl font-medium text-[#11261B] mb-3">
                Automatic, Instant Calendar Sync Across All OTAs
              </h3>
              <p className="text-sm text-[#55615C] leading-relaxed mb-6">
                The #1 fear of luxury hosts is double-booking. When a guest books on your Alignhomes
                direct site, those dates are instantly blacked out across Airbnb, Vrbo, and your PMS in
                real-time. You never have to manually update calendars again.
              </p>

              {/* Visual Channel Manager Console */}
              <div className="rounded-2xl bg-[#121514] p-5 text-[#FAF8F5] shadow-inner border border-white/10 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                    <span className="text-xs text-white/90 font-medium">Channel Distribution Hub</span>
                  </div>
                  <button
                    onClick={triggerManualSync}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-[#C87D55] transition-colors"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${syncing ? "animate-spin" : ""}`} />
                    <span>{syncing ? "Testing Sync..." : "Test Instant Sync"}</span>
                  </button>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#10B981]" />
                      <span className="font-semibold text-white">Your Direct Website</span>
                    </div>
                    <span className="text-[#10B981] font-mono text-[11px] font-semibold">New Booking Confirmed (Oct 24-31)</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-sky-400" />
                      <span className="text-white/80">PMS (Hostaway / Guesty / Hospitable)</span>
                    </div>
                    <span className="text-[#10B981] font-mono text-[11px]">Dates Blocked Automatically ✓</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF5A5F]" />
                      <span className="text-white/80">Airbnb & Vrbo Calendars</span>
                    </div>
                    <span className="text-[#C87D55] font-mono text-[11px]">Dates Blacked Out (0% Collision Risk)</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-white/50 pt-1">
                  <span>Status: 24/7 Automated Bi-Directional Watcher</span>
                  <span className="text-[#10B981] font-mono">{lastSyncTime}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8E2D7] flex items-center justify-between text-xs text-[#707D77]">
              <span>Works seamlessly alongside Airbnb & Vrbo</span>
              <span className="font-semibold text-[#1B3B2B]">Zero Manual Administration</span>
            </div>
          </div>

          {/* ================= CARD 2: Hotel-Grade Damage Protection ================= */}
          <div className="md:col-span-12 lg:col-span-5 bg-[#FAF8F5] rounded-3xl p-7 lg:p-9 border border-[#E4DEC3]/80 shadow-md shadow-[#1B3B2B]/5 flex flex-col justify-between group hover:border-[#1B3B2B]/30 transition-all duration-300">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0EC] border border-[#EBC8BA] text-xs font-semibold text-[#A34322] mb-6">
                <Shield className="w-3.5 h-3.5 text-[#C87D55]" />
                <span>Hotel-Grade Damage Protection</span>
              </div>

              <h3 className="font-serif text-2xl font-medium text-[#11261B] mb-3">
                Pre-Authorized Credit Card Security Holds
              </h3>
              <p className="text-sm text-[#55615C] leading-relaxed mb-6">
                Airbnb's "AirCover" often takes weeks of painful bureaucracy and denies valid damage
                claims. With Alignhomes, you place a secure $1,000 to $5,000 pre-authorization hold on
                the guest's card—just like a 5-star hotel.
              </p>

              {/* Visual Card Hold Mockup */}
              <div className="rounded-2xl bg-gradient-to-br from-[#FAF8F5] to-[#F2EFE9] border border-[#DDD6C8] p-5 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#1B3B2B] flex items-center justify-center text-white">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#11261B]">Visa Infinite •••• 9012</div>
                      <div className="text-[10px] text-[#78857F]">Guest: Victoria Sterling (Verified)</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FAF0EC] text-[#A34322] border border-[#EBC8BA]">
                    HOLD ONLY
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-y border-[#E6E0D4] text-xs">
                  <span className="text-[#55615C]">Security Hold Amount:</span>
                  <span className="font-mono font-bold text-[#11261B]">$1,500.00 USD</span>
                </div>

                <div className="space-y-1.5 text-[11px] text-[#55615C]">
                  <div className="flex items-center gap-1.5 text-[#115E3F]">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Funds held securely without upfront bank fee for guest</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#55615C]">
                    <Clock className="w-3.5 h-3.5 text-[#C87D55]" />
                    <span>Releases automatically 72h after checkout if no claim filed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8E2D7] flex items-center justify-between text-xs text-[#707D77]">
              <span>You control claim decisions</span>
              <span className="font-semibold text-[#C87D55]">Direct Bank Payouts</span>
            </div>
          </div>

          {/* ================= CARD 3: Flexible Payment Schedules ================= */}
          <div className="md:col-span-12 lg:col-span-5 bg-[#FAF8F5] rounded-3xl p-7 lg:p-9 border border-[#E4DEC3]/80 shadow-md shadow-[#1B3B2B]/5 flex flex-col justify-between group hover:border-[#1B3B2B]/30 transition-all duration-300">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#DDD6C8] text-xs font-semibold text-[#1B3B2B] mb-6">
                <Sliders className="w-3.5 h-3.5 text-[#C87D55]" />
                <span>Higher Conversion Rates</span>
              </div>

              <h3 className="font-serif text-2xl font-medium text-[#11261B] mb-3">
                Flexible Payment Schedules
              </h3>
              <p className="text-sm text-[#55615C] leading-relaxed mb-6">
                High-net-worth guests booking $5,000+ stays hate paying 100% upfront months in advance.
                Offering a split schedule increases checkout completion by up to 41%—with balance
                collections triggered automatically.
              </p>

              {/* Interactive Policy Switcher */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-[#55615C] uppercase tracking-wider">
                  Select Your Preferred Payment Rule:
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSplitOption("50-50")}
                    className={`py-2 px-2.5 rounded-xl border text-xs font-medium transition-all ${
                      splitOption === "50-50"
                        ? "bg-[#1B3B2B] text-white border-[#1B3B2B] shadow-xs"
                        : "bg-[#F2EFE9] text-[#4A534F] border-[#E3DDCF] hover:border-[#1B3B2B]/50"
                    }`}
                  >
                    50 / 50 Split
                  </button>
                  <button
                    type="button"
                    onClick={() => setSplitOption("60-40")}
                    className={`py-2 px-2.5 rounded-xl border text-xs font-medium transition-all ${
                      splitOption === "60-40"
                        ? "bg-[#1B3B2B] text-white border-[#1B3B2B] shadow-xs"
                        : "bg-[#F2EFE9] text-[#4A534F] border-[#E3DDCF] hover:border-[#1B3B2B]/50"
                    }`}
                  >
                    60 / 40 Split
                  </button>
                  <button
                    type="button"
                    onClick={() => setSplitOption("100-full")}
                    className={`py-2 px-2.5 rounded-xl border text-xs font-medium transition-all ${
                      splitOption === "100-full"
                        ? "bg-[#1B3B2B] text-white border-[#1B3B2B] shadow-xs"
                        : "bg-[#F2EFE9] text-[#4A534F] border-[#E3DDCF] hover:border-[#1B3B2B]/50"
                    }`}
                  >
                    100% Upfront
                  </button>
                </div>

                {/* Schedule Visualizer */}
                <div className="p-4 rounded-xl bg-[#F8F5EE] border border-[#E6E0D4] space-y-2">
                  {splitOption === "50-50" && (
                    <>
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-[#11261B]">Payment 1: 50% Due at Booking</span>
                        <span className="font-mono font-bold text-[#115E3F]">$4,500.00</span>
                      </div>
                      <div className="flex justify-between text-xs text-[#55615C]">
                        <span>Payment 2: 50% Automatically Charged 14 Days Prior</span>
                        <span className="font-mono font-medium">$4,500.00</span>
                      </div>
                    </>
                  )}
                  {splitOption === "60-40" && (
                    <>
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-[#11261B]">Payment 1: 60% Due at Booking</span>
                        <span className="font-mono font-bold text-[#115E3F]">$5,400.00</span>
                      </div>
                      <div className="flex justify-between text-xs text-[#55615C]">
                        <span>Payment 2: 40% Automatically Charged 14 Days Prior</span>
                        <span className="font-mono font-medium">$3,600.00</span>
                      </div>
                    </>
                  )}
                  {splitOption === "100-full" && (
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-[#11261B]">100% Upfront (with optional 5% direct discount)</span>
                      <span className="font-mono font-bold text-[#115E3F]">$8,550.00</span>
                    </div>
                  )}
                  <p className="text-[11px] text-[#7A8681] pt-1">
                    Stripe automatically charges the secondary payment—zero chasing guests or manual invoicing.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8E2D7] flex items-center justify-between text-xs text-[#707D77]">
              <span>Automated guest reminders</span>
              <span className="font-semibold text-[#1B3B2B]">Zero Host Intervention</span>
            </div>
          </div>

          {/* ================= CARD 4: Sub-Second Mobile Checkout ================= */}
          <div className="md:col-span-12 lg:col-span-7 bg-[#FAF8F5] rounded-3xl p-7 lg:p-9 border border-[#E4DEC3]/80 shadow-md shadow-[#1B3B2B]/5 flex flex-col justify-between group hover:border-[#1B3B2B]/30 transition-all duration-300">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF5EF] border border-[#BFDFCD] text-xs font-semibold text-[#115E3F]">
                  <Zap className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Sub-Second Mobile Checkout</span>
                </div>
                <div className="text-xs font-mono text-[#1B3B2B] bg-[#F2EFE9] px-2.5 py-1 rounded-md border border-[#E2DBD0]">
                  Speed: 99/100 on Mobile
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7">
                  <h3 className="font-serif text-2xl lg:text-3xl font-medium text-[#11261B] mb-3">
                    Fast Enough for Guests Booking from Instagram
                  </h3>
                  <p className="text-sm text-[#55615C] leading-relaxed mb-4">
                    73% of luxury travelers discover vacation rentals on social media and book on their
                    phones. Slow templates take 5+ seconds to load, losing over 40% of potential guests.
                    Alignhomes websites load under 0.8s with 1-click Apple Pay.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-[#F2EFE9] border border-[#E3DDCF]">
                      <div className="text-[11px] text-[#707D77]">Mobile Load Time</div>
                      <div className="font-mono text-base font-bold text-[#115E3F]">0.78 seconds</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#F2EFE9] border border-[#E3DDCF]">
                      <div className="text-[11px] text-[#707D77]">Apple Pay Checkout</div>
                      <div className="font-mono text-base font-bold text-[#115E3F]">1-Click Biometric</div>
                    </div>
                  </div>
                </div>

                {/* Score Gauge Circle */}
                <div className="sm:col-span-5 flex flex-col items-center justify-center p-5 rounded-2xl bg-[#121514] text-[#FAF8F5] border border-white/10 shadow-inner">
                  <div className="relative flex items-center justify-center w-28 h-28">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-white/15"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-[#10B981]"
                        strokeDasharray="99, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center">
                      <span className="font-mono text-3xl font-extrabold text-[#FAF8F5]">99</span>
                      <span className="text-[9px] uppercase tracking-wider text-[#10B981] font-semibold">Mobile Score</span>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="text-[11px] text-white/60 font-mono">Vs. WordPress Template: ~42</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8E2D7] flex items-center justify-between text-xs text-[#707D77]">
              <span>Optimized for iOS & Android</span>
              <span className="font-semibold text-[#115E3F]">Zero Guest Drop-off</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
