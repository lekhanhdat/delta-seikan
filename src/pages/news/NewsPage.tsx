import PageHero from "@/components/sections/PageHero/PageHero";
import newshinhanh from "@/assets/images/newshinhanh.jpg";
import news1 from "@/assets/images/news1.png";
import news2 from "@/assets/images/news2.png";
import news3 from "@/assets/images/news3.jpg";
import NewsGrid from "./components/NewsGrid/NewsGrid";
import { type NewsItem } from "./components/NewsCard/NewsCard";
import Footer from "@/components/layout/Footer/Footer";
import styles from "./NewsPage.module.css";

const introContent = {
  label: "Bản tin doanh nghiệp",
  title: "Điểm tin mới nhất từ Delta Seikan",
  description:
    "Chúng tôi liên tục cập nhật thông tin về năng lực sản xuất, tiêu chuẩn chất lượng và các hoạt động hợp tác nhằm mang đến giải pháp bao bì kim loại an toàn, bền vững cho khách hàng.",
};

const newsItems: NewsItem[] = [
  {
    title: "6 xu hướng bao bì dự kiến dẫn dắt năm 2026",
    tag: "Xu hướng",
    date: "Tháng 03/2026",
    desc: "Tổng hợp các xu hướng bao bì nổi bật như bền vững, thông minh và cá nhân hóa đang định hình thị trường toàn cầu.",
    link: "https://reads.alibaba.com/vi/unwrapping-the-future-6-packaging-trends-set-to-dominate-2026/",
    image: news1,
  },
  {
    title: "Báo cáo thị trường bao bì kim loại toàn cầu",
    tag: "Thị trường",
    date: "Tháng 02/2026",
    desc: "Phân tích quy mô, tốc độ tăng trưởng và các động lực chính của ngành bao bì kim loại trong giai đoạn tới.",
    link: "https://www.mordorintelligence.com/industry-reports/metal-packaging-market",
    image: news2,
  },
  {
    title: "Thành lập công đoàn cơ sở tại Delta Seikan",
    tag: "Doanh nghiệp",
    date: "Tháng 01/2026",
    desc: "Liên đoàn Lao động huyện Phú Giáo công bố thành lập công đoàn cơ sở, đánh dấu bước phát triển mới trong hoạt động nội bộ.",
    link: "https://accbinhduong.vn/lien-doan-lao-dong-huyen-phu-giao-thanh-lap-cong-doan-co-so-tai-cong-ty-co-phan-delta-seikan/",
    image: news3,
  },
];

const NewsPage = () => {
  return (
    <div className="page-snap-container">
      <PageHero
        title={introContent.title}
        description={introContent.description}
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
