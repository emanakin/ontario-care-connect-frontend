import styles from "@/styles/components/landing/Testamonials.module.css";
import TestamonialSlider from "@/components/landing/TestamonialSlider";

export default function Testamonials() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Trusted By By 300+ Families</h1>
          <p>
            A handful of model sentence structures, to generate Lorem Ipsum
            which looks reasonable. The generated Lorem Ipsum is therefore
            always free from repetition,
          </p>
        </div>
        <div className={styles.slider}>
          <TestamonialSlider />
        </div>
      </div>
    </section>
  );
}
