import { site } from "../../content/site";

export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
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
    knowsAbout: [
      "Fine line tattoo",
      "Blackwork tattoo",
      "Illustrative tattoo",
      "Custom tattoo design",
      "Melbourne tattoos",
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${site.name} — Melbourne Tattoo Artist`,
    alternateName: "Tobias Meredith Tattoo",
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
    serviceType: [
      "Custom tattoo design",
      "Fine line tattoos",
      "Blackwork tattoos",
      "Illustrative tattoos",
      "Tattoo consultation",
    ],
    sameAs: [site.instagram],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "en-AU",
    publisher: {
      "@type": "Person",
      name: site.name,
    },
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
    </>
  );
}
