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
  Theater,
  Globe,
  Share2,
  Palette,
  Calendar,
  Mail,
  Camera,
} from "lucide-react";
import { booksData } from "@/data/books";
import { foundersData } from "@/data/founders";
import { milestonesData } from "@/data/milestones";
import { partnersData } from "@/data/partners";
import { BookCard } from "@/components/books/BookCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlimpsesGallery } from "@/components/glimpses/GlimpsesGallery";
import { HeroPortraitCarousel } from "@/components/home/HeroPortraitCarousel";

export default function HomePage() {
  const avni = foundersData.find((f) => f.id === "avni-chaturvedi")!;
  const neena = foundersData.find((f) => f.id === "neena-chaturvedi")!;

  return (
    <div className="flex flex-col gap-16 lg:gap-24 overflow-hidden">
      {/* ========================================================= */}
      {/* 1. HERO SECTION — Communicates: Our Vision and Mission    */}
      {/* ========================================================= */}
      <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-16 lg:pb-20 bg-gradient-to-b from-[#FFF9F1] via-[#FAF0FF]/60 to-[#FFF9F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Vision & Mission */}
            <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 items-start">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lavender border border-primary/10 text-primary text-xs font-sans font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-gold fill-gold" />
                <span>Read Pustak with Avni</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.12]">
                Turn Pages, Not Just Screens.
              </h1>

              {/* Supporting Title */}
              <p className="font-serif italic text-xl sm:text-2xl text-gold font-medium leading-snug">
                Rediscover the Joy of Reading.
              </p>

              {/* Description */}
              <p className="font-sans text-base sm:text-lg text-charcoal leading-relaxed max-w-2xl">
                In a world where screens compete for our attention, we bring books
                back into everyday life. We believe everyone deserves the joy of
                reading, the freedom to imagine and the opportunity to discover a
                new world through every book.
              </p>

              {/* Standout Mission Box */}
              <div className="p-4 rounded-xl bg-white border-l-4 border-gold shadow-editorial border border-border/70 flex flex-col gap-1 w-full max-w-xl">
                <p className="font-serif italic text-sm sm:text-base text-primary font-medium leading-relaxed">
                  “Our mission is simple: Make reading a habit for everyone, not a lost art in the digital age.”
                </p>
                <span className="font-sans text-xs font-bold text-gold uppercase tracking-wider pt-0.5">
                  Read More. Imagine More. Grow More.
                </span>
              </div>

              {/* Suggested Action Buttons */}
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

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/80 w-full max-w-xl">
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

            {/* Right Column: Avni's Dynamic Auto-Scrolling Portrait Carousel */}
            <div className="lg:col-span-5 flex justify-center">
              <HeroPortraitCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. OUR PHILOSOPHY — Communicates: Read • Write • Create • Share */}
      {/* ========================================================= */}
      <section id="philosophy" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col gap-10">
          <SectionHeading
            eyebrow="Our Guiding Ethos"
            title="Our Philosophy"
            subtitle="Read • Write • Create • Share"
            align="center"
          />

          {/* Philosophy Narrative */}
          <div className="max-w-4xl mx-auto flex flex-col gap-6 text-center -mt-2">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FFF9F1] via-[#FAF0FF]/60 to-[#FFF9F1] border border-gold/30 shadow-xs">
              <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-primary font-medium leading-relaxed">
                “We believe that every book opens a new world, every written word carries an idea, every creative activity builds confidence and every shared story has the power to inspire others.”
              </p>
            </div>

            <div className="flex flex-col gap-4 font-sans text-sm sm:text-base text-charcoal/90 leading-relaxed text-left sm:text-center max-w-3xl mx-auto">
              <p>
                At <strong>Read Pustak with Avni</strong>, our philosophy goes beyond reading books. We believe in taking literature beyond pages and bringing it into communities, classrooms and young minds.
              </p>
              <p>
                Through literary workshops, storytelling sessions, creative writing activities and collaborations with NGOs and educational organisations, we encourage children to discover the joy of reading and the confidence to express themselves.
              </p>
              <p className="font-semibold text-primary">
                We believe that reading should be experienced, creativity should be encouraged and opportunities should be shared.
              </p>
            </div>
          </div>

          {/* 4 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {/* 1. READ */}
            <div className="p-6 rounded-2xl bg-ivory-warm border-2 border-border/70 hover:border-gold/60 shadow-xs hover:shadow-editorial transition-all flex flex-col gap-4 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-lavender flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6 text-gold" />
                </div>
                <span className="font-serif text-xs font-bold text-gold px-2.5 py-1 rounded-full bg-white border border-gold/30">
                  Pillar 01
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-2xl font-bold text-primary">
                  1. READ
                </h3>
                <p className="font-sans text-xs uppercase tracking-wider font-semibold text-gold">
                  Build a reading culture
                </p>
              </div>
              <p className="font-sans text-sm text-charcoal leading-relaxed">
                Encourage children and adults to rediscover books and make reading a daily habit.
              </p>
            </div>

            {/* 2. WRITE */}
            <div className="p-6 rounded-2xl bg-ivory-warm border-2 border-border/70 hover:border-gold/60 shadow-xs hover:shadow-editorial transition-all flex flex-col gap-4 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-lavender flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Feather className="w-6 h-6 text-gold" />
                </div>
                <span className="font-serif text-xs font-bold text-gold px-2.5 py-1 rounded-full bg-white border border-gold/30">
                  Pillar 02
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-2xl font-bold text-primary">
                  2. WRITE
                </h3>
                <p className="font-sans text-xs uppercase tracking-wider font-semibold text-gold">
                  Give words a voice
                </p>
              </div>
              <p className="font-sans text-sm text-charcoal leading-relaxed">
                Inspire young minds to write stories, share ideas and develop their own expressions.
              </p>
            </div>

            {/* 3. CREATE */}
            <div className="p-6 rounded-2xl bg-ivory-warm border-2 border-border/70 hover:border-gold/60 shadow-xs hover:shadow-editorial transition-all flex flex-col gap-4 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-lavender flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Palette className="w-6 h-6 text-gold" />
                </div>
                <span className="font-serif text-xs font-bold text-gold px-2.5 py-1 rounded-full bg-white border border-gold/30">
                  Pillar 03
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-2xl font-bold text-primary">
                  3. CREATE
                </h3>
                <p className="font-sans text-xs uppercase tracking-wider font-semibold text-gold">
                  Turn imagination into action
                </p>
              </div>
              <p className="font-sans text-sm text-charcoal leading-relaxed">
                Organise creative writing workshops, storytelling activities and literary experiences.
              </p>
            </div>

            {/* 4. SHARE */}
            <div className="p-6 rounded-2xl bg-ivory-warm border-2 border-border/70 hover:border-gold/60 shadow-xs hover:shadow-editorial transition-all flex flex-col gap-4 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-lavender flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Share2 className="w-6 h-6 text-gold" />
                </div>
                <span className="font-serif text-xs font-bold text-gold px-2.5 py-1 rounded-full bg-white border border-gold/30">
                  Pillar 04
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-2xl font-bold text-primary">
                  4. SHARE
                </h3>
                <p className="font-sans text-xs uppercase tracking-wider font-semibold text-gold">
                  Inspire through giving
                </p>
              </div>
              <p className="font-sans text-sm text-charcoal leading-relaxed">
                Collaborate with NGOs and communities, celebrate young talent and share the joy of books.
              </p>
            </div>
          </div>

          {/* Glimpses in Action Showcase & Featured Workshop */}
          <div className="mt-4 pt-8 border-t border-border">
            <GlimpsesGallery />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. MEET THE FOUNDERS — Communicates: Avni and Neena       */}
      {/* ========================================================= */}
      <section id="founders" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Visionaries Behind the Pages"
              title="Meet the Founders"
              subtitle="Avni and Neena — Mentoring wisdom united with young imagination"
            />
            <Link
              href="/founders"
              className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:text-gold transition-colors self-start sm:self-auto"
            >
              <span>View In-Depth Profiles</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Avni Card */}
            <div className="bg-white rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-8 flex flex-col gap-5 hover:shadow-editorial-hover transition-all">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border-2 border-gold/40 shadow-sm bg-ivory-warm">
                  <Image
                    src={avni.image}
                    alt={avni.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xs font-semibold text-gold uppercase tracking-wider">
                    Young Author | Creative Inspiration
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                    {avni.name}
                  </h3>
                  <span className="font-sans text-xs text-charcoal-muted">
                    The Face of Read Pustak with Avni
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 font-sans text-sm text-charcoal leading-relaxed">
                <p>
                  Avni Chaturvedi is a young published author whose literary journey began at the age of 10. With a passion for storytelling, imagination and meaningful writing, she represents the creative spirit behind Read Pustak with Avni.
                </p>
                <p>
                  Author of <em>Emma Finds Her Solution</em>, <em>Pancha Tatva Tales: Stories of Joy and Wisdom</em>, <em>Ancient Answers for Modern Problems</em>, and <em>Incredible Bharat</em>, Avni believes that age should never limit imagination or the power of ideas.
                </p>
                <p>
                  Beyond writing books, she participates in literary workshops, storytelling activities, theatre and initiatives that encourage children to explore their creative potential. Through Read Pustak with Avni, she hopes to inspire more children to pick up a book, express their thoughts and discover the joy of becoming storytellers.
                </p>
              </div>
              <blockquote className="p-3.5 rounded-lg bg-lavender/50 border-l-2 border-gold font-serif italic text-xs sm:text-sm text-primary">
                “Age should never limit imagination or the power of ideas.” — Avni Chaturvedi
              </blockquote>
            </div>

            {/* Neena Card */}
            <div className="bg-white rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-8 flex flex-col gap-5 hover:shadow-editorial-hover transition-all">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border-2 border-gold/40 shadow-sm bg-ivory-warm">
                  <Image
                    src={neena.image}
                    alt={neena.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xs font-semibold text-gold uppercase tracking-wider">
                    Founder
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                    {neena.name}
                  </h3>
                  <span className="font-sans text-xs text-charcoal-muted">
                    Read Pustak with Avni
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 font-sans text-sm text-charcoal leading-relaxed">
                <p>
                  A believer in the power of books, education and creative expression, Neena Chaturvedi founded Read Pustak with Avni with a vision to revive the joy of reading in today&apos;s digital age.
                </p>
                <p>
                  With an interest in literature, publishing and nurturing young talent, she believes that books have the power to shape thoughts, develop imagination and create lifelong learners. Through this initiative, she aims to build a literary community that encourages reading, supports aspiring writers, celebrates creativity and creates opportunities for meaningful publishing.
                </p>
              </div>
              <blockquote className="p-3.5 rounded-lg bg-lavender/50 border-l-2 border-gold font-serif italic text-xs sm:text-sm text-primary">
                “Her vision is to make reading a habit, writing an expression and publishing an opportunity for emerging voices.”
              </blockquote>
            </div>
          </div>

          {/* Closing Line Below Both Profiles */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#FAF0FF] via-[#FFF9F1] to-[#FAF0FF] border border-gold/40 text-center shadow-xs">
            <p className="font-serif italic text-base sm:text-lg text-primary font-medium">
              “One vision, a love for books and a shared dream of making every story matter.”
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. AVNI'S JOURNEY — Young writer to published author      */}
      {/* ========================================================= */}
      <section id="journey" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-gradient-to-b from-white to-[#FAF0FF]/50 rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-10 lg:p-12 flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Author's Path"
              title="Avni's Journey"
              subtitle="Her journey from a young writer to published author"
            />
            <Link
              href="/avni-journey"
              className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:text-gold transition-colors self-start sm:self-auto"
            >
              <span>Explore Complete Timeline</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Official Meet the Author Creative */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[1/1.08] rounded-2xl overflow-hidden shadow-editorial-hover border-2 border-gold/40 group bg-ivory-warm">
                <Image
                  src="/images/author/meet-the-author-avni.jpg"
                  alt="Meet the Author - Avni Chaturvedi with published books"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain bg-white group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right: The 3 Milestones & Author Statement */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 sm:p-5 rounded-xl bg-white border border-border/70 shadow-xs flex flex-col gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-lavender text-primary font-sans text-xs font-bold self-start">
                    Age 10
                  </span>
                  <h3 className="font-serif text-base font-bold text-primary">
                    The First Spark
                  </h3>
                  <p className="font-sans text-xs text-charcoal leading-relaxed">
                    Avni begins filling notebooks with personal fables, daily wonder, and character sketches.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-white border border-border/70 shadow-xs flex flex-col gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-gold/15 text-gold-dark font-sans text-xs font-bold self-start">
                    Debut Release
                  </span>
                  <h3 className="font-serif text-base font-bold text-primary">
                    Emma Finds Her Solution
                  </h3>
                  <p className="font-sans text-xs text-charcoal leading-relaxed">
                    Authoring her debut storybook centered on curiosity, youth resilience, and problem-solving.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-white border border-border/70 shadow-xs flex flex-col gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-lavender text-primary font-sans text-xs font-bold self-start">
                    Expanding Horizons
                  </span>
                  <h3 className="font-serif text-base font-bold text-primary">
                    4 Published Titles
                  </h3>
                  <p className="font-sans text-xs text-charcoal leading-relaxed">
                    Spanning fables, cosmic elements, ancient wisdom, and cultural heritage across India.
                  </p>
                </div>
              </div>

              {/* Author Statement Callout */}
              <div className="p-5 rounded-xl bg-white/95 border border-gold/40 shadow-xs flex flex-col gap-2">
                <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>About the Author</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-charcoal leading-relaxed">
                  “Avni Chaturvedi is a young author and student with a passion for storytelling and creative writing. She enjoys reading books, exploring new ideas, and expressing her imagination through words. She believes that every story has the power to teach, inspire, and bring people together.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. EXPLORE OUR BOOKS — Communicates: All Published Books  */}
      {/* ========================================================= */}
      <section id="books" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Published Catalogue"
              title="Explore Our Books"
              subtitle="All published books by young author Avni Chaturvedi"
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
              <BookCard key={book.id} book={book} />
            ))}
          </div>

          {/* Officially Approved & Verified Amazon Author Banner */}
          <div className="mt-4 rounded-2xl border-2 border-gold/50 bg-gradient-to-br from-[#FFF9F1] via-[#FAF0FF]/80 to-[#FFF9F1] p-6 sm:p-8 lg:p-10 shadow-editorial relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Verified Artwork */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-editorial-hover border-2 border-gold/50 group bg-white">
                  <Image
                    src="/images/author/amazon-verified-author.jpg"
                    alt="Officially Approved and Verified Amazon Author - Avni Chaturvedi"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Right Column: Verified Author Details & Links */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-gold/20 text-primary text-xs font-bold uppercase tracking-wider border border-gold/40 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-gold" />
                    Amazon Approved &amp; Verified Author
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white text-charcoal-muted text-xs font-medium border border-border">
                    Global Author Central
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                    Follow Avni&apos;s Journey on Amazon
                  </h3>
                  <p className="font-sans text-sm text-charcoal/90 mt-1">
                    Please visit Avni&apos;s official Amazon Author Page, explore her books, read customer reviews, and follow her literary journey as a young author.
                  </p>
                </div>

                {/* Badges from artwork */}
                <div className="flex flex-wrap gap-2 py-1">
                  <span className="px-3 py-1 rounded-lg bg-white border border-border text-xs font-medium text-primary flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-gold" />
                    Inspiring Stories
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white border border-border text-xs font-medium text-primary flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-gold" />
                    Thoughtful Lessons
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white border border-border text-xs font-medium text-primary flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-gold" />
                    For Young Readers
                  </span>
                </div>

                <blockquote className="font-serif italic text-sm text-primary font-medium border-l-2 border-gold pl-3 py-0.5">
                  “Every book is a step towards a better tomorrow.” — Avni Chaturvedi
                </blockquote>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://www.amazon.com/author/avnic.author"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-primary text-white hover:bg-primary-dark font-sans text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 group"
                  >
                    <span>Visit Amazon Author Page</span>
                    <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <span className="font-sans text-xs text-charcoal-muted">
                    Also available on <strong>Flipkart</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. BEYOND BOOKS — Workshops, Theatre, Storytelling Circles */}
      {/* ========================================================= */}
      <section id="beyond-books" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-10 lg:p-12 flex flex-col gap-8">
          <SectionHeading
            eyebrow="Creative Activities"
            title="Beyond Books"
            subtitle="Workshops, theatre, storytelling and literary activities"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Theatre */}
            <div className="p-6 rounded-xl bg-ivory-warm border border-border flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-lavender flex items-center justify-center text-primary">
                <Theater className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-bold text-primary">
                Theatre &amp; Dramatic Arts
              </h3>
              <p className="font-sans text-sm text-charcoal leading-relaxed">
                Active stage acting and dramatic character study hone emotional
                empathy, spoken dialogue, and authentic narrative rhythm.
              </p>
            </div>

            {/* Model UN */}
            <div className="p-6 rounded-xl bg-ivory-warm border border-border flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-lavender flex items-center justify-center text-primary">
                <Globe className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-bold text-primary">
                Model United Nations (MUN)
              </h3>
              <p className="font-sans text-sm text-charcoal leading-relaxed">
                Engaging in diplomatic debate and youth dialogue sharpens
                critical inquiry and cultural awareness on global concerns.
              </p>
            </div>

            {/* Storytelling Circles */}
            <div className="p-6 rounded-xl bg-ivory-warm border border-border flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-lavender flex items-center justify-center text-primary">
                <Users className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-bold text-primary">
                Storytelling &amp; Writing Circles
              </h3>
              <p className="font-sans text-sm text-charcoal leading-relaxed">
                Interactive workshops for young peers, guiding students to
                translate personal thoughts and fables into written craft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. ACHIEVEMENTS & RECOGNITION — Awards & Honors           */}
      {/* ========================================================= */}
      <section id="achievements" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-primary text-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-editorial-hover relative overflow-hidden border border-gold/40">
          <div className="relative z-10 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-sans text-gold font-bold uppercase tracking-widest">
                Author Accolades
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold">
                Achievements &amp; Recognition
              </h2>
              <p className="font-sans text-sm sm:text-base text-white/80 max-w-2xl">
                Awards, state felicitations, book fair speaker honors, and verified milestones celebrated across Avni&apos;s literary career.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Award Ceremony Photo */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/60 group bg-charcoal">
                  <Image
                    src="/images/achievements/up-ki-baat-award.jpg"
                    alt="Avni Chaturvedi being felicitated with a trophy on stage at Uttar Pradesh Ki Baat"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-gold text-primary text-xs font-bold uppercase tracking-wider shadow-md">
                      State Felicitation
                    </span>
                  </div>
                  <div className="absolute bottom-4 inset-x-4 flex flex-col gap-1 text-white">
                    <h4 className="font-serif text-base sm:text-lg font-bold text-gold-light">
                      &apos;उत्तर प्रदेश की बात&apos; Mahasangam
                    </h4>
                    <p className="font-sans text-xs text-white/90 leading-snug">
                      Avni receiving a prestigious trophy from distinguished dignitaries in recognition of youth literary excellence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Accolades Grid & Link */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-5 border border-white/10 backdrop-blur-sm flex flex-col gap-1.5">
                    <span className="text-xs text-gold uppercase tracking-wider font-semibold">
                      Publishing Record
                    </span>
                    <span className="font-serif text-xl font-bold">
                      4 Published Books
                    </span>
                    <span className="text-xs text-white/70">
                      Authored between 2023 &amp; 2026
                    </span>
                  </div>

                  <div className="bg-white/10 rounded-xl p-5 border border-white/10 backdrop-blur-sm flex flex-col gap-1.5">
                    <span className="text-xs text-gold uppercase tracking-wider font-semibold">
                      Keynote Speaker
                    </span>
                    <span className="font-serif text-xl font-bold">
                      Lucknow Book Fair 2026
                    </span>
                    <span className="text-xs text-white/70">
                      Invited Youth Author &amp; Speaker
                    </span>
                  </div>

                  <div className="bg-white/10 rounded-xl p-5 border border-white/10 backdrop-blur-sm flex flex-col gap-1.5">
                    <span className="text-xs text-gold uppercase tracking-wider font-semibold">
                      University Collaboration
                    </span>
                    <span className="font-serif text-xl font-bold">
                      SRMU Authors&apos; Workshop
                    </span>
                    <span className="text-xs text-white/70">
                      Story Explorers &amp; Apni Pathshaala
                    </span>
                  </div>

                  <div className="bg-white/10 rounded-xl p-5 border border-white/10 backdrop-blur-sm flex flex-col gap-1.5">
                    <span className="text-xs text-gold uppercase tracking-wider font-semibold">
                      Amazon Author
                    </span>
                    <span className="font-serif text-xl font-bold">
                      Officially Verified
                    </span>
                    <span className="text-xs text-white/70">
                      Global Author Central Profile
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex justify-start">
                  <Link
                    href="/achievements"
                    className="px-6 py-3 rounded-lg bg-gold text-primary font-sans text-sm font-bold hover:bg-gold-light transition-colors inline-flex items-center gap-2"
                  >
                    <Award className="w-4 h-4" />
                    <span>Read Complete Achievements Report</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. OUR INITIATIVES — Encouraging Children to Read & Write */}
      {/* ========================================================= */}
      <section id="initiatives" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Community Literacy"
            title="Our Initiatives"
            subtitle="Encouraging children to become readers and writers"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnersData.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-xl border border-border/80 shadow-editorial p-6 flex flex-col justify-between gap-4 hover:shadow-editorial-hover transition-all"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-lavender text-primary text-xs font-semibold">
                      {partner.name}
                    </span>
                    <Heart className="w-4 h-4 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary">
                    {partner.type}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-charcoal leading-relaxed">
                    {partner.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/60">
                  <ul className="flex flex-col gap-1 font-sans text-xs text-charcoal-muted">
                    {partner.initiatives.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. JOIN OUR COMMUNITY — Connect, Collaborate & Participate */}
      {/* ========================================================= */}
      <section id="community" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 scroll-mt-24">
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
        </div>
      </section>
    </div>
  );
}
