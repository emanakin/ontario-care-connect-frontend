import styles from "@/styles/components/resources/BlogContainer.module.css";
import BlogCard from "./BlogCard";
import Link from "next/link";

export default function BlogContainer({ data }) {
  // Early return if data or blogList is not available
  if (!data || !data.blogList || data.blogList.length === 0) {
    return null; // or return a placeholder/loading state
  }

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>{data.title}</h2>
        <p>{data.subtitle}</p>
      </div>

      <div className={styles.blogGrid}>
        <div className={styles.featuredBlog}>
          <BlogCard size="large" data={data.blogList[0]} />
        </div>
        <div className={styles.smallBlogs}>
          {data.blogList.slice(1, 4).map((blog) => (
            <BlogCard key={blog.link} size="small" data={blog} />
          ))}
        </div>
      </div>

      <div className={styles.viewAll}>
        <Link href="/blog" className={styles.viewAllButton}>
          View All
        </Link>
      </div>
    </section>
  );
}
