import { blogPlaceholder } from "./placeholders";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-prepare-for-your-tattoo-appointment",
    title: "How To Prepare For Your Tattoo Appointment",
    excerpt:
      "A simple guide clients can follow before the day: rest well, eat properly, hydrate, and arrive with a clear idea of the placement.",
    publishedAt: "2026-08-05",
    category: "Client Guide",
    readTime: "4 min read",
    image: blogPlaceholder(0),
    imageAlt: "Close-up of a tattoo session in progress",
    body: [
      "Preparing properly makes the appointment easier for both the client and the artist. Aim for a solid night's sleep, a proper meal beforehand, and plenty of water.",
      "Wear clothing that makes the area easy to access, and bring along any reference material that helps explain the idea clearly.",
      "If the design needs final refinements on the day, arriving calm and prepared gives more room for a thoughtful conversation before the stencil goes on.",
    ],
  },
  {
    slug: "choosing-the-right-tattoo-placement",
    title: "Choosing The Right Tattoo Placement",
    excerpt:
      "Placement affects visibility, flow, pain level, and how a design sits on the body. This post helps clients think through the trade-offs.",
    publishedAt: "2026-08-05",
    category: "Design",
    readTime: "5 min read",
    image: blogPlaceholder(1),
    imageAlt: "Black and grey realism sleeve tattoo by Tobias Meredith",
    body: [
      "Placement changes how a tattoo reads at rest and in motion. A design that works on the forearm may need to be rethought for the ribs or shoulder.",
      "Clients should think about visibility, day-to-day comfort, future expansion, and how the body shape supports the composition.",
      "The best placement usually comes from balancing the original idea with what will look strongest long term.",
    ],
  },
  {
    slug: "fine-line-vs-blackwork-what-to-consider",
    title: "Fine Line Vs Blackwork: What To Consider",
    excerpt:
      "An overview of two common approaches, with notes on look, contrast, longevity, and what suits different ideas best.",
    publishedAt: "2026-08-05",
    category: "Style",
    readTime: "6 min read",
    image: blogPlaceholder(2),
    imageAlt: "Nature-inspired black and grey sleeve tattoos",
    body: [
      "Fine line tattoos can feel delicate and subtle, while blackwork often delivers stronger contrast and a bolder visual impact.",
      "Each approach suits different subject matter, skin tones, placements, and long-term expectations for the piece.",
      "Discussing the idea early helps match the concept to the right style, rather than forcing one approach onto every design.",
    ],
  },
];

export function getFallbackBlogBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}
