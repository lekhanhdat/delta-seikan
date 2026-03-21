import styles from "./PageHero.module.css";

type PageHeroProps = {
  title: string;
  description: string;
  backgroundImage: string;
};

const PageHero = ({
  title,
  description,
  backgroundImage,
}: PageHeroProps) => {
  return (
    <section className={styles.pageHero}>

      {/* BACKGROUND */}
      <div className={styles.pageHeroBg}>
        <img
          src={backgroundImage}
          alt="hero"
          className={styles.pageHeroImg}
        />
      </div>

      {/* OVERLAY */}
      <div className={styles.pageHeroOverlay} />

      {/* CONTENT */}
      <div className={styles.pageHeroContent}>
        <div className={styles.pageHeroContainer}>

          <h1 className={styles.pageHeroTitle}>{title}</h1>

          <div className={styles.pageHeroLine} />

          <p className={styles.pageHeroDesc}>{description}</p>

        </div>
      </div>

    </section>
  );
};

export default PageHero;