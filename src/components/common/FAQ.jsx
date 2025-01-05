import styles from "@/styles/components/common/FAQ.module.css";
import Image from "next/image";
import DropDownCard from "@/components/common/DropDownCard";
import { faq } from "@/content/pages/services.json";

export default function FAQ() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image
            src={faq.image}
            alt={faq.imageAlt}
            fill
            quality={100}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.text}>
            <h2>{faq.title}</h2>
            <p>{faq.subtitle}</p>
          </div>
          <div className={styles.faqCards}>
            {faq.cards.map((card, index) => (
              <DropDownCard key={index} title={card.title} body={card.body} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
