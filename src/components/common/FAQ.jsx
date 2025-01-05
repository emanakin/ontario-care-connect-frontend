import styles from "@/styles/components/common/FAQ.module.css";
import Image from "next/image";
import DropDownCard from "@/components/common/DropDownCard";

export default function FAQ({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image
            src={data.image}
            alt={data.imageAlt}
            fill
            quality={100}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.text}>
            <h2>{data.title}</h2>
            <p>{data.subtitle}</p>
          </div>
          <div className={styles.faqCards}>
            {data.cards.map((card, index) => (
              <DropDownCard key={index} title={card.title} body={card.body} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
