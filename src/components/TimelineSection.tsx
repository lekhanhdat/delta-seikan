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
    <section className="py-14 md:py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-dark mb-8 md:mb-16 relative inline-block underline decoration-blue-400/50 underline-offset-8">
          {heading}
        </h2>

        {/* TIMELINE */}
        <div className="relative">
          {/* LINE */}
          <div className="hidden md:block absolute top-[42px] left-0 w-full h-[2px] bg-blue-400/50"></div>
          <div className="md:hidden absolute top-0 left-[38px] w-[2px] h-full bg-blue-400/40"></div>

          <div className="flex flex-col md:flex-row md:justify-between items-start gap-5 md:gap-6">
            {items.map((item, i) => (
              <div
                key={i}
                className="group relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center w-full md:max-w-[240px] gap-4 md:gap-0"
              >
                {/* YEAR BOX */}
                <div
                  className={`
                    w-16 h-16 md:w-20 md:h-20 flex shrink-0 items-center justify-center rounded-2xl text-white font-semibold text-base md:text-lg mb-0 md:mb-6
                    transition-all duration-300 shadow-md z-10
                    ${i % 2 === 0 ? "bg-primary-dark" : "bg-accent"}
                  `}
                >
                  {item.year}
                </div>

                {/* CONTENT */}
                <div className="bg-white rounded-xl p-4 md:p-5 shadow-md w-full h-full transition-all duration-300 group-hover:shadow-lg">
                  <h4 className="font-semibold text-[#142a4a] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
