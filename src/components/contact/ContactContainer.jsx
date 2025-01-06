import styles from "@/styles/components/contact/ContactContainer.module.css";
import ContactForm from "@/components/contact/ContactForm";
import Image from "next/image";
export default function ContactContainer({ data }) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textWrapper}>
            <div className={styles.titles}>
              <h2>{data.title}</h2>
              <p>{data.subtitle}</p>
            </div>
            <div className={styles.contactInfo}>
              {data.contactInfo.map((item, index) => (
                <div key={index} className={styles.contactInfoItem}>
                  <div className={styles.contactInfoIcon}>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className={styles.contactInfoText}>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.socialLinks}>
              <h3>Follow us on</h3>
              {data.socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className={styles.contactForm}>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
