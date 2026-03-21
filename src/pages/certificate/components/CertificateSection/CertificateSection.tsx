import styles from "./CertificateSection.module.css";
import hinh20 from "@/assets/images/hinh20.jpg";
import CertificateImage from "../CertificateImage/CertificateImage";
import CertificateContent from "../CertificateContent/CertificateContent";

const CertificateSection = () => {
  const data = {
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
    ],
    tags: ["ISO 9001:2015", "FSSC 22000", "Active Production"],
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <CertificateImage image={hinh20} />

        <CertificateContent
          heading={data.heading}
          items={data.items}
          tags={data.tags}
        />
      </div>
    </section>
  );
};

export default CertificateSection;