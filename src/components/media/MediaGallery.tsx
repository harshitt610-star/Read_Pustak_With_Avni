"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import {
  Newspaper,
  Camera,
  Video,
  Heart,
  Sparkles,
  ExternalLink,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { mediaData, MediaItem } from "@/data/media";

export const MediaGallery: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "press" | "moments" | "readers" | "videos">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Filtered Items
  const filteredItems = useMemo(() => {
    if (filter === "all") return mediaData;
    return mediaData.filter((item) => item.category === filter);
  }, [filter]);

  // Reset zoom whenever lightbox index changes
  useEffect(() => {
    setZoomLevel(1);
  }, [lightboxIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  const filterTabs = [
    {
      id: "all",
      label: "All Media",
      count: mediaData.length,
      icon: Sparkles,
    },
    {
      id: "press",
      label: "Newspaper & Press",
      count: mediaData.filter((m) => m.category === "press").length,
      icon: Newspaper,
    },
    {
      id: "moments",
      label: "Author & Stage",
      count: mediaData.filter((m) => m.category === "moments").length,
      icon: Camera,
    },
    {
      id: "readers",
      label: "Reader Love",
      count: mediaData.filter((m) => m.category === "readers").length,
      icon: Heart,
    },
    {
      id: "videos",
      label: "Videos & Glimpses",
      count: mediaData.filter((m) => m.category === "videos").length,
      icon: Video,
    },
  ];

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="flex flex-col gap-10">
      {/* ========================================================= */}
      {/* 1. FILTER TABS BAR                                        */}
      {/* ========================================================= */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white border border-border shadow-xs max-w-4xl mx-auto w-full">
        {filterTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = filter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setFilter(tab.id as typeof filter);
                setLightboxIndex(null);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isActive
                  ? "bg-primary text-white shadow-editorial border-2 border-gold"
                  : "text-charcoal hover:bg-lavender/60 hover:text-primary"
              }`}
            >
              <Icon
                className={`w-4 h-4 ${
                  isActive ? "text-gold" : "text-charcoal-muted"
                }`}
              />
              <span>{tab.label}</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-lavender text-primary"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* 2. MEDIA GRID                                             */}
      {/* ========================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => {
          const isVideo = item.type === "video";
          const isNewspaper = item.type === "newspaper";

          return (
            <article
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group cursor-pointer rounded-2xl bg-white border border-border/80 hover:border-gold/60 shadow-editorial hover:shadow-editorial-hover transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Media Thumbnail Container */}
              <div className="relative aspect-[4/3] w-full bg-[#FAF0FF] overflow-hidden flex items-center justify-center">
                {isVideo ? (
                  <div className="relative w-full h-full bg-charcoal">
                    {item.poster ? (
                      <Image
                        src={item.poster}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : null}
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/30 group-hover:bg-primary/20 transition-colors">
                      <div className="w-14 h-14 rounded-full bg-gold/95 text-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-primary ml-1" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full bg-white">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`transition-transform duration-500 group-hover:scale-103 ${
                        isNewspaper ? "object-contain p-2 bg-[#F9F7F4]" : "object-cover"
                      }`}
                    />
                  </div>
                )}

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-primary/90 text-gold text-[11px] font-sans font-bold shadow-xs backdrop-blur-xs flex items-center gap-1.5">
                    {isNewspaper && <Newspaper className="w-3 h-3" />}
                    {isVideo && <Video className="w-3 h-3" />}
                    {!isNewspaper && !isVideo && <Camera className="w-3 h-3" />}
                    <span>{item.categoryLabel}</span>
                  </span>

                  {item.date && (
                    <span className="px-2.5 py-1 rounded-full bg-white/95 text-charcoal text-[11px] font-sans font-semibold shadow-xs border border-border">
                      {item.date}
                    </span>
                  )}
                </div>

                {/* Hover zoom indicator */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-primary text-xs font-semibold shadow-md flex items-center gap-1.5 border border-gold/40">
                    <ExternalLink className="w-3.5 h-3.5 text-gold" />
                    <span>{isVideo ? "Click to Watch Video" : "Click to View & Read"}</span>
                  </span>
                </div>
              </div>

              {/* Content Description Footer */}
              <div className="p-5 flex-1 flex flex-col justify-between gap-3 bg-white">
                <div className="flex flex-col gap-1.5">
                  {item.publicationOrSource && (
                    <span className="text-[11px] font-sans text-gold font-bold uppercase tracking-wider">
                      {item.publicationOrSource}
                    </span>
                  )}
                  <h3 className="font-serif text-base sm:text-lg font-bold text-primary group-hover:text-primary-hover transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-charcoal-muted leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>
                </div>

                {item.highlights && item.highlights.length > 0 && (
                  <div className="pt-2 border-t border-border/70 flex items-center gap-1.5 text-[11px] font-sans text-primary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span className="truncate">{item.highlights[0]}</span>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* 3. LIGHTBOX & FULL-SCREEN MEDIA VIEWER                    */}
      {/* ========================================================= */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-gold/40 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Controls */}
            <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-3 border-b border-border bg-ivory-warm gap-2">
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                <span className="px-2.5 py-0.5 rounded-full bg-lavender text-primary text-[10px] sm:text-xs font-semibold uppercase tracking-wider truncate max-w-[120px] sm:max-w-none">
                  {currentItem.categoryLabel}
                </span>
                <span className="text-xs text-charcoal-muted font-sans hidden sm:inline">
                  {lightboxIndex! + 1} of {filteredItems.length}
                </span>
              </div>

              {/* Action Buttons: Zoom & Close */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {currentItem.type !== "video" && (
                  <div className="flex items-center gap-0.5 sm:gap-1 bg-white rounded-lg border border-border p-0.5">
                    <button
                      type="button"
                      onClick={() => setZoomLevel((z) => Math.max(0.75, z - 0.25))}
                      className="p-1 sm:p-1.5 hover:bg-lavender rounded text-charcoal"
                      title="Zoom Out"
                    >
                      <ZoomOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setZoomLevel(1)}
                      className="p-1 sm:p-1.5 hover:bg-lavender rounded text-charcoal text-[10px] sm:text-xs font-sans font-semibold"
                      title="Reset Zoom"
                    >
                      <RotateCcw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
                      className="p-1 sm:p-1.5 hover:bg-lavender rounded text-charcoal"
                      title="Zoom In"
                    >
                      <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  className="p-1.5 sm:p-2 rounded-full hover:bg-charcoal/10 text-charcoal transition-colors"
                  title="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Display Viewport: Image with Zoom or Video Player */}
            <div className="relative w-full flex-1 min-h-[320px] sm:min-h-[480px] bg-charcoal/95 flex items-center justify-center overflow-auto p-4">
              {currentItem.type === "video" ? (
                <div className="w-full max-w-2xl aspect-[9/16] max-h-[65vh] flex items-center justify-center">
                  <video
                    src={currentItem.src}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full max-h-[65vh] rounded-xl object-contain shadow-2xl"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div
                  className="relative max-w-full max-h-[65vh] transition-transform duration-200 flex items-center justify-center"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                  <img
                    src={currentItem.src}
                    alt={currentItem.title}
                    className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-xl"
                  />
                </div>
              )}

              {/* Prev / Next navigation */}
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex! - 1 + filteredItems.length) % filteredItems.length
                  )
                }
                className="absolute left-1.5 sm:left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-white/90 text-primary hover:bg-gold hover:text-white shadow-lg transition-all"
                title="Previous Item"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((lightboxIndex! + 1) % filteredItems.length)
                }
                className="absolute right-1.5 sm:right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-white/90 text-primary hover:bg-gold hover:text-white shadow-lg transition-all"
                title="Next Item"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Caption & Full Story Drawer */}
            <div className="p-5 sm:p-6 bg-white flex flex-col gap-3 border-t border-border overflow-y-auto max-h-[28vh]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex flex-col">
                  {currentItem.publicationOrSource && (
                    <span className="text-xs font-sans text-gold font-bold uppercase tracking-wider">
                      {currentItem.publicationOrSource}
                    </span>
                  )}
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-primary">
                    {currentItem.title}
                  </h4>
                </div>

                {currentItem.date && (
                  <span className="text-xs font-sans text-charcoal-muted font-semibold flex items-center gap-1 shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    <span>{currentItem.date}</span>
                  </span>
                )}
              </div>

              <p className="font-sans text-xs sm:text-sm text-charcoal leading-relaxed">
                {currentItem.caption}
              </p>

              {currentItem.highlights && currentItem.highlights.length > 0 && (
                <div className="pt-2 border-t border-border/70 flex flex-wrap gap-2">
                  {currentItem.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-ivory-warm border border-gold/30 text-[11px] font-sans text-charcoal flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-gold shrink-0" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
