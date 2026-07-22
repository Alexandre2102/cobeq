import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PMC COBEQ | Projet majeur de conception en génie",
  description: "Présentation du Projet majeur de conception en génie COBEQ: un module robotisé de cueillette de fraises hors-sol et en serre, centré sur le rendement.",
  icons: {
    icon: "/brand/favicon.png",
    shortcut: "/brand/favicon.png",
  },
  openGraph: {
    title: "Projet majeur de conception COBEQ",
    description: "Un Projet majeur de conception en génie conçu par la Promotion 69 de l’Université de Sherbrooke.",
    type: "website",
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
