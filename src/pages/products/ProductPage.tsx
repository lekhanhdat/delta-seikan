import { useEffect, useRef, useState } from "react";
import PageHero from "@/components/sections/PageHero/PageHero";
import ServiceSection from "@/pages/products/components/ServiceSection/ServiceSection";
import ProductTabs from "@/pages/products/components/ProductTabs/ProductTabs";
import ProductSectionClassic from "@/pages/products/components/ProductSection/ProductSectionClassic";
import ProductSectionReverse from "@/pages/products/components/ProductSection/ProductSectionReverse";
import ProductSectionFeature from "@/pages/products/components/ProductSection/ProductSectionFeature";
import ProductSectionStacked from "@/pages/products/components/ProductSection/ProductSectionStacked";
import { type ProductSectionProps } from "@/pages/products/components/ProductSection/types";

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
import hinh19 from "@/assets/images/hinh19.jpg";

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
    variant: "feature",
    props: {
      title: "Dịch vụ Tráng phủ Kim loại",
      description:
        "Với dây chuyền đồng bộ của KBA - LTG (Đức), các sản phẩm tráng phủ kim loại đáp ứng các tiêu chuẩn khắt khe của Châu Âu và Vương quốc Anh như BPA-NI, PFAS.",
      images: [hinh9],
    },
  },
  {
    type: "product",
    tab: "LON 2 MẢNH (DRD)",
    variant: "stacked",
    props: {
      title: "Lon 2 mảnh – Lon DRD",
      description:
        "Lon 2 mảnh (DRD – Drawn & Redrawn) được sản xuất bằng công nghệ dập vuốt hiện đại.",
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
      description: "Lon 3 mảnh gồm thân, đáy và nắp được ghép nối chắc chắn.",
      images: [hinh13, hinh14],
      specImage: hinh15,
    },
  },
  {
    type: "product",
    tab: "NẮP EOE",
    variant: "feature",
    props: {
      title: "Nắp EOE",
      description:
        "Nắp EOE (Easy Open End) được thiết kế tiện lợi giúp người dùng dễ dàng mở.",
      images: [hinh16, hinh17],
      specImage: hinh18,
    },
  },
  {
    type: "service",
    tab: "ĐÓNG GÓI & PHÂN PHỐI",
    props: {
      title: "Đóng gói & Phân phối",
      description:
        "Các giải pháp đóng gói chuyên nghiệp, dễ vận hành và thân thiện môi trường.",
      items: [
        {
          title: "An toàn tuyệt đối",
          desc: "Đảm bảo chất lượng hàng hóa",
          icon: "✓",
        },
        {
          title: "Dễ dàng vận hành",
          desc: "Thiết kế tối ưu",
          icon: "⚙",
        },
        {
          title: "Thân thiện môi trường",
          desc: "Giải pháp bền vững",
          icon: "🌱",
        },
      ],
      badgeText: "24/7",
      badgeSubText: "Hỗ trợ vận hành liên tục",
      image: hinh19,
    },
  },
];

// ================= COMPONENT =================

const ProductPage = () => {
  const [active, setActive] = useState(0);
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
    let ticking = false;

    const updateActiveSection = () => {
      if (Date.now() < lockActiveUntilRef.current) {
        ticking = false;
        return;
      }

      const sections = sectionRefs.current;
      const rootStyles = getComputedStyle(document.documentElement);
      const headerHeight = parseInt(
        rootStyles.getPropertyValue("--header-height").replace("px", "").trim(),
        10
      );
      const offsetTop = (Number.isNaN(headerHeight) ? 80 : headerHeight) + 120;

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

    window.addEventListener("scroll", onScroll, { passive: true });
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const renderProductSection = (
    variant: ProductSectionType["variant"],
    props: ProductSectionProps
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
    <div className={styles.productPage}>
      {/* HERO */}
      <PageHero
        title="Sản phẩm"
        description="Chúng tôi cung cấp các giải pháp bao bì kim loại chất lượng cao..."
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
    </div>
  );
};

export default ProductPage;
