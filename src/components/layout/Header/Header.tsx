import { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import logoColor from "@/assets/images/logoColor.jpg";
import styles from "./Header.module.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const pathname = location.pathname;
  const [openMenu, setOpenMenu] = useState(false);

  // ✅ menu dùng key
  const menuItems = useMemo(
    () => [
      { key: "about", path: "/" },
      { key: "product", path: "/products" },
      { key: "certificate", path: "/certificates" },
      { key: "career", path: "/careers" },
      { key: "news", path: "/news" },
      { key: "contact", path: "/contact" },
    ],
    []
  );

  const active = useMemo(
    () =>
      Math.max(
        menuItems.findIndex((item) => item.path === pathname),
        0
      ),
    [menuItems, pathname]
  );

  // ✅ đổi ngôn ngữ (GLOBAL)
  const changeLang = (lang: "vi" | "en") => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        {/* LOGO */}
        <div
          className={styles.logoLink}
          onClick={() => navigate("/")}
        >
          <img
            src={logoColor}
            alt="Delta Seikan"
            className={styles.logoImg}
          />
          <span className={styles.logoText}>
            DELTA SEIKAN
          </span>
        </div>

        {/* NAV DESKTOP */}
        <nav className={styles.desktopNav}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className={`${styles.navItem} ${
                active === index ? styles.navItemActive : ""
              }`}
            >
              {t(item.key)} {/* 🔥 */}
            </div>
          ))}
        </nav>

        {/* RIGHT */}
        <div className={styles.rightGroup}>
          {/* LANGUAGE SWITCH */}
          <div className={styles.languageSwitch}>
            <span
              onClick={() => changeLang("vi")}
              className={`${styles.languageItem} ${
                i18n.language === "vi"
                  ? styles.languageItemActive
                  : ""
              }`}
            >
              Tiếng Việt
            </span>

            <span className={styles.languageDivider}>|</span>

            <span
              onClick={() => changeLang("en")}
              className={`${styles.languageItem} ${
                i18n.language === "en"
                  ? styles.languageItemActive
                  : ""
              }`}
            >
              English
            </span>
          </div>

          {/* MOBILE MENU */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {openMenu && (
        <div className={styles.mobileMenu}>
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                navigate(item.path);
                setOpenMenu(false);
              }}
              className={styles.mobileMenuItem}
            >
              {t(item.key)} {/* 🔥 */}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;