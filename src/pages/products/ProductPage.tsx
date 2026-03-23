import { useEffect, useRef, useState } from "react";
import PageHero from "@/components/sections/PageHero/PageHero";
import ServiceSection from "@/pages/products/components/ServiceSection/ServiceSection";
import ProductTabs from "@/pages/products/components/ProductTabs/ProductTabs";
import ProductSectionClassic from "@/pages/products/components/ProductSection/ProductSectionClassic";
import ProductSectionReverse from "@/pages/products/components/ProductSection/ProductSectionReverse";
import ProductSectionFeature from "@/pages/products/components/ProductSection/ProductSectionFeature";
import ProductSectionStacked from "@/pages/products/components/ProductSection/ProductSectionStacked";
import { type ProductSectionProps } from "@/pages/products/components/ProductSection/types";
import Footer from "@/components/layout/Footer/Footer";

import hinh3 from "@/assets/images/hinh3.jpg";
import hinh9 from "@/assets/images/hinh9.jpg";
import hinh10 from "@/assets/images/hinh10.jpg";
import hinh11 from "@/assets/images/hinh11.JPG";
import hinh12 from "@/assets/images/hinh12.jpg";
import hinh13 from "@/assets/images/hinh13.jpg";
import hinh14 from "@/assets/images/hinh14.jpg";
import hinh15 from "@/assets/images/hinh15.jpg";
import hinh16 from "@/assets/images/hinh16.jpg";
import hinh17 from "@/assets/images/hinh17.jpg";
import hinh18 from "@/assets/images/hinh18.jpg";
import hinh19 from "@/assets/images/hinh19.JPG";

import styles from "./ProductPage.module.css";

// ================= TYPES =================

type ProductSectionType = {
  type: "product";
  tab: string;
  variant: "classic" | "reverse" | "feature" | "stacked";
  props: ProductSectionProps;
};

type ServiceSectionType = {
  type: "service";
  tab: string;
  props: {
    title: string;
    description: string;
    items: {
      title: string;
      desc: string;
      icon: string;
    }[];
    badgeText: string;
    badgeSubText: string;
    image?: string;
  };
};

type Section = ProductSectionType | ServiceSectionType;

// ================= DATA =================

const sections: Section[] = [
  {
    type: "product",
    tab: "TRÁNG PHỦ",
    variant: "classic",
    props: {
      title: "Dịch vụ Tráng phủ Kim loại",
      description:
        "Delta Seikan cung cấp dịch vụ tráng phủ kim loại với công nghệ hiện đại từ KBA - LTG (Đức), đảm bảo độ bám dính cao, khả năng chống ăn mòn vượt trội và an toàn cho thực phẩm. Các sản phẩm đáp ứng các tiêu chuẩn quốc tế nghiêm ngặt như BPA-NI, PFAS-free, phù hợp cho ngành thực phẩm và đồ uống.",
      images: [hinh9],
    },
  },

  {
    type: "product",
    tab: "LON 2 MẢNH (DRD)",
    variant: "stacked",
    props: {
      title: "Lon 2 mảnh – Công nghệ DRD",
      description:
        "Lon 2 mảnh (DRD – Drawn & Redrawn) được sản xuất bằng công nghệ dập vuốt tiên tiến, giúp tối ưu độ bền cơ học, giảm thiểu mối ghép và đảm bảo tính kín tuyệt đối. Sản phẩm phù hợp cho các loại thực phẩm đóng hộp, mang lại hiệu quả bảo quản cao và tối ưu chi phí sản xuất.",
      images: [hinh10, hinh11],
      specImage: hinh12,
    },
  },

  {
    type: "product",
    tab: "LON 3 MẢNH",
    variant: "reverse",
    props: {
      title: "Lon 3 mảnh",
      description:
        "Lon 3 mảnh được cấu tạo từ thân, đáy và nắp, liên kết bằng công nghệ hàn hiện đại, đảm bảo độ kín và độ bền cao. Giải pháp linh hoạt về kích thước và dung tích, phù hợp với nhiều loại sản phẩm từ thực phẩm đến hóa chất công nghiệp.",
      images: [hinh13, hinh14],
      specImage: hinh15,
    },
  },

  {
    type: "product",
    tab: "NẮP EOE",
    variant: "feature",
    props: {
      title: "Nắp EOE (Easy Open End)",
      description:
        "Nắp EOE được thiết kế với cơ chế mở dễ dàng, mang lại trải nghiệm tiện lợi cho người dùng mà vẫn đảm bảo độ kín và an toàn sản phẩm. Sản phẩm được sản xuất theo tiêu chuẩn quốc tế, phù hợp cho nhiều loại lon thực phẩm và đồ uống.",
      images: [hinh16, hinh17],
      specImage: hinh18,
    },
  },

  {
    type: "service",
    tab: "ĐÓNG GÓI & PHÂN PHỐI",
    props: {
      title: "Giải pháp Đóng gói & Phân phối",
      description:
        "Delta Seikan cung cấp giải pháp đóng gói và phân phối toàn diện, giúp tối ưu chuỗi cung ứng, nâng cao hiệu quả vận hành và đảm bảo chất lượng sản phẩm trong suốt quá trình lưu trữ và vận chuyển.",
      items: [
        {
          title: "An toàn tuyệt đối",
          desc: "Quy trình kiểm soát nghiêm ngặt, đảm bảo chất lượng và an toàn sản phẩm trong mọi điều kiện.",
          icon: "✓",
        },
        {
          title: "Tối ưu vận hành",
          desc: "Thiết kế linh hoạt, dễ tích hợp vào hệ thống sản xuất và logistics hiện có.",
          icon: "⚙",
        },
        {
          title: "Bền vững & thân thiện",
          desc: "Giải pháp hướng đến giảm thiểu tác động môi trường và phát triển bền vững.",
          icon: "🌱",
        },
      ],
      badgeText: "24/7",
      badgeSubText: "Hỗ trợ vận hành liên tục và kịp thời",
      image: hinh19,
    },
  },
];

