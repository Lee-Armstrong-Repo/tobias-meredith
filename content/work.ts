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
    slug: "mythology-realism-sleeve",
    title: "Mythology realism sleeve",
    src: "/work/tobias-meredith-mythology-realism-arm-sleeve-melbourne.jpg",
    alt: "Black and grey mythology realism arm sleeve tattoo by Tobias Meredith in Melbourne",
    category: "Realism",
    description:
      "A custom black and grey realism sleeve built around a mythological portrait, ornate armour detail, and flowing composition.",
    width: 1087,
    height: 1447,
  },
  {
    id: "02",
    slug: "botanical-animal-sleeves",
    title: "Botanical & animal sleeves",
    src: "/work/tobias-meredith-botanical-animal-sleeve-tattoos-melbourne.jpg",
    alt: "Matching botanical and animal black and grey sleeve tattoos by Tobias Meredith",
    category: "Realism",
    description:
      "Paired sleeves combining botanical foliage with realistic animal subjects — snake, owl, dragonfly, and floral detail.",
    width: 1254,
    height: 1254,
  },
  {
    id: "03",
    slug: "greek-god-forearm",
    title: "Greek god forearm",
    src: "/work/tobias-meredith-greek-god-forearm-tattoo-melbourne.jpg",
    alt: "Black and grey Greek god portrait forearm tattoo by Tobias Meredith in Melbourne",
    category: "Portrait",
    description:
      "A classical bearded portrait on the forearm with statue-like shading and lightning highlight detail.",
    width: 1200,
    height: 1600,
  },
  {
    id: "04",
    slug: "sailing-ship-calf",
    title: "Sailing ship calf",
    src: "/work/tobias-meredith-sailing-ship-calf-tattoo-melbourne.jpg",
    alt: "Realistic black and grey sailing ship calf tattoo by Tobias Meredith",
    category: "Nautical",
    description:
      "A detailed multi-mast sailing ship on the calf, with fine rigging and soft atmospheric shading.",
    width: 1200,
    height: 1600,
  },
  {
    id: "05",
    slug: "nautical-ship-turtle-sleeve",
    title: "Nautical ship & turtle sleeve",
    src: "/work/tobias-meredith-nautical-ship-turtle-sleeve-melbourne.jpg",
    alt: "Nautical black and grey sleeve with ship, lighthouse, and sea turtle by Tobias Meredith",
    category: "Nautical",
    description:
      "A full sleeve moving from stormy seas and lighthouse to an underwater turtle — one continuous nautical narrative.",
    width: 1200,
    height: 1600,
  },
  {
    id: "06",
    slug: "chicano-realism-sleeve",
    title: "Chicano realism sleeve",
    src: "/work/tobias-meredith-chicano-realism-sleeve-tattoo-melbourne.jpg",
    alt: "Chicano-style black and grey realism sleeve tattoo by Tobias Meredith in Melbourne",
    category: "Chicano",
    description:
      "High-contrast Chicano realism with portraiture, urban detail, and chain-link texture across the arm.",
    width: 1200,
    height: 1600,
  },
  {
    id: "07",
    slug: "black-grey-leg-sleeve",
    title: "Black & grey leg sleeve",
    src: "/work/tobias-meredith-black-grey-leg-sleeve-tattoo-melbourne.jpg",
    alt: "Full black and grey realism leg sleeve tattoo by Tobias Meredith in Melbourne",
    category: "Realism",
    description:
      "A large-scale leg piece connecting sacred heart, theatre mask, and portrait elements into one flowing composition.",
    width: 1200,
    height: 1600,
  },
  {
    id: "08",
    slug: "surreal-back-piece",
    title: "Surreal back piece",
    src: "/work/tobias-meredith-surreal-back-piece-tattoo-melbourne.jpg",
    alt: "Surreal black and grey back piece with eyes and skulls by Tobias Meredith",
    category: "Surreal",
    description:
      "A symmetrical upper-back composition with stacked eyes, spiked halo, and melting skull forms in fine stipple shading.",
    width: 1600,
    height: 1600,
  },
  {
    id: "09",
    slug: "portrait-faces-leg",
    title: "Portrait faces leg",
    src: "/work/tobias-meredith-portrait-faces-leg-tattoo-melbourne.jpg",
    alt: "Surreal overlapping portrait faces leg tattoo by Tobias Meredith in Melbourne",
    category: "Portrait",
    description:
      "Layered portrait faces on the lower leg with dramatic expression and smooth black and grey transitions.",
    width: 1200,
    height: 1600,
  },
  {
    id: "10",
    slug: "wolf-greek-temple-sleeve",
    title: "Wolf & Greek temple sleeve",
    src: "/work/tobias-meredith-wolf-greek-temple-sleeve-melbourne.jpg",
    alt: "Black and grey sleeve with wolf, Greek temple, and classical portrait by Tobias Meredith",
    category: "Realism",
    description:
      "A vertical sleeve stacking a white-eyed wolf, classical temple columns, and a statue-like portrait.",
    width: 1086,
    height: 1448,
  },
  {
    id: "11",
    slug: "praying-hands-forearm",
    title: "Praying hands forearm",
    src: "/work/tobias-meredith-praying-hands-forearm-tattoo-melbourne.jpg",
    alt: "Realistic praying hands forearm tattoo by Tobias Meredith in Melbourne",
    category: "Realism",
    description:
      "A classic praying hands piece with careful anatomical shading and soft stipple depth.",
    width: 1440,
    height: 1918,
  },
  {
    id: "12",
    slug: "poseidon-portrait-calf",
    title: "Poseidon portrait calf",
    src: "/work/tobias-meredith-poseidon-portrait-calf-tattoo-melbourne.jpg",
    alt: "Poseidon-style black and grey portrait calf tattoo by Tobias Meredith",
    category: "Portrait",
    description:
      "A mythological portrait framed in a gothic arch on the calf — deep contrast and fine beard detail.",
    width: 1600,
    height: 1600,
  },
];

export function getFallbackWorkBySlug(slug: string) {
  return workItems.find((item) => item.slug === slug) ?? null;
}
