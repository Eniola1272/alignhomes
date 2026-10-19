"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Lock,
  Download,
  Calendar,
  Building,
  HelpCircle,
} from "lucide-react";

export function AuditSection() {
  const [formData, setFormData] = useState({
    name: "",
    listingUrl: "",
    email: "",
    portfolioSize: "1-2 Luxury Properties",
    currentPms: "Hostaway / Guesty",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [showRoadmapModal, setShowRoadmapModal] = useState(false);
  const [estimatedSavings, setEstimatedSavings] = useState("$42,000+");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.listingUrl) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.auditSummary?.estimatedAnnualSavings) {
        setEstimatedSavings(data.auditSummary.estimatedAnnualSavings);
      }
    } catch (err) {
      console.error(err);
    }

    setStatus("success");
    setShowRoadmapModal(true);

    confetti({
      particleCount: 90,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#1B3B2B", "#C87D55", "#10B981", "#FAF8F5"],
    });
  };

  return (
    <section id="audit-request" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="rounded-3xl bg-[#F2EFE9] border border-[#E6E0D4] p-8 sm:p-12 lg:p-16 shadow-2xl shadow-[#1B3B2B]/5 relative">
          {/* Subtle Decorative Gradient */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#C87D55]/10 via-[#1B3B2B]/5 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#DDD6C8] text-xs font-semibold tracking-wider uppercase text-[#1B3B2B]">
              <Sparkles className="w-3.5 h-3.5 text-[#C87D55]" />
              <span>Complimentary Technical Architecture Review</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#11261B] tracking-tight">
              Request Your Bespoke Direct-Booking Roadmap
            </h2>
            <p className="text-base text-[#55615C] leading-relaxed">
              Paste your current Airbnb or Vrbo listing. Our principal engineers will analyze your calendar
              density, calculate exact lost OTA fees, and design a custom tech stack migration blueprint.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="relative z-10 max-w-xl mx-auto space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A534F] mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Elena Vance"
                className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#DCD5C8] text-[#1E2321] text-sm focus:outline-none focus:border-[#1B3B2B] focus:ring-1 focus:ring-[#1B3B2B] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A534F] mb-1.5">
                Current Airbnb / Vrbo Listing URL
              </label>
              <input
                type="url"
                required
                value={formData.listingUrl}
                onChange={(e) => setFormData({ ...formData, listingUrl: e.target.value })}
                placeholder="https://airbnb.com/rooms/12345678 or your current domain"
                className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#DCD5C8] text-[#1E2321] text-sm focus:outline-none focus:border-[#1B3B2B] focus:ring-1 focus:ring-[#1B3B2B] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A534F] mb-1.5">
                Work Email (Where We Send Your Roadmap)
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="elena@luxuryretreats.com"
                className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#DCD5C8] text-[#1E2321] text-sm focus:outline-none focus:border-[#1B3B2B] focus:ring-1 focus:ring-[#1B3B2B] transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A534F] mb-1.5">
                  Portfolio Size
                </label>
                <select
                  value={formData.portfolioSize}
                  onChange={(e) => setFormData({ ...formData, portfolioSize: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#DCD5C8] text-[#1E2321] text-sm focus:outline-none focus:border-[#1B3B2B] transition-colors cursor-pointer"
                >
                  <option>1-2 Luxury Properties</option>
                  <option>3-5 Boutique Doors</option>
                  <option>6-15 Villa Portfolio</option>
                  <option>15+ Commercial Units</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A534F] mb-1.5">
                  PMS Stack (Optional)
                </label>
                <select
                  value={formData.currentPms}
                  onChange={(e) => setFormData({ ...formData, currentPms: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#DCD5C8] text-[#1E2321] text-sm focus:outline-none focus:border-[#1B3B2B] transition-colors cursor-pointer"
                >
                  <option>Hostaway</option>
                  <option>Guesty</option>
                  <option>Hospitable</option>
                  <option>OwnerRez</option>
                  <option>Direct Airbnb / iCal Only</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full mt-4 flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-[#1B3B2B] text-[#FAF8F5] font-semibold text-sm tracking-wide uppercase shadow-lg shadow-[#1B3B2B]/20 hover:bg-[#224935] active:scale-[0.99] transition-all disabled:opacity-70"
            >
              {status === "submitting" ? (
                <span>Generating Blueprint...</span>
              ) : (
                <>
                  <span>Send Me a Custom Direct-Booking Roadmap</span>
                  <ArrowRight className="w-4 h-4 text-[#C87D55]" />
                </>
              )}
            </button>
          </form>

          {/* Trust Guarantees */}
          <div className="relative z-10 max-w-xl mx-auto mt-8 pt-6 border-t border-[#E3DDCF] flex flex-wrap items-center justify-between text-xs text-[#707D77] gap-3">
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#1B3B2B]" />
              <span>100% Confidential & Private</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Delivered within 24 Hours</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C87D55]" />
              <span>Reviewed by Senior Engineers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Generated Instant Roadmap Modal */}
      {showRoadmapModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#FAF8F5] border border-[#E6E0D4] p-7 sm:p-9 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#EBF5EF] text-[#115E3F] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#11261B]">
                Roadmap Initialized, {formData.name || "Host"}!
              </h3>
              <p className="text-sm text-[#55615C]">
                We have queued your listing (
                <span className="font-mono text-xs text-[#1B3B2B] font-semibold truncate max-w-xs inline-block align-bottom">
                  {formData.listingUrl}
                </span>
                ) for manual inspection by our engineering team.
              </p>
            </div>

            {/* Simulated Live Roadmap Summary */}
            <div className="rounded-2xl bg-[#F2EFE9] border border-[#E3DDCF] p-5 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#C87D55]">
                Preliminary System Architecture:
              </div>

              <div className="space-y-2 text-xs text-[#333E39]">
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#FAF8F5] border border-[#E8E2D7]">
                  <span>Target Frontend Framework</span>
                  <span className="font-mono font-semibold text-[#1B3B2B]">Next.js 14 App Router + Vercel Edge</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#FAF8F5] border border-[#E8E2D7]">
                  <span>Sync Pipeline</span>
                  <span className="font-mono font-semibold text-[#1B3B2B]">{formData.currentPms} Bi-Directional Webhooks</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#FAF8F5] border border-[#E8E2D7]">
                  <span>Payment Gateway</span>
                  <span className="font-mono font-semibold text-[#1B3B2B]">Stripe Elements + Pre-Auth Deposits</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#EBF5EF] border border-[#BFDFCD] text-[#115E3F] font-semibold">
                  <span>Projected Annual Fee Reclaim</span>
                  <span className="font-mono text-sm">{estimatedSavings}</span>
                </div>
              </div>

              <p className="text-[11px] text-[#707D77] italic">
                A full PDF document including estimated annual commission savings and wireframe preview
                will arrive at <strong className="text-[#11261B]">{formData.email}</strong> shortly.
              </p>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => setShowRoadmapModal(false)}
                className="px-6 py-2.5 rounded-full bg-[#1B3B2B] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#224935] transition-colors"
              >
                Close & Return to Site
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
