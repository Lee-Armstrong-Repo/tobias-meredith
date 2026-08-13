import { placeholders } from "./placeholders";

export const homeProcess = [
  {
    heading: "It starts with a conversation.",
    underline: "It",
    body: "Your ideas, your inspiration, your story.",
    align: "left" as const,
    image: placeholders.process.consultation,
    imageAlt: "Consultation placeholder",
  },
  {
    heading: "We believe in taking time to perfect every detail.",
    underline: "detail",
    body: "From the initial sketch to the final line, your vision guides us.",
    align: "right" as const,
    image: placeholders.process.design,
    imageAlt: "Design process placeholder",
  },
  {
    heading: "Custom work built with care for how it will age.",
    underline: "Custom",
    body: "Whether you're seeking delicate fine lines or bold blackwork, every piece is designed for clarity, balance, and longevity.",
    align: "left" as const,
    image: placeholders.process.session,
    imageAlt: "Tattoo session placeholder",
  },
] as const;

export const homeClosing = {
  lines: [
    "Every piece we create adds to a legacy of excellence.",
    "Every client becomes part of our story.",
  ],
} as const;

