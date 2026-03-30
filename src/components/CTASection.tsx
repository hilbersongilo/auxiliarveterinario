const CTASection = () => {
  return (
    <section id="contato" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6">
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
            className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-lg px-10 py-4 neon-glow hover:brightness-110 transition-all"
          >
            Fale conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
