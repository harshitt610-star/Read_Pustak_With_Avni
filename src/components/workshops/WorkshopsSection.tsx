"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  School,
  Award,
  BookOpen,
  Mail,
  ExternalLink,
} from "lucide-react";
import { workshopsData, WorkshopItem } from "@/data/workshops";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface WorkshopsSectionProps {
  id?: string;
  defaultFilter?: "all" | "conducted" | "upcoming";
  title?: string;
  subtitle?: string;
  eyebrow?: string;
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = ({
  id = "workshops",
  defaultFilter = "all",
  title = "Workshops & Storytelling Circles",
  subtitle = "“Inspiring young minds through interactive storytelling, creative writing masterclasses, and university collaborations.”",
  eyebrow = "Literary Outreach & School Drives",
}) => {
  const [filter, setFilter] = useState<"all" | "conducted" | "upcoming">(defaultFilter);
  const [selectedWorkshop, setSelectedWorkshop] = useState<WorkshopItem | null>(null);

  const filteredWorkshops = workshopsData.filter((w) => {
    if (filter === "conducted") return w.category === "conducted";
    if (filter === "upcoming") return w.category === "upcoming";
    return true;
  });

  const conductedCount = workshopsData.filter((w) => w.category === "conducted").length;
  const upcomingCount = workshopsData.filter((w) => w.category === "upcoming").length;

  return (
    <section id={id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-mt-24">
      <div className="flex flex-col gap-10 sm:gap-14">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 bg-white px-4 py-2 rounded-2xl border border-gold/40 shadow-xs">
            <Sparkles className="w-4 h-4 text-gold shrink-0" />
            <div className="flex items-center gap-3 text-xs font-sans">
              <span>
                <strong className="text-primary font-bold">{conductedCount}</strong> Conducted
              </span>
              <span className="text-border">•</span>
              <span>
                <strong className="text-gold font-bold">{upcomingCount}</strong> Open for Booking
              </span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-border/80 pb-3">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-xl font-sans text-xs sm:text-sm font-semibold transition-all ${
              filter === "all"
                ? "bg-primary text-white shadow-xs"
                : "bg-white text-charcoal hover:bg-lavender/50 border border-border/70"
            }`}
          >
            All Workshops ({workshopsData.length})
          </button>

          <button
            onClick={() => setFilter("conducted")}
            className={`px-4 py-2 rounded-xl font-sans text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              filter === "conducted"
                ? "bg-primary text-white shadow-xs"
                : "bg-white text-charcoal hover:bg-lavender/50 border border-border/70"
            }`}
          >
            <Award className="w-3.5 h-3.5 text-gold" />
            <span>Conducted Sessions ({conductedCount})</span>
          </button>

          <button
            onClick={() => setFilter("upcoming")}
            className={`px-4 py-2 rounded-xl font-sans text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              filter === "upcoming"
                ? "bg-primary text-white shadow-xs"
                : "bg-white text-charcoal hover:bg-lavender/50 border border-border/70"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Open for Booking ({upcomingCount})</span>
          </button>
        </div>

        {/* Workshops Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredWorkshops.map((workshop) => {
            const isConducted = workshop.category === "conducted";

            return (
              <div
                key={workshop.id}
                className="bg-white rounded-3xl border-2 border-border/80 hover:border-gold/60 shadow-editorial hover:shadow-editorial-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-ivory-warm overflow-hidden">
                    <Image
                      src={workshop.coverImage}
                      alt={workshop.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-80" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-wider shadow-sm ${
                          isConducted
                            ? "bg-primary/95 text-gold border border-gold/40"
                            : "bg-gold text-primary font-extrabold border border-white/40"
                        }`}
                      >
                        {workshop.statusBadge}
                      </span>

                      {workshop.duration && (
                        <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-charcoal text-[11px] font-sans font-semibold flex items-center gap-1 shadow-xs">
                          <Clock className="w-3 h-3 text-gold" />
                          <span>{workshop.duration}</span>
                        </span>
                      )}
                    </div>

                    {/* Bottom Metadata Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 text-white text-xs font-sans">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>{workshop.date}</span>
                      </span>
                      <span className="flex items-center gap-1.5 font-medium truncate max-w-[150px] sm:max-w-[200px]">
                        <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span className="truncate">{workshop.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] font-sans font-bold text-gold uppercase tracking-widest">
                        {workshop.institution}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary leading-snug">
                        {workshop.title}
                      </h3>
                      <p className="font-serif italic text-xs sm:text-sm text-gold font-medium">
                        {workshop.subtitle}
                      </p>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-charcoal leading-relaxed">
                      {workshop.description}
                    </p>

                    {/* Target Audience Pill */}
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-ivory-warm border border-gold/20 text-xs font-sans text-charcoal">
                      <Users className="w-4 h-4 text-gold shrink-0" />
                      <span>
                        <strong>Audience:</strong> {workshop.audience}
                      </span>
                    </div>

                    {/* Key Highlights Checklist */}
                    <div className="pt-2 flex flex-col gap-2">
                      <span className="font-sans text-xs font-bold uppercase tracking-wider text-charcoal-muted">
                        {isConducted ? "What Happened & Outcomes:" : "Key Takeaways & Modules:"}
                      </span>
                      <ul className="flex flex-col gap-1.5 font-sans text-xs text-charcoal">
                        {workshop.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                            <span className="leading-snug">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0">
                  {isConducted ? (
                    <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-3">
                      <span className="text-xs font-sans text-charcoal-muted flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-gold shrink-0" />
                        <span>Verified Read Pustak Drive</span>
                      </span>
                      <a
                        href={
                          "https://wa.me/917068999555?text=" +
                          encodeURIComponent(
                            `Hello Read Pustak, I was inspired by your '${workshop.title}' workshop. We would like to host a similar workshop at our school.`
                          )
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-gold transition-colors"
                      >
                        <span>Host a Similar Session</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ) : (
                    <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                      <a
                        href={
                          "https://wa.me/917068999555?text=" +
                          encodeURIComponent(
                            workshop.whatsappMessage ||
                              `Hello Read Pustak, our school is interested in hosting '${workshop.title}'. Please share available dates.`
                          )
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-sans text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all"
                      >
                        <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                        <span>Book for School via WhatsApp</span>
                      </a>

                      <Link
                        href="/contact"
                        className="py-3 px-4 rounded-xl bg-white hover:bg-lavender text-primary border border-gold/40 font-sans text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Mail className="w-4 h-4 text-gold" />
                        <span>Inquire</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Master Organizer Callout: "Host an Author Workshop at Your School" */}
        <div className="rounded-3xl bg-gradient-to-br from-primary via-[#35105F] to-[#1C003C] text-white p-6 sm:p-10 lg:p-12 border-2 border-gold/50 shadow-editorial flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-xs font-sans font-bold uppercase tracking-widest text-gold">
              <School className="w-4 h-4 text-gold" />
              <span>For School Principals, Coordinators &amp; Libraries</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Host Young Author Avni at Your School or Institution
            </h3>
            <p className="font-sans text-xs sm:text-sm text-ivory/80 leading-relaxed">
              Ignite your students&apos; imagination through real author interactions, hands-on writing exercises, and cultural storytelling. We conduct customized sessions across Lucknow, Uttar Pradesh, and pan-India (both in-person and virtual formats).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
            <a
              href={
                "https://wa.me/917068999555?text=" +
                encodeURIComponent(
                  "Hello Read Pustak, I am a School Principal / Coordinator. We want to invite young author Avni Chaturvedi to conduct a creative writing workshop at our school. Please share details!"
                )
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-sans text-sm font-bold shadow-md hover:scale-102 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Invite via WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-gold/40 font-sans text-sm font-semibold transition-colors"
            >
              <Mail className="w-4 h-4 text-gold" />
              <span>Send Official Invitation</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
