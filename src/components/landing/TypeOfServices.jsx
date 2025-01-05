import styles from "@/styles/components/landing/TypeOfServices.module.css";
import ServiceCard from "./ServiceCard";

export default function TypeOfServices({ data }) {
  if (!data?.cards?.length) {
    return null;
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <div className={styles.cards}>
          {data.cards.map((card, index) => (
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
