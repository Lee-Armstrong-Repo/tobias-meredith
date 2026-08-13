import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "../../../content/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}, a Melbourne tattoo artist creating custom fine line, blackwork, and illustrative tattoos. Learn about his process and book in Melbourne.`,
  keywords: [
    "Tobias Meredith Melbourne",
    "about Tobias Meredith",
    "Melbourne tattoo artist bio",
    "fine line tattoo artist Melbourne",
    "blackwork tattoo artist Melbourne",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About ${site.name} | Melbourne Tattoo Artist`,
    description: `Meet ${site.name}, a Melbourne tattoo artist focused on custom fine line, blackwork, and illustrative work.`,
  },
};

export default function AboutPage() {
  return (
    <div className="page">
      <div className="page-intro">
        <h1>About {site.name}</h1>
        <p>
          {site.name} is a tattoo artist based in Melbourne, Australia, creating
          custom fine line, blackwork, and illustrative tattoos for clients
          across the city.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-grid__media">
          <Image
            src="/images/about-placeholder.svg"
            alt={`${site.name}, Melbourne tattoo artist portrait`}
            fill
            sizes="(max-width: 859px) 100vw, 45vw"
            unoptimized
          />
        </div>
        <div className="about-copy">
          <h2>Melbourne tattoo artist focused on lasting custom work</h2>
          <p>
            Tobias builds each piece around the client’s concept — refining
            composition, scale, and placement before any ink goes down.
          </p>
          <p>
            His Melbourne tattoo work leans toward fine line, blackwork, and
            illustrative tattoos, with an emphasis on pieces that sit cleanly on
            the body and age well.
          </p>
          <p>
            Based in {site.location}. For availability and bookings, use the{" "}
            <Link href="/booking">consultation form</Link> or email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
