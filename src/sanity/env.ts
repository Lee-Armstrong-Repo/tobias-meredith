const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const sanityEnv = {
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-08-05",
  studioTitle: "Tobias Meredith Studio",
  useCdn: process.env.NODE_ENV === "production",
};

export const hasSanityEnv = Boolean(projectId && dataset);
