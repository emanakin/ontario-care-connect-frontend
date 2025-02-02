"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/components/landing/Testimonials.module.css";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialSlider({ data }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  if (!data?.items?.length) {
    return null;
  }

  const nextTestimonial = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % data.items.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + data.items.length) % data.items.length);
  };

  const current = data.items[index];

  // Create an array of stars based on rating
  const stars = Array.from({ length: current.rating }, (_, i) => (
    <motion.svg
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2 + i * 0.05, duration: 0.3, ease: "easeOut" }}
      key={i}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
    >
      <path
        d="M12 19.164L6.84599 21.462C6.65352 21.5479 6.44183 21.5816 6.23222 21.5597C6.0226 21.5377 5.82246 21.461 5.65191 21.3372C5.48137 21.2133 5.34645 21.0468 5.26073 20.8542C5.175 20.6617 5.1415 20.45 5.16359 20.2404L5.75639 14.628L1.97999 10.4376C1.83912 10.2811 1.74193 10.0902 1.69817 9.88426C1.6544 9.67828 1.66561 9.46441 1.73067 9.26414C1.79573 9.06387 1.91234 8.88424 2.06879 8.74329C2.22524 8.60235 2.41603 8.50506 2.62199 8.4612L8.14199 7.29L10.9608 2.4C11.0661 2.21759 11.2176 2.06612 11.4 1.9608C11.5824 1.85549 11.7894 1.80005 12 1.80005C12.2106 1.80005 12.4175 1.85549 12.6 1.9608C12.7824 2.06612 12.9339 2.21759 13.0392 2.4L15.8592 7.2888L21.3792 8.46C21.5851 8.50386 21.7759 8.60115 21.9324 8.74209C22.0888 8.88304 22.2054 9.06266 22.2705 9.26294C22.3356 9.46321 22.3468 9.67708 22.303 9.88306C22.2592 10.089 22.162 10.2799 22.0212 10.4364L18.2436 14.6292L18.8364 20.2404C18.8585 20.45 18.825 20.6617 18.7392 20.8542C18.6535 21.0468 18.5186 21.2133 18.3481 21.3372C18.1775 21.461 17.9774 21.5377 17.7678 21.5597C17.5581 21.5816 17.3465 21.5479 17.154 21.462L12 19.164Z"
        fill="#FFAA00"
      />
    </motion.svg>
  ));

  // Variants for the testimonial transitions
  const variants = {
    initial: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: (direction) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" },
    }),
  };

  return (
    <div className={styles.sliderContainer}>
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={styles.testimonialWrapper}
        >
          {/* Image Section */}
          <motion.div
            className={styles.imageWrapper}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={current.photo}
              alt={current.name}
              width={300}
              height={300}
              quality={100}
              priority
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className={styles.textWrapper}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          >
            <p className={styles.fromTag}>{current.from}</p>
            <h2 className={styles.name}>{current.name}</h2>
            <p className={styles.quote}>{current.body}</p>
            <div className={styles.starRow}>{stars}</div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className={styles.navigation}>
        <motion.div
          className={styles.navButton}
          onClick={prevTestimonial}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M15.41 16.58L10.83 12l4.58-4.58L14 6l-6 6 6 6z"
              fill="#fff"
            />
          </svg>
        </motion.div>
        <motion.div
          className={styles.navButton}
          onClick={nextTestimonial}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z"
              fill="#fff"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
