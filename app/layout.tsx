import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrea Mastretta",
  description:
    "Andrea Mastretta — Tech M&A Analyst at Centerview, founder of Matchatretta and Yale Undergraduate Capital Partners. Figuring out what's next.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Andrea Mastretta",
    description:
      "Tech M&A Analyst at Centerview. Founder of Matchatretta and Yale Undergraduate Capital Partners.",
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
