type TimelineItem = {
  year: string;
  title: string;
  desc: string;
};

type TimelineProps = {
  heading: string;
  items: TimelineItem[];
};

const TimelineSection = ({ heading, items }: TimelineProps) => {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TITLE */}
        <h2 className="text-3xl font-bold text-[#142a4a] mb-12 relative inline-block">
          {heading}
          <span className="absolute left-0 -bottom-3 w-16 h-[3px] bg-blue-600"></span>
        </h2>

        {/* TIMELINE */}
        <div className="relative flex justify-between items-start">
          
          {/* LINE */}
          <div className="absolute top-8 left-0 w-full h-[2px] bg-gray-300"></div>

          {items.map((item, i) => (
            <div key={i} className="relative flex flex-col items-start w-full max-w-[220px]">
              
              {/* YEAR BOX */}
              <div
                className={`
                  w-20 h-20 flex items-center justify-center rounded-2xl text-white font-semibold text-lg mb-6
                  ${i % 2 === 0 ? "bg-[#142a4a]" : "bg-blue-600"}
                `}
              >
                {item.year}
              </div>

              {/* CONTENT */}
              <h4 className="font-semibold text-[#142a4a] mb-2">
                {item.title}
              </h4>

              <p className="text-[16px] text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;