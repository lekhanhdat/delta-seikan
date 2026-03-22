import styles from "./CertificateHighlights.module.css";

export type CertificateHighlightItem = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

type CertificateHighlightsProps = {
  heading: string;
  subheading: string;
  items: CertificateHighlightItem[];
};

const CertificateHighlights = ({
  heading,
  subheading,
  items,
}: CertificateHighlightsProps) => {

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subheading}>{subheading}</p>
          <h2 className={styles.heading}>{heading}</h2>
        </div>

        <div className={styles.grid}>
          {items.map((card) => (
            <article key={card.title} className={styles.card}>
              <span className={styles.icon}>{card.icon}</span>
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.desc}>{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateHighlights;
