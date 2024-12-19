"use client";

import styles from "@/styles/components/landing/FAQ.module.css";
import ContactForm from "./ContactForm";
import DropDownCard from "@/components/common/DropDownCard";
import { motion } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      title: "How do I find the right caregiver?",
      body: "If you are going to use a passage of lorem ipsum...",
    },
    {
      title: "What qualifications do caregivers have?",
      body: "Lorem ipsum generators on the internet tend...",
    },
    {
      title: "How do I pay for services?",
      body: "There isn't anything embarrassing hidden in the text...",
    },
  ];

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
          View All FAQs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition,
        </motion.p>
        <div className={styles.row}>
          <motion.div
            className={styles.col}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {faqs.map((faq, idx) => (
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
