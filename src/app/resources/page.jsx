import Hero from "@/components/common/Hero";
import resourcesContent from "@/content/pages/resources.json";
const { hero } = resourcesContent;

export const metadata = {
  title: "Resources | ElderlyEase",
  description:
    "Explore our collection of resources to learn more about home care services and how we can help you or your loved ones.",
};

export default function ResourcesPage() {
  return (
    <>
      <Hero
        title={{
          main: hero.title.main,
          sub: hero.title.sub,
        }}
        subtitle={hero.subtitle}
        image={hero.image}
        imageAlt={hero.imageAlt}
      />
    </>
  );
}
