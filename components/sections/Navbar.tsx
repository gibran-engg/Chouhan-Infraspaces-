"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const solid = scrolled || !isHome;

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
        solid ? "border-b border-ink/10 bg-cream/95 shadow-sm backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[76px] max-w-content items-center justify-between px-5 sm:px-8 lg:h-[82px] lg:px-12">
        <Link href="/" className={cn("flex items-center gap-3", solid ? "text-ink" : "text-white")}>
          <span className="flex h-11 w-11 items-center justify-center border border-gold bg-gold font-display text-lg font-semibold text-white shadow-[0_5px_14px_rgba(0,0,0,0.18)]">
            C
          </span>
          <span>
            <span className="block font-display text-lg font-bold leading-none">
              Chouhan
            </span>
            <span className={cn("mt-1 block text-[9px] uppercase tracking-[0.38em]", solid ? "text-muted" : "text-white/65")}>
              Infraspaces
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:gap-9 lg:flex">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative py-2 text-sm font-medium transition-colors hover:text-gold after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full",
                pathname === link.href ? "text-gold" : solid ? "text-ink" : "text-white/90"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <Button href={siteConfig.consultationHref} showArrow={false}>
            Book Consultation
            <ArrowRight size={16} />
          </Button>
        </div>

        <button
          type="button"
          className={cn("lg:hidden", solid ? "text-ink" : "text-white")}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-ink/10 bg-cream px-5 py-6 sm:px-8 lg:hidden">
          <nav className="flex flex-col gap-4">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base font-medium",
                  pathname === link.href ? "text-gold" : "text-ink"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button href={siteConfig.consultationHref} className="mt-2 w-fit" showArrow={false}>
              Book Consultation
              <ArrowRight size={16} />
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
