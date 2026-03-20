import hinh8 from "../../assets/images/hinh8.jpg";

type CapabilityItem = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

type CapabilityProps = {
  heading: string;
  subheading: string;
  items: CapabilityItem[];
};

const CapabilitySection = ({ heading, subheading, items }: CapabilityProps) => {
  return (
    <section className="relative py-14 md:py-20 lg:py-28 text-center overflow-hidden">
      {/* BACKGROUND (RÕ NÉT FULL WIDTH) */}
      <img
        src={hinh8}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* overlay nhẹ cho dễ đọc chữ */}
      <div className="absolute inset-0 bg-black/30" />

      {/* CONTENT */}
      <div className="relative z-10 px-4 sm:px-6">
        {/* SUBTITLE */}
        <p className="text-white/80 text-sm sm:text-base md:text-lg font-semibold tracking-widest uppercase mb-2 md:mb-3">
          {subheading}
        </p>

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 md:mb-14">
          {heading}
        </h2>

        {/* GRID */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-0 sm:px-2 md:px-4 lg:px-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="
                group
                rounded-2xl p-5 md:p-6 lg:p-8 text-left
                bg-white/10
                backdrop-blur-xl
                border border-white/20
                shadow-[0_8px_30px_rgba(0,0,0,0.2)]
                
                transition-all duration-[300ms]
                
                hover:bg-white/80
                hover:shadow-2xl
                hover:-translate-y-2
              "
            >
              {/* ICON */}
              <div className="text-white text-xl md:text-2xl mb-4 md:mb-5 transition group-hover:text-primary-dark">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3 transition group-hover:text-primary-dark group-hover:font-bold">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-sm md:text-[15px] text-white/80 leading-relaxed transition group-hover:text-primary-dark">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitySection;
