import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  BookOpen,
  Feather,
  Users,
  Heart,
  Sparkles,
  ArrowRight,
  Compass,
  Lightbulb,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Us | Read Pustak with Avni",
  description:
    "Discover the story, mission, and philosophy of Read Pustak with Avni and Read Pustak Publications.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 lg:gap-24 py-6 sm:py-10">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-b from-white to-[#FAF0FF]/50 rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-12 lg:p-16 flex flex-col gap-6 relative overflow-hidden">
          <SectionHeading
            eyebrow="Editorial Mandate"
            title="About Read Pustak with Avni"
            subtitle="“A home where stories are cherished, celebrated, and shared.”"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-7 flex flex-col gap-4 font-sans text-sm sm:text-base text-charcoal leading-relaxed">
              <p>
                <strong>Read Pustak with Avni</strong> is an independent
                educational and literary initiative born from a simple yet
                profound conviction: every child possesses an authentic inner
                world brimming with stories waiting to be discovered.
              </p>
              <p>
                Founded under the literary umbrella of{" "}
                <strong>Read Pustak Publications</strong> in New Delhi, the
                initiative unites young author <strong>Avni Chaturvedi</strong>{" "}
                and publisher <strong>Neena Chaturvedi</strong> in a shared
                quest to foster a lifelong love for reading and encourage
                creative expression among children and young adults.
              </p>
              <p>
                Rather than treating books as mere academic tools, we celebrate
                them as companions of solace, mirrors of culture, and windows to
                limitless imaginative possibilities.
              </p>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden shadow-editorial border border-gold/30">
              <Image
                src="/images/avni/hero-slide-1.jpg"
                alt="Young author Avni Chaturvedi"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-editorial border border-border">
            <Image
              src="/images/founders/neena-desk.jpg"
              alt="Founder Neena Chaturvedi working at her desk"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </div>

          <div className="lg:col-span-7 flex flex-col gap-5">
            <SectionHeading
              eyebrow="Origins &amp; Growth"
              title="Our Story"
              subtitle="From a childhood writing desk to an inspiring community platform"
              showOrnament={false}
            />

            <div className="flex flex-col gap-4 font-sans text-sm sm:text-base text-charcoal leading-relaxed">
              <p>
                The seeds of Read Pustak were sown when Avni, at age ten, began
                filling notebooks with character sketches, moral fables, and
                observations of the natural world. Seeing her daughter&apos;s
                boundless passion, Neena Chaturvedi realized that countless
                children harbor similar creative sparks that simply need
                receptive encouragement and gentle editorial guidance.
              </p>
              <p>
                What began as a quiet family journey of writing and publishing
                Avni&apos;s first books soon evolved into a broader literary mandate.
                Through Read Pustak Publications, we set out to prove that young
                authors can craft works of depth and cultural resonance that
                touch readers of all ages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR PURPOSE & THREE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Core Mission"
            title="Our Purpose"
            subtitle="Three foundational pillars guiding every book and initiative"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white rounded-2xl border border-border/80 shadow-editorial p-8 flex flex-col gap-4 hover:shadow-editorial-hover transition-all">
              <div className="w-12 h-12 rounded-xl bg-lavender flex items-center justify-center text-primary">
                <BookOpen className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">
                Encouraging Reading
              </h3>
              <p className="font-sans text-sm text-charcoal leading-relaxed">
                Reading is the cornerstone of empathy and intellectual curiosity.
                We curate and produce books with engaging narratives that make
                reading an irresistible, comforting pastime away from digital
                distractions.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-2xl border border-border/80 shadow-editorial p-8 flex flex-col gap-4 hover:shadow-editorial-hover transition-all">
              <div className="w-12 h-12 rounded-xl bg-lavender flex items-center justify-center text-primary">
                <Feather className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">
                Inspiring Creative Writing
              </h3>
              <p className="font-sans text-sm text-charcoal leading-relaxed">
                Every child has original stories rooted in their lived experiences.
                We conduct writing circles and share techniques that help young
                writers translate abstract thoughts into evocative prose.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-2xl border border-border/80 shadow-editorial p-8 flex flex-col gap-4 hover:shadow-editorial-hover transition-all">
              <div className="w-12 h-12 rounded-xl bg-lavender flex items-center justify-center text-primary">
                <Users className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">
                Supporting Young Authors
              </h3>
              <p className="font-sans text-sm text-charcoal leading-relaxed">
                Avni&apos;s published trajectory proves that youth is not a limitation.
                We provide a respectful platform that mentors aspiring young
                storytellers, giving their voices the credibility they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-primary text-white rounded-2xl p-8 sm:p-10 shadow-editorial flex flex-col gap-4 border border-gold/30">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-gold">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-gold">
              Our Mission
            </h3>
            <p className="font-sans text-sm sm:text-base text-white/90 leading-relaxed">
              To cultivate an enduring reading culture, champion youth
              authorship, and democratize access to inspiring literature across
              schools, homes, and community learning spaces.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-editorial border border-border flex flex-col gap-4">
            <div className="w-10 h-10 rounded-lg bg-lavender flex items-center justify-center text-primary">
              <Lightbulb className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary">
              Our Vision
            </h3>
            <p className="font-sans text-sm sm:text-base text-charcoal leading-relaxed">
              A literary world where every child feels empowered to pick up a book
              with joy and hold a pen with confidence, recognizing that their voice
              has the power to illuminate lives and shape culture.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-lavender/60 border border-gold/30 rounded-2xl p-8 sm:p-12 text-center flex flex-col items-center gap-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary">
            Join Our Literary Circle
          </h3>
          <p className="font-sans text-sm sm:text-base text-charcoal-muted max-w-lg leading-relaxed">
            Whether you are a parent, school educator, or young reader, we welcome
            you to explore our books and partner in our reading drives.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              href="/books"
              className="px-6 py-3 rounded-lg bg-primary text-white font-sans text-sm font-semibold hover:bg-primary-hover shadow-sm transition-colors"
            >
              Explore Our Books
            </Link>
            <Link
              href="/founders"
              className="px-6 py-3 rounded-lg bg-white text-primary font-sans text-sm font-semibold hover:bg-white/80 border border-border shadow-xs transition-colors"
            >
              Meet Our Founders
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

