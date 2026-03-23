import styles from "./CertificateSection.module.css";
import CertificateImage from "../CertificateImage/CertificateImage";
import CertificateContent from "../CertificateContent/CertificateContent";

type CertificateItem = {
  title: string;
  desc: string;
};

type CertificateSectionProps = {
  image: string;
  heading: string;
  items: CertificateItem[];
  tags: string[];
};

const CertificateSection = ({
  image,
  heading,
  items,
  tags,
}: CertificateSectionProps) => {

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <CertificateImage image={image} />

        <CertificateContent heading={heading} items={items} tags={tags} />
      </div>
    </section>
  );
};

export default CertificateSection;