import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrea Mastretta",
  description:
    "Andrea Mastretta — building in frontier AI security at General Analysis. Previously at Centerview and McKinsey. Founder of Matchatretta and Yale Undergraduate Capital Partners.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Andrea Mastretta",
    description:
      "Building in frontier AI security at General Analysis. Previously Centerview and McKinsey.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
