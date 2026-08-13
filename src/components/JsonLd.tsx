import { site } from "../../content/site";
import { tattooStyles } from "../../content/styles";
import { workItems } from "../../content/work";

export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#tattoo-artist`,
    name: site.name,
    jobTitle: "Tattoo Artist",
    description: site.description,
    url: site.url,
    email: site.email,
    image: `${site.url}/images/about-placeholder.svg`,
    sameAs: [site.instagram],
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: "AU",
    },
    knowsAbout: tattooStyles.map((style) => style.name),
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${site.url}/#tattoo-studio`,
    name: `${site.name} — Melbourne Tattoo Artist`,
    alternateName: ["Tobias Meredith Tattoo", "Tobias Meredith Tattoo Melbourne"],
    description: site.description,
    url: site.url,
    email: site.email,
    image: `${site.url}/images/hero-placeholder.svg`,
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
    serviceType: tattooStyles.map((style) => style.name),
    knowsAbout: site.keywords.slice(0, 12),
    sameAs: [site.instagram],
    employee: { "@id": `${site.url}/#tattoo-artist` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tattoo styles by Tobias Meredith",
      itemListElement: tattooStyles.map((style, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: style.title,
          description: style.description,
          provider: { "@id": `${site.url}/#tattoo-artist` },
          areaServed: site.city,
        },
      })),
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "en-AU",
    publisher: { "@id": `${site.url}/#tattoo-artist` },
  };

  const portfolio = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Tattoo portfolio by ${site.name}`,
    description: `Selected custom tattoos by Melbourne tattoo artist ${site.name}`,
    itemListElement: workItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${site.url}/work/${item.slug}`,
      name: item.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolio) }}
      />
    </>
  );
}
