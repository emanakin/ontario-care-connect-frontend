"use client";

import { useState } from "react";
import styles from "@/styles/components/faq/FAQCard.module.css";
import Image from "next/image";

export default function FAQCard({ question, answer, image }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.card}>
      <button
        className={styles.questionButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={styles.question}>{question}</span>
        <svg
          className={`${styles.icon} ${isOpen ? styles.open : ""}`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </button>

      <div className={`${styles.answer} ${isOpen ? styles.show : ""}`}>
        <div className={styles.content}>
          {image && (
            <Image
              src={image}
              alt=""
              width={200}
              height={150}
              className={styles.image}
            />
          )}
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
