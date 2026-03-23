import styles from "./CareerBlog.module.css";
import { memo } from "react";

type BlogItem = {
  title: string;
  tag: string;
  link: string;
  image: string;
};

type Props = {
  data: BlogItem[];
};

const CareerBlog = ({ data }: Props) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <p className={styles.sub}>Kiến thức & chia sẻ</p>
          <h2 className={styles.title}>Cẩm nang nghề nghiệp</h2>
        </div>
      </div>

      <div className={styles.grid}>
        {data.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} group`}
          >
            <div className={styles.imageWrapper}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.image}
                loading="lazy"
                decoding="async"
              />
            </div>

            <p className={styles.tag}>{item.tag}</p>
            <h3 className={styles.cardTitle}>{item.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default memo(CareerBlog);