"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, X, Clock, Mail } from "lucide-react";

export const PublishWithUsButton: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        type="button"
        className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-primary text-white font-sans text-sm font-semibold hover:bg-primary-hover shadow-editorial hover:shadow-editorial-hover transition-all border border-gold/50 cursor-pointer"
        aria-label="Publish with Us - To be continued.."
      >
        <Sparkles className="w-4 h-4 text-gold group-hover:rotate-12 transition-transform" />
        <span className="font-serif text-base tracking-tight">Publish with Us</span>
        <span className="px-2.5 py-0.5 rounded-full bg-gold/25 text-gold text-xs font-sans font-bold uppercase tracking-wider border border-gold/40 group-hover:bg-gold group-hover:text-primary transition-colors">
          To be continued..
        </span>
      </button>

      {/* Modal Notice */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C003C]/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-lg rounded-2xl bg-[#FFF9F1] border-2 border-gold/60 p-6 sm:p-8 shadow-[0_25px_50px_rgba(53,16,95,0.35)] flex flex-col gap-5 text-left"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg text-charcoal-muted hover:text-primary hover:bg-lavender/60 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-lavender flex items-center justify-center text-primary border border-gold/40">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-gold">
                  Digital Portal In Development
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                  Publish with Us
                </h3>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-border flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 text-xs font-sans font-bold text-gold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span>Status: To be continued..</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-charcoal leading-relaxed">
                Our technical team is actively building the dedicated digital submission and manuscript tracking portal. Soon, young authors and parents will be able to submit drafts, track editorial feedback, and participate directly through our upcoming web and mobile application.
              </p>
            </div>

            <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              In the meantime, our editorial board welcomes manuscript inquiries and story ideas via direct correspondence.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                onClick={() => setModalOpen(false)}
                className="flex-1 py-3 px-4 rounded-xl bg-primary text-white font-sans text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary-hover shadow-sm border border-gold/40 transition-colors"
              >
                <Mail className="w-4 h-4 text-gold" />
                <span>Send Manuscript Inquiry</span>
              </Link>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="py-3 px-5 rounded-xl bg-white text-charcoal font-sans text-sm font-semibold hover:bg-lavender/40 border border-border transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
