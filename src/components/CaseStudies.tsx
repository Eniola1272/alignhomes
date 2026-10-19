"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, TrendingUp, Layers, CheckCircle2, X, ExternalLink } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  location: string;
  subtitle: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  overview: string;
  challenge: string;
  solution: string;
  techStack: string[];
  quote: { text: string; author: string; role: string };
}

export function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const studies: CaseStudy[] = [
    {
      id: "cc-stays",
      title: "CC Stays",
      location: "South Florida & Blue Ridge Mountains",
      subtitle: "Luxury Portfolio Direct-Booking Engine",
      image: "/images/hero_villa.jpg",
      tags: ["Zero Double Bookings", "Instant Calendar Blackout", "Custom Damage Holds"],
      metrics: [
        { label: "OTA Fees Saved", value: "$142,000+" },
        { label: "Direct Booking Share", value: "38% of GMV" },
        { label: "Avg Mobile Checkout", value: "1.1 seconds" },
      ],
      overview:
        "A premier 9-property portfolio operating across Palm Beach luxury villas and Blue Ridge mountain estates, previously losing tens of thousands annually to Airbnb & Vrbo guest booking markups.",
      challenge:
        "Their previous WordPress direct site constantly fell out of sync with Guesty PMS, resulting in two high-stakes double bookings on New Year's Eve, plus a slow mobile checkout that caused guests to abandon.",
      solution:
        "We built a custom, lightning-fast direct booking engine with automatic Guesty calendar blackouts, dynamic seasonal pricing, and secure Stripe credit card holds for high-value security deposits.",
      techStack: ["Real-Time Guesty Sync", "Stripe Damage Holds", "Instant Apple Pay", "VIP Repeat Guest Engine"],
      quote: {
        text: "Alignhomes paid for itself in our first 45 days. We had a $19,000 10-night direct booking that would have cost us over $2,800 in Airbnb fees alone.",
        author: "Camila C.",
        role: "Founder & Portfolio Director, CC Stays",
      },
    },
    {
      id: "silosuites",
      title: "Silosuites",
      location: "Pacific Northwest Wilderness",
      subtitle: "Single-Property Custom Booking Ecosystem",
      image: "/images/silo_cabin.jpg",
      tags: ["Instagram-to-Booking Flow", "50/50 Split Schedule", "Sub-Second Mobile"],
      metrics: [
        { label: "Direct Booking Ratio", value: "84% Direct" },
        { label: "First-Year Reclaim", value: "$48,500" },
        { label: "Double Bookings", value: "0 in 2 Years" },
      ],
      overview:
        "An architectural boutique cabin and converted silo luxury suite commanding $750/night, relying on viral Instagram traction that was needlessly routed to Airbnb.",
      challenge:
        "Instagram followers were eager to book directly, but the host had no trusted payment gateway for security deposits, and feared calendar sync collisions with existing Airbnb guests.",
      solution:
        "Engineered an editorial, mobile-first booking experience featuring a 50/50 split payment schedule, Apple Pay checkout, and zero-risk calendar sync with Airbnb.",
      techStack: ["Hospitable & Airbnb Sync", "Automated Security Hold", "Apple Pay / Google Pay", "Mobile-First Experience"],
      quote: {
        text: "84% of our guests now book directly on our website. The Stripe security hold gives us 10x more protection than Airbnb's AirCover ever did.",
        author: "Marcus & Elena V.",
        role: "Owners & Architects, Silosuites",
      },
    },
    {
      id: "casaprive",
      title: "Vagabond & Casa Prive",
      location: "Dubai Marina & Palm Jumeirah",
      subtitle: "High-Converting Luxury Rental Portals",
      image: "/images/dubai_penthouse.jpg",
      tags: ["Multi-Currency Checkout", "Digital Guest Agreement", "Concierge Add-ons"],
      metrics: [
        { label: "Direct GMV Processed", value: "$310,000" },
        { label: "Guest Satisfaction", value: "4.95 / 5.0" },
        { label: "Currencies Supported", value: "AED, USD, EUR, GBP" },
      ],
      overview:
        "Ultra-high-net-worth shortlets catering to international business executives and luxury holiday travelers requiring concierge add-ons, chauffeur booking, and multi-currency billing.",
      challenge:
        "High-res property videos were stalling page loads on mobile, and international cards frequently failed on outdated template booking engines.",
      solution:
        "Delivered a bespoke high-converting luxury portal with instant video streaming, multi-currency Stripe localization, and automated digital check-in agreement signing.",
      techStack: ["Hostaway PMS Sync", "Stripe Multi-Currency", "Digital ID & Signatures", "Ultra-Fast Media Engine"],
      quote: {
        text: "International guests booking $5,000+ stays expect an interface as pristine as a Four Seasons. Alignhomes delivered that standard seamlessly.",
        author: "Tariq A.",
        role: "Managing Partner, Vagabond Hospitality",
      },
    },
  ];

  return (
    <section id="case-studies" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#C87D55] font-sans">
              Case Studies & Proof
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#11261B] tracking-tight">
              Proven Hospitality Architectures
            </h2>
            <p className="text-base text-[#55615C]">
              Real vacation rental owners and boutique hospitality operators who broke free from OTA
              dependency with our bespoke engineering.
            </p>
          </div>
          <div className="text-sm font-medium text-[#1B3B2B] flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
            <span>Average Client ROI: 11.4x in Year 1</span>
          </div>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studies.map((study) => (
            <div
              key={study.id}
              onClick={() => setSelectedStudy(study)}
              className="group cursor-pointer rounded-3xl bg-[#F2EFE9] border border-[#E6E0D4] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#1B3B2B]/8 hover:-translate-y-1 hover:border-[#C87D55]/60"
            >
              {/* Image with subtle zoom */}
              <div className="relative h-64 w-full overflow-hidden bg-[#E2DBD0]">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Location Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FAF8F5]/90 backdrop-blur-md text-[11px] font-medium text-[#1B3B2B] border border-white/50">
                  {study.location}
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="font-serif text-2xl font-bold">{study.title}</div>
                  <div className="text-xs text-white/80 font-sans">{study.subtitle}</div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#E3DDCF] text-[11px] font-medium text-[#4A534F]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#E4DEC3]">
                  {study.metrics.slice(0, 2).map((m) => (
                    <div key={m.label} className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D7]">
                      <div className="text-[10px] text-[#78857F] uppercase tracking-wide font-medium">{m.label}</div>
                      <div className="font-serif text-lg font-bold text-[#1B3B2B]">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Link */}
                <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#1B3B2B] group-hover:text-[#C87D55] transition-colors">
                  <span>View Technical Breakdown</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#FAF8F5] border border-[#E5E0D8] p-6 sm:p-9 shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedStudy(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#F2EFE9] text-[#1B3B2B] hover:bg-[#E8E2D7] transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#C87D55]">
                {selectedStudy.location}
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#11261B] mt-1">
                {selectedStudy.title} — {selectedStudy.subtitle}
              </h3>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3">
              {selectedStudy.metrics.map((m) => (
                <div key={m.label} className="p-3.5 rounded-xl bg-[#F2EFE9] border border-[#E6E0D4] text-center">
                  <div className="text-xs text-[#78857F] font-medium">{m.label}</div>
                  <div className="font-serif text-xl sm:text-2xl font-bold text-[#1B3B2B] mt-1">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Content Sections */}
            <div className="space-y-4 text-sm text-[#4A534F] leading-relaxed">
              <div>
                <h4 className="font-semibold text-[#11261B] text-sm mb-1">The Problem:</h4>
                <p>{selectedStudy.challenge}</p>
              </div>

              <div>
                <h4 className="font-semibold text-[#11261B] text-sm mb-1">The Alignhomes Solution:</h4>
                <p>{selectedStudy.solution}</p>
              </div>

              {/* Quote */}
              <blockquote className="p-4 rounded-2xl bg-[#EBF5EF] border border-[#BFDFCD] italic text-[#115E3F] text-sm">
                "{selectedStudy.quote.text}"
                <footer className="not-italic text-xs font-semibold text-[#1B3B2B] mt-2">
                  — {selectedStudy.quote.author}, {selectedStudy.quote.role}
                </footer>
              </blockquote>

              {/* Tech Stack */}
              <div>
                <h4 className="font-semibold text-[#11261B] text-sm mb-2">Architectural Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedStudy.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-[#FAF8F5] border border-[#DCD5C8] text-xs font-mono text-[#1B3B2B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8E2D7] flex justify-end">
              <button
                onClick={() => {
                  setSelectedStudy(null);
                  const el = document.getElementById("audit-request");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 rounded-full bg-[#1B3B2B] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#224935] transition-colors"
              >
                Request Similar Architecture for My Property →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
