import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Sparkles,
  Feather,
  BookOpen,
  Award,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Theater,
  Globe,
} from "lucide-react";
import { milestonesData } from "@/data/milestones";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Avni's Journey | Read Pustak with Avni",
  description:
    "Follow the literary journey of young author Avni Chaturvedi, from early stories at age 10 to publishing three books and speaking at the Lucknow Book Fair.",
};

export default function JourneyPage() {
  return (
    <div className="flex flex-col gap-16 lg:gap-24 py-6 sm:py-10">
      {/* 1. HERO INTRO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-b from-white to-[#FAF0FF]/50 rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-12 lg:p-16 flex flex-col gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4">
              <SectionHeading
                eyebrow="Author Profile &amp; Path"
                title="Avni's Literary Journey"
                subtitle="“A pen guided by curiosity, wonder, and deep cultural reverence.”"
              />
              <div className="flex flex-col gap-3 font-sans text-sm sm:text-base text-charcoal leading-relaxed">
                <p>
                  Avni began writing when she was just ten years old. Fascinated
                  by ancient Indian fables, mythology, and everyday childhood
                  wonder, she began filling journals with stories that reflect
                  both innocence and thoughtful maturity.
                </p>
                <p>
                  Today, as the published author of three acclaimed books—
                  <em>Emma Finds Her Solution</em>, <em>Pancha Tatva Tales</em>,
                  and <em>Ancient Answers for Modern Problems</em>—she continues to
                  write, conduct workshops, participate in Model United Nations,
                  and inspire peers to embrace their storytelling voice.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-full bg-lavender text-primary font-sans text-xs font-semibold">
                  Author at Age 10
                </span>
                <span className="px-3 py-1 rounded-full bg-lavender text-primary font-sans text-xs font-semibold">
                  3 Published Books
                </span>
                <span className="px-3 py-1 rounded-full bg-lavender text-primary font-sans text-xs font-semibold">
                  Speaker, Lucknow Book Fair 2026
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/5] rounded-xl overflow-hidden shadow-editorial-hover border-2 border-gold/40 bg-ivory-warm">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3VUN0nQD4v1nQ_mkx42ZcASu-2QkeYOnWPz-jq8YX526fiAhJ2TPg9fCnKVj2CL0G-bcV78bjtdnOInFxqsdwTdz2ULPue08XkNji_uoUQ49MC23zdqZT-w-SJVRKq6ZMMUWIDIx31CS0ri-2J_IqoOm24KUt3wAC1TYa5uLSzgYZ1TpbX-GD5PkRdpcn-Rge9dHrZXKw56O5cfG5BBONCTu0fR6nJPyqHezaEso"
                alt="Portrait of young author Avni Chaturvedi in an intimate literary library salon"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHRONOLOGICAL TIMELINE OF VERIFIED MILESTONES */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Milestones &amp; Evolution"
            title="A Timeline of Storycraft"
            subtitle="Verified steps in Avni's creative and literary journey"
            align="center"
          />

          <div className="relative border-l-2 border-gold/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
            {milestonesData.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Node icon */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary border-2 border-gold flex items-center justify-center text-gold shadow-sm group-hover:scale-110 transition-transform">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                </div>

                <div className="bg-white rounded-xl border border-border/80 shadow-editorial p-5 sm:p-6 hover:shadow-editorial-hover transition-all flex flex-col gap-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-lavender text-primary text-xs font-sans font-bold">
                      {milestone.yearOrAge}
                    </span>
                    {milestone.badge && (
                      <span className="px-2.5 py-0.5 rounded-full bg-gold/15 text-gold-dark text-xs font-sans font-semibold">
                        {milestone.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-primary">
                    {milestone.title}
                  </h3>

                  <p className="font-sans text-sm text-charcoal leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BEYOND WRITING: THEATRE & MODEL UNITED NATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-10 lg:p-12 flex flex-col gap-8">
          <SectionHeading
            eyebrow="Multidisciplinary Expression"
            title="Beyond the Page"
            subtitle="How theatre, debate, and diplomacy enrich Avni's authorial perspective"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-ivory-warm border border-border flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-lavender flex items-center justify-center text-primary">
                <Theater className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">
                Theatre &amp; Dramatic Arts
              </h3>
              <p className="font-sans text-sm text-charcoal leading-relaxed">
                Avni&apos;s active involvement in school theatre productions has given
                her an acute ear for spoken dialogue, emotional nuance, and
                character pacing. Exploring characters from the inside informs
                her written story arcs with natural authenticity and empathy.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-ivory-warm border border-border flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-lavender flex items-center justify-center text-primary">
                <Globe className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">
                Model United Nations (MUN)
              </h3>
              <p className="font-sans text-sm text-charcoal leading-relaxed">
                As an enthusiastic Model UN delegate, Avni tackles global
                concerns, diplomatic debate, and structured argumentation. This
                rigorous analytical inquiry is clearly visible in her third book,
                <em>Ancient Answers for Modern Problems</em>, bridging timeless
                wisdom with urgent contemporary questions.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 items-center justify-between border-t border-border/60">
            <span className="font-serif italic text-base text-primary">
              “Writing is not just words on a page; it is living deeply in the world.”
            </span>
            <Link
              href="/books"
              className="px-6 py-2.5 rounded-lg bg-primary text-white font-sans text-sm font-semibold hover:bg-primary-hover transition-colors flex items-center gap-2"
            >
              <span>Explore Avni&apos;s Books</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