// ================= COMPONENT =================

const ProductPage = () => {
  const [active, setActive] = useState(0);
  const pageRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lockActiveUntilRef = useRef(0);

  const categories = sections.map((s) => s.tab);

  const handleTabChange = (index: number) => {
    lockActiveUntilRef.current = Date.now() + 600;
    setActive(index);

    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const scrollContainer = pageRef.current;
    if (!scrollContainer) return;

    let ticking = false;

    const updateActiveSection = () => {
      if (Date.now() < lockActiveUntilRef.current) {
        ticking = false;
        return;
      }

      const sections = sectionRefs.current;
      const tabsElement = scrollContainer.querySelector<HTMLElement>(
        '[data-product-tabs="true"]',
      );
      const tabsHeight = tabsElement?.offsetHeight ?? 0;
      const containerTop = scrollContainer.getBoundingClientRect().top;
      const offsetTop = containerTop + tabsHeight + 24;

      let nextActive = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      for (let i = 0; i < sections.length; i += 1) {
        const el = sections[i];
        if (!el) continue;

        const { top } = el.getBoundingClientRect();
        const distance = Math.abs(top - offsetTop);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nextActive = i;
        }
      }

      setActive((prev) => (prev === nextActive ? prev : nextActive));
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateActiveSection);
    };

    scrollContainer.addEventListener("scroll", onScroll, { passive: true });
    updateActiveSection();

    return () => {
      scrollContainer.removeEventListener("scroll", onScroll);
    };
  }, []);

  const renderProductSection = (
    variant: ProductSectionType["variant"],
    props: ProductSectionProps,
  ) => {
    if (variant === "reverse") {
      return <ProductSectionReverse {...props} />;
    }

    if (variant === "feature") {
      return <ProductSectionFeature {...props} />;
    }

    if (variant === "stacked") {
      return <ProductSectionStacked {...props} />;
    }

    return <ProductSectionClassic {...props} />;
  };

  return (
    <div ref={pageRef} className={styles.productPage}>
      {/* HERO */}
      <PageHero
        title="Sản phẩm"
        description="Chúng tôi cung cấp các giải pháp bao bì kim loại chất lượng cao, đáp ứng tiêu chuẩn quốc tế và nhu cầu đa dạng của khách hàng. Với công nghệ hiện đại và quy trình sản xuất nghiêm ngặt, mỗi sản phẩm đều đảm bảo độ bền, tính an toàn và hiệu quả trong quá trình sử dụng."
        backgroundImage={hinh3}
      />

      {/* TABS */}
      <ProductTabs
        categories={categories}
        active={active}
        onChange={handleTabChange}
      />

      {/* CONTENT */}
      <div className={styles.productContent}>
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className={styles.productSectionOffset}
          >
            {section.type === "product" ? (
              renderProductSection(section.variant, section.props)
            ) : (
              <ServiceSection {...section.props} />
            )}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
