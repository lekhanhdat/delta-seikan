import { Link } from "react-router-dom";
import styles from "./CertificateCta.module.css";

type CertificateCtaProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel: string;
  secondaryTo: string;
};

const CertificateCta = ({
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}: CertificateCtaProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.actions}>
          <Link to={primaryTo} className={styles.primaryBtn}>
            {primaryLabel}
          </Link>
          <Link to={secondaryTo} className={styles.secondaryBtn}>
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CertificateCta;
