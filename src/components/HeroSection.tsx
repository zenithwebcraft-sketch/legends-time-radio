import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Guarenas de noche"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/[0.65]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-block mb-8 animate-float">
          <span className="inline-block border-2 border-gold px-5 py-2 text-gold font-display text-sm tracking-[0.2em] uppercase rotate-[-2deg] opacity-90"
            style={{ textShadow: '0 0 10px hsl(43 52% 54% / 0.3)' }}>
            6 AÑOS EN EL AIRE 🎸
          </span>
        </div>

        {/* Logo Text */}
        <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-gold-glow tracking-wider leading-none mb-4 glow-gold">
          LEGENDS IN<br />THE TIME
        </h1>

        {/* Subtitle */}
        <p className="font-body text-foreground/70 text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase mb-10">
          Radio Online — Rock de los 70s y 80s
        </p>

        {/* Live Indicator */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="w-3 h-3 rounded-full bg-red-600 animate-pulse-live inline-block" />
          <span className="text-red-500 font-body font-semibold text-sm tracking-[0.2em] uppercase">
            En Vivo Ahora
          </span>
        </div>

        {/* CTA */}
        <a
          href="#player"
          className="inline-block border-2 border-gold bg-gold/10 text-gold font-display text-lg px-10 py-4 tracking-[0.15em] uppercase transition-all duration-300 hover:bg-gold/20 hover:shadow-[0_0_30px_hsl(43_52%_54%/0.3)]"
        >
          Escucha en Vivo
        </a>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
