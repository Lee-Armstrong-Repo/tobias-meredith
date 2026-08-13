import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BookingForm } from "../components/BookingForm";
import { homeProcess, studioFeatures } from "../../content/home";
import { site } from "../../content/site";
import { tattooStyles } from "../../content/styles";
import { workItems } from "../../content/work";

export const metadata: Metadata = {
  title: {
    absolute: `${site.name} | Melbourne Tattoo Artist — Fine Line, Blackwork & Custom Tattoos`,
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
    <>
      <section
        id="tattoo-artist-hero"
        className="tattoo-artist-hero"
        aria-labelledby="tattoo-artist-hero-heading"
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
        <div className="tattoo-artist-hero__overlay" />
        <div className="tattoo-artist-hero__content">
          <p className="tattoo-artist-hero__eyebrow">
            {site.city} · Custom Tattoo Artist
          </p>
          <h1 id="tattoo-artist-hero-heading" className="tattoo-artist-hero__title">
            {site.name}
          </h1>
          <p className="tattoo-artist-hero__subtitle">{site.headline}</p>
          <p className="tattoo-artist-hero__intro">
            Fine line, blackwork, and illustrative tattoos crafted through a
            slower, custom process — from first conversation to final line.
          </p>
          <div className="tattoo-artist-hero__actions">
            <Link href="/booking" className="button">
              Book a consultation
            </Link>
            <Link href="/work" className="button-secondary button-secondary--on-dark">
              View tattoo portfolio
            </Link>
          </div>
        </div>
      </section>

      <section
        id="tattoo-process-melbourne"
        className="tattoo-process-melbourne"
        aria-labelledby="tattoo-process-heading"
      >
        <div className="section-shell">
          <header className="section-header">
            <p className="section-eyebrow">The process</p>
            <h2 id="tattoo-process-heading">
              Custom tattoos built around your story
            </h2>
            <p className="section-lede">
              The moment you begin a consultation with {site.name}, you will
              understand why this Melbourne tattoo practice is different.
            </p>
          </header>
          <ol className="tattoo-process-melbourne__list">
            {homeProcess.map((step, index) => (
              <li key={step.heading} className="tattoo-process-melbourne__item">
                <span className="tattoo-process-melbourne__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.heading}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="melbourne-tattoo-artist"
        className="melbourne-tattoo-artist"
        aria-labelledby="melbourne-tattoo-artist-heading"
      >
        <div className="section-shell melbourne-tattoo-artist__grid">
          <div className="melbourne-tattoo-artist__media">
            <Image
              src="/images/about-placeholder.svg"
              alt={`${site.name}, Melbourne tattoo artist creating custom tattoos`}
              fill
              sizes="(max-width: 859px) 100vw, 42vw"
              unoptimized
            />
          </div>
          <div className="melbourne-tattoo-artist__copy">
            <p className="section-eyebrow">Meet the artist</p>
            <h2 id="melbourne-tattoo-artist-heading">{site.name}</h2>
            <p className="melbourne-tattoo-artist__role">
              Specialising in fine line, blackwork &amp; illustrative tattooing
            </p>
            <p>
              {site.name} is a Melbourne tattoo artist focused on custom work
              with clear composition, refined line, and designs built to age
              well on the body.
            </p>
            <p>
              Each piece starts with your idea — then moves through careful
              sketching, placement planning, and a calm, professional tattoo
              session in Melbourne.
            </p>
            <div className="cta-row">
              <Link href="/about" className="button-secondary">
                About {site.name}
              </Link>
              <Link href="/booking" className="text-link">
                Request availability
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="tattoo-styles-melbourne"
        className="tattoo-styles-melbourne"
        aria-labelledby="tattoo-styles-heading"
      >
        <div className="section-shell">
          <header className="section-header">
            <p className="section-eyebrow">Tattoo styles</p>
            <h2 id="tattoo-styles-heading">
              Fine line to bold blackwork — matched to your vision
            </h2>
            <p className="section-lede">
              From simple lines to intricate custom designs, {site.name} works
              across styles to create tattoos that fit your idea and placement.
            </p>
          </header>
          <ul className="tattoo-styles-melbourne__grid">
            {tattooStyles.map((style) => (
              <li key={style.slug} className="tattoo-style-card">
                <article aria-labelledby={`style-${style.slug}`}>
                  <h3 id={`style-${style.slug}`}>{style.name}</h3>
                  <p>{style.description}</p>
                  <span className="sr-only">{style.title}</span>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="tattoo-studio-melbourne"
        className="tattoo-studio-melbourne"
        aria-labelledby="tattoo-studio-heading"
      >
        <div className="section-shell">
          <header className="section-header">
            <p className="section-eyebrow">The studio</p>
            <h2 id="tattoo-studio-heading">
              A calm Melbourne space for custom tattoo work
            </h2>
            <p className="section-lede">
              Step into a considered tattoo environment where artistry, hygiene,
              and comfort support every session with {site.name}.
            </p>
          </header>
          <div className="tattoo-studio-melbourne__feature-media">
            <Image
              src="/images/hero-placeholder.svg"
              alt={`Tattoo studio atmosphere for ${site.name} in Melbourne`}
              fill
              sizes="100vw"
              unoptimized
            />
          </div>
          <ul className="tattoo-studio-melbourne__features">
            {studioFeatures.map((feature) => (
              <li key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="tattoo-portfolio-melbourne"
        className="tattoo-portfolio-melbourne"
        aria-labelledby="tattoo-portfolio-heading"
      >
        <div className="section-shell">
          <header className="section-header section-header--split">
            <div>
              <p className="section-eyebrow">Portfolio</p>
              <h2 id="tattoo-portfolio-heading">
                Tattoo portfolio by {site.name}
              </h2>
              <p className="section-lede">
                A showcase of custom tattoo artistry by Melbourne tattoo artist{" "}
                {site.name}.
              </p>
            </div>
            <Link href="/work" className="button-secondary">
              View full portfolio
            </Link>
          </header>
          <ul className="tattoo-portfolio-melbourne__grid">
            {workItems.map((item) => (
              <li key={item.id}>
                <article className="tattoo-portfolio-card">
                  <Link
                    href={`/work/${item.slug}`}
                    className="tattoo-portfolio-card__link"
                    aria-label={`${item.title} — ${item.category} tattoo by ${site.name}`}
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
                        <span className="tattoo-portfolio-card__category">
                          {item.category}
                        </span>
                        <span className="tattoo-portfolio-card__title">
                          {item.title}
                        </span>
                      </figcaption>
                    </figure>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="tattoo-booking-melbourne"
        className="tattoo-booking-melbourne"
        aria-labelledby="tattoo-booking-heading"
      >
        <div className="section-shell tattoo-booking-melbourne__grid">
          <header className="section-header">
            <p className="section-eyebrow">Contact</p>
            <h2 id="tattoo-booking-heading">Book a Melbourne tattoo consultation</h2>
            <p className="section-lede">{site.bookingNote}</p>
            <p className="tattoo-booking-melbourne__email">
              Prefer email?{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </header>
          <BookingForm />
        </div>
      </section>
    </>
  );
}
