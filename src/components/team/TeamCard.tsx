"use client";

import React, { useState } from "react";
import Image from "next/image";
import { User, Sparkles } from "lucide-react";
import { TeamMember } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-border/80 shadow-editorial p-6 sm:p-8 flex flex-col justify-between gap-6 hover:shadow-editorial-hover transition-all duration-300 group hover:-translate-y-1">
      <div className="flex flex-col gap-5">
        {/* Profile Image & Role Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-gold/50 shadow-md bg-gradient-to-br from-lavender via-ivory to-lavender/60 flex items-center justify-center group-hover:border-gold transition-colors">
            {member.image && !imageError ? (
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 96px, 112px"
                onError={() => setImageError(true)}
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-primary font-serif">
                <span className="text-2xl font-bold tracking-tight text-primary">
                  {member.initials}
                </span>
                <span className="text-[10px] uppercase font-sans font-bold text-gold tracking-widest mt-0.5">
                  RPWA
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-gold">
              {member.department}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary leading-tight">
              {member.name}
            </h3>
            <span className="font-sans text-xs sm:text-sm font-semibold text-charcoal-muted">
              {member.role}
            </span>
          </div>
        </div>

        {/* Bio Content */}
        <p className="font-sans text-xs sm:text-sm text-charcoal leading-relaxed">
          {member.bio}
        </p>
      </div>

      {/* Optional Tagline Callout */}
      {member.tagline && (
        <div className="pt-3 border-t border-border/70">
          <div className="p-3 rounded-xl bg-lavender/40 border border-primary/10 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" />
            <span className="font-serif italic text-xs font-semibold text-primary">
              “{member.tagline}”
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

