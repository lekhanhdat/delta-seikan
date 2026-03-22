import { FiAward, FiLink } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const lang = pathname.startsWith("/en") ? "en" : "vi";

  const content = {
    vi: {
      desc: "Dẫn đầu trong công nghệ đóng gói kim loại và lon nhôm 2 mảnh tại thị trường Việt Nam.",
      explore: "KHÁM PHÁ",
      products: "SẢN PHẨM",
      location: "ĐỊA ĐIỂM",
      exploreList: ["Giới thiệu", "Sản phẩm", "Chứng nhận", "Tin tức"],
      productList: ["Lon 2 mảnh", "Lon 3 mảnh", "Nắp EOE", "Tráng phủ"],
      office: "HCMC Office",
      factory: "Factory",
    },
    en: {
      desc: "Leading in metal packaging technology and 2-piece aluminum cans in Vietnam market.",
      explore: "EXPLORE",
      products: "PRODUCTS",
      location: "LOCATION",
      exploreList: ["About", "Products", "Certificates", "News"],
      productList: ["2-piece cans", "3-piece cans", "EOE lids", "Coating"],
      office: "HCMC Office",
      factory: "Factory",
    },
  };

  const t = content[lang];
  const basePath = lang === "en" ? "/en" : "";

  const exploreLinks = [
    { label: t.exploreList[0], to: `${basePath}/` },
    { label: t.exploreList[1], to: `${basePath}/products` },
    { label: t.exploreList[2], to: "/certificates" },
    { label: t.exploreList[3], to: "/news" },
  ];

  const productLinks = [
    { label: t.productList[0], to: `${basePath}/products` },
    { label: t.productList[1], to: `${basePath}/products` },
    { label: t.productList[2], to: `${basePath}/products` },
    { label: t.productList[3], to: `${basePath}/products` },
  ];

  return (
    <footer className={styles.footer}>
      
      {/* TOP */}
      <div className={styles.top}>
        
        {/* Column 1 */}
        <div className={styles.colPrimary}>
          <h2 className={styles.brandTitle}>
            DELTA SEIKAN
          </h2>

          <p className={styles.brandDesc}>
            {t.desc}
          </p>

          <div className={styles.iconList}>
            {[FiAward, FiLink].map((Icon, i) => (
              <div
                key={i}
                className={styles.iconButton}
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className={styles.colLink}>
          <h3 className={styles.colHeading}>
            {t.explore}
          </h3>

          <ul className={styles.linkList}>
            {exploreLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className={styles.linkItem}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div className={styles.colLink}>
          <h3 className={styles.colHeading}>
            {t.products}
          </h3>

          <ul className={styles.linkList}>
            {productLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className={styles.linkItem}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div className={styles.colLocation}>
          <h3 className={styles.colHeading}>
            {t.location}
          </h3>

          <div className={styles.locationList}>
            <div>
              <p className={styles.locationName}>{t.office}</p>
              <p className={styles.locationAddress}>
                602/32 Điện Biên Phủ, Phường 22, Bình Thạnh, HCMC
              </p>
            </div>

            <div>
              <p className={styles.locationName}>{t.factory}</p>
              <p className={styles.locationAddress}>
                Lot A, Tam Lap Industrial Cluster, Binh Duong
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className={styles.divider}></div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        
        <p className={styles.copyright}>
          © 2026 DELTA SEIKAN CORPORATION. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;