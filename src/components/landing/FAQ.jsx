"use client";

import styles from "@/styles/components/landing/FAQ.module.css";
import ContactForm from "@/components/contact/ContactForm";
import DropDownCard from "@/components/common/DropDownCard";
import { motion } from "framer-motion";

export default function FAQ({ data }) {
  if (!data?.questions?.length) {
    return null;
  }

  return (
    <section className={styles.container}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {data.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {data.description}
        </motion.p>
        <div className={styles.row}>
          <motion.div
            className={styles.col}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {data.questions.map((question, idx) => (
              <DropDownCard
                key={idx}
                title={question.title}
                body={question.body}
                delay={0.4 + idx * 0.1}
              />
            ))}
          </motion.div>
          <motion.div
            className={styles.col}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
