import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import hinh1 from "@/assets/images/hinh1.jpg";
import hinh2 from "@/assets/images/hinh2.jpg";
import hinh3 from "@/assets/images/hinh3.jpg";
import hinh4 from "@/assets/images/hinh4.jpg";
import hinh5 from "@/assets/images/hinh2.jpg";

import "./Hero.css";

type StatItem = {
  value: string;
  label: string;
};

type HeroProps = {
  title: string;
  description: string;
  primaryText: string;
  secondaryText: string;
  stats: StatItem[];
};

const images = [hinh1, hinh2, hinh3, hinh4, hinh5];

const Hero = ({
  title,
  description,
  primaryText,
  secondaryText,
  stats,
}: HeroProps) => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="hero-section">
      {/* Background */}
      <div className="hero-bg">
        <img
          src={images[prevIndex]}
          alt="hero background previous"
          className="hero-img animate-slide-out"
        />
        <img
          src={images[index]}
          alt="hero background current"
          className="hero-img animate-slide-in"
        />
      </div>

      {/* Overlay */}
      <div className="hero-overlay-dark" />
      <div className="hero-overlay-gradient" />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-container">
          <h1 className="hero-title">{title}</h1>

          <p className="hero-desc">{description}</p>

          <div className="hero-buttons">
            <button className="hero-btn-primary">
              {primaryText}
              <FiArrowRight />
            </button>

            <button className="hero-btn-secondary">
              {secondaryText}
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="hero-stats">
        <div className="hero-stats-grid">
          {stats.map((item, i) => (
            <div key={i}>
              <p className="hero-stat-value">{item.value}</p>
              <p className="hero-stat-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;