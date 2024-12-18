import styles from "@/styles/components/landing/TypeOfServices.module.css";
import ServiceCard from "./ServiceCard";

export default function TypeOfServices() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Type of Services</h1>
          <p>
            BeHome nursing home care services encompass a range of compassionate
            care options, including in-home personal care
          </p>
        </div>
        <div className={styles.cards}>
          <ServiceCard
            flipped={false}
            number="01"
            title="Home Support"
            description="With our ongoing assessments and care professionals in their home, we can adjust and add services over the long term and work with other care providers to ensure holistic care. With over two decades of experience."
            link="/services/home-support"
            photo="/service-image-1.jpg"
          />

          <ServiceCard
            flipped={true}
            number="02"
            title="Personal Care"
            description="With our ongoing assessments and care professionals in their home, we can adjust and add services over the long term and work with other care providers to ensure holistic care. With over two decades of experience."
            link="/services/personal-care"
            photo="/service-image-2.jpg"
          />

          <ServiceCard
            flipped={false}
            number="03"
            title="Complex Care"
            description="With our ongoing assessments and care professionals in their home, we can adjust and add services over the long term and work with other care providers to ensure holistic care. With over two decades of experience."
            link="/services/complex-care"
            photo="/service-image-3.png"
          />
        </div>
      </div>
    </section>
  );
}
