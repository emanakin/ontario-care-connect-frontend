import styles from "@/styles/components/landing/HowItWorks.module.css";

export default function HowItWorksCard(props) {
  return (
    <div className={styles.howItWorksCard}>
      <div className={styles.icon}>{props.icon}</div>
      <div>
        <h4>{props.title}</h4>
        <p>{props.body}</p>
      </div>
    </div>
  );
}
