import Image from "next/image";
import styles from "@/styles/components/landing/HeroContainer.module.css";

export default function HeroContainer({ data }) {
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
            <span>{data.title.prefix}</span>
            {" " + data.title.main + " "}
            <span>{data.title.suffix}</span>
          </h1>
          <p>{data.subtitle}</p>
          <div className={styles.buttons}>
            <button>{data.buttons.primary}</button>
            <button>{data.buttons.secondary}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
