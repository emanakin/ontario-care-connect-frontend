import styles from "@/styles/components/common/ContactSection.module.css";

export default function ContactSection({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>
          Still Have <span>Questions?</span>
        </h2>
        <p>{data.description}</p>
        <button>Contact us</button>
      </div>
    </div>
  );
}
