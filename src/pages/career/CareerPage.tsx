import PageHero from "@/components/sections/PageHero/PageHero";
import hinh21 from "@/assets/images/hinh21.jpg";

import CareerHighlights from "./components/CareerHighlights/CareerHighlights";
import CareerBlog from "./components/CareerBlog/CareerBlog";
import Footer from "@/components/layout/Footer/Footer";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import styles from "./CareerPage.module.css";

const CareerPage = () => {
  const { t } = useTranslation("career");

  const highlightsData = useMemo(() => [
    {
      title: t("highlights.0.title"),
      desc: t("highlights.0.desc"),
    },
    {
      title: t("highlights.1.title"),
      desc: t("highlights.1.desc"),
      highlight: true,
    },
    {
      title: t("highlights.2.title"),
      desc: t("highlights.2.desc"),
    },
  ], [t]);

  // 👉 BLOG DATA chuyển ra đây
  const blogData = useMemo(() => [
    {
      title: t("blog.items.0.title"),
      tag: t("blog.items.0.tag"),
      link: "https://careerviet.vn/vi/talentcommunity/6-yeu-to-bu-dap-su-thieu-hut-kinh-nghiem-trong-cv.35A5147F.html",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      title: t("blog.items.1.title"),
      tag: t("blog.items.1.tag"),
      link: "https://www.123job.vn/bai-viet/the-he-millennials-la-gi-nhung-suy-nghi-va-mong-muon-cua-ho-la-gi-1681.html",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      title: t("blog.items.2.title"),
      tag: t("blog.items.2.tag"),
      link: "https://tuyendung.duytan.com/cam-nang/hieu-duoc-chinh-minh-de-chon-dung-nganh-nghe.35a532f5/vi",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    },
  ], [t]);

  return (
    <div className={`page-snap-container ${styles.page}`}>
      <PageHero
        title={t("hero.title")}
        description={t("hero.description")}
        backgroundImage={hinh21}
      />

      <CareerHighlights data={highlightsData} />

      <CareerBlog data={blogData} />

      <Footer />
    </div>
  );
};

export default CareerPage;
