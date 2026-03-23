import styles from "./ProductTabs.module.css";
import { memo } from "react";

type Props = {
  categories: string[];
  active: number;
  onChange: (index: number) => void;
};

const ProductTabs = ({ categories, active, onChange }: Props) => {
  return (
    <div className={styles.productTabs} data-product-tabs="true">
      <div className={styles.productTabsContainer}>
        <div className={styles.productTabsWrapper}>
          <div className={styles.productTabsList}>
            {categories.map((item, index) => {
              const isActive = active === index;

              return (
                <button
                  key={index}
                  onClick={() => onChange(index)}
                  className={`${styles.productTabBtn} ${
                    isActive ? styles.productTabActive : ""
                  }`}
                >
                  {item}

                  <span
                    className={`${styles.productTabUnderline} ${
                      isActive
                        ? styles.productTabUnderlineActive
                        : styles.productTabUnderlineInactive
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductTabs);