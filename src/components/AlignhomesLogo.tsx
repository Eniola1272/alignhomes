import React from "react";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon";
  inverted?: boolean;
  size?: "sm" | "md" | "lg";
}

export function AlignhomesLogo({
  className = "",
  variant = "full",
  inverted = false,
  size = "md",
}: LogoProps) {
  const iconHeight = size === "sm" ? 28 : size === "lg" ? 44 : 36;
  const primaryColor = inverted ? "#FAF8F5" : "#1B3B2B";
  const terracottaColor = "#C87D55";

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Geometric SVG Monogram */}
      <svg
        height={iconHeight}
        viewBox="0 0 100 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-105"
      >
        {/* Left 'A' Chevron Frame & Crossbar */}
        <path
          d="M 52 4 L 14 84 L 34 84 L 44 63 L 56 63 L 56 48 L 51.5 48 L 52 32 L 52 4 Z"
          fill={primaryColor}
        />
        
        {/* Right Slanted Terracotta Gold Parallel Beams */}
        <path
          d="M 57 32 L 72 63 L 83 63 L 68 32 L 57 32 Z"
          fill={terracottaColor}
        />
        <path
          d="M 72 32 L 87 63 L 98 63 L 83 32 L 72 32 Z"
          fill={terracottaColor}
        />
      </svg>

      {variant === "full" && (
        <span
          className={`font-sans tracking-tight font-medium ${
            size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl"
          } ${inverted ? "text-alabaster" : "text-forest"}`}
          style={{ letterSpacing: "-0.03em" }}
        >
          Alignhomes
        </span>
      )}
    </div>
  );
}
