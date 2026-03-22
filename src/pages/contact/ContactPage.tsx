import PageHero from "@/components/sections/PageHero/PageHero";
import contacthinhanh from "@/assets/images/contacthinhanh.png";
import ContactContentSection from "@/pages/contact/components/ContactContentSection/ContactContentSection";

const ContactPage = () => {
  const heroData = {
    title: "Liên hệ",
    description:
      "Liên hệ với Delta Seikan để được tư vấn nhanh chóng về các giải pháp bao bì kim loại và nhận hỗ trợ thông tin từ đội ngũ chuyên gia của chúng tôi.",
    backgroundImage: contacthinhanh,
  };

  const contactInfoData = {
    title: "Thông tin liên hệ",
    factoryLabel: "Nhà máy",
    factoryAddress:
      "Lô A, cụm công nghiệp Tam Lập, xã Phú Giáo, Thành phố Hồ Chí Minh, Việt Nam",
    officeLabel: "Văn phòng",
    officeAddress:
      "602/32 Điện Biên Phủ, Phường Thạnh Mỹ Tây, Thành phố Hồ Chí Minh, Việt Nam",
    emailLabel: "Email",
    email: "Info@deltaseikan.com",
    phoneLabel: "Số điện thoại liên hệ",
    phones: ["0901838385", "02749999886"],
    taxCodeLabel: "Mã số thuế",
    taxCode: "3702894924",
  };

  const mapData = {
    iframeTitle: "Delta Seikan Map",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.6935979615296!2d106.84348807590094!3d11.283918988897362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174bf3c5b488649%3A0xdeb5d082d17d2726!2zQ8O0bmcgdHkgY-G7lSBwaOG6p24gRGVsdGEgU2Vpa2Fu!5e0!3m2!1svi!2s!4v1774086352673!5m2!1svi!2s",
    note: "Địa chỉ nhà máy: Lô A, cụm công nghiệp Tam Lập, xã Phú Giáo, Thành phố Hồ Chí Minh, Việt Nam.",
  };

  return (
    <div>
      <PageHero {...heroData} />
      <ContactContentSection contactInfo={contactInfoData} mapInfo={mapData} />
    </div>
  );
};

export default ContactPage;
