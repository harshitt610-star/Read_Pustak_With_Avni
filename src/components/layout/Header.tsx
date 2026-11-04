"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  BookOpen,
  Users,
  Feather,
  Award,
  Mail,
  Sparkles,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About Us", href: "/about", icon: BookOpen },
  { label: "Founders", href: "/founders", icon: Users },
  { label: "Avni's Journey", href: "/avni-journey", icon: Feather },
  { label: "Our Books", href: "/books", icon: BookOpen },
  { label: "Achievements", href: "/achievements", icon: Award },
  { label: "Contact", href: "/contact", icon: Mail },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-[#FFF9F1] shadow-[0_4px_20px_rgba(53,16,95,0.08)] border-b border-border/80"
            : "bg-[#FFF9F1]/95 backdrop-blur-sm border-b border-border/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Brand Name */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg p-1"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-sm ring-2 ring-gold/40 group-hover:scale-105 transition-transform bg-white shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Read Pustak with Avni Logo"
                  fill
                  sizes="48px"
                  priority
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[19px] sm:text-[21px] font-bold text-primary tracking-tight leading-tight group-hover:text-primary-hover transition-colors">
                  Read Pustak
                </span>
                <span className="font-sans text-[11px] font-semibold text-gold tracking-[0.2em] uppercase leading-none">
                  with Avni
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-md font-sans text-sm font-medium transition-all relative ${
                      isActive
                        ? "text-primary font-bold"
                        : "text-charcoal-muted hover:text-primary hover:bg-lavender/40"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gold rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white font-sans text-sm font-semibold hover:bg-primary-hover shadow-sm hover:shadow-editorial-hover transition-all duration-200 border border-gold/30 hover:border-gold"
              >
                <Sparkles className="w-4 h-4 text-gold" />
                <span>Connect</span>
              </Link>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-primary hover:bg-lavender/60 transition-colors focus:outline-none focus:ring-2 focus:ring-gold border border-gold/40"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer / Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-20 bg-[#FFF9F1] border-b-2 border-gold/40 shadow-[0_25px_50px_rgba(53,16,95,0.25)] z-50 overflow-y-auto max-h-[calc(100vh-5rem)]">
            <div className="max-w-md mx-auto px-5 py-6 flex flex-col gap-4 bg-[#FFF9F1]">
              <div className="flex items-center justify-between pb-3 border-b border-border/80">
                <span className="font-serif text-lg font-bold text-primary">
                  Folio Directory
                </span>
                <span className="font-sans text-[11px] font-semibold text-gold tracking-widest uppercase">
                  Read Pustak Publications
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2.5 px-3 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "bg-lavender text-primary font-bold shadow-xs border border-primary/20"
                          : "text-charcoal bg-white/70 border border-border/60 hover:bg-lavender/50"
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 shrink-0 ${
                          isActive ? "text-primary stroke-[2.5]" : "text-gold"
                        }`}
                      />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-border/80 mt-1">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 px-4 rounded-xl bg-primary text-white font-sans text-sm font-semibold flex items-center justify-center gap-2 shadow-sm border border-gold/40 hover:bg-primary-hover transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  <span>Send a Note to Our Founders</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Dimmed Backdrop Overlay behind Mobile Menu */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-[#1C003C]/60 backdrop-blur-sm z-40 transition-opacity duration-200"
          aria-hidden="true"
        />
      )}
    </>
  );
};
