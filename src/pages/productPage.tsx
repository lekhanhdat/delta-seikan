import { useState } from "react";
import PageHero from "../components/PageHero";

const categories = [
  "TRÁNG PHỦ",
  "LON 2 MẢNH (DRD)",
  "LON 3 MẢNH",
  "NẮP EOE",
  "ĐÓNG GÓI & PHÂN PHỐI",
];

const ProductPage = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="home-page z-0">
      {/* HERO */}
      <PageHero
        title="Sản phẩm"
        description="Các giải pháp bao bì kim loại được phát triển cho nhu cầu bảo quản thực phẩm, nước giải khát và công nghiệp với tiêu chuẩn kỹ thuật khắt khe nhất thế giới."
        backgroundImage="https://cdn.24h.com.vn/upload/4-2024/images/2024-12-31/Bao-bi-Vinpack-huong-toi-cac-san-pham-than-thien-voi-moi-truong-bao-bi-3-1735639295-73-width1000height667.jpg"
      />

      {/* CATEGORY TABS */}
      <div className="bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex gap-5 md:gap-10 overflow-x-auto whitespace-nowrap no-scrollbar">
            {categories.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`relative py-4 md:py-5 text-sm md:text-base font-medium transition-all duration-300
                  ${
                    active === index
                      ? "text-primary-dark"
                      : "text-gray-600 hover:text-primary"
                  }`}
              >
                {item}

                {/* underline */}
                {active === index && (
                  <span className="absolute left-0 bottom-0 w-full h-[3px] bg-primary-dark rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT DEMO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-primary-dark">
          {categories[active]}
        </h2>
        <p className="text-sm md:text-base text-gray-600">
          Nội dung sản phẩm sẽ hiển thị tại đây...
        </p>
      </div>
    </div>
  );
};

export default ProductPage;