import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Sparkles,
  BookOpen,
  Feather,
  Palette,
  Share2,
  Award,
  ArrowRight,
  Heart,
  Mail,
  MapPin,
  Instagram,
  Youtube,
} from "lucide-react";
import { booksData } from "@/data/books";
import { BookCard } from "@/components/books/BookCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChildrensDaySection } from "@/components/promotions/ChildrensDaySection";

export const metadata: Metadata = {
  title: "Read Pustak with Avni | Turn Pages, Not Just Screens",
  description:
    "Official website of young author Avni Chaturvedi and Read Pustak Publications. Discover published children's books, school workshops, and literary initiatives.",
  alternates: {
    canonical: "https://readpustak.com",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-14 sm:gap-20 overflow-hidden">
      {/* ========================================================= */}
      {/* 1. STREAMLINED HERO SECTION                              */}
      {/* ========================================================= */}
      <section className="relative pt-6 pb-10 sm:pt-12 sm:pb-16 bg-gradient-to-b from-[#FFF9F1] via-[#FAF0FF]/60 to-[#FFF9F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Vision & Identity */}
            <div className="lg:col-span-7 flex flex-col gap-5 items-start">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lavender border border-primary/10 text-primary text-xs font-sans font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-gold fill-gold" />
                <span>Read Pustak with Avni</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.12]">
                Turn Pages, Not Just Screens.
              </h1>

              {/* Subtitle (Max 2 lines) */}
              <p className="font-sans text-base sm:text-lg text-charcoal leading-relaxed max-w-2xl">
                In a world competing for our attention, we bring books back into everyday life—inspiring children and adults to imagine, create, and discover new worlds.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-1">
                <Link
                  href="/books"
                  className="px-6 py-3.5 rounded-lg bg-primary text-white font-sans text-sm font-semibold hover:bg-primary-hover shadow-editorial hover:shadow-editorial-hover transition-all flex items-center justify-center gap-2 border border-gold/40 group"
                >
                  <BookOpen className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                  <span>Explore Our Books</span>
                  <ArrowRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/about"
                  className="px-6 py-3.5 rounded-lg bg-white text-primary font-sans text-sm font-semibold hover:bg-lavender/50 border border-border shadow-xs hover:shadow-editorial transition-all flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 text-gold" />
                  <span>Discover Our Mission</span>
                </Link>
              </div>

              {/* Compact Stats Strip */}
              <div className="grid grid-cols-3 gap-4 pt-5 border-t border-border/80 w-full max-w-lg">
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-primary block">
                    4
                  </span>
                  <span className="font-sans text-xs text-charcoal-muted">
                    Published Books
                  </span>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-primary block">
                    Age 10
                  </span>
                  <span className="font-sans text-xs text-charcoal-muted">
                    Writing Genesis
                  </span>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-primary block">
                    2026
                  </span>
                  <span className="font-sans text-xs text-charcoal-muted">
                    Book Fair Speaker
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Primary Hero Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/4.6] rounded-2xl overflow-hidden shadow-editorial-hover border-2 border-gold/40 group bg-ivory-warm">
                <Image
                  src="/images/author/meet-the-author-avni.jpg"
                  alt="Young author Avni Chaturvedi with published books"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain bg-white group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-gold/30 shadow-xs flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-serif text-sm font-bold text-primary">
                      Avni Chaturvedi
                    </span>
                    <span className="font-sans text-[11px] text-charcoal-muted">
                      Young Author &amp; Student
                    </span>
                  </div>
                  <span className="font-serif text-xs font-bold text-gold px-2 py-0.5 rounded-full bg-gold/10">
                    4 Titles
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. OUR PHILOSOPHY — 4 Pillars (Read • Write • Create • Share) */}
      {/* ========================================================= */}
      <section id="philosophy" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-10 relative overflow-hidden flex flex-col gap-8">
          <SectionHeading
            eyebrow="Our Guiding Ethos"
            title="Our Philosophy"
            subtitle="Read • Write • Create • Share"
            align="center"
          />

          {/* 4 Pillars Grid (1 sentence each) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 1. READ */}
            <div className="p-5 rounded-2xl bg-ivory-warm border border-border/70 hover:border-gold/60 shadow-xs hover:shadow-editorial transition-all flex flex-col gap-3 group">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-lavender flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5 text-gold" />
                </div>
                <span className="font-serif text-[11px] font-bold text-gold px-2 py-0.5 rounded-full bg-white border border-gold/30">
                  Pillar 01
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">
                1. READ
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal leading-relaxed">
                Encourage children and adults to rediscover books and make reading a daily habit.
              </p>
            </div>

            {/* 2. WRITE */}
            <div className="p-5 rounded-2xl bg-ivory-warm border border-border/70 hover:border-gold/60 shadow-xs hover:shadow-editorial transition-all flex flex-col gap-3 group">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-lavender flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Feather className="w-5 h-5 text-gold" />
                </div>
                <span className="font-serif text-[11px] font-bold text-gold px-2 py-0.5 rounded-full bg-white border border-gold/30">
                  Pillar 02
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">
                2. WRITE
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal leading-relaxed">
                Inspire young minds to write stories, share ideas and develop their own expressions.
              </p>
            </div>

            {/* 3. CREATE */}
            <div className="p-5 rounded-2xl bg-ivory-warm border border-border/70 hover:border-gold/60 shadow-xs hover:shadow-editorial transition-all flex flex-col gap-3 group">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-lavender flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Palette className="w-5 h-5 text-gold" />
                </div>
                <span className="font-serif text-[11px] font-bold text-gold px-2 py-0.5 rounded-full bg-white border border-gold/30">
                  Pillar 03
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">
                3. CREATE
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal leading-relaxed">
                Organise creative writing workshops, storytelling activities and literary experiences.
              </p>
            </div>

            {/* 4. SHARE */}
            <div className="p-5 rounded-2xl bg-ivory-warm border border-border/70 hover:border-gold/60 shadow-xs hover:shadow-editorial transition-all flex flex-col gap-3 group">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-lavender flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Share2 className="w-5 h-5 text-gold" />
                </div>
                <span className="font-serif text-[11px] font-bold text-gold px-2 py-0.5 rounded-full bg-white border border-gold/30">
                  Pillar 04
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">
                4. SHARE
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal leading-relaxed">
                Collaborate with NGOs and communities, celebrate young talent and share the joy of books.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. EXPLORE OUR BOOKS — Clean, Scannable 4-Book Grid       */}
      {/* ========================================================= */}
      <section id="books" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Published Catalogue"
              title="Explore Our Books"
              subtitle="All published titles by young author Avni Chaturvedi"
            />
            <Link
              href="/books"
              className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:text-gold transition-colors self-start sm:self-auto"
            >
              <span>Explore Complete Shelf</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {booksData.map((book) => (
              <BookCard key={book.id} book={book} compact={true} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3.5 CHILDREN'S DAY CAMPAIGN SPOTLIGHT                    */}
      {/* ========================================================= */}
      <ChildrensDaySection />

      {/* ========================================================= */}
      {/* 4. SLIM RECOGNITION STRIP — Trust & Accolades Bar         */}
      {/* ========================================================= */}
      <section id="achievements" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="rounded-2xl bg-primary text-white p-6 sm:p-8 border border-gold/40 shadow-editorial">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-1 text-center lg:text-left">
              <span className="text-xs font-sans text-gold font-bold uppercase tracking-widest flex items-center justify-center lg:justify-start gap-1.5">
                <Award className="w-3.5 h-3.5" />
                Institutional Trust &amp; Honors
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                Recognised Literary Milestones
              </h3>
            </div>

            {/* Accolades Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-white/95">
                &apos;उत्तर प्रदेश की बात&apos; Mahasangam Honoree
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-white/95">
                Lucknow Book Fair 2026 Speaker
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-white/95">
                Verified Amazon Author
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-white/95">
                SRMU Literary Partner
              </span>
            </div>

            <Link
              href="/achievements"
              className="px-5 py-2.5 rounded-xl bg-gold text-primary font-sans text-xs font-bold hover:bg-gold-light transition-colors inline-flex items-center gap-1.5 shrink-0"
            >
              <span>View Honors</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. COMMUNITY CTA BANNER — Ek Bachcha, Ek Pustak Padhe     */}
      {/* ========================================================= */}
      <section id="community" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 scroll-mt-24">
        <div className="rounded-2xl bg-gradient-to-r from-lavender/80 via-ivory to-lavender/80 p-8 sm:p-12 border border-primary/10 shadow-editorial text-center flex flex-col items-center gap-5">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-md ring-2 ring-gold/50 bg-white">
            <Image
              src="/images/logo.png"
              alt="Read Pustak with Avni Emblem"
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-sans text-xs uppercase tracking-widest text-gold font-bold">
              Connect • Collaborate • Participate
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
              Join Our Community
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-primary font-medium">
              “Ek Bachcha, Ek Pustak Padhe.”
            </p>
          </div>

          <p className="font-sans text-sm sm:text-base text-charcoal-muted max-w-xl leading-relaxed">
            Every child who opens a book opens a door to infinite empathy and
            wisdom. Join our community reading drives, invite us to your school,
            or share your stories with us.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-primary text-white font-sans text-sm font-semibold hover:bg-primary-hover shadow-sm transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-gold" />
              <span>Get in Touch</span>
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 rounded-lg bg-white text-primary font-sans text-sm font-semibold hover:bg-lavender border border-border shadow-xs transition-colors"
            >
              <span>Our Vision</span>
            </Link>
          </div>

          {/* Social Links & Address Strip */}
          <div className="pt-4 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4 w-full max-w-xl text-xs text-charcoal">
            <div className="flex items-center gap-2 text-charcoal-muted">
              <MapPin className="w-4 h-4 text-gold shrink-0" />
              <span>Gomti Nagar, Lucknow, India</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/author_avnic?srtk=bzBwcXg1ZW51M2Nt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 hover:bg-lavender border border-border text-primary font-medium transition-colors"
                aria-label="Instagram profile of author Avni Chaturvedi"
              >
                <Instagram className="w-3.5 h-3.5 text-gold" />
                <span>Instagram</span>
              </a>
              <a
                href="https://youtube.com/@neenachaturvedi8736?si=vhHxABlHTQf8rgft"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 hover:bg-lavender border border-border text-primary font-medium transition-colors"
                aria-label="YouTube channel of Neena Chaturvedi"
              >
                <Youtube className="w-3.5 h-3.5 text-[#FF0000]" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
