/**
 * Portfolio pieces shown on /work.
 *
 * To add new work later:
 * 1. Drop the image into /public/work/ (e.g. public/work/snake-arm.jpg)
 * 2. Add an entry below with src: "/work/snake-arm.jpg"
 *
 * Prefer .jpg or .webp, roughly 1200–2000px on the long edge.
 */
export type WorkItem = {
  id: string;
  title: string;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
};

export const workItems: WorkItem[] = [
  {
    id: "01",
    title: "Botanical sleeve study",
    src: "/work/placeholder-01.svg",
    alt: "Placeholder for botanical sleeve tattoo by Tobias Meredith",
    category: "Illustrative",
    width: 1200,
    height: 1500,
  },
  {
    id: "02",
    title: "Fine line script",
    src: "/work/placeholder-02.svg",
    alt: "Placeholder for fine line script tattoo by Tobias Meredith",
    category: "Fine line",
    width: 1200,
    height: 1500,
  },
  {
    id: "03",
    title: "Blackwork motif",
    src: "/work/placeholder-03.svg",
    alt: "Placeholder for blackwork motif tattoo by Tobias Meredith",
    category: "Blackwork",
    width: 1200,
    height: 1500,
  },
  {
    id: "04",
    title: "Ornamental piece",
    src: "/work/placeholder-04.svg",
    alt: "Placeholder for ornamental tattoo by Tobias Meredith",
    category: "Ornamental",
    width: 1200,
    height: 1500,
  },
  {
    id: "05",
    title: "Animal study",
    src: "/work/placeholder-05.svg",
    alt: "Placeholder for animal study tattoo by Tobias Meredith",
    category: "Illustrative",
    width: 1200,
    height: 1500,
  },
  {
    id: "06",
    title: "Geometric composition",
    src: "/work/placeholder-06.svg",
    alt: "Placeholder for geometric tattoo by Tobias Meredith",
    category: "Geometric",
    width: 1200,
    height: 1500,
  },
];
