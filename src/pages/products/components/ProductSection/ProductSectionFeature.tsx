import { memo } from "react";
import styles from "./ProductSectionFeature.module.css";
import type { ProductSectionProps } from "./types";
import ImageFullscreenViewer from "./ImageFullscreenViewer";

const ProductSectionFeature = ({
  title,
  description,
  features,
  images,
  specImage,
}: ProductSectionProps) => {
  const hasSecondaryImage = Boolean(images[1]);

  return (
    <section className={styles.section}>
      <div className={styles.textBlock}>
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

      <div
        className={`${styles.mediaBlock} ${
          !hasSecondaryImage && !specImage ? styles.mediaBlockSingle : ""
        }`}
      >
        <div
          className={`${styles.mainImageWrap} ${
            !hasSecondaryImage && !specImage ? styles.mainImageWrapSingle : ""
          }`}
        >
          <img
            src={images[0]}
            alt={`${title} main`}
            className={styles.mainImage}
            loading="lazy"
            decoding="async"
          />
        </div>

        {hasSecondaryImage && (
          <div className={styles.subImageWrap}>
            <img
              src={images[1]}
              alt={`${title} secondary`}
              className={styles.subImage}
              loading="lazy"
              decoding="async"
            />
          </div>
        )}

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

export default memo(ProductSectionFeature);
