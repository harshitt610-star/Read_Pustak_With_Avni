import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Download,
  Mail,
  ShieldCheck,
  Zap,
  Clock,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const WHATSAPP_TECH_URL =
  "https://wa.me/917068999555?text=" +
  encodeURIComponent(
    "Hello Read Pustak, I am interested in your Website and App Development Services. I would like to discuss my project requirements."
  );

const websitePlans = [
  { name: "Personal Starter Website (Single Page)", price: "₹2,999" },
  { name: "Basic Website (1–5 Pages)", price: "₹7,999" },
  { name: "Personal / Portfolio Website", price: "₹9,999" },
  { name: "Business Website", price: "₹14,999" },
  { name: "Professional Corporate Website", price: "₹24,999" },
  { name: "Educational Website", price: "₹29,999" },
  { name: "E-commerce Website", price: "₹39,999" },
  { name: "Custom Web Application", price: "₹59,999" },
];

const appPlans = [
  { name: "Basic Android App", price: "₹49,999" },
  { name: "Business Mobile App", price: "₹59,999" },
  { name: "Educational Mobile App", price: "₹69,999" },
  { name: "E-commerce App", price: "₹79,999" },
  { name: "Android + iOS Dual App", price: "₹89,999" },
  { name: "Custom Mobile Application", price: "On Request" },
];

const additionalServices = [
  { name: "Website Maintenance", price: "₹1,000 / mo" },
  { name: "Website Redesign", price: "₹5,000" },
  { name: "SEO Optimization Services", price: "₹3,000 / mo" },
  { name: "Logo & Brand Designing", price: "₹1,000" },
  { name: "Domain & Hosting Setup", price: "₹1,500" },
  { name: "Business Email & Integrations", price: "On Request" },
];

const valuePillars = [
  "Affordable & Transparent Pricing",
  "Professional Editorial Design",
  "100% Mobile-Friendly & Responsive",
  "Intuitive User Experience",
  "Reliable Technical Support",
  "Customised Digital Solutions",
];

