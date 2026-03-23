import { FiCheckCircle } from "react-icons/fi";
import styles from "./CertificateContent.module.css";

type Item = {
  title: string;
  desc: string;
};

type Props = {
  heading: string;
  items: Item[];
  tags: string[];
};

const CertificateContent = ({ heading, items, tags }: Props) => {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>{heading}</h2>

      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <FiCheckCircle className={styles.icon} />
          <div>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemDesc}>{item.desc}</p>
          </div>
        </div>
      ))}

      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span
            key={index}
            className={index === tags.length - 1 ? styles.active : ""}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CertificateContent;