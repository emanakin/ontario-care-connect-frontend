import Link from "next/link";
import styles from "@/styles/components/about/MissionCard.module.css";
import Image from "next/image";

export default function MissionCard({ icon, title, description, link, color }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Image src={icon} alt={title} width={40} height={40} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={link} className={styles.link}>
        Read More
      </Link>
    </div>
  );
}
