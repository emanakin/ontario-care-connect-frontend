import FAQ from "@/components/common/FAQ";
import Hero from "@/components/common/Hero";
import ContactSection from "@/components/contact/ContactSection";
import Map from "@/components/contact/Map";
import contactContent from "@/content/pages/contact-us.json";
const { hero, faq, contactSection } = contactContent;

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
      <ContactSection data={contactSection} />
      <Map />
      <FAQ data={faq} />
    </>
  );
}
