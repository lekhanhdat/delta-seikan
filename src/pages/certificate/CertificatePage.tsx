import PageHero from "@/components/sections/PageHero/PageHero";
import hinh19 from "@/assets/images/hinh19.JPG";
import CertificateSection from "./components/CertificateSection/CertificateSection";

const CertificatePage = () => {
  return (
    <div>
      <PageHero
        title="Chứng nhận"
        description="Hệ thống chứng nhận quốc tế khẳng định cam kết của chúng tôi về chất lượng, an toàn và sự bền vững trong sản xuất bao bì kim loại."
        backgroundImage={hinh19}
      />

      <CertificateSection />
    </div>
  );
};

export default CertificatePage;
