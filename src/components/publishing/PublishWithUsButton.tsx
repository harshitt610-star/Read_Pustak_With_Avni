"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, X, BookOpen, Mail, CheckCircle2, MessageCircle, Download } from "lucide-react";

export const PublishWithUsButton: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        type="button"
        className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-primary text-white font-sans text-sm font-semibold hover:bg-primary-hover shadow-editorial hover:shadow-editorial-hover transition-all border border-gold/50 cursor-pointer"
        aria-label="Publish Your Book - Affordable ₹1,999 Plan"
      >
        <Sparkles className="w-4 h-4 text-gold group-hover:rotate-12 transition-transform" />
        <span className="font-serif text-base tracking-tight">Publish with Us</span>
        <span className="px-2.5 py-0.5 rounded-full bg-gold/25 text-gold text-xs font-sans font-bold uppercase tracking-wider border border-gold/40 group-hover:bg-gold group-hover:text-primary transition-colors">
          Plan: ₹1,999
        </span>
      </button>

      {/* Modal Notice */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#1C003C]/75 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
          <div
            className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#FFF9F1] border-2 border-gold/60 p-5 sm:p-7 shadow-[0_25px_50px_rgba(53,16,95,0.35)] flex flex-col gap-4 text-left"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-charcoal-muted hover:text-primary hover:bg-lavender/60 transition-colors z-20"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Poster Image Preview */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gold/40 shadow-sm bg-white">
              <Image
                src="/images/publishing/publishing-plan-1999.jpg"
                alt="Basic Affordable Publishing Plan ₹1,999 - Read Pustak with Avni"
                fill
                sizes="(max-width: 640px) 100vw, 600px"
                className="object-contain"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-sans font-bold uppercase tracking-widest text-gold">
                  Basic Affordable Publishing Plan
                </span>
                <span className="font-serif text-lg sm:text-xl font-extrabold text-primary">
                  ₹1,999 Only
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary leading-tight">
                Turn Your Manuscript into a Published Book!
              </h3>
              <p className="font-sans text-xs text-charcoal leading-relaxed">
                An affordable publishing opportunity for aspiring writers, students, and first-time authors. Includes full ISBN allocation, paperback printing, and 2 complimentary author copies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-charcoal bg-white/80 p-3.5 rounded-2xl border border-border/80">
              {[
                "ISBN and barcode allocation",
                "Paperback book publishing (up to 120 pages)",
                "Full-colour professional basic cover",
                "2 Complimentary author copies",
                "Digital publishing certificate",
                "Author & book details setup",
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5 pt-2">
              <a
                href={
                  "https://wa.me/917068999555?text=" +
                  encodeURIComponent(
                    "Hello Read Pustak with Avni, I want to publish my book with the Basic Affordable Publishing Plan for Rs 1,999. Please guide me on the next steps!"
                  )
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[200px] py-3 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-sans text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:scale-102 transition-transform"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Publish for ₹1,999 on WhatsApp</span>
              </a>

              <Link
                href="/contact"
                onClick={() => setModalOpen(false)}
                className="py-3 px-4 rounded-xl bg-primary text-white font-sans text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary-hover shadow-xs border border-gold/40 transition-colors"
              >
                <Mail className="w-4 h-4 text-gold" />
                <span>Contact Form</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

