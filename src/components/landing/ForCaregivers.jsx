"use client";

import styles from "@/styles/components/landing/ForCareUsers.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

// SVG Icons for Caregivers
const flexibleScheduleIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
    <path
      d="M20 3.33325C29.205 3.33325 36.6667 10.7949 36.6667 19.9999C36.6667 29.2049 29.205 36.6666 20 36.6666C10.795 36.6666 3.33333 29.2049 3.33333 19.9999C3.33333 10.7949 10.795 3.33325 20 3.33325ZM20 9.99992C19.558 9.99992 19.134 10.1755 18.8215 10.4881C18.5089 10.8006 18.3333 11.2246 18.3333 11.6666V19.9999C18.3334 20.4419 18.5091 20.8658 18.8217 21.1783L23.8217 26.1783C24.136 26.4818 24.557 26.6498 24.994 26.646C25.431 26.6422 25.849 26.467 26.158 26.1579C26.467 25.8489 26.6423 25.4309 26.6461 24.9939C26.6499 24.5569 26.4819 24.1359 26.1783 23.8216L21.6667 19.3099V11.6666C21.6667 11.2246 21.4911 10.8006 21.1785 10.4881C20.8659 10.1755 20.442 9.99992 20 9.99992Z"
      fill="#3282B8"
    />
  </svg>
);

const earnRatesIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.0325 5C16.2683 5 12.8392 6.24333 10.81 7.25917C10.6267 7.35083 10.4556 7.44028 10.2967 7.5275C9.98167 7.69917 9.71334 7.85917 9.50001 8L11.8083 11.3983L12.895 11.8308C17.1417 13.9733 22.8367 13.9733 27.0842 11.8308L28.3175 11.1908L30.5 8C30.0474 7.70592 29.5774 7.4396 29.0925 7.2025C27.0733 6.1975 23.7258 5 20.0333 5M14.665 8.84667C13.8478 8.69287 13.0405 8.49029 12.2475 8.24C14.1483 7.39583 16.9808 6.5 20.0333 6.5C22.1475 6.5 24.1467 6.93 25.8 7.475C23.8625 7.7475 21.795 8.21 19.825 8.77917C18.275 9.2275 16.4633 9.17917 14.665 8.84667ZM27.965 13.0667L27.76 13.17C23.0883 15.5267 16.8917 15.5267 12.22 13.17L12.0258 13.0717C5.00667 20.7725 -0.351661 34.9975 20.0325 34.9975C40.4167 34.9975 34.9283 20.5083 27.965 13.0667ZM19.1667 20C18.7246 20 18.3007 20.1756 17.9882 20.4882C17.6756 20.8007 17.5 21.2246 17.5 21.6667C17.5 22.1087 17.6756 22.5326 17.9882 22.8452C18.3007 23.1577 18.7246 23.3333 19.1667 23.3333V20ZM20.8333 18.3333V17.5H19.1667V18.3333C18.2826 18.3333 17.4348 18.6845 16.8097 19.3096C16.1845 19.9348 15.8333 20.7826 15.8333 21.6667C15.8333 22.5507 16.1845 23.3986 16.8097 24.0237C17.4348 24.6488 18.2826 25 19.1667 25V28.3333C18.4417 28.3333 17.8242 27.8708 17.5942 27.2225C17.56 27.1164 17.505 27.0183 17.4323 26.9339C17.3596 26.8494 17.2707 26.7804 17.1708 26.731C17.071 26.6815 16.9622 26.6526 16.851 26.6459C16.7398 26.6392 16.6283 26.6549 16.5233 26.692C16.4182 26.7291 16.3217 26.7869 16.2393 26.862C16.157 26.9371 16.0906 27.0279 16.044 27.1291C15.9974 27.2303 15.9715 27.3399 15.968 27.4512C15.9644 27.5626 15.9833 27.6735 16.0233 27.7775C16.2531 28.4275 16.6788 28.9904 17.2417 29.3884C17.8047 29.7864 18.4772 30.0001 19.1667 30V30.8333H20.8333V30C21.7174 30 22.5652 29.6488 23.1904 29.0237C23.8155 28.3986 24.1667 27.5507 24.1667 26.6667C24.1667 25.7826 23.8155 24.9348 23.1904 24.3096C22.5652 23.6845 21.7174 23.3333 20.8333 23.3333V20C21.5583 20 22.1758 20.4625 22.4058 21.1108C22.44 21.2169 22.495 21.3151 22.5677 21.3995C22.6404 21.4839 22.7294 21.5529 22.8292 21.6023C22.929 21.6518 23.0378 21.6807 23.149 21.6874C23.2602 21.6941 23.3717 21.6785 23.4767 21.6414C23.5818 21.6042 23.6784 21.5464 23.7607 21.4713C23.843 21.3963 23.9094 21.3054 23.9561 21.2042C24.0027 21.103 24.0285 20.9935 24.032 20.8821C24.0356 20.7707 24.0168 20.6598 23.9767 20.5558C23.7469 19.9058 23.3212 19.343 22.7583 18.9449C22.1953 18.5469 21.5228 18.3332 20.8333 18.3333ZM20.8333 25V28.3333C21.2754 28.3333 21.6993 28.1577 22.0119 27.8452C22.3244 27.5326 22.5 27.1087 22.5 26.6667C22.5 26.2246 22.3244 25.8007 22.0119 25.4882C21.6993 25.1756 21.2754 25 20.8333 25Z"
      fill="#3282B8"
    />
  </svg>
);

const supportiveCommunityIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
    <path
      d="M12.1429 13.5715C13.5637 13.5715 14.9263 13.0071 15.9309 12.0024C16.9356 10.9977 17.5 9.63512 17.5 8.21432C17.5 6.79352 16.9356 5.43091 15.9309 4.42625C14.9263 3.42159 13.5637 2.85718 12.1429 2.85718C10.7221 2.85718 9.35945 3.42159 8.35479 4.42625C7.35013 5.43091 6.78572 6.79352 6.78572 8.21432C6.78572 9.63512 7.35013 10.9977 8.35479 12.0024C9.35945 13.0071 10.7221 13.5715 12.1429 13.5715ZM2.85715 18.5457C2.85715 16.9815 4.12429 15.7143 5.68858 15.7143H13.6886C13.0625 17.2939 13.0518 19.0509 13.6586 20.638C14.2654 22.2251 15.4455 23.5268 16.9657 24.2857H13.5471C12.7028 24.2852 11.8773 24.5358 11.1758 25.0057C10.4742 25.4755 9.92818 26.1434 9.60715 26.9243C6.74286 26.3943 5.02572 24.9643 4.04429 23.3672C2.85715 21.4429 2.85715 19.4543 2.85715 19.1115V18.5457ZM23.0329 24.2857H26.4543C28.2329 24.2857 29.7571 25.3757 30.3943 26.9243C33.2586 26.3943 34.9757 24.9643 35.9571 23.3672C37.1429 21.4415 37.1429 19.4529 37.1429 19.11V18.5457C37.1432 18.1738 37.0703 17.8055 36.9281 17.4618C36.7859 17.1181 36.5774 16.8058 36.3144 16.5428C36.0514 16.2798 35.7391 16.0712 35.3954 15.9291C35.0517 15.7869 34.6834 15.7139 34.3114 15.7143H26.3114C26.9375 17.2939 26.9482 19.0509 26.3414 20.638C25.7346 22.2251 24.5545 23.5268 23.0343 24.2857M33.2143 8.21432C33.2143 9.63512 32.6499 10.9977 31.6452 12.0024C30.6406 13.0071 29.278 13.5715 27.8571 13.5715C26.4363 13.5715 25.0737 13.0071 24.0691 12.0024C23.0644 10.9977 22.5 9.63512 22.5 8.21432C22.5 6.79352 23.0644 5.43091 24.0691 4.42625C25.0737 3.42159 26.4363 2.85718 27.8571 2.85718C29.278 2.85718 30.6406 3.42159 31.6452 4.42625C32.6499 5.43091 33.2143 6.79352 33.2143 8.21432ZM10.7143 28.5457C10.7143 26.9815 11.9814 25.7143 13.5457 25.7143H26.4543C28.0186 25.7143 29.2857 26.9815 29.2857 28.5457V29.11C29.2857 29.4529 29.2857 31.4415 28.1 33.3672C26.8571 35.39 24.4371 37.1429 20 37.1429C15.5629 37.1429 13.1429 35.3886 11.9 33.3686C10.7143 31.4415 10.7143 29.4543 10.7143 29.11V28.5457ZM20 23.5715C21.4208 23.5715 22.7834 23.0071 23.7881 22.0024C24.7927 20.9977 25.3571 19.6351 25.3571 18.2143C25.3571 16.7935 24.7927 15.4309 23.7881 14.4262C22.7834 13.4216 21.4208 12.8572 20 12.8572C18.5792 12.8572 17.2166 13.4216 16.2119 14.4262C15.2073 15.4309 14.6429 16.7935 14.6429 18.2143C14.6429 19.6351 15.2073 20.9977 16.2119 22.0024C17.2166 23.0071 18.5792 23.5715 20 23.5715Z"
      fill="#3282B8"
    />
  </svg>
);

const trainingResourcesIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
    <path
      d="M20 17.5V36.6667C17.2575 33.3333 8.8575 33.3333 5 33.3333V15C13.2283 15 18.4283 16.6667 20 17.5ZM20 17.5V36.6667C22.7425 33.3333 31.1425 33.3333 35 33.3333V15C26.7717 15 21.5717 16.6667 20 17.5Z"
      fill="#3282B8"
    />
    <path
      d="M20 17.5V36.6667M20 17.5C18.4283 16.6667 13.2283 15 5 15V33.3333C8.8575 33.3333 17.2575 33.3333 20 36.6667M20 17.5C21.5717 16.6667 26.7717 15 35 15V33.3333C31.1425 33.3333 22.7425 33.3333 20 36.6667"
      stroke="#3282B8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 16.6668C23.6819 16.6668 26.6667 13.6821 26.6667 10.0002C26.6667 6.31826 23.6819 3.3335 20 3.3335C16.3181 3.3335 13.3333 6.31826 13.3333 10.0002C13.3333 13.6821 16.3181 16.6668 20 16.6668Z"
      stroke="#3282B8"
      strokeWidth="2"
    />
  </svg>
);

export default function ForCareGivers() {
  const cards = [
    {
      icon: flexibleScheduleIcon,
      title: "Flexible Schedule",
      body: "A reader will be distracted by the readable content.",
    },
    {
      icon: earnRatesIcon,
      title: "Earn Competitive Rates",
      body: "A reader will be distracted by the readable content.",
    },
    {
      icon: supportiveCommunityIcon,
      title: "Supportive Community",
      body: "A reader will be distracted by the readable content.",
    },
    {
      icon: trainingResourcesIcon,
      title: "Training & Resources",
      body: "A reader will be distracted by the readable content.",
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            For Caregivers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            BeHome nursing home care services encompass range of compassionate
            care options, including in-home
          </motion.p>
          <div className={styles.cards}>
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                className={styles.card}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={styles.icon}>{card.icon}</div>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/for-care-givers.jpg"
            width={500}
            height={400}
            alt="Care giver photo"
            priority
          />
          <motion.div
            className={styles.blueBlock}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
