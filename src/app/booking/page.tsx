import type { Metadata } from "next";
import { BookingForm } from "../../components/BookingForm";
import { site } from "../../../content/site";

export const metadata: Metadata = {
  title: "Booking",
  description: `Book a tattoo consultation with ${site.name} in Melbourne. Share your idea, placement, and preferred style for custom fine line or blackwork tattoos.`,
  keywords: [
    "book tattoo Melbourne",
    "tattoo consultation Melbourne",
    "Tobias Meredith booking",
    "custom tattoo Melbourne appointment",
    "Melbourne tattoo artist booking",
  ],
  alternates: { canonical: "/booking" },
  openGraph: {
    title: `Book a Consultation | ${site.name} Melbourne`,
    description: site.bookingNote,
  },
};

export default function BookingPage() {
  return (
    <div className="page page--booking">
      <div className="page-intro">
        <h1>Booking</h1>
        <p>{site.bookingNote}</p>
      </div>

      <div className="booking-panel">
        <ul className="booking-notes">
          <li>Include your idea, placement, and rough size</li>
          <li>Mention any style preference if you have one</li>
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
