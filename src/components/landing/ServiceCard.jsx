import styles from "@/styles/components/landing/TypeOfServices.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ServiceCard({
  flipped,
  number,
  title,
  description,
  link,
  photo,
}) {
  return (
    <div className={`${styles.card} ${flipped ? styles.flipped : ""}`}>
      <div className={styles.textContent}>
        <h1 className={styles.number}>{number}</h1>
        <div className={styles.titleRow}>
          <h2>{title}</h2>
          <Link href={link} className={styles.linkIcon} aria-label="Learn more">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
            >
              <path
                d="M28.9958 15.759L14.3046 28.8651M29.0915 25.7243L29.6954 15.1349L19.106 14.5311"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.image}>
        <Image src={photo} alt="Service image" width={600} height={400} />
      </div>
    </div>
  );
}
