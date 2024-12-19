"use client";

import { useState } from "react";
import styles from "@/styles/components/common/DropDownCard.module.css";
import { motion, AnimatePresence } from "framer-motion";

export default function DropDownCard({ title, body }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`${styles.card} ${expanded ? styles.expanded : ""}`}
        onClick={() => setExpanded(!expanded)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <h4>{title}</h4>
        <motion.div
          className={styles.button}
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          whileHover={{
            backgroundColor: "#0F4C75",
            scale: 1.05,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <g clipPath="url(#clip0_1_187)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.8838 19.6339C15.6493 19.8683 15.3315 19.9999 15 19.9999C14.6685 19.9999 14.3507 19.8683 14.1163 19.6339L7.045 12.5627C6.92561 12.4474 6.83039 12.3094 6.76487 12.1569C6.69936 12.0044 6.66488 11.8404 6.66344 11.6744C6.662 11.5085 6.69362 11.3439 6.75647 11.1902C6.81933 11.0366 6.91214 10.8971 7.02951 10.7797C7.14687 10.6623 7.28644 10.5695 7.44006 10.5067C7.59368 10.4438 7.75828 10.4122 7.92425 10.4136C8.09023 10.4151 8.25425 10.4495 8.40676 10.5151C8.55926 10.5806 8.69719 10.6758 8.8125 10.7952L15 16.9827L21.1875 10.7952C21.4233 10.5675 21.739 10.4415 22.0668 10.4443C22.3945 10.4472 22.708 10.5787 22.9398 10.8104C23.1715 11.0422 23.303 11.3557 23.3058 11.6834C23.3087 12.0112 23.1827 12.3269 22.955 12.5627L15.8838 19.6339Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_187">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            className={styles.expandedCard}
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: {
                height: {
                  duration: 0.3,
                },
                opacity: {
                  duration: 0.2,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: {
                height: {
                  duration: 0.3,
                },
                opacity: {
                  duration: 0.2,
                },
              },
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {body}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
