"use client";

import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2">
      <a
        href={siteConfig.phoneLink}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition-transform hover:-translate-y-0.5"
        aria-label="Call Chouhan Infraspaces"
      >
        <Phone size={18} />
      </a>
      <a
        href={siteConfig.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:-translate-y-0.5"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={18} />
      </a>
      <a
        href={siteConfig.consultationHref}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-ink shadow-lg transition-transform hover:-translate-y-0.5"
        aria-label="Book consultation"
      >
        <CalendarCheck size={18} />
      </a>
    </div>
  );
}