export const WebDevelopmentSection: React.FC = () => {
  return (
    <section id="digital-services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-mt-24">
      <div className="flex flex-col gap-10 sm:gap-14">
        {/* 1. SECTION HEADER */}
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Lucknow &amp; Pan-India Tech Solutions"
            title="Website &amp; App Development Services in Lucknow"
            subtitle="“Building Digital Dreams into Reality — Professional, high-speed website and mobile app development for creators, educators, businesses, and startups in Lucknow &amp; across India.”"
          />

          {/* 6 Value Pillars Pills */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-lavender border border-gold/40 text-primary font-sans text-xs font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>Lucknow Local Tech Team</span>
            </span>
            {valuePillars.map((pillar) => (
              <span
                key={pillar}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-border/80 text-charcoal font-sans text-xs font-semibold shadow-xs"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <span>{pillar}</span>
              </span>
            ))}
          </div>

          {/* Global Terms & Conditions Notice Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-50 via-ivory-warm to-amber-50 border border-gold/40 text-charcoal shadow-xs">
            <div className="flex items-center gap-2.5 text-center sm:text-left">
              <ShieldCheck className="w-5 h-5 text-gold shrink-0 hidden sm:block" />
              <p className="font-sans text-xs sm:text-sm text-charcoal leading-relaxed">
                <strong className="text-primary font-bold">Terms &amp; Conditions Apply:</strong> All pricing and package scopes shown below are indicative and can be customized according to specific customer requirements, features, and project scope.
              </p>
            </div>
            <span className="shrink-0 px-3 py-1 rounded-full bg-gold/20 text-gold-dark font-sans text-xs font-bold uppercase tracking-wider">
              100% Tailored Quotes
            </span>
          </div>
        </div>

        {/* 1.5 SPECIAL FEATURED OFFER: PERSONAL STARTER WEBSITE ₹2,999 */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white via-[#FFF9F1] to-lavender/30 border-2 border-gold shadow-editorial p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-gold text-primary font-sans text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5 z-10">
            <Sparkles className="w-3.5 h-3.5 fill-primary text-transparent" />
            <span>Affordable Starter Offer</span>
          </div>

          <div className="relative w-full lg:w-5/12 aspect-square max-w-sm rounded-2xl overflow-hidden shadow-md border-2 border-gold/40 bg-white shrink-0 group">
            <Image
              src="/images/services/starter-website-2999.jpg"
              alt="Personal Starter Website at ₹2,999 Only - Read Pustak with Avni"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="w-full lg:w-7/12 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-sans font-bold text-gold uppercase tracking-widest">
                Build Your Online Identity
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                Personal Starter Website
              </h3>
              <div className="flex items-baseline gap-2 pt-1">
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-primary">₹2,999</span>
                <span className="font-sans text-xs text-charcoal-muted uppercase tracking-wider font-semibold">Only • Complete Package</span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-charcoal leading-relaxed">
              Ideal for authors, writers, students, teachers, freelancers, and young achievers looking to establish an affordable and professional digital presence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-sans text-charcoal pt-1">
              {[
                "Single-page modern personal website",
                "Your profile & introduction bio",
                "Photo & key highlights display",
                "Social links (Instagram, YouTube, LinkedIn)",
                "Instant WhatsApp contact button",
                "100% Mobile-responsive clean design",
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={
                  "https://wa.me/917068999555?text=" +
                  encodeURIComponent(
                    "Hello Read Pustak, I am interested in the Personal Starter Website for Rs 2,999. Please share the details!"
                  )
                }
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-[#4A1B82] text-white font-sans text-xs sm:text-sm font-semibold hover:shadow-md transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-gold" />
                <span>Inquire for ₹2,999 Website</span>
              </a>
              <span className="text-[11px] font-sans text-charcoal-muted italic">
                *Quick setup • Clean &amp; budget friendly
              </span>
            </div>
          </div>
        </div>

        {/* 2. THREE COMPREHENSIVE PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* Card 1: Website Development */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-border/80 hover:border-gold/60 shadow-editorial hover:shadow-editorial-hover transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between gap-6 group">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-lavender flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-gold" />
                </div>
                <span className="px-3 py-1 rounded-full bg-ivory-warm border border-gold/40 text-primary font-sans text-xs font-bold uppercase tracking-wider">
                  Web Development
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-primary">
                  Website Development
                </h3>
                <p className="font-sans text-xs text-charcoal-muted mt-1">
                  From single-page portfolios to full-scale web applications.
                </p>
              </div>

              {/* Terms & Conditions Notice on Card 1 */}
              <div className="p-3 rounded-xl bg-amber-50/90 border border-amber-200/80 text-[11px] font-sans text-amber-950 flex items-start gap-2 leading-relaxed">
                <span className="font-bold text-amber-800 shrink-0 uppercase tracking-wide">
                  *T&amp;C Apply:
                </span>
                <span>
                  Pricing is indicative &amp; subject to change based on custom features, page count, and your exact project needs.
                </span>
              </div>

              <div className="w-full h-px bg-border/60" />

              <ul className="flex flex-col gap-3 font-sans text-xs sm:text-sm">
                {websitePlans.map((plan) => (
                  <li
                    key={plan.name}
                    className="flex items-center justify-between pb-2 border-b border-border/40 gap-2"
                  >
                    <span className="text-charcoal font-medium">{plan.name}</span>
                    <strong className="text-primary font-bold shrink-0">{plan.price}</strong>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={WHATSAPP_TECH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-primary text-white font-sans text-xs sm:text-sm font-semibold hover:bg-primary-hover transition-all duration-200 flex items-center justify-center gap-2 shadow-xs group-hover:shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-gold" />
              <span>Inquire for Website</span>
            </a>
          </div>

          {/* Card 2: Mobile App Development (Featured) */}
          <div className="bg-gradient-to-b from-[#FFF9F1] to-white rounded-2xl sm:rounded-3xl border-2 border-gold shadow-editorial-hover p-6 sm:p-7 flex flex-col justify-between gap-6 relative group">
            {/* Featured Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold text-primary font-sans text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 fill-primary text-transparent" />
              <span>Mobile First Solutions</span>
            </div>

            <div className="flex flex-col gap-4 pt-2">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6 text-gold" />
                </div>
                <span className="px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold-dark font-sans text-xs font-bold uppercase tracking-wider">
                  Android &amp; iOS
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-primary">
                  Mobile App Development
                </h3>
                <p className="font-sans text-xs text-charcoal-muted mt-1">
                  High-performance native and hybrid apps built for scale.
                </p>
              </div>

              {/* Terms & Conditions Notice on Card 2 */}
              <div className="p-3 rounded-xl bg-amber-50/90 border border-amber-200/80 text-[11px] font-sans text-amber-950 flex items-start gap-2 leading-relaxed">
                <span className="font-bold text-amber-800 shrink-0 uppercase tracking-wide">
                  *T&amp;C Apply:
                </span>
                <span>
                  App pricing is indicative &amp; customizable according to OS platform (Android/iOS), backend complexity, and user requirements.
                </span>
              </div>

              <div className="w-full h-px bg-border/60" />

              <ul className="flex flex-col gap-3 font-sans text-xs sm:text-sm">
                {appPlans.map((plan) => (
                  <li
                    key={plan.name}
                    className="flex items-center justify-between pb-2 border-b border-border/40 gap-2"
                  >
                    <span className="text-charcoal font-medium">{plan.name}</span>
                    <strong className="text-primary font-bold shrink-0">{plan.price}</strong>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={WHATSAPP_TECH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-primary to-[#4A1B82] text-white font-sans text-xs sm:text-sm font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-gold" />
              <span>Inquire for Mobile App</span>
            </a>
          </div>

          {/* Card 3: Additional Digital Services */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-border/80 hover:border-gold/60 shadow-editorial hover:shadow-editorial-hover transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between gap-6 group">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-lavender flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6 text-gold" />
                </div>
                <span className="px-3 py-1 rounded-full bg-ivory-warm border border-gold/40 text-primary font-sans text-xs font-bold uppercase tracking-wider">
                  Care &amp; Growth
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-primary">
                  Additional Digital Services
                </h3>
                <p className="font-sans text-xs text-charcoal-muted mt-1">
                  End-to-end design, SEO, and ongoing technical maintenance.
                </p>
              </div>

              {/* Terms & Conditions Notice on Card 3 */}
              <div className="p-3 rounded-xl bg-amber-50/90 border border-amber-200/80 text-[11px] font-sans text-amber-950 flex items-start gap-2 leading-relaxed">
                <span className="font-bold text-amber-800 shrink-0 uppercase tracking-wide">
                  *T&amp;C Apply:
                </span>
                <span>
                  Services can be bundled or customized on-demand. Monthly and project pricing adapts to your specific digital goals.
                </span>
              </div>

              <div className="w-full h-px bg-border/60" />

              <ul className="flex flex-col gap-3 font-sans text-xs sm:text-sm">
                {additionalServices.map((service) => (
                  <li
                    key={service.name}
                    className="flex items-center justify-between pb-2 border-b border-border/40 gap-2"
                  >
                    <span className="text-charcoal font-medium">{service.name}</span>
                    <strong className="text-primary font-bold shrink-0">{service.price}</strong>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={WHATSAPP_TECH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-primary text-white font-sans text-xs sm:text-sm font-semibold hover:bg-primary-hover transition-all duration-200 flex items-center justify-center gap-2 shadow-xs group-hover:shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-gold" />
              <span>Inquire for Services</span>
            </a>
          </div>
        </div>

        {/* 3. BOTTOM CTA BANNER & DISCLAIMER */}
        <div className="bg-gradient-to-r from-primary via-[#35105F] to-[#1C003C] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-gold/40 shadow-editorial flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl text-center lg:text-left">
            <span className="font-sans text-xs uppercase tracking-widest text-gold font-bold">
              Let&apos;s Build Your Digital Presence!
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Ready to Turn Your Vision into Reality?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-ivory/80 leading-relaxed">
              Contact us for project inquiries, customised quotations, and collaborative development.
              Prices shown are starting rates based on project scope and features.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
            <a
              href={WHATSAPP_TECH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-sans font-bold text-sm shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="/downloads/read-pustak-digital-services.pdf"
              download="Read-Pustak-Digital-Services.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-gold/40 font-sans font-semibold text-sm transition-all duration-200"
            >
              <Download className="w-4 h-4 text-gold" />
              <span>Download Price PDF</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

