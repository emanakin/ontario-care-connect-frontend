import Hero from "@/components/common/Hero";
import MissionContainer from "@/components/about/MissionContainer";
import StoryContainer from "@/components/about/StoryContainer";
import TeamContainer from "@/components/about/TeamContainer";
import FAQ from "@/components/common/FAQ";

import aboutContent from "@/content/pages/about-us.json";
const { hero, mission, story, team, faq } = aboutContent;

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
      <MissionContainer
        title={mission.title}
        description={mission.description}
        cards={mission.cards}
      />
      <StoryContainer
        title={story.title}
        description={story.description}
        cards={story.cards}
      />
      <TeamContainer
        title={team.title}
        description={team.description}
        cards={team.cards}
      />
      <FAQ data={faq} />
    </>
  );
}
