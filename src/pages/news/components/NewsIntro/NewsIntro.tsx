import styles from "./NewsIntro.module.css";

type NewsIntroProps = {
  label: string;
  title: string;
  description: string;
};

const NewsIntro = ({ label, title, description }: NewsIntroProps) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>{label}</p>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default NewsIntro;
