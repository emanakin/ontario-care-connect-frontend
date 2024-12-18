import styles from "@/styles/components/landing/HowItWorks.module.css";

export default function HowItWorksCard(props) {
  return (
    <div className={styles.howItWorksCard}>
      <div className={styles.icon}>{props.icon}</div>
      <div>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      </div>
    </div>
  );
}
