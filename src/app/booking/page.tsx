import Image from "next/image";
import type { Metadata } from "next";
import { BookingForm } from "../../components/BookingForm";
import { JsonLd } from "../../components/JsonLd";
import { placeholders } from "../../../content/placeholders";
import { site } from "../../../content/site";
import { buildPageGraph } from "../../lib/schema";

const pageTitle = `Book a consultation with ${site.name}`;
const pageDescription = `Request a tattoo consultation with ${site.name}. Share your idea, placement, and preferred style.`;

export const metadata: Metadata = {
  title: "Book a consultation",
  description: pageDescription,
  alternates: { canonical: "/booking" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/booking",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function BookingPage() {
  return (
    <>
      <JsonLd
        data={buildPageGraph(
          "/booking",
          {
            name: pageTitle,
            description: pageDescription,
            type: "ContactPage",
          },
          [
            { name: "Home", path: "/" },
            { name: "Contact", path: "/booking" },
          ],
          [],
          { includeService: true },
        )}
      />

      <div className="page page--booking">
        <header className="page-intro">
          <h1 id="booking-heading">Contact &amp; booking</h1>
          <p>{site.bookingNote}</p>
        </header>

        <div className="booking-layout">
          <figure className="booking-layout__media">
            <Image
              src={placeholders.booking}
              alt="Tattoo session in progress — close-up of machine and ink"
              fill
              sizes="(max-width: 859px) 100vw, 42vw"
            />
          </figure>

          <div className="booking-panel">
            <ul className="booking-notes">
              <li>Include your idea, placement, and rough size</li>
              <li>Mention any tattoo style preference if you have one</li>
              <li>
                Or email{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a> directly
              </li>
            </ul>

            <BookingForm />
          </div>
        </div>
      </div>
    </>
  );
}
