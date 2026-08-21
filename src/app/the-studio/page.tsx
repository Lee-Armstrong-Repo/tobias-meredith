import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../../components/JsonLd";
import { placeholders } from "../../../content/placeholders";
import { site } from "../../../content/site";
import {
  studioFeatures,
  studioIntro,
  studioSession,
} from "../../../content/studio";
import { absoluteUrl, buildPageGraph, schemaIds } from "../../lib/schema";

const pageTitle = `Tattoo studio | Victims of Ink, South Yarra | ${site.name}`;
const pageDescription = `${site.name} tattoos by appointment at Victims of Ink, 515 Chapel Street, South Yarra Melbourne. Custom black and grey — realism and Chicano.`;

export const metadata: Metadata = {
  title: "The studio",
  description: pageDescription,
  alternates: { canonical: "/the-studio" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/the-studio",
    type: "website",
    images: [
      {
        url: placeholders.booking,
        alt: "Tattoo session in progress with Tobias Meredith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [placeholders.booking],
  },
};

export default function StudioPage() {
  const { studio } = site;

  return (
    <>
      <JsonLd
        data={buildPageGraph(
          "/the-studio",
          {
            name: pageTitle,
            description: pageDescription,
            mainEntityId: schemaIds.service,
            primaryImage: absoluteUrl(placeholders.booking),
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
          <p className="about-role">
            Working from {studio.name}, {studio.addressLocality}
          </p>
          <p>{studioIntro}</p>
        </header>

        <figure className="studio-page__media studio-page__media--video">
          <video
            className="studio-page__video"
            autoPlay
            muted
            loop
            playsInline
            poster={placeholders.booking}
            aria-label="Close-up of a tattoo session in progress"
          >
            <source src={placeholders.processVideo} type="video/mp4" />
          </video>
        </figure>

        <section className="studio-page__location" aria-labelledby="studio-location-heading">
          <h2 id="studio-location-heading">{studio.name}</h2>
          <p className="studio-page__location-lede">
            Tobias books custom sessions through Victims of Ink on Chapel
            Street — a professional South Yarra studio for focused black and
            grey work.
          </p>

          <address className="studio-page__address">
            <p>
              <strong>{studio.name}</strong>
              <br />
              {studio.streetAddress}
              <br />
              {studio.addressLocality} {studio.addressRegion} {studio.postalCode}
              <br />
              Australia
            </p>
            <p className="studio-page__address-links">
              <a
                href={studio.mapsUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Get directions
              </a>
              <span aria-hidden="true"> / </span>
              <a
                href={studio.website}
                rel="noopener noreferrer"
                target="_blank"
              >
                {studio.name} website
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </address>
        </section>

        <section aria-labelledby="studio-features-heading">
          <h2 id="studio-features-heading">What to expect</h2>
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
            Sessions are by appointment — use the{" "}
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
