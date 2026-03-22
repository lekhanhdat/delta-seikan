import styles from "./CertificateImage.module.css";

type Props = {
  image: string;
};

const CertificateImage = ({ image }: Props) => {
  return (
    <div className={styles.wrapper}>
      <img
        src={image}
        alt="Certificates"
        className={styles.image}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default CertificateImage;