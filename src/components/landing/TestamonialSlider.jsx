"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/components/landing/Testamonials.module.css";

export default function TestamonialSlider() {
  const testimonials = [
    {
      photo: "/testimonial1.png",
      from: "From Care Receivers",
      name: "Kamala Shane",
      rating: 5,
      body: `Randomised words which don’t look even slightly believable. 
      if you are going to use a passage of lorem ipsum, you need to be sure 
      there isn’t anything embarrassing hidden in the middle of text. 
      all the lorem ipsum generators on the internet tend to repeat predefined chunks as 
      necessary, making this the first true generator on the internet. 
      It uses a dictionary of over 200 latin words, combined with a handful`,
    },
    {
      photo: "/testimonial2.png",
      from: "From Care Givers",
      name: "Jane Doe",
      rating: 4,
      body: `It is a long established fact that a reader will be distracted by the 
      readable content of a page when looking at its layout. The point of using 
      Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
      as opposed to using 'Content here, content here', making it look like readable English.`,
    },
    {
      photo: "/testimonial3.png",
      from: "From Care Receivers",
      name: "Jane Smith & Travis Kelcy",
      rating: 5,
      body: `Contrary to popular belief, Lorem Ipsum is not simply random text. 
      It has roots in a piece of classical Latin literature from 45 BC, 
      making it over 2000 years old.`,
    },
  ];

  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  // Create an array of stars based on rating
  const stars = Array.from({ length: current.rating }, (_, i) => (
    <svg
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
    </svg>
  ));

  return (
    <div className={styles.sliderContainer}>
      {/* Image Section */}
      <div className={styles.imageWrapper}>
        <Image
          src={current.photo}
          alt={current.name}
          width={300}
          height={300}
        />
      </div>

      {/* Text Section */}
      <div className={styles.textWrapper}>
        <p className={styles.fromTag}>{current.from}</p>
        <h2 className={styles.name}>{current.name}</h2>
        <p className={styles.quote}>{current.body}</p>
        <div className={styles.starRow}>{stars}</div>
      </div>

      {/* Navigation Arrows */}
      <div className={styles.navigation}>
        <div className={styles.navButton} onClick={prevTestimonial}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M15.41 16.58L10.83 12l4.58-4.58L14 6l-6 6 6 6z"
              fill="#fff"
            />
          </svg>
        </div>
        <div className={styles.navButton} onClick={nextTestimonial}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z"
              fill="#fff"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
