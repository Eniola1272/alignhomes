"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  ShieldCheck,
  TrendingUp,
  Building,
  Sparkles,
} from "lucide-react";

interface Testimonial {
  id: string;
  author: string;
  role: string;
  property: string;
  location: string;
  rating: number;
  headline: string;
  quote: string;
  metric: { value: string; label: string };
  image: string;
}

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: "cc-stays",
      author: "Camila & David Ramos",
      role: "Portfolio Directors",
      property: "CC Stays (9 Luxury Doors)",
      location: "Palm Beach & Blue Ridge Mountains",
      rating: 5,
      headline: "We saved $142,000 in Airbnb fees in our first 12 months.",
      quote:
        "Before Alignhomes, we were terrified of double-bookings if we took direct reservations. The automated calendar sync is 100% bulletproof. Last month, a single 12-night family reservation came through our direct site for $24,000—we kept every dollar instead of losing $3,600 to Airbnb platform fees.",
      metric: { value: "$142,000+", label: "Commission Reclaimed" },
      image: "/images/hero_villa.jpg",
    },
    {
      id: "silosuites",
      author: "Marcus & Elena Lindqvist",
      role: "Architects & Owners",
      property: "Silosuites Retreat ($750/night)",
      location: "Pacific Northwest Wilderness",
      rating: 5,
      headline: "84% of our guests now book directly from our Instagram.",
      quote:
        "We had 45,000 Instagram followers but were sending every single one to Airbnb and losing 15% on each stay. Alignhomes built us a custom site that loads in under a second on mobile. The 50/50 split payment and Stripe security hold made our guests feel as secure as booking a 5-star resort.",
      metric: { value: "84% Direct", label: "Direct Booking Ratio" },
      image: "/images/silo_cabin.jpg",
    },
    {
      id: "meridian",
      author: "Julian Thorne",
      role: "Managing Partner",
      property: "Meridian Luxury Portfolio ($2,200/night)",
      location: "Miami & Aspen Ski Chalets",
      rating: 5,
      headline: "The credit card damage hold gives us real peace of mind.",
      quote:
        "Airbnb’s AirCover took 6 weeks to deny our last damage claim when a platform guest ruined a custom designer table. With Alignhomes, our website holds an automated $3,000 pre-authorization on the guest's Amex before they even get the keycode. It has completely eliminated awkward disputes.",
      metric: { value: "100% Hold Rate", label: "Damage Deposit Coverage" },
      image: "/images/coastal_retreat.jpg",
    },
    {
      id: "casaprive",
      author: "Tariq Al-Mansoor",
      role: "Director of Hospitality",
      property: "Casa Prive Penthouse Collection",
      location: "Dubai Marina & Palm Jumeirah",
      rating: 5,
      headline: "Our business valuation soared because we own our guest list.",
      quote:
        "When you rely 100% on Airbnb, you don’t own a single guest phone number or email. When we met with hospitality investors, our Alignhomes direct CRM of 800+ high-net-worth repeat guests increased our portfolio valuation by an estimated $850,000.",
      metric: { value: "1.8x Multiple", label: "Exit Valuation Boost" },
      image: "/images/dubai_penthouse.jpg",
    },
  ];

  // Auto rotate every 6 seconds unless user pauses
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-24 bg-alabaster relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-alabaster border border-[#DDD6C8] text-xs font-semibold tracking-wider uppercase text-forest">
              <Sparkles className="w-3.5 h-3.5 text-terracotta" />
              <span>Verified Host Stories</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#11261B] tracking-tight">
              Trusted by Leading Luxury Hosts & Operators
            </h2>
            <p className="text-base text-[#55615C]">
              Discover how owners reclaimed six-figure sums in platform commissions and built independent
              hospitality brands.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-alabaster border border-[#DCD5C8] text-forest hover:bg-sand transition-all shadow-xs"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-forest text-white hover:bg-forest-hover transition-all shadow-md shadow-forest/15"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5 text-terracotta" />
            </button>
          </div>
        </div>

        {/* Active Testimonial Card */}
        <div className="rounded-3xl bg-sand border border-[#E6E0D4] p-8 sm:p-12 lg:p-14 shadow-xl shadow-forest/5 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Image & Property Snapshot */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-[#DDD6C8] shadow-md bg-[#E2DBD0]">
              <Image
                src={current.image}
                alt={current.property}
                fill
                className="object-cover transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Location Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-alabaster/90 backdrop-blur-md text-[11px] font-semibold text-forest border border-white/60">
                {current.location}
              </div>

              {/* Property Tag at bottom */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs uppercase tracking-wider text-white/80 font-mono">
                  {current.property}
                </div>
                <div className="font-serif text-lg font-bold">{current.author}</div>
              </div>
            </div>

            {/* Float Highlight Badge */}
            <div className="absolute -bottom-4 right-4 sm:-bottom-5 sm:right-6 px-4 py-2.5 rounded-2xl bg-forest text-white border border-white/10 shadow-lg text-center">
              <div className="font-serif text-xl sm:text-2xl font-bold text-alabaster">
                {current.metric.value}
              </div>
              <div className="text-[10px] text-white/70 font-sans uppercase tracking-wider">
                {current.metric.label}
              </div>
            </div>
          </div>

          {/* Right Column: Quote & Testimonial Details */}
          <div className="lg:col-span-7 space-y-6">
            {/* Star Rating */}
            <div className="flex items-center gap-1 text-terracotta">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-xs font-semibold text-forest ml-2 font-mono">
                5.0 Verified Host
              </span>
            </div>

            {/* Big Headline */}
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-[#11261B] leading-tight">
              "{current.headline}"
            </h3>

            {/* Full Quote */}
            <p className="text-sm sm:text-base text-[#4A534F] leading-relaxed font-normal">
              {current.quote}
            </p>

            {/* Author Footer */}
            <div className="pt-4 border-t border-[#E3DDCF] flex items-center justify-between">
              <div>
                <div className="font-semibold text-base text-[#11261B]">{current.author}</div>
                <div className="text-xs text-[#707D77]">{current.role} • {current.property}</div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF5EF] border border-[#BFDFCD] text-[11px] font-medium text-[#115E3F]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Client</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-8 bg-forest"
                  : "w-2 bg-[#DCD5C8] hover:bg-terracotta"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
