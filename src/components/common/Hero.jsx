"use client";
import styles from "@/styles/components/common/Hero.module.css";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Hero({
  title,
  subtitle,
  image,
  showSearch = false,
  imageAlt = "Hero image",
  onSearch = () => {},
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      const params = new URLSearchParams(searchParams);
      if (searchQuery) {
        params.set("q", searchQuery);
      } else {
        params.delete("q");
      }
      router.push(`/faq?${params.toString()}`, { scroll: false });
      onSearch(searchQuery);
    },
    [searchQuery, router, searchParams, onSearch]
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>
            {typeof title === "object" ? (
              <>
                {title.main} <span>{title.sub}</span>
              </>
            ) : (
              title
            )}
          </h1>
          <p>{subtitle}</p>
          {showSearch && (
            <form onSubmit={handleSearch} className={styles.searchContainer}>
              <input
                type="search"
                placeholder="Search for answers..."
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search FAQs"
              />
              <button type="submit" className={styles.searchButton}>
                Search
              </button>
            </form>
          )}
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <Image
              src={image}
              alt={imageAlt}
              fill
              quality={100}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
