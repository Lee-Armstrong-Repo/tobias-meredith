import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { site } from "../../content/site";

export const metadata: Metadata = {
  title: {
    absolute: `${site.name} | Melbourne Tattoo Artist — Fine Line & Blackwork`,
  },
  description: site.description,
  keywords: [...site.keywords],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | Melbourne Tattoo Artist`,
    description: site.description,
    url: "/",
  },
};

export default function HomePage() {
  return (
    <section className="hero">
      <div className="hero__stage hero-motion__media">
        <div className="hero__media">
          <Image
            src="/images/hero-placeholder.svg"
            alt={`${site.name}, Melbourne tattoo artist — studio atmosphere`}
            fill
            priority
            sizes="100vw"
            unoptimized
          />
        </div>

        <div className="hero__copy">
          <p className="hero-kicker hero-motion hero-motion--1">{site.tagline}</p>
          <h1 className="brand-mark hero-motion hero-motion--2">{site.name}</h1>
          <p className="lede hero-motion hero-motion--3">
            Custom fine line, blackwork, and illustrative tattoos in Melbourne —
            from first idea to finished piece.
          </p>
          <div className="cta-row hero-motion hero-motion--4">
            <Link href="/booking" className="button">
              Book a consultation
            </Link>
            <Link href="/work" className="button-secondary button-secondary--on-media">
              View work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
