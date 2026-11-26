"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  BookOpen,
  Feather,
  Palette,
  Lightbulb,
  Heart,
  Calendar,
  CheckCircle2,
  Gift,
  ArrowRight,
  MessageCircle,
  School,
  ExternalLink,
  Share2,
} from "lucide-react";

const WHATSAPP_SUBMIT_URL =
  "https://wa.me/917068999555?text=" +
  encodeURIComponent(
    "Hello Read Pustak with Avni! I would like to submit my child's creative entry for the 'Little Ink, Big Dreams' Anthology (Volume 1). Please guide me with the Google Form / submission process."
  );

const WHATSAPP_COLLAB_URL =
  "https://wa.me/917068999555?text=" +
  encodeURIComponent(
    "Hello Read Pustak with Avni! We represent a School / NGO / Educational Foundation and would like to collaborate on the 'Little Ink, Big Dreams' Anthology to help our students publish their original work."
  );

export const LittleInkBigDreamsSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Little Ink, Big Dreams - Call for Entries | Read Pustak with Avni",
      text: "🌟 CALL FOR ENTRIES! 'Little Ink, Big Dreams' — A Quarterly Children's Literary Anthology. 100% Free Submission for young writers across India! Last Date: 12 Dec 2026.",
      url: typeof window !== "undefined" ? window.location.href : "https://readpustak.com",
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled share
      }
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `${shareData.title}\n${shareData.text}\n${shareData.url}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const categories = [
    {
      icon: BookOpen,
      title: "Short Stories",
      desc: "Fictional tales, folklore & childhood adventures",
    },
    {
      icon: Feather,
      title: "Poems & Poetry",
      desc: "Rhymes, verses & heartfelt reflections",
    },
    {
      icon: Palette,
      title: "Artwork & Art",
      desc: "Handmade drawings, paintings & sketches",
    },
    {
      icon: Lightbulb,
      title: "Creative Writing",
      desc: "Essays, thoughts & inventive story ideas",
    },
    {
      icon: Heart,
      title: "Personal Stories",
      desc: "Memorable experiences & everyday wonder",
    },
  ];

  return (
    <section
      id="little-ink-big-dreams"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-mt-24"
    >
      <div className="relative rounded-3xl bg-gradient-to-br from-[#FFF9F1] via-[#FAF0FF] to-[#FFF6E5] border-2 border-gold/50 shadow-editorial overflow-hidden p-6 sm:p-10 lg:p-12">
        {/* Decorative Top Accent Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Visual Poster Presentation (5 cols)           */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-gold/40 group bg-white">
              <Image
                src="/images/anthology/little-ink-big-dreams.jpg"
                alt="Little Ink, Big Dreams - A Quarterly Children's Literary Anthology by Read Pustak with Avni"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-contain group-hover:scale-103 transition-transform duration-500"
              />

              {/* Floating Badge */}
              <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-primary/95 text-gold text-xs font-sans font-bold shadow-md border border-gold/50 flex items-center gap-1.5 backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-gold fill-gold" />
                <span>Volume 1 • Jan–Mar 2027</span>
              </div>

              {/* Floating Free Badge */}
              <div className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-sans font-extrabold shadow-md border border-white/40 flex items-center gap-1.5">
                <Gift className="w-3.5 h-3.5" />
                <span>100% FREE ENTRY</span>
              </div>
            </div>

            {/* Quick Caption Under Poster */}
            <p className="font-serif italic text-xs sm:text-sm text-primary font-medium text-center mt-3 max-w-xs">
              “Every Child Deserves a Page. Every Story Deserves to Be Told.”
            </p>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Announcement Content & Submission Details    */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Header Strip */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 text-primary border border-gold/50 text-xs font-sans font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-gold fill-gold" />
                  National Call for Entries
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-sans font-bold uppercase tracking-wider">
                  <Gift className="w-3.5 h-3.5 text-emerald-600" />
                  Free Submission
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-tight">
                Little Ink, Big Dreams
              </h2>

              <p className="font-serif italic text-base sm:text-lg text-gold font-semibold">
                A Quarterly Children&apos;s Literary Anthology Presented by Read Pustak with Avni
              </p>
            </div>

            {/* Invitation Paragraph */}
            <p className="font-sans text-sm sm:text-base text-charcoal leading-relaxed">
              Does your child love writing poems, stories, or expressing creative ideas? Here is an extraordinary opportunity to become a <strong>Published Young Writer</strong>! We invite original contributions from children across India, including first-time writers and children from underserved communities.
            </p>

            {/* 5 Submission Categories */}
            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-charcoal-muted">
                Accepting Submissions In 5 Categories:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {categories.map((cat, idx) => {
                  const Icon = cat.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-white border border-border hover:border-gold/60 shadow-xs flex flex-col gap-1 transition-all group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-lavender flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Icon className="w-3.5 h-3.5 text-gold" />
                      </div>
                      <span className="font-serif text-xs sm:text-sm font-bold text-primary leading-tight">
                        {cat.title}
                      </span>
                      <span className="font-sans text-[11px] text-charcoal-muted leading-tight">
                        {cat.desc}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Timeline & Important Key Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white/90 border border-gold/30 shadow-xs">
              <div className="flex flex-col">
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal-muted flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-gold" />
                  Last Date
                </span>
                <span className="font-serif text-base sm:text-lg font-bold text-primary">
                  12 Dec 2026
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal-muted flex items-center gap-1">
                  <BookOpen className="w-3 h-3 text-gold" />
                  Publication
                </span>
                <span className="font-serif text-base sm:text-lg font-bold text-primary">
                  Quarterly
                </span>
                <span className="text-[10px] font-sans text-charcoal-muted">
                  Every 3 Months
                </span>
              </div>

              <div className="col-span-2 sm:col-span-1 flex flex-col">
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal-muted flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-gold" />
                  Volume 1 Release
                </span>
                <span className="font-serif text-base sm:text-lg font-bold text-gold">
                  Jan–Mar 2027
                </span>
              </div>
            </div>

            {/* School & NGO Collaboration Banner */}
            <div className="p-3.5 rounded-2xl bg-lavender/70 border border-primary/15 flex items-start gap-3">
              <School className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div className="flex flex-col text-xs font-sans text-charcoal">
                <span className="font-bold text-primary">
                  Calling Schools, NGOs &amp; Foundations:
                </span>
                <span className="leading-relaxed text-charcoal-muted mt-0.5">
                  Schools and community organizations are warmly invited to collaborate and help their students&apos; voices reach a published, pan-India audience.
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              {/* WhatsApp Submission Action */}
              <a
                href={WHATSAPP_SUBMIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-sans text-sm font-bold flex items-center justify-center gap-2 shadow-editorial hover:shadow-editorial-hover hover:scale-102 active:scale-98 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Submit Entry via WhatsApp / Form</span>
                <ArrowRight className="w-4 h-4 text-white/80" />
              </a>

              {/* School / NGO Inquiries */}
              <a
                href={WHATSAPP_COLLAB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-5 rounded-xl bg-white hover:bg-lavender text-primary border-2 border-gold/40 font-sans text-sm font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <School className="w-4 h-4 text-gold" />
                <span>School &amp; NGO Partner</span>
              </a>

              {/* Share Button */}
              <button
                type="button"
                onClick={handleShare}
                className="p-3.5 rounded-xl bg-white hover:bg-lavender text-primary border border-border shadow-xs flex items-center justify-center transition-colors"
                title="Share Call for Entries with Parents & Teachers"
                aria-label="Share Call for Entries"
              >
                <Share2 className="w-4 h-4 text-gold" />
              </button>
            </div>

            {copied && (
              <span className="text-xs font-sans text-emerald-700 font-semibold self-start flex items-center gap-1.5 animate-in fade-in">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Link and message copied to clipboard! Share with parents and teachers.
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
