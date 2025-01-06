"use client";

import Image from "next/image";
import styles from "@/styles/components/resources/BlogCard.module.css";
import Link from "next/link";

export default function BlogCard({ size = "small", data }) {
  const formattedDate = new Date(data.date)
    .toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-");

  return (
    <div className={`${styles.card} ${styles[size]}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={data.image}
          alt={data.imageAlt}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.content}>
        <span className={styles.date}>{formattedDate}</span>
        <h3 className={styles.title}>{data.title}</h3>
        {size === "large" && (
          <p className={styles.description}>{data.description}</p>
        )}
        <Link href={data.link} className={styles.readMore}>
          Read more
        </Link>
      </div>
    </div>
  );
}
