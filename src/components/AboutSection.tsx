import { Radio, Clock, Wifi } from "lucide-react";

const cards = [
  {
    icon: Radio,
    title: "Rock Clásico",
    description: "Las mejores canciones de los 70s y 80s. Desde Black Sabbath hasta Led Zeppelin."
  },
  {
    icon: Clock,
    title: "24/7 Online",
    description: "Transmitiendo las leyendas del rock las 24 horas del día, los 7 días de la semana."
  },
  {
    icon: Wifi,
    title: "Desde Guarenas",
    description: "Conectando Venezuela con el mundo a través del rock pesado que definió una generación."
  }
];

const AboutSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-gold glow-gold text-center mb-16 tracking-wider">
          SOBRE NOSOTROS
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#1a1a1a] border border-[#C9A84C] rounded-lg p-8 transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.2)]"
            >
              <card.icon className="w-6 h-6 text-[#C9A84C] mb-4" />
              <h3 className="font-display text-xl text-gold mb-3 tracking-wider">
                {card.title}
              </h3>
              <p className="text-foreground/80 font-body text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
