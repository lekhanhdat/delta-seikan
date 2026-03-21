import styles from "./NewsIntro.module.css";

type NewsIntroProps = {
  label: string;
  title: string;
  description: string;
};

const NewsIntro = ({ label, title, description }: NewsIntroProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topRow}>
        <p className={styles.label}>{label}</p>
        <span className={styles.dot} />
        <p className={styles.smallText}>Delta Seikan Insights</p>
      </div>

      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default NewsIntro;
