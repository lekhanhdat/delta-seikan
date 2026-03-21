import NewsCard, { type NewsItem } from "../NewsCard/NewsCard";
import styles from "./NewsGrid.module.css";

type NewsGridProps = {
  items: NewsItem[];
};

const NewsGrid = ({ items }: NewsGridProps) => {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <NewsCard key={item.title} item={item} />
      ))}
    </div>
  );
};

export default NewsGrid;
