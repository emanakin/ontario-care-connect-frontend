import styles from "@/styles/components/landing/Testamonials.module.css";
import TestamonialSlider from "@/components/landing/TestamonialSlider";
import { testimonials } from "@/content/pages/home.json";

export default function Testamonials() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>{testimonials.title}</h2>
          <p>{testimonials.description}</p>
        </div>
        <div className={styles.slider}>
          <TestamonialSlider />
        </div>
      </div>
    </section>
  );
}
