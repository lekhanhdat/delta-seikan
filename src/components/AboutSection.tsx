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
    <section className="py-24 bg-[#f6f7fb]">
      <div className="grid md:grid-cols-2 gap-16 items-center px-20">
        
        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src={image}
            className="w-full h-[360px] object-cover rounded-2xl"
          />

          {/* 🔵 BADGE */}
          <div className="absolute -bottom-10 -right-10 w-60 h-28 bg-[#142a4a] rounded-2xl flex items-center justify-center z-20 shadow-lg">
            <span className="text-blue-400 font-semibold text-xs tracking-[2px] uppercase">
              METAL PACKAGING VIETNAM
            </span>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-3">
            {subtitle}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#142a4a] mb-6">
            {title}
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed ">
            {description1}
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {description2}
          </p>

          {/* TAGS giống UI */}
          <div className="flex gap-4 flex-wrap">
            {tags.map((tag, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 bg-[#eef1f6] rounded-full text-[#142a4a] text-sm font-semibold shadow-sm"
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