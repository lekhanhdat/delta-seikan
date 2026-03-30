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
  const displayImages = images?.slice(0, 4) || [];

  return (
    <section className={styles.section}>
      <div className={specImage ? styles.contentGrid : styles.contentNoSpec}>
        <div className={styles.productMainInfo}>
          <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.line} />
          </div>

          <div className={styles.textContent}>
            <p className={styles.description}>{description}</p>

            {features && features.length > 0 && (
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

          {displayImages.length > 0 && (
            <div className={styles.specSection}>
              <div className={styles.specGrid}>
                {displayImages.map((img, index) => (
                  <div key={`${img}-${index}`} className={styles.specGridItem}>
                    <img
                      src={img}
                      alt={`${title} image ${index + 1}`}
                      className={styles.specGridImage}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {specImage && (
          <div className={styles.imageGallery}>
            <div className={styles.imageItem}>
              <ImageFullscreenViewer
                src={specImage}
                alt={`${title} specification`}
                imageClassName={styles.specAsGalleryImage}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(ProductSectionReverse);