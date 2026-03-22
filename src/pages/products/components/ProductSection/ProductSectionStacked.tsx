import { memo } from "react";
import styles from "./ProductSectionStacked.module.css";
import type { ProductSectionProps } from "./types";
import ImageFullscreenViewer from "./ImageFullscreenViewer";

const ProductSectionStacked = ({
  title,
  description,
  features,
  images,
  specImage,
}: ProductSectionProps) => {
  const hasSingleImage = images.length === 1;

  return (
    <section className={styles.section}>
      <div className={styles.headerBlock}>
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

      <div
        className={`${styles.mediaGrid} ${
          hasSingleImage && !specImage ? styles.mediaGridSingle : ""
        }`}
      >
        {images.map((img, index) => (
          <div
            key={`${img}-${index}`}
            className={`${styles.mediaItem} ${
              hasSingleImage ? styles.mediaItemSingle : ""
            }`}
          >
            <img
              src={img}
              alt={`${title} ${index + 1}`}
              className={styles.mediaImage}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}

        {specImage && (
          <div className={styles.specCard}>
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

export default memo(ProductSectionStacked);
