import styles from "@/styles/components/about/StoryContainer.module.css";
import StoryCard from "./StoryCard";

export default function StoryContainer({ title, description, cards }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.cards}>
          {cards.map((card, index) => (
            <StoryCard
              date={card.date}
              title={card.title}
              description={card.description}
              image={card.image}
              imageAlt={card.imageAlt}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
