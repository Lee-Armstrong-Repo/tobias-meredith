import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { WorkLightbox } from "@/components/WorkLightbox";
import { site } from "../../../../content/site";
import {
  getPortfolioItem,
  getPortfolioItems,
  getPortfolioSlugs,
} from "@/lib/work";
import {
  absoluteUrl,
  breadcrumbNode,
  personNode,
  webPageNode,
  websiteNode,
} from "@/lib/schema";

type Params = Promise<{ slug: string }>;

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getPortfolioSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const item = await getPortfolioItem(slug);

  if (!item) {
    return {};
  }

  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: `/work/${item.slug}` },
    openGraph: {
      title: item.title,
      description: item.description,
      url: `/work/${item.slug}`,
      type: "article",
      images: [{ url: item.src, alt: item.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.description,
      images: [item.src],
    },
  };
}

export default async function WorkDetailPage(props: { params: Params }) {
  const { slug } = await props.params;
  const item = await getPortfolioItem(slug);

  if (!item) {
    notFound();
  }

  const related = (await getPortfolioItems())
    .filter((entry) => entry.slug !== item.slug)
    .slice(0, 3);

  return (
    <div className="page">
      <JsonLd
        data={[
          websiteNode(),
          personNode(),
          webPageNode({
            path: `/work/${item.slug}`,
            name: item.title,
            description: item.description,
          }),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
            { name: item.title, path: `/work/${item.slug}` },
          ]),
          {
            "@type": "CreativeWork",
            "@id": absoluteUrl(`/work/${item.slug}#work`),
            name: item.title,
            description: item.description,
            image: absoluteUrl(item.src),
            creator: { "@id": `${site.url}/#person` },
            genre: item.category,
            url: absoluteUrl(`/work/${item.slug}`),
          },
        ]}
      />

      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/work">Work</Link>
        <span aria-hidden="true">/</span>
        <span>{item.title}</span>
      </nav>

      <div className="work-detail">
        <WorkLightbox
          src={item.src}
          alt={item.alt}
          title={item.title}
          unoptimized={item.isPlaceholder}
        />

        <div className="work-detail__copy">
          <p className="hero-kicker">{item.category}</p>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <div className="cta-row">
            <Link href="/booking" className="button">
              Book a consultation
            </Link>
            <Link href="/work" className="button-secondary">
              Back to work
            </Link>
          </div>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="related-work" aria-labelledby="related-heading">
          <h2 id="related-heading">More work</h2>
          <div className="work-grid work-grid--related">
            {related.map((entry) => (
              <article key={entry.id} className="work-card">
                <Link href={`/work/${entry.slug}`} className="work-card__link">
                  <div className="work-card__media">
                    <Image
                      src={entry.src}
                      alt={entry.alt}
                      fill
                      sizes="(max-width: 639px) 100vw, 33vw"
                      unoptimized={entry.isPlaceholder}
                    />
                  </div>
                  <div className="work-card__meta">
                    <strong>{entry.title}</strong>
                    <span>{entry.category}</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
