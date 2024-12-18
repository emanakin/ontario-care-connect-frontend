"use client";

import Image from "next/image";
import styles from "@/styles/components/common/Header.module.css";
import { useState } from "react";

export default function Header() {
  const [selectedLink, setSelectedLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Home", "Services", "About Us", "Resources", "Contact Us"];

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        {/* Logo Section */}
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="ElderlyEase Logo"
            width={936}
            height={262}
          />
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className={styles.hamburger} onClick={() => setMenuOpen(true)}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className={styles.links}>
          {links.map((link) => (
            <div key={link} className={styles.linkWrapper}>
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className={
                  selectedLink === link ? styles.selectedLink : styles.link
                }
                onClick={() => setSelectedLink(link)}
              >
                {link}
              </a>
              {selectedLink === link && (
                <div className={styles.underline}></div>
              )}
            </div>
          ))}
        </nav>

        {/* Buttons Section (Desktop) */}
        <div className={styles.buttons}>
          <span className={styles.login}>Login</span>
          <span className={styles.divider}>|</span>
          <button className={styles.registerButton}>Register</button>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <button
          className={styles.closeButton}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
            className={styles.mobileLink}
            onClick={() => {
              setSelectedLink(link);
              setMenuOpen(false);
            }}
          >
            {link}
          </a>
        ))}
      </div>
    </header>
  );
}
