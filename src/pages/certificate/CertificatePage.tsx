import PageHero from "@/components/sections/PageHero/PageHero";
import CertificateSection from "./components/CertificateSection/CertificateSection";
import CertificateHighlights from "./components/CertificateHighlights/CertificateHighlights";
import CertificateCta from "./components/CertificateCta/CertificateCta";
import { FiTarget, FiShield, FiCheckSquare } from "react-icons/fi";
import hinh20 from "@/assets/images/hinh20.jpg";
import Footer from "@/components/layout/Footer/Footer";

const certificateSectionData = {
  heading: "Kiểm soát chất lượng cơ bản",
  items: [
    {
      title: "ISO 9001:2015",
      desc: "Quy trình vận hành được chuẩn hóa từ khâu nhập nguyên liệu đến sản phẩm hoàn thiện, đảm bảo chất lượng ổn định.",
    },
    {
      title: "FSSC 22000 Ver 6.0",
      desc: "Tiêu chuẩn an toàn thực phẩm quốc tế, kiểm soát rủi ro và đảm bảo sản phẩm đáp ứng yêu cầu nghiêm ngặt.",
    },
    {
      title: "HACCP",
      desc: "HACCP là hệ thống quản lý an toàn thực phẩm theo phương pháp phòng ngừa, tập trung vào nhận diện mối nguy và kiểm soát tại các điểm kiểm soát tới hạn (CCP) trong toàn bộ quy trình sản xuất bao bì tiếp xúc thực phẩm.",
    },
  ],
  tags: [
    "ISO 9001:2015",
    "FSSC 22000",
    "HACCP",
    "Active Production",
  ],
};

const highlightData = {
  heading: "Năng lực đảm bảo chất lượng toàn diện",
  subheading: "Tiêu chuẩn vận hành",
  items: [
    {
      icon: <FiTarget />,
      title: "Kiểm soát chất lượng",
      desc: "Hệ thống đo lường tự động có độ chính xác cao, kiểm soát dung sai ở mức micron cho từng lô sản phẩm lon 2 mảnh và 3 mảnh.",
    },
    {
      icon: <FiShield />,
      title: "An toàn thực phẩm",
      desc: "Lớp phủ tráng mặt trong tuân thủ tiêu chuẩn an toàn, không chứa BPA, đảm bảo tính tương thích cho thực phẩm và đồ uống.",
    },
    {
      icon: <FiCheckSquare />,
      title: "Tuân thủ tiêu chuẩn",
      desc: "Tuân thủ đầy đủ các yêu cầu kỹ thuật và quy định thương mại quốc tế cho bao bì kim loại xuất khẩu.",
    },
  ],
};

const ctaData = {
  title: "Sẵn sàng nâng tầm tiêu chuẩn sản phẩm của bạn?",
  description:
    "Delta Seikan đồng hành cùng doanh nghiệp trong các yêu cầu khắt khe về chất lượng, an toàn và khả năng xuất khẩu.",
  primaryLabel: "Liên hệ tư vấn",
  primaryTo: "/contact",
  secondaryLabel: "Xem sản phẩm",
  secondaryTo: "/products",
};

const CertificatePage = () => {
  return (
    <div className="page-snap-container">
      <PageHero
        title="Chứng nhận"
        description="Các chứng nhận quốc tế là minh chứng cho cam kết của chúng tôi trong việc duy trì tiêu chuẩn chất lượng, an toàn và phát triển bền vững trong toàn bộ quy trình sản xuất bao bì kim loại."
        backgroundImage={hinh20}
      />

      <CertificateSection
        image={hinh20}
        heading={certificateSectionData.heading}
        items={certificateSectionData.items}
        tags={certificateSectionData.tags}
      />

      <CertificateHighlights
        heading={highlightData.heading}
        subheading={highlightData.subheading}
        items={highlightData.items}
      />

      <CertificateCta
        title={ctaData.title}
        description={ctaData.description}
        primaryLabel={ctaData.primaryLabel}
        primaryTo={ctaData.primaryTo}
        secondaryLabel={ctaData.secondaryLabel}
        secondaryTo={ctaData.secondaryTo}
      />

      <Footer />
    </div>
  );
};

export default CertificatePage;
