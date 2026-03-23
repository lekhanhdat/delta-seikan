import { FiBookOpen, FiTrendingUp, FiHome } from "react-icons/fi";
import styles from "./CareerHighlights.module.css";
import { memo } from "react";

type HighlightItem = {
  title: string;
  desc: string;
  highlight?: boolean;
};

type Props = {
  data: HighlightItem[];
};

const icons = [FiHome, FiTrendingUp, FiBookOpen];

const CareerHighlights = ({ data }: Props) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.jobGrid}>
        {data.map((item, i) => {
          const Icon = icons[i];

          return (
            <div
              key={i}
              className={`${styles.card} ${
                item.highlight ? styles.active : styles.inactive
              }`}
            >
              {/* Background icon */}
              <div className={styles.bgIcon}>
                <Icon />
              </div>

              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>

              {/* bottom icon */}
              <div className={styles.icon}>
                <Icon />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default memo(CareerHighlights);