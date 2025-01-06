import styles from "@/styles/components/common/Hero.module.css";
import Image from "next/image";

export default function Hero({
  title,
  subtitle,
  image,
  showSearch = false,
  imageAlt = "Hero image",
}) {
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
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search for answers..."
                className={styles.searchInput}
              />
              <button className={styles.searchButton}>Search</button>
            </div>
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
