import styles from "./NewsCard.module.css";

export type NewsItem = {
  title: string;
  tag: string;
  date: string;
  desc: string;
  link: string;
  image: string;
};

type NewsCardProps = {
  item: NewsItem;
};

const NewsCard = ({ item }: NewsCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={item.image} alt={item.title} className={styles.image} />
      </div>
      <p className={styles.tag}>{item.tag}</p>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.date}>{item.date}</p>
      <p className={styles.description}>{item.desc}</p>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        Đọc bài viết
      </a>
    </article>
  );
};

export default NewsCard;
