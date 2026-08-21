import type { MetadataRoute } from "next";
import { blogPosts } from "../../content/blog";
import { site } from "../../content/site";
import { workItems } from "../../content/work";
import { hasSanityEnv } from "@/sanity/env";
import { sanityClient } from "@/sanity/lib/client";
import { blogPostSlugsQuery, workItemSlugsQuery } from "@/sanity/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ["", "/about", "/the-studio", "/work", "/blog", "/booking"];

  let blogSlugs: string[] = [];
  let workSlugs: string[] = [];

  if (hasSanityEnv && sanityClient) {
    try {
      [blogSlugs, workSlugs] = await Promise.all([
        sanityClient.fetch<string[]>(blogPostSlugsQuery),
        sanityClient.fetch<string[]>(workItemSlugsQuery),
      ]);
    } catch {
      // Keep static fallbacks if Sanity is unreachable at build time.
    }
  }

  const blogRoutes = (
    blogSlugs.length > 0 ? blogSlugs : blogPosts.map((post) => post.slug)
  ).map((slug) => `/blog/${slug}`);

  const workRoutes = (
    workSlugs.length > 0 ? workSlugs : workItems.map((item) => item.slug)
  ).map((slug) => `/work/${slug}`);

  const allRoutes = [...routes, ...workRoutes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route.startsWith("/work/") || route.startsWith("/blog/")
          ? 0.65
          : 0.7,
  }));
}
