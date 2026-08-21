export type TattooStyle = {
  slug: string;
  name: string;
  description: string;
};

export const tattooStyles: TattooStyle[] = [
  {
    slug: "black-and-grey",
    name: "Black & grey",
    description:
      "High-contrast monochrome work with smooth gradients, deep blacks, and lasting readability.",
  },
  {
    slug: "realism",
    name: "Realism",
    description:
      "Detailed portrait and subject work built for depth, texture, and clean long-term aging.",
  },
  {
    slug: "chicano",
    name: "Chicano",
    description:
      "Classic Chicano-influenced imagery with strong contrast, lettering, and urban portraiture.",
  },
  {
    slug: "portrait",
    name: "Portrait",
    description:
      "Custom portrait tattoos focused on likeness, shading, and composition on the body.",
  },
  {
    slug: "large-scale",
    name: "Sleeves & large scale",
    description:
      "Full sleeves, legs, and larger compositions planned as cohesive, lasting pieces.",
  },
  {
    slug: "custom",
    name: "Custom design",
    description:
      "Fully custom concepts developed from consultation through sketch, stencil, and final ink.",
  },
];
