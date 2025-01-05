"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/components/common/Header.module.css";

// 1. Move links out of the component to avoid re-creation every render
const LINKS = ["Home", "Services", "About", "Resources", "Contact", "FAQ"];

// 2. Helper function for nicely formatting a pathname (e.g., "/contact-us" -> "Contact Us")
function formatPathToLink(pathname) {
  if (pathname === "/") return "Home";
  return pathname
    .slice(1)
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Header() {
  const pathname = usePathname();
  const [selectedLink, setSelectedLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrolledPastHero = latest > 500;
    const isScrollingDown = latest > lastScrollY;
    setIsScrolled(latest > 50);
    setIsVisible(!isScrolledPastHero || !isScrollingDown || latest < 50);
    setLastScrollY(latest);
  });

  // 3. Use the helper and, if guaranteed valid, remove the LINKS.includes(...) check
  useEffect(() => {
    const basePath = pathname.split("/")[1] || ""; // e.g., "/services/x" -> ["", "services", "x"]
    const linkLabel = basePath
      ? basePath.charAt(0).toUpperCase() + basePath.slice(1)
      : "Home";

    setSelectedLink(linkLabel);
  }, [pathname]);

  return (
    <motion.header
      className={`${styles.container} ${isScrolled ? styles.scrolled : ""} ${
        !isVisible ? styles.hidden : ""
      }`}
      initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
      animate={{
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.98)"
          : "rgba(255, 255, 255, 0)",
        boxShadow: isScrolled ? "0 1px 4px rgba(0, 0, 0, 0.1)" : "none",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
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
          {LINKS.map((link) => (
            <div key={link} className={styles.linkWrapper}>
              <Link
                href={
                  link === "Home"
                    ? "/"
                    : `/${link.toLowerCase().replace(/\s+/g, "-")}`
                }
                className={
                  selectedLink === link ? styles.selectedLink : styles.link
                }
                onClick={() => setSelectedLink(link)}
              >
                {link}
              </Link>
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
        {LINKS.map((link) => (
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
    </motion.header>
  );
}
