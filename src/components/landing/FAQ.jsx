"use client";

import styles from "@/styles/components/landing/FAQ.module.css";
import ContactForm from "./ContactForm";
import DropDownCard from "@/components/common/DropDownCard";
import { motion } from "framer-motion";
import { faq } from "@/content/pages/home.json";

export default function FAQ() {
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
          {faq.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {faq.description}
        </motion.p>
        <div className={styles.row}>
          <motion.div
            className={styles.col}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {faq.questions.map((faq, idx) => (
              <DropDownCard
                key={idx}
                title={faq.title}
                body={faq.body}
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
