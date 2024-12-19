"use client";

import { useRef, useState } from "react";
import styles from "@/styles/components/landing/Resources.module.css";
import ArticleCard from "./ArticleCard";
import { motion } from "framer-motion";

export default function Resources() {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const articles = [
    {
      image: "/article1.jpg",
      title: "Title here... Tittle here... Tittle here...",
      body: "uses a dictionary of over 200 latin words, combined with a handful of model...",
      link: "#",
    },
    {
      image: "/article2.png",
      title: "Title here... Tittle here... Tittle here...",
      body: "uses a dictionary of over 200 latin words, combined with a handful of model...",
      link: "#",
    },
    {
      image: "/article3.png",
      title: "Title here... Tittle here... Tittle here...",
      body: "uses a dictionary of over 200 latin words, combined with a handful of model...",
      link: "#",
    },
    {
      image: "/article4.jpg",
      title: "Title here... Tittle here... Tittle here...",
      body: "uses a dictionary of over 200 latin words, combined with a handful of model...",
      link: "#",
    },
    {
      image: "/article5.jpg",
      title: "New Article Title Here...",
      body: "Another interesting article description goes here with some engaging content...",
      link: "#",
    },
  ];

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
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.topRow}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2>Our Resource & Guide</h2>
            <p>
              BeHome nursing home care services encompass a range of
              compassionate care options, including in-home personal care
            </p>
          </motion.div>
          <motion.div
            className={styles.carouselControls}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className={styles.controlButton}
              whileHover={{ scale: 1.05, background: "#08415f" }}
              whileTap={{ scale: 0.95 }}
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
            </motion.div>
            <motion.div
              className={styles.controlButton}
              whileHover={{ scale: 1.05, background: "#08415f" }}
              whileTap={{ scale: 0.95 }}
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
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          ref={carouselRef}
          className={styles.carousel}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          dragElastic={0.2}
        >
          {articles.map((article, idx) => (
            <ArticleCard
              key={idx}
              {...article}
              delay={0.1 * idx}
              isDragging={isDragging}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
