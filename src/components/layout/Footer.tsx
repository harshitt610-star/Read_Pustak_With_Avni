import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Mail,
  MapPin,
  Sparkles,
  Instagram,
  Youtube,
  Download,
} from "lucide-react";

const FooterComponent: React.FC = () => {
  return (
    <footer className="w-full bg-primary text-white pt-16 pb-24 md:pb-16 border-t-2 border-gold/40 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-container rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Slogan (5 cols) */}
          <div className="flex flex-col gap-4 md:col-span-5">
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

            <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed max-w-md">
              An independent literary and educational publishing initiative
              founded by Neena Chaturvedi &amp; young author Avni Chaturvedi.
              Dedicated to cultivating reading habits, encouraging children to
              express their own stories, and nurturing the imaginative spirit.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-gold/30 self-start text-xs text-gold">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-serif italic font-medium">
                “Ek Bachcha, Ek Pustak Padhe.”
              </span>
            </div>
          </div>

          {/* Column 2: Primary Links (3 cols, responsive 2-col on mobile) */}
          <div className="flex flex-col gap-3 md:col-span-3">
            <h3 className="font-serif text-base font-semibold text-gold tracking-wide uppercase border-b border-gold/20 pb-2">
              Explore
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-2.5 font-sans text-xs sm:text-sm text-white/80">
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
                  <span>Publishing &amp; Editorial</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about#digital-services"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Web &amp; App Development</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/books"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore Our Books</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/beyond-books"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Beyond Books</span>
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
                  href="/founders"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Meet the Founders</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/workshops"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Workshops &amp; School Drives</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Media &amp; Press Room</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Contact &amp; Community</span>
                </Link>
              </li>
              <li className="col-span-2 md:col-span-1 pt-1">
                <a
                  href="/downloads/read-pustak-publishing-brochure.pdf"
                  download="Read-Pustak-Publishing-Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light transition-colors inline-flex items-center gap-1.5 font-bold"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Publishing Brochure (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Social Coordinates (4 cols) */}
          <div className="flex flex-col gap-3 md:col-span-4">
            <h3 className="font-serif text-base font-semibold text-gold tracking-wide uppercase border-b border-gold/20 pb-2">
              Literary Secretariat
            </h3>
            <div className="flex flex-col gap-3 text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/XgpLQEVKXNjpvNNn8?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                  aria-label="Google Maps location of Read Pustak with Avni"
                >
                  Gomti Nagar, Lucknow, India
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="mailto:contact.readputakwithavni@gmail.com"
                  className="hover:text-gold transition-colors break-all"
                >
                  contact.readputakwithavni@gmail.com
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <span className="text-xs text-gold uppercase tracking-wider block mb-2.5 font-semibold">
                  Connect With Us
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <a
                    href="https://wa.me/917068999555?text=Hello%20Read%20Pustak%20with%20Avni,%20I%20would%20like%20to%20know%20more%20about%20your%20books%20and%20initiatives."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366] hover:text-white transition-all text-[#25D366] font-medium border border-[#25D366]/40"
                    aria-label="WhatsApp chat with Read Pustak with Avni"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#25D366] shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="https://www.instagram.com/author_avnic?srtk=bzBwcXg1ZW51M2Nt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-gold hover:text-primary transition-all text-white font-medium border border-white/15"
                    aria-label="Instagram profile of author Avni Chaturvedi"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://youtube.com/@neenachaturvedi8736?si=vhHxABlHTQf8rgft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#FF0000] hover:text-white transition-all text-white font-medium border border-white/15"
                    aria-label="YouTube channel of Neena Chaturvedi"
                  >
                    <Youtube className="w-3.5 h-3.5" />
                    <span>YouTube</span>
                  </a>
                  <a
                    href="https://www.amazon.com/author/avnic.author"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-gold hover:text-primary transition-all text-white font-medium border border-white/15"
                    aria-label="Amazon Author profile of Avni Chaturvedi"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-gold" />
                    <span>Amazon</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© {new Date().getFullYear()} Read Pustak Publications. All literary rights reserved.</p>
          <div className="flex items-center gap-4 text-white/60">
            <span>Literary &amp; Educational Initiative</span>
            <span>•</span>
            <span className="text-gold">Avni Chaturvedi &amp; Neena Chaturvedi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Footer = memo(FooterComponent);
