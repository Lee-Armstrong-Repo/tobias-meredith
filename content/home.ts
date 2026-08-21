export const homeHero = {
  kicker: "Black & grey / Melbourne",
  headline: "Without the bullshit.",
  copy: "Custom black & grey tattoos.\nRealism, Chicano and timeless work.",
} as const;

export const homeMarqueeItems = [
  "Black & grey",
  "Realism",
  "Chicano",
  "Melbourne",
  "Custom work",
] as const;

export const homeProcess = {
  index: "01 / The process",
  heading: "Simple.\nStraight\nforward.",
  steps: [
    {
      number: "01",
      title: "Enquire",
      body: "Send through your idea, placement, and a few references. If it is a fit, we will get back to you with next steps.",
    },
    {
      number: "02",
      title: "Consult",
      body: "We talk through size, placement, and what the piece needs to last. No rush, no filler.",
    },
    {
      number: "03",
      title: "Design",
      body: "The drawing is built around you — composition, contrast, and how it will sit on the body.",
    },
    {
      number: "04",
      title: "Tattoo",
      body: "A focused session at Victims of Ink in South Yarra. Time is protected so the work can be done properly.",
    },
  ],
} as const;

export const homeAbout = {
  index: "02 / About Tobias",
  heading: "Focused on\nquality.\nNot quantity.",
  paragraphs: [
    "Everything is custom. No copy & paste. Every piece is built around the person wearing it.",
    "A limited number of bookings means every tattoo gets the time and detail it deserves.",
  ],
} as const;

export const homeStudio = {
  index: "03 / The studio",
  heading: "Victims of Ink.\nChapel Street.",
  copy: "515 Chapel Street, South Yarra.\nBy appointment only.",
} as const;

export const homeWork = {
  index: "04 / Selected work",
  heading: "Built to\nlast.",
  kicker: "Black & grey / Realism / Chicano",
} as const;

export const homeBooking = {
  index: "05 / Bookings",
  heading: "Let’s create\nsomething\nreal.",
  copy: "Spots are limited. Send through your idea and we’ll take it from there.",
} as const;
