import "./TimelineSection.css";

type TimelineItem = {
  year: string;
  title: string;
  desc: string;
};

type TimelineProps = {
  heading: string;
  items: TimelineItem[];
};

const TimelineSection = ({ heading, items }: TimelineProps) => {
  return (
    <section className="timeline-section">
      <div className="timeline-container">
        {/* TITLE */}
        <h2 className="timeline-heading">{heading}</h2>

        {/* TIMELINE */}
        <div className="timeline-wrapper">
          {/* LINE */}
          <div className="timeline-line-desktop"></div>
          <div className="timeline-line-mobile"></div>

          <div className="timeline-list">
            {items.map((item, i) => (
              <div key={i} className="timeline-item group">
                {/* YEAR */}
                <div
                  className={`timeline-year ${
                    i % 2 === 0 ? "bg-primary-dark" : "bg-accent"
                  }`}
                >
                  {item.year}
                </div>

                {/* CONTENT */}
                <div className="timeline-content">
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;