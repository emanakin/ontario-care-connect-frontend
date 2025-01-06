import Hero from "@/components/common/Hero";
import FAQGrid from "@/components/faq/FAQGrid";
import ContactSection from "@/components/common/ContactSection";
import faqContent from "@/content/pages/faq.json";
const { hero, categories, contact } = faqContent;
import { redirect } from "next/navigation";

// Helper function to create URL-safe slugs
const createSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/&/g, "and") // Replace & with 'and'
    .replace(/[^a-z0-9]+/g, "-") // Replace any non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
};

// Generate metadata dynamically based on category
export async function generateMetadata({ params }) {
  const { category } = params;
  const currentCategory = categories.find(
    (cat) => createSlug(cat.title) === category
  );

  if (!currentCategory) {
    return {
      title: "FAQ | ElderlyEase",
      description:
        "Find answers to common questions about our home care services.",
    };
  }

  return {
    title: `${currentCategory.title} FAQ | ElderlyEase`,
    description: `Find answers to frequently asked questions about ${currentCategory.title.toLowerCase()} at ElderlyEase.`,
    openGraph: {
      title: `${currentCategory.title} FAQ | ElderlyEase`,
      description: `Find answers to frequently asked questions about ${currentCategory.title.toLowerCase()} at ElderlyEase.`,
    },
  };
}

// Generate static paths for all categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    category: createSlug(category.title),
  }));
}

export default function FAQPage({ params }) {
  const { category } = params;
  const validCategory = categories.find(
    (cat) => createSlug(cat.title) === category
  );

  // Redirect to first category if invalid category is provided
  if (!validCategory) {
    redirect(`/faq/${createSlug(categories[0].title)}`);
  }

  return (
    <>
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
        imageAlt={hero.imageAlt}
        showSearch={true}
      />
      <FAQGrid categories={categories} initialCategory={category} />
      <ContactSection data={contact} />
    </>
  );
}
