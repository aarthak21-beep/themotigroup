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
    "Explore The Moti Group's ecosystem of healthcare, technology, finance, shopping deals and digital business solutions.",
  applicationName: "The Moti Group",
  keywords: [
    "The Moti Group",
    "Moti Diagnostics Centre",
    "Moti Health",
    "Moti TechLab",
    "Moti Financial",
    "Moti Dealz",
    "business software",
  ],
  openGraph: {
    type: "website",
    url: "https://themotigroup.co.in/",
    siteName: "The Moti Group",
    title: "The Moti Group | Ideas, Services & Innovation",
    description:
      "Discover healthcare, technology, finance, shopping deals and digital solutions from The Moti Group.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Moti Group | Ideas, Services & Innovation",
    description:
      "Discover healthcare, technology, finance, shopping deals and digital solutions from The Moti Group.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
