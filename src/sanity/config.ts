import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { sanityEnv } from "./env";
import { schemaTypes } from "./schemaTypes";

export const sanityConfig = defineConfig({
  name: "default",
  title: sanityEnv.studioTitle,
  projectId: sanityEnv.projectId || "missing-project-id",
  dataset: sanityEnv.dataset || "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});

export { hasSanityEnv } from "./env";
