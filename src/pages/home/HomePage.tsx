import Hero from "./components/Hero/Hero";
import AboutSection from "./components/AboutSection/AboutSection";
import FeatureCards from "./components/FeatureCards/FeatureCards";
import CapabilitySection from "./components/CapabilitySection/CapabilitySection";
import TimelineSection from "./components/TimelineSection/TimelineSection";
import Footer from "@/components/layout/Footer/Footer";
import { useTranslation } from "react-i18next";

import { FiActivity, FiTool, FiShield, FiUsers } from "react-icons/fi";

import hinh6 from "@/assets/images/hinh6.JPG";
import mission from "@/assets/images/mission.png";
import vision from "@/assets/images/vision.png";
import values from "@/assets/images/values.png";

const HomePage = () => {
  const { t } = useTranslation("home");

  const heroData = {
    title: t("hero.title"),
    description: t("hero.description"),
    primaryText: t("hero.primaryText"),
    secondaryText: t("hero.secondaryText"),
    stats: [
      { value: "2020", label: t("hero.starts.founded") },
      { value: "05", label: t("hero.starts.groups") },
      { value: "ISO/FSSC", label: t("hero.starts.standard") },
      { value: "100%", label: t("hero.starts.customers") },
    ],
  };

  const aboutData = {
    subtitle: t("about.subtitle"),
    title: t("about.title"),
    description1: t("about.desc1"),
    description2: t("about.desc2"),
    tags: [t("about.tag1"), t("about.tag2")],
    image: hinh6,
  };

  const featureData = [
    {
      title: t("features.vision"),
      desc: t("features.visionDesc"),
      image: mission,
    },
    {
      title: t("features.mission"),
      desc: t("features.missionDesc"),
      image: vision,
    },
    {
      title: t("features.values"),
      image: values,
      tags: [
        t("features.v1"),
        t("features.v2"),
        t("features.v3"),
        t("features.v4"),
      ],
    },
  ];

  const capabilityData = {
    subheading: t("capability.sub"),
    heading: t("capability.title"),
    items: [
      {
        title: t("capability.r1"),
        desc: t("capability.r1Desc"),
        icon: <FiActivity />,
      },
      {
        title: t("capability.r2"),
        desc: t("capability.r2Desc"),
        icon: <FiTool />,
      },
      {
        title: t("capability.r3"),
        desc: t("capability.r3Desc"),
        icon: <FiShield />,
      },
      {
        title: t("capability.r4"),
        desc: t("capability.r4Desc"),
        icon: <FiUsers />,
      },
    ],
  };

  const timelineData = {
    heading: t("timeline.title"),
    items: [
      {
        year: "2020",
        title: t("timeline.y2020"),
        desc: t("timeline.y2020Desc"),
      },
      {
        year: "2021",
        title: t("timeline.y2021"),
        desc: t("timeline.y2021Desc"),
      },
      {
        year: "2022",
        title: t("timeline.y2022"),
        desc: t("timeline.y2022Desc"),
      },
      {
        year: "2023",
        title: t("timeline.y2023"),
        desc: t("timeline.y2023Desc"),
      },
    ],
  };

  return (
    <div className="page-snap-container">
      <Hero {...heroData} />
      <AboutSection {...aboutData} />
      <FeatureCards items={featureData} />
      <CapabilitySection {...capabilityData} />
      <TimelineSection {...timelineData} />
      <Footer />
    </div>
  );
};

export default HomePage;
