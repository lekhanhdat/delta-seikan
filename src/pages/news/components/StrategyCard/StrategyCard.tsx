import styles from "./StrategyCard.module.css";

interface StrategyCardProps {
  image: string;
  title: string;
  description: string;
  author: string;
  date: string;
  link?: string;
}

const StrategyCard = ({
  image,
  title,
  description,
  author,
  date,
  link,
}: StrategyCardProps) => {
  return (
    <div className={styles.strategyCard}>
      <div className={styles.container}>
        {/* Left Side - Image */}
        <div className={styles.imageSection}>
          <img src={image} alt="" className={styles.image} />
        </div>

        {/* Right Side - Content */}
        <div className={styles.contentSection}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
          </div>

          {/* Footer */}
          <div className={styles.footer}>
            <div className={styles.authorInfo}>
              <div className={styles.profileIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div>
                <div className={styles.author}>{author}</div>
                <div className={styles.date}>{date}</div>
              </div>
            </div>
            {link && (
              <a href={link} className={styles.viewMore}>
                Xem thêm{" "}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyCard;
