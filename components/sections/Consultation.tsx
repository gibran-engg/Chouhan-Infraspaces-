"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";

const budgets = ["Under 25L", "25L - 75L", "75L - 1.5Cr", "1.5Cr+"];
const projectTypes = ["Residence", "Office", "Retail", "Renovation", "Turnkey"];

export function Consultation() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Project type: ${data.get("projectType")}`,
      `Budget: ${data.get("budget")}`,
      "",
      `Project brief: ${data.get("message")}`,
    ].join("\n");

    const subject = encodeURIComponent(`Consultation Request - ${data.get("projectType")}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${encodeURIComponent(message)}`;
    setSent(true);
  }

  return (
    <section id="consultation" className="scroll-mt-24 bg-white py-20 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <SectionLabel>Book Consultation</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-ink md:text-5xl">
              Tell us what you want built.
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-muted">
              Share the essentials and our team will come back with the right
              next step: site visit, budget estimate, design discussion, or
              turnkey proposal.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <a href={siteConfig.phoneLink} className="flex items-center gap-3 border border-ink/10 px-4 py-4 text-sm font-medium text-ink transition-colors hover:border-gold hover:text-gold">
                <Phone size={18} />
                Call
              </a>
              <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border border-ink/10 px-4 py-4 text-sm font-medium text-ink transition-colors hover:border-gold hover:text-gold">
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a href={siteConfig.emailLink} className="flex items-center gap-3 border border-ink/10 px-4 py-4 text-sm font-medium text-ink transition-colors hover:border-gold hover:text-gold">
                <Mail size={18} />
                Email
              </a>
            </div>

            <div className="relative mt-10 aspect-[5/4] overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=900&q=80"
                alt="Premium living room consultation mood"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <form onSubmit={handleSubmit} className="grid gap-5 border border-ink/10 bg-cream p-6 shadow-sm md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your full name" required />
                <Field label="Phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
              </div>
              <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
              <div className="grid gap-5 sm:grid-cols-2">
                <Select label="Project Type" name="projectType" options={projectTypes} />
                <Select label="Budget Range" name="budget" options={budgets} />
              </div>
              <label className="block text-sm font-medium text-ink">
                Project Brief
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Location, size, timeline, and what you want done"
                  className="mt-2 w-full resize-none border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                />
              </label>
              <button type="submit" className="inline-flex w-fit items-center justify-center bg-gold px-7 py-3 text-sm font-semibold text-ink transition-colors hover:bg-[#b8975f]">
                Send Consultation Request
              </button>
              {sent && (
                <p className="text-sm text-muted">
                  Your email app should open with the request filled in. You can also use WhatsApp or call if the email app is blocked.
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium text-ink">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block text-sm font-medium text-ink">
      {label}
      <select
        name={name}
        className="mt-2 w-full border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
