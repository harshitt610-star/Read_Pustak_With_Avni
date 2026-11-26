"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, X, Gift } from "lucide-react";

export const TopPromoBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    try {
        if (sessionStorage.getItem("read_pustak_anthology_banner_dismissed")) {
          setIsVisible(false);
        }
      } catch {
        // Ignore
      }
    }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      sessionStorage.setItem("read_pustak_anthology_banner_dismissed", "true");
    } catch {
      // Ignore
    }
  };

  if (!isVisible) return null;

  return (
    <div className="relative z-40 bg-gradient-to-r from-[#1C003C] via-[#35105F] to-[#1C003C] text-white border-b border-gold/40 shadow-md">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-1.5 sm:py-2 flex items-center justify-between gap-2 text-[11px] sm:text-xs md:text-sm">
            <Link
              href="/#little-ink-big-dreams"
              className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2.5 text-center group hover:opacity-95 transition-opacity"
            >
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gold text-primary border border-white/40 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider shrink-0 shadow-xs">
                  <Sparkles className="w-3 h-3 text-primary fill-primary" />
                  <span>Call for Entries</span>
                </span>

                  <span className="font-sans font-medium text-ivory truncate sm:overflow-visible">
                    <strong className="text-gold font-bold">Little Ink, Big Dreams:</strong>{" "}
                    <span className="text-white font-semibold">100% FREE</span> Children&apos;s Anthology
                    <span className="hidden md:inline text-ivory/80"> (Last Date: 12th Dec 2026)</span>
                  </span>

                  <span className="inline-flex items-center gap-1 font-sans font-bold text-gold group-hover:translate-x-0.5 transition-transform underline decoration-gold/60 underline-offset-4 ml-1 shrink-0">
                    <span>Submit Entry</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </span>
            </Link>

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


