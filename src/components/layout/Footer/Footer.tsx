import { FiAward, FiLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation("footer");

  const exploreLinks = [
    { label: t("about"), to: "/" },
    { label: t("product"), to: "/products" },
    { label: t("certificate"), to: "/certificates" },
    { label: t("news"), to: "/news" },
  ];

  const productLinks = [
    { label: t("lon2manh"), to: "/products" },
    { label: t("lon3manh"), to: "/products" },
    { label: t("napEOE"), to: "/products" },
    { label: t("trangPhu"), to: "/products" },
  ];

  return (
    <footer className={`${styles.footer} snap-section`}>
      <div className={styles.top}>
        {/* Column 1: Brand Info */}
        <div className={styles.colPrimary}>
          <h2 className={styles.brandTitle}>DELTA SEIKAN</h2>
          <p className={styles.brandDesc}>{t("desc")}</p>
          <div className={styles.iconList}>
            {[FiAward, FiLink].map((Icon, i) => (
              <div key={i} className={styles.iconButton}>
                <Icon />
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Explore Links */}
        <div className={styles.colLink}>
          <h3 className={styles.colHeading}>{t("explore")}</h3>
          <ul className={styles.linkList}>
            {exploreLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className={styles.linkItem}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Product Links */}
        <div className={styles.colLink}>
          <h3 className={styles.colHeading}>{t("products")}</h3>
          <ul className={styles.linkList}>
            {productLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className={styles.linkItem}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Location Info */}
        <div className={styles.colLocation}>
          <h3 className={styles.colHeading}>{t("location")}</h3>
          <div className={styles.locationGroup}>
            <div className={styles.locationItem}>
              <h4 className={styles.locationLabel}>{t("office")}</h4>
              <p className={styles.locationText}>{t("officeAddress")}</p>
            </div>
            <div className={styles.locationItem}>
              <h4 className={styles.locationLabel}>{t("factory")}</h4>
              <p className={styles.locationText}>{t("factoryAddress")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © 2026 Delta Seikan. {t("allRightsReserved") || "All rights reserved."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;