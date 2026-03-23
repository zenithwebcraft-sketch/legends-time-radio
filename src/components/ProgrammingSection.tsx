const programs = [
  {
    name: "Riffs del Amanecer",
    time: "6:00 AM - 10:00 AM",
    description: "Despierta con los riffs más poderosos del rock clásico. La mejor selección para empezar el día con energía pura.",
  },
  {
    name: "La Hora Pesada",
    time: "8:00 PM - 12:00 AM",
    description: "Las canciones más pesadas y oscuras del heavy metal. Black Sabbath, Judas Priest, Iron Maiden y más.",
  },
  {
    name: "Leyendas en Vinilo",
    time: "2:00 PM - 6:00 PM",
    description: "Un viaje nostálgico por los álbumes clásicos del rock. Escucha discos completos como en los viejos tiempos.",
  },
];

const ProgrammingSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-gold glow-gold text-center mb-16 tracking-wider">
          PROGRAMACIÓN
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.name}
              className="bg-card border border-blood-red/30 p-8 transition-all duration-300 hover:border-blood-red/60 hover:shadow-[0_0_20px_hsl(0_100%_27%/0.15)] group"
            >
              <h3 className="font-display text-xl text-gold mb-2 tracking-wider group-hover:text-gold-glow transition-colors">
                {program.name}
              </h3>
              <p className="text-primary font-body text-sm font-semibold mb-4 tracking-wider">
                {program.time}
              </p>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammingSection;
