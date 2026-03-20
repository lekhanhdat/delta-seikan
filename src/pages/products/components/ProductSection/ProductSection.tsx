import styles from "./ProductSection.module.css";

type ProductSectionProps = {
  title: string;
  description: string;

  features?: {
    title: string;
    desc: string;
  }[];

  images: string[];
  specImage?: string;
};

const ProductSection = ({
  title,
  description,
  features,
  images,
  specImage,
}: ProductSectionProps) => {
  return (
    <section className={styles.productSection}>
      
      {/* LEFT */}
      <div className={styles.productLeft}>
        <h2 className={styles.productTitle}>{title}</h2>

        <div className={styles.productLine} />

        <p className={styles.productDesc}>{description}</p>

        {features && (
          <div className={styles.productFeatures}>
            {features.map((item, index) => (
              <div key={index} className={styles.productFeatureItem}>
                <h4 className={styles.productFeatureTitle}>
                  {item.title}
                </h4>
                <p className={styles.productFeatureDesc}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT */}
      <div className={styles.productRight}>
        <div className={styles.productImages}>
          {images.map((img, index) => (
            <div key={index} className={styles.productImageItem}>
              <img src={img} className={styles.productImage} />
            </div>
          ))}
        </div>

        {specImage && (
          <div className={styles.productSpec}>
            <img src={specImage} className={styles.productSpecImg} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;