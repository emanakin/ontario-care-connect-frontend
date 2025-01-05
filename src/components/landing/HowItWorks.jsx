"use client";

import styles from "@/styles/components/landing/HowItWorks.module.css";
import HowItWorksCard from "./HowItWorksCard";
import { motion } from "framer-motion";

export default function HowItWorks({ data }) {
  if (!data?.steps?.length) {
    return null;
  }

  return (
    <section className={styles.container}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </motion.div>

        <div className={styles.cards}>
          {data.steps.map((step, index) => (
            <HowItWorksCard
              key={index}
              icon={step.icon}
              title={step.title}
              body={step.description}
              delay={0.2 * (index + 1)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
