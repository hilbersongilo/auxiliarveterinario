import heroImage from "@/assets/hero-vet.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Auxiliar veterinário cuidando de animal"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-8">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-neon" />
            <span className="text-sm font-medium text-primary">Inscrições Abertas — Vagas Limitadas</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight leading-[0.95] mb-6">
            <span className="text-foreground">Curso de Extensão em</span>
            <br />
            <span className="text-primary neon-text-glow">Auxiliar de</span>
            <br />
            <span className="text-primary neon-text-glow">Veterinário</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4">
            210 horas de formação presencial — 140h teórico-práticas + 70h de estágio supervisionado.
            Capacite-se para atuar em clínicas, hospitais veterinários, pet shops e muito mais.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-10">
            <span className="border border-border rounded-full px-3 py-1">📍 Presencial</span>
            <span className="border border-border rounded-full px-3 py-1">📅 10 meses</span>
            <span className="border border-border rounded-full px-3 py-1">🎓 Certificação Unijaguaribe</span>
            <span className="border border-border rounded-full px-3 py-1">🕐 Fins de semana</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#lotes"
              className="group relative inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground font-heading font-bold text-lg px-10 py-5 neon-glow hover:brightness-110 transition-all animate-pulse-neon overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative flex items-center gap-2">
                🔥 GARANTA SUA VAGA — VAGAS LIMITADAS
              </span>
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center rounded-xl border border-border text-foreground font-heading font-medium text-lg px-8 py-5 hover:bg-secondary transition-colors"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
