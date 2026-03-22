import { FiAward, FiLink } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

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
    <footer className="w-full bg-primary-dark text-white">
      
      {/* TOP */}
      <div className="w-full px-4 sm:px-6 md:px-10 py-12 md:py-16 lg:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-8 md:gap-10 lg:gap-12">
        
        {/* Column 1 */}
        <div className="lg:col-span-3">
          <h2 className="font-bold text-lg sm:text-xl mb-3 md:mb-4 tracking-wide">
            DELTA SEIKAN
          </h2>

          <p className="text-white/70 leading-relaxed mb-5 md:mb-6 text-sm md:text-[15px]">
            {t.desc}
          </p>

          <div className="flex gap-4">
            {[FiAward, FiLink].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 border border-white/30 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="lg:col-span-2">
          <h3 className="font-semibold mb-5 tracking-widest text-xs text-white/80">
            {t.explore}
          </h3>

          <ul className="space-y-3">
            {exploreLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="inline-block text-white transition-all duration-200 hover:text-[var(--primary)] hover:translate-x-1"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div className="lg:col-span-2">
          <h3 className="font-semibold mb-5 tracking-widest text-xs text-white/80">
            {t.products}
          </h3>

          <ul className="space-y-3">
            {productLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="inline-block text-white transition-all duration-200 hover:text-[var(--primary)] hover:translate-x-1"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div className="lg:col-span-3">
          <h3 className="font-semibold mb-5 tracking-widest text-xs text-white/80">
            {t.location}
          </h3>

          <div className="space-y-4 text-white">
            <div>
              <p className="font-semibold mb-1">{t.office}</p>
              <p className="text-white/70 text-sm">
                602/32 Điện Biên Phủ, Phường 22, Bình Thạnh, HCMC
              </p>
            </div>

            <div>
              <p className="font-semibold mb-1">{t.factory}</p>
              <p className="text-white/70 text-sm">
                Lot A, Tam Lap Industrial Cluster, Binh Duong
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      {/* BOTTOM */}
      <div className="px-4 sm:px-6 md:px-10 py-5 md:py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-xs sm:text-sm text-white/70">
        
        <p className="text-left md:text-center">
          © 2026 DELTA SEIKAN CORPORATION. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;