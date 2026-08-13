import type { Metadata } from "next";
import { BookingForm } from "../../components/BookingForm";
import { site } from "../../../content/site";

export const metadata: Metadata = {
  title: "Book a Tattoo Consultation",
  description: `Book a tattoo consultation with ${site.name} in Melbourne. Share your idea, placement, and preferred style for custom fine line or blackwork tattoos.`,
  keywords: [
    "book tattoo Melbourne",
    "tattoo consultation Melbourne",
    "Tobias Meredith booking",
    "custom tattoo Melbourne appointment",
    "Melbourne tattoo artist booking",
    "contact Tobias Meredith",
  ],
  alternates: { canonical: "/booking" },
  openGraph: {
    title: `Book a Consultation | ${site.name} Melbourne`,
    description: site.bookingNote,
    url: "/booking",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Book a Consultation | ${site.name} Melbourne`,
    description: site.bookingNote,
    images: ["/opengraph-image"],
  },
};

export default function BookingPage() {
  return (
    <div className="page page--booking">
      <div className="page-intro">
        <h1>Contact &amp; booking</h1>
        <p>{site.bookingNote}</p>
      </div>

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
  );
}
