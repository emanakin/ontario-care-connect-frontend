import servicesContent from "@/content/pages/services";
const { hero, serviceGrid, faq } = servicesContent;
import Hero from "@/components/common/Hero";
import ServiceGrid from "@/components/services/ServiceGrid";
import ServiceSchema from "@/components/services/ServiceSchema";
import { redirect } from "next/navigation";
import FAQ from "@/components/common/FAQ";

// Validate service type and generate metadata
export async function generateMetadata({ params }) {
  const { type } = await params;

  const validTypes = (serviceGrid?.typesOfService || []).map((t) =>
    t.toLowerCase().replace(/\s+/g, "-")
  );

  if (!validTypes.includes(type)) {
    redirect("/services/home-support");
  }

  const title = (serviceGrid?.typesOfService || []).find(
    (t) => t.toLowerCase().replace(/\s+/g, "-") === type
  );

  return {
    title: `${title} Services - Your Company Name`,
    description: serviceGrid.descriptions[title],
    openGraph: {
      title: `${title} Services - Your Company Name`,
      description: serviceGrid.descriptions[title],
      type: "website",
    },
  };
}

// Generate static paths
export async function generateStaticParams() {
  return serviceGrid.typesOfService.map((type) => ({
    type: type.toLowerCase().replace(" ", "-"),
  }));
}

export default async function ServicePage({ params }) {
  const { type } = await params;
  const serviceType = (serviceGrid?.typesOfService || []).find(
    (t) => t.toLowerCase().replace(/\s+/g, "-") === type
  );

  return (
    <>
      <Hero
        title={{
          main: hero?.title?.main || "",
          sub: hero?.title?.sub || "",
        }}
        subtitle={hero?.subtitle || ""}
        image={hero?.photo || ""}
        showSearch={false}
        imageAlt={hero?.photo?.alt || ""}
      />
      <ServiceGrid initialTab={type} data={serviceGrid} />
      <ServiceSchema
        type={serviceType}
        services={serviceGrid?.services?.[serviceType] || []}
        description={serviceGrid?.descriptions?.[serviceType] || ""}
      />
      <FAQ data={faq} />
    </>
  );
}
