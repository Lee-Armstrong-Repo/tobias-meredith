import Image from "next/image";
import type { Metadata } from "next";
import { site } from "../../../content/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${site.name}, a tattoo artist focused on custom fine line, blackwork, and illustrative work.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="page">
      <div className="page-intro">
        <h1>About</h1>
        <p>
          Placeholder bio for {site.name}. Replace this copy with his story,
          influences, and studio details when ready.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-grid__media">
          <Image
            src="/images/about-placeholder.svg"
            alt={`Portrait placeholder for ${site.name}`}
            fill
            sizes="(max-width: 859px) 100vw, 45vw"
            unoptimized
          />
        </div>
        <div className="about-copy">
          <h2>Steady hands. Clear ideas.</h2>
          <p>
            Tobias builds each piece around the client’s concept — refining
            composition, scale, and placement before any ink goes down.
          </p>
          <p>
            His work leans toward fine line, blackwork, and illustrative tattoos,
            with an emphasis on pieces that sit cleanly on the body and age well.
          </p>
          <p>
            Based in {site.location}. For availability and bookings, use the
            consultation form or email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
