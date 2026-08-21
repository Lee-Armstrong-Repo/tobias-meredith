import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../../components/JsonLd";
import { site } from "../../../content/site";
import { placeholders } from "../../../content/placeholders";
import { absoluteUrl, buildPageGraph, schemaIds } from "../../lib/schema";

const pageTitle = `About ${site.name} | Black & Grey Tattoo Artist Melbourne`;
const pageDescription = `${site.name} is a tattoo artist at Victims of Ink in South Yarra, Melbourne — custom black and grey, realism, and Chicano work by appointment.`;

export const metadata: Metadata = {
  title: "About",
  description: pageDescription,
  alternates: { canonical: "/about" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/about",
    type: "profile",
    images: [{ url: placeholders.about, alt: `${site.name} in Melbourne` }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [placeholders.about],
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={buildPageGraph(
          "/about",
          {
            name: pageTitle,
            description: pageDescription,
            type: "AboutPage",
            mainEntityId: schemaIds.person,
            primaryImage: absoluteUrl(placeholders.about),
          },
          [
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ],
        )}
      />

      <article className="page" aria-labelledby="about-heading">
        <header className="page-intro">
          <h1 id="about-heading">About {site.name}</h1>
          <p className="about-role">
            Black &amp; grey · Realism · Chicano
          </p>
          <p>
            {site.name} is a tattoo artist based at {site.studio.name} in{" "}
            {site.location}, creating custom black and grey work through a
            careful, consultation-led process.
          </p>
        </header>

        <div className="about-grid">
          <figure className="about-grid__media">
            <Image
              src={placeholders.about}
              alt={`${site.name}, tattoo artist at ${site.studio.name} in ${site.location}`}
              fill
              sizes="(max-width: 859px) 100vw, 45vw"
            />
          </figure>
          <section className="about-copy" aria-labelledby="about-focus-heading">
            <h2 id="about-focus-heading">Focused on lasting custom work</h2>
            <p>
              {site.name} focuses on custom black and grey tattoos with clear
              composition, refined shading, and designs built to age well on the
              body.
            </p>
            <p>
              Each piece starts with your idea, then moves through careful
              sketching, placement planning, and a calm professional session at{" "}
              {site.studio.name}.
            </p>
            <p>
              Tobias builds every tattoo around the client&apos;s concept —
              refining composition, scale, and placement before any ink goes
              down.
            </p>
            <p>
              Based at {site.studio.streetAddress}, {site.studio.addressLocality}.
              For availability, use the{" "}
              <Link href="/booking">consultation form</Link> or email{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
            <p className="cta-row">
              <Link href="/booking" className="button-ghost button-ghost--dark">
                Request availability
              </Link>
              <Link href="/work" className="text-link">
                View portfolio
              </Link>
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
