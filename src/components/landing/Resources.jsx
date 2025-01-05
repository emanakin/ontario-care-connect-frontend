"use client";

import { useRef } from "react";
import styles from "@/styles/components/landing/Resources.module.css";
import ArticleCard from "./ArticleCard";
import { motion } from "framer-motion";
import { articles } from "@/content/pages/home.json";

export default function Resources() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 280; // card width + gap
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.topRow}>
          <div>
            <h2>{articles.title}</h2>
            <p>{articles.description}</p>
          </div>
          <div className={styles.carouselControls}>
            <button
              className={styles.controlButton}
              onClick={() => scroll("left")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15.41 16.58L10.83 12l4.58-4.58L14 6l-6 6 6 6z"
                  fill="#fff"
                />
              </svg>
            </button>
            <button
              className={styles.controlButton}
              onClick={() => scroll("right")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.carouselWrapper}>
          <div ref={carouselRef} className={styles.carousel}>
            {articles.cards.map((article, idx) => (
              <ArticleCard key={idx} {...article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
