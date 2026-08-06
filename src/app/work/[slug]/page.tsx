import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WorkLightbox } from "@/components/WorkLightbox";
import { site } from "../../../../content/site";
import {
  getPortfolioItem,
  getPortfolioItems,
  getPortfolioSlugs,
} from "@/lib/work";

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
    keywords: [
      item.title,
      item.category,
      `${item.category} tattoo Melbourne`,
      "Tobias Meredith",
      "Melbourne tattoo artist",
      "custom tattoo Melbourne",
    ],
    alternates: { canonical: `/work/${item.slug}` },
    openGraph: {
      title: `${item.title} | ${site.name} Melbourne`,
      description: item.description,
      type: "article",
      images: [{ url: item.src, alt: item.alt }],
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: item.title,
    description: item.description,
    image: item.src.startsWith("http") ? item.src : `${site.url}${item.src}`,
    creator: {
      "@type": "Person",
      name: site.name,
    },
    genre: item.category,
    contentLocation: {
      "@type": "City",
      name: site.city,
    },
    url: `${site.url}/work/${item.slug}`,
  };

  return (
    <div className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
