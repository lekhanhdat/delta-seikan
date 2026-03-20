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
    <section className="relative w-full h-[280px] sm:h-[360px] md:h-[460px] overflow-hidden">

      {/* BACKGROUND */}
      <img
        src={backgroundImage}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* OVERLAY (đậm hơn + gradient đẹp hơn) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1f3a]/95 via-[#0b1f3a]/85 to-[#0b1f3a]/60 backdrop-blur-[2px]" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-4 sm:px-6 md:px-16 lg:px-24 max-w-[1000px] pt-10 md:pt-16">

          {/* TITLE */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            {title}
          </h1>

          {/* LINE DECOR */}
          <div className="w-16 h-[3px] bg-white/80 mb-4 md:mb-6 rounded-full" />

          {/* DESCRIPTION */}
          <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            {description}
          </p>

        </div>
      </div>
    </section>
  );
};

export default PageHero;