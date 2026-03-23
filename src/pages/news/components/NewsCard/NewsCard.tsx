import styles from "./NewsCard.module.css";
import { FiArrowUpRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("news");

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={item.image}
          alt={item.title}
          className={styles.image}
          loading="lazy"
          decoding="async"
        />
        <div className={styles.imageOverlay} />
      </div>

      <div className={styles.metaRow}>
        <p className={styles.tag}>{item.tag}</p>
        <p className={styles.date}>{item.date}</p>
      </div>

      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.description}>{item.desc}</p>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        {t("readMore")}
        <FiArrowUpRight />
      </a>
    </article>
  );
};

export default NewsCard;
