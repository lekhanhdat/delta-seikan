import hinh8 from "@/assets/images/hinh8.jpg";
import styles from "./CapabilitySection.module.css";
import { memo } from "react";

type CapabilityItem = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

type CapabilityProps = {
  heading: string;
  subheading: string;
  items: CapabilityItem[];
};

const CapabilitySection = ({
  heading,
  subheading,
  items,
}: CapabilityProps) => {
  return (
    <section className={styles.capabilitySection}>
      
      {/* BACKGROUND */}
      <img src={hinh8} alt="bg" className={styles.capabilityBg} />

      {/* OVERLAY */}
      <div className={styles.capabilityOverlay} />

      {/* CONTENT */}
      <div className={styles.capabilityContent}>
        
        <p className={styles.capabilitySubtitle}>{subheading}</p>

        <h2 className={styles.capabilityTitle}>{heading}</h2>

        <div className={styles.capabilityGrid}>
          {items.map((item, i) => (
            <div key={i} className={styles.capabilityCard}>
              
              <div className={styles.capabilityIcon}>
                {item.icon}
              </div>

              <h3 className={styles.capabilityCardTitle}>
                {item.title}
              </h3>

              <p className={styles.capabilityDesc}>
                {item.desc}
              </p>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default memo(CapabilitySection);