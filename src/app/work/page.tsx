import Image from "next/image";
import type { Metadata } from "next";
import { site } from "../../../content/site";
import { workItems } from "../../../content/work";
import { sanityClient } from "@/sanity/lib/client";
import { workItemsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Work",
  description: `Selected tattoo work by ${site.name}. Browse fine line, blackwork, illustrative, and ornamental pieces.`,
  alternates: { canonical: "/work" },
};

export const revalidate = 60;

type SanityWorkItem = {
  _id: string;
  title: string;
  category: string;
  alt: string;
  imageUrl?: string;
};

async function getWorkItems() {
  if (sanityClient) {
    const cmsItems = await sanityClient.fetch<SanityWorkItem[]>(workItemsQuery);

    if (cmsItems.length > 0) {
      return cmsItems.map((item, index) => ({
        id: item._id,
        title: item.title,
        category: item.category,
        alt: item.alt,
        src: item.imageUrl || workItems[index % workItems.length].src,
        isPlaceholder: !item.imageUrl,
      }));
    }
  }

  return workItems.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    alt: item.alt,
    src: item.src,
    isPlaceholder: item.src.endsWith(".svg"),
  }));
}

export default async function WorkPage() {
  const items = await getWorkItems();

  return (
    <div className="page">
      <div className="page-intro">
        <h1>Work</h1>
        <p>
          Recent tattoos and selected pieces. Once Sanity is connected, Tobias
          can upload and manage this gallery from the CMS.
        </p>
      </div>

      <div className="work-grid">
        {items.map((item) => (
          <article key={item.id} className="work-card">
            <div className="work-card__media">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 859px) 100vw, (max-width: 1099px) 50vw, 33vw"
                unoptimized={item.isPlaceholder}
              />
            </div>
            <div className="work-card__meta">
              <strong>{item.title}</strong>
              <span>{item.category}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
