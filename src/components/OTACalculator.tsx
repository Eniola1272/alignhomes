"use client";

import React, { useState } from "react";
import { ArrowRight, ShieldCheck, TrendingUp, Sparkles, Building2 } from "lucide-react";

interface OTACalculatorProps {
  onReclaimClick?: (data: { nightlyRate: number; bookedNights: number; annualLoss: number }) => void;
}

export function OTACalculator({ onReclaimClick }: OTACalculatorProps) {
  const [nightlyRate, setNightlyRate] = useState<number>(450);
  const [bookedNights, setBookedNights] = useState<number>(180);
  const [propertyCount, setPropertyCount] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<"standard" | "portfolio">("standard");

  // Calculations
  const grossAnnualRevenue = nightlyRate * bookedNights * propertyCount;
  const otaFeePercentage = 0.15; // 15% Airbnb/Vrbo platform cut
  const annualOtaLoss = Math.round(grossAnnualRevenue * otaFeePercentage);
  const monthlyOtaLoss = Math.round(annualOtaLoss / 12);
  
  // 5-Year retained with Alignhomes direct infrastructure (including repeat guest direct value compounding 1.1x)
  const fiveYearRetained = Math.round(annualOtaLoss * 5 * 1.08);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleReclaim = () => {
    if (onReclaimClick) {
      onReclaimClick({ nightlyRate, bookedNights, annualLoss: annualOtaLoss });
    } else {
      const auditSection = document.getElementById("audit-request");
      if (auditSection) {
        auditSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative rounded-2xl bg-[#F2EFE9] border border-[#E4DEC3]/50 p-6 md:p-8 shadow-2xl shadow-[#1B3B2B]/5 backdrop-blur-xl">
      {/* Decorative top accent badge */}
      <div className="flex items-center justify-between pb-5 border-b border-[#E3DDCF]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C87D55] animate-pulse" />
          <span className="text-xs font-semibold tracking-wider uppercase text-[#1B3B2B]/80 font-sans">
            Live OTA Bleed Model
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-[#E3DDCF] text-[11px] font-medium text-[#1B3B2B]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#1B3B2B]" />
          <span>Real-time Host Metrics</span>
        </div>
      </div>

      {/* Sliders Container */}
      <div className="mt-6 space-y-6">
        {/* Slider 1: Average Nightly Rate */}
        <div className="space-y-2.5">
          <div className="flex justify-between items-baseline">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#4A534F]">
              Average Nightly Rate (ADR)
            </label>
            <span className="font-serif text-xl font-bold text-[#1B3B2B]">
              ${nightlyRate.toLocaleString()}
              <span className="text-xs font-normal text-[#6B7771] font-sans"> / night</span>
            </span>
          </div>
          <div className="relative flex items-center">
            <input
              type="range"
              min={150}
              max={2500}
              step={25}
              value={nightlyRate}
              onChange={(e) => setNightlyRate(Number(e.target.value))}
              className="w-full accent-[#1B3B2B]"
              aria-label="Average Nightly Rate"
            />
          </div>
          <div className="flex justify-between text-[11px] text-[#78857F]">
            <span>$150/nt</span>
            <span>$1,000/nt</span>
            <span>$2,500/nt</span>
          </div>
        </div>

        {/* Slider 2: Booked Nights Per Year */}
        <div className="space-y-2.5">
          <div className="flex justify-between items-baseline">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#4A534F]">
              Booked Nights Per Year
            </label>
            <span className="font-serif text-xl font-bold text-[#1B3B2B]">
              {bookedNights}
              <span className="text-xs font-normal text-[#6B7771] font-sans"> nights ({(bookedNights / 3.65).toFixed(0)}% occ)</span>
            </span>
          </div>
          <div className="relative flex items-center">
            <input
              type="range"
              min={30}
              max={300}
              step={5}
              value={bookedNights}
              onChange={(e) => setBookedNights(Number(e.target.value))}
              className="w-full accent-[#1B3B2B]"
              aria-label="Booked Nights Per Year"
            />
          </div>
          <div className="flex justify-between text-[11px] text-[#78857F]">
            <span>30 nights</span>
            <span>180 nights (avg)</span>
            <span>300 nights</span>
          </div>
        </div>

        {/* Portfolio Multiplier Selector */}
        <div className="pt-2">
          <div className="flex items-center justify-between text-xs font-semibold text-[#4A534F] uppercase tracking-wider mb-2">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#C87D55]" />
              Portfolio Size
            </span>
            <span className="text-[11px] text-[#6B7771] lowercase font-normal">
              {propertyCount === 1 ? "Single luxury estate" : `${propertyCount} luxury doors`}
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 4, 8].map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => setPropertyCount(count)}
                className={`py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 ${
                  propertyCount === count
                    ? "bg-[#1B3B2B] text-[#FAF8F5] border-[#1B3B2B] shadow-sm"
                    : "bg-[#FAF8F5] text-[#4A534F] border-[#E3DDCF] hover:border-[#C87D55]/60"
                }`}
              >
                {count === 8 ? "8+ Doors" : `${count} ${count === 1 ? "Home" : "Homes"}`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Financial Results Display Card */}
      <div className="mt-7 rounded-xl bg-[#FAF8F5] border border-[#E3DDCF] p-5 space-y-4 shadow-sm">
        <div className="flex items-center justify-between text-xs text-[#6B7771] pb-2 border-b border-[#ECE7DC]">
          <span>Gross Annual Revenue</span>
          <span className="font-semibold text-[#1B3B2B] font-mono text-sm">
            {formatCurrency(grossAnnualRevenue)}
          </span>
        </div>

        {/* Estimated OTA Fees Lost */}
        <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#FAF0EC] border border-[#EBC8BA]/70">
          <div>
            <span className="text-xs font-semibold text-[#A34322] flex items-center gap-1.5 uppercase tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C87D55]" />
              Annual 15% OTA Fee Lost
            </span>
            <p className="text-[11px] text-[#8C482C] mt-0.5">
              Approx. <strong className="font-mono">{formatCurrency(monthlyOtaLoss)}</strong> drained every 30 days
            </p>
          </div>
          <div className="text-right">
            <span className="font-serif text-2xl font-bold text-[#A34322] tracking-tight">
              -{formatCurrency(annualOtaLoss)}
            </span>
          </div>
        </div>

        {/* 5-Year Retained with Alignhomes */}
        <div className="flex items-center justify-between p-4 rounded-lg bg-[#EBF5EF] border border-[#BFDFCD]/80">
          <div>
            <span className="text-xs font-bold text-[#115E3F] flex items-center gap-1.5 uppercase tracking-wider">
              <TrendingUp className="w-4 h-4 text-[#10B981]" />
              5-Year Wealth Retained
            </span>
            <p className="text-[11px] text-[#196B48] mt-0.5">
              100% direct-to-Stripe + repeat guest equity
            </p>
          </div>
          <div className="text-right">
            <span className="font-serif text-2xl md:text-3xl font-extrabold text-[#115E3F] tracking-tight">
              +{formatCurrency(fiveYearRetained)}
            </span>
          </div>
        </div>
      </div>

      {/* Call to Action Button */}
      <button
        onClick={handleReclaim}
        type="button"
        className="w-full mt-6 group relative flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#1B3B2B] text-[#FAF8F5] font-medium text-sm tracking-wide shadow-lg shadow-[#1B3B2B]/20 hover:bg-[#224935] active:scale-[0.99] transition-all duration-200"
      >
        <span>Reclaim This Revenue</span>
        <ArrowRight className="w-4 h-4 text-[#C87D55] transition-transform duration-300 group-hover:translate-x-1.5" />
      </button>

      <p className="text-center text-[11px] text-[#7A8681] mt-3">
        Based on industry median OTA host fees (3% host + ~14% guest checkout markup).
      </p>
    </div>
  );
}
