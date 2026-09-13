import Link from "next/link";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";

const PHONE_INTL = "919763691625";
const PHONE_DISPLAY = "+91 97636 91625";
const EMAIL = "infrachouhan@gmail.com";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-forest py-16 text-white">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="font-display text-2xl font-medium text-white">
              {siteConfig.name}
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">{siteConfig.tagline}</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/process" className="text-sm text-white/60 hover:text-gold">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="text-sm text-white/60 hover:text-gold">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-white/60 hover:text-gold">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
              Contact
            </h4>
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              For new project enquiries, use the consultation form and share a little about your brief.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex text-[11px] font-semibold uppercase tracking-[0.14em] text-gold hover:text-white"
            >
              Start an enquiry
            </Link>

            <div className="mt-5 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(
                  "Hi, I'm interested in discussing a project with Chouhan Infraspaces."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-gold"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>

              <a
                href={`tel:+${PHONE_INTL}`}
                className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-gold"
              >
                <Phone size={15} />
                {PHONE_DISPLAY}
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-gold"
              >
                <Mail size={15} />
                {EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
