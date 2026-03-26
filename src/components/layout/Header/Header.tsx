import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";

import logoColor from "@/assets/images/logoColor.jpg";
import styles from "./Header.module.css";

const toLangPath = (path: string, lang: "vi" | "en") => {
  if (lang === "en") {
    if (path.startsWith("/en")) return path;
    return path === "/" ? "/en" : `/en${path}`;
  }

  const viPath = path.replace(/^\/en/, "");
  return viPath || "/";
};

const normalizePath = (path: string) =>
  path.length > 1 ? path.replace(/\/+$/, "") : path;

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("header");

  const pathname = location.pathname;
  const routeLang: "vi" | "en" = pathname.startsWith("/en") ? "en" : "vi";
  const basePath = routeLang === "en" ? "/en" : "";
  const homePath = basePath || "/";
  const [openMenu, setOpenMenu] = useState(false);

  const menuItems = useMemo(
    () => [
      { key: "about", path: homePath },
      { key: "product", path: `${basePath}/products` },
      { key: "certificate", path: `${basePath}/certificates` },
      { key: "career", path: `${basePath}/careers` },
      { key: "news", path: `${basePath}/news` },
      { key: "contact", path: `${basePath}/contact` },
    ],
    [basePath, homePath]
  );

  const active = useMemo(
    () =>
      Math.max(
        menuItems.findIndex(
          (item) => normalizePath(item.path) === normalizePath(pathname)
        ),
        0
      ),
    [menuItems, pathname]
  );

  const changeLang = (lang: "vi" | "en") => {
    const nextPath = toLangPath(pathname, lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    navigate(nextPath);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logoLink} onClick={() => navigate(homePath)}>
          <img src={logoColor} alt={t("brandName")} className={styles.logoImg} />
          <span className={styles.logoText}>{t("brandName")}</span>
        </div>

        <nav className={styles.desktopNav}>
          {menuItems.map((item, index) => (
            <div
              key={item.key}
              onClick={() => navigate(item.path)}
              className={`${styles.navItem} ${
                active === index ? styles.navItemActive : ""
              }`}
            >
              {t(item.key)}
            </div>
          ))}
        </nav>

        <div className={styles.rightGroup}>
          <div className={styles.languageSwitch}>
            <span
              onClick={() => changeLang("vi")}
              className={`${styles.languageItem} ${
                routeLang === "vi" ? styles.languageItemActive : ""
              }`}
            >
              Tiếng Việt
            </span>

            <span className={styles.languageDivider}>|</span>

            <span
              onClick={() => changeLang("en")}
              className={`${styles.languageItem} ${
                routeLang === "en" ? styles.languageItemActive : ""
              }`}
            >
              English
            </span>
          </div>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {openMenu && (
        <div className={styles.mobileMenu}>
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                navigate(item.path);
                setOpenMenu(false);
              }}
              className={styles.mobileMenuItem}
            >
              {t(item.key)}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
