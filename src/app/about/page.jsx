import Hero from "@/components/common/Hero";
import { hero } from "@/content/pages/about-us.json";

export const metadata = {
  title: "About Us | ElderlyEase",
  description:
    "Learn about our mission to provide quality home care services and our commitment to improving lives in the Niagara region.",
};

export default function AboutPage() {
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
      {/* Additional About content will go here */}
    </>
  );
}
