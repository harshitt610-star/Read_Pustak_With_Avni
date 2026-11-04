import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  BookOpen,
  Feather,
  Users,
  Award,
  ArrowRight,
  Heart,
  Quote,
  CheckCircle2,
} from "lucide-react";
import { booksData } from "@/data/books";
import { foundersData } from "@/data/founders";
import { BookCard } from "@/components/books/BookCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function HomePage() {
  const avni = foundersData.find((f) => f.id === "avni-chaturvedi")!;
  const neena = foundersData.find((f) => f.id === "neena-chaturvedi")!;

  return (
    <div className="flex flex-col gap-16 lg:gap-24 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-16 lg:pb-20 bg-gradient-to-b from-[#FFF9F1] via-[#FAF0FF]/60 to-[#FFF9F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headlines & Call to Actions */}
            <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 items-start">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lavender border border-primary/10 text-primary text-xs font-sans font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-gold fill-gold" />
                <span>A Literary &amp; Educational Initiative</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.12]">
                Read Pustak with Avni
              </h1>

              {/* Slogan */}
              <p className="font-serif italic text-xl sm:text-2xl text-gold font-medium leading-snug">
                “Every Child Has a Story Worth Sharing.”
              </p>

              {/* Editorial Description */}
              <p className="font-sans text-base sm:text-lg text-charcoal leading-relaxed max-w-2xl">
                A heartwarming platform dedicated to cultivating lifelong reading,
                inspiring expressive writing, and nurturing the imaginative
                spirit of young authors. Founded by young author{" "}
                <strong className="text-primary font-semibold">
                  Avni Chaturvedi
                </strong>{" "}
                and publisher{" "}
                <strong className="text-primary font-semibold">
                  Neena Chaturvedi
                </strong>
                , our mission is to empower children to see themselves as
                creators of meaningful stories.
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
                <Link
                  href="/avni-journey"
                  className="px-6 py-3.5 rounded-lg bg-primary text-white font-sans text-sm font-semibold hover:bg-primary-hover shadow-editorial hover:shadow-editorial-hover transition-all flex items-center justify-center gap-2 border border-gold/40 group"
                >
                  <Feather className="w-4 h-4 text-gold group-hover:rotate-12 transition-transform" />
                  <span>Explore Our Journey</span>
                  <ArrowRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/books"
                  className="px-6 py-3.5 rounded-lg bg-white text-primary font-sans text-sm font-semibold hover:bg-lavender/50 border border-border shadow-xs hover:shadow-editorial transition-all flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-gold" />
                  <span>Discover Our Books</span>
                </Link>
              </div>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/80 w-full max-w-xl">
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-primary block">
                    3
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

            {/* Right Column: Avni's Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-editorial-hover border-2 border-gold/30 bg-ivory-warm">
                <Image
                  src={avni.image}
                  alt="Avni Chaturvedi portrait"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

                {/* Ambient Quote Card Overlay */}
                <div className="absolute bottom-5 inset-x-5 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-gold/40 flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-gold text-xs font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Creative Inspiration</span>
                  </div>
                  <p className="font-serif italic text-sm sm:text-base text-primary font-medium">
                    “Young in Age, Limitless in Imagination.”
                  </p>
                  <span className="font-sans text-xs text-charcoal-muted self-end">
                    — Avni Chaturvedi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT THE INITIATIVE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 flex flex-col gap-4">
              <SectionHeading
                eyebrow="Our Story &amp; Imprint"
                title="About the Initiative"
                subtitle="Bridging youth curiosity with editorial excellence"
              />
              <p className="font-sans text-sm sm:text-base text-charcoal leading-relaxed">
                <strong className="text-primary font-semibold">
                  Read Pustak with Avni
                </strong>{" "}
                is the community and literary outreach initiative powered by{" "}
                <strong className="text-primary font-semibold">
                  Read Pustak Publications
                </strong>
                . Founded in New Delhi by Neena Chaturvedi and inspired by Avni&apos;s
                writing journey, we believe that when children fall in love with
                books, they gain a sanctuary of wonder, empathy, and creative
                confidence.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary font-sans text-sm font-semibold hover:text-gold transition-colors"
                >
                  <span>Learn more about our philosophy</span>
                  <ArrowRight className="w-4 h-4 text-gold" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-ivory-warm border border-border flex flex-col gap-2">
                <div className="w-10 h-10 rounded-lg bg-lavender flex items-center justify-center text-primary mb-1">
                  <BookOpen className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-serif text-base font-bold text-primary">
                  Cultivating Reading
                </h3>
                <p className="font-sans text-xs text-charcoal-muted leading-relaxed">
                  Making literature an accessible, joyful daily habit for every
                  child.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-ivory-warm border border-border flex flex-col gap-2">
                <div className="w-10 h-10 rounded-lg bg-lavender flex items-center justify-center text-primary mb-1">
                  <Feather className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-serif text-base font-bold text-primary">
                  Inspiring Writing
                </h3>
                <p className="font-sans text-xs text-charcoal-muted leading-relaxed">
                  Encouraging children to express their original thoughts and fables.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-ivory-warm border border-border flex flex-col gap-2">
                <div className="w-10 h-10 rounded-lg bg-lavender flex items-center justify-center text-primary mb-1">
                  <Users className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-serif text-base font-bold text-primary">
                  Youth Authorship
                </h3>
                <p className="font-sans text-xs text-charcoal-muted leading-relaxed">
                  Demonstrating that age is never a boundary to meaningful
                  expression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MEET OUR FOUNDERS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Leadership &amp; Inspiration"
              title="Meet Our Founders"
              subtitle="A harmonious partnership of mentoring wisdom and youthful imagination"
            />
            <Link
              href="/founders"
              className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:text-gold transition-colors self-start sm:self-auto"
            >
              <span>View Full Profiles</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Avni Card */}
            <div className="bg-white rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-8 flex flex-col gap-5 hover:shadow-editorial-hover transition-all">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border-2 border-gold/40 shadow-sm">
                  <Image
                    src={avni.image}
                    alt={avni.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xs font-semibold text-gold uppercase tracking-wider">
                    Young Author &amp; Storyteller
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                    {avni.name}
                  </h3>
                  <span className="font-sans text-xs text-charcoal-muted">
                    Began writing at age 10 • 3 Published Books
                  </span>
                </div>
              </div>
              <p className="font-sans text-sm text-charcoal leading-relaxed">
                Avni crafts stories rooted in natural curiosity, Indian
                tradition, and life reflections. She inspires young minds to
                trust their creative voices and write with sincerity.
              </p>
              <blockquote className="p-3.5 rounded-lg bg-lavender/50 border-l-2 border-gold font-serif italic text-xs sm:text-sm text-primary">
                {avni.quote}
              </blockquote>
            </div>

            {/* Neena Card */}
            <div className="bg-white rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-8 flex flex-col gap-5 hover:shadow-editorial-hover transition-all">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border-2 border-gold/40 shadow-sm">
                  <Image
                    src={neena.image}
                    alt={neena.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xs font-semibold text-gold uppercase tracking-wider">
                    Founder &amp; Owner
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                    {neena.name}
                  </h3>
                  <span className="font-sans text-xs text-charcoal-muted">
                    Read Pustak Publications Imprint
                  </span>
                </div>
              </div>
              <p className="font-sans text-sm text-charcoal leading-relaxed">
                Neena leads publishing operations and community literacy drives.
                Her dedication to children&apos;s books builds welcoming spaces for
                curious readers and budding writers alike.
              </p>
              <blockquote className="p-3.5 rounded-lg bg-lavender/50 border-l-2 border-gold font-serif italic text-xs sm:text-sm text-primary">
                {neena.quote}
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED BOOKS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Published Catalogue"
              title="Featured Books by Avni"
              subtitle="Stories that spark curiosity, celebrate heritage, and stay with readers"
            />
            <Link
              href="/books"
              className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:text-gold transition-colors self-start sm:self-auto"
            >
              <span>Explore Complete Shelf</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {booksData.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. VERIFIED ACHIEVEMENTS & MILESTONES BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary text-white rounded-2xl p-8 sm:p-12 shadow-editorial-hover relative overflow-hidden border border-gold/40">
          <div className="relative z-10 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-sans text-gold font-bold uppercase tracking-widest">
                Milestones &amp; Outreach
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold">
                Literary Milestones &amp; Social Impact
              </h2>
              <p className="font-sans text-sm sm:text-base text-white/80 max-w-2xl">
                From early journal writing at age 10 to speaking at literary
                gatherings and distributing books to young learners in need.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 rounded-xl p-5 border border-white/10 backdrop-blur-sm flex flex-col gap-1.5">
                <span className="text-xs text-gold uppercase tracking-wider font-semibold">
                  Author Milestone
                </span>
                <span className="font-serif text-xl font-bold">
                  3 Published Works
                </span>
                <span className="text-xs text-white/70">
                  Children&apos;s fables &amp; philosophy
                </span>
              </div>

              <div className="bg-white/10 rounded-xl p-5 border border-white/10 backdrop-blur-sm flex flex-col gap-1.5">
                <span className="text-xs text-gold uppercase tracking-wider font-semibold">
                  Literary Stage
                </span>
                <span className="font-serif text-xl font-bold">
                  Lucknow Book Fair 2026
                </span>
                <span className="text-xs text-white/70">
                  Invited Youth Speaker
                </span>
              </div>

              <div className="bg-white/10 rounded-xl p-5 border border-white/10 backdrop-blur-sm flex flex-col gap-1.5">
                <span className="text-xs text-gold uppercase tracking-wider font-semibold">
                  Community Partner
                </span>
                <span className="font-serif text-xl font-bold">
                  Apni Pathshala
                </span>
                <span className="text-xs text-white/70">
                  Reading drives &amp; circles
                </span>
              </div>

              <div className="bg-white/10 rounded-xl p-5 border border-white/10 backdrop-blur-sm flex flex-col gap-1.5">
                <span className="text-xs text-gold uppercase tracking-wider font-semibold">
                  Shelter Outreach
                </span>
                <span className="font-serif text-xl font-bold">
                  Manisha Mandir
                </span>
                <span className="text-xs text-white/70">
                  Storytelling for girls
                </span>
              </div>
            </div>

            <div className="pt-2 flex justify-start">
              <Link
                href="/achievements"
                className="px-6 py-3 rounded-lg bg-gold text-primary font-sans text-sm font-bold hover:bg-gold-light transition-colors inline-flex items-center gap-2"
              >
                <Award className="w-4 h-4" />
                <span>Read Verified Impact Report</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLOSING CULTURAL SLOGAN SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="rounded-2xl bg-gradient-to-r from-lavender/80 via-ivory to-lavender/80 p-8 sm:p-12 border border-primary/10 shadow-editorial text-center flex flex-col items-center gap-4">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-md ring-2 ring-gold/50 bg-white">
            <Image
              src="/images/logo.png"
              alt="Read Pustak with Avni Emblem"
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>

          <h3 className="font-serif text-2xl sm:text-4xl font-bold text-primary">
            “Ek Bachcha, Ek Pustak Padhe.”
          </h3>

          <p className="font-sans text-sm sm:text-base text-charcoal-muted max-w-xl leading-relaxed">
            Every child who opens a book opens a door to infinite empathy and
            wisdom. Join us in sharing stories that light up young hearts across
            our communities.
          </p>

          <div className="pt-2 flex gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-primary text-white font-sans text-sm font-semibold hover:bg-primary-hover shadow-sm transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 rounded-lg bg-white text-primary font-sans text-sm font-semibold hover:bg-lavender border border-border shadow-xs transition-colors"
            >
              Our Vision
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

