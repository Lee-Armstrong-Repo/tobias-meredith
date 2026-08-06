/**
 * Portfolio pieces shown on /work and /work/[slug].
 *
 * To add new work later:
 * 1. Drop the image into /public/work/ (e.g. public/work/snake-arm.jpg)
 * 2. Add an entry below with a unique slug and src: "/work/snake-arm.jpg"
 *
 * Prefer .jpg or .webp, roughly 1200–2000px on the long edge.
 */
export type WorkItem = {
  id: string;
  slug: string;
  title: string;
  src: string;
  alt: string;
  category: string;
  description: string;
  width: number;
  height: number;
};

export const workItems: WorkItem[] = [
  {
    id: "01",
    slug: "botanical-sleeve-study",
    title: "Botanical sleeve study",
    src: "/work/placeholder-01.svg",
    alt: "Botanical sleeve study tattoo by Tobias Meredith, Melbourne tattoo artist",
    category: "Illustrative",
    description:
      "An illustrative botanical sleeve study by Melbourne tattoo artist Tobias Meredith, focused on flow and placement along the arm.",
    width: 1200,
    height: 1500,
  },
  {
    id: "02",
    slug: "fine-line-script",
    title: "Fine line script",
    src: "/work/placeholder-02.svg",
    alt: "Fine line script tattoo by Tobias Meredith in Melbourne",
    category: "Fine line",
    description:
      "A fine line script piece by Tobias Meredith in Melbourne, designed for clean letterforms and long-term readability.",
    width: 1200,
    height: 1500,
  },
  {
    id: "03",
    slug: "blackwork-motif",
    title: "Blackwork motif",
    src: "/work/placeholder-03.svg",
    alt: "Blackwork motif tattoo by Tobias Meredith, Melbourne",
    category: "Blackwork",
    description:
      "A blackwork motif by Tobias Meredith, using strong contrast and solid shapes for a bold Melbourne tattoo look.",
    width: 1200,
    height: 1500,
  },
  {
    id: "04",
    slug: "ornamental-piece",
    title: "Ornamental piece",
    src: "/work/placeholder-04.svg",
    alt: "Ornamental tattoo by Tobias Meredith, Melbourne tattoo artist",
    category: "Ornamental",
    description:
      "An ornamental tattoo composition by Tobias Meredith, built around pattern, balance, and body placement.",
    width: 1200,
    height: 1500,
  },
  {
    id: "05",
    slug: "animal-study",
    title: "Animal study",
    src: "/work/placeholder-05.svg",
    alt: "Animal study tattoo by Tobias Meredith in Melbourne",
    category: "Illustrative",
    description:
      "An illustrative animal study tattoo by Tobias Meredith in Melbourne, with attention to form and character.",
    width: 1200,
    height: 1500,
  },
  {
    id: "06",
    slug: "geometric-composition",
    title: "Geometric composition",
    src: "/work/placeholder-06.svg",
    alt: "Geometric tattoo by Tobias Meredith, Melbourne",
    category: "Geometric",
    description:
      "A geometric composition by Tobias Meredith, combining clean structure with a considered Melbourne tattoo aesthetic.",
    width: 1200,
    height: 1500,
  },
];

export function getFallbackWorkBySlug(slug: string) {
  return workItems.find((item) => item.slug === slug) ?? null;
}
