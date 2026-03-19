import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import FeatureCards from "../components/FeatureCards";
import CapabilitySection from "../components/CapabilitySection";
import TimelineSection from "../components/TimelineSection";
import { FiEye } from "react-icons/fi";
import { FiTarget } from "react-icons/fi";
import { FiAward } from "react-icons/fi";
import { FiActivity } from "react-icons/fi"; // nghiên cứu
import { FiTool } from "react-icons/fi"; // sản xuất
import { FiShield } from "react-icons/fi"; // QC
import { FiUsers } from "react-icons/fi"; // kinh doanh

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
        title="Tổng quan về Delta Seikan"
        description1="Được thành lập vào năm 2020, Delta Seikan Corporation tự hào là đơn vị tiên phong trong lĩnh vực sản xuất bao bì kim loại tại Việt Nam, phục vụ đa dạng các nhu cầu trong ngành thực phẩm và đồ uống."
        description2={`Với triết lý "Khách hàng là trọng tâm", chúng tôi không ngừng cải tiến công nghệ và quy trình để mang đến những sản phẩm đạt chất lượng đỉnh cao, góp phần nâng tầm giá trị thương hiệu cho đối tác.`}
        tags={["Bao bì kim loại", "Chất lượng cao"]}
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuD2tD6nX3QS3P58MSyp_uPpqIoWJ1GYRFD6tXD_ohK10cAdXuzXkxnnKfsq_vsjQh-ym-AK4GrWllV4NIlfQqRt-mfgmDE2Aq3oaPktgDQYC6UxLXRy_yKGi5C76KV9IdwMKsSMTjzU09Vv_vvpsISFi8jPyKZPbjyRTUC6tgz1diU5E0uf_pZtQ5pNzJPSTTxqfMYwZWEG_u4aFPednjwHKc9Q64XQN96S8bGmbL3BpJbDyttkXWIjA6ks_GYiPzitcyIQO7CGwX4"
      />

      <FeatureCards
        items={[
          {
            title: "Tầm nhìn",
            desc: "Trở thành biểu tượng của sự tin cậy và chất lượng trong ngành sản xuất bao bì kim loại tại Đông Nam Á.",
            icon: <FiEye />,
          },
          {
            title: "Sứ mệnh",
            desc: "Cung cấp các giải pháp bao bì an toàn, thẩm mỹ và bảo vệ môi trường, song hành cùng sự phát triển của khách hàng.",
            icon: <FiTarget />,
          },
          {
            title: "Giá trị cốt lõi",
            icon: <FiAward />,
            tags: ["CHÍNH TRỰC", "SÁNG TẠO", "BỀN VỮNG", "TẬN TÂM"],
          },
        ]}
      />
      <CapabilitySection
        subheading="HOẠT ĐỘNG VẬN HÀNH"
        heading="Năng lực sản xuất toàn diện"
        items={[
          {
            title: "Nghiên cứu & Phát triển",
            desc: "Luôn cập nhật công nghệ vật liệu mới nhằm tối ưu hóa trọng lượng và độ bền bao bì.",
            icon: <FiActivity />,
          },
          {
            title: "Quản lý sản xuất",
            desc: "Hệ thống quản trị hiện đại đảm bảo tiến độ và công suất cung ứng quy mô lớn.",
            icon: <FiTool />,
          },
          {
            title: "QC & An toàn thực phẩm",
            desc: "Kiểm soát nghiêm ngặt theo tiêu chuẩn FSSC 22000 cho mọi lô sản phẩm.",
            icon: <FiShield />,
          },
          {
            title: "Chiến lược kinh doanh",
            desc: "Đồng hành cùng đối tác phát triển thị trường với chính sách linh hoạt.",
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
            title: "Ra mắt dòng DRD",
            desc: "Thành công triển khai dây chuyền sản xuất lon DRD công nghệ cao.",
          },
          {
            year: "2022",
            title: "ISO & HACCP",
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
