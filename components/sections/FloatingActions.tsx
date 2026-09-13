"use client";

import { CalendarCheck, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const PHONE_INTL = "919763691625";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(
          "Hi, I'm interested in discussing a project with Chouhan Infraspaces."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(24,32,30,0.25)] transition-transform hover:-translate-y-0.5"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={18} />
      </a>
      <a
        href={siteConfig.consultationHref}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-white shadow-[0_10px_25px_rgba(24,32,30,0.25)] transition-transform hover:-translate-y-0.5"
        aria-label="Book consultation"
      >
        <CalendarCheck size={18} />
      </a>
    </div>
  );
}
