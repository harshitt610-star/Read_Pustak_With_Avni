import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  School,
  Sparkles,
  Calendar,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  MessageCircle,
  Mail,
  Heart,
} from "lucide-react";
import { WorkshopsSection } from "@/components/workshops/WorkshopsSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "School Workshops & Storytelling Circles | Read Pustak with Avni",
  description:
    "Explore interactive storytelling masterclasses, creative writing boot camps, and school literacy drives conducted by young author Avni Chaturvedi across Lucknow and India.",
  alternates: {
    canonical: "https://readpustak.com/workshops",
  },
  openGraph: {
    title: "School Workshops & Storytelling Circles | Read Pustak with Avni",
    description:
      "Interactive storytelling drives, university collaborations (SRMU), foundation workshops (Let's Give Hope Foundation), and creative writing masterclasses by young author Avni Chaturvedi.",
    url: "https://readpustak.com/workshops",
    images: [
      {
        url: "/images/workshops/lets-give-hope-workshop.jpg",
        width: 1200,
        height: 630,
        alt: "Workshops and Storytelling Drives with Avni Chaturvedi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "School Workshops & Storytelling Circles | Read Pustak",
    description:
      "Creative writing boot camps, school workshops, and reading circles by young author Avni Chaturvedi.",
    images: ["/images/workshops/lets-give-hope-workshop.jpg"],
  },
};

export default function WorkshopsPage() {
  return (
    <div className="flex flex-col gap-16 lg:gap-24 py-6 sm:py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Workshops", url: "/workshops" },
        ]}
      />

      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-b from-white to-[#FAF0FF]/60 rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-12 lg:p-16 flex flex-col gap-8 relative overflow-hidden">
          <SectionHeading
            as="h1"
            eyebrow="Interactive Learning & Storycraft"
            title="Workshops & Storytelling Drives"
            subtitle="“Transforming young imagination into written words — from university auditoriums to community care homes and school classrooms.”"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-7 flex flex-col gap-5 font-sans text-sm sm:text-base text-charcoal leading-relaxed">
              <p>
                At <strong>Read Pustak with Avni</strong>, our workshops are designed to break the barrier between reading books and creating them. Led by young author <strong>Avni Chaturvedi</strong>, each session proves to students that their everyday observations, feelings, and questions can become vibrant published stories.
              </p>
              <p>
                From university collaborations with <strong>Shri Ramswaroop Memorial University (SRMU)</strong> and community drives with <strong>Let&apos;s Give Hope Foundation</strong> to residential care sessions at <strong>Manisha Mandir</strong>, our interactive sessions empower students with hands-on story architecture, creative confidence, and character building.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white border border-border shadow-2xs flex flex-col">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-primary">
                    6+
                  </span>
                  <span className="text-[11px] font-sans text-charcoal-muted font-medium">
                    Conducted Drives
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-border shadow-2xs flex flex-col">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-primary">
                    4
                  </span>
                  <span className="text-[11px] font-sans text-charcoal-muted font-medium">
                    Open for Booking
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-white border border-border shadow-2xs flex flex-col">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-primary">
                    500+
                  </span>
                  <span className="text-[11px] font-sans text-charcoal-muted font-medium">
                    Youth Inspired
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/917068999555?text=Hello%20Read%20Pustak%20Team%2C%20I%20would%20like%20to%20invite%20young%20author%20Avni%20Chaturvedi%20for%20a%20Storytelling%20and%20Creative%20Writing%20Workshop%20at%20our%20school%2Finstitution."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans text-xs sm:text-sm font-semibold shadow-xs transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book on WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-lg bg-white text-primary font-sans text-xs sm:text-sm font-semibold hover:bg-lavender border border-border shadow-xs transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  <span>Send Institutional Inquiry</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-editorial border-2 border-gold/40 bg-ivory-warm group">
              <Image
                src="/images/workshops/lets-give-hope-workshop.jpg"
                alt="Storytelling and Creative Writing Workshop with young author Avni Chaturvedi"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain bg-white group-hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. DEDICATED WORKSHOPS CATALOGUE & FILTERABLE SECTION    */}
      {/* ========================================================= */}
      <WorkshopsSection id="workshops-catalog" />

      {/* ========================================================= */}
      {/* 3. WHY INVITE AVNI TO YOUR SCHOOL / INSTITUTION          */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-10 lg:p-12 flex flex-col gap-8">
          <SectionHeading
            eyebrow="Pedagogical Impact"
            title="Why Schools &amp; Colleges Invite Avni"
            subtitle="Real impact that goes far beyond standard lectures and theoretical talks"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-ivory-warm border border-border/70 hover:border-gold/50 shadow-2xs hover:shadow-editorial transition-all flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-lavender flex items-center justify-center text-primary">
                <Users className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-bold text-primary">
                Relatable Peer Voice
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal leading-relaxed">
                When students see a published author their own age, the dream of writing ceases to feel distant and becomes immediately achievable.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-ivory-warm border border-border/70 hover:border-gold/50 shadow-2xs hover:shadow-editorial transition-all flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-lavender flex items-center justify-center text-primary">
                <BookOpen className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-bold text-primary">
                Real Story Architecture
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal leading-relaxed">
                From finding a hook to building relatable characters and overcoming writer&apos;s block, sessions provide hands-on creative frameworks.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-ivory-warm border border-border/70 hover:border-gold/50 shadow-2xs hover:shadow-editorial transition-all flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-lavender flex items-center justify-center text-primary">
                <Heart className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-bold text-primary">
                Values &amp; Digital Detox
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal leading-relaxed">
                Reconnecting young minds with reading patience, mindfulness, nature, and cultural tales, balancing out screen distraction.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-ivory-warm border border-border/70 hover:border-gold/50 shadow-2xs hover:shadow-editorial transition-all flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-lavender flex items-center justify-center text-primary">
                <Award className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-bold text-primary">
                Pathway to Publishing
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal leading-relaxed">
                Through Read Pustak Publications, aspiring student writers receive genuine guidance on how to get their own stories printed with ISBN.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
