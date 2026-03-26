import styles from "./FeatureCards.module.css";
import { memo } from "react";

type Card = {
  title: string;
  desc?: string;
  image: string;
  tags?: string[];
};

type FeatureProps = {
  title?: string;
  items: Card[];
};

// tách title
const splitTitle = (text: string) => {
  const words = text.split(" ");
  const mid = Math.ceil(words.length / 2);

  return {
    first: words.slice(0, mid).join(" "),
    second: words.slice(mid).join(" "),
  };
};

const FeatureCards = ({ title, items }: FeatureProps) => {
  return (
    <section className={styles.featureSection}>
      <div className={styles.featureContainer}>
        {title && <h2 className={styles.sectionTitle}>{title}</h2>}
        <div className={styles.cardsWrapper}>
          {items.map((item, i) => {
          const { first, second } = splitTitle(item.title);

          return (
            <div key={i} className={styles.featureCard}>
              
              <div className={styles.featureContent}>
                {/* ICON */}
                <div className={styles.featureIcon}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* TITLE */}
                <h3 className={styles.featureTitle}>
                  <span className={styles.featureTitleMain}>
                    {first}{" "}
                  </span>
                  {second && (
                    <span className={styles.featureTitleSub}>
                      {second}
                    </span>
                  )}
                </h3>
              </div>

              {/* DESC */}
              {item.desc && (
                <p className={styles.featureDesc}>{item.desc}</p>
              )}

              {/* TAGS */}
              {item.tags && (
                <div className={styles.featureTags}>
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className={styles.featureTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}

            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default memo(FeatureCards);