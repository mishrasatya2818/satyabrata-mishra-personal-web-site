import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}, ${site.focus}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Satyabrata Mishra",
    "Product Manager",
    "Oracle",
    "Autonomous Database",
    "Oracle AI Database 26ai",
    "Multicloud",
    "Applied AI",
    "Agentic AI",
    "Bengaluru",
  ],
  authors: [{ name: site.name, url: site.links.linkedin }],
  openGraph: {
    type: "profile",
    title: `${site.name} — ${site.role}`,
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f2ec" },
    { media: "(prefers-color-scheme: dark)", color: "#100f0c" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  worksFor: { "@type": "Organization", name: "Oracle" },
  address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
  email: `mailto:${site.email}`,
  url: site.url,
  sameAs: [site.links.linkedin, site.links.medium],
  alumniOf: ["Indian School of Business", "Biju Patnaik University of Technology"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
