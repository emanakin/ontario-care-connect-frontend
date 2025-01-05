"use client";

import Image from "next/image";
import styles from "@/styles/components/common/Footer.module.css";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.topRow}>
          <div className={styles.leftSection}>
            <motion.div
              className={styles.logo}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/logo-white.png"
                alt="ElderlyEase Logo"
                width={827}
                height={188}
                priority
              />
            </motion.div>

            <nav className={styles.nav}>
              <a href="#about">About Us</a>
              <a href="#contact">Contact Us</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </nav>
          </div>

          <div className={styles.rightSection}>
            <span className={styles.stayConnected}>Stay Connected</span>
            <div className={styles.socialIcons}>
              {/* Instagram */}
              <motion.a
                href="#"
                aria-label="Instagram"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                    fill="white"
                  />
                  <path
                    d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM19 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4Z"
                    fill="white"
                  />
                </svg>
              </motion.a>
              {/* LinkedIn */}
              <motion.a
                href="#"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.47 2H3.53C2.64 2 2 2.64 2 3.53V20.47C2 21.36 2.64 22 3.53 22H20.47C21.36 22 22 21.36 22 20.47V3.53C22 2.64 21.36 2 20.47 2ZM8.09 18.74H5.07V9.42H8.09V18.74ZM6.59 8.14C5.64 8.14 4.89 7.39 4.89 6.45C4.89 5.51 5.64 4.76 6.59 4.76C7.54 4.76 8.29 5.51 8.29 6.45C8.29 7.39 7.54 8.14 6.59 8.14ZM18.91 18.74H15.89V14.47C15.89 13.39 15.87 11.98 14.37 11.98C12.85 11.98 12.61 13.18 12.61 14.42V18.74H9.59V9.42H12.49V10.7H12.53C12.92 9.97 13.89 9.17 15.31 9.17C18.37 9.17 18.91 11.2 18.91 13.82V18.74Z"
                    fill="white"
                  />
                </svg>
              </motion.a>
              {/* Facebook */}
              <motion.a
                href="#"
                aria-label="Facebook"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 1.5C6.195 1.5 1.5 6.225 1.5 12.06C1.5 17.325 5.34 21.705 10.365 22.5V15.12H7.695V12.06H10.365V9.735C10.365 7.08 11.94 5.625 14.325 5.625C15.48 5.625 16.68 5.835 16.68 5.835V8.43H15.36C14.055 8.43 13.65 9.24 13.65 10.08V12.06H16.56L16.095 15.12H13.65V22.5C18.675 21.705 22.515 17.34 22.515 12.06C22.515 6.225 17.82 1.5 12.015 1.5H12Z"
                    fill="white"
                  />
                </svg>
              </motion.a>
              {/* WhatsApp */}
              <motion.a
                href="#"
                aria-label="WhatsApp"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 13.7 2.43 15.3 3.18 16.7L2 22L7.3 20.82C8.7 21.57 10.3 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C10.5 20 9 19.6 7.7 18.9L7.4 18.7L4.2 19.4L4.9 16.2L4.7 15.9C4 14.6 3.6 13.1 3.6 11.6C3.6 7.2 7.2 3.6 11.6 3.6C16 3.6 19.6 7.2 19.6 11.6C19.6 16 16 19.6 11.6 19.6H12V20ZM16.5 14.2C16.3 14.1 15.2 13.6 15 13.5C14.8 13.4 14.7 13.4 14.6 13.6C14.5 13.8 14.1 14.3 14 14.4C13.9 14.5 13.8 14.5 13.6 14.4C13.4 14.3 12.7 14.1 11.9 13.4C11.3 12.9 10.9 12.2 10.8 12C10.7 11.8 10.8 11.7 10.9 11.6C11 11.5 11.1 11.4 11.2 11.3C11.3 11.2 11.3 11.1 11.4 11C11.5 10.9 11.5 10.8 11.4 10.7C11.3 10.6 10.9 9.5 10.8 9.1C10.7 8.7 10.6 8.7 10.5 8.7H10.2C10.1 8.7 9.9 8.7 9.7 8.9C9.5 9.1 9 9.6 9 10.7C9 11.8 9.8 12.9 9.9 13C10 13.1 10.9 14.5 12.3 15.1C13.7 15.7 13.7 15.5 14.1 15.5C14.5 15.5 15.4 15 15.6 14.5C15.8 14 15.8 13.6 15.7 13.5C15.6 13.5 15.5 13.3 16.5 14.2Z"
                    fill="white"
                  />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottomRow}>
          <p>All Rights Reserved | ElderlyEase 2025</p>
        </div>
      </div>
    </footer>
  );
}
