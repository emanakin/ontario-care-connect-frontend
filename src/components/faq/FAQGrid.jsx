"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import FAQCard from "./FAQCard";
import styles from "@/styles/components/faq/FAQGrid.module.css";
import Image from "next/image";

// Helper function to create URL-safe slugs
const createSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/&/g, "and") // Replace & with 'and'
    .replace(/[^a-z0-9]+/g, "-") // Replace any non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
};

export default function FAQGrid({ categories, initialCategory }) {
  const router = useRouter();
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState(
    categories.find((cat) => createSlug(cat.title) === initialCategory)
      ?.title || categories[0].title
  );

  // Handle tab changes
  const handleCategoryChange = (category) => {
    const slug = createSlug(category);
    router.push(`/faq/${slug}`, { scroll: false });
    setActiveCategory(category);
  };

  // Update active category when URL changes
  useEffect(() => {
    const urlCategory = pathname.split("/").pop();
    const matchingCategory = categories.find(
      (cat) => createSlug(cat.title) === urlCategory
    );
    if (matchingCategory) {
      setActiveCategory(matchingCategory.title);
    }
  }, [pathname, categories]);

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {categories.map((category) => (
          <button
            key={category.title}
            className={`${styles.tab} ${
              activeCategory === category.title ? styles.active : ""
            }`}
            onClick={() => handleCategoryChange(category.title)}
          >
            <div className={styles.iconWrapper}>
              <Image
                src={category.icon}
                alt=""
                width={35}
                height={35}
                className={styles.icon}
              />
            </div>
            {category.title}
          </button>
        ))}
      </div>

      <div className={styles.questionsContainer}>
        <h2 className={styles.title}>Questions</h2>
        {categories
          .find((category) => category.title === activeCategory)
          ?.questions.map((faq, index) => (
            <FAQCard
              key={index}
              question={faq.question}
              answer={faq.answer}
              image={faq.image}
            />
          ))}
      </div>
    </div>
  );
}
