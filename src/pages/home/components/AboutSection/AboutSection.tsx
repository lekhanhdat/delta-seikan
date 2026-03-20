import { FiSettings } from "react-icons/fi";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import "./AboutSection.css";

type AboutProps = {
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  tags: string[];
  image: string;
};

const AboutSection = ({
  title,
  subtitle,
  description1,
  description2,
  tags,
  image,
}: AboutProps) => {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* LEFT IMAGE */}
        <div className="about-image-wrapper">
          <img
            src={image}
            alt="about"
            className="about-image"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <p className="about-subtitle">{subtitle}</p>

          <h2 className="about-title">{title}</h2>

          <p className="about-desc">{description1}</p>
          <p className="about-desc">{description2}</p>

          {/* TAGS */}
          <div className="about-tags">
            {tags.map((tag, i) => (
              <div key={i} className="about-tag">
                {i === 0 ? (
                  <FiSettings className="about-tag-icon" />
                ) : (
                  <HiOutlineBadgeCheck className="about-tag-icon" />
                )}

                <span className="about-tag-text">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;