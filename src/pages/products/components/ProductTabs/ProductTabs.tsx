import { memo, useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import styles from "./ProductTabs.module.css";

type Props = {
  categories: string[];
  active: number;
  onChange: (index: number) => void;
};

const ProductTabs = ({ categories, active, onChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (index: number) => {
    onChange(index);
    setIsOpen(false);
  };

  return (
    <div className={styles.productTabs} data-product-tabs="true">
      <div className={styles.productTabsContainer}>
        {/* Mobile Dropdown */}
        <div className={styles.mobileDropdown} ref={dropdownRef}>
          <button 
            className={styles.dropdownToggle}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{categories[active]}</span>
            <FiChevronDown className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`} />
          </button>
          
          {isOpen && (
            <div className={styles.dropdownMenu}>
              {categories.map((item, index) => (
                <button
                  key={index}
                  className={`${styles.dropdownItem} ${active === index ? styles.dropdownItemActive : ""}`}
                  onClick={() => handleSelect(index)}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Tabs */}
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