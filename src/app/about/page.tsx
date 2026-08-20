import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../../components/JsonLd";
import { site } from "../../../content/site";
import { placeholders } from "../../../content/placeholders";
import { buildPageGraph, schemaIds } from "../../lib/schema";

const pageTitle = `About ${site.name}`;
const pageDescription = `${site.name} is a tattoo artist in Melbourne creating custom fine line, blackwork, and illustrative work.`;

export const metadata: Metadata = {
  title: "About",
  description: pageDescription,
  alternates: { canonical: "/about" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
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
            Fine line, blackwork &amp; illustrative tattooing
          </p>
          <p>
            {site.name} is a tattoo artist based in Melbourne, creating custom
            fine line, blackwork, and illustrative work through a careful,
            consultation-led process.
          </p>
        </header>

        <div className="about-grid">
          <figure className="about-grid__media">
            <Image
              src={placeholders.about}
              alt={`${site.name}, tattoo artist in Melbourne`}
              fill
              sizes="(max-width: 859px) 100vw, 45vw"
            />
          </figure>
          <section className="about-copy" aria-labelledby="about-focus-heading">
            <h2 id="about-focus-heading">Focused on lasting custom work</h2>
            <p>
              {site.name} focuses on custom work with clear composition, refined
              line, and designs built to age well on the body.
            </p>
            <p>
              Each piece starts with your idea, then moves through careful
              sketching, placement planning, and a calm professional session.
            </p>
            <p>
              Tobias builds every tattoo around the client&apos;s concept —
              refining composition, scale, and placement before any ink goes
              down.
            </p>
            <p>
              Based in {site.location}. For availability, use the{" "}
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
