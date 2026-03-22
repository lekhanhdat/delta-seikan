import { useState, useMemo, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logoColor from "@/assets/images/logoColor.jpg";
import styles from "./Header.module.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const lang = pathname.startsWith("/en") ? "en" : "vi";

  const [openMenu, setOpenMenu] = useState(false);

  const menu = useMemo(
    () => ({
      vi: [
        { label: "Giới thiệu", path: "/" },
        { label: "Sản phẩm", path: "/products" },
        { label: "Chứng nhận", path: "/certificates" },
        { label: "Tuyển dụng", path: "/careers" },
        { label: "Tin tức", path: "/news" },
        { label: "Liên hệ", path: "/contact" },
      ],
      en: [
        { label: "About", path: "/en" },
        { label: "Products", path: "/en/products" },
        { label: "Certificates", path: "/en" },
        { label: "Careers", path: "/en" },
        { label: "News", path: "/en" },
        { label: "Contact Us", path: "/en" },
      ],
    }),
    []
  );

  const menuItems = menu[lang];
  const active = useMemo(
    () => Math.max(menuItems.findIndex((item) => item.path === pathname), 0),
    [menuItems, pathname]
  );

  const getSwitchLink = useCallback((targetLang: "vi" | "en") => {
    if (targetLang === "en") {
      if (pathname.startsWith("/en")) return pathname;
      return pathname === "/" ? "/en" : `/en${pathname}`;
    }
    return pathname.replace(/^\/en/, "") || "/";
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        {/* LOGO */}
        <a
          className={styles.logoLink}
          href={lang === "en" ? "/en" : "/"}
          onClick={(e) => {
            e.preventDefault();
            navigate(lang === "en" ? "/en" : "/");
          }}
        >
          <img
            src={logoColor}
            alt="Delta Seikan"
            className={styles.logoImg}
            loading="lazy"
            decoding="async"
          />
          <span className={styles.logoText}>
            DELTA SEIKAN
          </span>
        </a>

        {/* NAV DESKTOP */}
        <nav className={styles.desktopNav}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(item.path);
              }}
              className={`${styles.navItem} ${active === index ? styles.navItemActive : ""}`}
            >
              {item.label}
            </div>
          ))}
        </nav>

        {/* RIGHT */}
        <div className={styles.rightGroup}>
          {/* LANGUAGE SWITCH */}
          <div className={styles.languageSwitch}>
            <span
              onClick={() => navigate(getSwitchLink("vi"))}
              className={`${styles.languageItem} ${lang === "vi" ? styles.languageItemActive : ""}`}
            >
              Tiếng Việt
            </span>

            <span className={styles.languageDivider}>|</span>

            <span
              onClick={() => navigate(getSwitchLink("en"))}
              className={`${styles.languageItem} ${lang === "en" ? styles.languageItemActive : ""}`}
            >
              English
            </span>
          </div>

          {/* CTA */}
          {/* <button className="hidden md:block bg-primary-dark text-white px-4 py-2 rounded-md hover:bg-primary transition">
            {lang === 'en' ? 'Contact us' : 'Liên hệ tư vấn'}
          </button> */}

          {/* MOBILE MENU */}
          <button className={styles.mobileMenuButton} onClick={() => setOpenMenu(!openMenu)}>
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
              {item.label}
            </button>
          ))}

          {/* <button className="mt-3 w-full bg-primary-dark text-white px-4 py-2 rounded-md">
            {lang === 'en' ? 'Contact us' : 'Liên hệ tư vấn'}
          </button> */}
        </div>
      )}
    </header>
  );
};

export default Header;
