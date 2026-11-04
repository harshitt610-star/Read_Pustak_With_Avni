import React from "react";
import { Sparkles } from "lucide-react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  showOrnament?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  showOrnament = true,
  className = "",
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col gap-2 ${
        isCenter ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lavender text-primary border border-primary/10 text-xs font-sans font-semibold tracking-wider uppercase mb-1">
          <Sparkles className="w-3.5 h-3.5 text-gold fill-gold" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="font-serif text-lg sm:text-xl text-gold italic font-medium leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}

      {showOrnament && (
        <div
          className={`flex items-center gap-2 py-2 opacity-75 ${
            isCenter ? "justify-center" : "justify-start"
          }`}
        >
          <div className="h-[1px] w-12 bg-gold/60" />
          <span className="text-gold text-xs">✦</span>
          <div className="h-[1px] w-12 bg-gold/60" />
        </div>
      )}
    </div>
  );
};

