import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BookingForm } from "../components/BookingForm";
import { homeClosing, homeProcess, studioFeatures } from "../../content/home";
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
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.name} — Melbourne tattoo artist`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Melbourne Tattoo Artist`,
    description: site.description,
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
          <h1 id="tattoo-artist-hero-heading" className="tattoo-artist-hero__title">
            {site.shortName}
          </h1>
          <p className="tattoo-artist-hero__subtitle">{site.headline}</p>
          <p className="tattoo-artist-hero__intro">
            The moment you begin a consultation with {site.name}, you&apos;ll
            understand why this Melbourne tattoo practice is different.
          </p>
          <div className="tattoo-artist-hero__actions">
            <Link href="/work" className="button-ghost">
              View work
            </Link>
          </div>
        </div>
      </section>

      <section
        id="tattoo-process-melbourne"
        className="tattoo-process-melbourne"
        aria-label="Custom tattoo process"
      >
        <div className="section-shell">
          {homeProcess.map((step) => (
            <article
              key={step.heading}
              className={`story-block story-block--${step.align}`}
            >
              <h2 className="story-block__heading">
                {underlineHeading(step.heading, step.underline)}
              </h2>
              <p className="story-block__body">{step.body}</p>
            </article>
          ))}

          <div className="story-closing">
            {homeClosing.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </section>

      <section
        id="melbourne-tattoo-artist"
        className="melbourne-tattoo-artist"
        aria-labelledby="melbourne-tattoo-artist-heading"
      >
        <div className="section-shell">
          <header className="section-header section-header--center">
            <h2 id="melbourne-tattoo-artist-heading">The artist</h2>
            <div className="section-rule" aria-hidden="true" />
            <p className="section-lede">
              A Melbourne tattoo practice focused on custom fine line, blackwork,
              and illustrative work — designed with care for how it will live on
              the body.
            </p>
          </header>

          <article className="artist-feature">
            <div className="artist-feature__media">
              <Image
                src="/images/about-placeholder.svg"
                alt={`${site.name}, Melbourne tattoo artist creating custom tattoos`}
                fill
                sizes="(max-width: 859px) 100vw, 42vw"
                unoptimized
              />
            </div>
            <div className="artist-feature__copy">
              <h3>{site.name}</h3>
              <p className="artist-feature__role">
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
                <Link href="/about" className="button-ghost button-ghost--dark">
                  View profile
                </Link>
                <Link href="/booking" className="text-link">
                  Request availability
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section
        id="tattoo-styles-melbourne"
        className="tattoo-styles-melbourne"
        aria-labelledby="tattoo-styles-heading"
      >
        <div className="section-shell">
          <header className="section-header section-header--center">
            <h2 id="tattoo-styles-heading">Tattoo styles</h2>
            <div className="section-rule" aria-hidden="true" />
            <p className="section-lede">
              Simple lines to intricate designs — styles matched to your vision,
              placement, and how the tattoo will age.
            </p>
          </header>
          <ul className="tattoo-styles-melbourne__grid">
            {tattooStyles.map((style) => (
              <li key={style.slug} className="tattoo-style-card">
                <article aria-labelledby={`style-${style.slug}`}>
                  <h3 id={`style-${style.slug}`}>{style.name}</h3>
                  <p>{style.description}</p>
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
          <header className="section-header section-header--center">
            <h2 id="tattoo-studio-heading">Our studio</h2>
            <div className="section-rule" aria-hidden="true" />
            <p className="section-lede">
              Step into a considered Melbourne space where artistry meets comfort
              — designed for focus, hygiene, and creative expression.
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
          <div className="section-cta">
            <Link href="/booking" className="button-ghost button-ghost--dark">
              Book a consultation
            </Link>
          </div>
        </div>
      </section>

      <section
        id="tattoo-portfolio-melbourne"
        className="tattoo-portfolio-melbourne"
        aria-labelledby="tattoo-portfolio-heading"
      >
        <div className="section-shell">
          <header className="section-header section-header--center">
            <h2 id="tattoo-portfolio-heading">Our work</h2>
            <div className="section-rule" aria-hidden="true" />
            <p className="section-lede">
              A showcase of custom tattoo artistry by Melbourne tattoo artist{" "}
              {site.name}.
            </p>
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
          <div className="section-cta">
            <Link href="/work" className="button-ghost button-ghost--dark">
              View full gallery
            </Link>
          </div>
        </div>
      </section>

      <section
        id="tattoo-booking-melbourne"
        className="tattoo-booking-melbourne"
        aria-labelledby="tattoo-booking-heading"
      >
        <div className="section-shell tattoo-booking-melbourne__grid">
          <header className="section-header">
            <h2 id="tattoo-booking-heading">Contact us</h2>
            <div className="section-rule section-rule--left" aria-hidden="true" />
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
