import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BookingForm } from "../components/BookingForm";
import { JsonLd } from "../components/JsonLd";
import { homeClosing, homeProcess, studioFeatures } from "../../content/home";
import { site } from "../../content/site";
import { workItems } from "../../content/work";
import {
  absoluteUrl,
  breadcrumbNode,
  localBusinessNode,
  personNode,
  webPageNode,
  websiteNode,
} from "../lib/schema";

const pageTitle = `${site.name} | Custom Tattoo Artist in Melbourne`;
const pageDescription = site.description;

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

function underlineHeading(heading: string, underline: string) {
  const index = heading.indexOf(underline);
  if (index === -1) {
    return heading;
  }

  return (
    <>
      {heading.slice(0, index)}
      <span className="story-underline">{underline}</span>
      {heading.slice(index + underline.length)}
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          websiteNode(),
          personNode(),
          localBusinessNode(),
          webPageNode({
            path: "/",
            name: pageTitle,
            description: pageDescription,
          }),
          breadcrumbNode([{ name: "Home", path: "/" }]),
          {
            "@type": "ItemList",
            "@id": `${site.url}/#featured-work`,
            name: "Selected work",
            itemListOrder: "https://schema.org/ItemListOrderAscending",
            numberOfItems: workItems.length,
            itemListElement: workItems.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: absoluteUrl(`/work/${item.slug}`),
              name: item.title,
            })),
          },
        ]}
      />

      <article aria-labelledby="home-heading">
        <header
          id="home"
          className="tattoo-artist-hero"
          aria-labelledby="home-heading"
        >
          <div className="tattoo-artist-hero__media" aria-hidden="true">
            <Image
              src="/images/hero-placeholder.svg"
              alt=""
              fill
              priority
              sizes="100vw"
              unoptimized
            />
          </div>
          <div className="tattoo-artist-hero__overlay" aria-hidden="true" />
          <div className="tattoo-artist-hero__content">
            <h1 id="home-heading" className="tattoo-artist-hero__title">
              {site.shortName}
            </h1>
            <p className="tattoo-artist-hero__subtitle">{site.headline}</p>
            <p className="tattoo-artist-hero__intro">
              The moment you begin a consultation with {site.name}, you&apos;ll
              understand why the process feels different — custom fine line,
              blackwork, and illustrative tattoos shaped around your story.
            </p>
            <p className="tattoo-artist-hero__actions">
              <Link href="/work" className="button-ghost">
                View portfolio
              </Link>
            </p>
          </div>
        </header>

        <section
          id="process"
          className="tattoo-process-melbourne"
          aria-labelledby="process-heading"
        >
          <div className="section-shell">
            <header className="section-header section-header--center section-header--process">
              <h2 id="process-heading">The process</h2>
              <div className="section-rule" aria-hidden="true" />
              <p className="section-lede">
                Every piece begins with conversation, careful design, and a pace
                that protects the work over time.
              </p>
            </header>

            <ol className="story-list">
              {homeProcess.map((step) => (
                <li
                  key={step.heading}
                  className={`story-block story-block--${step.align}`}
                >
                  <h3 className="story-block__heading">
                    {underlineHeading(step.heading, step.underline)}
                  </h3>
                  <p className="story-block__body">{step.body}</p>
                </li>
              ))}
            </ol>

            <aside className="story-closing" aria-label="Closing note">
              {homeClosing.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </aside>
          </div>
        </section>

        <section
          id="artist"
          className="melbourne-tattoo-artist"
          aria-labelledby="artist-heading"
        >
          <div className="section-shell">
            <header className="section-header section-header--center">
              <h2 id="artist-heading">About {site.name}</h2>
              <div className="section-rule" aria-hidden="true" />
              <p className="section-lede">
                Custom fine line, blackwork, and illustrative work through a
                careful, consultation-led process.
              </p>
            </header>

            <article className="artist-feature" aria-labelledby="artist-name">
              <figure className="artist-feature__media">
                <Image
                  src="/images/about-placeholder.svg"
                  alt={`Portrait of ${site.name}`}
                  fill
                  sizes="(max-width: 859px) 100vw, 42vw"
                  unoptimized
                />
              </figure>
              <div className="artist-feature__copy">
                <h3 id="artist-name">{site.name}</h3>
                <p className="artist-feature__role">
                  Fine line, blackwork &amp; illustrative tattooing
                </p>
                <p>
                  {site.name} focuses on custom work with clear composition,
                  refined line, and designs built to age well on the body.
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
                <p className="cta-row">
                  <Link href="/about" className="button-ghost button-ghost--dark">
                    Read more
                  </Link>
                  <Link href="/booking" className="text-link">
                    Request availability
                  </Link>
                </p>
              </div>
            </article>
          </div>
        </section>

        <section
          id="studio"
          className="tattoo-studio-melbourne"
          aria-labelledby="studio-heading"
        >
          <div className="section-shell">
            <header className="section-header section-header--center">
              <h2 id="studio-heading">The studio</h2>
              <div className="section-rule" aria-hidden="true" />
              <p className="section-lede">
                A considered space where artistry meets comfort — designed for
                focus, hygiene, and creative expression.
              </p>
            </header>
            <figure className="tattoo-studio-melbourne__feature-media">
              <Image
                src="/images/hero-placeholder.svg"
                alt={`Studio space for ${site.name}`}
                fill
                sizes="100vw"
                unoptimized
              />
            </figure>
            <ul className="tattoo-studio-melbourne__features">
              {studioFeatures.map((feature) => (
                <li key={feature.title}>
                  <article aria-labelledby={`studio-${feature.title}`}>
                    <h3 id={`studio-${feature.title}`}>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </article>
                </li>
              ))}
            </ul>
            <p className="section-cta">
              <Link href="/booking" className="button-ghost button-ghost--dark">
                Book a consultation
              </Link>
            </p>
          </div>
        </section>

        <section
          id="selected-work"
          className="tattoo-portfolio-melbourne"
          aria-labelledby="work-heading"
        >
          <div className="section-shell">
            <header className="section-header section-header--center">
              <h2 id="work-heading">Selected work</h2>
              <div className="section-rule" aria-hidden="true" />
              <p className="section-lede">
                A selection of custom pieces spanning fine line, blackwork, and
                illustrative work.
              </p>
            </header>
            <ul className="tattoo-portfolio-melbourne__grid">
              {workItems.map((item) => (
                <li key={item.id}>
                  <article
                    className="tattoo-portfolio-card"
                    aria-labelledby={`work-${item.slug}`}
                  >
                    <Link
                      href={`/work/${item.slug}`}
                      className="tattoo-portfolio-card__link"
                    >
                      <figure>
                        <div className="tattoo-portfolio-card__media">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                            unoptimized
                          />
                        </div>
                        <figcaption>
                          <p className="tattoo-portfolio-card__category">
                            {item.category}
                          </p>
                          <h3
                            id={`work-${item.slug}`}
                            className="tattoo-portfolio-card__title"
                          >
                            {item.title}
                          </h3>
                        </figcaption>
                      </figure>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
            <p className="section-cta">
              <Link href="/work" className="button-ghost button-ghost--dark">
                View full gallery
              </Link>
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="tattoo-booking-melbourne"
          aria-labelledby="contact-heading"
        >
          <div className="section-shell tattoo-booking-melbourne__grid">
            <header className="section-header">
              <h2 id="contact-heading">Contact</h2>
              <div
                className="section-rule section-rule--left"
                aria-hidden="true"
              />
              <p className="section-lede">{site.bookingNote}</p>
              <p className="tattoo-booking-melbourne__email">
                Prefer email?{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </header>
            <BookingForm />
          </div>
        </section>
      </article>
    </>
  );
}
