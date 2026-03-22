import { FiSettings } from "react-icons/fi";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import styles from "./AboutSection.module.css";
import { memo } from "react";

type AboutProps = {
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  tags: string[];
  image: string;
};

const AboutSection = ({
  title,
  subtitle,
  description1,
  description2,
  tags,
  image,
}: AboutProps) => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        
        {/* LEFT IMAGE */}
        <div className={styles.aboutImageWrapper}>
          <img
            src={image}
            alt="about"
            className={styles.aboutImage}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.aboutContent}>
          <p className={styles.aboutSubtitle}>{subtitle}</p>

          <h2 className={styles.aboutTitle}>{title}</h2>

          <p className={styles.aboutDesc}>{description1}</p>
          <p className={styles.aboutDesc}>{description2}</p>

          {/* TAGS */}
          <div className={styles.aboutTags}>
            {tags.map((tag, i) => (
              <div key={i} className={styles.aboutTag}>
                {i === 0 ? (
                  <FiSettings className={styles.aboutTagIcon} />
                ) : (
                  <HiOutlineBadgeCheck className={styles.aboutTagIcon} />
                )}

                <span className={styles.aboutTagText}>{tag}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default memo(AboutSection);