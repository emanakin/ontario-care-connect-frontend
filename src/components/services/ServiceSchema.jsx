export default function ServiceSchema({ type, services, description }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${type} Services`,
    description: description,
    provider: {
      "@type": "Organization",
      name: "ElderlyEase",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${type} Services Catalog`,
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
        },
        position: index + 1,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
