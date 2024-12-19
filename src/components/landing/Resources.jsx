import styles from "@/styles/components/landing/Resources.module.css";
import ArticleCard from "./ArticleCard";

// Test objects for demonstration
const articles = [
  {
    image: "/article1.jpg",
    title: "Title here... Tittle here... Tittle here...",
    body: "uses a dictionary of over 200 latin words, combined with a handful of model...",
    link: "#",
  },
  {
    image: "/article2.png",
    title: "Title here... Tittle here... Tittle here...",
    body: "uses a dictionary of over 200 latin words, combined with a handful of model...",
    link: "#",
  },
  {
    image: "/article3.png",
    title: "Title here... Tittle here... Tittle here...",
    body: "uses a dictionary of over 200 latin words, combined with a handful of model...",
    link: "#",
  },
  {
    image: "/article4.jpg",
    title: "Title here... Tittle here... Tittle here...",
    body: "uses a dictionary of over 200 latin words, combined with a handful of model...",
    link: "#",
  },
];

export default function Resources() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.topRow}>
          <div>
            <h2>Our Resource & Guide</h2>
            <p>
              BeHome nursing home care services encompass a range of
              compassionate care options, including in-home personal care
            </p>
          </div>
          <div className={styles.carouselControls}>
            <div className={styles.controlButton}>
              {/* Left Arrow Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15.41 16.58L10.83 12l4.58-4.58L14 6l-6 6 6 6z"
                  fill="#fff"
                />
              </svg>
            </div>
            <div className={styles.controlButton}>
              {/* Right Arrow Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z"
                  fill="#fff"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.carousel}>
          {articles.map((article, idx) => (
            <ArticleCard
              key={idx}
              image={article.image}
              title={article.title}
              body={article.body}
              link={article.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
