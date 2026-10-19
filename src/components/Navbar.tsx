"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AlignhomesLogo } from "./AlignhomesLogo";
import { ArrowRight, Menu, X, Sparkles, Calculator } from "lucide-react";

interface NavbarProps {
  onOpenAuditModal?: () => void;
}

export function Navbar({ onOpenAuditModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "The ROI Calculator", href: "/calculator", isNew: true },
    { name: "How It Works", href: "/#bento-architecture" },
    { name: "Case Studies", href: "/#case-studies" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "OTA vs Direct", href: "/#pms-integrations" },
    { name: "FAQ", href: "/#faq" },
  ];

  const handleAuditClick = (e: React.MouseEvent) => {
    if (onOpenAuditModal) {
      e.preventDefault();
      onOpenAuditModal();
    } else {
      const el = document.getElementById("audit-request");
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-alabaster/90 backdrop-blur-md border-b border-[#E7E2D8]/80 py-3.5 shadow-xs shadow-forest/5"
          : "bg-alabaster/60 backdrop-blur-sm border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center">
          <AlignhomesLogo size="md" />
        </Link>

        {/* Center Desktop Links */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-[#4A534F]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative transition-colors duration-200 hover:text-forest hover:font-semibold py-1 group flex items-center gap-1.5"
            >
              <span>{link.name}</span>
              {link.isNew && (
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-[#FAF0EC] text-[#A34322] border border-[#EBC8BA]">
                  Calculator
                </span>
              )}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terracotta transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={handleAuditClick}
            type="button"
            className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-forest text-alabaster text-xs font-semibold tracking-wide uppercase shadow-md shadow-forest/15 hover:bg-forest-hover hover:shadow-lg transition-all duration-200"
          >
            <span>Audit My Listing</span>
            <div className="w-5 h-5 rounded-full bg-alabaster/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-terracotta">
              <ArrowRight className="w-3 h-3 text-alabaster" />
            </div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-forest hover:bg-sand transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-alabaster border-b border-[#E7E2D8] px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#1E2321] hover:text-forest py-1 border-b border-sand flex items-center justify-between"
              >
                <span>{link.name}</span>
                {link.isNew && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#FAF0EC] text-[#A34322] border border-[#EBC8BA]">
                    Free Tool
                  </span>
                )}
              </Link>
            ))}
          </div>
          <div className="pt-2">
            <button
              onClick={handleAuditClick}
              type="button"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-forest text-alabaster text-xs font-semibold tracking-wider uppercase shadow-md"
            >
              <span>Audit My Listing</span>
              <ArrowRight className="w-4 h-4 text-terracotta" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
