export const site = {
  name: "Tobias Meredith",
  shortName: "TOBIAS MEREDITH",
  tagline: "Melbourne Tattoo Artist",
  headline: "Melbourne's Considered Custom Tattoo Practice",
  description:
    "Tobias Meredith is a Melbourne tattoo artist specialising in custom fine line, blackwork, illustrative, ornamental, and geometric tattoos. View his portfolio and book a tattoo consultation in Melbourne, Australia.",
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
    "Book a tattoo consultation with Tobias Meredith in Melbourne. Share a few details about your idea and he will reply to discuss design, sizing, placement, and availability.",
  openingHours: [
    { days: "Monday – Saturday", hours: "By appointment" },
    { days: "Sunday", hours: "By appointment" },
  ],
  keywords: [
    "Tobias Meredith",
    "Melbourne tattoo artist",
    "tattoo artist Melbourne",
    "Melbourne tattoos",
    "custom tattoos Melbourne",
    "fine line tattoo Melbourne",
    "blackwork tattoo Melbourne",
    "illustrative tattoo Melbourne",
    "ornamental tattoo Melbourne",
    "geometric tattoo Melbourne",
    "botanical tattoo Melbourne",
    "tattoo consultation Melbourne",
    "book tattoo Melbourne",
    "best tattoo artist Melbourne",
    "custom tattoo design Melbourne",
    "tattoo studio Melbourne",
    "private tattoo artist Melbourne",
  ],
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/#melbourne-tattoo-artist", label: "Artist" },
  { href: "/#tattoo-styles-melbourne", label: "Styles" },
  { href: "/#tattoo-studio-melbourne", label: "Studio" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/booking", label: "Contact" },
] as const;

export const footerStyles = [
  { href: "/#tattoo-styles-melbourne", label: "Fine Line" },
  { href: "/#tattoo-styles-melbourne", label: "Blackwork" },
  { href: "/#tattoo-styles-melbourne", label: "Illustrative" },
  { href: "/#tattoo-styles-melbourne", label: "Ornamental" },
  { href: "/#tattoo-styles-melbourne", label: "Geometric" },
  { href: "/#tattoo-styles-melbourne", label: "Botanical" },
  { href: "/#tattoo-styles-melbourne", label: "Script" },
  { href: "/#tattoo-styles-melbourne", label: "Custom" },
] as const;

export const footerInfo = [
  { href: "/about", label: "About" },
  { href: "/#melbourne-tattoo-artist", label: "The Artist" },
  { href: "/#tattoo-styles-melbourne", label: "Tattoo Styles" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/booking", label: "Contact" },
] as const;
