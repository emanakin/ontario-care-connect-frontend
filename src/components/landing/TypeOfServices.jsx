import styles from "@/styles/components/landing/TypeOfServices.module.css";
import ServiceCard from "./ServiceCard";
import { services } from "@/content/pages/home.json";

export default function TypeOfServices() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>{services.title}</h2>
          <p>{services.description}</p>
        </div>
        <div className={styles.cards}>
          {services.cards.map((card, index) => (
            <ServiceCard
              key={index}
              flipped={index % 2 === 0}
              number={`0${index + 1}`}
              title={card.title}
              description={card.description}
              link={card.link}
              photo={card.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
