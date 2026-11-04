import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Award,
  Sparkles,
  BookOpen,
  Heart,
  Users,
  CheckCircle2,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { partnersData } from "@/data/partners";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Achievements & Social Impact | Read Pustak with Avni",
  description:
    "Explore verified literary milestones and community social impact with Apni Pathshala, Manisha Mandir, and Hope Foundation.",
};

export default function AchievementsPage() {
  return (
    <div className="flex flex-col gap-16 lg:gap-24 py-6 sm:py-10">
      {/* 1. HERO INTRO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-b from-white to-[#FAF0FF]/50 rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-12 lg:p-16 flex flex-col gap-6">
          <SectionHeading
            eyebrow="Milestones &amp; Outreach"
            title="Celebrating Creativity, Inspiring Change"
            subtitle="“Literature achieves its highest purpose when it touches lives and nurtures community.”"
          />

          <p className="font-sans text-sm sm:text-base text-charcoal leading-relaxed max-w-3xl">
            At <strong>Read Pustak with Avni</strong>, our achievements reflect
            more than publication milestones. They represent hands joined in
            community classrooms, young girls finding their voice through
            storybooks, and open-air reading circles where literature becomes a
            shared spark of joy and human dignity.
          </p>
        </div>
      </section>

      {/* 2. VERIFIED LITERARY ACHIEVEMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Author Honors"
            title="Literary Milestones &amp; Creative Activities"
            subtitle="Key milestones achieved by young author Avni Chaturvedi"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1 */}
            <div className="bg-white rounded-xl border border-border/80 shadow-editorial p-6 flex flex-col gap-3 hover:shadow-editorial-hover transition-all">
              <div className="w-10 h-10 rounded-lg bg-lavender flex items-center justify-center text-primary">
                <BookOpen className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-bold text-primary">
                Published Author of Three Books
              </h3>
              <p className="font-sans text-sm text-charcoal leading-relaxed">
                Authored and published three distinct works: <em>Emma Finds Her Solution</em>, <em>Pancha Tatva Tales</em>, and <em>Ancient Answers for Modern Problems</em>.
              </p>
            </div>

            {/* 2 */}
            <div className="bg-white rounded-xl border border-border/80 shadow-editorial p-6 flex flex-col gap-3 hover:shadow-editorial-hover transition-all">
              <div className="w-10 h-10 rounded-lg bg-lavender flex items-center justify-center text-primary">
                <Calendar className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-bold text-primary">
                Began Writing at Age 10
              </h3>
              <p className="font-sans text-sm text-charcoal leading-relaxed">
                Demonstrated an early authorial voice, drafting journals, moral fables, and characters that formed the foundation for her published books.
              </p>
            </div>

            {/* 3 */}
            <div className="bg-white rounded-xl border border-border/80 shadow-editorial p-6 flex flex-col gap-3 hover:shadow-editorial-hover transition-all">
              <div className="w-10 h-10 rounded-lg bg-lavender flex items-center justify-center text-primary">
                <Award className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-bold text-primary">
                Lucknow Book Fair 2026 Speaker
              </h3>
              <p className="font-sans text-sm text-charcoal leading-relaxed">
                Invited as a youth author speaker to discuss reading habits, storytelling craft, and the creative empowerment of young students.
              </p>
            </div>

            {/* 4 */}
            <div className="bg-white rounded-xl border border-border/80 shadow-editorial p-6 flex flex-col gap-3 hover:shadow-editorial-hover transition-all">
              <div className="w-10 h-10 rounded-lg bg-lavender flex items-center justify-center text-primary">
                <Sparkles className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-bold text-primary">
                Theatre Programme Contributor
              </h3>
              <p className="font-sans text-sm text-charcoal leading-relaxed">
                Active involvement in dramatic performances and stage acting, enriching spoken dialogue and emotional empathy in her written narratives.
              </p>
            </div>

            {/* 5 */}
            <div className="bg-white rounded-xl border border-border/80 shadow-editorial p-6 flex flex-col gap-3 hover:shadow-editorial-hover transition-all">
              <div className="w-10 h-10 rounded-lg bg-lavender flex items-center justify-center text-primary">
                <Users className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-bold text-primary">
                Model United Nations Delegate
              </h3>
              <p className="font-sans text-sm text-charcoal leading-relaxed">
                Representing youth perspectives on global matters, sharpening analytical debate, cultural awareness, and critical inquiry.
              </p>
            </div>

            {/* 6 */}
            <div className="bg-white rounded-xl border border-border/80 shadow-editorial p-6 flex flex-col gap-3 hover:shadow-editorial-hover transition-all">
              <div className="w-10 h-10 rounded-lg bg-lavender flex items-center justify-center text-primary">
                <Heart className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-bold text-primary">
                Literary Mentorship &amp; Outreach
              </h3>
              <p className="font-sans text-sm text-charcoal leading-relaxed">
                Conducting reading and writing circles for younger peers and children from under-resourced community backgrounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOCIAL IMPACT INITIATIVES & PARTNERS */}
      <section id="social-impact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Community Literacy"
            title="Social Impact &amp; Grassroots Partnerships"
            subtitle="Bringing books and creative workshops directly to children who need them most"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnersData.map((partner) => (
              <article
                key={partner.id}
                className="bg-white rounded-2xl border border-border/80 shadow-editorial hover:shadow-editorial-hover transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Photo container */}
                <div className="relative aspect-[16/11] w-full bg-ivory-warm overflow-hidden">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary/90 text-gold text-xs font-sans font-semibold">
                      {partner.type}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between gap-5">
                  <div className="flex flex-col gap-3">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                      {partner.name}
                    </h3>
                    <p className="font-sans text-sm text-charcoal leading-relaxed">
                      {partner.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/80 flex flex-col gap-2">
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-charcoal-muted">
                      Key Activities:
                    </span>
                    <ul className="flex flex-col gap-1.5 font-sans text-xs text-charcoal">
                      {partner.initiatives.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLOSING IMPACT NOTE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-primary text-white rounded-2xl p-8 sm:p-12 text-center flex flex-col items-center gap-4 border border-gold/40 shadow-editorial">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gold">
            Support Our Community Book Drives
          </h3>
          <p className="font-sans text-sm sm:text-base text-white/90 max-w-xl leading-relaxed">
            If your organization, school, or shelter would like to partner with
            Read Pustak with Avni for storytelling circles or book donations, we
            would love to connect.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-gold text-primary font-sans text-sm font-bold hover:bg-gold-light transition-colors inline-flex items-center gap-2"
            >
              <span>Connect for Social Impact</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

