import { useRef, useState } from "react";
import PageHero from "@/components/sections/PageHero/PageHero";
import ProductSection from "@/pages/products/components/ProductSection/ProductSection";
import ServiceSection from "@/pages/products/components/ServiceSection/ServiceSection";

import hinh3 from "@/assets/images/hinh3.jpg";
import hinh9 from "@/assets/images/hinh9.jpg";
import hinh10 from "@/assets/images/hinh10.jpg";
import hinh11 from "@/assets/images/hinh11.jpg";
import hinh12 from "@/assets/images/hinh12.jpg";
import hinh13 from "@/assets/images/hinh13.jpg";
import hinh14 from "@/assets/images/hinh14.jpg";
import hinh15 from "@/assets/images/hinh15.jpg";
import hinh16 from "@/assets/images/hinh16.jpg";
import hinh17 from "@/assets/images/hinh17.jpg";
import hinh18 from "@/assets/images/hinh18.jpg";

//
// 🔥 DATA (tách riêng giống Hero)
//

const heroContentVI = {
  title: "Sản phẩm",
  description:
    "Chúng tôi cung cấp các giải pháp bao bì kim loại chất lượng cao.",
  backgroundImage: hinh3,
};

const categories = [
  "TRÁNG PHỦ",
  "LON 2 MẢNH (DRD)",
  "LON 3 MẢNH",
  "NẮP EOE",
  "ĐÓNG GÓI & PHÂN PHỐI",
];

const coatingContent = {
  title: "Dịch vụ Tráng phủ Kim loại",
  description: "Đáp ứng tiêu chuẩn châu Âu, an toàn thực phẩm.",
  images: [hinh9],
};

const drdContent = {
  title: "Lon 2 mảnh – DRD",
  description: "Công nghệ hiện đại, độ bền cao.",
  images: [hinh10, hinh11],
  specImage: hinh12,
};

const threePieceContent = {
  title: "Lon 3 mảnh",
  description: "Giải pháp linh hoạt cho thực phẩm.",
  images: [hinh13, hinh14],
  specImage: hinh15,
};

const eoeContent = {
  title: "Nắp EOE",
  description: "Dễ mở, đảm bảo độ kín.",
  images: [hinh16, hinh17],
  specImage: hinh18,
};

const serviceContent = {
  title: "Đóng gói & Phân phối",
  description: "Giải pháp vận chuyển an toàn và bền vững.",
  items: [
    { title: "An toàn", desc: "Đảm bảo chất lượng", icon: "✓" },
    { title: "Tối ưu", desc: "Dễ vận hành", icon: "⚙" },
    { title: "Bền vững", desc: "Thân thiện môi trường", icon: "🌱" },
  ],
  badgeText: "24/7",
  badgeSubText: "Hỗ trợ liên tục",
};

//
// 🔥 COMPONENT
//

const ProductPage = () => {
  const [active, setActive] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = (index: number) => {
    setActive(index);
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    sectionRefs.current[index] = el;
  };
  return (
    <div>
      {/* HERO */}
      <PageHero {...heroContentVI} />

      {/* TABS */}
      <div className="sticky top-[var(--header-height)] z-40 border-b bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex justify-center">
            <div className="flex gap-6 md:gap-10 overflow-x-auto whitespace-nowrap no-scrollbar">
              {categories.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleScroll(index)}
                  className={`relative py-4 text-sm md:text-base font-medium transition ${
                    active === index
                      ? "text-primary-dark"
                      : "text-gray-500 hover:text-primary-dark"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute left-0 bottom-0 h-[3px] w-full rounded-full transition-all duration-300 ${
                      active === index
                        ? "bg-primary-dark scale-x-100"
                        : "bg-transparent scale-x-0"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="space-y-20 py-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div
          ref={setRef(0)}
          className="scroll-mt-[calc(var(--header-height)+20px)]"
        >
          <ProductSection {...coatingContent} />
        </div>

        <div
          ref={setRef(1)}
          className="scroll-mt-[calc(var(--header-height)+20px)]"
        >
          <ProductSection {...drdContent} />
        </div>

        <div
          ref={setRef(2)}
          className="scroll-mt-[calc(var(--header-height)+20px)]"
        >
          <ProductSection {...threePieceContent} />
        </div>

        <div
          ref={setRef(3)}
          className="scroll-mt-[calc(var(--header-height)+20px)]"
        >
          <ProductSection {...eoeContent} />
        </div>

        <div
          ref={setRef(4)}
          className="scroll-mt-[calc(var(--header-height)+20px)]"
        >
          <ServiceSection {...serviceContent} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
