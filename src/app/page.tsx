"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ReceiptComparison } from "@/components/ReceiptComparison";
import { BentoGrid } from "@/components/BentoGrid";
import { CaseStudies } from "@/components/CaseStudies";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { ArchetypesShowcase } from "@/components/ArchetypesShowcase";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQSection } from "@/components/FAQSection";
import { AuditSection } from "@/components/AuditSection";
import { Footer } from "@/components/Footer";
import { AuditModal } from "@/components/AuditModal";
import { BookingDemoModal } from "@/components/BookingDemoModal";
import { Calculator, ArrowRight, TrendingUp } from "lucide-react";

export default function LandingPage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#1E2321] selection:bg-[#1B3B2B] selection:text-[#FAF8F5]">
      {/* 1. Sticky Glassmorphic Navigation */}
      <Navbar onOpenAuditModal={() => setIsAuditModalOpen(true)} />

      {/* Main Page Flow */}
      <main>
        {/* 2. Editorial Hero with Luxury Property Showcase */}
        <HeroSection
          onAuditClick={() => setIsAuditModalOpen(true)}
          onDemoClick={() => setIsDemoModalOpen(true)}
          onExploreBuildsClick={() => {
            const el = document.getElementById("case-studies");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Dedicated Calculator Teaser Ribbon */}
        <div className="border-y border-[#E6E0D4] bg-[#F2EFE9] py-5">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-9 h-9 rounded-xl bg-[#1B3B2B] text-white flex items-center justify-center shrink-0">
                <Calculator className="w-4 h-4 text-[#C87D55]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#11261B]">
                  Interactive Host Financial Model
                </span>
                <p className="text-xs text-[#55615C]">
                  Calculate your exact annual Airbnb & Vrbo fee bleed based on your ADR and nights booked.
                </p>
              </div>
            </div>

            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF8F5] border border-[#DCD5C8] text-[#1B3B2B] text-xs font-semibold uppercase tracking-wider hover:bg-[#1B3B2B] hover:text-[#FAF8F5] transition-all shadow-xs group shrink-0"
            >
              <span>Launch Live Calculator</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C87D55] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 3. Side-by-Side Guest & Host Receipt Economics Simulator */}
        <ReceiptComparison />

        {/* 4. The "Engineering Over Templates" Bento Grid */}
        <BentoGrid />

        {/* 5. Curated Case Studies (Real-World Proof) */}
        <CaseStudies />

        {/* 6. Luxury Testimonials Carousel */}
        <TestimonialsCarousel />

        {/* 7. Property Archetypes Showcase */}
        <ArchetypesShowcase />

        {/* 8. "The OTA Trap vs. The Alignhomes Asset" Comparison Table */}
        <ComparisonTable />

        {/* 9. Frequently Asked Questions & Objection Handling */}
        <FAQSection />

        {/* 10. High-Converting Footer & Audit Request */}
        <AuditSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Instant Audit Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />

      {/* Interactive Guest Experience Demo Modal */}
      <BookingDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
}
