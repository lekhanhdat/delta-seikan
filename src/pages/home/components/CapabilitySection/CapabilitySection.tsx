import hinh8 from "@/assets/images/hinh8.jpg";
import "./CapabilitySection.css";

type CapabilityItem = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

type CapabilityProps = {
  heading: string;
  subheading: string;
  items: CapabilityItem[];
};

const CapabilitySection = ({
  heading,
  subheading,
  items,
}: CapabilityProps) => {
  return (
    <section className="capability-section">
      {/* BACKGROUND */}
      <img src={hinh8} alt="bg" className="capability-bg" />

      {/* OVERLAY */}
      <div className="capability-overlay" />

      {/* CONTENT */}
      <div className="capability-content">
        {/* SUBTITLE */}
        <p className="capability-subtitle">{subheading}</p>

        {/* TITLE */}
        <h2 className="capability-title">{heading}</h2>

        {/* GRID */}
        <div className="capability-grid">
          {items.map((item, i) => (
            <div key={i} className="capability-card group">
              {/* ICON */}
              <div className="capability-icon">{item.icon}</div>

              {/* TITLE */}
              <h3 className="capability-card-title">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="capability-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitySection;