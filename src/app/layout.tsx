import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arthur Labs",
  description:
    "Arthur Labs is an ecosystem dedicated towards resources, tools, and application developmnet in Web3.",
  openGraph: {
    title: "Arthur Labs | Ecosystem",
    description: "Arthur Labs is an ecosystem dedicated towards resources, tools, and application development in Web3.",
    url: "https://arthurlabs.net",
    siteName: "Arthur Labs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Arthur Labs - Web3 Ecosystem"
      }
    ]
  },
  twitter: {
    title: "Arthur Labs | Ecosystem",
    description: "Arthur Labs is an ecosystem dedicated towards resources, tools, and application development in Web3.",
    card: "summary_large_image",
    images: ["/opengraph-image"],
    creator: "@ArthurLabsDAO"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${unbounded.variable} antialiased`}>{children}</body>
    </html>
  );
}
