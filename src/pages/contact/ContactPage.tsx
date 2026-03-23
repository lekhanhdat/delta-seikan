import PageHero from "@/components/sections/PageHero/PageHero";
import contacthinhanh from "@/assets/images/contacthinhanh.png";
import ContactContentSection from "@/pages/contact/components/ContactContentSection/ContactContentSection";
import Footer from "@/components/layout/Footer/Footer";
import styles from "./ContactPage.module.css";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

const ContactPage = () => {
  const { t } = useTranslation("contact");

  const heroData = useMemo(() => ({
    title: t("hero.title"),
    description: t("hero.description"),
    backgroundImage: contacthinhanh,
  }), [t]);

  const contactInfoData = useMemo(() => ({
    title: t("info.title"),
    factoryLabel: t("info.factoryLabel"),
    factoryAddress: t("info.factoryAddress"),
    officeLabel: t("info.officeLabel"),
    officeAddress: t("info.officeAddress"),
    emailLabel: t("info.emailLabel"),
    email: "Info@deltaseikan.com",
    phoneLabel: t("info.phoneLabel"),
    phones: ["0901838385", "02749999886"],
    taxCodeLabel: t("info.taxCodeLabel"),
    taxCode: "3702894924",
  }), [t]);

  const mapData = useMemo(() => ({
    iframeTitle: "Delta Seikan Map",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.6935979615296!2d106.84348807590094!3d11.283918988897362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174bf3c5b488649%3A0xdeb5d082d17d2726!2zQ8O0bmcgdHkgY-G7lSBwaOG6p24gRGVsdGEgU2Vpa2Fu!5e0!3m2!1svi!2s!4v1774086352673!5m2!1svi!2s",
    note: t("map.note"),
  }), [t]);

  return (
    <div className="page-snap-container">
      <PageHero {...heroData} />
      <div className={styles.contactSection}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full ${styles.container}`}>
          <ContactContentSection contactInfo={contactInfoData} mapInfo={mapData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
