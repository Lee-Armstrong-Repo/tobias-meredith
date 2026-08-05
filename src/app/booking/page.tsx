import type { Metadata } from "next";
import { BookingForm } from "../../components/BookingForm";
import { site } from "../../../content/site";

export const metadata: Metadata = {
  title: "Booking",
  description: `Book a tattoo consultation with ${site.name}. Share your idea, placement, and preferred style.`,
  alternates: { canonical: "/booking" },
};

export default function BookingPage() {
  return (
    <div className="page">
      <div className="page-intro">
        <h1>Booking</h1>
        <p>{site.bookingNote}</p>
      </div>

      <div className="booking-layout">
        <div className="about-copy">
          <h2>What to include</h2>
          <p>
            A short description of the idea, roughly where it should sit, and any
            size notes helps the first reply stay useful.
          </p>
          <p>
            Prefer email? Write to{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
        <BookingForm />
      </div>
    </div>
  );
}
