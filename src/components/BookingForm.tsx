"use client";

import { FormEvent, useState } from "react";
import { site } from "../../content/site";

type Status = "idle" | "submitting" | "sent" | "error";

export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") || "").trim(),
          email: String(data.get("email") || "").trim(),
          phone: String(data.get("phone") || "").trim(),
          style: String(data.get("style") || "").trim(),
          placement: String(data.get("placement") || "").trim(),
          idea: String(data.get("idea") || "").trim(),
          website: String(data.get("website") || "").trim(),
        }),
      });

      const payload = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        throw new Error(
          payload?.error || "Could not send your enquiry. Please try again.",
        );
      }

      setStatus("sent");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Could not send your enquiry. Please try again.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="booking-success" role="status" aria-live="polite">
        <p>
          Thanks — your enquiry is on its way. Tobias will get back to you at
          the email you provided.
        </p>
        <p>
          Need to add anything? Email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> directly.
        </p>
        <p>
          <button
            type="button"
            className="text-link"
            onClick={() => setStatus("idle")}
          >
            Send another enquiry
          </button>
        </p>
      </div>
    );
  }

  return (
    <form
      className="booking-form"
      onSubmit={onSubmit}
      name="tattoo-consultation"
    >
      <fieldset className="booking-form__fieldset" disabled={status === "submitting"}>
        <legend className="sr-only">Consultation enquiry</legend>

        <label className="field field--honeypot" aria-hidden="true">
          <span>Website</span>
          <input
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>

        <label className="field">
          <span>Name *</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-required="true"
          />
        </label>
        <label className="field">
          <span>Email *</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-required="true"
          />
        </label>
        <label className="field">
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label className="field">
          <span>Tattoo style</span>
          <select name="style" defaultValue="">
            <option value="" disabled>
              Select a style
            </option>
            <option>Black & grey</option>
            <option>Realism</option>
            <option>Chicano</option>
            <option>Portrait</option>
            <option>Sleeve / large scale</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label className="field field--full">
          <span>Placement</span>
          <input
            name="placement"
            type="text"
            placeholder="e.g. forearm, shoulder, ribcage"
            autoComplete="off"
          />
        </label>
        <label className="field field--full">
          <span>Your tattoo idea *</span>
          <textarea
            name="idea"
            rows={5}
            required
            aria-required="true"
            placeholder="Describe the concept, size, references, and timing."
          />
        </label>
      </fieldset>

      {status === "error" ? (
        <p className="booking-form__error" role="alert">
          {errorMessage} Or email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> directly.
        </p>
      ) : null}

      <div className="booking-form__actions">
        <button
          type="submit"
          className="button-ghost button-ghost--dark"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
        <p className="booking-form__required-note">
          Fields marked with * are required.
        </p>
      </div>
    </form>
  );
}
