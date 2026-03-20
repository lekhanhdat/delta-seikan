import styles from "./ServiceSection.module.css";

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
};

const ServiceSection = ({
  title,
  description,
  items,
  badgeText,
  badgeSubText,
}: ServiceSectionProps) => {
  return (
    <section className={styles.serviceSection}>
      
      <div className={styles.serviceContainer}>
        
        <h2 className={styles.serviceTitle}>{title}</h2>

        <p className={styles.serviceDesc}>{description}</p>

        <div className={styles.serviceGrid}>
          {items.map((item, index) => (
            <div key={index} className={styles.serviceCard}>
              
              <div className={styles.serviceIcon}>
                {item.icon || "✓"}
              </div>

              <h4 className={styles.serviceItemTitle}>
                {item.title}
              </h4>

              <p className={styles.serviceItemDesc}>
                {item.desc}
              </p>

            </div>
          ))}
        </div>

        {(badgeText || badgeSubText) && (
          <div className={styles.serviceBadge}>
            <span className={styles.serviceBadgeText}>
              {badgeText}
            </span>
            <span className={styles.serviceBadgeSub}>
              {badgeSubText}
            </span>
          </div>
        )}

      </div>
    </section>
  );
};

export default ServiceSection;