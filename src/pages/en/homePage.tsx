import Hero from "../../components/Hero";
import AboutSection from "../../components/AboutSection";
import FeatureCards from "../../components/FeatureCards";
import CapabilitySection from "../../components/CapabilitySection";
import TimelineSection from "../../components/TimelineSection";

import { FiEye, FiTarget, FiAward } from "react-icons/fi";
import { FiActivity, FiTool, FiShield, FiUsers } from "react-icons/fi";

// HERO CONTENT
const heroContentEN = {
  title: "Reliable metal packaging solutions for the food industry",
  description:
    "Delta Seikan specializes in manufacturing high-quality, sustainable metal packaging that meets the most demanding global standards.",
  primaryText: "View products",
  secondaryText: "Contact us",
  backgroundImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA_6Wxjk08SwcT7rR63rcVKXy2wZxtSTqUM9ggdJr3iHVJrRi9B-0VzusUyNCvkWiw29wIQy85qcGzpRtZaE9VmGb5aaQI2e8bOJeiu2cSvPiFf7veMDBx6QR_NQWT3Scl-EOWrUR6TrH619-RvgaLKyGW6UHabpvpQo5GKpfgstKojDo6M9lT-fwlg0sVbyc9SwhvWf89st-heCh94zbFEX-Ke-RQ8tRTSQeMwq6omjP9ZkCHN_V54-Ts6vIks-g1asarCuoTts5U",
  stats: [
    { value: "2020", label: "YEAR ESTABLISHED" },
    { value: "05", label: "MAIN PRODUCT GROUPS" },
    { value: "ISO/FSSC", label: "INTERNATIONAL STANDARDS" },
    { value: "100%", label: "CUSTOMER-CENTRIC" },
  ],
};

const HomePage = () => {
  return (
    <div className="home-page z-0">
      
      {/* HERO */}
      <Hero {...heroContentEN} />

      {/* ABOUT */}
      <AboutSection
        subtitle="ABOUT US"
        title="Overview of Delta Seikan"
        description1="Established in 2020, Delta Seikan Corporation is proud to be a pioneer in metal packaging manufacturing in Vietnam, serving diverse needs in the food and beverage industry."
        description2={`With the philosophy "Customer is at the center", we continuously innovate technology and processes to deliver high-quality products, contributing to enhancing our partners' brand value.`}
        tags={["Metal Packaging", "High Quality"]}
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuD2tD6nX3QS3P58MSyp_uPpqIoWJ1GYRFD6tXD_ohK10cAdXuzXkxnnKfsq_vsjQh-ym-AK4GrWllV4NIlfQqRt-mfgmDE2Aq3oaPktgDQYC6UxLXRy_yKGi5C76KV9IdwMKsSMTjzU09Vv_vvpsISFi8jPyKZPbjyRTUC6tgz1diU5E0uf_pZtQ5pNzJPSTTxqfMYwZWEG_u4aFPednjwHKc9Q64XQN96S8bGmbL3BpJbDyttkXWIjA6ks_GYiPzitcyIQO7CGwX4"
      />

      {/* FEATURES */}
      <FeatureCards
        items={[
          {
            title: "Vision",
            desc: "To become a symbol of trust and quality in the metal packaging industry in Southeast Asia.",
            icon: <FiEye />,
          },
          {
            title: "Mission",
            desc: "Providing safe, aesthetic, and environmentally friendly packaging solutions while growing alongside our customers.",
            icon: <FiTarget />,
          },
          {
            title: "Core Values",
            icon: <FiAward />,
            tags: ["INTEGRITY", "INNOVATION", "SUSTAINABILITY", "DEDICATION"],
          },
        ]}
      />

      {/* CAPABILITY */}
      <CapabilitySection
        subheading="OPERATIONS"
        heading="Comprehensive Manufacturing Capabilities"
        items={[
          {
            title: "Research & Development",
            desc: "Continuously updating material technologies to optimize weight and durability.",
            icon: <FiActivity />,
          },
          {
            title: "Production Management",
            desc: "Modern management systems ensuring progress and large-scale supply capacity.",
            icon: <FiTool />,
          },
          {
            title: "QC & Food Safety",
            desc: "Strict quality control following FSSC 22000 standards for every batch.",
            icon: <FiShield />,
          },
          {
            title: "Business Strategy",
            desc: "Partnering with clients to expand markets with flexible policies.",
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
            title: "Corporation Established",
            desc: "Officially launched with a vision to lead the metal packaging industry.",
          },
          {
            year: "2021",
            title: "DRD Product Launch",
            desc: "Successfully implemented high-tech DRD can production lines.",
          },
          {
            year: "2022",
            title: "ISO & HACCP",
            desc: "Achieved international certifications in quality and food safety.",
          },
          {
            year: "2023",
            title: "FSSC 22000",
            desc: "Affirmed superior quality with strict FSSC 22000 certification.",
          },
        ]}
      />
    </div>
  );
};

export default HomePage;