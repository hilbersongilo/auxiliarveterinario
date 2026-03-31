import vetAnimals from "@/assets/vet-animals.jpg";

const CTASection = () => {
  return (
    <section id="contato" className="relative py-24 md:py-32 border-t border-border overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={vetAnimals} alt="Animais" width={1920} height={600} loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
            Pronto para transformar
            <br />
            <span className="text-primary neon-text-glow">sua carreira?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Garanta sua vaga no curso de Auxiliar de Veterinário da Unijaguaribe.
            Formação completa com certificação universitária.
          </p>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button text-xl px-12 py-6"
          >
            <span className="cta-button-shine" />
            <span className="relative flex items-center gap-2">🔥 QUERO MINHA VAGA</span>
          </a>
          <p className="mt-4 text-sm text-primary font-heading font-semibold neon-text-glow">⚡ Vagas limitadas — Não perca essa oportunidade!</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
