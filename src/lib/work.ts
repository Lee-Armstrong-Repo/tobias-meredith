import { workItems, type WorkItem } from "../../content/work";
import { site } from "../../content/site";
import { hasSanityEnv } from "@/sanity/env";
import { sanityClient } from "@/sanity/lib/client";
import {
  workItemBySlugQuery,
  workItemSlugsQuery,
  workItemsQuery,
} from "@/sanity/lib/queries";

export type PortfolioItem = {
  id: string;
  slug: string;
  title: string;
  category: string;
  alt: string;
  description: string;
  src: string;
  isPlaceholder: boolean;
};

type SanityWorkItem = {
  _id: string;
  title: string;
  slug?: { current?: string };
  category: string;
  alt: string;
  description?: string;
  imageUrl?: string;
};

function toPortfolioItem(
  item: SanityWorkItem,
  fallback?: WorkItem,
): PortfolioItem {
  const slug =
    item.slug?.current ||
    fallback?.slug ||
    item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return {
    id: item._id,
    slug,
    title: item.title,
    category: item.category,
    alt: item.alt,
    description:
      item.description ||
      fallback?.description ||
      `${item.title} by ${site.name}.`,
    src: item.imageUrl || fallback?.src || "/work/placeholder-01.svg",
    isPlaceholder: !item.imageUrl,
  };
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  if (hasSanityEnv && sanityClient) {
    const cmsItems = await sanityClient.fetch<SanityWorkItem[]>(workItemsQuery);

    if (cmsItems.length > 0) {
      return cmsItems.map((item, index) =>
        toPortfolioItem(item, workItems[index % workItems.length]),
      );
    }
  }

  return workItems.map((item) => ({
    id: item.id,
    slug: item.slug,
    title: item.title,
    category: item.category,
    alt: item.alt,
    description: item.description,
    src: item.src,
    isPlaceholder: item.src.endsWith(".svg"),
  }));
}

export async function getPortfolioSlugs(): Promise<string[]> {
  if (hasSanityEnv && sanityClient) {
    const cmsSlugs = await sanityClient.fetch<string[]>(workItemSlugsQuery);
    if (cmsSlugs.length > 0) {
      return cmsSlugs;
    }
  }

  return workItems.map((item) => item.slug);
}

export async function getPortfolioItem(
  slug: string,
): Promise<PortfolioItem | null> {
  if (hasSanityEnv && sanityClient) {
    const cmsItem = await sanityClient.fetch<SanityWorkItem | null>(
      workItemBySlugQuery,
      { slug },
    );

    if (cmsItem) {
      return toPortfolioItem(
        cmsItem,
        workItems.find((item) => item.slug === slug),
      );
    }
  }

  const fallback = workItems.find((item) => item.slug === slug);
  if (!fallback) {
    return null;
  }

  return {
    id: fallback.id,
    slug: fallback.slug,
    title: fallback.title,
    category: fallback.category,
    alt: fallback.alt,
    description: fallback.description,
    src: fallback.src,
    isPlaceholder: fallback.src.endsWith(".svg"),
  };
}
