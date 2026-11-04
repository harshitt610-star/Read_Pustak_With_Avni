import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, Quote, BookOpen, ArrowRight, Heart, Users } from "lucide-react";
import { foundersData } from "@/data/founders";
import { teamData } from "@/data/team";
import { FounderCard } from "@/components/founders/FounderCard";
import { TeamCard } from "@/components/team/TeamCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Meet Our Founders & Team | Read Pustak with Avni",
  description:
    "Meet young author Avni Chaturvedi, publisher Neena Chaturvedi, and the dedicated team behind Read Pustak Publications.",
};

export default function FoundersPage() {
  const avni = foundersData.find((f) => f.id === "avni-chaturvedi")!;
  const neena = foundersData.find((f) => f.id === "neena-chaturvedi")!;

  return (
    <div className="flex flex-col gap-16 lg:gap-24 py-6 sm:py-10">
      {/* 1. INTRO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-b from-white to-[#FAF0FF]/40 rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-12 lg:p-16 flex flex-col gap-4">
          <SectionHeading
            eyebrow="Founding Voices"
            title="Meet Our Founders"
            subtitle="A Shared Vision for Reading, Writing and Creative Expression."
          />
          <p className="font-sans text-sm sm:text-base text-charcoal leading-relaxed max-w-3xl">
            Rooted in a profound love for literature, Read Pustak is nurtured by
            an intimate mother-daughter partnership. Together, they bridge
            seasoned editorial stewardship with the fearless, vibrant creativity
            of young authorship—crafting a home where stories of all generations
            are cherished.
          </p>
        </div>
      </section>

      {/* 2. FOUNDER 1: AVNI CHATURVEDI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FounderCard founder={avni} reverse={false} />
      </section>

      {/* 3. FOUNDER 2: NEENA CHATURVEDI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FounderCard founder={neena} reverse={true} />
      </section>

      {/* 4. SHARED BELIEF MANIFESTO CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-primary text-white rounded-2xl p-8 sm:p-12 shadow-editorial-hover border border-gold/40 text-center flex flex-col items-center gap-6 relative overflow-hidden">
          <div className="w-12 h-12 rounded-full bg-primary-container border border-gold/50 flex items-center justify-center text-gold shadow-sm">
            <Quote className="w-6 h-6 fill-gold" />
          </div>

          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="font-sans text-xs uppercase tracking-widest text-gold font-bold">
              Shared Guiding Belief
            </span>
            <p className="font-serif italic text-2xl sm:text-3xl text-white font-medium leading-relaxed">
              “One vision, a love for books and a shared dream of making every story matter.”
            </p>
            <span className="font-sans text-xs text-white/70">
              — Neena Chaturvedi &amp; Avni Chaturvedi
            </span>
          </div>

          <div className="pt-2 flex flex-wrap gap-4 justify-center">
            <Link
              href="/avni-journey"
              className="px-6 py-3 rounded-lg bg-gold text-primary font-sans text-sm font-bold hover:bg-gold-light transition-colors flex items-center gap-2"
            >
              <span>Explore Avni&apos;s Journey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/books"
              className="px-6 py-3 rounded-lg bg-white/10 text-white font-sans text-sm font-semibold hover:bg-white/20 border border-white/20 transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-gold" />
              <span>Discover Published Works</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. OUR TEAM: Meet the Team Behind Read Pustak with Avni */}
      <section id="our-team" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-mt-24">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Our Team"
            title="Meet the Team Behind Read Pustak with Avni"
            subtitle="The passionate minds driving technical innovation, community outreach, and public communications."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
