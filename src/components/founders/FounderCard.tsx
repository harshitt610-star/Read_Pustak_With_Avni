import React from "react";
import Image from "next/image";
import { Founder } from "@/types";
import { Quote, Sparkles, CheckCircle2 } from "lucide-react";

interface FounderCardProps {
  founder: Founder;
  reverse?: boolean;
}

export const FounderCard: React.FC<FounderCardProps> = ({
  founder,
  reverse = false,
}) => {
  return (
    <article
      id={founder.id}
      className={`bg-white rounded-2xl border border-border/80 shadow-editorial overflow-hidden flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-stretch transition-all duration-300 hover:shadow-editorial-hover`}
    >
      {/* Portrait Column */}
      <div className="relative w-full lg:w-5/12 min-h-[340px] sm:min-h-[420px] bg-ivory-warm overflow-hidden">
        <Image
          src={founder.image}
          alt={founder.name}
          fill
          sizes="(max-width: 1024px) 100vw, 42vw"
          className="object-cover object-top transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent lg:hidden" />

        {/* Badge on Mobile */}
        <div className="absolute bottom-4 left-4 lg:hidden">
          <span className="px-3 py-1 rounded-full bg-gold text-primary font-sans text-xs font-bold shadow-sm">
            {founder.title}
          </span>
        </div>
      </div>

      {/* Content Column */}
      <div className="p-6 sm:p-8 lg:p-10 flex-1 flex flex-col justify-between gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="hidden lg:inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-lavender text-primary text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>{founder.title}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary">
              {founder.name}
            </h3>

            <p className="font-sans text-sm sm:text-base font-medium text-gold">
              {founder.role}
            </p>
          </div>

          <div className="flex flex-col gap-3 font-sans text-sm sm:text-[15px] text-charcoal leading-relaxed">
            {founder.bio.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Quote Block */}
          {founder.quote && (
            <blockquote className="bg-lavender/60 border-l-4 border-gold rounded-r-xl p-4 sm:p-5 flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-1.5 text-gold">
                <Quote className="w-4 h-4 fill-gold" />
                <span className="font-sans text-xs font-bold uppercase tracking-wider">
                  Guiding Voice
                </span>
              </div>
              <p className="font-serif italic text-base sm:text-lg text-primary font-medium">
                {founder.quote}
              </p>
              <span className="font-sans text-xs text-charcoal-muted self-end">
                — {founder.name}
              </span>
            </blockquote>
          )}

          {/* Responsibilities */}
          {founder.responsibilities && (
            <div className="pt-2 flex flex-col gap-2">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-charcoal-muted">
                Key Contributions
              </span>
              <ul className="grid grid-cols-1 gap-2 font-sans text-xs sm:text-sm text-charcoal">
                {founder.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Highlights Pills */}
        {founder.highlights && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-border/70">
            {founder.highlights.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full bg-surface-container text-primary font-sans text-xs font-semibold"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

