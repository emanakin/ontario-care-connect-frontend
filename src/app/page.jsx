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

import HeroContainer from "@/components/landing/HeroContainer";
import FactCardDivider from "@/components/landing/FactCardDivider";
import HowItWorks from "@/components/landing/HowItWorks";
import TypeOfServices from "@/components/landing/TypeOfServices";
import Testamonials from "@/components/landing/Testamonials";
import ForCareGivers from "@/components/landing/ForCaregivers";
import ForCareReceivers from "@/components/landing/ForCareReceivers";
import FAQ from "@/components/landing/FAQ";
import Resources from "@/components/landing/Resources";

export default function LandingPage() {
  return (
    <>
      <HeroContainer />
      <FactCardDivider />
      <HowItWorks />
      <TypeOfServices />
      <Testamonials />
      <ForCareGivers />
      <ForCareReceivers />
      <FAQ />
      <Resources />
    </>
  );
}
