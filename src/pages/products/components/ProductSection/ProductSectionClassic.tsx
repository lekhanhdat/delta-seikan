import { memo } from "react";
import styles from "./ProductSectionClassic.module.css";
import type { ProductSectionProps } from "./types";
import ImageFullscreenViewer from "./ImageFullscreenViewer";

const ProductSectionClassic = ({
  title,
  description,
  features,
  images,
  specImage,
}: ProductSectionProps) => {
  const hasSingleImage = images.length === 1;

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.line} />
        <p className={styles.description}>{description}</p>

        {features && (
          <div className={styles.features}>
            {features.map((item) => (
              <div key={item.title} className={styles.featureItem}>
                <h4 className={styles.featureTitle}>{item.title}</h4>
                <p className={styles.featureDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.right}>
        <div
          className={`${styles.imageStack} ${
            hasSingleImage ? styles.imageStackSingle : styles.imageStackMulti
          }`}
        >
          {images.map((img, index) => (
            <div
              key={`${img}-${index}`}
              className={`${styles.imageItem} ${
                hasSingleImage ? styles.imageItemSingle : ""
              }`}
            >
              <img
                src={img}
                alt={`${title} ${index + 1}`}
                className={styles.image}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        {specImage && (
          <div className={styles.specWrap}>
            <ImageFullscreenViewer
              src={specImage}
              alt={`${title} specification`}
              imageClassName={styles.specImage}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(ProductSectionClassic);
