import type { MetadataRoute } from "next";

const baseUrl = "https://themotigroup.co.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about-us`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/contact-us`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/terms-and-conditions`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/cookie-policy`, changeFrequency: "yearly", priority: 0.4 },
  ];
}
