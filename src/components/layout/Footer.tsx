import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Mail,
  MapPin,
  Sparkles,
  Heart,
  ExternalLink,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-primary text-white pt-16 pb-24 lg:pb-16 border-t-2 border-gold/40 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-container rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Slogan */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-sm ring-2 ring-gold/50 bg-white shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Read Pustak with Avni Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-white">
                  Read Pustak
                </span>
                <span className="font-sans text-[11px] font-semibold text-gold tracking-widest uppercase">
                  with Avni
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
              An independent literary and educational publishing initiative
              founded by Neena Chaturvedi & young author Avni Chaturvedi.
              Dedicated to cultivating reading habits, encouraging children to
              express their own stories, and nurturing the imaginative spirit.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-gold/30 self-start text-xs text-gold">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-serif italic font-medium">
                “Ek Bachcha, Ek Pustak Padhe.”
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Directory */}
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-base font-semibold text-gold tracking-wide uppercase border-b border-gold/20 pb-2">
              Folio Directory
            </h3>
            <ul className="flex flex-col gap-2 font-sans text-sm text-white/80">
              <li>
                <Link
                  href="/"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/founders"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Meet Our Founders</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/avni-journey"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Avni&apos;s Journey</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/books"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Our Books</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/achievements"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Achievements & Impact</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Contact & Inquiries</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Books */}
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-base font-semibold text-gold tracking-wide uppercase border-b border-gold/20 pb-2">
              Published Works
            </h3>
            <ul className="flex flex-col gap-3 font-sans text-sm text-white/80">
              <li className="flex flex-col">
                <Link
                  href="/books#emma-finds-her-solution"
                  className="text-white hover:text-gold transition-colors font-medium flex items-center gap-1"
                >
                  <BookOpen className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Emma Finds Her Solution</span>
                </Link>
                <span className="text-xs text-white/60 pl-5">
                  Debut Storybook • Ages 6-12
                </span>
              </li>
              <li className="flex flex-col">
                <Link
                  href="/books#pancha-tatva-tales"
                  className="text-white hover:text-gold transition-colors font-medium flex items-center gap-1"
                >
                  <BookOpen className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Pancha Tatva Tales</span>
                </Link>
                <span className="text-xs text-white/60 pl-5">
                  The Five Elements • Stories of Joy & Wisdom
                </span>
              </li>
              <li className="flex flex-col">
                <Link
                  href="/books#ancient-answers"
                  className="text-white hover:text-gold transition-colors font-medium flex items-center gap-1"
                >
                  <BookOpen className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Ancient Answers for Modern Problems</span>
                </Link>
                <span className="text-xs text-white/60 pl-5">
                  Philosophical Insights for Youth
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social Coordinates */}
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-base font-semibold text-gold tracking-wide uppercase border-b border-gold/20 pb-2">
              Literary Secretariat
            </h3>
            <div className="flex flex-col gap-3 text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>New Delhi, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="mailto:contact@readpustak.com"
                  className="hover:text-gold transition-colors"
                >
                  contact@readpustak.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 pt-2">
                <Heart className="w-4 h-4 text-gold shrink-0" />
                <span className="text-xs text-white/70">
                  Read Pustak Publications Imprint
                </span>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <span className="text-xs text-gold uppercase tracking-wider block mb-2 font-semibold">
                  Connect With Us
                </span>
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 transition-colors cursor-pointer text-white">
                    Instagram
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 transition-colors cursor-pointer text-white">
                    YouTube
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 transition-colors cursor-pointer text-white">
                    LinkedIn
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© {new Date().getFullYear()} Read Pustak Publications. All literary rights reserved.</p>
          <div className="flex items-center gap-4 text-white/60">
            <span>Literary & Educational Initiative</span>
            <span>•</span>
            <span className="text-gold">Avni Chaturvedi & Neena Chaturvedi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

