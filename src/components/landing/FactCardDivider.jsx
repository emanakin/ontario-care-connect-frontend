"use client";

import styles from "@/styles/components/landing/FactCardDivider.module.css";
import { motion } from "framer-motion";

export default function FactCardDivider() {
  const facts = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M28.75 15L25.7 11.525L26.125 6.92499L21.6125 5.89999L19.25 1.92499L15 3.74999L10.75 1.92499L8.3875 5.89999L3.875 6.91249L4.3 11.5125L1.25 15L4.3 18.475L3.875 23.0875L8.3875 24.1125L10.75 28.0875L15 26.25L19.25 28.075L21.6125 24.1L26.125 23.075L25.7 18.475L28.75 15ZM12.5 21.25L7.5 16.25L9.2625 14.4875L12.5 17.7125L20.7375 9.47499L22.5 11.25L12.5 21.25Z"
            fill="white"
          />
        </svg>
      ),
      title: "Verified & Qualified Caregivers",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M17.5 12.5V27.5H5C4.33696 27.5 3.70107 27.2366 3.23223 26.7678C2.76339 26.2989 2.5 25.663 2.5 25V12.5H17.5Z"
            fill="white"
          />
          <path
            d="M27.5 12.5V25C27.5 25.663 27.2366 26.2989 26.7678 26.7678C26.2989 27.2366 25.663 27.5 25 27.5H20V12.5H27.5Z"
            fill="white"
          />
          <path
            d="M27.5 5V10H2.5V5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5H25C25.663 2.5 26.2989 2.76339 26.7678 3.23223C27.2366 3.70107 27.5 4.33696 27.5 5Z"
            fill="white"
          />
        </svg>
      ),
      title: "Customized Care Plans",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M2.5 23.75C2.5 25.875 4.125 27.5 6.25 27.5H23.75C25.875 27.5 27.5 25.875 27.5 23.75V13.75H2.5V23.75ZM23.75 5H21.25V3.75C21.25 3 20.75 2.5 20 2.5C19.25 2.5 18.75 3 18.75 3.75V5H11.25V3.75C11.25 3 10.75 2.5 10 2.5C9.25 2.5 8.75 3 8.75 3.75V5H6.25C4.125 5 2.5 6.625 2.5 8.75V11.25H27.5V8.75C27.5 6.625 25.875 5 23.75 5Z"
            fill="white"
          />
        </svg>
      ),
      title: "Easy Scheduling",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M24.275 4.78749L15.3 2.49999C15.2008 2.48194 15.0992 2.48194 15 2.49999C14.9171 2.48748 14.8329 2.48748 14.75 2.49999L5.72501 4.78749C5.15277 4.93034 4.64947 5.2709 4.30407 5.74898C3.95866 6.22705 3.79341 6.81185 3.83751 7.39999L4.36251 14.2875C4.57277 17.0197 5.52744 19.642 7.12289 21.8699C8.71833 24.0978 10.8936 25.8461 13.4125 26.925L14.5125 27.4C14.6511 27.4578 14.7998 27.4875 14.95 27.4875C15.1002 27.4875 15.2489 27.4578 15.3875 27.4L16.4875 26.925C19.0064 25.8461 21.1817 24.0978 22.7771 21.8699C24.3726 19.642 25.3272 17.0197 25.5375 14.2875L26.0625 7.39999C26.1118 6.82515 25.9607 6.25096 25.6349 5.7748C25.3091 5.29864 24.8287 4.94982 24.275 4.78749Z"
            fill="white"
          />
        </svg>
      ),
      title: "Secure & Reliable Platform",
    },
  ];

  return (
    <div className={styles.overlayWrapper}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        {facts.map((fact, index) => (
          <motion.div
            key={index}
            className={styles.fact}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1 * index,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className={styles.icon}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#0F4C75",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {fact.icon}
            </motion.div>
            <h4>{fact.title}</h4>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
