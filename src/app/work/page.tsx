import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { site } from "../../../content/site";
import { getPortfolioItems } from "@/lib/work";
import {
  absoluteUrl,
  breadcrumbNode,
  personNode,
  webPageNode,
  websiteNode,
} from "@/lib/schema";

const pageTitle = `Work by ${site.name}`;
const pageDescription = `Selected custom tattoo work by ${site.name}, including fine line, blackwork, illustrative, and ornamental pieces.`;

export const metadata: Metadata = {
  title: "Work",
  description: pageDescription,
  alternates: { canonical: "/work" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/work",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export const revalidate = 60;

export default async function WorkPage() {
  const items = await getPortfolioItems();

  return (
    <>
      <JsonLd
        data={[
          websiteNode(),
          personNode(),
          webPageNode({
            path: "/work",
            name: pageTitle,
            description: pageDescription,
            type: "CollectionPage",
          }),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
          ]),
          {
            "@type": "ItemList",
            name: pageTitle,
            numberOfItems: items.length,
            itemListElement: items.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: absoluteUrl(`/work/${item.slug}`),
              name: item.title,
            })),
          },
        ]}
      />

      <div className="page">
        <header className="page-intro">
          <h1>Work</h1>
          <p>
            Selected tattoo work by {site.name}. Click any piece for a larger
            view.
          </p>
        </header>

        <ul className="work-grid">
          {items.map((item) => (
            <li key={item.id} className="work-card">
              <Link href={`/work/${item.slug}`}>
                <div className="work-card__media">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    unoptimized={item.isPlaceholder}
                  />
                </div>
                <div className="work-card__meta">
                  <span>{item.category}</span>
                  <strong>{item.title}</strong>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
