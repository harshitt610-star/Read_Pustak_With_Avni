"use client";

import React, { memo } from "react";

const phoneNumber = "917068999555";
const defaultMessage = encodeURIComponent(
  "Hello Read Pustak with Avni, I would like to know more about your books and initiatives."
);
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

const WhatsAppButtonComponent: React.FC = () => {
  return (
    <aside
      aria-label="WhatsApp Quick Contact"
      className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex items-center group pointer-events-auto"
    >
      {/* Tooltip Label on Hover (Desktop) */}
      <span className="hidden md:inline-block mr-3 px-3.5 py-1.5 rounded-full bg-primary/95 text-white text-xs font-sans font-medium shadow-lg backdrop-blur-sm border border-gold/30 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
        Chat with Us on WhatsApp
      </span>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Read Pustak with Avni on WhatsApp: 7068999555"
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.65)] hover:scale-108 active:scale-95 transition-all duration-300 ring-2 ring-white/80"
      >
        {/* Subtle Pulse Animation Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10 group-hover:hidden" />

        {/* WhatsApp Official Vector Icon */}
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.3-.502.101-.2.05-.376-.025-.527-.075-.15-.678-1.634-.929-2.238-.244-.588-.493-.509-.678-.518-.175-.009-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.23 1.379.197 1.898.12.578-.087 1.78-.727 2.031-1.43.251-.703.251-1.306.176-1.431-.076-.125-.276-.2-.577-.35zM12.04 2C6.52 2 2.036 6.484 2.036 12.004c0 1.98.579 3.824 1.583 5.378L2 22l4.778-1.576a9.98 9.98 0 005.262 1.488c5.52 0 10.004-4.484 10.004-10.004C22.044 6.484 17.56 2 12.04 2zm0 18.252a8.212 8.212 0 01-4.204-1.154l-.301-.18-3.125 1.03 1.049-3.045-.196-.312a8.22 8.22 0 01-1.258-4.387c0-4.549 3.702-8.25 8.255-8.25 4.552 0 8.254 3.701 8.254 8.25 0 4.55-3.702 8.252-8.254 8.252z" />
        </svg>
      </a>
    </aside>
  );
};

export const WhatsAppButton = memo(WhatsAppButtonComponent);
