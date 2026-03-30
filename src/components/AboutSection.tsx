const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Sobre o Curso
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            O curso de Extensão em Auxiliar de Veterinário é destinado a pessoas com idade mínima de 18 anos,
            interessadas em adquirir conhecimentos e habilidades para atuar no apoio às atividades
            médico-veterinárias e no cuidado com animais. Formação pela{" "}
            <span className="text-primary font-semibold">Unijaguaribe — Centro Universitário Multiversa do Jaguaribe</span>.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              { icon: "🏥", title: "Modalidade", desc: "100% Presencial" },
              { icon: "⏱️", title: "Carga Horária", desc: "210 horas (140h teórico-práticas + 70h estágio)" },
              { icon: "📅", title: "Duração", desc: "10 meses — aulas aos finais de semana" },
              { icon: "🕐", title: "Horário", desc: "Sábado e Domingo, 08h às 17h" },
              { icon: "📜", title: "Certificação", desc: "Média ≥ 7,0 e 75% de presença" },
              { icon: "🤝", title: "Parcerias", desc: "Hospital Vet. Animalzão e Clínica Planeta Animal" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start rounded-xl border border-border bg-card p-5">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-3xl font-heading font-bold text-foreground mb-6">
            Grade Curricular
          </h3>
          <div className="rounded-xl border border-border overflow-hidden">
            {[
              { name: "Introdução à Medicina Veterinária e Anatomia e Fisiologia Animal", hours: "20h" },
              { name: "Administração e Atendimento em Clínica e Pet Shop", hours: "20h" },
              { name: "Biossegurança, Manejo e Bem-Estar Animal", hours: "20h" },
              { name: "Clínica e Enfermagem Veterinária", hours: "20h" },
              { name: "Assistência Cirúrgica", hours: "20h" },
              { name: "Nutrição e Laboratório Clínico Veterinário", hours: "20h" },
              { name: "Saúde Pública, Zoonoses e Práticas Profissionais", hours: "20h" },
              { name: "Estágio Supervisionado", hours: "70h" },
            ].map((item, i) => (
              <div
                key={item.name}
                className={`flex items-center justify-between px-6 py-4 ${
                  i % 2 === 0 ? "bg-card" : "bg-muted/30"
                } ${i < 7 ? "border-b border-border" : ""}`}
              >
                <span className="text-foreground font-medium">{item.name}</span>
                <span className="text-primary font-heading font-bold shrink-0 ml-4">{item.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
