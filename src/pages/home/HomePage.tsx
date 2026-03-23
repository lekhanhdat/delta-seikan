import Hero from "./components/Hero/Hero";
import AboutSection from "./components/AboutSection/AboutSection";
import FeatureCards from "./components/FeatureCards/FeatureCards";
import CapabilitySection from "./components/CapabilitySection/CapabilitySection";
import TimelineSection from "./components/TimelineSection/TimelineSection";
import Footer from "@/components/layout/Footer/Footer";

import { FiActivity, FiTool, FiShield, FiUsers } from "react-icons/fi";

import hinh6 from "@/assets/images/hinh6.JPG";
import mission from "@/assets/images/mission.png";
import vision from "@/assets/images/vision.png";
import values from "@/assets/images/values.png";

//
// 🔥 DATA (tách riêng giống hero)
//

const heroContentVI = {
  title: "Giải pháp bao bì kim loại đáng tin cậy cho ngành thực phẩm",
  description:
    "Chúng tôi cung cấp các giải pháp bao bì kim loại chất lượng cao, đáp ứng tiêu chuẩn an toàn thực phẩm và độ bền, phù hợp cho ngành thực phẩm và đồ uống.",
  primaryText: "Xem sản phẩm",
  secondaryText: "Liên hệ ngay",
  backgroundImage: "https://lh3.googleusercontent.com/aida-public/...",
  stats: [
    { value: "2020", label: "NĂM THÀNH LẬP" },
    { value: "05", label: "NHÓM SẢN PHẨM" },
    { value: "ISO/FSSC", label: "TIÊU CHUẨN" },
    { value: "100%", label: "KHÁCH HÀNG" },
  ],
};

const aboutContentVI = {
  subtitle: "VỀ CHÚNG TÔI",
  title: "TỔNG QUAN DELTA SEIKAN",
  description1:
    "Được thành lập vào năm 2020, Delta Seikan Corporation tự hào là đơn vị tiên phong trong lĩnh vực sản xuất bao bì kim loại tại Việt Nam, phục vụ đa dạng các nhu cầu trong ngành thực phẩm và đồ uống.",
  description2: `Với triết lý "Khách hàng là trọng tâm", chúng tôi không ngừng cải tiến công nghệ và quy trình để mang đến những sản phẩm đạt chất lượng đỉnh cao, góp phần nâng tầm giá trị thương hiệu cho đối tác.`,
  tags: ["Bao bì kim loại", "Chất lượng cao"],
  image: hinh6,
};

const featureContentVI = [
  {
    title: "Tầm nhìn",
    desc: "Trở thành nhà sản xuất bao bì kim loại dung trong ngành thực phẩm hàng đầu tại Việt Nam.",
    image: mission,
  },
  {
    title: "Sứ mệnh",
    desc: "Cung cấp các giải pháp đáng tin cậy và bền vững để nâng cao chất lượng và dịch vụ.",
    image: vision,
  },
  {
    title: "Giá trị cốt lõi",
    image: values,
    tags:  ["Khách hàng là trung tâm", "Trung thực", "Hợp tác và làm việc nhóm", "Cam kết và chủ động"],
  },
];

const capabilityContentVI = {
  subheading: "HOẠT ĐỘNG",
  heading: "Năng lực sản xuất",
  items: [
    {
      title: "Phát triển sản phẩm",
      desc: "Tiến hành nghiên cứu, phát triển và thử nghiệm sản phẩm để đáp ứng nhu cầu thị trường, nâng cao chất lượng và hiệu quả của sản phẩm.",
      icon: <FiActivity />,
    },
    {
      title: "Quản lý sản xuất",
      desc: "Cung cấp các sản phẩm với chất lượng tốt nhất cho khách hàng với hệ thống sản xuất và quản lý tối ưu.",
      icon: <FiTool />,
    },
    {
      title: "Kiểm soát chất lượng",
      desc: "Chúng tôi luôn cam kết rằng tất cả các sản phẩm đều được kiểm tra để đáp ứng tiêu chuẩn chất lượng đã ký kết và tuân thủ hệ thống quản lý an toàn thực phẩm FSSC22000 trước khi giao hàng cho khách hàng.",
      icon: <FiShield />,
    },
    {
      title: "Bán hàng",
      desc: "Về hoạt động bán hàng, chúng tôi luôn cố gắng tìm hiểu nhu cầu của khách hàng và phát triển thị trường mới, cung cấp phản hồi cho nhóm R&D để bắt kịp xu hướng thị trường nhằm tạo ra các sản phẩm có chất lượng tốt nhất với giá cả cạnh tranh.",
      icon: <FiUsers />,
    },
  ],
};

const timelineContentVI = {
  heading: "Hành trình phát triển",
  items: [
    {
      year: "2020",
      title: "Thành lập công ty Delta Seikan",
      desc: "Chính thức đi vào hoạt động với tầm nhìn dẫn đầu ngành bao bì kim loại.",
    },
    {
      year: "2021",
      title: "Ra mắt dòng lon DRD",
      desc: "Thành công triển khai dây chuyền sản xuất lon DRD công nghệ cao.",
    },
    {
      year: "2022",
      title: "ISO 9001:2015 & HACCP",
      desc: "Đạt chứng chỉ quản lý chất lượng và an toàn thực phẩm quốc tế.",
    },
    {
      year: "2023",
      title: "FSSC 22000",
      desc: "Khẳng định chất lượng vượt trội với chứng nhận FSSC 22000 khắt khe.",
    },
  ],
};

//
// 🔥 COMPONENT
//

const HomePage = () => {
  return (
    <div className="page-snap-container">
      <Hero {...heroContentVI} />

      <AboutSection {...aboutContentVI} />

      <FeatureCards items={featureContentVI} />

      <CapabilitySection {...capabilityContentVI} />

      <TimelineSection {...timelineContentVI} />

      <Footer />
    </div>
  );
};

export default HomePage;
