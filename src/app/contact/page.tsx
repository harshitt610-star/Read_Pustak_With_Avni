import React from "react";
import { Metadata } from "next";
import {
  Mail,
  MapPin,
  Sparkles,
  Heart,
  BookOpen,
  MessageSquare,
} from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact Us | Read Pustak with Avni",
  description:
    "Get in touch with young author Avni Chaturvedi and publisher Neena Chaturvedi for school reading circles, literary events, or book collaborations.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-16 lg:gap-20 py-6 sm:py-10">
      {/* 1. HERO INTRO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-b from-white to-[#FAF0FF]/50 rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-12 lg:p-16 flex flex-col gap-6">
          <SectionHeading
            eyebrow="Literary Secretariat"
            title="Get in Touch"
            subtitle="“A conversation is the beginning of every shared story.”"
          />

          <p className="font-sans text-sm sm:text-base text-charcoal leading-relaxed max-w-2xl">
            We warmly welcome notes from young readers, parents, school
            librarians, teachers, and cultural organizations. Whether you wish
            to invite Avni for a school storytelling session, partner with us on
            a community book drive, or simply share how one of our books touched
            your family, we look forward to hearing from you.
          </p>
        </div>
      </section>

      {/* 2. FORM & COORDINATES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Contact Coordinates & Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Coordinates Card */}
            <div className="bg-white rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-8 flex flex-col gap-6">
              <h3 className="font-serif text-xl font-bold text-primary border-b border-border/80 pb-3">
                Literary Coordinates
              </h3>

              <div className="flex flex-col gap-5 font-sans text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-lavender flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-primary">Location</span>
                    <span className="text-charcoal-muted">
                      New Delhi, India
                    </span>
                    <span className="text-xs text-charcoal-subtle pt-0.5">
                      Publishing &amp; Community Operations
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-lavender flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-primary">Direct Email</span>
                    <a
                      href="mailto:contact@readpustak.com"
                      className="text-gold font-medium hover:underline"
                    >
                      contact@readpustak.com
                    </a>
                    <span className="text-xs text-charcoal-subtle pt-0.5">
                      For literary sessions, workshops &amp; book orders
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-lavender flex items-center justify-center text-primary shrink-0">
                    <Heart className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-primary">Imprint</span>
                    <span className="text-charcoal-muted">
                      Read Pustak Publications
                    </span>
                    <span className="text-xs text-charcoal-subtle pt-0.5">
                      Independent Young Author &amp; Educational Publishing
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-border/80 flex flex-col gap-2.5">
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-charcoal-muted">
                  Follow Our Journey
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3.5 py-1.5 rounded-lg bg-ivory-warm border border-border text-xs font-semibold text-primary hover:bg-lavender cursor-pointer transition-colors">
                    Instagram
                  </span>
                  <span className="px-3.5 py-1.5 rounded-lg bg-ivory-warm border border-border text-xs font-semibold text-primary hover:bg-lavender cursor-pointer transition-colors">
                    YouTube
                  </span>
                  <span className="px-3.5 py-1.5 rounded-lg bg-ivory-warm border border-border text-xs font-semibold text-primary hover:bg-lavender cursor-pointer transition-colors">
                    LinkedIn
                  </span>
                </div>
              </div>
            </div>

            {/* Note on School Workshops */}
            <div className="bg-primary text-white rounded-2xl p-6 sm:p-8 border border-gold/40 shadow-editorial flex flex-col gap-3">
              <div className="flex items-center gap-2 text-gold">
                <Sparkles className="w-4 h-4" />
                <span className="font-sans text-xs uppercase tracking-wider font-bold">
                  School &amp; Reading Circles
                </span>
              </div>
              <h4 className="font-serif text-lg font-bold">
                Host a Reading Circle at Your School
              </h4>
              <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
                Avni and Neena lead interactive sessions for students to
                encourage journaling, creative storytelling, and open discussions
                on character building through Indian fables.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

