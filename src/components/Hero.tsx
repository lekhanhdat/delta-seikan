import { FiArrowRight } from "react-icons/fi";

type StatItem = {
  value: string;
  label: string;
};

type HeroProps = {
  title: string;
  description: string;
  primaryText: string;
  secondaryText: string;
  backgroundImage: string;
  stats: StatItem[];
};

const Hero = ({
  title,
  description,
  primaryText,
  secondaryText,
  backgroundImage,
  stats,
}: HeroProps) => {
  return (
    <section className="relative w-screen min-h-screen -mx-[calc(50vw-50%)] flex items-center">
      {/* Background */}
      <img
        src={backgroundImage}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient */}
      <>
        {/* lớp tối chung */}
        <div className="absolute inset-0 bg-[#0b1f3a]/40"></div>

        {/* gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081a30]/80 to-transparent"></div>
      </>

      {/* Content */}
      <div className="relative z-10 w-full px-16 py-20">
        <div className="max-w-xl">
          <h1 className="text-white text-5xl font-bold mb-6">{title}</h1>

          <p className="text-gray-200 mb-8">{description}</p>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-blue-600 px-6 py-3 text-white rounded-md">
              {primaryText}
              <FiArrowRight />
            </button>

            <button className="px-6 py-3 border border-white text-white rounded-md">
              {secondaryText}
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-0 left-0 w-full bg-white/10 backdrop-blur-md border-t border-white/20">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center py-6 px-10">
          {stats.map((item, index) => (
            <div key={index}>
              <p className="text-blue-500 font-bold text-xl">{item.value}</p>
              <p className="text-gray-200 text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
