"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Sparkles,
  CreditCard,
  CalendarCheck,
  TrendingUp,
} from "lucide-react";

interface HeroSectionProps {
  onExploreBuildsClick?: () => void;
  onAuditClick?: () => void;
  onDemoClick?: () => void;
}

export function HeroSection({ onExploreBuildsClick, onAuditClick, onDemoClick }: HeroSectionProps) {
  const scrollToCaseStudies = () => {
    if (onExploreBuildsClick) {
      onExploreBuildsClick();
    } else {
      const el = document.getElementById("case-studies");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const integrations = [
    { name: "Hostaway", dot: "bg-sky-600" },
    { name: "Guesty", dot: "bg-indigo-600" },
    { name: "Hospitable", dot: "bg-emerald-600" },
    { name: "Stripe Direct", dot: "bg-[#635BFF]" },
    { name: "Airbnb iCal", dot: "bg-[#FF5A5F]" },
    { name: "Vrbo Sync", dot: "bg-[#002B49]" },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle luxury ambient glow & architectural grid */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#1B3B2B]/8 via-[#C87D55]/6 to-transparent blur-3xl rounded-full" />
        <div className="w-full h-full bg-[radial-gradient(#1B3B2B_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Clear, High-Converting Value Proposition */}
          <div className="lg:col-span-7 space-y-7">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E0D9CD] shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C87D55] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C87D55]"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide uppercase text-[#1B3B2B]">
                Direct-Booking Engineering for Luxury Vacation Rentals
              </span>
            </div>

            {/* Main Headline - Clear, Punchy, High Converting */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] font-medium tracking-tight text-[#11261B] leading-[1.12]">
              Turn Your Vacation Rental Into an{" "}
              <span className="italic font-normal text-[#C87D55] underline decoration-[#C87D55]/30 decoration-2 underline-offset-8">
                Independent
              </span>{" "}
              Luxury Brand.
            </h1>

            {/* Sub-headline - Human language, no developer jargon */}
            <p className="text-base sm:text-lg text-[#4A534F] leading-relaxed max-w-2xl font-sans font-normal">
              Stop losing 15% to 20% on every reservation. We build custom, mobile-first direct booking
              websites that automatically sync with your calendars and deposit guest payments directly
              into your bank account—with <strong className="text-[#1B3B2B] font-semibold">zero double-booking risk</strong>.
            </p>

            {/* Dual CTAs & Calculator Teaser */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onAuditClick}
                  type="button"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#1B3B2B] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase shadow-lg shadow-[#1B3B2B]/20 hover:bg-[#224935] hover:shadow-xl transition-all duration-200"
                >
                  <span>Audit My Listing (Free)</span>
                  <ArrowRight className="w-4 h-4 text-[#C87D55]" />
                </button>

                <button
                  onClick={scrollToCaseStudies}
                  type="button"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#FAF8F5] border border-[#DCD5C8] text-[#1B3B2B] text-xs font-semibold tracking-wider uppercase hover:bg-[#F2EFE9] hover:border-[#1B3B2B]/40 transition-all duration-200 shadow-xs"
                >
                  <span>See Live Builds</span>
                  <span className="text-xs font-mono text-[#C87D55] font-bold">↓</span>
                </button>
              </div>

              {/* Calculator Quick Link */}
              <div className="pt-1">
                <Link
                  href="/calculator"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#707D77] hover:text-[#1B3B2B] transition-colors group"
                >
                  <span>Want to see what Airbnb is costing you?</span>
                  <span className="text-[#C87D55] font-semibold group-hover:underline">
                    Calculate Your OTA Fee Losses on our Live Calculator →
                  </span>
                </Link>
              </div>
            </div>

            {/* Trust Bar & Integrations */}
            <div className="pt-6 border-t border-[#E7E1D4]/80">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#7A8681] mb-3">
                Seamlessly synced with your existing operations:
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {integrations.map((item) => (
                  <div
                    key={item.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E4DEC3]/60 text-xs font-medium text-[#2E3633] shadow-xs hover:border-[#C87D55]/50 transition-colors"
                  >
                    <span className={`w-2 h-2 rounded-full ${item.dot}`} />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Real Host Guarantees */}
            <div className="grid grid-cols-3 gap-3.5 pt-3 text-left">
              <div className="p-3.5 rounded-xl bg-[#F5F2EB]/80 border border-[#E8E2D7]">
                <div className="font-serif text-lg sm:text-xl font-bold text-[#1B3B2B]">0% Risk</div>
                <div className="text-[11px] text-[#697570] font-medium mt-0.5">Double-Booking Guarantee</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F5F2EB]/80 border border-[#E8E2D7]">
                <div className="font-serif text-lg sm:text-xl font-bold text-[#1B3B2B]">100% Direct</div>
                <div className="text-[11px] text-[#697570] font-medium mt-0.5">Guest Payments via Stripe</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F5F2EB]/80 border border-[#E8E2D7]">
                <div className="font-serif text-lg sm:text-xl font-bold text-[#1B3B2B]">1-Click</div>
                <div className="text-[11px] text-[#697570] font-medium mt-0.5">Apple Pay & Mobile Checkouts</div>
              </div>
            </div>
          </div>

          {/* Right Column: Stunning Luxury Property Visual with Floating Direct Booking Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#E6E0D4] shadow-2xl shadow-[#1B3B2B]/10 bg-[#E2DBD0] group">
              {/* Luxury Property Image */}
              <div className="relative h-[480px] sm:h-[540px] w-full">
                <Image
                  src="/images/hero_villa.jpg"
                  alt="Alignhomes Bespoke Direct Booking Villa Showcase"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              </div>

              {/* Top Floating Glass Card: Direct Reservation Confirmed */}
              <div className="absolute top-5 left-5 right-5 sm:left-6 sm:right-6 p-4 rounded-2xl bg-[#FAF8F5]/90 backdrop-blur-md border border-white/60 shadow-xl space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#11261B]">
                      Direct Reservation Confirmed
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#78857F] bg-[#F2EFE9] px-2 py-0.5 rounded border border-[#E3DDCF]">
                    Direct Channel
                  </span>
                </div>

                <div className="flex items-baseline justify-between pt-1">
                  <div>
                    <span className="text-xs text-[#6B7771]">7 Nights • Villa Solstice</span>
                    <div className="font-serif text-2xl font-bold text-[#11261B]">$12,450.00</div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#115E3F] bg-[#EBF5EF] px-2.5 py-1 rounded-full border border-[#BFDFCD]">
                      <TrendingUp className="w-3 h-3 text-[#10B981]" />
                      <span>$1,867 Saved in Airbnb Fees</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Floating Glass Card: Live Calendar Sync Status & Security Hold */}
              <div className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-6 p-4 rounded-2xl bg-[#121514]/85 backdrop-blur-md border border-white/10 text-white shadow-xl space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <CalendarCheck className="w-4 h-4 text-[#10B981]" />
                    <span className="font-medium text-white/90">Instant Calendar Blackout</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#10B981]">Synced in 400ms</span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-white/70 pt-1 border-t border-white/10">
                  <span className="flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5 text-[#C87D55]" />
                    <span>$1,500 Damage Hold: Authorized</span>
                  </span>
                  <span className="text-white/50">Zero Guest Bank Fee</span>
                </div>

                {onDemoClick && (
                  <button
                    type="button"
                    onClick={onDemoClick}
                    className="w-full mt-1.5 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-[#FAF8F5] text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-all border border-white/15 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#C87D55]" />
                    <span>Test Drive Live Guest Checkout Flow →</span>
                  </button>
                )}
              </div>
            </div>

            {/* Subtle floating badge behind card */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 p-3 rounded-2xl bg-[#FAF8F5] border border-[#DDD6C8] shadow-lg items-center gap-2.5 text-xs text-[#1B3B2B] font-medium z-10">
              <div className="w-7 h-7 rounded-full bg-[#1B3B2B] text-white flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-[#C87D55]" />
              </div>
              <div>
                <div className="font-bold text-[#11261B]">Zero Agency Templates</div>
                <div className="text-[10px] text-[#707D77]">100% Bespoke Hospitality Code</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
