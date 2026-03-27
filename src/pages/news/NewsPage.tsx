import PageHero from "@/components/sections/PageHero/PageHero";
import newshinhanh from "@/assets/images/newshinhanh.jpg";
import news2 from "@/assets/images/news2.png";
import news3 from "@/assets/images/news3.jpg";
import NewsGrid from "./components/NewsGrid/NewsGrid";
import { type NewsItem } from "./components/NewsCard/NewsCard";
import Footer from "@/components/layout/Footer/Footer";
import styles from "./NewsPage.module.css";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

const NewsPage = () => {
  const { t } = useTranslation("news");

  const newsItems: NewsItem[] = useMemo(() => [
    {
      title: t("items.0.title"),
      tag: t("items.0.tag"),
      date: t("items.0.date"),
      desc: t("items.0.desc"),
      link: "https://www.mordorintelligence.com/industry-reports/metal-packaging-market",
      image: news2,
    },
    {
      title: t("items.1.title"),
      tag: t("items.1.tag"),
      date: t("items.1.date"),
      desc: t("items.1.desc"),
      link: "https://accbinhduong.vn/lien-doan-lao-dong-huyen-phu-giao-thanh-lap-cong-doan-co-so-tai-cong-ty-co-phan-delta-seikan/",
      image: news3,
    },
  ], [t]);

  return (
    <div className="page-snap-container">
      <PageHero
        title={t("hero.title")}
        description={t("hero.description")}
        backgroundImage={newshinhanh}
      />

      <section className={styles.newsSection}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-12 ${styles.container}`}>
          <div className={styles.inner}>
            <NewsGrid items={newsItems} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsPage;
