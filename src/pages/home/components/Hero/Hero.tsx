import { useEffect, useState, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

import hinh1 from "@/assets/images/hinh1.JPG";
import hinh2 from "@/assets/images/hinh2.JPG";
import hinh3 from "@/assets/images/hinh3.jpg";
import hinh4 from "@/assets/images/hinh4.jpg";

import styles from "./Hero.module.css";

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

const images = [hinh1, hinh2, hinh3, hinh4];

const Hero = ({
  title,
  description,
  primaryText,
  secondaryText,
  stats,
}: HeroProps) => {
  const { pathname } = useLocation();
  const basePath = pathname.startsWith("/en") ? "/en" : "";
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(indexRef.current);
      indexRef.current = (indexRef.current + 1) % images.length;
      setIndex(indexRef.current);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroSection}>
      
      {/* Background */}
      <div className={styles.heroBg}>
        <img
          src={images[prevIndex]}
          alt="Hero background previous"
          className={`${styles.heroImg} ${styles.slideOut}`}
          loading="lazy"
          decoding="async"
        />
        <img
          src={images[index]}
          alt="Hero background current"
          className={`${styles.heroImg} ${styles.slideIn}`}
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Overlay */}
      <div className={styles.heroOverlayDark} />
      <div className={styles.heroOverlayGradient} />

      {/* Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroContainer}>
          
          <h1 className={styles.heroTitle}>{title}</h1>

          <p className={styles.heroDesc}>{description}</p>

          <div className={styles.heroButtons}>
            <Link to={`${basePath}/products`} className={styles.heroBtnPrimary}>
              {primaryText}
              <FiArrowRight />
            </Link>

            <Link to={`${basePath}/contact`} className={styles.heroBtnSecondary}>
              {secondaryText}
            </Link>
          </div>

        </div>
      </div>

      {/* Stats */}
      <div className={styles.heroStats}>
        <div className={styles.heroStatsGrid}>
          {stats.map((item, i) => (
            <div key={i}>
              <p className={styles.heroStatValue}>{item.value}</p>
              <p className={styles.heroStatLabel}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;
