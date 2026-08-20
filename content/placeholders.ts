export const placeholders = {
  hero: "/images/tobias-meredith-black-grey-realism-sleeve-hero.jpg",
  heroVideo: "/videos/tobias-meredith-tattoo-process-melbourne.mp4",
  about: "/images/tobias-meredith-tattoo-artist-melbourne-studio.jpg",
  studio: "/images/tobias-meredith-private-tattoo-studio-melbourne.jpg",
  studioDetail01: "/images/tobias-meredith-tattoo-studio-interior-melbourne.jpg",
  studioDetail02: "/images/tobias-meredith-nature-sleeve-tattoos-melbourne.jpg",
  booking: "/images/tobias-meredith-tattoo-process-closeup-melbourne.jpg",
  process: {
    consultation: "/images/tobias-meredith-tattoo-artist-melbourne-studio.jpg",
    design: "/images/tobias-meredith-tattoo-ink-process-melbourne.jpg",
    session: "/images/tobias-meredith-tattoo-process-closeup-melbourne.jpg",
  },
  processVideo: "/videos/tobias-meredith-tattoo-ink-detail-melbourne.mp4",
  blog: [
    "/images/tobias-meredith-tattoo-process-closeup-melbourne.jpg",
    "/images/tobias-meredith-black-grey-realism-sleeve-hero.jpg",
    "/images/tobias-meredith-nature-sleeve-tattoos-melbourne.jpg",
  ],
} as const;

export function blogPlaceholder(index: number) {
  return placeholders.blog[index % placeholders.blog.length];
}
