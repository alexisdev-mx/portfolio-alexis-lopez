import { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE.domain}/`, priority: 1, changeFrequency: "monthly", lastModified: new Date() }
  ];
}
