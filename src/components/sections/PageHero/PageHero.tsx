import "./PageHero.css";

type PageHeroProps = {
  title: string;
  description: string;
  backgroundImage: string;
};

const PageHero = ({
  title,
  description,
  backgroundImage,
}: PageHeroProps) => {
  return (
    <section className="hero-section">

      {/* BACKGROUND */}
      <div className="hero-bg">
        <img
          src={backgroundImage}
          alt="hero"
          className="hero-img"
        />
      </div>

      {/* OVERLAY */}
      <div className="hero-overlay" />

      {/* CONTENT */}
      <div className="hero-content">
        <div className="hero-container">

          <h1 className="hero-title">{title}</h1>

          <div className="hero-line" />

          <p className="hero-desc">{description}</p>

        </div>
      </div>
    </section>
  );
};

export default PageHero;