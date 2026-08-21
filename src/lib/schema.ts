import { site } from "../../content/site";
import { placeholders } from "../../content/placeholders";
import { tattooStyles } from "../../content/styles";

export type JsonLdNode = Record<string, unknown>;

export const schemaIds = {
  website: `${site.url}/#website`,
  person: `${site.url}/#person`,
  service: `${site.url}/#service`,
} as const;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) {
    return path;
  }

  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function websiteNode(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": schemaIds.website,
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "en-AU",
    publisher: { "@id": schemaIds.person },
  };
}

export function personNode(): JsonLdNode {
  return {
    "@type": "Person",
    "@id": schemaIds.person,
    name: site.name,
    jobTitle: "Tattoo Artist",
    description: site.description,
    url: absoluteUrl("/about"),
    email: site.email,
    image: absoluteUrl(placeholders.about),
    sameAs: [site.instagram],
    worksFor: {
      "@type": "LocalBusiness",
      name: site.studio.name,
      url: site.studio.website,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.studio.streetAddress,
        addressLocality: site.studio.addressLocality,
        addressRegion: site.studio.addressRegion,
        postalCode: site.studio.postalCode,
        addressCountry: site.studio.addressCountry,
      },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.studio.streetAddress,
      addressLocality: site.studio.addressLocality,
      addressRegion: site.studio.addressRegion,
      postalCode: site.studio.postalCode,
      addressCountry: site.studio.addressCountry,
    },
    knowsAbout: tattooStyles.map((style) => style.name),
  };
}

export function professionalServiceNode(): JsonLdNode {
  return {
    "@type": "ProfessionalService",
    "@id": schemaIds.service,
    name: `${site.name} at ${site.studio.name}`,
    description: site.description,
    url: absoluteUrl("/the-studio"),
    email: site.email,
    image: absoluteUrl(placeholders.about),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.studio.streetAddress,
      addressLocality: site.studio.addressLocality,
      addressRegion: site.studio.addressRegion,
      postalCode: site.studio.postalCode,
      addressCountry: site.studio.addressCountry,
    },
    areaServed: [
      {
        "@type": "City",
        name: site.city,
      },
      {
        "@type": "Place",
        name: site.studio.addressLocality,
      },
    ],
    provider: { "@id": schemaIds.person },
    founder: { "@id": schemaIds.person },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: site.email,
      availableLanguage: ["English"],
      areaServed: ["Melbourne", "South Yarra"],
    },
    sameAs: [site.instagram, site.studio.website],
  };
}

export function breadcrumbNode(
  pagePath: string,
  items: Array<{ name: string; path: string }>,
): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(pagePath)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function webPageNode({
  path,
  name,
  description,
  type = "WebPage",
  mainEntityId,
  primaryImage,
}: {
  path: string;
  name: string;
  description: string;
  type?: string;
  mainEntityId?: string;
  primaryImage?: string;
}): JsonLdNode {
  const node: JsonLdNode = {
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": schemaIds.website },
    inLanguage: "en-AU",
    breadcrumb: { "@id": `${absoluteUrl(path)}#breadcrumb` },
  };

  if (mainEntityId) {
    node.mainEntity = { "@id": mainEntityId };
  }

  if (primaryImage) {
    node.primaryImageOfPage = {
      "@type": "ImageObject",
      url: primaryImage,
    };
  }

  return node;
}

type PageGraphOptions = {
  includeService?: boolean;
};

export function buildPageGraph(
  path: string,
  page: {
    name: string;
    description: string;
    type?: string;
    mainEntityId?: string;
    primaryImage?: string;
  },
  breadcrumbs: Array<{ name: string; path: string }>,
  extra: JsonLdNode[] = [],
  options?: PageGraphOptions,
): JsonLdNode[] {
  const graph: JsonLdNode[] = [
    websiteNode(),
    personNode(),
    webPageNode({ path, ...page }),
    breadcrumbNode(path, breadcrumbs),
  ];

  if (options?.includeService) {
    graph.splice(2, 0, professionalServiceNode());
  }

  return [...graph, ...extra];
}

export function itemListNode(
  id: string,
  name: string,
  items: Array<{ url: string; name: string }>,
): JsonLdNode {
  return {
    "@type": "ItemList",
    "@id": id,
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: item.url,
      name: item.name,
    })),
  };
}

export function portfolioArtworkNode(item: {
  slug: string;
  title: string;
  description: string;
  src: string;
  category: string;
}) {
  const artworkId = absoluteUrl(`/work/${item.slug}#artwork`);

  return {
    id: artworkId,
    node: {
      "@type": "VisualArtwork",
      "@id": artworkId,
      name: item.title,
      description: item.description,
      image: absoluteUrl(item.src),
      artform: "Tattoo",
      artMedium: item.category,
      creator: { "@id": schemaIds.person },
      url: absoluteUrl(`/work/${item.slug}`),
    } satisfies JsonLdNode,
  };
}

export function blogPostingNode(post: {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
}) {
  const articleId = absoluteUrl(`/blog/${post.slug}#article`);
  const webpageId = `${absoluteUrl(`/blog/${post.slug}`)}#webpage`;

  return {
    id: articleId,
    node: {
      "@type": "BlogPosting",
      "@id": articleId,
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      author: { "@id": schemaIds.person },
      publisher: { "@id": schemaIds.person },
      mainEntityOfPage: { "@id": webpageId },
      articleSection: post.category,
      inLanguage: "en-AU",
    } satisfies JsonLdNode,
  };
}

/** @deprecated Use professionalServiceNode */
export const localBusinessNode = professionalServiceNode;
