import styles from "@/styles/components/resources/ArticleCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({
  title,
  image,
  description,
  date,
  author,
  link,
}) {
  // Format date to match the design
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
      </div>
      <div className={styles.content}>
        <p className={styles.date}>{formattedDate}</p>
        <h3 className={styles.title}>{title}</h3>
        <h4 className={styles.author}>{author}</h4>
        <p className={styles.description}>{description}</p>
        <Link href={link} className={styles.learnMore}>
          Learn More
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
