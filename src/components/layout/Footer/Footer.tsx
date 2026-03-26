import { FiAward, FiLink } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

const Footer = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation("footer");
  const basePath = pathname.startsWith("/en") ? "/en" : "";
  const homePath = basePath || "/";

  const exploreLinks = [
    { label: t("about"), to: homePath },
    { label: t("product"), to: `${basePath}/products` },
    { label: t("certificate"), to: `${basePath}/certificates` },
    { label: t("news"), to: `${basePath}/news` },
  ];

  const productLinks = [
    { label: t("lon2manh"), to: `${basePath}/products` },
    { label: t("lon3manh"), to: `${basePath}/products` },
    { label: t("napEOE"), to: `${basePath}/products` },
    { label: t("trangPhu"), to: `${basePath}/products` },
  ];

  return (
    <footer className={`${styles.footer} snap-section`}>
      <div className={styles.top}>
        {/* Column 1: Brand Info */}
        <div className={styles.colPrimary}>
          <h2 className={styles.brandTitle}>{t("brandName")}</h2>
          <p className={styles.brandDesc}>{t("desc")}</p>
          <div className={styles.iconList}>
            {[FiAward, FiLink].map((Icon, i) => (
              <div key={i} className={styles.iconButton}>
                <Icon />
              </div>
            ))}
          </div>
        </div>

        {/* Links Group for Mobile: Explore & Products side by side */}
        <div className={styles.linksGroup}>
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
