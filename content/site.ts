export const site = {
  name: "Tobias Meredith",
  tagline: "Tattoo artist",
  description:
    "Tobias Meredith is a tattoo artist creating custom blackwork, fine line, and illustrative tattoos. View work and book a consultation.",
  url: "https://tobiasmeredith.com",
  locale: "en_AU",
  location: "Australia",
  email: "hello@tobiasmeredith.com",
  instagram: "https://instagram.com/tobiasmeredith",
  bookingNote:
    "Share a few details about your idea. Tobias will reply to discuss design, sizing, and availability.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/booking", label: "Booking" },
] as const;
