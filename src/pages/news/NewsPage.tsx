import PageHero from "@/components/sections/PageHero/PageHero";
import newshinhanh from "@/assets/images/newshinhanh.jpg";
import strategyImage from "@/assets/images/strategyImage.png";
import news1 from "@/assets/images/news1.png";
import news2 from "@/assets/images/news2.png";
import news3 from "@/assets/images/news3.jpg";
import NewsIntro from "./components/NewsIntro/NewsIntro";
import NewsGrid from "./components/NewsGrid/NewsGrid";
import StrategyCard from "./components/StrategyCard/StrategyCard";
import { type NewsItem } from "./components/NewsCard/NewsCard";
import Footer from "@/components/layout/Footer/Footer";

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

const strategyContent = {
  image: strategyImage,
  title: "Delta Seikan công bố chiến lược chuyển đổi số trong sản xuất bao bì 2025",
  description:
    "Định hướng phát triển bền vững kết hợp cùng công nghệ tự động hóa AI giúp tối ưu hóa 25% hiệu năng vận hành và giảm thiểu rác thải kim loại trong quy trình sản xuất lên hai mạnh.",
  author: "Ban Truyền Thông",
  date: "20 Tháng 3, 2026",
  link: "#",
  };

const NewsPage = () => {
  return (
    <div className="page-snap-container">
      <PageHero
        title="Tin tức"
        description="Cập nhật những hoạt động nổi bật, thông tin chứng nhận và các xu hướng mới nhất trong lĩnh vực bao bì kim loại từ Delta Seikan."
        backgroundImage={newshinhanh}
      />

      <section className="w-full px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <StrategyCard { ...strategyContent } />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-20">
        <div className="rounded-3xl bg-gradient-to-b from-[#f7f9ff] to-white p-4 md:p-8">
          <NewsIntro
            label={introContent.label}
            title={introContent.title}
            description={introContent.description}
          />

          <NewsGrid items={newsItems} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsPage;
