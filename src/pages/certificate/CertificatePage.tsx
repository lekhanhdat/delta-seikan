import PageHero from "@/components/sections/PageHero/PageHero";
import CertificateSection from "./components/CertificateSection/CertificateSection";
import CertificateHighlights from "./components/CertificateHighlights/CertificateHighlights";
import CertificateCta from "./components/CertificateCta/CertificateCta";
import { FiTarget, FiShield, FiCheckSquare } from "react-icons/fi";
import hinh20 from "@/assets/images/hinh20.jpg";
import Footer from "@/components/layout/Footer/Footer";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const CertificatePage = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation("certificate");
  const basePath = pathname.startsWith("/en") ? "/en" : "";

  const certificateSectionData = useMemo(() => ({
    heading: t("sections.quality.heading"),
    items: [
      {
        title: t("sections.quality.items.iso.title"),
        desc: t("sections.quality.items.iso.desc"),
      },
      {
        title: t("sections.quality.items.fssc.title"),
        desc: t("sections.quality.items.fssc.desc"),
      },
      {
        title: t("sections.quality.items.haccp.title"),
        desc: t("sections.quality.items.haccp.desc"),
      },
    ],
    tags: t("sections.quality.tags", { returnObjects: true }) as string[],
  }), [t]);

  const highlightData = useMemo(() => ({
    heading: t("sections.highlights.heading"),
    subheading: t("sections.highlights.subheading"),
    items: [
      {
        icon: <FiTarget />,
        title: t("sections.highlights.items.control.title"),
        desc: t("sections.highlights.items.control.desc"),
      },
      {
        icon: <FiShield />,
        title: t("sections.highlights.items.safety.title"),
        desc: t("sections.highlights.items.safety.desc"),
      },
      {
        icon: <FiCheckSquare />,
        title: t("sections.highlights.items.compliance.title"),
        desc: t("sections.highlights.items.compliance.desc"),
      },
    ],
  }), [t]);

  const ctaData = useMemo(() => ({
    title: t("sections.cta.title"),
    description: t("sections.cta.description"),
    primaryLabel: t("sections.cta.primaryLabel"),
    primaryTo: `${basePath}/contact`,
    secondaryLabel: t("sections.cta.secondaryLabel"),
    secondaryTo: `${basePath}/products`,
  }), [basePath, t]);

  return (
    <div className="page-snap-container">
      <PageHero
        title={t("hero.title")}
        description={t("hero.description")}
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
