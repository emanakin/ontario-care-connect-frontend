import styles from "@/styles/components/about/TeamContainer.module.css";
import TeamCard from "./TeamCard";

export default function TeamContainer({ title, description, cards }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>
          Meet Our <span>Team</span>
        </h2>
        <p>{description}</p>
      </div>
      <div className={styles.cards}>
        <TeamCard
          name="Administrative Position"
          title="Join our administrative team"
          isJobPosition={true}
          href="/careers/administrative"
        />
        {cards.map((card, index) => (
          <TeamCard key={index} {...card} />
        ))}
        <TeamCard
          name="Administrative Position"
          title="Be part of our growth"
          isJobPosition={true}
          href="/careers/administrative"
        />
      </div>
    </div>
  );
}
