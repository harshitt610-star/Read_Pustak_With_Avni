import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  BookOpen,
  Feather,
  Sparkles,
  ArrowRight,
  ScrollText,
  Languages,
  CheckCircle2,
  BookmarkCheck,
  Send,
  Library,
  Palette,
  Globe2,
  Users,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Publishing & Editorial | Read Pustak Publications",
  description:
    "Explore the editorial mandate, our story, bilingual publishing vision, and manuscript development journey of Read Pustak Publications in New Delhi.",
};

const publishingStages = [
  {
    step: "01",
    title: "The Authentic Spark",
    subtitle: "Story ideation & original narrative",
    icon: Feather,
    description:
      "Every project begins with a child's natural curiosity and notebooks. We honor the young writer's unfiltered perspective, character sketches, and moral dilemmas rather than forcing corporate commercial formulas.",
  },
  {
    step: "02",
    title: "Developmental Mentorship",
    subtitle: "Gentle editorial guidance",
    icon: ScrollText,
    description:
      "Editorial Director Neena Chaturvedi provides thoughtful feedback on pacing, dialogue rhythm, and chapter structure — always preserving the child's genuine voice and unique creative instincts.",
  },
  {
    step: "03",
    title: "Visual Art & Cultural Aesthetics",
    subtitle: "Original cover art & illustrations",
    icon: Palette,
    description:
      "Each book is paired with vivid cover art and thematic illustrations that bring mythological, natural, or everyday concepts to life, celebrating the colorful cultural tapestry of India.",
  },
  {
    step: "04",
    title: "Typesetting & ISBN Registration",
    subtitle: "Professional cataloguing standards",
    icon: BookmarkCheck,
    description:
      "From dual-script typography (Hindi and English) to archival paper selection and international ISBN registration, we adhere to the highest standard of book craft.",
  },
  {
    step: "05",
    title: "Community & Global Distribution",
    subtitle: "Amazon Author Central & school libraries",
    icon: Globe2,
    description:
      "Published works reach readers worldwide via Amazon Kindle and paperback editions, regional book fairs, and curated school library distribution across India.",
  },
];

const editorialStandards = [
  {
    title: "Cultural Wisdom & Nature Harmony",
    description:
      "We champion stories that reconnect children with the five natural elements (Pancha Tatva), traditional folklore, and timeless civilizational values of India.",
    badge: "Heritage Focus",
  },
  {
    title: "Authentic Child-Centric Perspective",
    description:
      "Our publications speak from the authentic vantage point of young readers and authors — never condescending, always intellectually stimulating.",
    badge: "Pure Voice",
  },
  {
    title: "Bilingual Cognitive Literacy",
    description:
      "We intentionally publish bilingual literature (Hindi & English) to bridge cultural memory with modern expression, enriching linguistic fluency.",
    badge: "Dual Script",
  },
  {
    title: "Heirloom Print Craftsmanship",
    description:
      "Books designed to last — tactile pages, warm typography, and artistic covers that make turning physical pages a treasured daily ritual away from screens.",
    badge: "Print Longevity",
  },
];

