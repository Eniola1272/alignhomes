"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, Compass, Home, Key, Waves } from "lucide-react";

interface Archetype {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  recommendedPms: string;
  checkoutFlow: string;
}

export function ArchetypesShowcase() {
  const [activeArchetype, setActiveArchetype] = useState<number>(0);

  const archetypes: Archetype[] = [
    {
      id: "luxury-villas",
      name: "Luxury Estates & Villas",
      category: "High-Ticket Portfolio",
      description:
        "Engineered for $1,200+/night properties requiring concierge upsells, custom damage waivers, and white-glove onboarding.",
      image: "/images/hero_villa.jpg",
      features: [
        "Concierge add-on upsells (Private Chef, Yacht Charter)",
        "Stripe pre-authorization deposit holds ($1,500 - $5,000)",
        "Custom ID verification & digital lease execution",
        "Exclusive repeat VIP guest portal with saved cards",
      ],
      recommendedPms: "Guesty / Hostaway Enterprise",
      checkoutFlow: "Split-Payment (50/50) with ID Check",
    },
    {
      id: "boutique-cabins",
      name: "Boutique Cabins & Glamping",
      category: "Architectural Retreats",
      description:
        "Designed to harness viral social media traffic directly into seamless, mobile-optimized bookings without OTA commission leak.",
      image: "/images/silo_cabin.jpg",
      features: [
        "Sub-second mobile checkout tailored for Instagram bio traffic",
        "Weather & seasonal dynamic rate adjustments",
        "Interactive property map & trail guide integration",
        "Automated guidebooks & keypad code dispatch via SMS",
      ],
      recommendedPms: "Hospitable / OwnerRez",
      checkoutFlow: "One-Click Apple Pay & Google Pay",
    },
    {
      id: "coastal-retreats",
      name: "Coastal & Waterfront Havens",
      category: "Seasonal Leisure",
      description:
        "Built for beachfront properties with strict seasonal minimum-night rules, weekend turnover blocks, and maritime equipment add-ons.",
      image: "/images/coastal_retreat.jpg",
      features: [
        "Gap-night auto-discounting algorithms",
        "Saturday-to-Saturday turnover rule enforcement",
        "Boat slip & water equipment liability waivers",
        "Dynamic high-season surge rate calendars",
      ],
      recommendedPms: "Hostaway / Track PMS",
      checkoutFlow: "Deposit + Automated Final Balance",
    },
    {
      id: "multi-unit",
      name: "Multi-Unit Urban Shortlets",
      category: "Boutique Hospitality",
      description:
        "Engineered for 5–50 unit aparthotels and urban buildings with room category selectors, corporate billing, and group reservation logic.",
      image: "/images/dubai_penthouse.jpg",
      features: [
        "Dynamic unit-type selector (Studio, 1BR, Penthouse)",
        "Automated corporate invoicing with VAT / Tax breakdowns",
        "Centralized multi-calendar availability grid",
        "Google Vacation Rentals meta-search feed integration",
      ],
      recommendedPms: "Guesty / Cloudbeds API",
      checkoutFlow: "Multi-Room & Corporate Card Routing",
    },
  ];

  return (
    <section className="py-24 bg-sand border-t border-[#E6E0D4] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-terracotta font-sans">
            Specialized Architectures
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#11261B] tracking-tight">
            Tailored to Every Luxury Archetype
          </h2>
          <p className="text-base text-[#55615C]">
            A glamping retreat has vastly different operational demands than an ultra-luxury beachfront
            villa. We design the checkout flow to match your exact guest profile.
          </p>
        </div>

        {/* Tab Selector on Mobile / Desktop */}
        <div className="flex overflow-x-auto no-scrollbar gap-2.5 pb-4 mb-8">
          {archetypes.map((arch, idx) => (
            <button
              key={arch.id}
              onClick={() => setActiveArchetype(idx)}
              className={`whitespace-nowrap px-5 py-3 rounded-2xl text-xs font-semibold tracking-wide transition-all duration-200 border ${
                activeArchetype === idx
                  ? "bg-forest text-alabaster border-forest shadow-md shadow-forest/10"
                  : "bg-alabaster text-[#4A534F] border-[#E3DDCF] hover:border-forest/40"
              }`}
            >
              {arch.name}
            </button>
          ))}
        </div>

        {/* Active Archetype Showcase Card */}
        {(() => {
          const current = archetypes[activeArchetype];
          return (
            <div className="rounded-3xl bg-alabaster border border-[#E6E0D4] overflow-hidden shadow-xl shadow-forest/5 grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Column: Image with Hover Zoom */}
              <div className="lg:col-span-7 relative h-80 lg:h-auto min-h-105 overflow-hidden group">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                  <span className="text-xs uppercase tracking-wider text-alabaster/80 font-mono">
                    {current.category}
                  </span>
                  <div className="font-serif text-2xl font-bold">{current.name}</div>
                </div>
              </div>

              {/* Right Column: Specifications & Feature Checklist */}
              <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="hidden lg:block text-xs font-semibold uppercase tracking-wider text-terracotta mb-1 font-mono">
                    {current.category}
                  </div>
                  <h3 className="hidden lg:block font-serif text-3xl font-medium text-[#11261B] mb-3">
                    {current.name}
                  </h3>
                  <p className="text-sm text-[#55615C] leading-relaxed mb-6 font-normal">
                    {current.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-forest">
                      Engineered Features:
                    </div>
                    {current.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#333E39]">
                        <div className="w-4 h-4 rounded-full bg-[#EBF5EF] flex items-center justify-center text-[#115E3F] shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#EAE4D7] space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#78857F]">Target PMS Stack:</span>
                    <span className="font-semibold text-forest font-mono">{current.recommendedPms}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#78857F]">Default Checkout Logic:</span>
                    <span className="font-semibold text-terracotta font-mono">{current.checkoutFlow}</span>
                  </div>

                  <a
                    href="#audit-request"
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-forest text-alabaster text-xs font-semibold tracking-wider uppercase hover:bg-forest-hover transition-colors"
                  >
                    <span>Audit My {current.name} Listing</span>
                    <ArrowRight className="w-3.5 h-3.5 text-terracotta" />
                  </a>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
