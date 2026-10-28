import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://themotigroup.co.in"),
  title: {
    default: "The Moti Group | Ideas, Services & Innovation",
    template: "%s | The Moti Group",
  },
  description:
    "The Moti Group brings together healthcare, diagnostics, technology education, financial awareness, shopping deals and business software in one connected ecosystem.",
  applicationName: "The Moti Group",
  alternates: {
    canonical: "/",
  },
  category: "business",
  keywords: [
    "The Moti Group",
    "Moti Group India",
    "Moti Diagnostics Centre",
    "Moti Health",
    "Moti TechLab",
    "Moti Financial",
    "Moti Dealz",
    "health and wellness information",
    "technology education",
    "financial awareness",
    "shopping deals and offers",
    "business software solutions",
    "newspaper management software",
  ],
  openGraph: {
    type: "website",
    url: "https://themotigroup.co.in/",
    siteName: "The Moti Group",
    title: "The Moti Group | Ideas, Services & Innovation",
    description:
      "Explore The Moti Group's connected ventures in healthcare, technology, finance, shopping deals and digital business solutions.",
    locale: "en_IN",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "The Moti Group — Ideas, Services and Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Moti Group | Ideas, Services & Innovation",
    description:
      "Explore healthcare, technology, finance, shopping deals and digital business solutions from The Moti Group.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://themotigroup.co.in/#organization",
                  name: "The Moti Group",
                  url: "https://themotigroup.co.in/",
                  email: "info@themotigroup.co.in",
                  description:
                    "A connected group of ventures across healthcare, technology, finance, shopping deals and digital business solutions.",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://themotigroup.co.in/opengraph-image",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://themotigroup.co.in/#website",
                  url: "https://themotigroup.co.in/",
                  name: "The Moti Group",
                  inLanguage: ["en-IN", "mr-IN"],
                  publisher: {
                    "@id": "https://themotigroup.co.in/#organization",
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
