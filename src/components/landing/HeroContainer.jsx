import Image from "next/image";
import styles from "@/styles/components/landing/HeroContainer.module.css";
import { hero } from "@/content/pages/home.json";

export default function HeroContainer() {
  return (
    <section className={styles.container}>
      <Image
        src="/images/landing/hero-image.jpg"
        alt="Caregiver assisting a senior in-home"
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
            <span>{hero.title.prefix}</span>
            {" " + hero.title.main + " "}
            <span>{hero.title.suffix}</span>
          </h1>
          <p>{hero.subtitle}</p>
          <div className={styles.buttons}>
            <button>{hero.buttons.primary}</button>
            <button>{hero.buttons.secondary}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
