import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import hinh1 from "../assets/images/hinh1.jpg";
import hinh2 from "../assets/images/hinh2.jpg";
import hinh3 from "../assets/images/hinh3.jpg";
import hinh4 from "../assets/images/hinh4.jpg";
import hinh5 from "../assets/images/hinh2.jpg";

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
    <section className="relative w-screen min-h-[720px] md:min-h-screen -mx-[calc(50vw-50%)] overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Ảnh cũ */}
        <img
          src={images[prevIndex]}
          className="absolute inset-0 w-full h-full object-cover animate-slide-out"
        />

        {/* Ảnh mới */}
        <img
          src={images[index]}
          className="absolute inset-0 w-full h-full object-cover animate-slide-in"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0b1f3a]/40 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#081a30]/80 to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-full px-4 pt-32 pb-24 sm:px-6 md:px-10 lg:px-16 lg:py-20">
        <div className="max-w-xl">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">{title}</h1>

          <p className="text-white/90 text-sm sm:text-base mb-6 md:mb-8">{description}</p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="flex items-center justify-center gap-2 bg-primary-dark px-5 sm:px-6 py-3 text-white rounded-md hover:bg-primary transition-all duration-300">
              {primaryText}
              <FiArrowRight />
            </button>

            <button className="px-5 sm:px-6 py-3 border border-white text-white rounded-md hover:bg-primary-dark hover:border-primary-dark transition-all duration-300">
              {secondaryText}
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-0 left-0 w-full bg-white/10 backdrop-blur-md border-t border-white/20 z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center py-4 md:py-6 px-4 sm:px-6 md:px-10 gap-y-3">
          {stats.map((item, index) => (
            <div key={index}>
              <p className="text-white font-bold text-lg md:text-xl">
                {item.value}
              </p>
              <p className="text-white/90 text-[11px] md:text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;