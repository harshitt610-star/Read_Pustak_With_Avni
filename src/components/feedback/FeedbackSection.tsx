"use client";

import React, { useState } from "react";
import {
  Star,
  MessageCircle,
  MapPin,
  ExternalLink,
  Sparkles,
  Heart,
  CheckCircle2,
  Send,
  Quote,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const GOOGLE_MAPS_REVIEW_URL = "https://maps.app.goo.gl/XgpLQEVKXNjpvNNn8?g_st=aw";

const sampleTestimonials = [
  {
    quote:
      "Reading 'Emma Finds Her Solution' inspired my 9-year-old daughter to start journaling her own stories every evening. Such authentic young voices are so rare!",
    author: "Priya Sharma",
    role: "Proud Parent, Lucknow",
    rating: 5,
    tag: "Emma Finds Her Solution",
  },
  {
    quote:
      "Avni's literary workshop was electric! The students connected instantly with her creative process and couldn't stop discussing 'Panch Tatva Tales'.",
    author: "Faculty Mentor",
    role: "SRMU Authors' Workshop",
    rating: 5,
    tag: "School & University Workshop",
  },
  {
    quote:
      "'Ancient Answers for Modern Problems' bridges ancient Indian wisdom with daily student challenges with unbelievable clarity. A must-read for every teen.",
    author: "Ananya Verma",
    role: "Young Reader & MUN Delegate",
    rating: 5,
    tag: "Ancient Answers Book",
  },
];

interface FeedbackSectionProps {
  id?: string;
  showTestimonials?: boolean;
}

export const FeedbackSection: React.FC<FeedbackSectionProps> = ({
  id = "feedback",
  showTestimonials = true,
}) => {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState("");
  const [role, setRole] = useState("Proud Parent");
  const [topic, setTopic] = useState("All Books by Avni");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const roles = [
    "Young Reader",
    "Proud Parent",
    "Teacher / Educator",
    "School Principal",
    "Aspiring Young Author",
    "Book Lover",
  ];

  const topics = [
    "All Books by Avni",
    "Emma Finds Her Solution",
    "The Panch Tatva Tales",
    "Ancient Answers for Modern Problems",
    "Incredible Bharat",
    "School & Reading Workshop",
    "Publishing Services (₹1,999 Plan)",
    "Website & App Development",
    "General Feedback & Appreciation",
  ];

  const ratingDescriptions: { [key: number]: string } = {
    5: "⭐⭐⭐⭐⭐ Outstanding & Inspiring!",
    4: "⭐⭐⭐⭐ Loved it, great experience!",
    3: "⭐⭐⭐ Good & Meaningful",
    2: "⭐⭐ Fair",
    1: "⭐ Needs improvement",
  };

  const constructWhatsAppUrl = () => {
    const stars = "⭐".repeat(rating);
    const text = [
      "🌟 *Feedback & Review for Read Pustak with Avni* 🌟",
      "",
      `*Rating:* ${stars} (${rating}/5 Stars)`,
      `*Name:* ${name.trim() || "Anonymous Reader"} (${role})`,
      `*Topic:* ${topic}`,
      "",
      `*My Feedback / Review:*`,
      `${message.trim() || "Loved the books and the mission of Read Pustak with Avni!"}`,
      "",
      `_Sent via readpustak.com_`,
    ].join("\n");

    return `https://wa.me/917068999555?text=${encodeURIComponent(text)}`;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.open(constructWhatsAppUrl(), "_blank", "noopener,noreferrer");
  };

  return (
    <section id={id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-mt-24">
      <div className="flex flex-col gap-10 sm:gap-14">
        {/* Header */}
        <SectionHeading
          eyebrow="Reader Reviews &amp; Love"
          title="Share Your Thoughts &amp; Feedback"
          subtitle="“Every review and message fuels Avni's pen and helps us nurture young authors across India.”"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Feedback Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-gold/40 shadow-editorial p-6 sm:p-8 lg:p-10 flex flex-col gap-6 relative">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-sans font-bold text-gold uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Direct Feedback &amp; Review
              </span>
              <h3 className="font-serif text-2xl font-bold text-primary">
                How was your experience?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal-muted">
                Choose your rating and send your feedback directly to our team via WhatsApp or review us on Google Maps!
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-5">
              {/* Star Rating Picker */}
              <div className="flex flex-col gap-2 p-4 rounded-2xl bg-[#FFF9F1] border border-gold/30">
                <label className="font-sans text-xs font-bold uppercase tracking-wider text-charcoal flex items-center justify-between">
                  <span>Your Star Rating</span>
                  <span className="text-gold font-semibold text-xs lowercase first-letter:uppercase">
                    {ratingDescriptions[hoverRating || rating]}
                  </span>
                </label>
                <div className="flex items-center gap-2 pt-1">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const active = (hoverRating || rating) >= star;
                    return (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 rounded-lg transition-transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-gold"
                        aria-label={`${star} Star`}
                      >
                        <Star
                          className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors ${
                            active
                              ? "text-gold fill-gold drop-shadow-[0_2px_4px_rgba(217,164,65,0.4)]"
                              : "text-border fill-transparent"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="fb-name" className="font-sans text-xs font-semibold text-charcoal">
                    Your Name
                  </label>
                  <input
                    id="fb-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Shalini Gupta"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border text-sm font-sans focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 bg-white"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="fb-role" className="font-sans text-xs font-semibold text-charcoal">
                    I am a...
                  </label>
                  <select
                    id="fb-role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border text-sm font-sans focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 bg-white"
                  >
                    {roles.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Book / Topic */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fb-topic" className="font-sans text-xs font-semibold text-charcoal">
                  Book or Experience Reviewed
                </label>
                <select
                  id="fb-topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border text-sm font-sans focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 bg-white"
                >
                  {topics.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Review Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fb-msg" className="font-sans text-xs font-semibold text-charcoal">
                  Your Review / Words of Encouragement
                </label>
                <textarea
                  id="fb-msg"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share how Avni's books or workshops made a difference..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border text-sm font-sans focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 bg-white resize-y"
                />
              </div>

              {/* Dual Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch gap-3 pt-2">
                {/* 1. Send via WhatsApp */}
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-sans text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:scale-102 active:scale-98 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                  <span>Send Review on WhatsApp</span>
                </button>

                {/* 2. Review on Google Maps */}
                <a
                  href={GOOGLE_MAPS_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-5 rounded-xl bg-primary hover:bg-primary-hover text-white border border-gold/40 font-sans text-sm font-semibold flex items-center justify-center gap-2 shadow-xs hover:scale-102 active:scale-98 transition-all"
                >
                  <MapPin className="w-4 h-4 text-gold" />
                  <span>Review on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gold" />
                </a>
              </div>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-sans text-emerald-900 flex items-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Thank you! WhatsApp has been opened with your review details.</span>
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Google Maps Location Hub & Social Proof (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Google Maps Feature Card */}
            <div className="rounded-3xl bg-gradient-to-br from-primary via-[#35105F] to-[#1C003C] text-white p-6 sm:p-8 border-2 border-gold/50 shadow-editorial flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center border border-gold/30">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div className="flex items-center gap-1 bg-gold/20 px-3 py-1 rounded-full border border-gold/40">
                  <span className="text-gold font-bold text-xs">5.0</span>
                  <div className="flex text-gold">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 fill-gold text-transparent" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-gold">
                  Official Google Maps Location
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Read Pustak with Avni
                </h4>
                <p className="font-sans text-xs text-white/80 leading-relaxed">
                  Gomti Nagar, Lucknow, Uttar Pradesh 226010, India.
                </p>
              </div>

              <p className="font-sans text-xs text-white/70 leading-relaxed border-t border-white/10 pt-3">
                Your 5-star Google review helps other parents, school teachers, and young writers across Lucknow discover published literature and creative circles.
              </p>

              <div className="flex flex-col gap-2 pt-1">
                <a
                  href={GOOGLE_MAPS_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gold hover:bg-gold-light text-primary font-sans text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <Star className="w-4 h-4 fill-primary text-transparent" />
                  <span>Leave 5-Star Review on Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={GOOGLE_MAPS_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-sans text-xs font-semibold flex items-center justify-center gap-2 border border-white/15 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* Testimonials Preview */}
            {showTestimonials && (
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between px-1">
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-charcoal">
                    Real Reader Feedback
                  </span>
                  <span className="text-xs text-gold font-serif italic">Verified Love</span>
                </div>

                <div className="flex flex-col gap-3">
                  {sampleTestimonials.map((t, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white border border-border/80 shadow-xs flex flex-col gap-2 hover:border-gold/40 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex text-gold">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} className="w-3 h-3 fill-gold text-transparent" />
                          ))}
                        </div>
                        <span className="text-[10px] font-sans font-semibold text-primary/70 bg-lavender/60 px-2 py-0.5 rounded-full">
                          {t.tag}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-charcoal leading-relaxed italic">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div className="flex items-center justify-between text-[11px] font-sans pt-1 border-t border-border/40">
                        <span className="font-bold text-primary">{t.author}</span>
                        <span className="text-charcoal-muted">{t.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
