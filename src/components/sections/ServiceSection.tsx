type ServiceItem = {
  title: string;
  desc: string;
  icon?: string;
};

type ServiceSectionProps = {
  title: string;
  description: string;
  items: ServiceItem[];
  badgeText?: string;
  badgeSubText?: string;
};

const ServiceSection = ({
  title,
  description,
  items,
  badgeText,
  badgeSubText,
}: ServiceSectionProps) => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12">
      
      <div className="max-w-5xl">
        
        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
          {title}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-700 mb-8 leading-relaxed">
          {description}
        </p>

        {/* ITEMS */}
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 font-bold">
                {item.icon || "✓"}
              </div>

              <h4 className="font-semibold mb-2">{item.title}</h4>

              <p className="text-sm text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* BADGE */}
        {(badgeText || badgeSubText) && (
          <div className="mt-10 inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow">
            <span className="text-lg">{badgeText}</span>
            <span className="text-sm opacity-90">
              {badgeSubText}
            </span>
          </div>
        )}

      </div>
    </section>
  );
};

export default ServiceSection;