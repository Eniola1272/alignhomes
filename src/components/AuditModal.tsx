"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { X, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Lock } from "lucide-react";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    listingUrl: "",
    email: "",
    pms: "Hostaway / Guesty",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [estimatedSavings, setEstimatedSavings] = useState("$42,000+");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.listingUrl) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          listingUrl: formData.listingUrl,
          email: formData.email,
          currentPms: formData.pms,
        }),
      });
      const data = await res.json();
      if (data.auditSummary?.estimatedAnnualSavings) {
        setEstimatedSavings(data.auditSummary.estimatedAnnualSavings);
      }
    } catch (err) {
      console.error(err);
    }

    setStatus("success");
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#1B3B2B", "#C87D55", "#10B981"],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-alabaster border border-[#E6E0D4] p-6 sm:p-8 shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-sand text-forest hover:bg-[#E8E2D7] transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {status === "success" ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#EBF5EF] text-[#115E3F] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#11261B]">
              Audit Queued Successfully!
            </h3>
            <p className="text-sm text-[#55615C] max-w-md mx-auto">
              Our engineering team has received your listing. We will generate your custom OTA fee
              bleed report and PMS migration blueprint within 24 hours to{" "}
              <strong className="text-[#11261B]">{formData.email}</strong>.
            </p>
            <div className="p-3 rounded-xl bg-[#EBF5EF] border border-[#BFDFCD] text-xs text-[#115E3F] font-semibold max-w-sm mx-auto">
              Projected Annual Fee Reclaim: <span className="font-mono text-sm">{estimatedSavings}</span>
            </div>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-forest text-white text-xs font-semibold uppercase tracking-wider hover:bg-forest-hover transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand border border-[#E3DDCF] text-[11px] font-semibold uppercase text-forest mb-2">
                <Sparkles className="w-3 h-3 text-terracotta" />
                <span>Complimentary Host Audit</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#11261B]">
                Audit My Vacation Rental Listing
              </h3>
              <p className="text-xs text-[#55615C] mt-1.5">
                Discover your exact OTA fee losses and get a custom direct-booking architecture blueprint.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-[#4A534F] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Elena Vance"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-alabaster border border-[#DCD5C8] text-[#1E2321] text-sm focus:outline-none focus:border-forest"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-[#4A534F] mb-1">
                  Airbnb or Vrbo Listing URL
                </label>
                <input
                  type="url"
                  required
                  value={formData.listingUrl}
                  onChange={(e) => setFormData({ ...formData, listingUrl: e.target.value })}
                  placeholder="https://airbnb.com/rooms/..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-alabaster border border-[#DCD5C8] text-[#1E2321] text-sm focus:outline-none focus:border-forest"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-[#4A534F] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="elena@luxuryvillas.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-alabaster border border-[#DCD5C8] text-[#1E2321] text-sm focus:outline-none focus:border-forest"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-[#4A534F] mb-1">
                  Current PMS
                </label>
                <select
                  value={formData.pms}
                  onChange={(e) => setFormData({ ...formData, pms: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-alabaster border border-[#DCD5C8] text-[#1E2321] text-sm focus:outline-none focus:border-forest"
                >
                  <option>Hostaway</option>
                  <option>Guesty</option>
                  <option>Hospitable</option>
                  <option>OwnerRez</option>
                  <option>None / iCal Only</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-forest text-white text-xs font-semibold uppercase tracking-wider hover:bg-forest-hover transition-all disabled:opacity-70 mt-2 shadow-md"
              >
                {status === "submitting" ? (
                  <span>Analyzing Listing...</span>
                ) : (
                  <>
                    <span>Generate My Direct-Booking Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5 text-terracotta" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-3 text-[11px] text-[#78857F] pt-2">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-forest" /> 100% Confidential
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-wealth" /> 24h Turnaround
                </span>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
