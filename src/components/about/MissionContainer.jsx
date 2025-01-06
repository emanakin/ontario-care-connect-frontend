import styles from "@/styles/components/about/MissionContainer.module.css";
import MissionCard from "./MissionCard";

export default function MissionContainer({ title, description, cards }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>
          {title
            .split(" & ")
            .map((part, i) => (i === 1 ? <span key={i}>{part}</span> : part))}
        </h2>
        <p>{description}</p>
        <div className={styles.cards}>
          {cards.map((card, index) => (
            <MissionCard
              icon={card.icon}
              title={card.title}
              description={card.description}
              link={card.link}
              color={card.color}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
