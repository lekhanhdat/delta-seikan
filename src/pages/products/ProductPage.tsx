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

const categories = [
  "TRÁNG PHỦ",
  "LON 2 MẢNH (DRD)",
  "LON 3 MẢNH",
  "NẮP EOE",
  "ĐÓNG GÓI & PHÂN PHỐI",
];

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
      <PageHero
        title="Sản phẩm"
        description="Chúng tôi cung cấp các giải pháp bao bì kim loại chất lượng cao, đáp ứng tiêu chuẩn an toàn thực phẩm và độ bền, phù hợp cho ngành thực phẩm và đồ uống."
        backgroundImage={hinh3}
      />

      {/* TABS */}
      <div className="sticky top-[var(--header-height)] z-40 border-b bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex justify-center">
            <div className="flex gap-6 md:gap-10 overflow-x-auto whitespace-nowrap no-scrollbar">
              {categories.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleScroll(index)}
                  className={`relative py-4 text-sm md:text-base font-medium transition
              ${
                active === index
                  ? "text-primary-dark"
                  : "text-gray-500 hover:text-primary-dark"
              }`}
                >
                  {item}

                  {/* underline */}
                  <span
                    className={`absolute left-0 bottom-0 h-[3px] w-full rounded-full transition-all duration-300
                ${
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
        {/* 1. TRÁNG PHỦ */}
        {/* 1. TRÁNG PHỦ */}
        <div
          ref={(el) => {
            sectionRefs.current[0] = el;
          }}
          style={{ scrollMarginTop: "calc(var(--header-height) + 120px)" }}
        >
          <ProductSection
            title="Dịch vụ Tráng phủ Kim loại"
            description="Với dây chuyền đồng bộ của KBA - LTG (Đức), các sản phẩm tráng phủ kim loại đáp ứng các tiêu chuẩn khắt khe của Châu Âu và Vương quốc Anh như BPA-NI, PFAS, đảm bảo an toàn thực phẩm và độ bền cao."
            images={[hinh9]}
          />
        </div>

        {/* 2. DRD */}
        <div ref={setRef(1)} className="scroll-mt-[calc(var(--header-height)+120px)]">
          <ProductSection
            title="Lon 2 mảnh – Lon DRD"
            description="Lon 2 mảnh (DRD – Drawn & Redrawn) được sản xuất bằng công nghệ dập vuốt hiện đại, mang lại độ bền cao, bề mặt mịn và khả năng chịu áp lực tốt. Sản phẩm phù hợp cho ngành thực phẩm và đồ uống."
            images={[hinh10, hinh11]}
            specImage={hinh12}
          />
        </div>

        {/* 3. LON 3 MẢNH */}
        <div ref={setRef(2)} className="scroll-mt-[calc(var(--header-height)+120px)]">
          <ProductSection
            title="Lon 3 mảnh"
            description="Lon 3 mảnh gồm thân, đáy và nắp được ghép nối chắc chắn, phù hợp với nhiều loại sản phẩm khác nhau. Giải pháp linh hoạt cho đóng gói thực phẩm như cá hộp, thịt hộp và các sản phẩm chế biến."
            images={[hinh13, hinh14]}
            specImage={hinh15}
          />
        </div>

        {/* 4. NẮP EOE */}
        <div ref={setRef(3)} className="scroll-mt-[calc(var(--header-height)+120px)]">
          <ProductSection
            title="Nắp EOE"
            description="Nắp EOE (Easy Open End) được thiết kế tiện lợi giúp người dùng dễ dàng mở mà không cần dụng cụ. Đảm bảo độ kín, an toàn và phù hợp với nhiều loại lon thực phẩm và đồ uống."
            images={[hinh16, hinh17]}
            specImage={hinh18}
          />
        </div>
        {/* 5. PACKAGING */}
        <div ref={setRef(4)} className="scroll-mt-[calc(var(--header-height)+120px)]">
          <ServiceSection
            title="Đóng gói & Phân phối"
            description="Để đảm bảo chất lượng và an toàn cho hàng hóa trong suốt quá trình bảo quản và vận chuyển đến khách hàng, các giải pháp đóng gói chuyên nghiệp, dễ dàng cho quá trình vận hành khi sử dụng, thân thiện với môi trường được cung cấp."
            items={[
              {
                title: "An toàn tuyệt đối",
                desc: "Đảm bảo chất lượng hàng hóa trong suốt quá trình vận chuyển",
                icon: "✓",
              },
              {
                title: "Dễ dàng vận hành",
                desc: "Thiết kế tối ưu giúp quá trình sử dụng thuận tiện",
                icon: "⚙",
              },
              {
                title: "Thân thiện môi trường",
                desc: "Giải pháp bền vững giảm tác động đến môi trường",
                icon: "🌱",
              },
            ]}
            badgeText="24/7"
            badgeSubText="Hỗ trợ vận hành liên tục"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
