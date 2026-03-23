import { Radio, Clock, Wifi } from "lucide-react";

const stats = [
  { icon: Radio, value: "6", label: "Años al Aire" },
  { icon: Clock, value: "70s & 80s", label: "Rock Clásico" },
  { icon: Wifi, value: "24/7", label: "Online" },
];

const AboutSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: About text */}
        <div className="bg-card border border-border p-8 md:p-12">
          <h2 className="font-display text-3xl md:text-4xl text-gold glow-gold mb-6 tracking-wider">
            SOBRE NOSOTROS
          </h2>
          <p className="text-foreground/80 font-body leading-relaxed text-lg">
            Desde Guarenas, Venezuela, transmitiendo las leyendas del rock para el mundo.
            Somos la voz del rock clásico de los 70s y 80s, llevando la energía de Black Sabbath,
            Led Zeppelin, Deep Purple y más a cada rincón del planeta.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed mt-4">
            Nacimos con una misión: mantener viva la llama del rock pesado que definió una generación.
            Cada día, cada noche, las leyendas suenan aquí.
          </p>
        </div>

        {/* Right: Stats */}
        <div className="grid gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-6 bg-card border border-border p-6">
              <stat.icon className="w-8 h-8 text-gold shrink-0" />
              <div>
                <p className="font-display text-3xl md:text-4xl text-gold-glow glow-gold">{stat.value}</p>
                <p className="text-muted-foreground font-body text-sm tracking-wider uppercase">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
