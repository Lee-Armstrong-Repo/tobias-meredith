import { site } from "../../content/site";
import { tattooStyles } from "../../content/styles";
import { workItems } from "../../content/work";

export function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        url: site.url,
        description: site.description,
        inLanguage: "en-AU",
        publisher: { "@id": `${site.url}/#tattoo-artist` },
        copyrightHolder: { "@id": `${site.url}/#tattoo-artist` },
      },
      {
        "@type": "WebPage",
        "@id": `${site.url}/#webpage`,
        url: site.url,
        name: `${site.name} | Melbourne Tattoo Artist`,
        description: site.description,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#tattoo-artist` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${site.url}/opengraph-image`,
        },
        inLanguage: "en-AU",
      },
      {
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
        worksFor: { "@id": `${site.url}/#tattoo-studio` },
      },
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": `${site.url}/#tattoo-studio`,
        name: `${site.name} — Melbourne Tattoo Artist`,
        alternateName: [
          "Tobias Meredith Tattoo",
          "Tobias Meredith Tattoo Melbourne",
        ],
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
        geo: {
          "@type": "GeoCoordinates",
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
          contactType: "customer service",
          email: site.email,
          availableLanguage: ["English"],
          areaServed: "AU",
        },
        serviceType: tattooStyles.map((style) => style.name),
        knowsAbout: site.keywords.slice(0, 12),
        sameAs: [site.instagram],
        employee: { "@id": `${site.url}/#tattoo-artist` },
        founder: { "@id": `${site.url}/#tattoo-artist` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Tattoo styles by ${site.name}`,
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
      },
      {
        "@type": "ItemList",
        "@id": `${site.url}/#portfolio`,
        name: `Tattoo portfolio by ${site.name}`,
        description: `Selected custom tattoos by Melbourne tattoo artist ${site.name}`,
        numberOfItems: workItems.length,
        itemListElement: workItems.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${site.url}/work/${item.slug}`,
          name: item.title,
          description: item.description,
          image: `${site.url}${item.src}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${site.url}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: site.url,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
