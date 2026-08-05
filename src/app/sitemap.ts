import type { MetadataRoute } from "next";
import { blogPosts } from "../../content/blog";
import { site } from "../../content/site";
import { hasSanityEnv } from "@/sanity/env";
import { sanityClient } from "@/sanity/lib/client";
import { blogPostSlugsQuery } from "@/sanity/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ["", "/about", "/work", "/blog", "/booking"];
  const cmsSlugs =
    hasSanityEnv && sanityClient
      ? await sanityClient.fetch<string[]>(blogPostSlugsQuery)
      : [];
  const blogRoutes = (cmsSlugs.length > 0 ? cmsSlugs : blogPosts.map((post) => post.slug)).map(
    (slug) => `/blog/${slug}`,
  );
  const allRoutes = [...routes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/blog/") ? 0.6 : 0.7,
  }));
}
