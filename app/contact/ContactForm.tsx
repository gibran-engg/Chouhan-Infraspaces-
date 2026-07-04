"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";

const projectTypes = ["Residential", "Commercial", "Renovation", "Other"];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Explicitly mapping payload properties to align with your Apps Script setup
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      projectType: formData.get("projectType"),
      budgetRange: "N/A", // The general contact form doesn't have a budget field
      projectBrief: formData.get("message"), // Maps "message" textarea values to "projectBrief"
    };

    try {
      // Targets your internal API route securely
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to save data");

      setSubmitStatus("success");
      form.reset(); // Clear all user inputs on success
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
                    disabled={isSubmitting}
                    className="w-full rounded-md border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold disabled:opacity-50"
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
                      disabled={isSubmitting}
                      className="w-full rounded-md border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold disabled:opacity-50"
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
                      disabled={isSubmitting}
                      className="w-full rounded-md border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold disabled:opacity-50"
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
                    disabled={isSubmitting}
                    className="w-full rounded-md border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold disabled:opacity-50"
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
                    disabled={isSubmitting}
                    className="w-full resize-none rounded-md border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold disabled:opacity-50"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 rounded-md bg-gold px-8 py-3 text-sm font-medium text-ink transition-colors duration-500 hover:bg-[#b8975f] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {submitStatus === "success" && (
                  <p className="text-sm text-gold font-medium">
                    Thank you! Your information has been saved successfully.
                  </p>
                )}

                {submitStatus === "error" && (
                  <p className="text-sm text-red-500 font-medium">
                    Something went wrong. Please try again or email us directly at {siteConfig.email}.
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