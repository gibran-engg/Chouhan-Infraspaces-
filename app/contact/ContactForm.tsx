"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";

const projectTypes = ["Residential interior", "Construction", "Interior finishing", "Turnkey scope", "Other"];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setIsSubmitting(true); setSubmitStatus("idle");
    const form = event.currentTarget; const data = new FormData(form);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: data.get("name"), phone: data.get("phone"), email: data.get("email"), projectType: data.get("projectType"), budgetRange: "Not specified", projectBrief: data.get("message") }) });
      if (!response.ok) throw new Error("Unable to send enquiry");
      setSubmitStatus("success"); form.reset();
    } catch { setSubmitStatus("error"); } finally { setIsSubmitting(false); }
  }
  return <>
    <section className="relative isolate overflow-hidden bg-forest pb-16 pt-32 text-white md:pb-20 md:pt-40"><div className="grain absolute inset-0 opacity-20" /><Container className="relative"><FadeIn><SectionLabel variant="white">Enquiries</SectionLabel><div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]"><h1 className="max-w-3xl font-display text-5xl font-medium leading-[0.94] tracking-[-0.04em] md:text-7xl">Let&apos;s discuss what your space can become.</h1><p className="self-end max-w-md text-base leading-relaxed text-white/70">Share the essentials: the kind of project, the space and the outcome you have in mind. We&apos;ll use that context to shape the next conversation.</p></div></FadeIn></Container></section>
    <section className="py-16 md:py-24"><Container><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"><FadeIn><SectionLabel>A considered start</SectionLabel><h2 className="font-display text-4xl font-medium leading-tight tracking-[-0.03em]">A few details go a long way.</h2><p className="mt-5 max-w-sm leading-7 text-muted">The more we understand about your brief, the more focused the initial conversation can be.</p><div className="mt-10 border-t border-ink/15 pt-5"><p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-gold">What to include</p><ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted"><li>• Type of space and current stage</li><li>• What needs to change or be built</li><li>• Preferred timeline and priorities</li></ul></div></FadeIn>
      <FadeIn delay={0.1}><form onSubmit={handleSubmit} className="grid gap-6 border border-ink/10 bg-white p-6 shadow-[0_18px_40px_rgba(24,32,30,0.05)] md:grid-cols-2 md:p-9"><Field label="Your name" name="name" placeholder="Full name" disabled={isSubmitting} required /><Field label="Phone" name="phone" type="tel" placeholder="Phone number" disabled={isSubmitting} required /><div className="md:col-span-2"><Field label="Email" name="email" type="email" placeholder="you@email.com" disabled={isSubmitting} required /></div><label className="block text-sm font-medium text-ink md:col-span-2">Project type<select name="projectType" disabled={isSubmitting} className="mt-2 w-full border-b border-ink/20 bg-transparent px-0 py-3 text-sm outline-none transition-colors focus:border-gold">{projectTypes.map((type) => <option key={type}>{type}</option>)}</select></label><label className="block text-sm font-medium text-ink md:col-span-2">Tell us about the project<textarea name="message" rows={5} required disabled={isSubmitting} placeholder="Scope, space, timeline, and anything useful to know" className="mt-2 w-full resize-none border-b border-ink/20 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-gold" /></label><button type="submit" disabled={isSubmitting} className="inline-flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#9a7042] disabled:opacity-60">{isSubmitting ? <><Loader2 size={15} className="animate-spin" /> Sending</> : <>Send enquiry <ArrowUpRight size={15} /></>}</button>{submitStatus === "success" ? <p className="self-center text-sm text-forest">Thank you—your enquiry has been sent.</p> : null}{submitStatus === "error" ? <p className="self-center text-sm text-red-700">We couldn&apos;t send that just now. Please try again shortly.</p> : null}</form></FadeIn></div></Container></section>
  </>;
}

function Field({ label, name, placeholder, type = "text", required, disabled }: { label: string; name: string; placeholder: string; type?: string; required?: boolean; disabled: boolean }) {
  return <label className="block text-sm font-medium text-ink">{label}<input name={name} type={type} required={required} disabled={disabled} placeholder={placeholder} className="mt-2 w-full border-b border-ink/20 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-gold" /></label>;
}
