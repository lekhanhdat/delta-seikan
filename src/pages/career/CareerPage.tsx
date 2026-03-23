import PageHero from "@/components/sections/PageHero/PageHero";
import hinh21 from "@/assets/images/hinh21.jpg";

import CareerHighlights from "./components/CareerHighlights/CareerHighlights";
import CareerBlog from "./components/CareerBlog/CareerBlog";
import Footer from "@/components/layout/Footer/Footer";

const CareerPage = () => {
  const highlightsData = [
    {
      title: "Môi trường làm việc",
      desc: "Kiến tạo không gian chuyên nghiệp, nơi sự đổi mới và kỷ luật song hành.",
    },
    {
      title: "Cơ hội phát triển",
      desc: "Lộ trình thăng tiến minh bạch cùng đào tạo chuyên sâu.",
      highlight: true,
    },
    {
      title: "Cẩm nang nghề nghiệp",
      desc: "Nguồn cảm hứng và kiến thức thực tiễn.",
    },
  ];

  // 👉 BLOG DATA chuyển ra đây
  const blogData = [
    {
      title: "6 yếu tố bù đắp sự thiếu hụt kinh nghiệm",
      tag: "KỸ NĂNG MỀM",
      link: "https://careerviet.vn/vi/talentcommunity/6-yeu-to-bu-dap-su-thieu-hut-kinh-nghiem-trong-cv.35A5147F.html",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      title: "Hiểu Millennials & Gen Z trong sản xuất",
      tag: "THẾ HỆ",
      link: "https://www.123job.vn/bai-viet/the-he-millennials-la-gi-nhung-suy-nghi-va-mong-muon-cua-ho-la-gi-1681.html",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      title: "Hiểu chính mình để chọn đúng công việc",
      tag: "PHÁT TRIỂN",
      link: "https://tuyendung.duytan.com/cam-nang/hieu-duoc-chinh-minh-de-chon-dung-nganh-nghe.35a532f5/vi",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    },
  ];

  return (
    <div className="page-snap-container">
      <PageHero
        title="Tuyển Dụng"
        description="Chúng tôi luôn chào đón những cá nhân tài năng, nhiệt huyết và sẵn sàng đồng hành cùng doanh nghiệp trên hành trình phát triển bền vững. Đây là nơi bạn có thể phát huy năng lực và xây dựng sự nghiệp lâu dài."
        backgroundImage={hinh21}
      />

      <CareerHighlights data={highlightsData} />

      <CareerBlog data={blogData} />

      <Footer />
    </div>
  );
};

export default CareerPage;
