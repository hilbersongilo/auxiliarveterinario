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
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-8">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-neon" />
            <span className="text-sm font-medium text-primary">Inscrições Abertas — Vagas Limitadas</span>
          </div>

          <p className="text-base md:text-lg text-muted-foreground font-medium tracking-wide uppercase mb-2">
            Curso de Extensão em
          </p>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tight leading-[0.9] mb-6">
            <span className="text-primary neon-text-glow">Auxiliar de</span>
            <br />
            <span className="text-primary neon-text-glow">Veterinário</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4">
            210 horas de formação presencial — 140h teórico-práticas + 70h de estágio supervisionado.
            Capacite-se para atuar em clínicas, hospitais veterinários, pet shops e muito mais.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-10">
            <span className="border border-border rounded-full px-3 py-1 bg-background/60">📍 Presencial</span>
            <span className="border border-border rounded-full px-3 py-1 bg-background/60">📅 10 meses</span>
            <span className="border border-border rounded-full px-3 py-1 bg-background/60">🎓 Certificação Unijaguaribe</span>
            <span className="border border-border rounded-full px-3 py-1 bg-background/60">🕐 Fins de semana</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#lotes"
              className="cta-button text-xl px-12 py-6"
            >
              <span className="cta-button-shine" />
              <span className="relative flex items-center gap-2">
                🔥 GARANTA SUA VAGA — VAGAS LIMITADAS
              </span>
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center rounded-xl border-2 border-primary/30 text-foreground font-heading font-medium text-lg px-8 py-5 hover:bg-primary/5 transition-colors"
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
