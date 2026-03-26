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
  const [useDropdown, setUseDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const tabsListRef = useRef<HTMLDivElement>(null);

  // Check if tabs overflow and need to switch to dropdown
  useEffect(() => {
    const checkOverflow = () => {
      if (!tabsListRef.current) return;

      const el = tabsListRef.current;
      const hasOverflow = el.scrollWidth > el.clientWidth;

      setUseDropdown(hasOverflow);
    };

    const raf = requestAnimationFrame(checkOverflow);

    window.addEventListener("resize", checkOverflow);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", checkOverflow);
    };
  }, [categories]);

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
        {/* Mobile Dropdown or Overflowing Dropdown */}
        <div 
          className={`${styles.mobileDropdown} ${useDropdown ? styles.forceShowDropdown : ""}`} 
          ref={dropdownRef}
        >
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

        {/* Desktop Tabs / Regular Tabs */}
        <div className={`${styles.productTabsWrapper} ${useDropdown ? styles.forceHideTabs : ""}`}>
          <div className={styles.productTabsList} ref={tabsListRef}>
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
