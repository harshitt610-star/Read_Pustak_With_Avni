"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Sparkles, BookOpen, Globe, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  badge: string;
  quote: string;
  authorLabel: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "creative-visionary",
    image: "/images/avni/hero-slide-1.jpg",
    alt: "Avni Chaturvedi - Young Author and Storyteller portrait",
    badge: "Creative Inspiration",
    quote: "“Young in Age, Limitless in Imagination.”",
    authorLabel: "Avni Chaturvedi • Young Author & Storyteller",
    tag: "Inspiring Young Minds",
    icon: Sparkles,
  },
  {
    id: "published-author",
    image: "/images/avni/hero-slide-2.jpg",
    alt: "Avni Chaturvedi holding her published book Incredible Bharat",
    badge: "Published Author",
    quote: "“Every book opens a new world to discover.”",
    authorLabel: "Holding 'Incredible Bharat' • 4 Published Books",
    tag: "Stories of Joy & Heritage",
    icon: BookOpen,
  },
  {
    id: "youth-diplomacy",
    image: "/images/avni/hero-slide-3.jpg",
    alt: "Avni Chaturvedi at AIS VKC MUN representing Republic of Korea",
    badge: "Youth Diplomacy & MUN",
    quote: "“Empowering voices through ideas, diplomacy & impact.”",
    authorLabel: "AIS VKC MUN Delegate • Creative Speaker",
    tag: "Public Speaking & Thought Leadership",
    icon: Globe,
  },
];

export function HeroPortraitCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Auto-scroll every 4 seconds (between 3-5 seconds as requested)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const currentSlide = HERO_SLIDES[currentIndex];
  const IconComponent = currentSlide.icon;

  return (
    <div
      className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-editorial-hover border-2 border-gold/40 bg-ivory-warm group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with smooth Cross-Fade */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className={`object-cover transition-transform duration-1000 ease-out ${
                isActive ? "scale-100" : "scale-105"
              }`}
            />
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-transparent opacity-60" />
          </div>
        );
      })}

      {/* Top Floating Pill Badge */}
      <div className="absolute top-4 left-4 z-20">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-primary text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-gold/40 shadow-sm transition-all duration-300">
          <IconComponent className="w-3.5 h-3.5 text-gold shrink-0" />
          <span>{currentSlide.tag}</span>
        </span>
      </div>

      {/* Slide Navigation Arrows (visible on hover or tap) */}
      <button
        onClick={prevSlide}
        aria-label="Previous Photo"
        className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-gold text-primary hover:text-white backdrop-blur-sm shadow-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Photo"
        className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-gold text-primary hover:text-white backdrop-blur-sm shadow-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dynamic Words & Quotes Card Overlay */}
      <div className="absolute bottom-4 inset-x-4 z-20 bg-white/95 backdrop-blur-md rounded-xl p-4 sm:p-4.5 shadow-xl border border-gold/40 flex flex-col gap-1.5 transition-all duration-500">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-gold text-xs font-semibold uppercase tracking-wider">
            <IconComponent className="w-3.5 h-3.5 animate-pulse text-gold" />
            <span key={`badge-${currentIndex}`} className="animate-fadeIn">
              {currentSlide.badge}
            </span>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {HERO_SLIDES.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  dotIdx === currentIndex
                    ? "w-5 h-1.5 bg-gold"
                    : "w-1.5 h-1.5 bg-charcoal/20 hover:bg-charcoal/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Dynamic Quote Text */}
        <p
          key={`quote-${currentIndex}`}
          className="font-serif italic text-sm sm:text-base text-primary font-medium leading-snug animate-fadeIn min-h-[2.5rem] flex items-center"
        >
          {currentSlide.quote}
        </p>

        {/* Dynamic Subtitle / Attribution */}
        <span
          key={`label-${currentIndex}`}
          className="font-sans text-xs text-charcoal-muted self-end font-medium animate-fadeIn"
        >
          — {currentSlide.authorLabel}
        </span>
      </div>
    </div>
  );
}

