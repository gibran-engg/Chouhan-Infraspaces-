"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
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
        solid
          ? "bg-cream/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 lg:px-12">
        <Link href="/" className="flex items-center gap-3 text-ink">
          <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold font-display text-lg font-bold text-white">
            C
          </span>
          <span>
            <span className="block font-display text-lg font-bold leading-none">
              Chouhan
            </span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.38em] text-muted">
              Infraspaces
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-gold",
                pathname === link.href ? "text-gold" : "text-ink"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={siteConfig.phoneLink}
            className="flex items-center gap-2 text-sm font-medium text-ink hover:text-gold"
          >
            <Phone size={16} />
            {siteConfig.phone}
          </a>
          <Button href={siteConfig.consultationHref} showArrow={false}>
            Book Consultation
            <ArrowRight size={16} />
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-ink/10 bg-cream px-6 py-6 lg:hidden">
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
            <a
              href={siteConfig.phoneLink}
              className="flex items-center gap-2 text-base font-medium text-ink"
            >
              <Phone size={16} />
              {siteConfig.phone}
            </a>
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
