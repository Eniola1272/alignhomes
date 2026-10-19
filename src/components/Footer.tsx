"use client";

import React from "react";
import Link from "next/link";
import { AlignhomesLogo } from "./AlignhomesLogo";
import { ArrowUp, ShieldCheck, Heart } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-obsidian text-alabaster pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <AlignhomesLogo inverted size="md" />
            </Link>
            <p className="text-sm text-white/60 max-w-sm leading-relaxed">
              Bespoke direct-booking engineering and custom PMS integrations for luxury vacation rentals
              and boutique hospitality portfolios worldwide.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-wealth font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-wealth animate-pulse" />
              <span>All Systems Operational • 99.99% Uptime</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-terracotta">
              Architecture
            </div>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#roi-calculator" className="hover:text-white transition-colors">
                  OTA Bleed Calculator
                </a>
              </li>
              <li>
                <a href="#bento-architecture" className="hover:text-white transition-colors">
                  iCal & PMS Sync Engine
                </a>
              </li>
              <li>
                <a href="#bento-architecture" className="hover:text-white transition-colors">
                  Stripe Pre-Auth Holds
                </a>
              </li>
              <li>
                <a href="#bento-architecture" className="hover:text-white transition-colors">
                  Split-Payment Logic
                </a>
              </li>
            </ul>
          </div>

          {/* Case Studies */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-terracotta">
              Case Studies
            </div>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  CC Stays (South Florida)
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Silosuites (Wilderness)
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Casa Prive (Dubai)
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Direct GMV Metrics
                </a>
              </li>
            </ul>
          </div>

          {/* Integrations */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-terracotta">
              Supported Ecosystems
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              Certified custom integrations with Hostaway, Guesty, Hospitable, OwnerRez, Stripe Elements,
              and Google Vacation Rentals.
            </p>
            <div className="pt-1">
              <a
                href="#audit-request"
                className="inline-flex items-center gap-1.5 text-xs text-alabaster underline decoration-terracotta decoration-2 underline-offset-4 hover:text-terracotta transition-colors"
              >
                Schedule an Architecture Audit →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © 2026 Alignhomes Inc. All rights reserved. Built for luxury hospitality.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white/80 cursor-pointer">Security Architecture</span>
            <span className="hover:text-white/80 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white/80 cursor-pointer">Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
