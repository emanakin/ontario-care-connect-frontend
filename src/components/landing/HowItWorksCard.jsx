"use client";

import styles from "@/styles/components/landing/HowItWorks.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HowItWorksCard({ icon, title, body, delay }) {
  return (
    <motion.div
      className={styles.howItWorksCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay,
        duration: 0.5,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0px 15px 25px rgba(50, 130, 184, 0.1)",
      }}
    >
      <motion.div
        className={styles.icon}
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: delay + 0.2,
          duration: 0.4,
          type: "spring",
          stiffness: 200,
        }}
        whileHover={{
          scale: 1.1,
          backgroundColor: "rgba(50, 130, 184, 0.15)",
        }}
      >
        <Image src={icon} alt={title} width={42} height={42} />
      </motion.div>

      <div>
        <motion.h4
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3, duration: 0.4 }}
        >
          {title}
        </motion.h4>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.4, duration: 0.4 }}
        >
          {body}
        </motion.p>
      </div>
    </motion.div>
  );
}
