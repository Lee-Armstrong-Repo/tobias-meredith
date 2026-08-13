import { site } from "../../content/site";
import { tattooStyles } from "../../content/styles";

export type JsonLdNode = Record<string, unknown>;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) {
    return path;
  }

  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function websiteNode(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "en-AU",
    publisher: { "@id": `${site.url}/#person` },
  };
}

export function personNode(): JsonLdNode {
  return {
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: site.name,
    jobTitle: "Tattoo Artist",
    description: site.description,
    url: site.url,
    email: site.email,
    image: absoluteUrl("/images/about-placeholder.svg"),
    sameAs: [site.instagram],
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: "AU",
    },
    knowsAbout: tattooStyles.map((style) => style.name),
  };
}

export function localBusinessNode(): JsonLdNode {
  return {
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email,
    image: absoluteUrl("/images/hero-placeholder.svg"),
    areaServed: {
      "@type": "City",
      name: site.city,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: "AU",
    },
    priceRange: "$$",
    currenciesAccepted: "AUD",
    openingHoursSpecification: site.openingHours.map((row) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: row.days.includes("Sunday")
        ? "Sunday"
        : [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
      description: row.hours,
    })),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "bookings",
      email: site.email,
      availableLanguage: ["English"],
      areaServed: "AU",
    },
    sameAs: [site.instagram],
    employee: { "@id": `${site.url}/#person` },
    founder: { "@id": `${site.url}/#person` },
  };
}

export function breadcrumbNode(
  items: Array<{ name: string; path: string }>,
): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
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
}: {
  path: string;
  name: string;
  description: string;
  type?: string;
}): JsonLdNode {
  return {
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#person` },
    inLanguage: "en-AU",
  };
}
