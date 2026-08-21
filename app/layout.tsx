import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cobeq.ca"),
  title: "PMC COBEQ | Projet majeur de conception en génie",
  description: "Présentation bilingue du Projet majeur de conception en génie COBEQ: un module robotisé de cueillette de fraises hors-sol et en serre, centré sur le rendement.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/brand/favicon.png",
    shortcut: "/brand/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Projet majeur de conception COBEQ",
    description: "Un Projet majeur de conception en génie conçu par la Promotion 69 de l’Université de Sherbrooke.",
    url: "https://cobeq.ca/",
    siteName: "COBEQ",
    locale: "fr_CA",
    alternateLocale: ["en_CA"],
    type: "website",
    images: [
      {
        url: "/brand/nom.png",
        alt: "Logo COBEQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projet majeur de conception COBEQ",
    description: "Module robotisé de cueillette de fraises centré sur le rendement.",
    images: ["/brand/nom.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
