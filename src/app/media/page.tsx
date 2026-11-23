import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Newspaper,
  Camera,
  Video,
  Award,
  Sparkles,
  MessageCircle,
  Mail,
  CheckCircle2,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { MediaGallery } from "@/components/media/MediaGallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Media Coverage, Press Clippings & Gallery | Read Pustak with Avni",
  description:
    "Explore verified newspaper clippings (Dainik Jagran, Inext), media features, author speech videos, and photo moments of 13-year-old author Avni Chaturvedi in Lucknow, India.",
  alternates: {
    canonical: "https://readpustak.com/media",
  },
  openGraph: {
    title: "Media & Press Room | Read Pustak with Avni",
    description:
      "Verified print coverage, newspaper articles, event videos, and memorable author moments of young author Avni Chaturvedi.",
    url: "https://readpustak.com/media",
    images: [
      {
        url: "/images/media/newspaper-young-writers.jpg",
        width: 1200,
        height: 630,
        alt: "Newspaper Coverage of young author Avni Chaturvedi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Coverage & Photo Archive | Read Pustak with Avni",
    description:
      "Newspaper clippings, media interviews, and stage videos of young author Avni Chaturvedi.",
    images: ["/images/media/newspaper-young-writers.jpg"],
  },
};

export default function MediaPage() {
  return (
    <div className="flex flex-col gap-16 lg:gap-24 py-6 sm:py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Media & Press", url: "/media" },
        ]}
      />

      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-b from-white to-[#FAF0FF]/60 rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-12 lg:p-16 flex flex-col gap-8 relative overflow-hidden">
          <SectionHeading
            as="h1"
            eyebrow="Print Press, Photos &amp; Event Videos"
            title="Media &amp; Press Room"
            subtitle="“Words in print, voices on stage, and smiles across young readers — verified newspaper coverage, photos, and video moments of young author Avni Chaturvedi.”"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-7 flex flex-col gap-5 font-sans text-sm sm:text-base text-charcoal leading-relaxed">
              <p>
                From front-page features in leading dailies like <strong>Dainik Jagran</strong> and <strong>Inext</strong> to literary dialogues at the <strong>Gomti Pustak Mahotsav</strong> and state felicitations at <strong>उत्तर प्रदेश की बात</strong>, the journey of young author <strong>Avni Chaturvedi</strong> continues to inspire readers and educators alike.
              </p>
              <p>
                This dedicated media archive brings together authentic newspaper clippings, stage speeches, reader testimonials, and event video recordings celebrating the message of: <em>“Ek Bachcha, Ek Pustak Padhe.”</em>
              </p>

              {/* Quick Stat Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white border border-border shadow-2xs flex flex-col">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-primary">
                    4+
                  </span>
                  <span className="text-[11px] font-sans text-charcoal-muted font-medium">
                    Newspaper Features
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-border shadow-2xs flex flex-col">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-primary">
                    5
                  </span>
                  <span className="text-[11px] font-sans text-charcoal-muted font-medium">
                    Published Titles
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-border shadow-2xs flex flex-col">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-primary">
                    4
                  </span>
                  <span className="text-[11px] font-sans text-charcoal-muted font-medium">
                    Event Video Clips
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-border shadow-2xs flex flex-col">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-primary">
                    500+
                  </span>
                  <span className="text-[11px] font-sans text-charcoal-muted font-medium">
                    Young Readers
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/917068999555?text=Hello%20Read%20Pustak%20Team%2C%20I%20am%20interested%20in%20a%20Media%20Feature%20%2F%20Press%20Interview%20with%20young%20author%20Avni%20Chaturvedi."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans text-xs sm:text-sm font-semibold shadow-xs transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Press Inquiries on WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-lg bg-white text-primary font-sans text-xs sm:text-sm font-semibold hover:bg-lavender border border-border shadow-xs transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  <span>Media Kit Request</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Featured Newspaper Clipping Card */}
            <div className="lg:col-span-5 relative aspect-[3/4] max-h-[460px] rounded-2xl overflow-hidden shadow-editorial border-2 border-gold/40 bg-white group p-3">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#FAF7F2]">
                <Image
                  src="/images/media/newspaper-young-writers.jpg"
                  alt="Dainik Jagran Inext coverage: Young writers books won hearts"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-5 left-5 right-5 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-gold/30 shadow-md flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-serif text-xs sm:text-sm font-bold text-primary">
                    Dainik Jagran / Inext
                  </span>
                  <span className="font-sans text-[11px] text-charcoal-muted">
                    Gomti Pustak Mahotsav Special
                  </span>
                </div>
                <span className="font-sans text-[11px] font-bold text-gold px-2.5 py-1 rounded-full bg-gold/10 border border-gold/30">
                  Featured Press
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. CORE MEDIA GALLERY (FILTERABLE TABS & LIGHTBOX)        */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <MediaGallery />
      </section>

      {/* ========================================================= */}
      {/* 3. MEDIA KIT & PRESS COOPERATION CARD                     */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8">
        <div className="rounded-2xl bg-gradient-to-r from-lavender/90 via-[#FFF9F1] to-lavender/90 p-8 sm:p-12 border border-gold/40 shadow-editorial text-center flex flex-col items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-white shadow-sm ring-2 ring-gold/40 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-gold" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-sans text-xs uppercase tracking-widest text-gold font-bold">
              Journalists, Publications &amp; Event Hosts
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-primary">
              Media Kit &amp; Press Coordination
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-primary font-medium">
              “Inspiring Every Child to Pick Up a Pen and Read.”
            </p>
          </div>

          <p className="font-sans text-sm sm:text-base text-charcoal-muted max-w-xl leading-relaxed">
            Need high-resolution author portraits, official bios, book press releases, or looking to schedule a literary keynote with young author Avni Chaturvedi? We are happy to collaborate.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/917068999555?text=Hello%20Read%20Pustak%2C%20I%20would%20like%20to%20request%20the%20Official%20Media%20Kit%20and%20high-res%20press%20materials."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans text-sm font-semibold shadow-xs transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-white text-primary font-sans text-sm font-semibold hover:bg-lavender border border-border shadow-xs transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-gold" />
              <span>Submit Media Form</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
