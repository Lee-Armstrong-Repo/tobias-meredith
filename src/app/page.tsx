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
          <p className="hero-kicker hero-motion hero-motion--1">
            Private tattoo practice / Melbourne
          </p>
          <div className="hero__layout">
            <div className="hero__primary">
              <h1 className="brand-mark hero-motion hero-motion--2">
                Permanent work
                <br />
                for people
                <br />
                who want
                <br />
                it to last.
              </h1>
            </div>

            <div className="hero__secondary hero-motion hero-motion--3">
              <p className="hero__status">
                <span className="hero__status-dot" aria-hidden="true" />
                Bookings currently open
              </p>
              <p className="lede">
                Tobias Meredith creates fine line, blackwork, and illustrative
                tattoos in Melbourne with a slower, considered process from
                concept through placement.
              </p>
              <div className="cta-row hero-motion hero-motion--4">
                <Link href="/booking" className="button">
                  Request a booking
                </Link>
                <Link
                  href="/work"
                  className="button-secondary button-secondary--on-media"
                >
                  View work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
