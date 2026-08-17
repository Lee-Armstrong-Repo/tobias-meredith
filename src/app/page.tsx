import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "../components/JsonLd";
import {
  homeAbout,
  homeBooking,
  homeHero,
  homeMarqueeItems,
  homeProcess,
  homeStudio,
  homeWork,
} from "../../content/home";
import { placeholders } from "../../content/placeholders";
import { site } from "../../content/site";
import { workItems } from "../../content/work";
import {
  absoluteUrl,
  buildPageGraph,
  itemListNode,
  schemaIds,
} from "../lib/schema";

const pageTitle = `${site.name} | Custom Tattoo Artist in Melbourne`;
const pageDescription = site.description;
const featuredWork = workItems.slice(0, 4);
const marqueeText = `${homeMarqueeItems.join(" — ")} — `;

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/opengraph-image"],
  },
};

function lines(text: string) {
  return text.split("\n").map((line, index) => (
    <span key={line}>
      {index > 0 ? <br /> : null}
      {line}
    </span>
  ));
}

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={buildPageGraph(
          "/",
          {
            name: pageTitle,
            description: pageDescription,
            mainEntityId: schemaIds.person,
            primaryImage: absoluteUrl("/opengraph-image"),
          },
          [{ name: "Home", path: "/" }],
          [
            itemListNode(
              `${site.url}/#featured-work`,
              "Selected work",
              featuredWork.map((item) => ({
                url: absoluteUrl(`/work/${item.slug}`),
                name: item.title,
              })),
            ),
          ],
          { includeService: true },
        )}
      />

      <article className="home" aria-labelledby="home-heading">
        <header id="home" className="home-hero">
          <div className="home-hero__media" aria-hidden="true">
            <Image
              src={placeholders.hero}
              alt=""
              fill
              priority
              sizes="100vw"
              unoptimized
            />
          </div>
          <div className="home-hero__overlay" aria-hidden="true" />
          <div className="home-hero__body">
            <h1 id="home-heading" className="home-hero__name">
              Tobias
              <br />
              Meredith
            </h1>
            <p className="home-kicker">{homeHero.kicker}</p>
            <p className="home-hero__headline">{lines(homeHero.headline)}</p>
            <p className="home-hero__copy">{lines(homeHero.copy)}</p>
            <p className="home-hero__actions">
              <Link href="/booking" className="button">
                Book a consult →
              </Link>
              <Link href="#selected-work" className="text-link">
                View work
              </Link>
            </p>
          </div>
          <p className="home-hero__scroll">
            <span>Scroll to explore</span>
            <span aria-hidden="true">↓</span>
          </p>
        </header>

        <div className="home-marquee" aria-hidden="true">
          <div className="home-marquee__track">
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
          </div>
        </div>

        <section
          id="process"
          className="home-section"
          aria-labelledby="process-heading"
        >
          <p className="home-kicker">{homeProcess.index}</p>
          <h2 id="process-heading" className="home-display">
            {lines(homeProcess.heading)}
          </h2>
          <ol className="process-list">
            {homeProcess.steps.map((step) => (
              <li key={step.number}>
                <details className="process-row">
                  <summary>
                    <span>
                      {step.number} {step.title}
                    </span>
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{step.body}</p>
                </details>
              </li>
            ))}
          </ol>
        </section>

        <section id="artist" aria-labelledby="artist-heading">
          <figure className="home-photo">
            <Image
              src={placeholders.about}
              alt={`Portrait of ${site.name}`}
              fill
              sizes="100vw"
              unoptimized
            />
          </figure>
          <div className="home-section">
            <p className="home-kicker">{homeAbout.index}</p>
            <h2 id="artist-heading" className="home-display">
              {lines(homeAbout.heading)}
            </h2>
            {homeAbout.paragraphs.map((paragraph) => (
              <p key={paragraph} className="home-copy">
                {paragraph}
              </p>
            ))}
            <p className="home-section__cta">
              <Link href="/about" className="text-link">
                More about Tobias →
              </Link>
            </p>
          </div>
        </section>

        <section
          id="studio"
          className="home-band home-band--cream"
          aria-labelledby="studio-heading"
        >
          <figure className="home-photo home-photo--studio">
            <Image
              src={placeholders.studio}
              alt={`Studio space for ${site.name}`}
              fill
              sizes="100vw"
              unoptimized
            />
          </figure>
          <div className="home-section">
            <p className="home-kicker">{homeStudio.index}</p>
            <h2 id="studio-heading" className="home-display">
              {lines(homeStudio.heading)}
            </h2>
            <p className="home-copy">{lines(homeStudio.copy)}</p>
            <p className="home-section__cta">
              <Link href="/the-studio" className="text-link">
                View the studio →
              </Link>
            </p>
          </div>
        </section>

        <section
          id="selected-work"
          className="home-section"
          aria-labelledby="work-heading"
        >
          <p className="home-kicker">{homeWork.index}</p>
          <h2 id="work-heading" className="home-display">
            {lines(homeWork.heading)}
          </h2>
          <p className="home-kicker home-kicker--muted">{homeWork.kicker}</p>
          <ul className="home-gallery">
            {featuredWork.map((item) => (
              <li key={item.id}>
                <Link href={`/work/${item.slug}`} className="home-gallery__link">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    unoptimized
                  />
                  <span className="sr-only">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="home-section__cta">
            <Link href="/work" className="text-link">
              View all work →
            </Link>
          </p>
        </section>

        <section id="contact" className="home-booking" aria-labelledby="contact-heading">
          <div className="home-booking__media" aria-hidden="true">
            <Image
              src={placeholders.booking}
              alt=""
              fill
              sizes="100vw"
              unoptimized
            />
          </div>
          <div className="home-booking__inner">
            <p className="home-kicker">{homeBooking.index}</p>
            <h2 id="contact-heading" className="home-display">
              {lines(homeBooking.heading)}
            </h2>
            <p className="home-copy">{homeBooking.copy}</p>
            <p className="home-section__cta">
              <Link href="/booking" className="button">
                Start your booking →
              </Link>
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
