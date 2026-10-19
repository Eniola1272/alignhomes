"use client";

import React, { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import {
  X,
  Calendar,
  CreditCard,
  Check,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Apple,
  Clock,
  Wine,
  Car,
  UtensilsCrossed,
  Layers,
  Lock,
} from "lucide-react";

interface BookingDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingDemoModal({ isOpen, onClose }: BookingDemoModalProps) {
  const [step, setStep] = useState<"details" | "addons" | "payment" | "confirmed">("details");
  const [nights, setNights] = useState(5);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["private-chef"]);
  const [paymentOption, setPaymentOption] = useState<"split" | "full">("split");

  if (!isOpen) return null;

  const nightlyRate = 850;
  const basePrice = nightlyRate * nights;

  const addonsList = [
    {
      id: "private-chef",
      name: "Private Chef Welcome Dinner",
      price: 550,
      icon: UtensilsCrossed,
      desc: "4-course farm-to-table menu prepared on arrival evening",
    },
    {
      id: "airport-chauffeur",
      name: "VIP Airport Transfer (Escalade ESV)",
      price: 220,
      icon: Car,
      desc: "Direct curbside pickup with chilled refreshments",
    },
    {
      id: "sommelier-selection",
      name: "Curated Wine & Champagne Cellar",
      price: 340,
      icon: Wine,
      desc: "6 bottles of biodynamic premier cru vintages in wine fridge",
    },
  ];

  const addonsTotal = selectedAddons.reduce((acc, id) => {
    const item = addonsList.find((a) => a.id === id);
    return acc + (item ? item.price : 0);
  }, 0);

  const cleaningFee = 350;
  const totalAmount = basePrice + addonsTotal + cleaningFee;
  const initialPayment = paymentOption === "split" ? Math.round(totalAmount * 0.5) : totalAmount;
  const balancePayment = paymentOption === "split" ? totalAmount - initialPayment : 0;
  const otaFeeSaved = Math.round(totalAmount * 0.15);

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleCompleteDemo = () => {
    setStep("confirmed");
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#1B3B2B", "#C87D55", "#10B981"],
    });
  };

  const resetModal = () => {
    setStep("details");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl bg-alabaster border border-[#E6E0D4] p-6 sm:p-9 shadow-2xl space-y-6">
        {/* Header & Close */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E7E1D4]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-wealth animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-forest font-mono">
              Live Guest Booking Experience Demo
            </span>
          </div>
          <button
            onClick={resetModal}
            className="p-1.5 rounded-full bg-sand text-forest hover:bg-[#E8E2D7] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Property Mini Header */}
        <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-sand border border-[#E3DDCF]">
          <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
            <Image
              src="/images/hero_villa.jpg"
              alt="Villa Solstice"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs uppercase tracking-wider text-terracotta font-semibold">
              Live Direct Engine
            </div>
            <h4 className="font-serif text-lg font-bold text-[#11261B] truncate">
              Villa Solstice — Palm Beach
            </h4>
            <div className="text-xs text-[#707D77] flex items-center gap-2">
              <span>${nightlyRate}/night</span>
              <span>•</span>
              <span className="text-[#115E3F] font-semibold">0% OTA Commission</span>
            </div>
          </div>
          <div className="text-right hidden sm:block">
            <span className="px-2.5 py-1 rounded-full bg-[#EBF5EF] text-[#115E3F] border border-[#BFDFCD] text-[11px] font-semibold">
              Direct Channel
            </span>
          </div>
        </div>

        {/* STEP 1: Details & Nights */}
        {step === "details" && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A534F] mb-2">
                1. Select Guest Length of Stay:
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[3, 5, 7, 10].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setNights(n)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all ${
                      nights === n
                        ? "bg-forest text-white border-forest shadow-xs"
                        : "bg-alabaster text-[#4A534F] border-[#DCD5C8] hover:border-forest/40"
                    }`}
                  >
                    {n} Nights
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-alabaster border border-[#E0D9CC] space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-[#55615C]">${nightlyRate} × {nights} nights</span>
                <span className="font-mono font-medium text-[#11261B]">${basePrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#55615C]">Luxury Departure Cleaning</span>
                <span className="font-mono font-medium text-[#11261B]">${cleaningFee}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#EAE4D7] font-semibold text-sm">
                <span>Subtotal</span>
                <span className="font-mono text-[#11261B]">${(basePrice + cleaningFee).toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={() => setStep("addons")}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-forest text-white text-xs font-semibold uppercase tracking-wider hover:bg-forest-hover transition-all shadow-md"
            >
              <span>Next: Concierge Add-ons (High Margin Revenue)</span>
              <ArrowRight className="w-4 h-4 text-terracotta" />
            </button>
          </div>
        )}

        {/* STEP 2: Concierge Addons */}
        {step === "addons" && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#4A534F] mb-1">
                2. Guest Experience & Concierge Add-ons:
              </div>
              <p className="text-xs text-[#707D77]">
                Direct booking allows you to sell lucrative hospitality extras that Airbnb blocks.
              </p>
            </div>

            <div className="space-y-2.5">
              {addonsList.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                const Icon = addon.icon;
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`cursor-pointer p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                      isSelected
                        ? "bg-alabaster border-forest ring-1 ring-forest"
                        : "bg-alabaster border-[#E0D9CC] hover:border-terracotta/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected ? "bg-forest text-white" : "bg-sand text-forest"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#11261B]">{addon.name}</div>
                        <div className="text-[11px] text-[#707D77]">{addon.desc}</div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-mono text-xs font-bold text-[#11261B]">
                        +${addon.price}
                      </span>
                      <div className="text-[10px] text-emerald-wealth font-medium">
                        {isSelected ? "Selected ✓" : "Tap to add"}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep("details")}
                className="py-3 px-4 rounded-xl border border-[#DCD5C8] text-xs font-semibold text-[#4A534F] hover:bg-sand"
              >
                Back
              </button>
              <button
                onClick={() => setStep("payment")}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-forest text-white text-xs font-semibold uppercase tracking-wider hover:bg-forest-hover transition-all shadow-md"
              >
                <span>Continue to Checkout Schedule</span>
                <ArrowRight className="w-4 h-4 text-terracotta" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Payment Schedule & Stripe Pre-Auth */}
        {step === "payment" && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#4A534F] mb-1">
                3. High-Converting Payment Schedule:
              </div>
              <p className="text-xs text-[#707D77]">
                Automatic Stripe collection with zero awkward paperwork or manual chasing.
              </p>
            </div>

            {/* Split vs Full Toggle */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setPaymentOption("split")}
                className={`p-3 rounded-xl border text-left transition-all ${
                  paymentOption === "split"
                    ? "bg-forest text-white border-forest shadow-xs"
                    : "bg-alabaster text-[#4A534F] border-[#DCD5C8]"
                }`}
              >
                <div className="text-xs font-bold">50 / 50 Split Schedule</div>
                <div className={`text-[10px] ${paymentOption === "split" ? "text-white/80" : "text-[#707D77]"}`}>
                  50% today • 50% automated 14 days prior
                </div>
              </button>

              <button
                type="button"
                onClick={() => setPaymentOption("full")}
                className={`p-3 rounded-xl border text-left transition-all ${
                  paymentOption === "full"
                    ? "bg-forest text-white border-forest shadow-xs"
                    : "bg-alabaster text-[#4A534F] border-[#DCD5C8]"
                }`}
              >
                <div className="text-xs font-bold">100% Upfront</div>
                <div className={`text-[10px] ${paymentOption === "full" ? "text-white/80" : "text-[#707D77]"}`}>
                  Single charge at checkout
                </div>
              </button>
            </div>

            {/* Breakdown Box */}
            <div className="p-4 rounded-2xl bg-alabaster border border-[#E0D9CC] space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-[#55615C]">Total Stay Amount (incl. cleaning & extras):</span>
                <span className="font-mono font-bold text-[#11261B]">${totalAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#115E3F] font-semibold">
                <span>Due Today (Deposit to Lock Dates):</span>
                <span className="font-mono text-sm">${initialPayment.toLocaleString()}</span>
              </div>
              {paymentOption === "split" && (
                <div className="flex justify-between text-[#707D77]">
                  <span>Automated Balance (Due 14 days prior):</span>
                  <span className="font-mono">${balancePayment.toLocaleString()}</span>
                </div>
              )}
              <div className="pt-2 border-t border-[#EAE4D7] flex items-center justify-between text-[11px] text-[#A34322] bg-[#FAF0EC] p-2 rounded-lg">
                <span className="font-semibold">Fee Kept vs. Airbnb / Vrbo:</span>
                <span className="font-mono font-bold">+${otaFeeSaved.toLocaleString()} in your bank</span>
              </div>
            </div>

            {/* Damage Hold Pre-Auth Notice */}
            <div className="p-3 rounded-xl bg-[#EBF5EF] border border-[#BFDFCD] flex items-start gap-2.5 text-xs text-[#115E3F]">
              <ShieldCheck className="w-4 h-4 text-emerald-wealth shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold">Hotel-Grade Damage Protection Active</strong>
                <span>A $1,500 security hold is placed on the guest card 24h prior to check-in and releases automatically 72h post-checkout.</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep("addons")}
                className="py-3 px-4 rounded-xl border border-[#DCD5C8] text-xs font-semibold text-[#4A534F] hover:bg-sand"
              >
                Back
              </button>
              <button
                onClick={handleCompleteDemo}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-forest text-white text-xs font-semibold uppercase tracking-wider hover:bg-forest-hover transition-all shadow-md"
              >
                <Apple className="w-4 h-4" />
                <span>Simulate 1-Click Apple Pay Booking</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Confirmed & Calendar Sync Alert */}
        {step === "confirmed" && (
          <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#EBF5EF] text-[#115E3F] flex items-center justify-center mx-auto shadow-sm">
              <Check className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div className="space-y-1">
              <div className="text-xs uppercase tracking-wider text-emerald-wealth font-bold">
                Direct Booking Completed
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#11261B]">
                Reservation Confirmed!
              </h3>
              <p className="text-xs text-[#55615C] max-w-md mx-auto">
                Total processed: <strong className="font-mono text-[#11261B]">${totalAmount.toLocaleString()}</strong>.
                You kept <strong className="font-mono text-[#115E3F]">+${otaFeeSaved.toLocaleString()}</strong> that Airbnb would have taken.
              </p>
            </div>

            {/* Instant Channel Sync Visual Confirmation */}
            <div className="rounded-2xl bg-obsidian p-4 text-white text-left space-y-2.5 max-w-md mx-auto text-xs">
              <div className="flex items-center justify-between text-white/50 text-[11px] pb-1 border-b border-white/10">
                <span>Real-Time Channel Manager Broadcast</span>
                <span className="text-emerald-wealth font-mono">380ms Latency</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Airbnb Calendar:</span>
                <span className="text-emerald-wealth font-mono font-semibold">Dates Blocked Automatically ✓</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Vrbo Calendar:</span>
                <span className="text-emerald-wealth font-mono font-semibold">Dates Blocked Automatically ✓</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Host Payout (Stripe):</span>
                <span className="text-alabaster font-mono font-semibold">Deposited Directly into Your Bank ✓</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  resetModal();
                  const el = document.getElementById("audit-request");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-forest text-white text-xs font-semibold uppercase tracking-wider hover:bg-forest-hover transition-all shadow-md"
              >
                Request This Architecture for My Property →
              </button>
              <button
                onClick={resetModal}
                className="text-xs text-[#707D77] hover:text-forest underline"
              >
                Close Preview
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
