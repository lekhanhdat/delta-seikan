type Card = {
  title: string;
  desc?: string;
  image: string;
  tags?: string[];
};

type FeatureProps = {
  items: Card[];
};

// 👉 function tách chữ: "Tầm nhìn" -> ["Tầm", "nhìn"]
const splitTitle = (text: string) => {
  const words = text.split(" ");
  const mid = Math.ceil(words.length / 2);

  return {
    first: words.slice(0, mid).join(" "),
    second: words.slice(mid).join(" "),
  };
};

const FeatureCards = ({ items }: FeatureProps) => {
  return (
    <section className="py-14 md:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 px-4 sm:px-6">
        {items.map((item, i) => {
          const { first, second } = splitTitle(item.title);

          return (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {/* ICON */}
                <div className="w-16 h-16 flex items-center justify-center mb-4 md:mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* TITLE (2 màu) */}
                <h3 className="text-base sm:text-lg font-bold tracking-wide mb-3 md:mb-4 uppercase">
                  <span className="text-primary-dark">{first} </span>
                  {second && <span className="text-accent">{second}</span>}
                </h3>
              </div>

              {/* DESC */}
              {item.desc && (
                <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-4">
                  {item.desc}
                </p>
              )}

              {/* TAGS */}
              {item.tags && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-3 py-1 bg-[#eef1f6] text-primary-dark rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureCards;
