import Hero from "@/components/common/Hero";
import { hero } from "@/content/pages/contact-us.json";

export const metadata = {
  title: "Contact Us | ElderlyEase",
  description:
    "Get in touch with our team to learn more about our home care services or to schedule a consultation.",
};

export default function ContactPage() {
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
      {/* Additional Contact content will go here */}
    </>
  );
}
