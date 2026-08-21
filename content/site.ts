export const site = {
  name: "Tobias Meredith",
  shortName: "TOBIAS MEREDITH",
  tagline: "Tattoo Artist",
  headline: "Without the bullshit.",
  description:
    "Tobias Meredith is a tattoo artist in South Yarra, Melbourne, creating custom black and grey tattoos — realism, Chicano, and timeless work. Based at Victims of Ink, by appointment only.",
  url: "https://tobiasmeredith.com",
  locale: "en_AU",
  city: "Melbourne",
  suburb: "South Yarra",
  region: "Victoria",
  country: "Australia",
  location: "South Yarra, Melbourne",
  email: "tmeredith1988@gmail.com",
  phone: "",
  instagram: "https://www.instagram.com/tobiastattoo",
  ogImage: "/opengraph-image",
  bookingNote:
    "Share a few details about your idea and Tobias will reply to discuss design, sizing, placement, and availability.",
  openingHours: [
    { days: "Monday – Saturday", hours: "By appointment" },
    { days: "Sunday", hours: "By appointment" },
  ],
  studio: {
    name: "Victims of Ink",
    streetAddress: "515 Chapel Street",
    addressLocality: "South Yarra",
    addressRegion: "VIC",
    postalCode: "3141",
    addressCountry: "AU",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=515+Chapel+Street+South+Yarra+VIC+3141",
    website: "https://victimsofink.com.au",
  },
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/the-studio", label: "Studio" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/booking", label: "Contact" },
] as const;

export const footerInfo = [
  { href: "/about", label: "About" },
  { href: "/the-studio", label: "Studio" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/booking", label: "Contact" },
] as const;
