"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  X,
  Calendar,
  MapPin,
  Award,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { glimpsesData, GlimpseItem } from "@/data/glimpses";

export function GlimpsesGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const ITEMS_PER_PAGE = 6;

  // Filter items by category
  const filteredItems = glimpsesData.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  // Calculate items to show
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const displayedItems = isExpanded
    ? filteredItems
    : filteredItems.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      );

  // Keyboard navigation for lightbox
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % glimpsesData.length : null
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + glimpsesData.length) % glimpsesData.length
            : null
        );
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const categories = [
    { id: "all", label: "All Moments", count: glimpsesData.length },
    {
      id: "srmu",
      label: "SRMU Workshop",
      count: glimpsesData.filter((g) => g.category === "srmu").length,
    },
    {
      id: "giving",
      label: "Community Giving",
      count: glimpsesData.filter((g) => g.category === "giving").length,
    },
    {
      id: "circles",
      label: "Reading Circles",
      count: glimpsesData.filter((g) => g.category === "circles").length,
    },
  ];

  const posterGlimpse = glimpsesData.find((g) => g.id === "srmu-poster")!;

  return (
    <div className="flex flex-col gap-10">
      {/* ========================================================= */}
      {/* FEATURED WORKSHOP SPOTLIGHT — SRMU & Apni Pathshaala     */}
      {/* ========================================================= */}
      <div className="rounded-2xl border-2 border-gold/40 bg-gradient-to-br from-[#FFF9F1] via-[#FAF0FF]/70 to-[#FFF9F1] p-6 sm:p-8 lg:p-10 shadow-editorial relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Official Poster */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onClick={() => {
                const idx = glimpsesData.findIndex((g) => g.id === "srmu-poster");
                setLightboxIndex(idx);
              }}
              className="relative w-full max-w-sm aspect-[1/1.45] rounded-xl overflow-hidden shadow-editorial-hover border-2 border-gold/50 cursor-pointer group bg-charcoal"
            >
              <Image
                src={posterGlimpse.image}
                alt="Shri Ramswaroop Memorial University Authors Workshop Official Poster"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain bg-white group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 rounded-full bg-white/95 text-primary text-xs font-semibold shadow-md flex items-center gap-1.5 border border-gold/40">
                  <ExternalLink className="w-3.5 h-3.5 text-gold" />
                  <span>Click to Enlarge Poster</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Workshop Details */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-gold/15 text-primary text-xs font-semibold uppercase tracking-wider border border-gold/40 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-gold" />
                Featured University Collaboration
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-charcoal-muted text-xs font-medium border border-border">
                Apni Pathshaala
              </span>
            </div>

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                Authors&apos; Workshop on Read Pustak With Avni
              </h3>
              <p className="font-sans text-sm text-charcoal font-medium mt-1">
                Organized by <strong>Shri Ramswaroop Memorial University (SRMU)</strong> &amp; <strong>Apni Pathshaala</strong> in collaboration with <strong>Avni Chaturvedi</strong>
              </p>
            </div>

            {/* Event Meta Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-border">
                <Calendar className="w-4 h-4 text-gold shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-primary">Date &amp; Time</p>
                  <p className="text-charcoal-muted">17 October 2026 • 11:00 AM – 1:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 border border-border">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-primary">Venue</p>
                  <p className="text-charcoal-muted">Apni Pathshaala Campus</p>
                </div>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-charcoal leading-relaxed">
              An immersive literary initiative empowering underprivileged young students to discover the joy of books. Avni led hands-on storytelling, creative writing exercises, and distributed stationery kits to foster active imagination and daily reading habits.
            </p>

            {/* Faculty & Leadership Credits */}
            <div className="p-3.5 rounded-xl bg-white/60 border border-gold/20 text-xs font-sans text-charcoal-muted flex flex-col gap-1">
              <p className="font-semibold text-primary">
                University Leadership &amp; Coordinators:
              </p>
              <p>
                Dr. Veena Singh (Club Coordinator), Dr. Afiya Bano (Faculty Incharge), Ms. Laxmi Singh, Mrs. Aparna Srivastava, Mrs. Asha Verma, Ms. Nidhi Tiwari (Faculty Coordinators), Akash Mishra (Student Coordinator).
              </p>
            </div>

            {/* Core Values Badges */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                "Curiosity",
                "Imagination",
                "Ideas",
                "Creativity",
                "Stories",
                "Kindness",
              ].map((val) => (
                <span
                  key={val}
                  className="px-2.5 py-0.5 rounded-md bg-white border border-border text-[11px] font-sans font-medium text-primary flex items-center gap-1"
                >
                  <Sparkles className="w-2.5 h-2.5 text-gold" />
                  {val}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* GLIMPSES GALLERY HEADER & CATEGORY TABS                   */}
      {/* ========================================================= */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lavender text-primary text-xs font-semibold tracking-wider uppercase mb-1">
              <Camera className="w-3.5 h-3.5 text-gold" />
              <span>Glimpses in Action</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary">
              Moments from Our Workshops &amp; Community Giving
            </h3>
          </div>
          <p className="font-sans text-xs sm:text-sm text-charcoal-muted max-w-md">
            Click on any photo to view in full resolution and browse the complete story behind each moment.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 border-b border-border/80 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setCurrentPage(1);
                setIsExpanded(false);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? "bg-primary text-white shadow-xs"
                  : "bg-ivory-warm text-charcoal-muted hover:bg-lavender hover:text-primary border border-border"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeCategory === cat.id
                    ? "bg-gold text-primary font-bold"
                    : "bg-white/80 text-charcoal-muted"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* PHOTO CARDS GRID                                         */}
      {/* ========================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems.map((item) => {
          const globalIndex = glimpsesData.findIndex((g) => g.id === item.id);
          return (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(globalIndex)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-border hover:border-gold/60 bg-white shadow-xs hover:shadow-editorial transition-all flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Pill Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/95 text-primary text-[11px] font-semibold uppercase tracking-wider backdrop-blur-sm border border-gold/30">
                    {item.categoryLabel}
                  </span>
                </div>

                {item.date && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/80 text-white text-[10px] font-medium backdrop-blur-sm">
                      {item.date}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4 sm:p-5 flex flex-col gap-1.5 flex-1 justify-between bg-ivory-warm/60">
                <div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-primary group-hover:text-gold transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-charcoal/80 leading-relaxed line-clamp-2 mt-1">
                    {item.caption}
                  </p>
                </div>
                <div className="pt-2 flex items-center justify-between text-[11px] font-sans font-medium text-gold">
                  <span>View Details &amp; Full Photo</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* BOTTOM CONTROLS: EXPLORE MORE PHOTOS / NEXT / PAGINATION  */}
      {/* ========================================================= */}
      <div className="pt-4 pb-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border">
        {/* Count Indicator */}
        <p className="font-sans text-xs text-charcoal-muted">
          Showing{" "}
          <strong className="text-primary">{displayedItems.length}</strong> of{" "}
          <strong className="text-primary">{filteredItems.length}</strong> moments
          {activeCategory !== "all" ? ` in ${activeCategory}` : ""}
        </p>

        {/* Explore More / Pagination Controls */}
        <div className="flex items-center gap-3">
          {/* Toggle Expand / Collapse All */}
          {filteredItems.length > ITEMS_PER_PAGE && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-lavender hover:bg-gold/20 text-primary text-xs font-semibold border border-primary/15 transition-all shadow-xs"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-3.5 h-3.5 text-gold" />
                  <span>Show Fewer Photos</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-3.5 h-3.5 text-gold" />
                  <span>
                    Explore All ({filteredItems.length - displayedItems.length} More)
                  </span>
                </>
              )}
            </button>
          )}

          {/* Next / Previous Page Buttons (when not expanded) */}
          {!isExpanded && totalPages > 1 && (
            <div className="flex items-center gap-1.5">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="p-2 rounded-lg border border-border bg-white text-primary hover:bg-lavender disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                title="Previous Photos"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="font-sans text-xs font-medium text-charcoal px-2">
                Page {currentPage} of {totalPages}
              </span>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="p-2 rounded-lg border border-border bg-white text-primary hover:bg-lavender disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                title="Next Photos"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================= */}
      {/* LIGHTBOX MODAL                                           */}
      {/* ========================================================= */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-gold/40 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-ivory-warm">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-lavender text-primary text-xs font-semibold uppercase tracking-wider">
                  {glimpsesData[lightboxIndex].categoryLabel}
                </span>
                <span className="text-xs text-charcoal-muted font-sans">
                  {lightboxIndex + 1} of {glimpsesData.length}
                </span>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-1.5 rounded-full hover:bg-charcoal/10 text-charcoal transition-colors"
                title="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative w-full flex-1 min-h-[300px] sm:min-h-[460px] bg-charcoal/95 flex items-center justify-center overflow-hidden">
              <Image
                src={glimpsesData[lightboxIndex].image}
                alt={glimpsesData[lightboxIndex].title}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain"
              />

              {/* Prev / Next overlay buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(
                    (lightboxIndex - 1 + glimpsesData.length) % glimpsesData.length
                  );
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 text-primary hover:bg-gold hover:text-white shadow-lg transition-all"
                title="Previous Photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex + 1) % glimpsesData.length);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 text-primary hover:bg-gold hover:text-white shadow-lg transition-all"
                title="Next Photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Caption Footer */}
            <div className="p-5 sm:p-6 bg-white flex flex-col gap-1.5 border-t border-border">
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-serif text-lg sm:text-xl font-bold text-primary">
                  {glimpsesData[lightboxIndex].title}
                </h4>
                {glimpsesData[lightboxIndex].date && (
                  <span className="text-xs font-sans text-gold font-semibold shrink-0">
                    {glimpsesData[lightboxIndex].date}
                  </span>
                )}
              </div>
              <p className="font-sans text-xs sm:text-sm text-charcoal leading-relaxed">
                {glimpsesData[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

