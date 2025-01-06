import Image from "next/image";
import styles from "@/styles/components/about/StoryCard.module.css";

export default function StoryCard({
  date,
  title,
  description,
  image,
  imageAlt,
}) {
  // Function to highlight specific words in blue
  const formatTitle = (title) => {
    const words = title.split(" ");
    return words.map((word, index) => {
      if (
        word === "platform" ||
        word === "agencies" ||
        word === "Complex Care" ||
        word === "receivers" ||
        word === "caregivers"
      ) {
        return <span key={index}>{word} </span>;
      }
      return word + " ";
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h4>{date}</h4>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.image}>
        <Image src={image} alt={imageAlt} fill style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
}
