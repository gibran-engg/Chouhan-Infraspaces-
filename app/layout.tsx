import { Fraunces, Inter } from "next/font/google";
import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/sections/FloatingActions";
import { siteConfig } from "@/config/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Premium design and build partner for interior design, construction, renovation, and turnkey solutions in Mumbai and across India.",
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description:
      "From design to delivery — one accountable partner for residences, workplaces, and commercial spaces.",
    type: "website",
    locale: "en_IN",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.tagline,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  url: "https://chouhaninfraspaces.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={`${fraunces.variable} ${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}
