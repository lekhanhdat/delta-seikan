import PageHero from "@/components/sections/PageHero/PageHero";
import hinh19 from "@/assets/images/hinh19.JPG";

import CareerHighlights from "./components/CareerHighlights/CareerHighlights";
import CareerBlog from "./components/CareerBlog/CareerBlog";
import JobList from "./components/JobList/JobList";

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

  const jobData = [
  {
    title: "Kỹ sư Vận hành Máy",
    desc: "Chịu trách nhiệm giám sát và điều chỉnh hệ thống dây chuyền sản xuất lon nhôm.",
    location: "TP. Hồ Chí Minh",
    salary: "Cạnh tranh",
    type: "TOÀN THỜI GIAN",
  },
  {
    title: "Chuyên viên Kiểm soát Chất lượng (QC)",
    desc: "Thực hiện kiểm định các tiêu chuẩn kỹ thuật nghiêm ngặt của sản phẩm.",
    location: "TP. Hồ Chí Minh",
    salary: "Thỏa thuận",
    type: "TOÀN THỜI GIAN",
  },
  {
    title: "Trưởng nhóm Điều phối Chuỗi cung ứng",
    desc: "Quản lý và tối ưu hóa quy trình luân chuyển nguyên vật liệu.",
    location: "TP. Hồ Chí Minh",
    salary: "Cạnh tranh",
    type: "TOÀN THỜI GIAN",
  },
];

  return (
    <div>
      <PageHero
        title="Tuyển Dụng"
        description="Chúng tôi luôn tìm kiếm những nhân sự tài năng, nhiệt huyết và sẵn sàng phát triển cùng doanh nghiệp."
        backgroundImage={hinh19}
      />

      <CareerHighlights data={highlightsData} />

      {/* 👉 truyền data vào */}
      <CareerBlog data={blogData} />

      <JobList data={jobData} />
    </div>
  );
};

export default CareerPage;
