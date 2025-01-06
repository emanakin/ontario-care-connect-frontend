"use client";

import { useState } from "react";
import styles from "@/styles/components/resources/ArticleContainer.module.css";
import ArticleCard from "./ArticleCard";

export default function ArticleContainer({ title, subtitle, articles }) {
  const ITEMS_PER_PAGE = 6; // 2 rows of 3 cards
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleArticles = articles.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className={styles.grid}>
          {visibleArticles.map((article) => (
            <ArticleCard key={article.link} {...article} />
          ))}
        </div>

        <div className={styles.pagination}>
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className={styles.pageButton}
          >
            &lt;
          </button>

          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx + 1}
              onClick={() => setCurrentPage(idx + 1)}
              className={`${styles.pageButton} ${
                currentPage === idx + 1 ? styles.active : ""
              }`}
            >
              {idx + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className={styles.pageButton}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
