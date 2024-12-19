import styles from "@/styles/components/landing/ForCareUsers.module.css";
import Image from "next/image";

export default function ForCareUsers({
  flipped = false,
  title = "For Care Users",
  subtitle = "Some introductory text about the care services.",
  image = "/placeholder-image.jpg",
  cards = [],
}) {
  return (
    <section className={styles.container}>
      <div className={`${styles.content} ${flipped ? styles.flipped : ""}`}>
        {/* Text section always first in markup to appear at top on mobile */}
        <div className={styles.textSection}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        {/* Image section in the middle on desktop */}
        <div className={styles.image}>
          <div className={styles.imageWrapper}>
            <Image
              src={image}
              width={400}
              height={400}
              alt="Care related"
              quality={100}
              priority
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className={styles.blueBlock}></div>
        </div>

        {/* Cards section last in markup (on desktop it'll be third, on mobile it will stack last) */}
        <div className={styles.cardsSection}>
          {cards.map((card, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.icon}>{card.icon}</div>
              <div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
