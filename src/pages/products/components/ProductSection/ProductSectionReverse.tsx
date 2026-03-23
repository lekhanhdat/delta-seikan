import { memo } from "react";
import styles from "./ProductSectionReverse.module.css";
import type { ProductSectionProps } from "./types";
import ImageFullscreenViewer from "./ImageFullscreenViewer";

const ProductSectionReverse = ({
  title,
  description,
  features,
  images,
  specImage,
}: ProductSectionProps) => {
  const hasSingleImage = images.length === 1;

  return (
    <section className={styles.section}>
      <div
        className={`${styles.gallery} ${
          hasSingleImage ? styles.gallerySingle : styles.galleryMulti
        }`}
      >
        {images.map((img, index) => (
          <div
            key={`${img}-${index}`}
            className={`${styles.galleryItem} ${
              hasSingleImage ? styles.galleryItemSingle : ""
            }`}
          >
            <img
              src={img}
              alt={`${title} ${index + 1}`}
              className={styles.galleryImage}
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

      <div className={styles.content}>
        <p className={styles.badge}>Giải pháp sản phẩm</p>
        <h2 className={styles.title}>{title}</h2>
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
    </section>
  );
};

export default memo(ProductSectionReverse);
