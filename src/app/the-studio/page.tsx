import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../../components/JsonLd";
import { placeholders } from "../../../content/placeholders";
import { site } from "../../../content/site";
import {
  studioFeatures,
  studioGallery,
  studioIntro,
  studioSession,
} from "../../../content/studio";
import { buildPageGraph, schemaIds } from "../../lib/schema";

const pageTitle = `The studio | ${site.name}`;
const pageDescription = `Visit the ${site.name} tattoo studio in Melbourne — a private, hygienic space for custom fine line, blackwork, and illustrative sessions.`;

export const metadata: Metadata = {
  title: "The studio",
  description: pageDescription,
  alternates: { canonical: "/the-studio" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/the-studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function StudioPage() {
  return (
    <>
      <JsonLd
        data={buildPageGraph(
          "/the-studio",
          {
            name: pageTitle,
            description: pageDescription,
            mainEntityId: schemaIds.service,
            primaryImage: placeholders.studio,
          },
          [
            { name: "Home", path: "/" },
            { name: "The studio", path: "/the-studio" },
          ],
          [],
          { includeService: true },
        )}
      />

      <article className="page" aria-labelledby="studio-page-heading">
        <header className="page-intro">
          <h1 id="studio-page-heading">The studio</h1>
          <p className="about-role">Private custom tattoo sessions in Melbourne</p>
          <p>{studioIntro}</p>
        </header>

        <figure className="studio-page__media">
          <Image
            src={placeholders.studio}
            alt={`Studio space for ${site.name}`}
            fill
            sizes="(max-width: 859px) 100vw, 960px"
            priority
          />
        </figure>

        <ul className="studio-page__gallery" aria-label="Studio gallery">
          {studioGallery.map((image) => (
            <li key={image.src}>
              <figure className="studio-page__gallery-item">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 859px) 100vw, 33vw"
                />
              </figure>
            </li>
          ))}
        </ul>

        <section aria-labelledby="studio-features-heading">
          <h2 id="studio-features-heading">Studio standards</h2>
          <ul className="studio-page__features">
            {studioFeatures.map((feature) => (
              <li key={feature.title}>
                <article aria-labelledby={`studio-page-${feature.title}`}>
                  <h3 id={`studio-page-${feature.title}`}>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section className="studio-page__session" aria-labelledby="studio-session-heading">
          <h2 id="studio-session-heading">{studioSession.heading}</h2>
          {studioSession.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            Based in {site.location}. Sessions are by appointment — use the{" "}
            <Link href="/booking">consultation form</Link> or email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> to enquire.
          </p>
          <p className="cta-row">
            <Link href="/booking" className="button-ghost button-ghost--dark">
              Book a consultation
            </Link>
            <Link href="/work" className="text-link">
              View portfolio
            </Link>
          </p>
        </section>
      </article>
    </>
  );
}
