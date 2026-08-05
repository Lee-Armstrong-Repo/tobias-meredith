import { createClient } from "next-sanity";
import { hasSanityEnv, sanityEnv } from "../env";

export const sanityClient = hasSanityEnv
  ? createClient({
      projectId: sanityEnv.projectId,
      dataset: sanityEnv.dataset,
      apiVersion: sanityEnv.apiVersion,
      useCdn: sanityEnv.useCdn,
    })
  : null;
