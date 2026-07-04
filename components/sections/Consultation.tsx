"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Mail, MessageCircle, Phone, Loader2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";

const budgets = ["Under 25L", "25L - 75L", "75L - 1.5Cr", "1.5Cr+"];
const projectTypes = ["Residence", "Office", "Retail", "Renovation", "Turnkey"];

export function Consultation() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = event.currentTarget;
    const data = new FormData(form);
    
    // Package data to match the property names expected by your API and Google Sheet
    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      projectType: data.get("projectType"),
      budgetRange: data.get("budget"), 
      projectBrief: data.get("message"), // Maps textarea content safely
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to send data");

      setSubmitStatus("success");
      form.reset(); // Empties fields on success
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
                <Field label="Name" name="name" placeholder="Your full name" required disabled={isSubmitting} />
                <Field label="Phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" required disabled={isSubmitting} />
              </div>
              <Field label="Email" name="email" type="email" placeholder="you@email.com" required disabled={isSubmitting} />
              <div className="grid gap-5 sm:grid-cols-2">
                <Select label="Project Type" name="projectType" options={projectTypes} disabled={isSubmitting} />
                <Select label="Budget Range" name="budget" options={budgets} disabled={isSubmitting} />
              </div>
              <label className="block text-sm font-medium text-ink">
                Project Brief
                <textarea
                  name="message"
                  rows={5}
                  required
                  disabled={isSubmitting}
                  placeholder="Location, size, timeline, and what you want done"
                  className="mt-2 w-full resize-none border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold disabled:opacity-50"
                />
              </label>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="inline-flex w-fit items-center justify-center gap-2 bg-gold px-7 py-3 text-sm font-semibold text-ink transition-colors hover:bg-[#b8975f] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending Request...
                  </>
                ) : (
                  "Send Consultation Request"
                )}
              </button>

              {submitStatus === "success" && (
                <p className="text-sm text-gold font-medium mt-2">
                  Request received! Our team will get back to you within one business day.
                </p>
              )}

              {submitStatus === "error" && (
                <p className="text-sm text-red-500 font-medium mt-2">
                  Something went wrong processing your request. Please try again.
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
  disabled = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <label className="block text-sm font-medium text-ink">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        disabled={disabled}
        className="mt-2 w-full border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold disabled:opacity-50"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
  disabled = false,
}: {
  label: string;
  name: string;
  options: string[];
  disabled?: boolean;
}) {
  return (
    <label className="block text-sm font-medium text-ink">
      {label}
      <select
        name={name}
        disabled={disabled}
        className="mt-2 w-full border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold disabled:opacity-50"
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