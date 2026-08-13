export const site = {
  name: "Tobias Meredith",
  shortName: "TOBIAS MEREDITH",
  tagline: "Tattoo Artist",
  headline: "Custom tattoos, considered process",
  description:
    "Tobias Meredith is a tattoo artist in Melbourne creating custom fine line, blackwork, and illustrative work through a careful consultation-led process.",
  url: "https://tobiasmeredith.com",
  locale: "en_AU",
  city: "Melbourne",
  region: "Victoria",
  country: "Australia",
  location: "Melbourne, Australia",
  email: "hello@tobiasmeredith.com",
  phone: "",
  instagram: "https://instagram.com/tobiasmeredith",
  ogImage: "/opengraph-image",
  bookingNote:
    "Share a few details about your idea and Tobias will reply to discuss design, sizing, placement, and availability.",
  openingHours: [
    { days: "Monday – Saturday", hours: "By appointment" },
    { days: "Sunday", hours: "By appointment" },
  ],
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/#studio", label: "Studio" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/booking", label: "Contact" },
] as const;

export const footerInfo = [
  { href: "/about", label: "About" },
  { href: "/#studio", label: "Studio" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/booking", label: "Contact" },
] as const;
