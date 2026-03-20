import Hero from "../components/sections/Hero";
import AboutSection from "../components/sections/AboutSection";
import FeatureCards from "../components/sections/FeatureCards";
import CapabilitySection from "../components/sections/CapabilitySection";
import TimelineSection from "../components/sections/TimelineSection";
import { FiActivity } from "react-icons/fi"; // nghiên cứu
import { FiTool } from "react-icons/fi"; // sản xuất
import { FiShield } from "react-icons/fi"; // QC
import { FiUsers } from "react-icons/fi"; // kinh doanh
import hinh6 from "../assets/images/hinh6.jpg";
import mission from "../assets/images/mission.png";
import vision from "../assets/images/vision.png";
import values from "../assets/images/values.png";

const heroContentVI = {
  title: "Giải pháp bao bì kim loại đáng tin cậy cho ngành thực phẩm",
  description:
    "Delta Seikan chuyên sản xuất bao bì kim loại với định hướng chất lượng cao, bền vững, đáp ứng các tiêu chuẩn khắt khe nhất của thị trường toàn cầu.",
  primaryText: "Xem sản phẩm",
  secondaryText: "Liên hệ ngay",
  backgroundImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA_6Wxjk08SwcT7rR63rcVKXy2wZxtSTqUM9ggdJr3iHVJrRi9B-0VzusUyNCvkWiw29wIQy85qcGzpRtZaE9VmGb5aaQI2e8bOJeiu2cSvPiFf7veMDBx6QR_NQWT3Scl-EOWrUR6TrH619-RvgaLKyGW6UHabpvpQo5GKpfgstKojDo6M9lT-fwlg0sVbyc9SwhvWf89st-heCh94zbFEX-Ke-RQ8tRTSQeMwq6omjP9ZkCHN_V54-Ts6vIks-g1asarCuoTts5U",
  stats: [
    { value: "2020", label: "NĂM THÀNH LẬP" },
    { value: "05", label: "NHÓM SẢN PHẨM CHÍNH" },
    { value: "ISO/FSSC", label: "TIÊU CHUẨN QUỐC TẾ" },
    { value: "100%", label: "KHÁCH HÀNG LÀM TRỌNG TÂM" },
  ],
};

const HomePage = () => {
  return (
    <div className="home-page z-0">
      <Hero {...heroContentVI} />

      <AboutSection
        subtitle="VỀ CHÚNG TÔI"
        title="TỔNG QUAN VỀ CÔNG TY CỔ PHẦN DELTA SEIKAN"
        description1="Được thành lập vào năm 2020, Delta Seikan Corporation tự hào là đơn vị tiên phong trong lĩnh vực sản xuất bao bì kim loại tại Việt Nam, phục vụ đa dạng các nhu cầu trong ngành thực phẩm và đồ uống."
        description2={`Với triết lý "Khách hàng là trọng tâm", chúng tôi không ngừng cải tiến công nghệ và quy trình để mang đến những sản phẩm đạt chất lượng đỉnh cao, góp phần nâng tầm giá trị thương hiệu cho đối tác.`}
        tags={["Bao bì kim loại", "Chất lượng cao"]}
        image={hinh6}
      />

      <FeatureCards
        items={[
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
            tags: ["Khách hàng là trung tâm", "Trung thực", "Hợp tác và làm việc nhóm", "Cam kết và chủ động"],
          },
        ]}
      />
      <CapabilitySection
        subheading="HOẠT ĐỘNG SẢN XUẤT"
        heading="Năng lực sản xuất toàn diện"
        items={[
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
            title: "Kiểm soát chất lượng - ATTP",
            desc: "Chúng tôi luôn cam kết rằng tất cả các sản phẩm đều được kiểm tra để đáp ứng tiêu chuẩn chất lượng đã ký kết và tuân thủ hệ thống quản lý an toàn thực phẩm FSSC22000 trước khi giao hàng cho khách hàng.",
            icon: <FiShield />,
          },
          {
            title: "Chiến lược bán hàng",
            desc: "Về hoạt động bán hàng, chúng tôi luôn cố gắng tìm hiểu nhu cầu của khách hàng và phát triển thị trường mới, cung cấp phản hồi cho nhóm R&D để bắt kịp xu hướng thị trường nhằm tạo ra các sản phẩm có chất lượng tốt nhất với giá cả cạnh tranh.",
            icon: <FiUsers />,
          },
        ]}
      />

      <TimelineSection
        heading="Hành trình phát triển"
        items={[
          {
            year: "2020",
            title: "Thành lập Corporation",
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
        ]}
      />
    </div>
  );
};

export default HomePage;
