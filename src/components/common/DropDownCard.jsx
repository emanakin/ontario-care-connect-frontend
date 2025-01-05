"use client";

import { useState } from "react";
import styles from "@/styles/components/common/DropDownCard.module.css";
import Image from "next/image";

export default function DropDownCard({ title, body }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.card} ${expanded ? styles.expanded : ""}`}
        onClick={() => setExpanded(!expanded)}
      >
        <h4>{title}</h4>
        <div className={`${styles.button} ${expanded ? styles.rotated : ""}`}>
          <Image
            src="/icons/contact/chevron.svg"
            alt="Chevron"
            width={30}
            height={30}
          />
        </div>
      </div>

      {expanded && (
        <div className={styles.expandedCard}>
          <p>{body}</p>
        </div>
      )}
    </div>
  );
}
