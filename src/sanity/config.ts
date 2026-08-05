import { deskTool } from "sanity/desk";
import { hasSanityEnv, sanityEnv } from "./env";
import { schemaTypes } from "./schemaTypes";

export const sanityConfig = {
  name: "default",
  title: sanityEnv.studioTitle,
  projectId: sanityEnv.projectId || "missing-project-id",
  dataset: sanityEnv.dataset || "production",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
};

export { hasSanityEnv };
