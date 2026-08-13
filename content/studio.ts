import { placeholders } from "./placeholders";

export const studioIntro =
  "A considered space where artistry meets comfort — designed for focus, hygiene, and creative expression.";

export const studioFeatures = [
  {
    title: "Professional standards",
    description:
      "Medical-grade hygiene, sterile setup, and careful aftercare guidance for every session.",
  },
  {
    title: "Private, focused sessions",
    description:
      "A calm environment designed for concentration, comfort, and clear communication.",
  },
  {
    title: "Custom-first process",
    description:
      "Consultation, design development, and placement planning before your appointment.",
  },
  {
    title: "Based in Melbourne",
    description:
      "A convenient Melbourne location for clients booking custom tattoo sessions.",
  },
] as const;

export const studioGallery = [
  {
    src: placeholders.studio,
    alt: "Studio interior placeholder",
  },
  {
    src: placeholders.studioDetail01,
    alt: "Studio detail placeholder",
  },
  {
    src: placeholders.studioDetail02,
    alt: "Studio workspace placeholder",
  },
] as const;

export const studioSession = {
  heading: "What a session looks like",
  paragraphs: [
    "Every appointment begins with a brief check-in on your design, placement, and any questions before the session starts.",
    "Sessions are paced for clarity and comfort — with time built in for breaks, adjustments, and aftercare instructions before you leave.",
    "If you are travelling to Melbourne or planning a larger piece, mention timing and placement in your consultation request so sessions can be scheduled accordingly.",
  ],
} as const;
