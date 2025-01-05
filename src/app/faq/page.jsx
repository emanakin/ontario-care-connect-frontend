import Hero from "@/components/common/Hero";
import { hero } from "@/content/pages/faq.json";

export const metadata = {
  title: "Frequently Asked Questions | ElderlyEase",
  description:
    "Find answers to common questions about our home care services and how we can help you or your loved ones.",
};

export default function FAQPage() {
  return (
    <>
      <Hero
        title={{
          main: "Frequently Asked",
          sub: "Questions",
        }}
        subtitle={hero.subtitle}
        image={hero.image}
        showSearch={true}
        imageAlt={hero.imageAlt}
      />
      {/* Additional FAQ content will go here */}
    </>
  );
}
