type ProductSectionProps = {
  title: string;
  description: string;

  features?: {
    title: string;
    desc: string;
  }[];

  images: string[];
  specImage?: string;
};

const ProductSection = ({
  title,
  description,
  features,
  images,
  specImage,
}: ProductSectionProps) => {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* LEFT TEXT */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          {title}
        </h2>

        {/* underline accent */}
        <div className="w-16 h-[3px] bg-blue-600 mb-6 rounded-full" />

        <p className="text-gray-600 mb-8 leading-relaxed max-w-xl">
          {description}
        </p>

        {/* FEATURES */}
        {features && (
          <div className="grid grid-cols-2 gap-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition border"
              >
                <h4 className="font-semibold text-gray-800 mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT IMAGE LAYOUT */}
      <div className="grid grid-cols-2 gap-4 items-stretch">
        
        {/* LEFT: image list */}
        <div className="flex flex-col gap-4 h-full">
          {images.map((img, index) => (
            <div
              key={index}
              className="flex-1 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group"
            >
              <img
                src={img}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* RIGHT: spec image */}
        {specImage && (
          <div className="h-full rounded-xl overflow-hidden shadow-lg border bg-white">
            <img
              src={specImage}
              className="w-full h-full object-contain p-2"
            />
          </div>
        )}

      </div>
    </section>
  );
};

export default ProductSection;