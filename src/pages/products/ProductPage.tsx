import { useEffect, useRef, useState, useMemo } from "react";
import PageHero from "@/components/sections/PageHero/PageHero";
import ServiceSection from "@/pages/products/components/ServiceSection/ServiceSection";
import ProductTabs from "@/pages/products/components/ProductTabs/ProductTabs";
import ProductSectionClassic from "@/pages/products/components/ProductSection/ProductSectionClassic";
import ProductSectionReverse from "@/pages/products/components/ProductSection/ProductSectionReverse";
import ProductSectionFeature from "@/pages/products/components/ProductSection/ProductSectionFeature";
import ProductSectionStacked from "@/pages/products/components/ProductSection/ProductSectionStacked";
import { type ProductSectionProps } from "@/pages/products/components/ProductSection/types";
import Footer from "@/components/layout/Footer/Footer";
import { useTranslation } from "react-i18next";

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

// ================= COMPONENT =================

const ProductPage = () => {
  const { t } = useTranslation("product");
  const [active, setActive] = useState(0);
  const pageRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lockActiveUntilRef = useRef(0);

  // ================= DATA (Move inside component) =================
  const sections: Section[] = useMemo(() => [
    {
      type: "product",
      tab: t("sections.trangPhu.tab"),
      variant: "classic",
      props: {
        title: t("sections.trangPhu.title"),
        description: t("sections.trangPhu.desc"),
        images: [hinh9],
      },
    },
    {
      type: "product",
      tab: t("sections.lon2manh.tab"),
      variant: "stacked",
      props: {
        title: t("sections.lon2manh.title"),
        description: t("sections.lon2manh.desc"),
        images: [hinh10, hinh11],
        specImage: hinh12,
      },
    },
    {
      type: "product",
      tab: t("sections.lon3manh.tab"),
      variant: "reverse",
      props: {
        title: t("sections.lon3manh.title"),
        description: t("sections.lon3manh.desc"),
        images: [hinh13, hinh14],
        specImage: hinh15,
      },
    },
    {
      type: "product",
      tab: t("sections.napEOE.tab"),
      variant: "feature",
      props: {
        title: t("sections.napEOE.title"),
        description: t("sections.napEOE.desc"),
        images: [hinh16, hinh17],
        specImage: hinh18,
      },
    },
    {
      type: "service",
      tab: t("sections.dichVu.tab"),
      props: {
        title: t("sections.dichVu.title"),
        description: t("sections.dichVu.desc"),
        items: [
          {
            title: t("sections.dichVu.i1"),
            desc: t("sections.dichVu.i1Desc"),
            icon: "✓",
          },
          {
            title: t("sections.dichVu.i2"),
            desc: t("sections.dichVu.i2Desc"),
            icon: "⚙",
          },
          {
            title: t("sections.dichVu.i3"),
            desc: t("sections.dichVu.i3Desc"),
            icon: "🌱",
          },
        ],
        badgeText: t("sections.dichVu.badge"),
        badgeSubText: t("sections.dichVu.badgeSub"),
        image: hinh19,
      },
    },
  ], [t]);

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
        title={t("hero.title")}
        description={t("hero.description")}
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
