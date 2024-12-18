import styles from "@/styles/components/landing/ContactForm.module.css";

export default function ContactForm() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Ask us what you want to know...</h2>
      <textarea className={styles.message} placeholder="Write Here..." />
      <div className={styles.formRow}>
        <input
          type="email"
          className={styles.emailInput}
          placeholder="Enter your Email"
        />
        <button className={styles.sendButton}>Send</button>
      </div>
    </div>
  );
}
