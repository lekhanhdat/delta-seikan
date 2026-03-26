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
      variant: "stacked",
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
      variant: "stacked",
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
    // Lock auto-update while manual scrolling
    lockActiveUntilRef.current = Date.now() + 1000;
    setActive(index);

    const target = sectionRefs.current[index];
    if (target) {
      const isDesktop = window.innerWidth >= 1024;
      if (isDesktop) {
        // Smooth scroll within the container for desktop
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        // For mobile/tablet, we need to account for fixed header + sticky tabs
        const HEADER_HEIGHT = 80;
        const TABS_HEIGHT = 56;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - (HEADER_HEIGHT + TABS_HEIGHT);

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    // Determine the scroll container: the window for mobile/tablet, the div.productPage for desktop.
    const updateActiveSection = () => {
      // Don't update during manual tab click scroll
      if (Date.now() < lockActiveUntilRef.current) return;

      const HEADER_HEIGHT = 80;
      const TABS_HEIGHT = 56;
      // Intersection observer-like logic: find the section that is currently crossing the threshold
      const threshold = HEADER_HEIGHT + TABS_HEIGHT + 100;

      let currentActive = 0;
      
      // We iterate through sections to find the one that is currently "active"
      // A section is active if its top is above the threshold
      for (let i = 0; i < sectionRefs.current.length; i++) {
        const el = sectionRefs.current[i];
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        
        // If the top of the section has passed the threshold, it's a candidate
        if (rect.top <= threshold) {
          currentActive = i;
        } else {
          // Since sections are in order, once we find one below the threshold, 
          // we don't need to check further ones
          break;
        }
      }

      setActive(currentActive);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    const desktopContainer = pageRef.current;
    
    // Always listen to global window scroll for mobile/tablet behavior
    window.addEventListener("scroll", onScroll, { passive: true });
    // Also listen to the specific desktop container if it's the one scrolling
    if (desktopContainer) {
      desktopContainer.addEventListener("scroll", onScroll, { passive: true });
    }

    // Initial check
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (desktopContainer) {
        desktopContainer.removeEventListener("scroll", onScroll);
      }
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
