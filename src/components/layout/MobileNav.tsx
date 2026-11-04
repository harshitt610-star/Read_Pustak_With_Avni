"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Feather, Award, Users } from "lucide-react";

export const MobileNav: React.FC = () => {
  const pathname = usePathname();

  const tabs = [
    { label: "Home", href: "/", icon: Home },
    { label: "Books", href: "/books", icon: BookOpen },
    { label: "Journey", href: "/avni-journey", icon: Feather },
    { label: "Founders", href: "/founders", icon: Users },
    { label: "Honors", href: "/achievements", icon: Award },
  ];

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFF9F1]/95 backdrop-blur-xl border-t border-border shadow-[0_-4px_16px_rgba(53,16,95,0.06)] pb-[env(safe-area-inset-bottom,0px)]"
      aria-label="Mobile Bottom Navigation"
    >
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive =
            tab.href === "/"
              ? pathname === "/"
              : pathname.startsWith(tab.href);

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center justify-center min-w-[54px] py-1 transition-all ${
                isActive
                  ? "text-primary font-bold scale-105"
                  : "text-charcoal-muted hover:text-primary"
              }`}
            >
              <div
                className={`p-1 rounded-full transition-colors ${
                  isActive ? "bg-lavender text-primary" : ""
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isActive ? "text-primary stroke-[2.5]" : "text-charcoal-muted"
                  }`}
                />
              </div>
              <span
                className={`text-[10px] tracking-tight mt-0.5 ${
                  isActive ? "text-primary font-bold" : "text-charcoal-muted"
                }`}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

