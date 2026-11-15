import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckCircle2, MessageCircle, ArrowRight, Calendar, Download } from "lucide-react";

const WHATSAPP_PROMO_URL =
  "https://wa.me/917068999555?text=" +
  encodeURIComponent(
    "Hi! I would like to inquire about the Children's Day Special Offer: FLAT 10% OFF on All Publishing Packages."
  );

export const ChildrensDaySection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="relative bg-gradient-to-br from-[#FFF9F1] via-[#FAF0FF] to-[#FFF5E9] rounded-2xl sm:rounded-3xl border-2 border-gold/30 shadow-editorial-hover p-6 sm:p-10 lg:p-12 overflow-hidden">
        {/* Subtle Decorative Background Blob */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Visual Flyer Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-paper border-2 border-gold/40 group">
              <Image
                src="/images/promotions/childrens-day-offer.jpg"
                alt="Children's Day Special Offer - Flat 10% OFF on all publishing packages"
                fill
                className="object-contain bg-white group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Offer Description Column */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-gold-dark text-xs font-sans font-bold tracking-wider uppercase self-start">
              <Sparkles className="w-3.5 h-3.5 text-gold fill-gold" />
              <span>Children&apos;s Day Special Campaign</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-tight">
              Let the Young Storyteller in You Become a Published Author!
            </h2>

            <p className="font-serif italic text-lg sm:text-xl text-gold font-medium leading-relaxed">
              “Flat 10% OFF on all publishing packages till 30th November.”
            </p>

            <p className="font-sans text-sm sm:text-base text-charcoal leading-relaxed">
              Every child has an authentic voice and imaginative worlds waiting to
              be shared. Celebrate Children&apos;s Day by giving your young writer
              the wings of professional publishing, personal editorial mentorship,
              and worldwide book distribution.
            </p>

            {/* Benefit Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-sans text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <span>Developmental manuscript mentorship</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-sans text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <span>Custom cover design &amp; typography</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-sans text-charcoal">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <span>Amazon &amp; Flipkart distribution</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-sans text-charcoal">
                <Calendar className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="font-semibold text-primary">Valid till 30th November</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-3">
              <a
                href={WHATSAPP_PROMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-sans font-bold text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Claim 10% Off on WhatsApp</span>
              </a>

              <a
                href="/downloads/read-pustak-publishing-brochure.pdf"
                download="Read-Pustak-Publishing-Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-white font-sans font-semibold text-sm hover:bg-primary-hover shadow-sm hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-gold" />
                <span>Download Leaflet (PDF)</span>
              </a>

              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-border text-primary font-sans font-semibold text-sm hover:border-gold hover:text-gold-dark transition-all duration-200 shadow-sm"
              >
                <span>Publishing Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

