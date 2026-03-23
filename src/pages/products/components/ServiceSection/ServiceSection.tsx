import styles from "./ServiceSection.module.css";
import { memo } from "react";

type ServiceItem = {
  title: string;
  desc: string;
  icon?: string;
};

type ServiceSectionProps = {
  title: string;
  description: string;
  items: ServiceItem[];
  badgeText?: string;
  badgeSubText?: string;
  image?: string;
};

const ServiceSection = ({
  title,
  description,
  items,
  image,
}: ServiceSectionProps) => {
  return (
    <section className={styles.serviceSection}>
      <div className={styles.serviceContainer}>
        <div className={styles.serviceContent}>
          <div className={styles.serviceLeft}>
            <h2 className={styles.serviceTitle}>{title}</h2>

            <p className={styles.serviceDesc}>{description}</p>
          </div>

          {image && (
            <div className={styles.serviceRight}>
              <img
                src={image}
                alt={title}
                className={styles.serviceImage}
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
        </div>

        {items && items.length > 0 && (
          <div className={styles.serviceGrid}>
            {items.map((item, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{item.icon || "✓"}</div>

                <h4 className={styles.serviceItemTitle}>{item.title}</h4>

                <p className={styles.serviceItemDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(ServiceSection);