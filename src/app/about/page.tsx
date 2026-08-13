import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../../components/JsonLd";
import { site } from "../../../content/site";
import {
  breadcrumbNode,
  personNode,
  webPageNode,
  websiteNode,
} from "../../lib/schema";

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
        data={[
          websiteNode(),
          personNode(),
          webPageNode({
            path: "/about",
            name: pageTitle,
            description: pageDescription,
            type: "AboutPage",
          }),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <article className="page" aria-labelledby="about-heading">
        <header className="page-intro">
          <h1 id="about-heading">About {site.name}</h1>
          <p>
            {site.name} is a tattoo artist based in Melbourne, creating custom
            fine line, blackwork, and illustrative work for clients across the
            city.
          </p>
        </header>

        <div className="about-grid">
          <figure className="about-grid__media">
            <Image
              src="/images/about-placeholder.svg"
              alt={`Portrait of ${site.name}`}
              fill
              sizes="(max-width: 859px) 100vw, 45vw"
              unoptimized
            />
          </figure>
          <section className="about-copy" aria-labelledby="about-focus-heading">
            <h2 id="about-focus-heading">
              Focused on lasting custom work
            </h2>
            <p>
              Tobias builds each piece around the client&apos;s concept —
              refining composition, scale, and placement before any ink goes
              down.
            </p>
            <p>
              The work leans toward fine line, blackwork, and illustrative
              tattoos, with an emphasis on pieces that sit cleanly on the body
              and age well.
            </p>
            <p>
              Based in {site.location}. For availability, use the{" "}
              <Link href="/booking">consultation form</Link> or email{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
