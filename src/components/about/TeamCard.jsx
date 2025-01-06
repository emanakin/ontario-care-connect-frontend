"use client";

import Image from "next/image";
import styles from "@/styles/components/about/TeamCard.module.css";

export default function TeamCard({
  name,
  title,
  image,
  imageAlt,
  isJobPosition,
  href,
}) {
  const handleClick = () => {
    if (href) {
      window.location.href = href;
      // Or you could use router.push(href) if you want to keep it within Next.js navigation
    }
  };

  if (isJobPosition) {
    return (
      <div className={styles.jobCard}>
        <h3>{name}</h3>
        <p>{title}</p>
        <button onClick={handleClick}>Apply Now</button>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <Image src={image} alt={imageAlt} fill style={{ objectFit: "cover" }} />
      <div className={styles.banner}>
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
}
