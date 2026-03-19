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
    <section className="py-24 bg-[#f6f7fb] text-center">
      {/* SUBTITLE */}
      <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-3">
        {subheading}
      </p>

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#142a4a] mb-14">
        {heading}
      </h2>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-8 text-left shadow-sm hover:shadow-md transition 
             border-b-[4px] border-blue-600"
          >
            {/* ICON */}
            <div className="text-blue-600 text-2xl mb-5">{item.icon}</div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-[#142a4a] mb-3">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-[16px] text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CapabilitySection;
