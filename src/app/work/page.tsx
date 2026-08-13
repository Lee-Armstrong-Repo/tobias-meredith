import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { site } from "../../../content/site";
import { getPortfolioItems } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description: `Selected tattoo work by ${site.name}, Melbourne tattoo artist. Browse custom fine line, blackwork, illustrative, and ornamental tattoos.`,
  keywords: [
    "Tobias Meredith tattoos",
    "Melbourne tattoo portfolio",
    "fine line tattoos Melbourne",
    "blackwork tattoos Melbourne",
    "custom tattoo gallery Melbourne",
  ],
  alternates: { canonical: "/work" },
  openGraph: {
    title: `Work | ${site.name} Melbourne Tattoo Portfolio`,
    description: `View selected tattoo work by ${site.name} in Melbourne — fine line, blackwork, and illustrative pieces.`,
    url: "/work",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Work | ${site.name} Melbourne Tattoo Portfolio`,
    description: `View selected tattoo work by ${site.name} in Melbourne — fine line, blackwork, and illustrative pieces.`,
    images: ["/opengraph-image"],
  },
};

export const revalidate = 60;

export default async function WorkPage() {
  const items = await getPortfolioItems();

  return (
    <div className="page">
      <div className="page-intro">
        <h1>Work</h1>
        <p>
          Selected tattoo work by {site.name} in Melbourne — custom fine line,
          blackwork, illustrative, and ornamental pieces. Click any piece for a
          larger view.
        </p>
      </div>

      <div className="work-grid">
        {items.map((item) => (
          <article key={item.id} className="work-card">
            <Link href={`/work/${item.slug}`} className="work-card__link">
              <div className="work-card__media">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1099px) 50vw, 33vw"
                  unoptimized={item.isPlaceholder}
                />
              </div>
              <div className="work-card__meta">
                <strong>{item.title}</strong>
                <span>{item.category}</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
