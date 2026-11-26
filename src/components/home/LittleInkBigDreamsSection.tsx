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
  FileText,
} from "lucide-react";

export const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfQBYJ8X_blFPLaOlIa-MerHUAnevIvUA35puGmrd86UvjfyQ/viewform";

export const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfQBYJ8X_blFPLaOlIa-MerHUAnevIvUA35puGmrd86UvjfyQ/viewform?embedded=true";

const WHATSAPP_SUBMIT_URL =
  "https://wa.me/917068999555?text=" +
  encodeURIComponent(
    "Hello Read Pustak with Avni! I am submitting an entry for the 'Little Ink, Big Dreams' Anthology (Volume 1). I have also filled the Google Form."
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
        <div className="relative rounded-3xl bg-gradient-to-br from-[#FFF9F1] via-[#FAF0FF] to-[#FFF6E5] border-2 border-gold/50 shadow-editorial overflow-hidden p-5 sm:p-10 lg:p-12">
          {/* Decorative Top Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* ========================================================= */}
            {/* LEFT COLUMN: Visual Poster Presentation (5 cols)           */}
            {/* ========================================================= */}
            <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-gold/40 group bg-white">
                  <Image
                    src="/images/anthology/little-ink-big-dreams.jpg"
                    alt="Little Ink, Big Dreams - A Quarterly Children's Literary Anthology by Read Pustak with Avni"
                    fill
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 42vw"
                    className="object-contain group-hover:scale-103 transition-transform duration-500"
                  />

                  {/* Floating Badge */}
                    <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-primary/95 text-gold text-[10px] sm:text-xs font-sans font-bold shadow-md border border-gold/50 flex items-center gap-1.5 backdrop-blur-xs">
                      <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold fill-gold" />
                      <span>Volume 1 • Jan–Mar 2027</span>
                    </div>

                    {/* Floating Free Badge */}
                      <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-emerald-600 text-white text-[10px] sm:text-xs font-sans font-extrabold shadow-md border border-white/40 flex items-center gap-1">
                        <Gift className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
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
                    <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
                      {/* Header Strip */}
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 text-primary border border-gold/50 text-[11px] sm:text-xs font-sans font-bold uppercase tracking-wider">
                              <Sparkles className="w-3.5 h-3.5 text-gold fill-gold" />
                              National Call for Entries
                            </span>
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] sm:text-xs font-sans font-bold uppercase tracking-wider">
                                <Gift className="w-3.5 h-3.5 text-emerald-600" />
                                Free Submission
                              </span>
                            </div>

                              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-tight">
                                Little Ink, Big Dreams
                              </h2>

                                <p className="font-serif italic text-sm sm:text-base lg:text-lg text-gold font-semibold leading-snug">
                                  A Quarterly Children&apos;s Literary Anthology Presented by Read Pustak with Avni
                                </p>
                              </div>

                              {/* Invitation Paragraph */}
                                <p className="font-sans text-xs sm:text-sm md:text-base text-charcoal leading-relaxed">
                                  Does your child love writing poems, stories, or expressing creative ideas? Here is an extraordinary opportunity to become a <strong>Published Young Writer</strong>! We invite original contributions from children across India, including first-time writers and children from underserved communities.
                                </p>

                                {/* 5 Submission Categories */}
                                    <div className="flex flex-col gap-2">
                                      <span className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-wider text-charcoal-muted">
                                        Accepting Submissions In 5 Categories:
                                      </span>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                                          {categories.map((cat, idx) => {
                                            const Icon = cat.icon;
                                            return (
                                              <div
                                                key={idx}
                                                className={`p-2.5 sm:p-3 rounded-2xl bg-white border border-border hover:border-gold/60 shadow-xs flex flex-col gap-1 transition-all group ${idx === 4 ? "col-span-2 sm:col-span-1" : ""
                                                  }`}
                                              >
                                                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-lavender flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                                    <Icon className="w-3.5 h-3.5 text-gold" />
                                                  </div>
                                                  <span className="font-serif text-xs sm:text-sm font-bold text-primary leading-tight">
                                                    {cat.title}
                                                  </span>
                                                    <span className="font-sans text-[10px] sm:text-[11px] text-charcoal-muted leading-tight line-clamp-2">
                                                      {cat.desc}
                                                    </span>
                                                </div>
                                                );
                })}
                                              </div>
            </div>

                                        {/* Timeline & Important Key Stats Strip */}
                                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/90 border border-gold/30 shadow-xs">
                                            <div className="flex flex-col">
                                              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal-muted flex items-center gap-1">
                                                <Calendar className="w-3 h-3 text-gold" />
                                                Last Date
                                              </span>
                                                <span className="font-serif text-sm sm:text-base lg:text-lg font-bold text-primary">
                                                  12 Dec 2026
                                                </span>
                                            </div>

                                            <div className="flex flex-col">
                                              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal-muted flex items-center gap-1">
                                                <BookOpen className="w-3 h-3 text-gold" />
                                                Publication
                                              </span>
                                                <span className="font-serif text-sm sm:text-base lg:text-lg font-bold text-primary">
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
                                                <span className="font-serif text-sm sm:text-base lg:text-lg font-bold text-gold">
                                                  Jan–Mar 2027
                                                </span>
                                            </div>
                                          </div>

                                          {/* School & NGO Collaboration Banner */}
                                              <div className="p-3 sm:p-3.5 rounded-2xl bg-lavender/70 border border-primary/15 flex items-start gap-2.5 sm:gap-3">
                                                <School className="w-4 h-4 sm:w-5 sm:h-5 text-gold shrink-0 mt-0.5" />
                                                <div className="flex flex-col text-[11px] sm:text-xs font-sans text-charcoal">
                                                  <span className="font-bold text-primary">
                                                    Calling Schools, NGOs &amp; Foundations:
                                                  </span>
                                                  <span className="leading-relaxed text-charcoal-muted mt-0.5">
                                                    Schools and community organizations are warmly invited to collaborate and help their students&apos; voices reach a published, pan-India audience.
                                                  </span>
                                                </div>
                                              </div>

                                              {/* CTA Buttons */}
                                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
                                                  {/* Primary Action: Open Google Form in a new page */}
                                                  <a
                                                    href={GOOGLE_FORM_URL}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl bg-primary hover:bg-primary-hover text-white font-sans text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-editorial hover:shadow-editorial-hover hover:scale-102 active:scale-98 transition-all border border-gold/40 group text-center"
                                                  >
                                                    <FileText className="w-4 h-4 text-gold group-hover:scale-110 transition-transform shrink-0" />
                                                    <span>Submit Entry (Google Form)</span>
                                                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold/90 shrink-0" />
                                                  </a>

                                                  {/* WhatsApp Alternative */}
                                                  <a
                                                    href={WHATSAPP_SUBMIT_URL}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="py-3 sm:py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-sans text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all shrink-0"
                                                    title="Submit via WhatsApp"
                                                  >
                                                    <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                                                    <span>WhatsApp Entry</span>
                                                  </a>

                                                  {/* School / NGO Inquiries */}
                                                  <a
                                                    href={WHATSAPP_COLLAB_URL}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="py-3 sm:py-3.5 px-4 rounded-xl bg-white hover:bg-lavender text-primary border border-gold/50 font-sans text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors shrink-0"
                                                  >
                                                    <School className="w-4 h-4 text-gold" />
                                                    <span>School Partner</span>
                                                  </a>

                                                  {/* Share Button */}
                                                  <button
                                                    type="button"
                                                    onClick={handleShare}
                                                    className="py-3 sm:py-3.5 px-3.5 rounded-xl bg-white hover:bg-lavender text-primary border border-border shadow-xs flex items-center justify-center transition-colors shrink-0"
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

                                            {/* ========================================================= */}
                                            {/* DIRECT SUBMISSION BANNER (OPENS IN NEW PAGE)              */}
                                            {/* ========================================================= */}
                                                    <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t-2 border-gold/30 flex flex-col gap-4">
                                                      <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5 bg-white p-5 sm:p-7 rounded-2xl border-2 border-gold/40 shadow-xs">
                                                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 sm:gap-4 text-center sm:text-left">
                                                          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 shadow-sm">
                                                            <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                                                          </div>
                                                            <div className="flex flex-col gap-1">
                                                              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                                                                  <span className="font-serif text-base sm:text-lg lg:text-xl font-bold text-primary">
                                                                    Ready to Submit Your Child&apos;s Creative Story?
                                                                  </span>
                                                                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider">
                                                                      100% Free
                                                                    </span>
                                                                  </div>
                                                                  <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                                                                    Click the button below to open the official submission form in a new page and upload stories, poems, or artwork.
                                                                  </p>
                                                              </div>
                                                            </div>

                                                              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
                                                                <a
                                                                  href={GOOGLE_FORM_URL}
                                                                  target="_blank"
                                                                  rel="noopener noreferrer"
                                                                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gold hover:bg-gold-light text-primary text-xs sm:text-sm font-sans font-bold shadow-md hover:scale-102 active:scale-98 transition-all text-center"
                                                                >
                                                                  <span>Open Google Form in New Page</span>
                                                                  <ExternalLink className="w-4 h-4 text-primary shrink-0" />
                                                                </a>
                                                              </div>
                                                            </div>

                                                            {/* Bottom Reminder Pill */}
                                                                <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2 px-2 text-[11px] sm:text-xs font-sans text-charcoal-muted text-center sm:text-left">
                                                                  <span className="flex items-center justify-center sm:justify-start gap-1.5">
                                                                    <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                                                                    <span>
                                                                      Last Date: <strong>12 December 2026</strong> • Volume 1 Releases: <strong>Jan–Mar 2027</strong>
                                                                    </span>
                                                                  </span>
                                                                  <span className="text-charcoal-subtle">
                                                                    Presented by Read Pustak with Avni
                                                                  </span>
                                                                </div>
                                                            </div>
                                                          </div>
                                                        </section>
                                                        );
};
