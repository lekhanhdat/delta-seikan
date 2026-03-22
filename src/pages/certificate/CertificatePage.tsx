import PageHero from "@/components/sections/PageHero/PageHero";
import hinh19 from "@/assets/images/hinh19.jpg";
import CertificateSection from "./components/CertificateSection/CertificateSection";
import CertificateHighlights from "./components/CertificateHighlights/CertificateHighlights";
import CertificateCta from "./components/CertificateCta/CertificateCta";
import { FiTarget, FiShield, FiCheckSquare } from "react-icons/fi";

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
    <div>
      <PageHero
        title="Chứng nhận"
        description="Hệ thống chứng nhận quốc tế khẳng định cam kết của chúng tôi về chất lượng, an toàn và sự bền vững trong sản xuất bao bì kim loại."
        backgroundImage={hinh19}
      />

      <CertificateSection />

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
    </div>
  );
};

export default CertificatePage;