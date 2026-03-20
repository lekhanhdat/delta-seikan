import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logoColor from "../../assets/images/logoColor.jpg";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const lang = pathname.startsWith("/en") ? "en" : "vi";

  const [style, setStyle] = useState({ left: 0, width: 0 });
  const [openMenu, setOpenMenu] = useState(false);

  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const menu = {
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
  };

  const menuItems = menu[lang];
  const active = Math.max(
    menuItems.findIndex((item) => item.path === pathname),
    0
  );

  useEffect(() => {
    const el = refs.current[active];
    if (el) {
      setStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [active, pathname]);

  const getSwitchLink = (targetLang: "vi" | "en") => {
    if (targetLang === "en") {
      if (pathname.startsWith("/en")) return pathname;
      return pathname === "/" ? "/en" : `/en${pathname}`;
    }
    return pathname.replace(/^\/en/, "") || "/";
  };

  return (
    <header className="fixed top-0 left-0 w-full h-[80px] z-50 bg-[#f6f7fb] border-b shadow-sm">
      <div className="w-full h-full px-4 md:px-6 lg:px-10 flex items-center justify-between">
        {/* LOGO */}
        <a
          href={lang === "en" ? "/en" : "/"}
          onClick={(e) => {
            e.preventDefault();
            navigate(lang === "en" ? "/en" : "/");
          }}
        >
          <img
            src={logoColor}
            alt="Delta Seikan"
            className="h-10 md:h-12 lg:h-16"
          />
        </a>

        {/* NAV DESKTOP */}
        <nav className="relative hidden md:flex items-center gap-6 lg:gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) refs.current[index] = el;
              }}
              onClick={() => {
                navigate(item.path);
              }}
              className={`cursor-pointer font-medium transition
                ${active === index ? "text-primary-dark" : "text-gray-500 hover:text-primary-dark"}`}
            >
              {item.label}
            </div>
          ))}

          <span
            className="absolute bottom-0 h-[2px] bg-primary-dark transition-all duration-300"
            style={{
              left: style.left,
              width: style.width,
            }}
          />
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* LANGUAGE SWITCH */}
          <div className="flex items-center gap-2 text-sm font-medium">
            <span
              onClick={() => navigate(getSwitchLink("vi"))}
              className={`cursor-pointer transition ${
                lang === "vi"
                  ? "text-primary-dark font-semibold"
                  : "text-gray-500 hover:text-primary-dark"
              }`}
            >
              Tiếng Việt
            </span>

            <span className="text-gray-400">|</span>

            <span
              onClick={() => navigate(getSwitchLink("en"))}
              className={`cursor-pointer transition ${
                lang === "en"
                  ? "text-primary-dark font-semibold"
                  : "text-gray-500 hover:text-primary-dark"
              }`}
            >
              English
            </span>
          </div>

          {/* CTA */}
          {/* <button className="hidden md:block bg-primary-dark text-white px-4 py-2 rounded-md hover:bg-primary transition">
            {lang === 'en' ? 'Contact us' : 'Liên hệ tư vấn'}
          </button> */}

          {/* MOBILE MENU */}
          <button className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {openMenu && (
        <div className="md:hidden px-4 pb-4 border-t bg-[#f6f7fb]">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                navigate(item.path);
                setOpenMenu(false);
              }}
              className="block w-full text-left py-2"
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
