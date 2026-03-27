import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import EcosystemBar from "@/components/EcosystemBar";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://links.arthurlabs.net"),
  title: {
    default: "Links | Arthur Labs Inc.",
    template: "%s | Arthur Labs Inc.",
  },
  description:
    "Arthur Labs is an ecosystem dedicated towards resources, tools, and application development in Web3.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Links | Arthur Labs Inc.",
    description: "Arthur Labs is an ecosystem dedicated towards resources, tools, and application development in Web3.",
    url: "https://links.arthurlabs.net",
    siteName: "Arthur Labs Inc.",
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
    title: "Links | Arthur Labs Inc.",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfilePage",
                  "@id": "https://links.arthurlabs.net/#profilepage",
                  name: "Arthur Labs Links",
                  description:
                    "All Arthur Labs products, social profiles, and resources in one place.",
                  mainEntity: {
                    "@id": "https://arthurlabs.net/#organization",
                  },
                },
                {
                  "@type": "ItemList",
                  "@id": "https://links.arthurlabs.net/#linklist",
                  name: "Arthur Labs Products & Links",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Arthur Labs",
                      url: "https://arthurlabs.net/",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Builder",
                      url: "https://builder.arthurlabs.net/",
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: "HIIE",
                      url: "https://hiie.arthurlabs.net/",
                    },
                    {
                      "@type": "ListItem",
                      position: 4,
                      name: "1099-DA Tax Form",
                      url: "https://crypto.arthurlabs.net/",
                    },
                    {
                      "@type": "ListItem",
                      position: 5,
                      name: "Podcast",
                      url: "https://podcast.arthurlabs.net/",
                    },
                    {
                      "@type": "ListItem",
                      position: 6,
                      name: "Whitepaper",
                      url: "https://whitepaper.arthurlabs.net/",
                    },
                    {
                      "@type": "ListItem",
                      position: 7,
                      name: "Watson LR",
                      url: "https://watson.arthurlabs.net/",
                    },
                    {
                      "@type": "ListItem",
                      position: 8,
                      name: "Blogs & Docs",
                      url: "https://docs.arthurlabs.net/",
                    },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://links.arthurlabs.net/#website",
                  url: "https://links.arthurlabs.net",
                  name: "Arthur Labs Links",
                  publisher: {
                    "@id": "https://arthurlabs.net/#organization",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${unbounded.variable} antialiased`}>
        <EcosystemBar />
        {children}
      </body>
    </html>
  );
}