export default function PublishingEditorialPage() {
  return (
    <div className="flex flex-col gap-16 lg:gap-24 py-6 sm:py-10">
      {/* 1. HERO SECTION: Editorial Mandate */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-b from-white to-[#FAF0FF]/50 rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-12 lg:p-16 flex flex-col gap-6 relative overflow-hidden">
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lavender border border-primary/10 text-primary text-xs font-sans font-semibold tracking-wider uppercase self-start">
              <ScrollText className="w-3.5 h-3.5 text-gold" />
              <span>Read Pustak Publications • New Delhi</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.15]">
              Publishing &amp; Editorial Mandate
            </h1>
            <p className="font-serif italic text-lg sm:text-2xl text-gold font-medium leading-relaxed max-w-3xl">
              “Where young imagination meets dedicated editorial craft and the enduring permanence of print.”
            </p>
          </div>

          <div className="flex flex-col gap-4 font-sans text-sm sm:text-base text-charcoal leading-relaxed max-w-4xl pt-2">
            <p>
              <strong>Read Pustak Publications</strong> is an independent literary
              imprint established with a distinctive purpose: to prove that young
              voices, when supported with patient mentorship and professional
              publishing standards, produce literature of cultural significance
              and lasting emotional resonance.
            </p>
            <p>
              Rather than treating books as mere commercial commodities, our
              editorial house takes a boutique, handcrafted approach. We celebrate
              stories as companions of solace, mirrors of culture, and windows to
              boundless imaginative possibilities.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY — Avni's Column & Neena's Column */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-10 lg:p-12 flex flex-col gap-10">
          <SectionHeading
            eyebrow="Origins & Creative Genesis"
            title="Our Story"
            subtitle="From a childhood writing desk to an inspiring publishing platform"
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left: Avni's Column */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#FFF9F1] via-[#FAF0FF]/40 to-[#FFF9F1] border-2 border-gold/40 shadow-xs flex flex-col justify-between gap-6 group">
              <div className="flex flex-col gap-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border-2 border-gold/50 bg-ivory-warm">
                  <Image
                    src="/images/avni/avni-desk-writing.jpg"
                    alt="Young author Avni Chaturvedi sitting at her desk writing in notebooks"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase font-sans font-bold tracking-widest text-gold block">
                      Young Author&apos;s Desk
                    </span>
                    <p className="font-serif text-sm font-semibold">
                      Avni Chaturvedi • The Creative Spark
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-gold">
                    Creative Genesis • Age 10
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                    Avni&apos;s Storytelling Journey
                  </h3>
                </div>

                <p className="font-sans text-sm text-charcoal leading-relaxed">
                  The seeds of Read Pustak were sown when Avni, at age ten, began
                  filling notebooks with character sketches, moral fables, and
                  observations of the natural world. Her passion for turning
                  everyday curiosity into evocative prose represents the
                  heartbeat of our movement.
                </p>

                <p className="font-sans text-sm text-charcoal leading-relaxed">
                  Now the author of four published works—including <em>Emma Finds Her Solution</em>, <em>The Panch Tatva Tales</em>, and <em>Ancient Answers for Modern Problems</em>—she proves that age should never limit the depth of an idea.
                </p>
              </div>

              <blockquote className="p-3.5 rounded-lg bg-lavender/60 border-l-4 border-gold font-serif italic text-xs sm:text-sm text-primary">
                “Age should never limit imagination or the power of ideas.” — Avni
              </blockquote>
            </div>

            {/* Right: Neena's Column */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#FFF9F1] via-[#FAF0FF]/40 to-[#FFF9F1] border-2 border-gold/40 shadow-xs flex flex-col justify-between gap-6 group">
              <div className="flex flex-col gap-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border-2 border-gold/50 bg-ivory-warm">
                  <Image
                    src="/images/founders/neena-desk.jpg"
                    alt="Founder Neena Chaturvedi editing manuscripts at her desk"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase font-sans font-bold tracking-widest text-gold block">
                      Editorial Director&apos;s Desk
                    </span>
                    <p className="font-serif text-sm font-semibold">
                      Neena Chaturvedi • Editorial Vision
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-gold">
                    Editorial Leadership • New Delhi
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                    Neena&apos;s Publishing Mandate
                  </h3>
                </div>

                <p className="font-sans text-sm text-charcoal leading-relaxed">
                  Seeing her daughter&apos;s boundless creative dedication,
                  publisher Neena Chaturvedi realized that countless children harbor
                  similar literary sparks that simply need receptive encouragement
                  and structured editorial stewardship.
                </p>

                <p className="font-sans text-sm text-charcoal leading-relaxed">
                  Through <strong>Read Pustak Publications</strong>, she established
                  a literary imprint that mentors young writers through every
                  phase—developmental editing, illustration, ISBN cataloguing, and
                  global distribution—ensuring their voices reach audiences with
                  dignity.
                </p>
              </div>

              <blockquote className="p-3.5 rounded-lg bg-lavender/60 border-l-4 border-gold font-serif italic text-xs sm:text-sm text-primary">
                “Make reading a habit, writing an expression, and publishing an opportunity.” — Neena
              </blockquote>
            </div>
          </div>

          {/* Shared Closing Manifesto Banner */}
          <div className="p-5 sm:p-6 rounded-xl bg-primary text-white border border-gold/40 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gold shrink-0 border border-gold/40">
                <Sparkles className="w-5 h-5" />
              </div>
              <p className="font-serif italic text-base sm:text-lg text-white font-medium">
                “One vision, a love for books and a shared dream of making every story matter.”
              </p>
            </div>
            <Link
              href="/founders"
              className="px-5 py-2.5 rounded-lg bg-gold text-primary font-sans text-xs sm:text-sm font-bold hover:bg-gold-light transition-colors whitespace-nowrap shrink-0"
            >
              Meet the Founders Profile
            </Link>
          </div>
        </div>
      </section>

      {/* 3. THE BILINGUAL PUBLISHING PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-10 lg:p-12 flex flex-col gap-8">
          <SectionHeading
            eyebrow="Cultural Heritage & Language"
            title="Our Bilingual Publishing Vision"
            subtitle="Connecting English and Hindi literature for the contemporary child"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 flex flex-col gap-4 font-sans text-sm sm:text-base text-charcoal leading-relaxed">
              <p>
                In today&apos;s digital era, many children navigate schooling in
                English while gradually losing touch with their native linguistic
                and cultural heritage. At <strong>Read Pustak Publications</strong>,
                we embrace bilingual publishing as a powerful bridge.
              </p>
              <p>
                Books such as <em>Ancient Answers for Modern Problems (आधुनिक समस्याओं के प्राचीन समाधान)</em> and{" "}
                <em>Incredible Bharat (एक देश, अनेक कहानियाँ)</em> present stories
                with bilingual resonance. By placing English prose alongside
                thoughtful Hindi expressions, we allow young minds to develop
                dual-language fluency naturally.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-lavender/60 border border-primary/10 flex flex-col gap-1">
                  <Languages className="w-5 h-5 text-gold mb-1" />
                  <span className="font-serif text-sm font-bold text-primary">
                    Cultural Anchoring
                  </span>
                  <span className="font-sans text-xs text-charcoal-muted">
                    Stories grounded in Indian moral fables and environmental wisdom.
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-lavender/60 border border-primary/10 flex flex-col gap-1">
                  <Globe2 className="w-5 h-5 text-gold mb-1" />
                  <span className="font-serif text-sm font-bold text-primary">
                    Global Dexterity
                  </span>
                  <span className="font-sans text-xs text-charcoal-muted">
                    Fluent modern English narration accessible to worldwide readers.
                  </span>
                </div>
              </div>
            </div>

            {/* Bilingual Book Covers Showcase */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md border border-gold/30 hover:shadow-editorial transition-all group">
                <Image
                  src="/images/books/ancient-answers.jpg"
                  alt="Ancient Answers for Modern Problems - Bilingual Book Cover"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent text-white text-center">
                  <span className="text-[10px] uppercase font-sans font-bold text-gold tracking-wider block">
                    Bilingual Edition
                  </span>
                  <span className="font-serif text-xs font-semibold leading-tight line-clamp-1">
                    Ancient Answers
                  </span>
                </div>
              </div>

              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md border border-gold/30 hover:shadow-editorial transition-all group">
                <Image
                  src="/images/books/incredible-bharat.jpg"
                  alt="Incredible Bharat - Ek Desh, Anek Kahaniyaan Book Cover"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent text-white text-center">
                  <span className="text-[10px] uppercase font-sans font-bold text-gold tracking-wider block">
                    Cultural Folklore
                  </span>
                  <span className="font-serif text-xs font-semibold leading-tight line-clamp-1">
                    Incredible Bharat
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FROM MANUSCRIPT TO BOOKSHELF: 5-STEP PUBLISHING JOURNEY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="The Craft & Production"
            title="From Manuscript to Bookshelf"
            subtitle="The 5-stage developmental pathway behind every Read Pustak publication"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {publishingStages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.step}
                  className="bg-white rounded-2xl border border-border/80 shadow-xs hover:shadow-editorial p-6 flex flex-col justify-between gap-4 transition-all group hover:-translate-y-1"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-lavender flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-gold" />
                      </div>
                      <span className="font-serif text-xs font-bold text-gold px-2.5 py-1 rounded-full bg-ivory-warm border border-gold/30">
                        Stage {stage.step}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <h3 className="font-serif text-base sm:text-lg font-bold text-primary leading-tight">
                        {stage.title}
                      </h3>
                      <span className="font-sans text-[11px] font-semibold text-gold uppercase tracking-wider mt-0.5">
                        {stage.subtitle}
                      </span>
                    </div>

                    <p className="font-sans text-xs text-charcoal leading-relaxed pt-1">
                      {stage.description}
                    </p>
                  </div>

                  <div className="w-full h-1 bg-lavender rounded-full overflow-hidden">
                    <div className="h-full bg-gold/60 w-3/4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. EDITORIAL STANDARDS & WHAT WE CHAMPION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-primary text-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-editorial-hover relative overflow-hidden border border-gold/40">
          <div className="relative z-10 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-sans text-gold font-bold uppercase tracking-widest">
                Curatorial Principles
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold">
                Our Editorial Standards
              </h2>
              <p className="font-sans text-sm sm:text-base text-white/80 max-w-2xl">
                What makes a book worthy of the Read Pustak imprint? Four non-negotiable principles guiding every page we produce.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {editorialStandards.map((std) => (
                <div
                  key={std.title}
                  className="p-6 rounded-xl bg-white/10 border border-white/10 hover:border-gold/50 flex flex-col gap-3 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-gold/20 text-gold text-[10px] font-sans font-bold uppercase tracking-wider">
                      {std.badge}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white leading-snug">
                    {std.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
                    {std.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. YOUNG WRITERS MENTORSHIP & EDITORIAL INQUIRIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-r from-lavender/80 via-ivory to-lavender/80 border border-gold/40 rounded-2xl p-8 sm:p-12 text-center flex flex-col items-center gap-5 shadow-editorial">
          <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary border border-gold/30">
            <Library className="w-7 h-7 text-gold" />
          </div>

          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-sans text-xs uppercase tracking-widest text-gold font-bold">
              Submissions &amp; Mentorship
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-primary">
              Have a Young Writer with a Story?
            </h2>
            <p className="font-sans text-sm sm:text-base text-charcoal leading-relaxed">
              If your child, student, or school has manuscripts, notebooks of
              fables, or young creative storytellers eager to learn about the
              publishing journey, we invite you to connect with our editorial team.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-lg bg-primary text-white font-sans text-sm font-semibold hover:bg-primary-hover shadow-editorial hover:shadow-editorial-hover transition-all flex items-center gap-2 border border-gold/40"
            >
              <Send className="w-4 h-4 text-gold" />
              <span>Connect with Our Editorial Board</span>
            </Link>
            <Link
              href="/books"
              className="px-6 py-3.5 rounded-lg bg-white text-primary font-sans text-sm font-semibold hover:bg-lavender/50 border border-border shadow-xs transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-gold" />
              <span>Browse Published Catalogue</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
