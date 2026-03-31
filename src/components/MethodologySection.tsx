const MethodologySection = () => {
  const strategies = [
    "Estudos de caso e simulações clínicas",
    "Aulas práticas em laboratório e clínicas",
    "Discussões em grupo, seminários e rodas de conversa",
    "Recursos audiovisuais e plataformas digitais",
    "Avaliação formativa contínua",
  ];

  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Metodologia
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Aprendizagem Baseada em Problemas (ABP) — você no centro do processo,
            resolvendo casos reais e construindo conhecimento de forma colaborativa.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {strategies.map((s, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-5 text-left hover:border-primary/40 transition-colors shadow-sm"
              >
                <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-sm mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-sm text-foreground font-medium">{s}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a href="#lotes" className="cta-button">
              <span className="cta-button-shine" />
              <span className="relative flex items-center gap-2">🔥 GARANTA SUA VAGA — VAGAS LIMITADAS</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
