"use client";

import styles from "@/styles/components/landing/ContactForm.module.css";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Ask us what you want to know...
      </motion.h2>
      <motion.textarea
        className={styles.message}
        placeholder="Write Here..."
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileFocus={{
          scale: 1.01,
          boxShadow: "0 8px 30px rgba(50, 130, 184, 0.1)",
        }}
      />
      <motion.div
        className={styles.formRow}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.input
          type="email"
          className={styles.emailInput}
          placeholder="Enter your Email"
          whileFocus={{
            scale: 1.01,
            boxShadow: "0 8px 30px rgba(50, 130, 184, 0.1)",
          }}
        />
        <motion.button
          className={styles.sendButton}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Send
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
