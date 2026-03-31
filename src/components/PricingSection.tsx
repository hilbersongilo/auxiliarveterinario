const lots = [
  {
    name: "1º Lote",
    installments: "10x de R$320",
    detail: "matrícula + 9 parcelas",
    period: "06/04 a 18/04/2026",
    startDate: new Date("2026-04-06"),
    endDate: new Date("2026-04-18"),
  },
  {
    name: "2º Lote",
    installments: "10x de R$350",
    detail: "matrícula + 9 parcelas",
    period: "19/04 a 26/04/2026",
    startDate: new Date("2026-04-19"),
    endDate: new Date("2026-04-26"),
  },
  {
    name: "3º Lote",
    installments: "10x de R$380",
    detail: "matrícula + 9 parcelas",
    period: "26/04 a 10/05/2026",
    startDate: new Date("2026-04-26"),
    endDate: new Date("2026-05-10"),
  },
];

const PricingSection = () => {
  const now = new Date();

  return (
    <section id="lotes" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Investimento
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Escolha o lote com melhor condição. Quanto antes, menor o valor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {lots.map((lot) => {
            const isActive = now >= lot.startDate && now <= lot.endDate;
            const isPast = now > lot.endDate;

            return (
              <div
                key={lot.name}
                className={`relative rounded-2xl border-2 p-8 flex flex-col items-center text-center transition-all duration-500 ${
                  isActive
                    ? "border-primary bg-primary/5 neon-border-glow animate-pulse-neon"
                    : "border-border bg-card dim-card"
                }`}
              >
                {isActive && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary text-primary-foreground text-xs font-bold px-4 py-1 uppercase tracking-wider neon-glow">
                    Ativo agora
                  </div>
                )}

                <h3 className={`text-2xl font-heading font-bold mb-2 ${isActive ? "text-primary neon-text-glow" : "text-muted-foreground"}`}>
                  {lot.name}
                </h3>

                <p className={`text-4xl font-heading font-bold mb-1 ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                  {lot.installments}
                </p>

                <p className={`text-sm mb-6 ${isActive ? "text-muted-foreground" : "text-muted-foreground/60"}`}>
                  {lot.detail}
                </p>

                <div className={`w-full rounded-lg py-3 px-4 text-sm font-medium mb-6 ${isActive ? "bg-primary/10 text-primary border border-primary/30" : "bg-muted text-muted-foreground"}`}>
                  📅 {lot.period}
                </div>

                {isActive ? (
                  <a href="#contato" className="cta-button w-full text-base py-3">
                    <span className="cta-button-shine" />
                    <span className="relative">🔥 Matricule-se Agora</span>
                  </a>
                ) : isPast ? (
                  <span className="w-full inline-flex items-center justify-center rounded-lg bg-muted text-muted-foreground font-heading font-medium py-3">
                    Encerrado
                  </span>
                ) : (
                  <span className="w-full inline-flex items-center justify-center rounded-lg border border-border text-muted-foreground font-heading font-medium py-3">
                    Em breve
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a href="#contato" className="cta-button">
            <span className="cta-button-shine" />
            <span className="relative flex items-center gap-2">🔥 GARANTA SUA VAGA — VAGAS LIMITADAS</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
