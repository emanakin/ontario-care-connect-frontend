import Hero from "@/components/common/Hero";
import ArticleContainer from "@/components/resources/ArticleContainer";
import BlogContainer from "@/components/resources/BlogContainer";
import ContactSection from "@/components/common/ContactSection";
import resourceContent from "@/content/pages/resources.json";
const { hero, articles, blogs, contact } = resourceContent;

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
      <ArticleContainer
        title={articles.title}
        subtitle={articles.description}
        articles={articles.articleList}
      />
      <BlogContainer data={blogs} />
      <ContactSection data={contact} />
    </>
  );
}
