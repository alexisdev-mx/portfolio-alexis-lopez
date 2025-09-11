import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.ejemplo-portfolio-alexis.com";
  return [
    { url: `${base}/`, priority: 1, changeFrequency: "monthly", lastModified: new Date() }
  ];
}
