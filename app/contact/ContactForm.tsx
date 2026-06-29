"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";

const projectTypes = [
  "Residential",
  "Commercial",
  "Renovation",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const subject = encodeURIComponent(
      `Project Inquiry — ${data.get("projectType")}`
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nProject Type: ${data.get("projectType")}\n\nMessage:\n${data.get("message")}`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-cream pt-32 pb-12">
        <Container>
          <FadeIn>
            <SectionLabel>Get In Touch</SectionLabel>
            <h1 className="font-display text-4xl font-bold text-ink md:text-5xl">
              Start Your Project
            </h1>
            <p className="mt-4 max-w-2xl text-muted">
              Tell us about your space and goals. We&apos;ll respond within one
              business day with next steps.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-20 md:pb-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-md border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-ink">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full rounded-md border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-md border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-ink">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    className="w-full rounded-md border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-none rounded-md border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-md bg-gold px-8 py-3 text-sm font-medium text-ink transition-colors duration-500 hover:bg-[#b8975f]"
                >
                  Send Message
                </button>

                {submitted && (
                  <p className="text-sm text-gold">
                    Your email client should open shortly. If it doesn&apos;t,
                    please email us directly at {siteConfig.email}.
                  </p>
                )}
              </form>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-lg bg-[#25D366] px-6 py-4 text-white transition-opacity hover:opacity-90"
                >
                  <MessageCircle size={24} />
                  <div>
                    <p className="font-medium">Chat on WhatsApp</p>
                    <p className="text-sm text-white/80">Quick response, Mon–Sat</p>
                  </div>
                </a>

                <div className="space-y-4 rounded-lg border border-ink/10 bg-white p-8">
                  <a
                    href={siteConfig.phoneLink}
                    className="flex items-center gap-3 text-ink transition-colors hover:text-gold"
                  >
                    <Phone size={20} className="text-gold" />
                    {siteConfig.phone}
                  </a>
                  <a
                    href={siteConfig.emailLink}
                    className="flex items-center gap-3 text-ink transition-colors hover:text-gold"
                  >
                    <Mail size={20} className="text-gold" />
                    {siteConfig.email}
                  </a>
                  <div className="flex items-start gap-3 text-muted">
                    <MapPin size={20} className="mt-0.5 shrink-0 text-gold" />
                    {siteConfig.address}
                  </div>
                </div>

                <div className="overflow-hidden rounded-lg">
                  <iframe
                    src={siteConfig.mapEmbedUrl}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office location"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
