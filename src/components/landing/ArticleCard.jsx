"use client";

import Image from "next/image";
import styles from "@/styles/components/landing/Resources.module.css";
import { motion } from "framer-motion";

export default function ArticleCard({
  image,
  title,
  body,
  link,
  delay,
  isDragging,
}) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={!isDragging ? { y: -5 } : {}}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={"Article Cover"}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.textContent}>
        <h4>{title}</h4>
        <p>{body}</p>
        <motion.a
          href={link}
          className={styles.readMore}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Read More{" "}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <path
              d="M23.7355 13.111L9.58939 21.2779M22.1315 21.2221L24.4092 12.7221L15.9088 10.4445"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.a>
      </div>
    </motion.div>
  );
}
