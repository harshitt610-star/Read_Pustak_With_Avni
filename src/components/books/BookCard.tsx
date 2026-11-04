"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Book } from "@/types";
import {
  BookOpen,
  Sparkles,
  ChevronRight,
  X,
  CheckCircle2,
  ExternalLink,
  ShoppingBag,
} from "lucide-react";

interface BookCardProps {
  book: Book;
  featured?: boolean;
}

export const BookCard: React.FC<BookCardProps> = ({ book, featured = false }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <article
        id={book.id}
        className={`bg-white rounded-2xl border border-border/80 shadow-editorial hover:shadow-editorial-hover transition-all duration-300 flex flex-col overflow-hidden group ${
          featured ? "ring-2 ring-gold/40" : ""
        }`}
      >
        {/* Book Jacket Cover Display */}
        <div className="relative aspect-[3/4] w-full bg-[#FAF0FF] overflow-hidden flex items-center justify-center p-6 border-b border-border/40">
          <div className="relative w-full h-full max-h-[320px] shadow-[0_12px_28px_rgba(53,16,95,0.18)] rounded-md overflow-hidden transition-transform duration-500 group-hover:scale-105 border border-primary/10 bg-white">
            <Image
              src={book.coverImage}
              alt={book.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="absolute top-4 right-4 flex flex-col items-end gap-1.5">
            <span className="px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-gold font-sans text-xs font-semibold shadow-xs">
              {book.ageRange}
            </span>
            {book.publishedYear && (
              <span className="px-2.5 py-0.5 rounded-full bg-gold text-primary font-sans text-[11px] font-bold shadow-xs">
                {book.publishedYear}
              </span>
            )}
          </div>
        </div>

        {/* Content Container */}
        <div className="p-6 flex-1 flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs font-sans text-gold font-semibold uppercase tracking-wider">
              <span>By {book.author}</span>
              {book.publishedYear && (
                <span className="text-charcoal-muted font-normal lowercase">
                  pub. {book.publishedYear}
                </span>
              )}
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary group-hover:text-primary-hover transition-colors leading-snug">
              {book.title}
            </h3>

            {book.subtitle && (
              <p className="font-serif italic text-sm text-charcoal-muted leading-snug">
                {book.subtitle}
              </p>
            )}

            <p className="font-sans text-sm text-charcoal leading-relaxed pt-1">
              {book.summary}
            </p>
          </div>

          {/* Themes Tags & Actions */}
          <div className="flex flex-col gap-3 pt-3 border-t border-border/60">
            <div className="flex flex-wrap gap-1.5">
              {book.themes.slice(0, 3).map((theme) => (
                <span
                  key={theme}
                  className="px-2.5 py-0.5 rounded-full bg-lavender/60 text-primary text-[11px] font-sans font-medium"
                >
                  {theme}
                </span>
              ))}
            </div>

            {/* Purchase Direct Links (Amazon & Flipkart) */}
            {(book.amazonUrl || book.flipkartUrl) && (
              <div className="grid grid-cols-2 gap-2 pt-1">
                {book.amazonUrl && (
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-lg bg-[#FF9900]/10 hover:bg-[#FF9900]/20 text-[#8C4A00] font-sans text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-[#FF9900]/30"
                  >
                    <span>Amazon</span>
                    <ExternalLink className="w-3 h-3 text-[#8C4A00]" />
                  </a>
                )}
                {book.flipkartUrl && (
                  <a
                    href={book.flipkartUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`py-2 px-3 rounded-lg bg-[#2874F0]/10 hover:bg-[#2874F0]/20 text-[#1250B8] font-sans text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-[#2874F0]/30 ${
                      !book.amazonUrl ? "col-span-2" : ""
                    }`}
                  >
                    <span>Flipkart</span>
                    <ExternalLink className="w-3 h-3 text-[#1250B8]" />
                  </a>
                )}
              </div>
            )}

            {/* Read Details Action */}
            <button
              onClick={() => setModalOpen(true)}
              className="w-full py-2.5 px-4 rounded-lg bg-surface-container hover:bg-lavender text-primary font-sans text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all border border-primary/10 hover:border-primary/20"
            >
              <BookOpen className="w-4 h-4 text-gold" />
              <span>Read Synopsis &amp; Themes</span>
              <ChevronRight className="w-4 h-4 text-charcoal-muted group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </article>

      {/* Modal View for Book Synopsis */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FFF9F1] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gold/30 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-lavender text-charcoal-muted hover:text-primary transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5 pr-8">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Published by Read Pustak Publications • {book.publishedYear}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                  {book.title}
                </h3>
                {book.subtitle && (
                  <p className="font-serif italic text-base text-gold font-medium">
                    {book.subtitle}
                  </p>
                )}
                <span className="text-xs text-charcoal-muted">
                  Authored by {book.author} • {book.ageRange}
                </span>
              </div>

              <div className="border-t border-b border-border/80 py-4 flex flex-col gap-3">
                <h4 className="font-serif text-base font-semibold text-primary">
                  Editorial Overview
                </h4>
                <p className="font-sans text-sm sm:text-base text-charcoal leading-relaxed">
                  {book.fullDescription}
                </p>
              </div>

              {book.features && (
                <div className="flex flex-col gap-2.5">
                  <h4 className="font-serif text-base font-semibold text-primary">
                    Literary Highlights
                  </h4>
                  <ul className="flex flex-col gap-2 font-sans text-xs sm:text-sm text-charcoal-muted">
                    {book.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Order Online Buttons inside Modal */}
              {(book.amazonUrl || book.flipkartUrl) && (
                <div className="p-4 rounded-xl bg-ivory-warm border border-gold/30 flex flex-col gap-2.5">
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-primary">
                    Get Your Copy Online:
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {book.amazonUrl && (
                      <a
                        href={book.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-5 rounded-lg bg-[#FF9900] text-black font-sans text-xs font-bold flex items-center gap-2 hover:bg-[#e68a00] shadow-xs transition-colors"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Order on Amazon</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {book.flipkartUrl && (
                      <a
                        href={book.flipkartUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-5 rounded-lg bg-[#2874F0] text-white font-sans text-xs font-bold flex items-center gap-2 hover:bg-[#1a5bc7] shadow-xs transition-colors"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Order on Flipkart</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 pt-1">
                {book.themes.map((theme) => (
                  <span
                    key={theme}
                    className="px-3 py-1 rounded-full bg-lavender text-primary text-xs font-semibold"
                  >
                    #{theme}
                  </span>
                ))}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2.5 rounded-lg bg-primary text-white font-sans text-sm font-semibold hover:bg-primary-hover transition-colors"
                >
                  Close Synopsis
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
