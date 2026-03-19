import { FiSettings } from "react-icons/fi";
import { HiOutlineBadgeCheck } from "react-icons/hi";

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
    <section className="py-14 md:py-20 lg:py-24 bg-[#f6f7fb]">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center px-4 sm:px-6 md:px-10 lg:px-20">
        
        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src={image}
            className="w-full h-[240px] sm:h-[300px] md:h-[340px] lg:h-[360px] object-cover rounded-2xl"
          />

          {/* 🔵 BADGE */}
          {/* <div className="absolute -bottom-10 -right-10 w-60 h-28 bg-[#142a4a] rounded-2xl flex items-center justify-center z-20 shadow-lg">
            <span className="text-blue-400 font-semibold text-xs tracking-[2px] uppercase">
              METAL PACKAGING VIETNAM
            </span>
          </div> */}
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-primary text-sm sm:text-base md:text-lg font-semibold tracking-widest uppercase mb-2 md:mb-3">
            {subtitle}
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-dark mb-4 md:mb-6 leading-tight">
            {title}
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed ">
            {description1}
          </p>

          <p className="text-gray-600 text-sm sm:text-base mb-5 md:mb-6 leading-relaxed">
            {description2}
          </p>

          {/* TAGS giống UI */}
          <div className="flex gap-3 md:gap-4 flex-wrap justify-start">
            {tags.map((tag, i) => (
              <div
                key={i}
                className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 bg-[#eef1f6] rounded-full text-[#142a4a] text-xs sm:text-sm font-semibold shadow-sm"
              >
                {/* ICON cố định */}
                {i === 0 ? (
                  <FiSettings className="text-lg" />
                ) : (
                  <HiOutlineBadgeCheck className="text-lg" />
                )}

                {/* TEXT */}
                <span className="tracking-wide uppercase">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;