import HeroContainer from "@/components/landing/HeroContainer";
import FactCardDivider from "@/components/landing/FactCardDivider";
import HowItWorks from "@/components/landing/HowItWorks";
import TypeOfServices from "@/components/landing/TypeOfServices";
import Testimonials from "@/components/landing/Testimonials";
import ForCareGivers from "@/components/landing/ForCaregivers";
import ForCareReceivers from "@/components/landing/ForCareReceivers";
import FAQ from "@/components/landing/FAQ";
import BlogContainer from "@/components/resources/BlogContainer";
import homeContent from "@/content/pages/home.json";

export const metadata = {
  title: "Home Care Services | ElderlyEase",
  description:
    "Empowering families in the Niagara region with tailored, reliable in-home care solutions.",
  openGraph: {
    title: "Home Care Services | ElderlyEase",
    description:
      "Empowering families in the Niagara region with tailored, reliable in-home care solutions.",
    type: "website",
    url: "https://www.elderlyease.ca",
  },
  // Additional fields like 'robots'
};

export default function LandingPage() {
  const {
    hero,
    howItWorks,
    services,
    testimonials,
    careGivers,
    careReceivers,
    faq,
    articles,
  } = homeContent;

  return (
    <>
      <HeroContainer data={hero} />
      <FactCardDivider />
      <HowItWorks data={howItWorks} />
      <TypeOfServices data={services} />
      <Testimonials data={testimonials} />
      <ForCareGivers data={careGivers} />
      <ForCareReceivers data={careReceivers} />
      <FAQ data={faq} />
      <BlogContainer data={articles} />
    </>
  );
}
