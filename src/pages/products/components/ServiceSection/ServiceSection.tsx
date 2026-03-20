import "./ServiceSection.css";

type ServiceItem = {
  title: string;
  desc: string;
  icon?: string;
};

type ServiceSectionProps = {
  title: string;
  description: string;
  items: ServiceItem[];
  badgeText?: string;
  badgeSubText?: string;
};

const ServiceSection = ({
  title,
  description,
  items,
  badgeText,
  badgeSubText,
}: ServiceSectionProps) => {
  return (
    <section className="service-section">
      
      <div className="service-container">
        
        <h2 className="service-title">{title}</h2>

        <p className="service-desc">{description}</p>

        <div className="service-grid">
          {items.map((item, index) => (
            <div key={index} className="service-card">
              
              <div className="service-icon">
                {item.icon || "✓"}
              </div>

              <h4 className="service-item-title">
                {item.title}
              </h4>

              <p className="service-item-desc">
                {item.desc}
              </p>

            </div>
          ))}
        </div>

        {(badgeText || badgeSubText) && (
          <div className="service-badge">
            <span className="service-badge-text">
              {badgeText}
            </span>
            <span className="service-badge-sub">
              {badgeSubText}
            </span>
          </div>
        )}

      </div>
    </section>
  );
};

export default ServiceSection;