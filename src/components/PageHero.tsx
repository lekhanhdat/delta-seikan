type PageHeroProps = {
  title: string;
  description: string;
  backgroundImage: string;
};

const PageHero = ({
  title,
  description,
  backgroundImage,
}: PageHeroProps) => {
  return (
    <section className="relative w-full h-[280px] sm:h-[340px] md:h-[420px] overflow-hidden">
      
      {/* BACKGROUND */}
      <img
        src={backgroundImage}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a4d]/90 via-[#0f2a4d]/80 to-[#0f2a4d]/70" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        
        {/* ❗ KHÔNG mx-auto */}
        <div className="px-4 sm:px-6 md:px-16 lg:px-24 max-w-[1000px] pt-12 md:pt-16">
          
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-6 leading-tight">
            {title}
          </h1>

          <p className="text-gray-200 text-sm sm:text-base md:text-xl leading-relaxed max-w-2xl">
            {description}
          </p>

        </div>
      </div>
    </section>
  );
};

export default PageHero;