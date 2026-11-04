"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  Sparkles,
  Users,
  Feather,
  BookOpen,
  Theater,
  ScrollText,
  Heart,
  Award,
  Mail,
  ChevronDown,
} from "lucide-react";

export interface NavItem {
  label: string;
  shortLabel?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
}

// 1. Primary Direct Links for Desktop
export const primaryNavItems: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  {
    label: "Our Philosophy",
    shortLabel: "Philosophy",
    href: "/#philosophy",
    icon: Sparkles,
  },
  {
    label: "Meet the Founders",
    shortLabel: "Founders",
    href: "/founders",
    icon: Users,
  },
  {
    label: "Avni's Journey",
    shortLabel: "Journey",
    href: "/avni-journey",
    icon: Feather,
  },
  {
    label: "Explore Our Books",
    shortLabel: "Our Books",
    href: "/books",
    icon: BookOpen,
  },
  {
    label: "Beyond Books",
    shortLabel: "Beyond Books",
    href: "/#beyond-books",
    icon: Theater,
  },
];

// 2. Editorial & Community Dropdown Links for Desktop
export const moreNavItems: NavItem[] = [
  {
    label: "Publishing & Editorial",
    href: "/about",
    icon: ScrollText,
    description: "Read Pustak Publications story & mandate",
  },
  {
    label: "Our Initiatives",
    href: "/#initiatives",
    icon: Heart,
    description: "Community literacy, outreach & workshops",
  },
  {
    label: "Achievements & Recognition",
    href: "/achievements",
    icon: Award,
    description: "State awards, book fairs & author milestones",
  },
  {
    label: "Join Our Community",
    href: "/contact",
    icon: Mail,
    description: "Connect, write, collaborate & partner with us",
  },
];

// 3. Complete 10-Item Structured List for Mobile & Global Directory
export const allNavItems: NavItem[] = [
  ...primaryNavItems,
  ...moreNavItems,
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  }, [pathname]);

  // Handle click outside to close desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const handleMouseEnterDropdown = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setMoreDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setMoreDropdownOpen(false);
    }, 150);
  };

  const isMoreActive = moreNavItems.some(
    (item) => item.href.startsWith("/") && pathname === item.href
  );

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
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg p-1 shrink-0"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-sm ring-2 ring-gold/40 group-hover:scale-105 transition-transform bg-white shrink-0">
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
                <span className="font-serif text-[18px] sm:text-[20px] font-bold text-primary tracking-tight leading-tight group-hover:text-primary-hover transition-colors">
                  Read Pustak
                </span>
                <span className="font-sans text-[10px] sm:text-[11px] font-semibold text-gold tracking-[0.2em] uppercase leading-none">
                  with Avni
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {primaryNavItems.map((item) => {
                const isAnchor = item.href.includes("#");
                const isActive =
                  !isAnchor &&
                  (item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-2.5 xl:px-3 py-2 rounded-md font-sans text-[13px] xl:text-sm font-medium transition-all relative ${
                      isActive
                        ? "text-primary font-bold"
                        : "text-charcoal-muted hover:text-primary hover:bg-lavender/40"
                    }`}
                  >
                    <span className="hidden xl:inline">{item.label}</span>
                    <span className="xl:hidden">{item.shortLabel || item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-gold rounded-full" />
                    )}
                  </Link>
                );
              })}

              {/* Desktop "More / Editorial" Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnterDropdown}
                onMouseLeave={handleMouseLeaveDropdown}
              >
                <button
                  type="button"
                  onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                  aria-expanded={moreDropdownOpen}
                  aria-haspopup="true"
                  className={`px-2.5 xl:px-3 py-2 rounded-md font-sans text-[13px] xl:text-sm font-medium transition-all flex items-center gap-1 ${
                    isMoreActive || moreDropdownOpen
                      ? "text-primary font-bold bg-lavender/50"
                      : "text-charcoal-muted hover:text-primary hover:bg-lavender/40"
                  }`}
                >
                  <span>More</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      moreDropdownOpen ? "rotate-180 text-gold" : "text-charcoal-muted"
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {moreDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-80 rounded-2xl bg-white border border-gold/40 shadow-[0_16px_36px_rgba(53,16,95,0.14)] p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-2 border-b border-border/70 mb-1">
                      <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-gold block">
                        Editorial &amp; Outreach
                      </span>
                      <span className="font-serif text-xs font-semibold text-primary">
                        Read Pustak Initiatives
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      {moreNavItems.map((item) => {
                        const Icon = item.icon;
                        const isAnchor = item.href.includes("#");
                        const isSubActive =
                          !isAnchor && pathname.startsWith(item.href);

                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMoreDropdownOpen(false)}
                            className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                              isSubActive
                                ? "bg-lavender text-primary font-semibold"
                                : "hover:bg-lavender/40 text-charcoal"
                            }`}
                          >
                            <div className="w-8 h-8 rounded-lg bg-lavender/70 flex items-center justify-center shrink-0 mt-0.5 border border-primary/10">
                              <Icon className="w-4 h-4 text-gold" />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-serif text-sm font-bold text-primary leading-snug">
                                {item.label}
                              </span>
                              {item.description && (
                                <span className="font-sans text-[11px] text-charcoal-muted leading-tight mt-0.5">
                                  {item.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Desktop Right CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-lg bg-primary text-white font-sans text-xs xl:text-sm font-semibold hover:bg-primary-hover shadow-sm hover:shadow-editorial-hover transition-all duration-200 border border-gold/30 hover:border-gold"
              >
                <Sparkles className="w-4 h-4 text-gold" />
                <span>Join Community</span>
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

        {/* Mobile Full 10-Item Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-20 bg-[#FFF9F1] border-b-2 border-gold/40 shadow-[0_25px_50px_rgba(53,16,95,0.25)] z-50 overflow-y-auto max-h-[calc(100vh-5rem)]">
            <div className="max-w-md mx-auto px-5 py-6 flex flex-col gap-4 bg-[#FFF9F1]">
              <div className="flex items-center justify-between pb-3 border-b border-border/80">
                <span className="font-serif text-lg font-bold text-primary">
                  Navigation Folio
                </span>
                <span className="font-sans text-[10px] font-semibold text-gold tracking-widest uppercase">
                  10 Editorial Sections
                </span>
              </div>

              {/* 10 Items in Clean Structured Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {allNavItems.map((item, index) => {
                  const Icon = item.icon;
                  const isAnchor = item.href.includes("#");
                  const isActive =
                    !isAnchor &&
                    (item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "bg-lavender text-primary font-bold shadow-xs border border-primary/20"
                          : "text-charcoal bg-white/70 border border-border/60 hover:bg-lavender/50"
                      }`}
                    >
                      <div className="w-7 h-7 rounded-lg bg-lavender/70 flex items-center justify-center shrink-0 border border-gold/30">
                        <Icon
                          className={`w-3.5 h-3.5 ${
                            isActive ? "text-primary stroke-[2.5]" : "text-gold"
                          }`}
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-sans font-bold text-gold uppercase tracking-wider leading-none">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-serif text-xs sm:text-sm font-semibold text-primary leading-tight mt-0.5">
                          {item.label}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Mobile CTA Button */}
              <div className="pt-3 border-t border-border/80 mt-1">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 px-4 rounded-xl bg-primary text-white font-sans text-sm font-semibold flex items-center justify-center gap-2 shadow-sm border border-gold/40 hover:bg-primary-hover transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  <span>Join Our Community &amp; Connect</span>
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
