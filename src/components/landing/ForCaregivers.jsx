"use client";

import styles from "@/styles/components/landing/ForCareUsers.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ForCaregivers({ data }) {
  if (!data?.cards?.length) {
    return null;
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {data.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {data.description}
          </motion.p>
          <div className={styles.cards}>
            {data.cards.map((card, idx) => (
              <motion.div
                key={idx}
                className={styles.card}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={styles.icon}>
                  <Image
                    src={card.icon}
                    width={40}
                    height={40}
                    alt={card.title}
                  />
                </div>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/landing/for-care-givers.jpg"
            width={500}
            height={400}
            alt="Care giver photo"
            priority
          />
          <motion.div
            className={styles.blueBlock}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
