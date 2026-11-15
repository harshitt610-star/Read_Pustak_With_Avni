"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, X } from "lucide-react";

const WHATSAPP_PROMO_URL =
  "https://wa.me/917068999555?text=" +
  encodeURIComponent(
    "Hi! I would like to inquire about the Children's Day Special Offer: FLAT 10% OFF on All Publishing Packages."
  );

export const TopPromoBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("read_pustak_top_banner_dismissed")) {
        setIsVisible(false);
      }
    } catch {
      // Ignore
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      sessionStorage.setItem("read_pustak_top_banner_dismissed", "true");
    } catch {
      // Ignore
    }
  };

  if (!isVisible) return null;

  return (
    <div className="relative z-40 bg-gradient-to-r from-[#1C003C] via-[#35105F] to-[#1C003C] text-white border-b border-gold/30 shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-1.5 sm:py-2.5 flex items-center justify-between gap-2 text-[11px] sm:text-xs md:text-sm">
        <a
          href={WHATSAPP_PROMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 text-center group hover:opacity-95 transition-opacity"
        >
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold/20 text-gold-light border border-gold/40 text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-gold fill-gold" />
            Limited Offer
          </span>

          <span className="font-sans font-medium text-ivory">
            <strong className="text-gold font-bold">Children&apos;s Day:</strong>{" "}
            <span className="text-white font-semibold">FLAT 10% OFF</span> on Publishing Packages!
            <span className="hidden md:inline text-ivory/80"> (Valid till 30th Nov)</span>
          </span>

          <span className="inline-flex items-center gap-1 font-sans font-bold text-gold group-hover:translate-x-0.5 transition-transform underline decoration-gold/60 underline-offset-4 ml-1 shrink-0">
            <span>Claim</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </span>
        </a>

        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          aria-label="Dismiss announcement banner"
          className="p-1 rounded-full text-ivory/60 hover:text-white hover:bg-white/10 transition-colors shrink-0"
        >
          <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
};

