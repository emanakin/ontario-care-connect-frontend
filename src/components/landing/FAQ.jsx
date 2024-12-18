import styles from "@/styles/components/landing/FAQ.module.css";
import ContactForm from "./ContactForm";
import DropDownCard from "@/components/common/DropDownCard";

export default function FAQ() {
  const faqs = [
    {
      title: "How do I find the right caregiver?",
      body: "If you are going to use a passage of lorem ipsum...",
    },
    {
      title: "What qualifications do caregivers have?",
      body: "Lorem ipsum generators on the internet tend...",
    },
    {
      title: "How do I pay for services?",
      body: "There isn't anything embarrassing hidden in the text...",
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>View All FAQs</h1>
        <p>
          A handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition,
        </p>
        <div className={styles.row}>
          <div className={styles.col}>
            {faqs.map((faq, idx) => (
              <DropDownCard key={idx} title={faq.title} body={faq.body} />
            ))}
          </div>
          <div className={styles.col}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
