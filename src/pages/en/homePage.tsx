import Hero from "../../components/sections/Hero";
import AboutSection from "../../components/sections/AboutSection";
import FeatureCards from "../../components/sections/FeatureCards";
import CapabilitySection from "../../components/sections/CapabilitySection";
import TimelineSection from "../../components/sections/TimelineSection";

import { FiActivity, FiTool, FiShield, FiUsers } from "react-icons/fi";

import hinh6 from "../../assets/images/hinh6.jpg";
import mission from "../../assets/images/mission.png";
import vision from "../../assets/images/vision.png";
import values from "../../assets/images/values.png";

const heroContent = {
  title: "Reliable Metal Packaging Solutions for the Food Industry",
  description:
    "Delta Seikan specializes in high-quality metal packaging solutions with a strong commitment to sustainability, innovation, and meeting the most demanding global standards.",
  primaryText: "View Products",
  secondaryText: "Contact Us",
  backgroundImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA_6Wxjk08SwcT7rR63rcVKXy2wZxtSTqUM9ggdJr3iHVJrRi9B-0VzusUyNCvkWiw29wIQy85qcGzpRtZaE9VmGb5aaQI2e8bOJeiu2cSvPiFf7veMDBx6QR_NQWT3Scl-EOWrUR6TrH619-RvgaLKyGW6UHabpvpQo5GKpfgstKojDo6M9lT-fwlg0sVbyc9SwhvWf89st-heCh94zbFEX-Ke-RQ8tRTSQeMwq6omjP9ZkCHN_V54-Ts6vIks-g1asarCuoTts5U",
  stats: [
    { value: "2020", label: "ESTABLISHED" },
    { value: "05", label: "MAIN PRODUCT GROUPS" },
    { value: "ISO/FSSC", label: "INTERNATIONAL STANDARDS" },
    { value: "100%", label: "CUSTOMER-CENTRIC APPROACH" },
  ],
};

const HomePage = () => {
  return (
    <div className="home-page z-0">
      
      <Hero {...heroContent} />

      {/* ABOUT */}
      <AboutSection
        subtitle="ABOUT US"
        title="DELTA SEIKAN CORPORATION OVERVIEW"
        description1="Established in 2020, Delta Seikan Corporation is a pioneering manufacturer of metal packaging in Vietnam, serving a wide range of needs in the food and beverage industry."
        description2={`With a customer-centric philosophy, we continuously improve our technology and processes to deliver premium-quality products, helping our partners enhance their brand value.`}
        tags={["Metal Packaging", "Premium Quality"]}
        image={hinh6}
      />

      {/* VISION / MISSION / VALUES */}
      <FeatureCards
        items={[
          {
            title: "Our Vision",
            desc: "Becoming the leading manufacturer of metal packaging for the food industry  in VIỆT NAM.",
            image: mission,
          },
          {
            title: "Our Mission",
            desc: "Offering reliable and sustainable solutions to improve quality and service .",
            image: vision,
          },
          {
            title: "Core Values",
            image: values,
            tags: [
              "Customer centricity",
              "Integrity",
              "Collaboration",
              "Commitment",
              "Innovation",
            ],
          },
        ]}
      />

      {/* CAPABILITY */}
      <CapabilitySection
        subheading="PRODUCTION ACTIVITIES"
        heading="Comprehensive Manufacturing Capabilities"
        items={[
          {
            title: "Product Development",
            desc: "Carry out research, development and testing the product to meet market needs, improve quality and efficiency of product.",
            icon: <FiActivity />,
          },
          {
            title: "Production Management",
            desc: "Providing the best quality products to customer with optimized production and management system.",
            icon: <FiTool />,
          },
          {
            title: "Quality Control & Food Safety",
            desc: "We always commit that all products are checked to meet the signed quality standard and comply with food safety management system FSSC22000 before delivering to customer .",
            icon: <FiShield />,
          },
          {
            title: "Sales Strategy",
            desc: "Regarding sales activities, we always effort to uncover consumer needs and developing new markets, providing feedback to R&D team to catch up market trends to create products with the best quality and competitive price.",
            icon: <FiUsers />,
          },
        ]}
      />

      {/* TIMELINE */}
      <TimelineSection
        heading="Development Journey"
        items={[
          {
            year: "2020",
            title: "ESTABLISHED DELTA SEIKAN CORPORATION",
            desc: "Delta Seikan Corporation was officially established with a vision to lead the metal packaging industry.",
          },
          {
            year: "2021",
            title: "LAUNCHING DRD CAN PRODUCTION LINE",
            desc: "Successfully introduced the first DRD can production line to the market.",
          },
          {
            year: "2022",
            title: "ACHIEVED ISO 9001:2015 & HACCP CERTIFICATION",
            desc: "Achieved international standards in quality management and food safety.",
          },
          {
            year: "2023",
            title: "ACHIEVED FSSC 22000 CERTIFICATION",
            desc: "Reinforced product excellence with the globally recognized FSSC 22000 certification.",
          },
        ]}
      />
    </div>
  );
};

export default HomePage;