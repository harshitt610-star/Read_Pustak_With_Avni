"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Sparkles, MessageCircle, Calendar, Download } from "lucide-react";

const WHATSAPP_PROMO_URL =
  "https://wa.me/917068999555?text=" +
  encodeURIComponent(
    "Hi! I would like to inquire about the Children's Day Special Offer: FLAT 10% OFF on All Publishing Packages."
  );

export const PromoPopupModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only show if not previously dismissed in this session
    try {
      const isDismissed = sessionStorage.getItem("read_pustak_promo_dismissed");
      if (!isDismissed) {
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 1400);
        return () => clearTimeout(timer);
      }
    } catch {
      // In case sessionStorage is blocked/disabled
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem("read_pustak_promo_dismissed", "true");
    } catch {
      // Ignore
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/70 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={closeModal}
    >
      <div
        className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-gold/40 max-w-md w-full max-h-[92vh] overflow-y-auto flex flex-col p-4 sm:p-6 gap-3.5 sm:gap-4 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          aria-label="Close promotion dialog"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-ivory-warm border border-border flex items-center justify-center text-charcoal hover:bg-gold hover:text-white transition-colors duration-200 z-10 shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Eyebrow Pill */}
        <div className="flex items-center gap-2 self-start bg-lavender px-3 py-1 rounded-full border border-primary/10">
          <Sparkles className="w-3.5 h-3.5 text-gold fill-gold" />
          <span className="text-xs font-sans font-bold tracking-wider text-primary uppercase">
            Limited-Time Special Offer
          </span>
        </div>

        {/* Title */}
        <h2
          id="promo-modal-title"
          className="font-serif text-2xl sm:text-3xl font-bold text-primary leading-tight tracking-tight pr-8"
        >
          Children&apos;s Day Special Offer
        </h2>

        {/* Promo Image */}
        <div className="relative aspect-square w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-paper border border-gold/30 bg-[#FFF9F1]">
          <Image
            src="/images/promotions/childrens-day-offer.jpg"
            alt="Children's Day Special Offer - Flat 10% OFF on all publishing packages till 30th November"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Offer Details Strip */}
        <div className="flex items-center justify-between text-xs sm:text-sm font-sans text-charcoal-muted bg-ivory-warm px-3.5 py-2 rounded-xl border border-border/80">
          <span className="font-semibold text-primary">Flat 10% OFF</span>
          <span className="inline-flex items-center gap-1 text-gold-dark font-medium">
            <Calendar className="w-3.5 h-3.5" />
            Valid Till 30th Nov
          </span>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col gap-2.5">
          <a
            href={WHATSAPP_PROMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-sans font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5 fill-white text-transparent" />
            <span>Claim 10% Off on WhatsApp</span>
          </a>

          <a
            href="/downloads/read-pustak-publishing-brochure.pdf"
            download="Read-Pustak-Publishing-Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-ivory-warm border border-gold/40 text-primary font-sans font-semibold text-xs sm:text-sm hover:bg-gold hover:text-white transition-all duration-200"
          >
            <Download className="w-4 h-4 text-gold group-hover:text-white" />
            <span>Download 10-Page Publishing Leaflet (PDF)</span>
          </a>
        </div>

        {/* Quick Phone Note */}
        <p className="text-center text-xs font-sans text-charcoal-subtle">
          Call or WhatsApp:{" "}
          <strong className="text-primary font-semibold">+91 7068999555</strong>
        </p>
      </div>
    </div>
  );
};

