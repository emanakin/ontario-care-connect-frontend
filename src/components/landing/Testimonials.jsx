import styles from "@/styles/components/landing/Testimonials.module.css";
import TestimonialSlider from "@/components/landing/TestimonialSlider";

export default function Testimonials({ data }) {
  if (!data?.items?.length) {
    return null;
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <div className={styles.slider}>
          <TestimonialSlider data={data} />
        </div>
      </div>
    </section>
  );
}
