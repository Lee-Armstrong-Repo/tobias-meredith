import type { MetadataRoute } from "next";
import { blogPosts } from "../../content/blog";
import { site } from "../../content/site";
import { workItems } from "../../content/work";
import { hasSanityEnv } from "@/sanity/env";
import { sanityClient } from "@/sanity/lib/client";
import { blogPostSlugsQuery, workItemSlugsQuery } from "@/sanity/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ["", "/about", "/the-studio", "/work", "/blog", "/booking"];

  const blogSlugs =
    hasSanityEnv && sanityClient
      ? await sanityClient.fetch<string[]>(blogPostSlugsQuery)
      : [];
  const workSlugs =
    hasSanityEnv && sanityClient
      ? await sanityClient.fetch<string[]>(workItemSlugsQuery)
      : [];

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
