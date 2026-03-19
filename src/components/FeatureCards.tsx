type Card = {
  title: string;
  desc?: string;
  icon: React.ReactNode;
  tags?: string[]; // 👉 dùng cho "Giá trị cốt lõi"
};

type FeatureProps = {
  items: Card[];
};

const FeatureCards = ({ items }: FeatureProps) => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
          >
            {/* ICON BOX */}
            <div className="w-14 h-14 bg-[#eef1f6] rounded-xl flex items-center justify-center mb-6">
              <div className="text-blue-600 text-2xl">
                {item.icon}
              </div>
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold text-[#142a4a] mb-4">
              {item.title}
            </h3>

            {/* DESC */}
            {item.desc && (
              <p className="text-gray-600 text-[16px] leading-relaxed mb-4">
                {item.desc}
              </p>
            )}

            {/* TAGS (cho card 3) */}
            {item.tags && (
              <div className="flex flex-wrap gap-2 mt-2">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-3 py-1 bg-[#eef1f6] text-[#142a4a] rounded-md font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default FeatureCards;