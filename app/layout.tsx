import type { Metadata } from "next";
import { Be_Vietnam_Pro, Geist_Mono } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Eloi Charly — Développeur Full Stack PHP Symfony Next.js",
    template: "%s | Eloi Charly",
  },
  description:
    "Développeur PHP Full Stack avec 4+ ans d'expérience. Spécialisé en Symfony, Laravel, API Platform et Next.js. Disponible en télétravail — Antananarivo, Madagascar.",
  keywords: [
    "développeur PHP",
    "Symfony",
    "Laravel",
    "Next.js",
    "React",
    "API Platform",
    "Full Stack",
    "Madagascar",
    "télétravail",
    "freelance",
  ],
  authors: [{ name: "Eloi Charly RANDRIAMIHAINGO" }],
  creator: "Eloi Charly RANDRIAMIHAINGO",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://eloi-charly.dev",
    title: "Eloi Charly — Développeur Full Stack PHP Symfony Next.js",
    description:
      "Développeur PHP Full Stack avec 4+ ans d'expérience. Symfony, Laravel, API Platform, Next.js. Disponible en télétravail.",
    siteName: "Eloi Charly Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eloi Charly — Développeur Full Stack PHP Symfony Next.js",
    description:
      "Développeur PHP Full Stack avec 4+ ans d'expérience. Symfony, Laravel, API Platform, Next.js.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "RANDRIAMIHAINGO Herinandrianina Eloi Charly",
  jobTitle: "Développeur PHP Full Stack",
  url: "https://eloi-charly.dev",
  email: "nandry556@gmail.com",
  sameAs: [
    "https://github.com/eloi-charly01",
    "https://linkedin.com/in/eloi-charly",
  ],
  knowsAbout: ["PHP", "Symfony", "Laravel", "React", "Next.js", "MySQL", "API Platform"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Antananarivo",
    addressCountry: "MG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${beVietnamPro.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}

