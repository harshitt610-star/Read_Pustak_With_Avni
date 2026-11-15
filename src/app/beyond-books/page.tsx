import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Theater,
  Globe,
  Users,
  Sparkles,
  Heart,
  CheckCircle2,
  ArrowRight,
  Mail,
  BookOpen,
} from "lucide-react";
import { partnersData } from "@/data/partners";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlimpsesGallery } from "@/components/glimpses/GlimpsesGallery";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Beyond Books | Theatre, Model UN & Outreach",
  description:
    "Explore theatre, Model United Nations diplomacy, storytelling circles, and community literacy workshops with young author Avni Chaturvedi.",
  alternates: {
    canonical: "https://readpustak.com/beyond-books",
  },
  openGraph: {
    title: "Beyond Books | Theatre, Model UN & Outreach",
    description:
      "Explore youth theatre, diplomacy, and storytelling workshops conducted by young author Avni Chaturvedi across schools and NGOs.",
    url: "https://readpustak.com/beyond-books",
    images: [
      {
        url: "/images/glimpses/srmu-workshop-poster.jpg",
        width: 1200,
        height: 630,
        alt: "SRMU Workshop and literacy initiatives by Read Pustak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Books | Theatre, MUN & Outreach",
    description:
      "Youth theatre, diplomatic discourse, and creative writing circles by Read Pustak with Avni.",
    images: ["/images/glimpses/srmu-workshop-poster.jpg"],
  },
};

export default function BeyondBooksPage() {
  return (
    <div className="flex flex-col gap-16 lg:gap-24 py-6 sm:py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Beyond Books", url: "/beyond-books" },
        ]}
      />
      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-b from-white to-[#FAF0FF]/60 rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-12 lg:p-16 flex flex-col gap-8 relative overflow-hidden">
          <SectionHeading
            as="h1"
            eyebrow="Creative Expression & Youth Action"
            title="Beyond Books"
            subtitle="“Literature lived, spoken, acted, and shared — empowering young voices through theatre, diplomacy, and community workshops.”"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-7 flex flex-col gap-4 font-sans text-sm sm:text-base text-charcoal leading-relaxed">
              <p>
                At <strong>Read Pustak with Avni</strong>, we believe that words belong not only on paper, but on stages, in debates, and across community circles. For young author <strong>Avni Chaturvedi</strong>, literature is an active creative force that connects with people through drama, thoughtful discussion, and peer mentorship.
              </p>
              <p>
                Through stage theatre, Model United Nations (MUN) diplomacy, and creative writing circles, we bridge the gap between imagination and confidence—inspiring children to become active thinkers, compassionate listeners, and bold storytellers.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="#initiatives"
                  className="px-5 py-2.5 rounded-lg bg-primary text-white font-sans text-xs sm:text-sm font-semibold hover:bg-primary-hover shadow-xs transition-colors flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 text-gold" />
                  <span>Our Outreach Initiatives</span>
                </Link>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-lg bg-white text-primary font-sans text-xs sm:text-sm font-semibold hover:bg-lavender border border-border shadow-xs transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  <span>Invite Us to Your School</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-editorial border-2 border-gold/40 bg-ivory-warm">
              <Image
                src="/images/glimpses/glimpse-10.jpg"
                alt="Avni Chaturvedi in dramatic character reading and storytelling"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. THE 3 PILLARS OF BEYOND BOOKS                         */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Multifaceted Expression"
            title="Creativity Across Dimensions"
            subtitle="How dramatic arts, youth diplomacy, and writing circles bring stories to life"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. Theatre */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-border/80 shadow-editorial hover:shadow-editorial-hover transition-all flex flex-col justify-between gap-5 group">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-lavender flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Theater className="w-6 h-6 text-gold" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-xs font-bold text-gold uppercase tracking-wider">
                    Pillar 01
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                    Theatre &amp; Dramatic Arts
                  </h3>
                </div>
                <p className="font-sans text-sm text-charcoal leading-relaxed">
                  Stage acting, character embodiment, and dialogue delivery hone emotional empathy, spoken presence, and narrative rhythm. Stepping into another persona teaches children deep emotional understanding.
                </p>
              </div>
              <div className="pt-4 border-t border-border/60">
                <span className="text-xs font-sans font-semibold text-primary/80">
                  Fosters: Voice, presence &amp; emotional intelligence
                </span>
              </div>
            </div>

            {/* 2. Model UN */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-border/80 shadow-editorial hover:shadow-editorial-hover transition-all flex flex-col justify-between gap-5 group">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-lavender flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-gold" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-xs font-bold text-gold uppercase tracking-wider">
                    Pillar 02
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                    Model United Nations (MUN)
                  </h3>
                </div>
                <p className="font-sans text-sm text-charcoal leading-relaxed">
                  Engaging in diplomatic debate, youth parliamentary discussion, and research sharpens critical thinking and global perspective. It trains young minds to articulate complex ideas with poise and respect.
                </p>
              </div>
              <div className="pt-4 border-t border-border/60">
                <span className="text-xs font-sans font-semibold text-primary/80">
                  Fosters: Diplomacy, critical inquiry &amp; debate
                </span>
              </div>
            </div>

            {/* 3. Storytelling Circles */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-border/80 shadow-editorial hover:shadow-editorial-hover transition-all flex flex-col justify-between gap-5 group">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-lavender flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-xs font-bold text-gold uppercase tracking-wider">
                    Pillar 03
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                    Storytelling &amp; Writing Circles
                  </h3>
                </div>
                <p className="font-sans text-sm text-charcoal leading-relaxed">
                  Interactive workshops designed for young peers, guiding students to translate personal daily wonder, nature observations, and cultural fables into confident written words and original stories.
                </p>
              </div>
              <div className="pt-4 border-t border-border/60">
                <span className="text-xs font-sans font-semibold text-primary/80">
                  Fosters: Peer mentorship &amp; creative expression
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. COMMUNITY INITIATIVES & WORKSHOPS                      */}
      {/* ========================================================= */}
      <section id="initiatives" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-mt-24">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Grassroots Impact"
            title="Our Initiatives &amp; Collaborations"
            subtitle="Partnering with universities, residential shelters, and NGOs to share the joy of books"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnersData.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-7 flex flex-col justify-between gap-5 hover:shadow-editorial-hover transition-all"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-lavender text-primary text-xs font-semibold">
                      {partner.name}
                    </span>
                    <Heart className="w-4 h-4 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary">
                    {partner.type}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-charcoal leading-relaxed">
                    {partner.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60">
                  <span className="text-xs font-bold text-gold uppercase tracking-wider block mb-2">
                    Key Engagements
                  </span>
                  <ul className="flex flex-col gap-2 font-sans text-xs text-charcoal">
                    {partner.initiatives.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
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
      {/* 4. PHOTO GLIMPSES GALLERY IN ACTION                      */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-10 lg:p-12 flex flex-col gap-8">
          <SectionHeading
            eyebrow="Moments Captured"
            title="Glimpses in Action"
            subtitle="Workshops, storytelling drives, university sessions, and stage moments"
          />
          <GlimpsesGallery />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. INVITE & PARTICIPATE CTA                               */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8">
        <div className="rounded-2xl bg-gradient-to-r from-lavender/80 via-ivory to-lavender/80 p-8 sm:p-12 border border-primary/10 shadow-editorial text-center flex flex-col items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-white shadow-sm ring-2 ring-gold/40 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-gold" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-sans text-xs uppercase tracking-widest text-gold font-bold">
              Collaborate With Us
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-primary">
              Bring Read Pustak to Your Community
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-primary font-medium">
              “Every Child Has a Story Worth Sharing.”
            </p>
          </div>

          <p className="font-sans text-sm sm:text-base text-charcoal-muted max-w-xl leading-relaxed">
            We actively collaborate with schools, non-profits, libraries, and youth organizations to conduct storytelling sessions, book donation drives, and creative writing workshops.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-primary text-white font-sans text-sm font-semibold hover:bg-primary-hover shadow-sm transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-gold" />
              <span>Contact for Workshops</span>
            </Link>
            <Link
              href="/books"
              className="px-6 py-3 rounded-lg bg-white text-primary font-sans text-sm font-semibold hover:bg-lavender border border-border shadow-xs transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-gold" />
              <span>Explore Our Books</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

