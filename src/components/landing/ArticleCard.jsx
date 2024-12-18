import Image from "next/image";
import styles from "@/styles/components/landing/Resources.module.css";

export default function ArticleCard({ image, title, body, link }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={"Article Cover"}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.textContent}>
        <h4>{title}</h4>
        <p>{body}</p>
        <a href={link} className={styles.readMore}>
          Read More{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <path
              d="M23.7355 13.111L9.58939 21.2779M22.1315 21.2221L24.4092 12.7221L15.9088 10.4445"
              stroke="#0F4C75"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
