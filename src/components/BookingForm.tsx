"use client";

import { FormEvent, useState } from "react";
import { site } from "../../content/site";

type Status = "idle" | "sent";

export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const style = String(data.get("style") || "").trim();
    const placement = String(data.get("placement") || "").trim();
    const idea = String(data.get("idea") || "").trim();

    const subject = encodeURIComponent(`Tattoo booking enquiry — ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Style: ${style}`,
        `Placement: ${placement}`,
        "",
        "Idea:",
        idea,
      ].join("\n"),
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="booking-success" role="status">
        <p>
          Your email app should open with the enquiry ready to send. If it
          doesn’t, email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> directly.
        </p>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={onSubmit}>
      <label className="field">
        <span>Name</span>
        <input name="name" type="text" required autoComplete="name" />
      </label>
      <label className="field">
        <span>Email</span>
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label className="field">
        <span>Phone</span>
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      <label className="field">
        <span>Style interest</span>
        <select name="style" defaultValue="">
          <option value="" disabled>
            Select a style
          </option>
          <option>Fine line</option>
          <option>Blackwork</option>
          <option>Illustrative</option>
          <option>Ornamental</option>
          <option>Geometric</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label className="field field--full">
        <span>Placement</span>
        <input
          name="placement"
          type="text"
          placeholder="e.g. forearm, shoulder, ribcage"
        />
      </label>
      <label className="field field--full">
        <span>Your idea</span>
        <textarea
          name="idea"
          rows={5}
          required
          placeholder="Describe the concept, size, and any reference notes."
        />
      </label>
      <div className="booking-form__actions">
        <button type="submit" className="button">
          Send enquiry
        </button>
      </div>
    </form>
  );
}
