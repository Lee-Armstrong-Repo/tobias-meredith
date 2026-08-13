export const placeholders = {
  hero: "/images/hero-placeholder.svg",
  about: "/images/about-placeholder.svg",
  studio: "/images/studio-placeholder.svg",
  studioDetail01: "/images/studio-detail-01.svg",
  studioDetail02: "/images/studio-detail-02.svg",
  booking: "/images/booking-placeholder.svg",
  process: {
    consultation: "/images/process-consultation.svg",
    design: "/images/process-design.svg",
    session: "/images/process-session.svg",
  },
  blog: [
    "/blog/placeholder-01.svg",
    "/blog/placeholder-02.svg",
    "/blog/placeholder-03.svg",
  ],
} as const;

export function blogPlaceholder(index: number) {
  return placeholders.blog[index % placeholders.blog.length];
}
