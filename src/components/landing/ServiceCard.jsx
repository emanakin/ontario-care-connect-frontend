"use client";

import styles from "@/styles/components/landing/TypeOfServices.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceCard({
  flipped,
  number,
  title,
  description,
  link,
  photo,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${styles.card} ${flipped ? styles.flipped : ""}`}
    >
      <div className={styles.textContent}>
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeOut",
          }}
          className={styles.number}
        >
          {number}
        </motion.h2>

        <div className={styles.titleRow}>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {title}
          </motion.h3>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href={link}
              className={styles.linkIcon}
              aria-label="Learn more"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  d="M28.9958 15.759L14.3046 28.8651M29.0915 25.7243L29.6954 15.1349L19.106 14.5311"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </Link>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className={styles.description}
        >
          {description}
        </motion.p>
      </div>

      <motion.div
        className={styles.image}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.03 }}
        transition={{
          duration: 0.5,
          scale: {
            type: "spring",
            damping: 15,
            stiffness: 300,
          },
        }}
      >
        <Image
          src={photo}
          alt={`${title} service`}
          width={600}
          height={400}
          quality={100}
          priority
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
