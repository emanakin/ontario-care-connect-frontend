import HeroContainer from "@/components/landing/HeroContainer";
import FactCardDivider from "@/components/landing/FactCardDivider";
import HowItWorks from "@/components/landing/HowItWorks";
import TypeOfServices from "@/components/landing/TypeOfServices";
import Testamonials from "@/components/landing/Testamonials";
import ForCareGivers from "@/components/landing/ForCaregivers";
import ForCareReceivers from "@/components/landing/ForCareReceivers";
import FAQ from "@/components/landing/FAQ";
import Resources from "@/components/landing/Resources";

export default function Home() {
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
