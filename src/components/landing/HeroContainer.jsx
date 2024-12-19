import Image from "next/image";
import styles from "@/styles/components/landing/HeroContainer.module.css";

export default function HeroContainer() {
  return (
    <section className={styles.container}>
      <Image
        src="/hero-image.jpg"
        alt="Nurse and Elder"
        width={1920}
        height={1080}
        quality={100}
        priority
        className={styles.photo}
        sizes="100vw"
      />
      <div className={styles.whiteOverlay}></div>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>
            <span>Connect </span>
            with Quality In-Home
            <span> Care Solutions</span>
          </h1>
          <p>
            Emphasizing ease of use, trustworthiness, and tailored matches for
            care receivers and career growth for caregivers.
          </p>
          <div className={styles.buttons}>
            <button>Find a Caregiver</button>
            <button>Receive Care</button>
          </div>
        </div>
      </div>
    </section>
  );
}
